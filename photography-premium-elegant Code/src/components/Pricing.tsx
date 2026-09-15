import React from 'react';

const Pricing: React.FC = () => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.offsetTop - 80, behavior: 'smooth' });
  };

  return (
    <section className="relative py-28 lg:py-44 bg-[#0B0B0C] border-y border-white/10 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1100px] h-[1100px] rounded-full bg-[#A58B68]/[0.05] blur-3xl" />
      </div>

      <div className="relative max-w-[1100px] mx-auto px-6 lg:px-10 text-center">
        <p className="label-caps mb-8">Anfrage</p>
        <h2 className="font-serif-display text-[40px] sm:text-[56px] lg:text-[80px] text-[#F5F2ED] leading-[1.0] mb-10 reveal">
          Dein Auftritt beginnt<br />
          <span className="italic text-[#E7DDD0]">mit dem ersten Bild.</span>
        </h2>
        <p className="text-[16px] lg:text-[17px] text-[#A6A19A] leading-[1.8] font-light max-w-xl mx-auto mb-4 reveal">
          Jedes Shooting ist individuell. Umfang, Location, Nutzung und gewünschter Content
          bestimmen den genauen Rahmen – deshalb gibt es hier bewusst keine Preisliste.
        </p>
        <p className="text-[16px] lg:text-[17px] text-[#A6A19A] leading-[1.8] font-light max-w-xl mx-auto mb-14 reveal">
          Schreib mir kurz von deinem Projekt, und wir klären gemeinsam, welche Umsetzung
          für dich sinnvoll ist – unverbindlich und persönlich.
        </p>

        <button
          onClick={() => scrollTo('kontakt')}
          className="group inline-flex items-center gap-4 px-8 py-5 lg:px-10 lg:py-6 bg-[#F5F2ED] text-[#050505] hover:bg-[#E7DDD0] transition-all duration-500 text-[11px] lg:text-[12px] tracking-[0.22em] uppercase font-medium reveal"
        >
          Kontakt anfragen
          <span className="w-5 h-px bg-current group-hover:w-9 transition-all duration-500" />
        </button>
      </div>
    </section>
  );
};

export default Pricing;
