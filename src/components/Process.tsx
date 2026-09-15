import React from 'react';

const steps = [
  { n: '01', title: 'Anfrage', text: 'Du erzählst, was du vorhast und welche Wirkung du erzielen möchtest.' },
  { n: '02', title: 'Konzept', text: 'Gemeinsam definieren wir Stil, Location, Stimmung und den passenden Ablauf.' },
  { n: '03', title: 'Shooting', text: 'Eine ruhige, fokussierte Umsetzung, bei der authentische und starke Bilder entstehen.' },
  { n: '04', title: 'Auswahl & Bearbeitung', text: 'Die besten Aufnahmen werden hochwertig ausgewählt und mit einem klaren, modernen Look bearbeitet.' },
  { n: '05', title: 'Übergabe', text: 'Du erhältst visuellen Content, den du professionell für deine Präsenz einsetzen kannst.' },
];

const Process: React.FC = () => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.offsetTop - 80, behavior: 'smooth' });
  };

  return (
    <section id="ablauf" className="relative py-28 lg:py-44 bg-[#050505]">
      <div className="max-w-[1360px] mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-20 lg:mb-28">
          <div className="lg:col-span-2 reveal">
            <p className="label-caps">Ablauf</p>
          </div>
          <div className="lg:col-span-9 reveal">
            <h2 className="font-serif-display text-[40px] sm:text-[56px] lg:text-[80px] text-[#F5F2ED] leading-[1.0]">
              Von der Idee<br />
              <span className="italic text-[#E7DDD0]">zum starken Auftritt.</span>
            </h2>
          </div>
        </div>

        {/* Desktop horizontal timeline */}
        <div className="hidden lg:block relative">
          <div className="absolute top-[42px] left-0 right-0 h-px bg-white/10" />
          <div className="grid grid-cols-5 gap-6 relative">
            {steps.map((s, i) => (
              <div key={s.n} className="reveal" style={{ transitionDelay: `${i * 120}ms` }}>
                <div className="relative mb-10 pb-4">
                  <div className="w-3 h-3 rounded-full bg-[#A58B68] mb-6 relative z-10" />
                </div>
                <span className="num-display text-[36px] block mb-4">{s.n}</span>
                <h3 className="font-serif-display text-[26px] text-[#F5F2ED] mb-4 italic">{s.title}</h3>
                <p className="text-[14px] text-[#A6A19A] leading-[1.7] font-light">{s.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile vertical timeline */}
        <div className="lg:hidden relative pl-8">
          <div className="absolute left-[5px] top-2 bottom-2 w-px bg-white/15" />
          <div className="space-y-12">
            {steps.map((s) => (
              <div key={s.n} className="relative reveal">
                <div className="absolute -left-8 top-2 w-[11px] h-[11px] rounded-full bg-[#A58B68]" />
                <span className="num-display text-[28px] block mb-2">{s.n}</span>
                <h3 className="font-serif-display text-[24px] text-[#F5F2ED] mb-3 italic">{s.title}</h3>
                <p className="text-[14px] text-[#A6A19A] leading-[1.7] font-light">{s.text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20 lg:mt-28 text-center reveal">
          <button
            onClick={() => scrollTo('kontakt')}
            className="group inline-flex items-center gap-4 px-7 py-4 lg:px-9 lg:py-5 bg-[#F5F2ED] text-[#050505] hover:bg-[#E7DDD0] transition-all duration-500 text-[11px] lg:text-[12px] tracking-[0.22em] uppercase font-medium"
          >
            Lass uns dein Projekt starten
            <span className="w-5 h-px bg-current group-hover:w-9 transition-all duration-500" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Process;
