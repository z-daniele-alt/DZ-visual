export type PortfolioCategory = 'Automotive' | 'Portrait' | 'Events' | 'Brand Content' | 'Real Estate';

export type PortfolioItem = {
  id: string;
  /** Grossformat – längste Kante max. 2000px. */
  src: string;
  /** Mittlere Grösse – längste Kante max. 1200px. */
  srcMd: string;
  /** Kleine Grösse – längste Kante max. 640px, für Grid-Thumbnails. */
  srcSm: string;
  /** Aussagekräftiger deutscher Alt-Text (SEO & Barrierefreiheit). */
  alt: string;
  /** Kategorie für Filterung & Hover-Label. */
  category: PortfolioCategory;
  /** Projekttitel – wird im Hover-Label und in der Lightbox angezeigt. */
  title: string;
  /** Optionaler Lagebezug (Region oder Land). */
  location?: string;
  /** Optionales Aufnahmejahr. */
  year?: string;
  /**
   * Vertikaler Fokuspunkt (0–100, % von oben) für zugeschnittene Grid-/Galerie-
   * Thumbnails, damit z. B. bei Porträts das Gesicht sichtbar bleibt.
   * Wirkt sich NICHT auf die Lightbox/Vollbildansicht aus. Ohne Angabe: 50 (Mitte).
   */
  focalY?: number;
};

const img = (dir: string, slug: string) => ({
  src: `/portfolio/${dir}/${slug}.webp`,
  srcMd: `/portfolio/${dir}/${slug}-md.webp`,
  srcSm: `/portfolio/${dir}/${slug}-sm.webp`,
});

/**
 * Echte Portfolio-Aufnahmen von DZ Visuals, optimiert als WebP in drei
 * Grössen (sm/md/Vollformat) unter /public/portfolio/<kategorie>/.
 */
