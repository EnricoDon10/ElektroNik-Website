# Accessibility-Checkliste
Statuslegende: **Vorhanden** = im Quellcode belegt; **Browsergeprüft** = mit Playwright/Chromium in Phase 3 belegt; **Offen** = Änderung, manuelle Prüfung oder Entscheidung nötig.

## Phase-3-Status

- [x] **Browsergeprüft:** 162 Tests bestanden in 375×667, 390×844, 430×932, 768×1024, 1024×768, 1366×768, 1440×900, 1920×1080 und 2560×1440; 9 Breakpoint-Skips waren beabsichtigt.
- [x] **Browsergeprüft:** Keine automatisiert festgestellte horizontale Überbreite, kein verdeckter zentraler CTA, keine Hydration-/Browserfehler und CLS höchstens `0.1`.
- [ ] **Offen:** Die automatisierte Chromium-Prüfung ersetzt keine Tests mit NVDA, VoiceOver, Firefox, Safari, Zoom, Forced Colors oder eine manuelle Kontrastmessung.

## Struktur und Navigation

- [x] **Vorhanden:** Dokumentensprache ist `de`.
- [x] **Vorhanden:** Skip-Link führt zu `#main-content`; Ziel ist mit `tabIndex={-1}` fokussierbar.
- [x] **Vorhanden:** Hauptseite und Rechtstexte besitzen ein `main`.
- [x] **Vorhanden:** Pro Seite existiert eine H1; nachfolgende Bereiche verwenden H2/H3.
- [x] **Vorhanden:** Hauptnavigation hat einen zugänglichen Namen.
- [x] **Vorhanden:** Aktiver Navigationsbereich wird mit `aria-current="location"` ausgezeichnet.
- [x] **Browsergeprüft:** Mobiles Menü setzt den Initialfokus, begrenzt Fokus im Header, setzt Außeninhalte `inert`, sperrt Scrollen und stellt den Fokus nach Escape wieder her.
- [x] **Browsergeprüft (Chromium):** Skip-Link und Ankernavigation funktionieren in allen neun Ziel-Viewports; weitere Browser bleiben offen.
- [x] **Vorhanden:** Nicht interaktive Prozess-`article` besitzen keine unnötigen `tabIndex`-Stopps mehr.

## Tastatur und Fokus

- [x] **Vorhanden:** Globaler, kontrastreicher `:focus-visible`-Ring.
- [x] **Vorhanden:** Escape schließt das mobile Menü und fokussiert den Menübutton.
- [x] **Vorhanden:** FAQ nutzt native Buttons.
- [ ] **Später testen:** Logische Tabreihenfolge über Header, Hero, Karten, FAQ, Kontakt und Footer.
- [ ] **Später testen:** Fokus wird nicht von fixen Header-/Schnellkontakt-Elementen verdeckt.
- [ ] **Später testen:** Browser-Zoom bei 200 % und Textzoom bis 200 % ohne Inhaltsverlust.
- [ ] **Später testen:** Fokuskontrast auf Navy, Grün, Weiß und Off-White.

## Mobile Menü

- [x] **Vorhanden:** Menübutton hat `aria-expanded`, `aria-controls` und wechselnden zugänglichen Namen.
- [x] **Vorhanden:** Geschlossenes Menü ist per `display:none` nicht fokussierbar.
- [x] **Browsergeprüft:** Beim Öffnen liegt der Fokus auf dem ersten Menüpunkt.
- [x] **Browsergeprüft:** Hintergrund ist während des geöffneten Menüs über `inert` aus der Navigation genommen.
- [ ] **Offen:** Gewünschtes Verhalten nach Auswahl eines Ankerlinks definieren und Fokus sinnvoll zum Ziel führen.
- [x] **Browsergeprüft:** Escape, Tab und Shift+Tab funktionieren in allen fünf Menü-Viewports; dynamische Rotation bei geöffnetem Menü bleibt ein manueller Test.

## Inhalte, Links und Touch

- [x] **Vorhanden:** Telefon, E-Mail, WhatsApp und Maps sind echte Links mit verständlichem Kontext oder `aria-label`.
- [x] **Vorhanden:** Dekorative Symbole sind überwiegend vor Screenreadern verborgen.
- [x] **Browsergeprüft:** Header-CTA und Menübutton erreichen in allen relevanten Viewports mindestens 44 × 44 CSS-Pixel.
- [ ] **Später testen:** Alle Textlinks und Footerlinks auf Zielgröße/Abstand, besonders bei Touch und Zoom.
- [ ] **Später testen:** Linkzweck der sechs Hero-Chips und Service-CTAs im Screenreader-Kontext.
- [ ] **Offen:** Externe Links, die neue Tabs öffnen, konsistent ankündigen oder UX-Entscheidung dokumentieren.

