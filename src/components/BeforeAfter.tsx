import React from 'react';
import { beforeImg, afterImg } from '@/data/portfolio';

const BeforeAfter: React.FC = () => {
  return (
    <section className="relative py-28 lg:py-44 bg-[#050505]">
      <div className="max-w-[1360px] mx-auto px-6 lg:px-10">
        <div className="text-center max-w-3xl mx-auto mb-20 lg:mb-28 reveal">
          <p className="label-caps mb-8">Der Unterschied</p>
          <h2 className="font-serif-display text-[40px] sm:text-[56px] lg:text-[80px] text-[#F5F2ED] leading-[1.0]">
            Von austauschbar<br />
            <span className="italic text-[#E7DDD0]">zu unverwechselbar.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 lg:gap-6">
          {/* Before */}
          <div className="relative reveal">
            <div className="aspect-[4/5] overflow-hidden">
              <img
                src={beforeImg}
                alt="Atmosphärisches Stimmungsbild – schwache visuelle Wirkung"
                loading="lazy"
                className="w-full h-full object-cover grayscale brightness-[0.7] contrast-75"
              />
              <div className="absolute inset-0 bg-black/30" />
            </div>
            <div className="mt-8">
              <p className="label-caps mb-5 !text-[#A6A19A]">Ohne klaren visuellen Auftritt</p>
              <ul className="space-y-2 text-[15px] text-[#A6A19A] font-light leading-relaxed">
                <li>Unscharfe Botschaft.</li>
                <li>Beliebige Bilder.</li>
                <li>Kein Wiedererkennungswert.</li>
                <li>Weniger Aufmerksamkeit.</li>
                <li>Ein Auftritt, der untergeht.</li>
              </ul>
            </div>
          </div>

          {/* After */}
          <div className="relative reveal" style={{ transitionDelay: '180ms' }}>
            <div className="aspect-[4/5] overflow-hidden img-hover">
              <img
                src={afterImg.src}
                srcSet={`${afterImg.srcSm} 640w, ${afterImg.srcMd} 1200w, ${afterImg.src} 2000w`}
                sizes="(min-width: 768px) 50vw, 100vw"
                alt={afterImg.alt}
                loading="lazy"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 right-4 px-3 py-1.5 bg-[#050505]/70 backdrop-blur-sm border border-[#A58B68]/40">
                <span className="label-caps !text-[10px] !text-[#E7DDD0]">Mit DZ Visuals</span>
              </div>
            </div>
            <div className="mt-8">
              <p className="label-caps mb-5 !text-[#A58B68]">Mit DZ Visuals</p>
              <ul className="space-y-2 text-[15px] text-[#F5F2ED] font-light leading-relaxed">
                <li>Starke Bildsprache.</li>
                <li>Authentische Präsenz.</li>
                <li>Hochwertige Bearbeitung.</li>
                <li>Mehr Vertrauen.</li>
                <li>Ein Auftritt, der hängen bleibt.</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-24 lg:mt-32 text-center reveal">
          <p className="font-serif-display text-[26px] sm:text-[36px] lg:text-[48px] text-[#F5F2ED] italic leading-[1.15] max-w-3xl mx-auto">
            Guter Content verändert nicht, wer du bist.<br />
            <span className="text-[#E7DDD0]">Er macht sichtbar, was längst da ist.</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfter;
