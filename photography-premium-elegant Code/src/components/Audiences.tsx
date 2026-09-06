import React from 'react';

const audiences = [
  { label: 'Unternehmer', text: 'Professioneller Content für deine persönliche Marke und dein Business.' },
  { label: 'Brands', text: 'Visuelle Inhalte für Social Media, Kampagnen und einen hochwertigen Markenauftritt.' },
  { label: 'Athleten', text: 'Starke Bilder, die Disziplin, Körperlichkeit und Persönlichkeit sichtbar machen.' },
  { label: 'Content Creator', text: 'Material für eine Präsenz, die hochwertiger, klarer und wiedererkennbarer wirkt.' },
  { label: 'Autoenthusiasten', text: 'Cinematische Aufnahmen für Fahrzeuge mit Charakter.' },
  { label: 'Events', text: 'Momente und Atmosphäre, hochwertig und authentisch festgehalten.' },
];

const Audiences: React.FC = () => {
  return (
    <section className="relative py-28 lg:py-44 bg-[#050505]">
      <div className="max-w-[1360px] mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-20 lg:mb-24">
          <div className="lg:col-span-4 reveal">
            <p className="label-caps">Für wen DZ Visuals arbeitet</p>
          </div>
          <div className="lg:col-span-8 reveal">
            <h2 className="font-serif-display text-[40px] sm:text-[56px] lg:text-[72px] text-[#F5F2ED] leading-[1.02]">
              Für alle, die nicht<br />
              <span className="italic text-[#E7DDD0]">durchschnittlich auftreten wollen.</span>
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10 border-y border-white/10">
          {audiences.map((a, i) => (
            <div
              key={a.label}
              className="bg-[#050505] p-10 lg:p-14 group hover:bg-[#0B0B0C] transition-colors duration-700 reveal"
              style={{ transitionDelay: `${(i % 3) * 100}ms` }}
            >
              <div className="flex items-baseline gap-4 mb-8">
                <span className="num-display text-[22px]">0{i + 1}</span>
                <span className="h-px flex-1 bg-white/10 group-hover:bg-[#A58B68]/40 transition-colors duration-700" />
              </div>
              <h3 className="font-serif-display text-[28px] lg:text-[34px] text-[#F5F2ED] mb-5 leading-none">
                {a.label}
              </h3>
              <p className="text-[14px] lg:text-[15px] text-[#A6A19A] leading-[1.75] font-light">
                {a.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Audiences;
