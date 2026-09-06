export type PortfolioCategory = 'Automotive' | 'Portrait' | 'Events' | 'Brand Content';

export type PortfolioItem = {
  id: string;
  /** Pfad zur echten Aufnahme unter /public/portfolio/. */
  src: string;
  /** Fallback-Stimmungsbild, falls die echte Datei noch nicht abgelegt wurde. */
  fallback: string;
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
};

/**
 * Die `src`-Pfade verweisen auf die echten Portfolio-Dateien in
 * /public/portfolio/. Solange die jeweilige Datei dort noch nicht liegt,
 * fällt das <img>-Element automatisch auf `fallback` zurück
 * (siehe onError-Handler in Portfolio.tsx).
 *
 * Projekttitel und Alt-Texte sind bewusst beschreibend gehalten und
 * können jederzeit auf reale Projektbezeichnungen aktualisiert werden,
 * ohne dass das Layout verändert werden muss.
 */
export const portfolioItems: PortfolioItem[] = [
  {
    id: 'automotive-01',
    src: '/portfolio/automotive-01.jpg',
    fallback: 'https://d64gsuwffb70l.cloudfront.net/6a140b8aff90028e7715676c_1779698690100_d0146267.png',
    alt: 'Automotive-Aufnahme: dunkler Sportwagen bei Nacht mit cinematischer Lichtführung',
    category: 'Automotive',
    title: 'Nächtliche Linien',
    location: 'Schweiz',
    year: '2025',
  },
  {
    id: 'portrait-01',
    src: '/portfolio/portrait-01.jpg',
    fallback: 'https://d64gsuwffb70l.cloudfront.net/6a140b8aff90028e7715676c_1779698718893_635e23f7.png',
    alt: 'Editorial Portrait mit dramatischem Seitenlicht und tiefen Schatten',
    category: 'Portrait',
    title: 'Stille Präsenz',
    year: '2025',
  },
  {
    id: 'automotive-02',
    src: '/portfolio/automotive-02.jpg',
    fallback: 'https://d64gsuwffb70l.cloudfront.net/6a140b8aff90028e7715676c_1779698751655_ba89a675.png',
    alt: 'Automotive-Detailaufnahme: Scheinwerfer mit Regentropfen im Studiolicht',
    category: 'Automotive',
    title: 'Detailstudie',
    year: '2025',
  },
  {
    id: 'portrait-02',
    src: '/portfolio/portrait-02.jpg',
    fallback: 'https://d64gsuwffb70l.cloudfront.net/6a140b8aff90028e7715676c_1779698730199_35e19bae.png',
    alt: 'Portrait einer Person im Editorial-Stil mit warmem Lichtakzent',
    category: 'Portrait',
    title: 'Charakter',
    year: '2025',
  },
  {
    id: 'event-01',
    src: '/portfolio/event-01.jpg',
    fallback: 'https://d64gsuwffb70l.cloudfront.net/6a140b8aff90028e7715676c_1779698810557_ccee2cd1.png',
    alt: 'Eventfotografie: warm beleuchtete Szene mit Bokeh im Hintergrund',
    category: 'Events',
    title: 'Goldene Stunde',
    year: '2025',
  },
  {
    id: 'brand-01',
    src: '/portfolio/brand-01.jpg',
    fallback: 'https://d64gsuwffb70l.cloudfront.net/6a140b8aff90028e7715676c_1779698828342_7020f7c9.jpg',
    alt: 'Brand-Content-Aufnahme: minimalistische Produktinszenierung auf dunkler Fläche',
    category: 'Brand Content',
    title: 'Form & Material',
    year: '2025',
  },
  {
    id: 'automotive-03',
    src: '/portfolio/automotive-03.jpg',
    fallback: 'https://d64gsuwffb70l.cloudfront.net/6a140b8aff90028e7715676c_1779698771625_502d1db7.png',
    alt: 'Automotive-Aufnahme: Heckpartie eines Fahrzeugs in moody Beleuchtung',
    category: 'Automotive',
    title: 'Silhouette',
    year: '2025',
  },
  {
    id: 'portrait-03',
    src: '/portfolio/portrait-03.jpg',
    fallback: 'https://d64gsuwffb70l.cloudfront.net/6a140b8aff90028e7715676c_1779698714041_015c73d2.png',
    alt: 'Portrait in tiefen Schwarz- und Beigetönen, ruhige Editorial-Atmosphäre',
    category: 'Portrait',
    title: 'Ruhe',
    year: '2025',
  },
  {
    id: 'event-02',
    src: '/portfolio/event-02.jpg',
    fallback: 'https://d64gsuwffb70l.cloudfront.net/6a140b8aff90028e7715676c_1779698796307_95a821ed.png',
    alt: 'Eventfotografie: candider Moment in dunkler Location mit Lichtakzenten',
    category: 'Events',
    title: 'Atmosphäre',
    year: '2025',
  },
  {
    id: 'automotive-04',
    src: '/portfolio/automotive-04.jpg',
    fallback: 'https://d64gsuwffb70l.cloudfront.net/6a140b8aff90028e7715676c_1779698754007_c6b1a9d6.png',
    alt: 'Automotive-Detail: Felge und Lack im streifenden Licht',
    category: 'Automotive',
    title: 'Material',
    year: '2025',
  },
  {
    id: 'brand-02',
    src: '/portfolio/brand-02.jpg',
    fallback: 'https://d64gsuwffb70l.cloudfront.net/6a140b8aff90028e7715676c_1779698829998_00019171.jpg',
    alt: 'Brand-Content: hochwertige Inszenierung mit warmem Champagner-Akzent',
    category: 'Brand Content',
    title: 'Editorial Still',
    year: '2025',
  },
];

/** Schnellzugriff auf das Hero-Bild (oberstes Automotive-Motiv). */
export const heroImage = portfolioItems[0].fallback;
export const moodPortrait = portfolioItems[1].fallback;

/** Bilder für die Vorher-/Nachher-Wirkung (keine Kundenarbeiten). */
export const beforeImg =
  'https://d64gsuwffb70l.cloudfront.net/6a140b8aff90028e7715676c_1779698859738_da24c207.png';
export const afterImg =
  'https://d64gsuwffb70l.cloudfront.net/6a140b8aff90028e7715676c_1779698876457_5c603c2f.jpg';
