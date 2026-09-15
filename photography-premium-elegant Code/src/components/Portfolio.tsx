import React, { useState, useMemo } from 'react';
import { portfolioItems, brandContentItems, PortfolioItem } from '@/data/portfolio';

const tabs = [
  { label: 'Alle', value: 'Alle' },
  { label: 'Automotive', value: 'Automotive' },
  { label: 'Porträt', value: 'Portrait' },
  { label: 'Events', value: 'Events' },
  { label: 'Brand Content', value: 'Brand Content' },
  { label: 'Real Estate', value: 'Real Estate' },
] as const;

const Portfolio: React.FC = () => {
  const [filter, setFilter] = useState<(typeof tabs)[number]['value']>('Alle');
  const [lightbox, setLightbox] = useState<PortfolioItem | null>(null);

  const items = useMemo(() => {
    if (filter === 'Alle') return portfolioItems;
    if (filter === 'Brand Content') return brandContentItems;
    return portfolioItems.filter((p) => p.category === filter);
  }, [filter]);

  const scrollToContact = () => {
    const el = document.getElementById('kontakt');
    if (el) window.scrollTo({ top: el.offsetTop - 80, behavior: 'smooth' });
  };

  return (
    <section id="arbeiten" className="relative py-28 lg:py-44 bg-[#050505]">
      <div className="max-w-[1360px] mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-16 lg:mb-24">
          <div className="lg:col-span-7 reveal">
            <p className="label-caps mb-8">Ausgewählte Arbeiten</p>
            <h2 className="font-serif-display text-[40px] sm:text-[56px] lg:text-[80px] text-[#F5F2ED] leading-[1.02]">
              Bilder, die nicht nur zeigen.<br />
              <span className="italic text-[#E7DDD0]">Sondern fühlen lassen.</span>
            </h2>
          </div>
          <div className="lg:col-span-4 lg:col-start-9 flex lg:items-end reveal">
            <div className="flex flex-wrap gap-2 lg:gap-3">
              {tabs.map((t) => (
                <button
                  key={t.value}
                  onClick={() => setFilter(t.value)}
                  className={`px-4 py-2 text-[11px] tracking-[0.2em] uppercase border transition-all duration-500 ${
                    filter === t.value
                      ? 'border-[#A58B68] text-[#F5F2ED] bg-[#A58B68]/10'
                      : 'border-white/15 text-[#A6A19A] hover:border-white/40 hover:text-[#F5F2ED]'
                  }`}
                >
                  {t.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Asymmetric masonry */}
        <div className="grid grid-cols-2 lg:grid-cols-12 gap-3 lg:gap-5 auto-rows-[180px] sm:auto-rows-[240px] lg:auto-rows-[200px]">
          {items.map((item, i) => {
            const layouts = [
              'col-span-2 lg:col-span-7 row-span-2',
              'col-span-2 lg:col-span-5 row-span-2',
              'col-span-1 lg:col-span-4 row-span-2',
              'col-span-1 lg:col-span-4 row-span-2',
              'col-span-2 lg:col-span-4 row-span-2',
              'col-span-2 lg:col-span-8 row-span-2',
              'col-span-1 lg:col-span-4 row-span-2',
              'col-span-1 lg:col-span-3 row-span-2',
              'col-span-2 lg:col-span-5 row-span-2',
              'col-span-1 lg:col-span-6 row-span-2',
              'col-span-1 lg:col-span-6 row-span-2',
            ];
            const cls = layouts[i % layouts.length];
            return (
              <button
                key={item.id}
                onClick={() => setLightbox(item)}
                className={`relative img-hover group reveal ${cls} text-left`}
                aria-label={`Projekt öffnen: ${item.title} – ${item.category}`}
                style={{ transitionDelay: `${(i % 4) * 80}ms` }}
              >
                <img
                  src={item.src}
                  srcSet={`${item.srcSm} 640w, ${item.srcMd} 1200w, ${item.src} 2000w`}
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  alt={item.alt}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent opacity-70 group-hover:opacity-95 transition-opacity duration-700" />

                {/* Hover label – Projekttitel */}
                <div className="absolute inset-x-0 bottom-0 p-4 lg:p-6 opacity-0 group-hover:opacity-100 translate-y-3 group-hover:translate-y-0 transition-all duration-700">
                  <div className="flex items-end justify-between gap-4">
                    <div className="min-w-0">
                      <p className="label-caps !text-[#A58B68] !text-[10px] mb-2">
                        {item.category}
                      </p>
                      <h3 className="font-serif-display text-[20px] lg:text-[26px] text-[#F5F2ED] italic leading-tight truncate">
                        {item.title}
                      </h3>
                      {(item.location || item.year) && (
                        <p className="mt-1 text-[11px] text-[#F5F2ED]/60 tracking-wide font-light">
                          {[item.location, item.year].filter(Boolean).join(' · ')}
                        </p>
                      )}
                    </div>
                    <span className="shrink-0 w-9 h-px bg-[#A58B68] mb-3" />
                  </div>
                </div>

                {/* Subtle persistent category corner */}
                <div className="absolute top-3 left-3 lg:top-4 lg:left-4 opacity-0 group-hover:opacity-0 transition-opacity">
                  <span className="label-caps !text-[#F5F2ED]/70 !text-[10px]">{item.category}</span>
                </div>
              </button>
            );
          })}
        </div>

        <div className="mt-20 lg:mt-28 grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
          <div className="lg:col-span-7 reveal">
            <p className="font-serif-display text-[24px] lg:text-[32px] text-[#F5F2ED] italic leading-snug">
              Jedes Projekt beginnt mit einer Idee – und dem Anspruch, etwas zu erschaffen, das echt wirkt und dennoch außergewöhnlich bleibt.
            </p>
          </div>
          <div className="lg:col-span-3 lg:col-start-10 reveal">
            <button
              onClick={scrollToContact}
              className="group inline-flex items-center gap-4 px-6 py-4 border border-white/30 hover:border-[#A58B68] hover:bg-[#A58B68]/10 transition-all duration-500 text-[11px] tracking-[0.22em] uppercase text-[#F5F2ED]"
            >
              Projekt anfragen
              <span className="w-5 h-px bg-current group-hover:w-9 transition-all duration-500" />
            </button>
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-[60] bg-[#050505]/95 backdrop-blur-sm flex items-center justify-center p-4 lg:p-10 animate-fade-in"
          onClick={() => setLightbox(null)}
        >
          <button
            onClick={() => setLightbox(null)}
            className="absolute top-6 right-6 w-12 h-12 flex items-center justify-center text-[#F5F2ED] hover:text-[#A58B68] transition z-10"
            aria-label="Schliessen"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
              <path d="M6 6 L18 18 M18 6 L6 18" />
            </svg>
          </button>

          <div
            className="relative max-w-[1200px] w-full flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={lightbox.src}
              alt={lightbox.alt}
              className="max-w-full max-h-[78vh] object-contain"
            />
            <div className="mt-6 w-full flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 px-2">
              <div>
                <p className="label-caps !text-[#A58B68] !text-[10px] mb-2">{lightbox.category}</p>
                <h3 className="font-serif-display text-[26px] lg:text-[34px] text-[#F5F2ED] italic leading-tight">
                  {lightbox.title}
                </h3>
              </div>
              {(lightbox.location || lightbox.year) && (
                <p className="text-[12px] text-[#A6A19A] tracking-wide font-light">
                  {[lightbox.location, lightbox.year].filter(Boolean).join(' · ')}
                </p>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Portfolio;
