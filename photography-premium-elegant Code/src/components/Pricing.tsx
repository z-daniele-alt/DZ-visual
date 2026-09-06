import React from 'react';
import { portfolioItems } from '@/data/portfolio';

const Pricing: React.FC = () => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.offsetTop - 80, behavior: 'smooth' });
  };
  const item = portfolioItems.find((p) => p.category === 'Automotive');

  return (
    <section className="relative py-28 lg:py-44 bg-[#0B0B0C] border-y border-white/10 overflow-hidden">
      <div className="max-w-[1360px] mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-7 reveal">
            <p className="label-caps mb-8">Sessions</p>
            <h2 className="font-serif-display text-[40px] sm:text-[56px] lg:text-[80px] text-[#F5F2ED] leading-[1.0] mb-10">
              Dein Auftritt beginnt<br />
              <span className="italic text-[#E7DDD0]">mit dem ersten Bild.</span>
            </h2>
            <p className="text-[16px] lg:text-[17px] text-[#A6A19A] leading-[1.8] font-light max-w-xl mb-12">
              Jedes Projekt ist individuell. Umfang, Location, Nutzung und gewünschter Content bestimmen den genauen Rahmen.
            </p>

            <div className="py-10 border-y border-white/10 mb-10">
              <p className="label-caps mb-4">Fotografie Sessions</p>
              <div className="flex items-baseline gap-3">
                <span className="font-serif-display text-[#A58B68] text-[28px] italic">ab</span>
                <span className="font-serif-display text-[#F5F2ED] text-[80px] lg:text-[120px] leading-none">
                  CHF 250.–
                </span>
              </div>
            </div>

            <p className="text-[15px] text-[#A6A19A] leading-[1.8] font-light max-w-xl mb-10">
              Für Portraits, Automotive-Projekte, Events und visuellen Content, der hochwertig sichtbar macht, was dich oder deine Marke auszeichnet.
            </p>

            <button
              onClick={() => scrollTo('kontakt')}
              className="group inline-flex items-center gap-4 px-7 py-4 border border-[#A58B68] hover:bg-[#A58B68]/10 transition-all duration-500 text-[11px] tracking-[0.22em] uppercase text-[#F5F2ED]"
            >
              Projekt anfragen
              <span className="w-5 h-px bg-current group-hover:w-9 transition-all duration-500" />
            </button>

            <p className="mt-8 text-[13px] text-[#A6A19A]/80 italic font-light max-w-md">
              Nach deiner Anfrage klären wir gemeinsam, welche Umsetzung für dein Projekt sinnvoll ist.
            </p>
          </div>

          <div className="lg:col-span-5 reveal img-hover">
            <div className="aspect-[3/4] overflow-hidden">
              {item && (
                <img
                  src={item.src}
                  alt={item.alt}
                  loading="lazy"
                  onError={(e) => {
                    const t = e.currentTarget;
                    if (t.src !== item.fallback) t.src = item.fallback;
                  }}
                  className="w-full h-full object-cover"
                />
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Pricing;
