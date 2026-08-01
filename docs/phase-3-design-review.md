# Phase 3 – Art-Direction- und UX-Umsetzungsgate

Stand: 1. August 2026

Rolle: Agent A – Art Direction/UX Guardian

Status: Umsetzungscheck, keine Produktionsdateien durch Agent A geändert

## Prüfrahmen

Abgeglichen wurden die freigegebenen Dokumente `creative-brief.md`, `creative-direction.md`, `design-system.md`, `page-experience.md` und `motion-spec.md` mit `app/page.tsx`, `app/globals.css`, `app/components/`, `app/data/site-content.ts` sowie der laufenden lokalen Seite. Die Hero-Zustände wurden bei 375 × 667, 390 × 844, 430 × 932, 1024 × 768, 1366 × 768 und 1440 × 900 visuell geprüft und vermessen. Screenshots dienten nur als temporäre Prüfevidenz und werden nicht ins Repository aufgenommen.

Der Bestand besitzt bereits die richtige Navy/Paper/Grün-Basis, den 1320-px-Container, eine klare Kapitelreihenfolge, Kapitelnummern, brauchbare Inhaltsdaten und eine starke Kontaktstrecke. Die folgenden Punkte sind das verbindliche Umsetzungssoll für Phase 3.

## Priorisierte Gate-Liste

### P0 – vor visueller Abnahme zwingend

- [x] Nach Nutzerentscheidung vom 1. August 2026 bleibt **„Projekt unverbindlich anfragen“** ausschließlich im festen Header; im Hero steht nur **„Leistungen ansehen“** linksbündig als Outline-Aktion.
- [ ] Die feste Hero-Höhe `820px` beziehungsweise `900px` entfällt. 1366 × 768 und 1024 × 768 verwenden eine viewportbezogene Komposition ohne künstliche Verlängerung.
- [ ] Mobile wiederholt nicht alle sechs Leistungen im Hero. Sichtbar bleiben das reduzierte Energie-Signet und höchstens zwei bis drei kurze Leistungsanker; alle sechs Leistungen folgen im nächsten Kapitel.
- [ ] Die mobile Doppel-Floating-Aktion entfällt. Der kompakte WhatsApp-CTA im festen Header ist die einzige feste Schnellaktion; Telefon und WhatsApp bleiben im Menü und Kontaktkapitel erreichbar.
- [ ] Buchstabenplatzhalter wie `T`, `@`, `Ö` und `A` sowie inkonsistente Textpfeile werden durch die unten festgelegten Lucide-Icons ersetzt.
- [ ] Der fehlende reale Bildbeleg wird nicht kaschiert: Bis ein freigegebenes ElektroNik-Projektfoto vorliegt, bleibt die Fläche eindeutig als interner Platzhalter markiert und die Seite ist visuell **nicht launchfertig**.
- [ ] Es werden keine Bewertungen, Zertifikate, Reaktionszeiten, Mitarbeiter, Referenzprojekte oder zusätzlichen Unternehmensversprechen erfunden.

### P1 – für Premium-Wirkung zwingend

- [ ] Das H1 folgt `clamp(56px, 5.2vw, 84px)` auf Desktop und `clamp(44px, 12.5vw, 56px)` auf Mobile; der aktuelle Maximalwert 94 px entfällt.
- [ ] Nicht mehr die komplette zweite H1-Zeile ist grün. H1-Text bleibt überwiegend Off-White; Energy-Grün erscheint als präzise Linie beziehungsweise kleiner Akzent. Der feste Header-CTA bleibt die stärkste grüne Handlungsfläche.
- [ ] Die Kompetenzleiste ist ruhig und statisch. Bevorzugt: Paper/Off-White mit dunklem Text und kleinen grünen Knoten statt einer vollflächig leuchtenden grünen Bahn.
- [ ] Leistungskarten erhalten keine dramatische komplette Navy-Invertierung. Hover/Focus: maximal 2–3 px Lift, stärkere Kontur beziehungsweise schmale Energielinie und aktivierter Pfeil.
- [ ] Abschnittsüberschriften werden gegenüber dem Hero klar abgestuft; nicht jedes H2 nutzt die maximale Größe.
- [ ] Ablauf und FAQ bleiben in 1080–1120 px Gesamtbreite; FAQ-Text beziehungsweise Akkordeon bleibt bei ungefähr 680–720 px Lesebreite.
- [ ] Kontaktinformation und Formular bilden eine zusammenhängende Conversion-Einheit; Karte bleibt visuell sekundär.

