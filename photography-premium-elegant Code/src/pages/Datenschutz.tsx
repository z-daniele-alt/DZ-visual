import React, { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Datenschutz: React.FC = () => {
  useEffect(() => {
    document.title = 'Datenschutz | DZ Visuals';
    window.scrollTo(0, 0);
  }, []);

  const sections = [
    {
      title: '1. Verantwortliche Stelle',
      body: (
        <>
          <p className="text-[#F5F2ED] font-serif-display text-[22px] italic mb-2">DZ Visuals</p>
          <p>
            E-Mail:{' '}
            <a href="mailto:z-daniele@hotmail.com" className="link-underline text-[#F5F2ED]">
              z-daniele@hotmail.com
            </a>
          </p>
        </>
      ),
    },
    {
      title: '2. Zweck dieser Website',
      body: (
        <p>
          Diese Website informiert über die fotografischen und visuellen Content-Dienstleistungen von DZ Visuals und ermöglicht die Kontaktaufnahme für Projektanfragen.
        </p>
      ),
    },
    {
      title: '3. Kontaktaufnahme',
      body: (
        <p>
          Wenn Sie per E-Mail Kontakt aufnehmen, werden die von Ihnen übermittelten Angaben zur Bearbeitung Ihrer Anfrage verwendet. Die Daten werden nicht ohne Ihre Zustimmung für andere Zwecke weitergegeben, sofern keine gesetzliche Verpflichtung besteht.
        </p>
      ),
    },
    {
      title: '4. Hosting und technische Zugriffsdaten',
      body: (
        <p>
          Beim Besuch dieser Website können durch den Hosting-Anbieter technisch erforderliche Zugriffsdaten verarbeitet werden, insbesondere IP-Adresse, Datum und Uhrzeit des Zugriffs, aufgerufene Seite, Browserinformationen und technische Protokolldaten. Diese Verarbeitung dient der sicheren und stabilen Bereitstellung der Website.
        </p>
      ),
    },
    {
      title: '5. Cookies und Tracking',
      body: (
        <p>
          Diese Website verwendet keine Marketing- oder Analyse-Cookies und kein externes Tracking, sofern dies nicht zu einem späteren Zeitpunkt ausdrücklich ergänzt und entsprechend transparent ausgewiesen wird. Technisch notwendige Funktionen der Website bleiben hiervon unberührt.
        </p>
      ),
    },
    {
      title: '6. Eingebundene Inhalte und Schriften',
      body: (
        <>
          <p>
            Auf dieser Website werden zur Darstellung der Typografie Webschriften eingebunden. Dabei kann es zu einer Übermittlung der IP-Adresse an den jeweiligen Schriftanbieter kommen. Sollte zukünftig auf eine vollständig lokale Auslieferung der Schriften umgestellt werden, wird dieser Abschnitt entsprechend aktualisiert.
          </p>
          <p className="mt-4">
            Es werden keine externen Social-Media-Feeds, Kartendienste, Video-Player oder Analyse-Skripte von Drittanbietern eingebunden.
          </p>
        </>
      ),
    },
    {
      title: '7. Ihre Rechte',
      body: (
        <p>
          Sie können Auskunft über Ihre gespeicherten personenbezogenen Daten sowie deren Berichtigung oder Löschung verlangen, soweit keine gesetzlichen Aufbewahrungspflichten entgegenstehen. Kontaktieren Sie hierzu DZ Visuals über die oben angegebene E-Mail-Adresse.
        </p>
      ),
    },
    {
      title: '8. Aktualisierung dieser Datenschutzerklärung',
      body: (
        <p>
          Diese Datenschutzerklärung kann angepasst werden, wenn sich Funktionen, technische Dienste oder rechtliche Anforderungen der Website ändern.
        </p>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-[#050505] grain-bg">
      <Header />
      <main className="pt-32 lg:pt-44 pb-28 lg:pb-40">
        <div className="max-w-[900px] mx-auto px-6 lg:px-10">
          <p className="label-caps mb-8">Rechtliches</p>
          <h1 className="font-serif-display text-[44px] sm:text-[64px] lg:text-[88px] text-[#F5F2ED] leading-[1.0] mb-16">
            Datenschutz&shy;erklärung
          </h1>

          <div className="space-y-12 text-[15px] lg:text-[16px] text-[#A6A19A] leading-[1.85] font-light">
            {sections.map((s, i) => (
              <section key={i} className={i > 0 ? 'pt-10 border-t border-white/10' : ''}>
                <h2 className="label-caps mb-5 !text-[#F5F2ED]">{s.title}</h2>
                <div className="space-y-4">{s.body}</div>
              </section>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Datenschutz;
