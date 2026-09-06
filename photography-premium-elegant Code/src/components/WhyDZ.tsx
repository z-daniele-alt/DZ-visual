import React from 'react';

const values = [
  { label: 'Authentisch', text: 'Keine künstliche Wirkung. Bilder, die sich nach dir anfühlen.' },
  { label: 'Hochwertig', text: 'Präzise Bearbeitung, starkes Licht und ein moderner Premium-Look.' },
  { label: 'Persönlich', text: 'Eine Zusammenarbeit, die klar, unkompliziert und auf deine Vision abgestimmt ist.' },
];

const WhyDZ: React.FC = () => {
  return (
    <section id="ueber" className="relative py-28 lg:py-44 bg-[#0B0B0C] border-y border-white/10">
      <div className="max-w-[1360px] mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 mb-20 lg:mb-28">
          <div className="lg:col-span-5 reveal">
            <p className="label-caps mb-8">DZ Visuals</p>
            <h2 className="font-serif-display text-[40px] sm:text-[56px] lg:text-[72px] text-[#F5F2ED] leading-[1.02]">
              Nicht einfach Fotos.<br />
              <span className="italic text-[#E7DDD0]">Visuelle Präsenz mit Wirkung.</span>
            </h2>
          </div>
          <div className="lg:col-span-6 lg:col-start-7 space-y-6 reveal">
            <p className="text-[16px] lg:text-[17px] text-[#A6A19A] leading-[1.8] font-light">
              DZ Visuals steht für hochwertige Fotografie und visuellen Content, der Menschen und Marken authentisch widerspiegelt.
            </p>
            <p className="text-[16px] lg:text-[17px] text-[#A6A19A] leading-[1.8] font-light">
              Im Mittelpunkt steht nicht das schnelle Bild, sondern die Wirkung: Emotion, Atmosphäre und eine Bildsprache, die zu dir oder deiner Marke passt.
            </p>
            <p className="text-[16px] lg:text-[17px] text-[#A6A19A] leading-[1.8] font-light">
              Durch klare Kommunikation, kreative Zusammenarbeit und hochwertige Bearbeitung entsteht Content, der professionell wirkt, Vertrauen schafft und neue Möglichkeiten eröffnet.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10 border border-white/10">
          {values.map((v, i) => (
            <div
              key={v.label}
              className="bg-[#0B0B0C] p-10 lg:p-14 reveal group hover:bg-[#101011] transition-colors duration-700"
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              <div className="flex items-baseline gap-4 mb-8">
                <span className="num-display text-[28px]">0{i + 1}</span>
                <span className="h-px flex-1 bg-white/10 group-hover:bg-[#A58B68]/50 transition-colors duration-700" />
              </div>
              <h3 className="font-serif-display text-[28px] lg:text-[36px] text-[#F5F2ED] mb-5 italic">
                {v.label}
              </h3>
              <p className="text-[14px] lg:text-[15px] text-[#A6A19A] leading-[1.7] font-light">
                {v.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyDZ;