### P2 – Politur nach erfülltem P0/P1

- [ ] Schatten werden nur für angehobene Großflächen genutzt; Karten trennen sich primär über Kontur und Flächenwert.
- [ ] Energy-Grün codiert nie allein Bedeutung. Aktive Zustände kombinieren Farbe mit Linie, Icon, Text oder Form.
- [ ] Systemschriften bleiben bis zum Nachweis einer lokal lizenzierten Display-Schrift bestehen; kein externer Font-CDN.
- [ ] Technische Raster, Orbits und Annotationen bleiben dekorativ, leise und `aria-hidden`.

## Abschnittsweise Umsetzung

### 1. Header

- Desktop ab 1280 px: 80 px Höhe, Inhalt maximal 1320 px, Logo links, Navigation mittig, Projekt-CTA rechts.
- 1024 × 768: 76 px Höhe, Menümodus; der ausgeschriebene Header-CTA darf bleiben, solange CTA und 44-px-Menübutton nicht kollidieren.
- 375–430 px: Logo, 44-px-Menübutton und kompakter WhatsApp-CTA; keine zusätzliche feste Telefon-/WhatsApp-Doppelreihe.
- Transparenter Zustand über dem Hero; gescrollt nahezu opakes Navy mit feiner Linie. Die Höhe bleibt unverändert, damit kein Layout Shift entsteht.
- Aktive Navigation: heller Text plus kurze grüne Linie, kein Glow.
- Mobile Overlay: erster sinnvoller Fokus beim Öffnen, Fokus innerhalb des Menüs halten, Escape schließen, Hintergrund nicht fokussierbar, Fokus anschließend zum Auslöser zurückgeben.

**Abnahme:** Kein Sprung beim Headerzustand; alle Bedienelemente mindestens 44 × 44 px; Logo, CTA und Menü haben bei 375 px mindestens 12 px visuellen Abstand.

### 2. Hero

- Inhalt: Eyebrow, unveränderte Aussage „Elektromeister für Haus und Industrie“, kurzer Lead, ein linksbündiger Leistungs-CTA, drei bestehende Trust-Signale, Energie-Signet und Scroll-Cue.
- Desktop: Textbreite 620–680 px, Visual 540–620 px, Spaltenabstand 48–72 px; Gesamtgruppe bleibt im 1320-px-Container.
- 1024 × 768: kompakter Zweispalten-Hero, H1 ungefähr 56–62 px, Visual ungefähr 360–420 px, Spaltenabstand 24–36 px; keine 900-px-Mindesthöhe.
- Mobile: Text zuerst; der einzelne Hero-Leistungslink in voller Breite; Signet ungefähr 200–240 px; höchstens zwei bis drei kompakte Anker ohne erneute Langtexte.
- Ein Hauptorbit, eine statische innere Leitungsstruktur, ein Energieimpuls. Kein permanentes Pulsieren des Blitzes und kein Schweben aller Knoten.

**Abnahme:** Header-Projekt-CTA und Hero-Leistungslink sind ohne Scrollen sichtbar. Bei 1366 × 768 und 1440 × 900 beginnt die Kompetenzleiste erst an oder unter der Viewportkante. Bei 375 × 667 bleibt der Hero ungefähr 1 bis maximal 1,25 Viewports hoch. Text und CTA sind auch ohne Motion sofort nutzbar.

### 3. Kompetenzübergang

