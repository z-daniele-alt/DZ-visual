# DZ Visuals – Portfolio-Verzeichnis

In diesem Ordner werden die **echten Portfolio-Aufnahmen** von DZ Visuals abgelegt.
Die Bilder werden direkt von der Website unter dem Pfad `/portfolio/<dateiname>` geladen.

## Dateibenennung (verbindlich)

Damit die in `src/data/portfolio.ts` definierten Pfade automatisch greifen, müssen
die Dateien exakt wie folgt benannt werden:

```
public/portfolio/
├── automotive-01.jpg
├── automotive-02.jpg
├── automotive-03.jpg
├── automotive-04.jpg
├── portrait-01.jpg
├── portrait-02.jpg
├── portrait-03.jpg
├── event-01.jpg
├── event-02.jpg
├── brand-01.jpg
└── brand-02.jpg
```

## Empfehlungen

- **Format:** `.jpg` (max. Qualität 85 %) oder `.webp` für beste Performance.
- **Auflösung:** Längste Kante 2400 px – ausreichend für Retina-Displays,
  ohne unnötige Ladezeit.
- **Farbprofil:** sRGB.
- **Orientierung:** Mischung aus Hoch- und Querformat ist erwünscht
  (asymmetrisches Grid).

## Projekttitel & Alt-Texte ändern

Sobald die Dateien hier liegen, kannst du in `src/data/portfolio.ts`
pro Eintrag den `title` (Projekttitel) und den `alt`
(SEO- & Barrierefreiheits-Text) anpassen.

## Solange keine echten Bilder vorhanden sind

Die Website lädt automatisch ein dezentes Stimmungsbild als Fallback,
damit das Layout nie zerbricht. Diese Fallbacks sind **keine
Referenzarbeiten** und werden in der UI nicht als Kundenprojekte ausgewiesen.