export const portfolioItems: PortfolioItem[] = [
  // Automotive
  { id: 'automotive-01', ...img('automotive', 'automotive-01'), alt: 'Rücklicht-Detail eines GT3 Touring in nächtlicher Stimmung', category: 'Automotive', title: 'Nächtliche Linien', year: '2025' },
  { id: 'automotive-02', ...img('automotive', 'automotive-02'), alt: 'Heckpartie eines Sportwagens mit durchgehendem LED-Leuchtband', category: 'Automotive', title: 'Leuchtspur', year: '2025' },
  { id: 'automotive-03', ...img('automotive', 'automotive-03'), alt: 'Cockpit-Detail mit Lenkrad und digitalem Display', category: 'Automotive', title: 'Cockpit', year: '2025' },
  { id: 'automotive-04', ...img('automotive', 'automotive-04'), alt: 'Frontansicht eines dunklen Audi R8 in herbstlicher Waldkulisse im Regen', category: 'Automotive', title: 'Nach dem Regen', location: 'Schweiz', year: '2025' },
  { id: 'automotive-05', ...img('automotive', 'automotive-05'), alt: 'Reihe klassischer und moderner Porsche-Modelle bei einem Treffen', category: 'Automotive', title: 'Versammlung', year: '2025' },
  { id: 'automotive-06', ...img('automotive', 'automotive-06'), alt: 'Interieur-Detail eines Porsche-Lenkrads', category: 'Automotive', title: 'Handschrift', year: '2025' },
  { id: 'automotive-07', ...img('automotive', 'automotive-07'), alt: 'Rücklicht-Detail im Streiflicht', category: 'Automotive', title: 'Streiflicht', year: '2025' },
  { id: 'automotive-08', ...img('automotive', 'automotive-08'), alt: 'Detailaufnahme einer AMG Einstiegsleiste', category: 'Automotive', title: 'Signatur', year: '2025' },
  { id: 'automotive-09', ...img('automotive', 'automotive-09'), alt: 'Freigelegter V8-Motorraum in voller Detailschärfe', category: 'Automotive', title: 'Kraft im Detail', year: '2025' },
  { id: 'automotive-10', ...img('automotive', 'automotive-10'), alt: 'Aussenspiegel mit Regentropfen, Detailstudie', category: 'Automotive', title: 'Regentropfen', year: '2025' },
  { id: 'automotive-11', ...img('automotive', 'automotive-11'), alt: 'Cockpit mit Sport-Lenkrad und Bedienelementen', category: 'Automotive', title: 'Am Steuer', year: '2025' },
  { id: 'automotive-12', ...img('automotive', 'automotive-12'), alt: 'Roter Porsche GT3 mit markanter Rennsport-Lackierung zwischen anderen Fahrzeugen', category: 'Automotive', title: 'Unverwechselbar', location: 'Schweiz', year: '2025' },
  { id: 'automotive-13', ...img('automotive', 'automotive-13'), alt: 'Klassischer grüner Porsche 911 mit goldenen Felgen auf Kopfsteinpflaster', category: 'Automotive', title: 'Zeitlos', year: '2025' },
  { id: 'automotive-14', ...img('automotive', 'automotive-14'), alt: 'Felgen- und Bremssattel-Detail mit Porsche-Wappen', category: 'Automotive', title: 'Präzision', year: '2025' },
  { id: 'automotive-15', ...img('automotive', 'automotive-15'), alt: 'Nächtliche Aufnahme eines dunklen Fahrzeugs aus ungewöhnlicher Perspektive', category: 'Automotive', title: 'Aus der Dunkelheit', year: '2025' },

  // Portrait
  { id: 'portrait-01', ...img('portrait', 'portrait-01'), alt: 'Editorial Portrait eines Mannes mit herbstlicher Kulisse', category: 'Portrait', title: 'Herbstlicht', year: '2025', focalY: 20 },
  { id: 'portrait-02', ...img('portrait', 'portrait-02'), alt: 'Portrait einer Tänzerin im Studio mit natürlichem Licht', category: 'Portrait', title: 'Bewegung', year: '2025', focalY: 12 },
  { id: 'portrait-03', ...img('portrait', 'portrait-03'), alt: 'Street-Style Portrait eines Mannes in urbanem Umfeld', category: 'Portrait', title: 'Urbane Haltung', year: '2025', focalY: 20 },
  { id: 'portrait-04', ...img('portrait', 'portrait-04'), alt: 'Business-Portrait einer Frau an ihrem Arbeitsplatz', category: 'Portrait', title: 'Klarheit', year: '2025', focalY: 25 },
  { id: 'portrait-05', ...img('portrait', 'portrait-05'), alt: 'Schwarz-Weiss Portrait eines Mannes mit markantem Ausdruck', category: 'Portrait', title: 'Ruhe', year: '2025', focalY: 20 },
  { id: 'portrait-06', ...img('portrait', 'portrait-06'), alt: 'Charakterportrait eines Mannes in Schwarz-Weiss mit Sonnenbrille', category: 'Portrait', title: 'Charakterkopf', year: '2025', focalY: 30 },
  { id: 'portrait-07', ...img('portrait', 'portrait-07'), alt: 'Actionportrait eines Snowboarders vor alpiner Bergkulisse', category: 'Portrait', title: 'Höhenlage', location: 'Schweizer Alpen', year: '2025', focalY: 15 },
  { id: 'portrait-08', ...img('portrait', 'portrait-08'), alt: 'Portrait eines Mannes in Wintersport-Bekleidung vor Bergpanorama', category: 'Portrait', title: 'Gipfelblick', location: 'Schweizer Alpen', year: '2025', focalY: 15 },
  { id: 'portrait-09', ...img('portrait', 'portrait-09'), alt: 'Lifestyle-Portrait, casual-elegant gekleidet, sitzend', category: 'Portrait', title: 'Lässige Präsenz', year: '2025', focalY: 25 },
  { id: 'portrait-10', ...img('portrait', 'portrait-10'), alt: 'Nahportrait eines Mannes mit nachdenklichem Ausdruck', category: 'Portrait', title: 'Stille Präsenz', year: '2025', focalY: 35 },

  // Events
  { id: 'event-01', ...img('events', 'event-01'), alt: 'Bar-Szene mit Service im Fokus bei einem Event', category: 'Events', title: 'Am Tresen', year: '2025' },
  { id: 'event-02', ...img('events', 'event-02'), alt: 'Team-Moment hinter den Kulissen in der Küche', category: 'Events', title: 'Backstage', year: '2025' },
  { id: 'event-03', ...img('events', 'event-03'), alt: 'Patisserie-Detail bei der Zubereitung von Gebäck', category: 'Events', title: 'Handwerk', year: '2025' },
  { id: 'event-04', ...img('events', 'event-04'), alt: 'Automotive-Lifestyle-Café mit Sportwagen im Innenraum', category: 'Events', title: 'Besonderes Ambiente', year: '2025' },
  { id: 'event-05', ...img('events', 'event-05'), alt: 'Grillstation mit Zubereitung am offenen Feuer', category: 'Events', title: 'Offenes Feuer', year: '2025' },
  { id: 'event-06', ...img('events', 'event-06'), alt: 'Ausgelassene Stimmung in geselliger Runde im Freien', category: 'Events', title: 'Gesellig', year: '2025' },
  { id: 'event-07', ...img('events', 'event-07'), alt: 'Genuss-Moment an einem gedeckten Tisch im Freien', category: 'Events', title: 'Genuss', year: '2025' },
  { id: 'event-08', ...img('events', 'event-08'), alt: 'Party-Stimmung mit DJ-Setup im Freien', category: 'Events', title: 'Goldene Stunde', year: '2025' },
  { id: 'event-09', ...img('events', 'event-09'), alt: 'Candider Moment an der Bar', category: 'Events', title: 'Candid', year: '2025' },
  { id: 'event-10', ...img('events', 'event-10'), alt: 'Bar-Atmosphäre mit candidem Blick in die Kamera', category: 'Events', title: 'Atmosphäre', year: '2025' },
  { id: 'event-11', ...img('events', 'event-11'), alt: 'Tanzmoment in ausgelassener Menge', category: 'Events', title: 'In Bewegung', year: '2025' },
  { id: 'event-12', ...img('events', 'event-12'), alt: 'Spontane Strandszene mit Sonnenschirm', category: 'Events', title: 'Am Strand', year: '2025' },

  // Real Estate
  { id: 'realestate-01', ...img('realestate', 'realestate-01'), alt: 'Moderne Küche mit Kochinsel und klarer Linienführung', category: 'Real Estate', title: 'Küche', year: '2025' },
  { id: 'realestate-02', ...img('realestate', 'realestate-02'), alt: 'Schlafzimmer mit Meerblick', category: 'Real Estate', title: 'Ausblick', year: '2025' },
  { id: 'realestate-03', ...img('realestate', 'realestate-03'), alt: 'Wohnzimmer mit Panoramafenster und Bergblick', category: 'Real Estate', title: 'Panorama', year: '2025' },
  { id: 'realestate-04', ...img('realestate', 'realestate-04'), alt: 'Offener, lichtdurchfluteter Wohn- und Küchenbereich', category: 'Real Estate', title: 'Raum & Licht', year: '2025' },
  { id: 'realestate-05', ...img('realestate', 'realestate-05'), alt: 'Minimalistisch gestaltetes Badezimmer', category: 'Real Estate', title: 'Reduktion', year: '2025' },
  { id: 'realestate-06', ...img('realestate', 'realestate-06'), alt: 'Bad-Ensemble mit freistehender Wanne', category: 'Real Estate', title: 'Ensemble', year: '2025' },
  { id: 'realestate-07', ...img('realestate', 'realestate-07'), alt: 'Freistehende Badewanne auf Holzboden in warmem Ambiente', category: 'Real Estate', title: 'Ruhepol', year: '2025' },
  { id: 'realestate-08', ...img('realestate', 'realestate-08'), alt: 'Arbeitsbereich mit Blick auf die Terrasse', category: 'Real Estate', title: 'Ausblick zum Arbeiten', year: '2025' },
];