- Inhalt unverändert: „MEISTERBETRIEB · PERSÖNLICHE BERATUNG · SAUBERE AUSFÜHRUNG · KÖLN & UMGEBUNG“.
- Desktop einzeilig und zentriert; Mobile zwei Zeilen oder bewusst verkürzt, niemals als unsichtbar horizontal scrollende Zeile.
- Keine Rotation, kein schneller Marquee. Optional nur ein einmaliger Linienimpuls beim Eintritt.

**Abnahme:** Alle vier Aussagen sind ohne horizontales Wischen zugänglich; der Übergang konkurriert farblich nicht mit dem Projekt-CTA im Header.

### 4. Leistungen

- 3 × 2 Karten Desktop, 2 × 3 Tablet, 1 × 6 Mobile; 16–20 px Gap.
- Karteninnenraum 28–36 px Desktop und 22–28 px Mobile; Zielhöhe etwa 340–380 px, ohne Textabschneiden.
- Reihenfolge pro Karte: Nummer + Icon, Titel, vorhandener Text, Tags, „Projekt besprechen“.
- Hover/Focus bewegt maximal 2–3 px; Touch zeigt alle Informationen statisch.

**Abnahme:** Gleiche Kartenhöhe je Zeile; kein Text-Clamp; CTA bleibt am Kartenende; jede Karte besitzt sichtbaren Focus-Visible-Zustand und mindestens 44 px hohe CTA-Fläche.

### 5. Warum ElektroNik

- Desktop zweispaltig: Copy links, echtes Projektfoto rechts; darunter die drei bestehenden Qualitätspunkte als Vertrauensachse.
- Tablet/Mobile: Copy → Bild → Qualitätspunkte.
- Benötigtes Hauptbild: reale ElektroNik-Arbeit an Verteilung/Schaltschrank, 4:3, mindestens 2000 px breit; Motivzentrum muss einen 1:1- beziehungsweise 4:3-Mobile-Crop erlauben. Herkunft, Einwilligung und Nutzungsrecht dokumentieren.
- Bis zur Lieferung: zurückhaltender technischer Platzhalter mit eindeutigem Hinweis „Projektfoto ausstehend“. Keine Stockperson und keine generierte Person als echter Mitarbeiter.
- „Wir hinterlassen Lösungen. Keine Fragen.“ nicht wie ein Kunden-Testimonial darstellen. Nur als Markenclaim nutzen, wenn der Auftraggeber diese Formulierung separat bestätigt.

**Abnahme:** Die Bildfläche reserviert ihr Seitenverhältnis ohne CLS. Fehlt die reale Datei oder Freigabe, bleibt das Launch-Gate offen.

### 6. Ablauf

- Desktop: vier Schritte in 1080–1120 px, verbunden durch eine dünne horizontale Leitung.
- 768 × 1024 und Mobile: vertikale Leitung links, Knoten/Nummer und Text rechts.
- Schritte sind keine interaktiven Controls; rein für Hover erzeugte `tabIndex`-Stopps entfallen.
- Scrollfortschritt aktiviert nur Linie und Zustand, blendet aber keinen Inhalt aus. Reduced Motion zeigt die vollständig aktive statische Linie.

**Abnahme:** Reihenfolge Anfrage → Beratung → Angebot → Umsetzung ist auf jeder Breite sofort lesbar; keine Linie suggeriert auf 2-Spalten-Tablet eine falsche Reihenfolge.

### 7. FAQ

- Desktop: Intro links, Akkordeon rechts; Mobile einspaltig.
- Fragen mindestens 56 px hoch, Text links, Plus/Minus rechts; Antwortbreite 680–720 px.
- Ruhige 240–280-ms-Öffnung; bei Reduced Motion sofort. ARIA-Zustand und Sichtbarkeit bleiben synchron.

**Abnahme:** Lange Fragen umbrechen ohne Icon-Kollision; geöffnete Antwort hat keine unnötig große rechte Einrückung; sichtbarer Fokus auf Navy und Paper.

### 8. Kontakt

