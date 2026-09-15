import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Footer: React.FC = () => {
  const location = useLocation();
  const isHome = location.pathname === '/';
  const year = new Date().getFullYear();

  const handleHashClick = (e: React.MouseEvent, hash: string) => {
    if (isHome) {
      e.preventDefault();
      const el = document.getElementById(hash);
      if (el) window.scrollTo({ top: el.offsetTop - 80, behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative bg-[#050505] border-t border-white/10 pt-20 lg:pt-28 pb-10">
      <div className="max-w-[1360px] mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-20">
          {/* Wordmark */}
          <div className="md:col-span-5">
            <Link to="/" className="inline-block">
              <span className="font-serif-display text-[44px] lg:text-[56px] text-[#F5F2ED] italic block leading-none">
                DZ Visuals
              </span>
            </Link>
            <p className="label-caps mt-5 !text-[#A6A19A]">
              Fotografie & visueller Content Creation
            </p>
            <p className="mt-10 text-[14px] text-[#A6A19A] font-light leading-relaxed max-w-sm">
              Visuelle Geschichten mit Charakter. Emotion. Präsenz.
            </p>
          </div>

          {/* Nav */}
          <div className="md:col-span-3">
            <p className="label-caps mb-6">Navigation</p>
            <ul className="space-y-3">
              {[
                { label: 'Arbeiten', href: 'arbeiten' },
                { label: 'Leistungen', href: 'leistungen' },
                { label: 'Ablauf', href: 'ablauf' },
                { label: 'Kontakt', href: 'kontakt' },
              ].map((l) => (
                <li key={l.href}>
                  <Link
                    to={`/#${l.href}`}
                    onClick={(e) => handleHashClick(e, l.href)}
                    className="link-underline text-[14px] text-[#F5F2ED]/85 hover:text-[#F5F2ED]"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div className="md:col-span-2">
            <p className="label-caps mb-6">Rechtliches</p>
            <ul className="space-y-3">
              <li>
                <Link to="/impressum" className="link-underline text-[14px] text-[#F5F2ED]/85 hover:text-[#F5F2ED]">
                  Impressum
                </Link>
              </li>
              <li>
                <Link to="/datenschutz" className="link-underline text-[14px] text-[#F5F2ED]/85 hover:text-[#F5F2ED]">
                  Datenschutz
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-2">
            <p className="label-caps mb-6">Kontakt</p>
            <a
              href="mailto:z-daniele@hotmail.com?subject=Projektanfrage%20an%20DZ%20Visuals"
              className="link-underline text-[14px] text-[#F5F2ED] break-all"
            >
              z-daniele@hotmail.com
            </a>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row gap-4 md:items-center md:justify-between">
          <p className="text-[12px] text-[#A6A19A] tracking-wide">
            © {year} DZ Visuals. Alle Rechte vorbehalten.
          </p>
          <p className="text-[11px] text-[#A6A19A]/70 tracking-[0.18em] uppercase">
            Cinematic Photography · Schweiz
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
