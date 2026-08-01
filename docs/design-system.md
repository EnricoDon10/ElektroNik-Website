# ElektroNik Design System – Phase-1-Spezifikation

## Prinzipien

1. **Präzision vor Dekoration:** Jede Linie, Farbe und Bewegung hat eine Informations- oder Markenfunktion.
2. **Kompakte Premium-Flächen:** Großzügige Abstände, aber begrenzte Text- und Containerbreiten.
3. **Neongrün ist Energie:** Grün markiert Handlung, aktiven Status oder den Energiepfad – nicht beliebige Flächen.
4. **Technik bleibt menschlich:** Technische Details werden durch verständliche Texte und echte Projektbilder geerdet.
5. **Responsive ist eigenständig:** Desktop, Tablet und Mobile erhalten bewusst komponierte Varianten.

## Farb-Tokens

Die vorhandenen Farben bilden eine gute Basis. Für Phase 2 wird folgende semantische Ordnung empfohlen:

| Token | Richtwert | Verwendung |
| --- | --- | --- |
| `--color-navy-950` | `#050C15` | Footer, tiefste Flächen |
| `--color-navy-900` | `#07111F` | Hero, Haupt-Dunkelfläche |
| `--color-navy-800` | `#0C1A2A` | Kontakt, Karten auf Navy |
| `--color-navy-700` | `#122337` | Hover/angehobene technische Flächen |
| `--color-paper` | `#F4F5EF` | Haupt-Lesefläche |
| `--color-surface` | `#FFFFFF` | Formulare und ausgewählte Karten |
| `--color-ink` | `#081321` | Haupttext auf hell |
| `--color-muted` | etwa `#617080` | Sekundärtext auf hell; Kontrast prüfen |
| `--color-energy` | `#CFFF19` | primärer CTA, aktiver Pfad, Fokusakzent |
| `--color-energy-soft` | `#E3FF78` | Hover des grünen CTA |
| `--color-whatsapp` | `#25D366` | ausschließlich WhatsApp-Markenzeichen |

Transparente Texte auf Navy müssen für ihre tatsächliche Schriftgröße gegen WCAG-Kontrast geprüft werden. Werte wie `rgba(255,255,255,.42)` bis `.55` sind nur für große/dekorative Labels akzeptabel, nicht pauschal für wichtige Information.

## Typografie

### Empfehlung

- **Display:** geometrisch-humanistische Sans mit charaktervoller, aber nicht futuristischer Form; lokal gehostet und lizenziert, falls verfügbar.
- **Text/UI:** robuste Sans mit sehr guter Lesbarkeit.
- **Technische Labels:** Mono nur für Kapitelnummern, Messpunkte und kurze Statuszeilen.

Bis eine Schriftlizenz bestätigt ist, bleibt der vorhandene System-Stack eine valide performante Basis. Externe Font-CDNs sind für statischen Export, Datenschutz und IONOS nicht die bevorzugte Lösung.

### Skala

| Rolle | Desktop | Mobile | Hinweise |
| --- | --- | --- | --- |
| Hero H1 | `clamp(56px, 5.2vw, 84px)` | `clamp(44px, 13vw, 58px)` | 0.94–1.0 line-height; max. 2–3 Zeilen |
| Kapitel H2 | `clamp(42px, 4.2vw, 64px)` | `clamp(36px, 10vw, 48px)` | nicht jedes Kapitel maximal groß |
| H3 Karte | 22–28 px | 21–25 px | kompakt |
| Lead | 18–20 px | 16–18 px | 1.55–1.65 line-height |
| Body | 15–17 px | 15–16 px | 1.6–1.75 line-height |
| UI/CTA | 13–15 px | 14–16 px | hohe Gewichtung |
| Label/Mono | 10–12 px | 10–11 px | kurze Texte, Letterspacing kontrollieren |

Fließtexte erhalten etwa 60–75 Zeichen pro Zeile und maximal 600–720 px Breite.

## Layout-Tokens

```css
:root {
  --content-max: 1320px;
  --content-reading: 1120px;
  --content-narrow: 720px;
  --page-padding: clamp(20px, 4vw, 64px);
  --section-space: clamp(96px, 9vw, 152px);
  --header-height: 80px;
}
```

Empfohlene Bereichsbreiten:

- Hero, Leistungen, Qualitätsbereich: 1320 px
- Kontakt: 1240–1320 px
- Ablauf und FAQ-Gesamtkomposition: 1080–1120 px
- Akkordeon/Fließtext: 680–720 px
- Rechtstexte: vorhandene 820 px auf etwa 720–760 px Lesebreite prüfen

## Spacing-System

Basisraster: 4 px. Bevorzugte Schritte: 4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96, 120, 152 px.

- Karteninnenraum: 24–36 px Desktop, 22–28 px Mobile
- Kartenabstand: 16–20 px
- Heading zu Lead: 24–32 px
- Lead zu CTA: 28–36 px
- Kapitelkopf zu Inhalt: 48–72 px
- Touch-Ziele: mindestens 44 × 44 px

## Radien, Linien und Tiefe

- kleine Bedienelemente: 8 px
- Karten: 12–16 px
- große Bild-/Formularfläche: 20–24 px
- Pillen nur für Tags und bewusst runde CTAs
- helle Linie: `rgba(7,17,31,.12–.16)`
- dunkle Linie: `rgba(255,255,255,.12–.16)`
- Schatten selten; Karten bevorzugt über Kontur und Flächenwert trennen
- Glow nur lokal am Energieimpuls, nicht als Standard-Schlagschatten

