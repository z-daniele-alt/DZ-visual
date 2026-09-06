import React, { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Impressum: React.FC = () => {
  useEffect(() => {
    document.title = 'Impressum | DZ Visuals';
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#050505] grain-bg">
      <Header />
      <main className="pt-32 lg:pt-44 pb-28 lg:pb-40">
        <div className="max-w-[900px] mx-auto px-6 lg:px-10">
          <p className="label-caps mb-8">Rechtliches</p>
          <h1 className="font-serif-display text-[44px] sm:text-[64px] lg:text-[88px] text-[#F5F2ED] leading-[1.0] mb-16">
            Impressum
          </h1>

          <div className="space-y-12 text-[15px] lg:text-[16px] text-[#A6A19A] leading-[1.85] font-light">
            <section>
              <h2 className="label-caps mb-4 !text-[#F5F2ED]">Anbieter</h2>
              <p className="text-[#F5F2ED] font-serif-display text-[24px] lg:text-[28px] italic mb-2">
                DZ Visuals
              </p>
              <p>Fotografie & visueller Content Creation</p>
            </section>

            <section className="pt-10 border-t border-white/10">
              <h2 className="label-caps mb-4 !text-[#F5F2ED]">Kontakt</h2>
              <p>
                E-Mail:{' '}
                <a
                  href="mailto:z-daniele@hotmail.com?subject=Anfrage%20DZ%20Visuals"
                  className="link-underline text-[#F5F2ED]"
                >
                  z-daniele@hotmail.com
                </a>
              </p>
            </section>

            <section className="pt-10 border-t border-white/10">
              <h2 className="label-caps mb-4 !text-[#F5F2ED]">Haftung für Inhalte</h2>
              <p>
                Die Inhalte dieser Website wurden mit grösstmöglicher Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte kann jedoch keine Gewähr übernommen werden.
              </p>
            </section>

            <section className="pt-10 border-t border-white/10">
              <h2 className="label-caps mb-4 !text-[#F5F2ED]">Urheberrecht</h2>
              <p>
                Alle auf dieser Website veröffentlichten Bilder, Texte und Inhalte unterliegen dem Urheberrecht. Eine Verwendung, Vervielfältigung oder Weiterverbreitung – auch in Auszügen – ist nur mit ausdrücklicher schriftlicher Zustimmung von DZ Visuals zulässig.
              </p>
            </section>

            <section className="pt-10 border-t border-white/10">
              <h2 className="label-caps mb-4 !text-[#F5F2ED]">Anwendbares Recht</h2>
              <p>
                Es gilt das Recht der Schweiz, soweit gesetzlich zulässig.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Impressum;
