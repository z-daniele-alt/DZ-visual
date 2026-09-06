import React from 'react';
import { heroImage } from '@/data/portfolio';

const Hero: React.FC = () => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.offsetTop - 80, behavior: 'smooth' });
  };

  return (
    <section className="relative w-full h-screen min-h-[640px] overflow-hidden vignette" id="top">
      {/* Background image */}
      <div className="absolute inset-0 overflow-hidden">
        <img
          src={heroImage}
          alt="Cinematic Stimmungsbild – DZ Visuals"
          className="w-full h-full object-cover animate-slow-zoom"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-[#050505]" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-transparent to-black/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full max-w-[1360px] mx-auto px-6 lg:px-10 flex flex-col justify-end pb-20 lg:pb-32">
        <div className="max-w-4xl">
          <div className="overflow-hidden mb-6 lg:mb-10">
            <p className="label-caps !text-[#E7DDD0] animate-fade-up">
              Fotografie & visueller Content
            </p>
          </div>
          <h1 className="font-serif-display text-[44px] sm:text-[64px] md:text-[88px] lg:text-[120px] text-[#F5F2ED] leading-[0.95] animate-fade-up delay-200">
            Visuelle Geschichten<br />
            <span className="italic text-[#E7DDD0]">mit Charakter.</span><br />
            Emotion. Präsenz.
          </h1>
          <p className="mt-8 lg:mt-12 max-w-xl text-[15px] lg:text-[17px] text-[#A6A19A] leading-relaxed font-light animate-fade-up delay-500">
            Für Marken, Unternehmer, Athleten und Menschen, die nicht durchschnittlich sichtbar werden wollen.
          </p>

          <div className="mt-10 lg:mt-14 flex flex-col sm:flex-row sm:items-center gap-6 sm:gap-10 animate-fade-up delay-700">
            <button
              onClick={() => scrollTo('kontakt')}
              className="group inline-flex items-center justify-center gap-4 px-7 py-4 lg:px-9 lg:py-5 bg-[#F5F2ED] text-[#050505] hover:bg-[#E7DDD0] transition-all duration-500 text-[11px] lg:text-[12px] tracking-[0.22em] uppercase font-medium"
            >
              Lass uns gemeinsam etwas Besonderes erschaffen
              <span className="w-5 h-px bg-current group-hover:w-8 transition-all duration-500" />
            </button>
            <button
              onClick={() => scrollTo('arbeiten')}
              className="link-underline text-[12px] tracking-[0.2em] uppercase text-[#F5F2ED] self-start sm:self-auto"
            >
              Arbeiten entdecken
            </button>
          </div>
        </div>

        {/* Bottom row */}
        <div className="absolute bottom-8 lg:bottom-10 left-6 lg:left-10 right-6 lg:right-10 flex items-end justify-between pointer-events-none">
          <p className="label-caps !text-[#F5F2ED]/60 hidden sm:block animate-fade-in delay-1000">
            Event · Portrait · Automotive · Brand Content
          </p>
          <div className="flex flex-col items-center gap-3 ml-auto animate-fade-in delay-1000">
            <span className="label-caps !text-[10px] !text-[#F5F2ED]/50">Scrollen</span>
            <span className="block w-px h-12 bg-[#F5F2ED]/30 animate-scroll-hint origin-top" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