/**
 * TODO: eigene Brand-Content-Bilder ersetzen.
 * Solange keine dedizierten Brand-Content-Aufnahmen von DZ Visuals vorliegen,
 * zeigt dieser Tab eine kuratierte Mischung der stärksten Bilder aus den
 * anderen Kategorien (Automotive, Portrait, Events, Real Estate).
 */
export const brandContentItems: PortfolioItem[] = [
  { id: 'brand-01', ...img('events', 'event-04'), alt: 'Automotive-Lifestyle-Café mit Sportwagen im Innenraum', category: 'Brand Content', title: 'Backstage Moment', year: '2025' },
  { id: 'brand-02', ...img('automotive', 'automotive-09'), alt: 'Freigelegter V8-Motorraum in voller Detailschärfe', category: 'Brand Content', title: 'Kraft im Detail', year: '2025' },
  { id: 'brand-03', ...img('portrait', 'portrait-06'), alt: 'Charakterportrait eines Mannes in Schwarz-Weiss mit Sonnenbrille', category: 'Brand Content', title: 'Charakterkopf', year: '2025', focalY: 30 },
  { id: 'brand-04', ...img('realestate', 'realestate-04'), alt: 'Offener, lichtdurchfluteter Wohn- und Küchenbereich', category: 'Brand Content', title: 'Raum & Licht', year: '2025' },
  { id: 'brand-05', ...img('automotive', 'automotive-14'), alt: 'Felgen- und Bremssattel-Detail mit Porsche-Wappen', category: 'Brand Content', title: 'Präzision', year: '2025' },
  { id: 'brand-06', ...img('portrait', 'portrait-04'), alt: 'Business-Portrait einer Frau an ihrem Arbeitsplatz', category: 'Brand Content', title: 'Klarheit', year: '2025', focalY: 25 },
];