- 1240–1320 px Gesamtbreite. Desktop: Kontaktinformationen/Karte links, helles WhatsApp-Formular rechts; Mobile vollständig einspaltig.
- Reihenfolge links: Aussage, Telefon, E-Mail, Öffnungszeiten, Karte. Karte bleibt nachrangig und wird erst nach bewusster Auswahl interaktiv geladen.
- Primary CTA des Formulars bleibt „Anfrage in WhatsApp öffnen“. Der bestehende Hinweis, dass erst in WhatsApp versendet wird, bleibt sichtbar.
- Keine feste Aktion darf Karte, Feldlabel, Statusmeldung oder Submit-Button verdecken.

**Abnahme:** Telefonnummer `0151 68488353`, E-Mail `kontakt@elektronik-meisterbetrieb.de`, Adresse `Krieler Str. 115, 50935 Köln` und Zeiten `Montag bis Freitag, 07:00 bis 18:00 Uhr` bleiben unverändert. E-Mail bricht bei 375 px kontrolliert um. Statusfehler und Erfolg unterscheiden sich zusätzlich durch Text/Icon, nicht nur Farbe.

### 9. Footer und Rechtliches

- Footer kompakt: Marke links, Navigation/Kontakt/Rechtliches rechts, Abschlusszeile unten; Mobile sauber gestapelt.
- Keine neue rechtliche Aussage ergänzen. Impressum und Datenschutz bleiben sichtbar unvollständig, bis geprüfte Kundendaten vorliegen.

**Abnahme:** Alle Links haben erkennbare Hover-/Focus-Zustände und ausreichende Touchflächen; kein Floating Element liegt über Footerlinks.

## Verbindliche Lucide-Zuordnung

Die folgenden Exporte sind in der installierten `lucide-react`-Version vorhanden:

| Einsatz | Icon | Regel |
| --- | --- | --- |
| Elektroinstallation | `Cable` | 22–24 px, `strokeWidth={1.8}` |
| Netzwerkverkabelung | `Network` | 22–24 px, `strokeWidth={1.8}` |
| E-Mobilität | `BatteryCharging` | 22–24 px, `strokeWidth={1.8}` |
| PV & Energiemanagement | `SolarPanel` | 22–24 px, `strokeWidth={1.8}` |
| Prüfung & Sicherheit | `ShieldCheck` | 22–24 px, nicht als erfundenes Zertifikat beschriften |
| Service & Störung | `Wrench` | 22–24 px, `strokeWidth={1.8}` |
| Telefon | `Phone` | vorhandenen Text `Telefon` beibehalten |
| E-Mail | `Mail` | vorhandenen Text `E-Mail` beibehalten |
| Öffnungszeiten | `Clock3` | vorhandene Zeiten beibehalten |
| Standort | `MapPin` | dekorativ neben ausgeschriebener Adresse |
| Externer Kartenlink | `ExternalLink` | 14–16 px |
| Karten-/Textlink | `ArrowUpRight` | 14–18 px, maximal 2 px Bewegung |
| Sprung nach unten | `ArrowDown` | 14–18 px |
| Menü öffnen/schließen | `Menu` / `X` | 20–22 px im 44-px-Button |
| Trust-Signal | `Check` | 14–16 px; keine Badge-/Award-Anmutung |

WhatsApp bleibt das vorhandene lokale Marken-SVG; Lucide wird nicht als Ersatz für das WhatsApp-Markenzeichen verwendet. Icons neben sichtbarem Text sind `aria-hidden`; der umgebende Link oder Button trägt den zugänglichen Namen.

## Typografie, Spacing und CTA-Hierarchie

