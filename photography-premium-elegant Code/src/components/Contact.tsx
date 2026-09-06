import React from 'react';

const EMAIL = 'z-daniele@hotmail.com';

const Contact: React.FC = () => {
  const subject = encodeURIComponent('Projektanfrage an DZ Visuals');
  const body = encodeURIComponent(
    'Hallo Daniele,\n\nich interessiere mich für eine Zusammenarbeit mit DZ Visuals.\n\nArt des Projekts: \nGewünschter Zeitraum: \nKurz zu meiner Idee: \n\nViele Grüsse'
  );
  const mailto = `mailto:${EMAIL}?subject=${subject}&body=${body}`;

  return (
    <section id="kontakt" className="relative py-28 lg:py-44 bg-[#050505] border-t border-white/10 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[1200px] rounded-full bg-[#A58B68]/[0.04] blur-3xl" />
      </div>

      <div className="relative max-w-[1360px] mx-auto px-6 lg:px-10">
        <div className="text-center max-w-4xl mx-auto reveal">
          <p className="label-caps mb-10">Kontakt</p>
          <h2 className="font-serif-display text-[44px] sm:text-[64px] lg:text-[104px] text-[#F5F2ED] leading-[1.0] mb-12">
            Lass uns gemeinsam<br />
            <span className="italic text-[#E7DDD0]">etwas Besonderes erschaffen.</span>
          </h2>
          <p className="text-[16px] lg:text-[18px] text-[#A6A19A] leading-[1.8] font-light max-w-2xl mx-auto mb-16">
            Du möchtest deinen Auftritt hochwertiger sichtbar machen, einen besonderen Moment festhalten oder dein Fahrzeug in einer starken Bildsprache inszenieren?
            <br /><br />
            <span className="text-[#F5F2ED]">Dann erzähl mir von deiner Idee.</span>
          </p>

          <div className="flex flex-col sm:flex-row gap-6 sm:gap-10 items-center justify-center mb-20">
            <a
              href={mailto}
              className="group inline-flex items-center justify-center gap-4 px-8 py-5 lg:px-10 lg:py-6 bg-[#F5F2ED] text-[#050505] hover:bg-[#E7DDD0] transition-all duration-500 text-[11px] lg:text-[12px] tracking-[0.22em] uppercase font-medium"
            >
              Projekt anfragen
              <span className="w-5 h-px bg-current group-hover:w-9 transition-all duration-500" />
            </a>
            <a
              href={mailto}
              className="link-underline text-[14px] tracking-[0.12em] text-[#F5F2ED]"
            >
              {EMAIL}
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-white/10 border-y border-white/10 max-w-4xl mx-auto">
            <div className="bg-[#050505] p-8">
              <p className="label-caps mb-3">Kontakt</p>
              <a href={mailto} className="text-[14px] text-[#F5F2ED] link-underline break-all">
                {EMAIL}
              </a>
            </div>
            <div className="bg-[#050505] p-8">
              <p className="label-caps mb-3">Sprache</p>
              <p className="text-[14px] text-[#F5F2ED]">Deutsch · Schweiz</p>
            </div>
            <div className="bg-[#050505] p-8">
              <p className="label-caps mb-3">Verfügbar für</p>
              <p className="text-[14px] text-[#F5F2ED]">Projekte & Sessions</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
