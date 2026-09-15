import type { IncomingMessage, ServerResponse } from 'http';
import { sendContactEmail, type ContactPayload } from './_lib/sendContactEmail.js';

/**
 * Vercel-style serverless function (Node runtime). Auto-detected by Vercel
 * when deployed from this repo's /api folder — no extra config needed.
 * For local development, the same sendContactEmail() logic is mounted at
 * the same path by the Vite dev middleware in vite.config.ts.
 */
export default async function handler(
  req: IncomingMessage & { method?: string; body?: unknown },
  res: ServerResponse
) {
  if (req.method !== 'POST') {
    res.statusCode = 405;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ ok: false, error: 'Method not allowed' }));
    return;
  }

  let payload: Partial<ContactPayload>;
  try {
    payload = typeof req.body === 'string' ? JSON.parse(req.body) : (req.body as Partial<ContactPayload>) ?? {};
  } catch {
    res.statusCode = 400;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ ok: false, error: 'Ungültiger Request-Body.' }));
    return;
  }

  const result = await sendContactEmail(payload);
  res.statusCode = result.ok ? 200 : result.status;
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify(result));
}
