import React, { useState } from 'react';

const EMAIL = 'z-daniele@hotmail.com';

type FormState = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  budget: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormState, string>>;

const initialState: FormState = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  budget: '',
  message: '',
};

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_PATTERN = /^[0-9+()\-\s]{6,}$/;

const validate = (values: FormState): FormErrors => {
  const errors: FormErrors = {};

  if (values.firstName.trim().length < 2) errors.firstName = 'Bitte gib deinen Vornamen an.';
  if (values.lastName.trim().length < 2) errors.lastName = 'Bitte gib deinen Nachnamen an.';

  if (!values.email.trim()) {
    errors.email = 'Bitte gib deine E-Mail-Adresse an.';
  } else if (!EMAIL_PATTERN.test(values.email.trim())) {
    errors.email = 'Das sieht nicht nach einer gültigen E-Mail-Adresse aus.';
  }

  if (values.phone.trim() && !PHONE_PATTERN.test(values.phone.trim())) {
    errors.phone = 'Das sieht nicht nach einer gültigen Handynummer aus.';
  }

  if (values.message.trim().length < 10) {
    errors.message = 'Erzähl mir bitte kurz von deinem Projekt (mind. 10 Zeichen).';
  }

  return errors;
};

const fieldClass =
  'w-full bg-transparent border-b border-white/20 focus:border-[#A58B68] outline-none py-3 text-[15px] text-[#F5F2ED] placeholder:text-[#A6A19A]/60 transition-colors duration-500';

