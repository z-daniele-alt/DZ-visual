import React from 'react';
import { moodPortrait } from '@/data/portfolio';

const ProblemSection: React.FC = () => {
  return (
    <section className="relative py-28 lg:py-44 bg-[#050505]">
      <div className="max-w-[1360px] mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          <div className="lg:col-span-5 reveal">
            <p className="label-caps mb-8">Warum visueller Content entscheidet</p>
            <h2 className="font-serif-display text-[40px] sm:text-[56px] lg:text-[72px] text-[#F5F2ED] leading-[1.02]">
              Du kannst stark sein.<br />
              <span className="italic text-[#E7DDD0]">Wenn dein Auftritt es nicht zeigt,</span><br />
              bleibst du trotzdem unsichtbar.
            </h2>
          </div>

          <div className="lg:col-span-6 lg:col-start-7 space-y-7 reveal">
            <p className="text-[16px] lg:text-[17px] text-[#A6A19A] leading-[1.75] font-light">
              Die meisten Marken und Personen haben nicht zu wenig Potenzial. Sie haben Bilder, die es nicht sichtbar machen.
            </p>
            <p className="text-[16px] lg:text-[17px] text-[#A6A19A] leading-[1.75] font-light">
              Schlechter oder durchschnittlicher Content wirkt beliebig. Er erzeugt keine Aufmerksamkeit, kein Vertrauen und keinen bleibenden Eindruck.
            </p>
            <p className="text-[16px] lg:text-[17px] text-[#A6A19A] leading-[1.75] font-light">
              DZ Visuals entwickelt visuelle Inhalte, die zeigen, wer du bist und wofür deine Marke steht – authentisch, hochwertig und mit einer Präsenz, die im Kopf bleibt.
            </p>
            <div className="pt-6 border-t border-white/10">
              <p className="font-serif-display text-[24px] lg:text-[30px] text-[#F5F2ED] italic leading-snug">
                Denn online entscheidet oft der erste Eindruck,<br className="hidden sm:block" /> bevor überhaupt ein Gespräch entsteht.
              </p>
            </div>
          </div>
        </div>

        {/* Atmospheric mood image */}
        <div className="mt-20 lg:mt-32 reveal img-hover">
          <div className="relative aspect-[21/9] overflow-hidden">
            <img
              src={moodPortrait}
              alt="Atmosphärisches Stimmungsbild im editorialen Stil"
              loading="lazy"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/60 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