## Raster und Breakpoints

Die endgültigen Breakpoints sollen vom Inhalt statt von Geräten abgeleitet werden. Ausgangspunkt:

- bis 479 px: Small Mobile
- 480–767 px: Large Mobile
- 768–1023 px: Tablet
- 1024–1279 px: Small Desktop / Landscape Tablet
- ab 1280 px: Desktop
- ab 1920 px: Large Desktop, Inhalt bleibt auf 1320 px begrenzt

Media Queries sollen konsistent mobile-first oder klar nach einer Richtung geordnet werden. Die aktuelle Abfolge `1100 → 900 → 760 → 420` ist verständlich, besitzt aber einen problematischen Hero-Zustandswechsel zwischen 900 und 1100 px.

## Komponentenregeln

### Header

- 76–82 px Höhe
- transparenter Hero-Zustand, stabiler gescrollter Zustand ohne Layout Shift
- aktive Navigation über Linie und Textkontrast
- Desktop-CTA grün, mindestens 44 px hoch
- Mobile Menü: Fokus beim Öffnen sinnvoll setzen, Fokus einschließen, Escape schließen, Fokus zurückgeben

### Buttons

- Primary: Energy-Grün auf Ink, 52–56 px Höhe
- Secondary Dark: transparente Navy-Fläche mit heller Kontur
- Text Link: präziser Pfeil, keine große Bewegung
- Hover-Anhebung höchstens 2 px
- Fokus nicht allein über Farbwechsel; sichtbarer Ring mit ausreichendem Abstand

### Leistungskarte

- Nummer + lineares Icon oben
- Titel, Copy, Tags, CTA
- gleichmäßige Höhe innerhalb einer Zeile
- Hover maximal 2–3 px, keine starke Skalierung
- vollständiger dunkler Farbumschlag optional, bevorzugt aber eine ruhigere Aktivierung

### Iconografie

- einheitliches lineares Raster, etwa 20–24 px
- Strichstärke konsistent, runde oder leicht eckige Enden einheitlich
- keine Mischung aus Buchstaben-Platzhaltern, Emoji, gefüllten und linearen Icons
- domänenspezifische Motive: Leitung, Netzwerk, Wallbox, Solar/Energiefluss, Prüfhaken/Messung, Werkzeug/Service
- dekorative Icons `aria-hidden`; informative Icons erhalten Textalternative über den umgebenden Link

### Formular

- sichtbare Labels bleiben erhalten
- Inputhöhe mindestens 48 px
- Required/Optional verständlich und nicht nur farblich
- Fehler- und Statusmeldungen direkt am Feld beziehungsweise als Live-Region
- WhatsApp-Übergabe klar beschreiben

### Bildflächen

- echte Bilder mit festem Seitenverhältnis und reservierter Größe gegen Layout Shift
- Desktop bevorzugt 4:3 oder 5:4, Mobile Crop 1:1 oder 4:3
- technische Annotationen nur, wenn sie das Motiv unterstützen
- keine fremden Bilder ohne Lizenzdokumentation

## Zustände

Für jedes interaktive Element werden Default, Hover, Focus Visible, Active, Disabled und – falls relevant – Loading/Success/Error definiert. Hover darf nie die einzige Rückmeldung sein. Touch-Geräte erhalten keine cursor- oder mausabhängige Parallax-Reaktion.

## Accessibility-Grenzen des visuellen Systems

- Textkontrast mindestens 4.5:1, große Texte mindestens 3:1
- Fokusindikator auf Navy und Paper gleichermaßen sichtbar
- Informationen nicht ausschließlich in Energy-Grün codieren
- Mindesttouchfläche 44 px, bevorzugt 48–56 px
- Headline-Zeilen dürfen bei 200 % Zoom nicht abgeschnitten werden
- dekorative technische Raster und Orbits aus dem Accessibility Tree entfernen
- Reduced Motion zeigt alle Inhalte sofort und behält klare Zustände

## Wiederverwendung und Neustrukturierung

### Direkt weiterverwenden

- zentrale Daten in `app/data/site-content.ts`
- semantische Seitenkapitel und IDs
- Skip-Link und globale Focus-Visible-Basis
- Telefonnummer, E-Mail, Adresse, Öffnungszeiten und Links
- WhatsApp-Nachrichtenerstellung
- Google-Maps-Routenlink
- FAQ-Inhalte und Grundprinzip des Akkordeons
- SEO-/Structured-Data-Grundlage

### Visuell/strukturell überarbeiten

- Header-Menü und Fokusführung
- Hero-CTA-Hierarchie und Hero-Visual
- Kontakt- und Leistungs-Iconografie
- mobile Kompetenzdarstellung
- Qualitätsbildfläche
- Prozesslinie und ihre Responsive-Variante
- FAQ-Zustände und Reduced-Motion-Verhalten
- Floating Mobile Actions

## Design-QA vor Implementierungsfreigabe

- 1366 × 768: Hero füllt den ersten Bildschirm, Leistungen nicht deutlich sichtbar
- 2560 × 1440: Text und Visual bleiben als kompakte Gruppe zusammen
- 1024 × 768: keine 900-px-Zwangshöhe, keine gequetschte Komposition
- 375 × 667: CTAs sichtbar, Headline unbeschnitten, kein mehrschirmiger Chip-Block
- alle Texte und Fokuszustände kontrastgeprüft
- echte Bildquelle, Lizenz und Mobile Crop bestätigt