/** Hero-Bild (Originalzustand): cinematisches AMG-GT-Stimmungsbild. */
export const heroImage =
  'https://d64gsuwffb70l.cloudfront.net/6a140b8aff90028e7715676c_1779698690100_d0146267.png';

/** Atmosphärisches Stimmungsbild für die Problem-Sektion ("Ersteindruck"). */
export const moodPortrait = portfolioItems.find((p) => p.id === 'automotive-04')!;

/** Bilder für die Vorher-/Nachher-Wirkung. */
export const beforeImg =
  'https://d64gsuwffb70l.cloudfront.net/6a140b8aff90028e7715676c_1779698859738_da24c207.png';
export const afterImg = portfolioItems.find((p) => p.id === 'automotive-12')!;

/** Portrait von Daniele für den "Über mich"-Abschnitt. */
export const aboutPhoto = {
  ...img('about', 'daniele-portrait'),
  alt: 'Daniele, Fotograf und Gründer von DZ Visuals',
};

/** Kuratierte Auswahl für die Galerie direkt nach dem Header. */
export const galleryItems: PortfolioItem[] = [
  portfolioItems.find((p) => p.id === 'automotive-04')!,
  portfolioItems.find((p) => p.id === 'portrait-06')!,
  portfolioItems.find((p) => p.id === 'realestate-04')!,
  portfolioItems.find((p) => p.id === 'automotive-12')!,
  portfolioItems.find((p) => p.id === 'event-04')!,
  portfolioItems.find((p) => p.id === 'portrait-01')!,
  portfolioItems.find((p) => p.id === 'automotive-13')!,
  portfolioItems.find((p) => p.id === 'event-08')!,
  portfolioItems.find((p) => p.id === 'realestate-03')!,
  portfolioItems.find((p) => p.id === 'portrait-10')!,
  portfolioItems.find((p) => p.id === 'automotive-09')!,
  portfolioItems.find((p) => p.id === 'event-11')!,
];