## Formulare und Status

- [x] **Vorhanden:** Alle Eingaben sind über umschließende native Labels beschriftet.
- [x] **Vorhanden:** Name/E-Mail haben sinnvolle Autocomplete-Werte; E-Mail nutzt `type="email"`.
- [x] **Vorhanden:** Nachricht ist Pflichtfeld und hat eine native Mindestlänge.
- [x] **Vorhanden:** Formularhinweis ist per `aria-describedby` dem Submit-Button zugeordnet.
- [x] **Vorhanden:** Statusausgabe nutzt `aria-live="polite"`.
- [x] **Browsergeprüft:** Popup-Blockierung erzeugt einen verständlichen Fehler statt einer Erfolgsmeldung.
- [x] **Browsergeprüft:** Native Mindestlängenvalidierung fokussiert die ungültige Nachricht und verhindert den Popup-Aufruf; Zoom, Autocomplete, E-Mail-Fehlertext und WhatsApp-Rückkehr bleiben manuell offen.
- [ ] **Später testen:** Statusmeldung wird von NVDA/VoiceOver genau einmal und verständlich angesagt.

## FAQ

- [x] **Vorhanden:** Native Buttons mit `aria-expanded` und `aria-controls`.
- [x] **Vorhanden:** Antworten sind als benannte Regionen gekoppelt.
- [x] **Vorhanden:** Sichtbarer Text bleibt unabhängig von Farbe verständlich.
- [ ] **Später testen:** Geschlossene Antworten sind in Browser-/Screenreader-Kombinationen wirklich verborgen.
- [x] **Browsergeprüft:** Fokus bleibt beim FAQ-Aus-/Einklappen per Enter und Leertaste stabil; ARIA-Zustände bleiben synchron.

## Karte und Drittinhalte

- [x] **Vorhanden:** iframe hat einen aussagekräftigen Titel und `loading="lazy"`.
- [x] **Vorhanden:** Adresse und externer Maps-Link stehen außerhalb der eigentlichen Kartenbedienung zur Verfügung.
- [ ] **Teilweise umgesetzt (P0):** Technisches Zwei-Klick-Laden ist browsergeprüft; Datenschutzerklärung, Rechtsgrundlage und rechtliche Freigabe bleiben offen.
- [ ] **Später testen:** Karte mit Tastatur, Screenreader, Content-Blocker, ausgeschaltetem JavaScript und langsamer Verbindung.
- [ ] **Offen:** Fehler-/Blockierzustand mit weiterhin lesbarer Adresse und Wegbeschreibungslink definieren.

## Bewegung und visuelle Wahrnehmung

- [x] **Vorhanden:** `prefers-reduced-motion: reduce` deaktiviert Smooth Scroll und verkürzt Animationen/Transitionen global.
- [x] **Vorhanden:** Zentrale Informationen sind nicht ausschließlich über Animation oder Farbe verfügbar.
- [x] **Browsergeprüft:** Reduced Motion zeigt Hero, Reveals, Chips und Prozesszustand unmittelbar im statischen Endzustand.
- [ ] **Später testen:** Keine vestibulär problematische Bewegung, kein automatisches horizontales Scrollen.
- [ ] **Später testen:** Kontrastmessung nach WCAG 2.2 AA für alle Text-, Fokus- und UI-Zustände.
- [ ] **Später testen:** Windows High Contrast/Forced Colors.

## Responsive und Reflow

- [x] **Browsergeprüft:** 375×667, 390×844, 430×932, 768×1024, 1024×768, 1366×768, 1440×900, 1920×1080 und 2560×1440.
- [x] **Browsergeprüft:** Dokument- und Bodybreite sowie sichtbare Kerninhalte wurden unabhängig von `overflow-x: clip` geprüft; kein horizontaler Überstand blieb bestehen.
- [x] **Browsergeprüft:** Keine abgeschnittenen Kern-Headlines, Links, Formfelder, Buttons oder Textinhalte in der Zielmatrix.
- [x] **Vorhanden:** Die doppelte fixe Mobile-Schnellkontaktleiste wurde entfernt; zentrale CTAs wurden auf Überlagerung geprüft.
- [ ] **Später testen:** Reflow bei 320 CSS px Breite gemäß WCAG 1.4.10.

## Rechtliches und redaktionelle Qualität

- [ ] **Offen (P0):** Impressum vollständig und fachlich freigeben.
- [ ] **Offen (P0):** Datenschutzerklärung anhand IONOS, Maps, WhatsApp und Serverlogs vollständig und fachlich freigeben.
- [ ] **Offen:** Alt-Texte für künftige echte Projektbilder anhand ihres konkreten Informationszwecks verfassen; dekorative Bilder leer auszeichnen.
