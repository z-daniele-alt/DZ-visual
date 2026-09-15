import { defineConfig, loadEnv, type Plugin } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

/**
 * Dev-only middleware that mounts the same /api/contact handler used in
 * production (api/contact.ts) directly inside the Vite dev server, so
 * `npm run dev` alone is enough to test the contact form end-to-end.
 */
function contactApiDevMiddleware(): Plugin {
  return {
    name: "contact-api-dev-middleware",
    configureServer(server) {
      server.middlewares.use("/api/contact", async (req, res) => {
        if (req.method !== "POST") {
          res.statusCode = 405;
          res.end();
          return;
        }
        let raw = "";
        req.on("data", (chunk) => (raw += chunk));
        req.on("end", async () => {
          try {
            const { sendContactEmail } = await import("./api/_lib/sendContactEmail");
            const payload = raw ? JSON.parse(raw) : {};
            const result = await sendContactEmail(payload);
            res.statusCode = result.status;
            res.setHeader("Content-Type", "application/json");
            res.end(JSON.stringify(result));
          } catch (err) {
            res.statusCode = 500;
            res.setHeader("Content-Type", "application/json");
            res.end(JSON.stringify({ ok: false, status: 500, error: "Serverfehler im Dev-Middleware." }));
          }
        });
      });
    },
  };
}

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // Load .env / .env.local (RESEND_API_KEY, CONTACT_EMAIL) into process.env
  // for the dev middleware above — these are server-only and never exposed
  // to client code (no VITE_ prefix, never referenced in src/).
  const env = loadEnv(mode, process.cwd(), "");
  process.env.RESEND_API_KEY = process.env.RESEND_API_KEY ?? env.RESEND_API_KEY;
  process.env.CONTACT_EMAIL = process.env.CONTACT_EMAIL ?? env.CONTACT_EMAIL;

  return {
    server: {
      host: "::",
      port: 8080,
    },
    plugins: [react(), contactApiDevMiddleware()].filter(Boolean),
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
  };
});