const Contact: React.FC = () => {
  const [values, setValues] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Partial<Record<keyof FormState, boolean>>>({});
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [serverError, setServerError] = useState<string | null>(null);

  const handleChange = (field: keyof FormState) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const nextValues = { ...values, [field]: e.target.value };
    setValues(nextValues);
    // Keep already-touched fields' error messages in sync while typing,
    // instead of only clearing them on the next blur/submit.
    if (touched[field]) setErrors(validate(nextValues));
  };

  const handleBlur = (field: keyof FormState) => () => {
    setTouched((t) => ({ ...t, [field]: true }));
    setErrors(validate({ ...values }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate(values);
    setErrors(validationErrors);
    setTouched({
      firstName: true,
      lastName: true,
      email: true,
      phone: true,
      budget: true,
      message: true,
    });

    if (Object.keys(validationErrors).length > 0) return;

    setStatus('sending');
    setServerError(null);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      });
      const result = await res.json().catch(() => null);

      if (!res.ok || !result?.ok) {
        setServerError(result?.error || 'Die Anfrage konnte nicht gesendet werden.');
        setStatus('error');
        return;
      }

      setStatus('success');
      setValues(initialState);
      setTouched({});
    } catch {
      setServerError('Keine Verbindung zum Server. Bitte versuch es erneut oder schreib mir direkt per E-Mail.');
      setStatus('error');
    }
  };

  const errorFor = (field: keyof FormState) => (touched[field] ? errors[field] : undefined);

  return (
    <section id="kontakt" className="relative py-28 lg:py-44 bg-[#050505] border-t border-white/10 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[1200px] rounded-full bg-[#A58B68]/[0.04] blur-3xl" />
      </div>

      <div className="relative max-w-[900px] mx-auto px-6 lg:px-10">
        <div className="text-center max-w-2xl mx-auto reveal mb-16">
          <p className="label-caps mb-10">Kontakt</p>
          <h2 className="font-serif-display text-[44px] sm:text-[64px] lg:text-[88px] text-[#F5F2ED] leading-[1.0] mb-8">
            Lass uns gemeinsam<br />
            <span className="italic text-[#E7DDD0]">etwas Besonderes erschaffen.</span>
          </h2>
          <p className="text-[16px] lg:text-[18px] text-[#A6A19A] leading-[1.8] font-light">
            Erzähl mir kurz von deiner Idee – ich melde mich persönlich bei dir zurück.
          </p>
        </div>

        <form onSubmit={handleSubmit} noValidate className="reveal">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-8">
            <div>
              <label htmlFor="firstName" className="label-caps block mb-3">
                Vorname *
              </label>
              <input
                id="firstName"
                type="text"
                value={values.firstName}
                onChange={handleChange('firstName')}
                onBlur={handleBlur('firstName')}
                placeholder="Dein Vorname"
                className={fieldClass}
                aria-invalid={Boolean(errorFor('firstName'))}
              />
              {errorFor('firstName') && (
                <p className="mt-2 text-[12px] text-[#C97B63]">{errorFor('firstName')}</p>
              )}
            </div>

            <div>
              <label htmlFor="lastName" className="label-caps block mb-3">
                Nachname *
              </label>
              <input
                id="lastName"
                type="text"
                value={values.lastName}
                onChange={handleChange('lastName')}
                onBlur={handleBlur('lastName')}
                placeholder="Dein Nachname"
                className={fieldClass}
                aria-invalid={Boolean(errorFor('lastName'))}
              />
              {errorFor('lastName') && (
                <p className="mt-2 text-[12px] text-[#C97B63]">{errorFor('lastName')}</p>
              )}
            </div>

            <div>
              <label htmlFor="email" className="label-caps block mb-3">
                E-Mail-Adresse *
              </label>
              <input
                id="email"
                type="email"
                value={values.email}
                onChange={handleChange('email')}
                onBlur={handleBlur('email')}
                placeholder="du@beispiel.ch"
                className={fieldClass}
                aria-invalid={Boolean(errorFor('email'))}
              />
              {errorFor('email') && <p className="mt-2 text-[12px] text-[#C97B63]">{errorFor('email')}</p>}
            </div>

            <div>
              <label htmlFor="phone" className="label-caps block mb-3">
                Handynummer
              </label>
              <input
                id="phone"
                type="tel"
                value={values.phone}
                onChange={handleChange('phone')}
                onBlur={handleBlur('phone')}
                placeholder="+41 79 123 45 67"
                className={fieldClass}
                aria-invalid={Boolean(errorFor('phone'))}
              />
              {errorFor('phone') && <p className="mt-2 text-[12px] text-[#C97B63]">{errorFor('phone')}</p>}
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="budget" className="label-caps block mb-3">
                Ungefähres Budget
              </label>
              <input
                id="budget"
                type="text"
                value={values.budget}
                onChange={handleChange('budget')}
                onBlur={handleBlur('budget')}
                placeholder="z. B. CHF 500–1000, oder noch offen"
                className={fieldClass}
              />
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="message" className="label-caps block mb-3">
                Nachricht – worum geht es? *
              </label>
              <textarea
                id="message"
                rows={5}
                value={values.message}
                onChange={handleChange('message')}
                onBlur={handleBlur('message')}
                placeholder="Erzähl mir von deinem Projekt: Art des Shootings, gewünschter Zeitraum, Ort, Idee …"
                className={`${fieldClass} resize-none`}
                aria-invalid={Boolean(errorFor('message'))}
              />
              {errorFor('message') && (
                <p className="mt-2 text-[12px] text-[#C97B63]">{errorFor('message')}</p>
              )}
            </div>
          </div>

          <div className="mt-12 flex flex-col sm:flex-row sm:items-center gap-6">
            <button
              type="submit"
              disabled={status === 'sending'}
              className="group inline-flex items-center justify-center gap-4 px-8 py-5 lg:px-10 lg:py-6 bg-[#F5F2ED] text-[#050505] hover:bg-[#E7DDD0] transition-all duration-500 text-[11px] lg:text-[12px] tracking-[0.22em] uppercase font-medium disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {status === 'sending' ? 'Wird gesendet …' : 'Anfrage senden'}
              <span className="w-5 h-px bg-current group-hover:w-9 transition-all duration-500" />
            </button>
            <a href={`mailto:${EMAIL}`} className="link-underline text-[14px] tracking-[0.12em] text-[#F5F2ED]">
              {EMAIL}
            </a>
          </div>

          <p className="mt-6 text-[12px] text-[#A6A19A]/80 font-light">
            * Pflichtfelder. Deine Anfrage wird direkt an Daniele weitergeleitet.
          </p>

          {status === 'success' && (
            <p className="mt-4 text-[13px] text-[#A58B68]">
              Danke! Deine Anfrage ist angekommen – ich melde mich so schnell wie möglich bei dir.
            </p>
          )}
          {status === 'error' && (
            <p className="mt-4 text-[13px] text-[#C97B63]">
              {serverError} Alternativ erreichst du mich direkt an{' '}
              <a href={`mailto:${EMAIL}`} className="link-underline">
                {EMAIL}
              </a>
              .
            </p>
          )}
        </form>

        <div className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-px bg-white/10 border-y border-white/10 max-w-4xl mx-auto">
          <div className="bg-[#050505] p-8">
            <p className="label-caps mb-3">Kontakt</p>
            <a href={`mailto:${EMAIL}`} className="text-[14px] text-[#F5F2ED] link-underline break-all">
              {EMAIL}
            </a>
          </div>
          <div className="bg-[#050505] p-8">
            <p className="label-caps mb-3">Sprache</p>
            <p className="text-[14px] text-[#F5F2ED]">Deutsch · Schweiz</p>
          </div>
          <div className="bg-[#050505] p-8">
            <p className="label-caps mb-3">Verfügbar für</p>
            <p className="text-[14px] text-[#F5F2ED]">Projekte & Sessions</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
