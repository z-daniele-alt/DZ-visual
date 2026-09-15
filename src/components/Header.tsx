import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const navItems = [
  { label: 'Arbeiten', href: '#arbeiten' },
  { label: 'Leistungen', href: '#leistungen' },
  { label: 'Über DZ Visuals', href: '#ueber' },
  { label: 'Ablauf', href: '#ablauf' },
  { label: 'Kontakt', href: '#kontakt' },
];

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    if (!isHome) {
      window.location.href = '/' + href;
      return;
    }
    const id = href.replace('#', '');
    const el = document.getElementById(id);
    if (el) {
      window.scrollTo({ top: el.offsetTop - 80, behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
          scrolled || menuOpen || !isHome
            ? 'bg-[#050505]/70 backdrop-blur-xl border-b border-white/10'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-[1360px] mx-auto px-6 lg:px-10 h-[72px] lg:h-[88px] flex items-center justify-between">
          {/* Wordmark */}
          <Link
            to="/"
            onClick={() => isHome && window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="group flex items-center gap-3 z-50"
            aria-label="DZ Visuals Startseite"
          >
            <span className="font-serif-display text-[22px] lg:text-[26px] tracking-tight text-[#F5F2ED] italic">
              DZ
            </span>
            <span className="hidden sm:block w-px h-5 bg-white/20" />
            <span className="hidden sm:inline label-caps text-[#F5F2ED] !text-[10px] tracking-[0.32em]">
              VISUALS
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-10">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => handleNavClick(item.href)}
                className="link-underline text-[13px] tracking-[0.08em] text-[#F5F2ED]/90 hover:text-[#F5F2ED] font-light"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Desktop CTA */}
          <button
            onClick={() => handleNavClick('#kontakt')}
            className="hidden lg:inline-flex items-center gap-3 px-6 py-3 border border-white/30 hover:border-[#A58B68] hover:bg-[#A58B68]/10 transition-all duration-500 text-[12px] tracking-[0.2em] uppercase text-[#F5F2ED]"
          >
            Projekt anfragen
            <span className="w-4 h-px bg-current" />
          </button>

          {/* Mobile burger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden z-50 w-10 h-10 flex flex-col items-center justify-center gap-[5px] group"
            aria-label="Menü öffnen"
          >
            <span className={`block h-px w-6 bg-[#F5F2ED] transition-all duration-500 ${menuOpen ? 'rotate-45 translate-y-[3px]' : ''}`} />
            <span className={`block h-px w-6 bg-[#F5F2ED] transition-all duration-500 ${menuOpen ? '-rotate-45 -translate-y-[3px]' : ''}`} />
          </button>
        </div>
      </header>

      {/* Mobile Fullscreen Menu */}
      <div
        className={`fixed inset-0 z-40 bg-[#050505] transition-all duration-700 lg:hidden ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="h-full flex flex-col justify-between px-6 pt-32 pb-12">
          <nav className="flex flex-col gap-7">
            {navItems.map((item, i) => (
              <button
                key={item.href}
                onClick={() => handleNavClick(item.href)}
                className="text-left flex items-baseline gap-4 group"
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <span className="num-display text-sm">0{i + 1}</span>
                <span className="font-serif-display text-4xl text-[#F5F2ED] group-hover:text-[#A58B68] transition-colors">
                  {item.label}
                </span>
              </button>
            ))}
          </nav>
          <div className="space-y-6">
            <button
              onClick={() => handleNavClick('#kontakt')}
              className="w-full py-5 border border-[#A58B68] text-[#F5F2ED] text-[12px] tracking-[0.25em] uppercase hover:bg-[#A58B68]/10 transition"
            >
              Projekt anfragen
            </button>
            <a
              href="mailto:z-daniele@hotmail.com?subject=Projektanfrage%20an%20DZ%20Visuals"
              className="block label-caps !text-[#F5F2ED]/70"
            >
              z-daniele@hotmail.com
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
