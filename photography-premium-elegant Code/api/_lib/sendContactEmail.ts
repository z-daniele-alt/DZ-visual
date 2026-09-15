import { Resend } from 'resend';

export type ContactPayload = {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  budget?: string;
  message: string;
};

export type SendResult = {
  ok: boolean;
  /** HTTP status the caller should respond with (always set, success or error). */
  status: number;
  id?: string;
  error?: string;
};

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(payload: Partial<ContactPayload>): string | null {
  if (!payload.firstName || payload.firstName.trim().length < 2) return 'Vorname fehlt oder ist zu kurz.';
  if (!payload.lastName || payload.lastName.trim().length < 2) return 'Nachname fehlt oder ist zu kurz.';
  if (!payload.email || !EMAIL_PATTERN.test(payload.email.trim())) return 'Ungültige E-Mail-Adresse.';
  if (!payload.message || payload.message.trim().length < 10) return 'Nachricht fehlt oder ist zu kurz.';
  return null;
}

/**
 * Sends a contact-form submission via Resend to CONTACT_EMAIL.
 * Shared between the local Vite dev middleware and the production
 * serverless function (api/contact.ts) so both stay in sync.
 */
export async function sendContactEmail(payload: Partial<ContactPayload>): Promise<SendResult> {
  const validationError = validate(payload);
  if (validationError) {
    return { ok: false, status: 400, error: validationError };
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_EMAIL;

  if (!apiKey) {
    return { ok: false, status: 500, error: 'RESEND_API_KEY ist nicht konfiguriert.' };
  }
  if (!to) {
    return { ok: false, status: 500, error: 'CONTACT_EMAIL ist nicht konfiguriert.' };
  }

  const { firstName, lastName, email, phone, budget, message } = payload as ContactPayload;

  const resend = new Resend(apiKey);

  const text = [
    `Vorname: ${firstName}`,
    `Nachname: ${lastName}`,
    `E-Mail: ${email}`,
    `Handynummer: ${phone?.trim() || '–'}`,
    `Ungefähres Budget: ${budget?.trim() || '–'}`,
    '',
    'Nachricht:',
    message,
  ].join('\n');

  try {
    const result = await resend.emails.send({
      from: 'DZ Visuals Website <onboarding@resend.dev>',
      to,
      replyTo: email,
      subject: `Neue Projektanfrage von ${firstName} ${lastName}`,
      text,
    });

    if (result.error) {
      return { ok: false, status: 502, error: result.error.message ?? 'Resend hat den Versand abgelehnt.' };
    }

    return { ok: true, status: 200, id: result.data?.id };
  } catch (err) {
    return { ok: false, status: 502, error: err instanceof Error ? err.message : 'Unbekannter Fehler beim Versand.' };
  }
}
