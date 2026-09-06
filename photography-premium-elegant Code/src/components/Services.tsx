import React from 'react';
import { portfolioItems, PortfolioCategory } from '@/data/portfolio';

const pick = (cat: PortfolioCategory) => portfolioItems.find((p) => p.category === cat);

const services = [
  {
    n: '01',
    title: 'Automotive Photography',
    headline: 'Dein Fahrzeug. Seine Haltung. Dein Moment.',
    text: 'Fahrzeuge sind mehr als Bewegung. Sie sind Design, Leidenschaft und Persönlichkeit. DZ Visuals inszeniert Automotive-Projekte mit Atmosphäre, Detail und einem Blick für Präsenz – für private Enthusiasten, Marken und Social Content mit Charakter.',
    item: pick('Automotive'),
  },
  {
    n: '02',
    title: 'Portrait Photography',
    headline: 'Portraits, die nicht gestellt wirken.',
    text: 'Ein starkes Portrait zeigt nicht nur, wie du aussiehst. Es zeigt, wie du wahrgenommen werden möchtest. Natürlich, hochwertig und mit einem Stil, der zu dir passt.',
    item: pick('Portrait'),
  },
  {
    n: '03',
    title: 'Event Photography',
    headline: 'Momente, die bleiben.',
    text: 'Events leben von Energie, Begegnung und Atmosphäre. DZ Visuals begleitet besondere Anlässe aufmerksam und unaufdringlich – für Bilder, die den Moment auch danach noch spürbar machen.',
    item: pick('Events'),
  },
  {
    n: '04',
    title: 'Brand Content',
    headline: 'Content, der deiner Marke Präsenz gibt.',
    text: 'Für Unternehmer, Athleten, Content Creator und Brands, die professionell sichtbar werden wollen. Gemeinsam entstehen visuelle Inhalte, die Vertrauen aufbauen, Aufmerksamkeit erzeugen und deine Positionierung stärken.',
    item: pick('Brand Content'),
  },
];


const Services: React.FC = () => {
  return (
    <section id="leistungen" className="relative py-28 lg:py-44 bg-[#0B0B0C] border-y border-white/10">
      <div className="max-w-[1360px] mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-20 lg:mb-28">
          <div className="lg:col-span-2 reveal">
            <p className="label-caps">Leistungen</p>
          </div>
          <div className="lg:col-span-9 reveal">
            <h2 className="font-serif-display text-[40px] sm:text-[56px] lg:text-[88px] text-[#F5F2ED] leading-[1.0]">
              Für Momente, Marken<br />
              <span className="italic text-[#E7DDD0]">und Maschinen mit Charakter.</span>
            </h2>
          </div>
        </div>

        <div className="space-y-0 divide-y divide-white/10 border-y border-white/10">
          {services.map((s, i) => (
            <article
              key={s.n}
              className="group reveal grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 py-12 lg:py-16 items-start hover:bg-white/[0.015] transition-colors duration-700"
            >
              <div className="lg:col-span-1">
                <span className="num-display text-[40px] lg:text-[56px]">{s.n}</span>
              </div>
              <div className="lg:col-span-4">
                <p className="label-caps mb-4 !text-[#A58B68]">{s.title}</p>
                <h3 className="font-serif-display text-[28px] lg:text-[40px] text-[#F5F2ED] leading-[1.1] italic">
                  {s.headline}
                </h3>
              </div>
              <div className="lg:col-span-4">
                <p className="text-[15px] lg:text-[16px] text-[#A6A19A] leading-[1.8] font-light">
                  {s.text}
                </p>
              </div>
              <div className="lg:col-span-3 img-hover">
                <div className="aspect-[4/5] w-full overflow-hidden">
                  {s.item && (
                    <img
                      src={s.item.src}
                      alt={s.item.alt}
                      loading="lazy"
                      onError={(e) => {
                        const t = e.currentTarget;
                        if (s.item && t.src !== s.item.fallback) t.src = s.item.fallback;
                      }}
                      className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-1000"
                    />
                  )}
                </div>
              </div>

            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