- Display: vorhandener lokaler System-Stack; Gewicht 750–850, enge aber nicht kollidierende Laufweite.
- Hero H1: Desktop `clamp(56px, 5.2vw, 84px)`, Mobile `clamp(44px, 12.5vw, 56px)`, Zeilenhöhe 0.94–1.0.
- Kapitel H2: Desktop `clamp(42px, 4.2vw, 64px)`, Mobile `clamp(36px, 10vw, 48px)`.
- Lead 18–20 px Desktop / 16–18 px Mobile; Body 15–17 px; UI/CTA 14–16 px; Mono-Labels mindestens 10 px.
- Fließtexte 60–75 Zeichen pro Zeile und maximal 600–720 px.
- `--page-padding: clamp(20px, 4vw, 64px)`; auf 430 px mindestens 24 px prüfen, auf 375 px 20 px.
- Abschnittsabstand 96–152 px Desktop und 72–96 px Mobile; Heading zu Lead 24–32 px, Lead zu CTA 28–36 px, Kapitelkopf zu Inhalt 48–72 px.
- Primary: Energy-Grün, 52–56 px hoch, dunkel beschriftet. Secondary: transparent/Outline, gleiche Höhe. Tertiary: Textlink mit kleinem Pfeil. Service-CTA bleibt tertiär.
- Der Header-CTA übernimmt allein die primäre Projekt-Conversion; der Hero-Leistungslink bleibt visuell sekundär.

## Viewport-Abnahme

| Viewport | Gemessener Bestand | Verbindliches Ziel |
| --- | --- | --- |
| 375 × 667 | Hero 1289 px (1,93 Viewports), Visual 551 px, sechs Chips | Hero höchstens ca. 834 px; Header- und Leistungs-CTA sichtbar; Signet 200–220 px; maximal 2–3 Anker |
| 390 × 844 | Hero 1294 px (1,53 Viewports), Visual 551 px, sechs Chips | Hero höchstens ca. 1055 px; ruhige Einspaltenfolge; keine Fixed-Action-Kollision |
| 430 × 932 | Hero 1128 px (1,21 Viewports), Visual 386 px, sechs Chips | Verhältnis darf bleiben, Visual jedoch kompakter und ohne sechsfachen Wiederholungsblock |
| 768 × 1024 | aktuelle CSS-Komposition einspaltig, Visual mit allen Chips | Einspaltiger Hero; Leistungen 2-spaltig; vertikale Prozesslinie; Kontakt nicht gequetscht |
| 1024 × 768 | Hero 900 px, H1 71,7 px, Visual 401 px | Hero circa 768 px ohne 900-px-Zwang; H1 ca. 56–62 px; kompakte Zweispaltenkomposition |
| 1366 × 768 | Hero 820 px, H1 76,5 px, Visual 551 px | Hero mindestens, aber nicht künstlich höher als der erste Wahrnehmungsraum; kompletter Inhalt, Leistungen nicht sichtbar |
| 1440 × 900 | Hero 900 px, H1 80,6 px, Visual 581 px | Geometrie grundsätzlich passend; linksbündigen Leistungs-CTA und ruhige Farbgewichtung umsetzen |
| 1920 × 1080 / 2560 × 1440 | nicht in diesem Lauf visuell erfasst | Inhalt bleibt auf 1320 px begrenzt; Text und Visual driften nicht auseinander |

In den sechs erfassten Viewports war auf Dokumentebene kein zusätzlicher horizontaler Scrollbereich messbar. Da `body { overflow-x: clip; }` Überbreiten maskieren kann, ist dies noch kein abschließender Overflow-Nachweis.

## Visuelles Phase-3-Abnahmegate

Phase 3 ist aus Art-Direction-Sicht abnehmbar, wenn:

- [ ] der Hero in allen Zielhöhen kontrolliert endet und Header-Projekt-CTA sowie Hero-Leistungslink korrekt hierarchisiert sind;
- [ ] Mobile nicht mehr Hero-Chips und Leistungskarten vollständig doppelt zeigt;
- [ ] Green als Energie-/Handlungsakzent und nicht als dominante Dauerfläche eingesetzt wird;
- [ ] alle Service- und Kontakticons der festgelegten Lucide-Sprache folgen;
- [ ] Karten, FAQ, Prozess und Kontakt eine konsistente Radius-, Linien-, Typo- und Spacinglogik verwenden;
- [ ] alle bestehenden Kontaktdaten und Inhalte unverändert geblieben sind;
- [ ] keine unbelegte Aussage oder visuell als echt missverständliche Bildfläche hinzugekommen ist;
- [ ] der fehlende reale Projektbildbeleg weiterhin ausdrücklich als Launch-Blocker dokumentiert ist.
