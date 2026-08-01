# Repository-Analyse – Phase 1

Stand: 1. August 2026
Rolle: Agent B – technische Analyse, keine Implementierung
## Prüfrahmen

Diese Analyse beruht auf der statischen Inspektion von `package.json`, `package-lock.json`, `next.config.ts`, `tsconfig.json`, der App-Router-Struktur, allen Komponenten und Seiten unter `app/`, `app/globals.css`, den lokalen Assets unter `public/`, `README.md` sowie `IONOS-DEPLOYMENT-ANLEITUNG.md`. Der aktive Branch wurde als `redesign/high-end-v2` bestätigt. Es wurden keine Dependencies installiert, kein Produktionscode verändert, keine Browser installiert und keine Lint-, TypeScript-, Build- oder Playwright-Läufe ausgeführt. Aussagen zu Laufzeit und Darstellung sind daher begründete Codebefunde und müssen in einer später freigegebenen QA-Phase praktisch verifiziert werden.

## Technischer Iststand

### Stack und Abhängigkeiten

- Next.js `^16.2.12`, React und React DOM `19.2.6`, TypeScript `5.9.3`; `strict` und `noEmit` sind aktiv.
- Node.js ist mit `>=22.13.0` festgelegt. Das passt zur im Lockfile vermerkten Mindestanforderung von Next.js, schränkt aber ältere IONOS-Buildumgebungen ein. Da der Build lokal erfolgt und nur `out/` hochgeladen wird, braucht das Webhosting selbst keine Node-Laufzeit.
- Tailwind CSS 4 und `@tailwindcss/postcss` sind installiert, die Oberfläche ist jedoch vollständig als handgeschriebenes globales CSS umgesetzt. Es gibt derzeit keine Tailwind-Direktiven in `globals.css`; diese Dependencies sind für den sichtbaren Bestand wahrscheinlich ungenutzt und sollten erst in Phase 2 anhand der Buildkette bewertet, nicht vorschnell entfernt werden.
- `motion`, `gsap`, `lucide-react` und `@playwright/test` sind keine direkten Projekt-Dependencies. Der Lockfile-Treffer für `@playwright/test` ist lediglich ein optionaler Peer von Next.js und bedeutet nicht, dass Playwright installiert oder ausführbar ist.
- Es existiert kein Testscript und keine Playwright-Konfiguration. Das ist erwartbar vor Phase 2/QA, muss später gezielt ergänzt werden.
- Das Lockfile ist Version 3 und bildet die im Manifest genannten direkten Versionen konsistent ab; eine Neuinstallation oder Lockfile-Regeneration war nicht Teil dieser Phase.

### Next.js, App Router und statischer Export

- `output: "export"`, `trailingSlash: true` und `images.unoptimized: true` bilden eine schlüssige Basis für statische Verzeichnisse auf IONOS. `robots.ts` erzwingt statische Generierung.
- Der App Router enthält die Startseite sowie `/impressum/` und `/datenschutz/`. Es gibt keine dynamischen Routen, Route Handler, Server Actions oder Laufzeitdatenquellen, die den Export offensichtlich verhindern würden.
- `app/layout.tsx` bleibt eine Server Component. `app/page.tsx`, die Rechtstextseiten und `LocationMap` sind ebenfalls Server Components. Nur `SiteHeader`, `FaqList` und `WhatsAppForm` sind Client Components. Diese Grenze ist grundsätzlich gut: JavaScript wird auf Navigation, Akkordeon und Formular beschränkt.
- Die gesamte Homepage liegt dennoch als großer, monolithischer JSX-Baum in `app/page.tsx`. Für das Redesign steigt damit das Konflikt- und Regressionsrisiko. Semantische Section-Komponenten können weiterhin Server Components bleiben und sollten Daten über Props erhalten.
- `next/image` wird nur für das lokale WhatsApp-SVG verwendet; durch `unoptimized: true` entsteht keine Image-Optimizer-Abhängigkeit. Die OG-PNGs sind Metadaten-Assets, kein sichtbarer Seiteninhalt.
- `npm run start` passt nicht zum dokumentierten Produktions-Workflow eines `output: "export"`-Projekts: Nach dem Export sollte `out/` über einen statischen Server geprüft werden. Die README-Anweisung „build + start“ ist daher mindestens missverständlich und in einer späteren Dokumentationsphase zu korrigieren.

## Daten, SEO und rechtliche Seiten

- Leistungen und FAQ liegen zentral und typisiert in `app/data/site-content.ts`; dieselben FAQ-Daten speisen Oberfläche und JSON-LD. Das verhindert inhaltliche Drift und ist klar wiederverwendbar.
- Globale Metadaten enthalten Titel, Beschreibung, Icons, Open Graph, Twitter Card und ein lokales OG-Bild. `html lang="de"`, Viewport-Theme und eine statische `robots.txt`-Route sind vorhanden.
- Das JSON-LD kombiniert `Electrician` und `FAQPage`, maskiert `<` in der serialisierten Ausgabe und enthält die bestätigten Kontaktdaten sowie Öffnungszeiten. Das ist eine solide SEO-Basis.
- Canonical und öffentliche URL werden nur gesetzt, wenn `NEXT_PUBLIC_SITE_URL` vorhanden ist oder bei einem Production-Build auf die fest codierte Domain zurückgefallen wird. Vor Launch muss geprüft werden, ob `https://elektronik-meisterbetrieb.de` exakt die kanonische, erreichbare HTTPS-Domain ist und ob Weiterleitungen zwischen Hostvarianten sauber sind.
- Es fehlt eine `sitemap.ts`. Für die kleine statische Site ist das kein Exportblocker, aber eine sinnvolle spätere SEO-Ergänzung.
- Impressum und Datenschutz sind bewusst als unvollständig markiert. Sie dürfen nicht als rechtlich fertig gelten. Fehlend sind unter anderem Inhaber-/Unternehmensdaten und die konkrete rechtliche Bewertung von Hosting, Maps und WhatsApp.
- Die Repository-Dateien sind als UTF-8 lesbar; die fehlerhaften Umlaute in einzelnen PowerShell-Ausgaben waren Konsolen-Decodierung, kein belastbarer Beleg für beschädigte Quelldateien.

## Kontakt, WhatsApp und Karte

- Telefon, E-Mail, Adresse und Öffnungszeiten entsprechen den verbindlichen Vorgaben. Telefon- und WhatsApp-Zielnummer werden allerdings an mehreren Stellen dupliziert (`page.tsx`, `SiteHeader`, `WhatsAppForm`) und können später auseinanderlaufen. Eine zentrale, unveränderliche Kontaktkonfiguration ist empfehlenswert.
- `WhatsAppForm` validiert eine erforderliche Nachricht mit `minLength={8}`, URL-encodiert den Inhalt und öffnet `wa.me` erst nach Submit in einem neuen Kontext. Die Website sendet selbst keine Daten an einen eigenen Server; der erklärende Hinweis ist korrekt.
- Name und E-Mail sind optional. Das Formular erzeugt auch bei leerer optionaler Eingabe keine leeren Detailzeilen. Der Status wird über `aria-live="polite"` angekündigt.
- Technisches Risiko: Popup-Blocker und fehlendes/anders behandeltes WhatsApp auf einzelnen Geräten müssen praktisch getestet werden. Ein robuster Fallback über einen normalen, nach Validierung gesetzten Link oder eine klare Fehlermeldung ist später zu prüfen. Ebenso fehlen aktuell Telemetrie und serverseitige Zustellung – vermutlich bewusst.
- `LocationMap` bettet Google Maps direkt beim Erreichen/Laden des Iframes ein. `loading="lazy"` reduziert Last, verhindert aber nicht die Drittanbieteranfrage und mögliche Datenübertragung. Datenschutz/Consent ist damit ein Launch-Risiko. Eine klickaktivierte Karte oder ein lokaler statischer Standort-Platzhalter mit externem Maps-Link wäre datensparsamer.
- Die Karte hat Titel, Richtungslink und sichtbare Adresse. Sie ist nicht für eine API oder einen Schlüssel abhängig, bindet aber externe Verfügbarkeit und Google-Cookies/-Policies ein.

## Globale Styles, Layout und Media Queries

### Gute Grundlagen

- Tokens für Navy, Off-White, Akzent, Linien, Radien, Schatten, Container (`1320px`), Lesebreite (`1120px`), Seitenpadding und Section-Abstand sind bereits zentral in `:root` angelegt.
- Containerbreiten entsprechen weitgehend der gewünschten Richtung: Standardsektionen 1320 px, Ablauf/FAQ 1120 px, juristische Texte 820 px.
- Grid-Layouts wechseln nachvollziehbar von 3 auf 2 auf 1 Spalte. Kontakt, Qualität, Footer und Prozess besitzen eigene Tablet-/Mobile-Zustände.
- Globale Fokusdarstellung, Skip-Link, `scroll-padding-top`, Touchzielgrößen beim Menü und eine Reduced-Motion-Regel sind vorhanden.
- Animationen nutzen überwiegend `transform`, `opacity` und CSS-Transitions; es gibt aktuell keine JavaScript-Animationsbibliothek.

### Strukturelle Risiken

- Nahezu das gesamte Styling liegt in einer 382-zeiligen globalen Datei mit stark klassenbasiertem Seitenwissen. Das ist noch beherrschbar, wird bei modularer Redesign- und Motion-Arbeit aber zur Konfliktzone. Tokens/Resets, Layout-Primitives, Komponenten und Kapitel sollten später logisch getrennt werden, ohne zwangsläufig CSS Modules einzuführen.
- Breakpoints sind ausschließlich absteigend bei 1100, 900, 760 und 420 px angeordnet. Die Kaskade ist verständlich; dennoch bündelt jeder Block viele voneinander unabhängige Komponenten. Änderungen sollten komponentenweise innerhalb derselben Breakpoint-Reihenfolge bleiben.
- `overflow-x: clip` am Body kann echte Überbreiten verdecken. Die spätere QA muss `scrollWidth` gegen `clientWidth` prüfen und die Ursache statt nur das Symptom beheben.
- Desktop-Hero nutzt `min-height: max(100svh, 820px)`, zwischen 901 und 1100 px sogar mindestens 900 px. Das erfüllt „voller erster Bildschirm“, kann aber auf 1024×768 unnötig hoch wirken. Unter 900 px fällt die Mindesthöhe vollständig auf `auto`; damit ist der Hero auf Tablet/Mobile nicht mehr an den Viewport gebunden. Eine abgestufte `svh`/`dvh`-Strategie mit Header- und Safe-Area-Berücksichtigung ist erforderlich.
- Der Hero hat nur den sekundären CTA „Leistungen ansehen“. Der geforderte primäre Projekt-CTA fehlt im Hero selbst, obwohl ein Header-CTA existiert.
- Auf Mobile wird das Hero-Visual von einer Orbit-Komposition in eine Liste umgebaut. Das ist robust gegen Chip-Überlappung, erzeugt aber zusammen mit `padding-top: 230px` und sechs Chips einen sehr langen ersten Abschnitt. Ob CTA und nächstes Kapitel bei 375×667 sinnvoll liegen, ist offen.
- Der Trust-Bar-Inhalt wird mobil horizontal scrollbar, ohne visuell klaren Scrollhinweis. Verdeckte Qualitätsmerkmale und eine unruhige Touch-Interaktion sind möglich.
- Die Prozesslinie reagiert auf Hover/Fokus und nutzt `:has()`, repräsentiert aber keinen tatsächlichen Scrollfortschritt. Auf Tablet verschwindet sie ganz; Mobile hat keine verbindende vertikale Linie. Das muss für das spezifizierte Motion-Konzept neu strukturiert werden.
- Die globale Reduced-Motion-Regel beendet Animationen praktisch sofort. Das ist eine gute Sicherheitsbasis, ersetzt aber keine komponentenspezifischen statischen Endzustände, sobald Motion/GSAP hinzukommen.
- `mask-image`, Container Query Units (`cqw`) und `:has()` sind moderne Features. Sie sind für aktuelle Browser plausibel, brauchen aber eine definierte Browsermatrix und visuelle Fallback-Prüfung.

## Komponenten- und Interaktionsanalyse

### Direkt weiterverwenden beziehungsweise gezielt erweitern

- `app/data/site-content.ts`: zentrale Leistungen und FAQ; später um gemeinsame Unternehmens-/Kontaktdaten erweitern.
- `LocationMap`: semantische Hülle und Adressleiste weiterverwenden; Lade-/Consent-Strategie neu entscheiden.
- `FaqList`: gutes minimales Client-Island mit nativen Buttons, `aria-expanded`, `aria-controls` und Region-Zuordnung. Animation und versteckter Zustand müssen praktisch mit Screenreadern geprüft werden.
- Rechtstextseiten: Struktur und Warnhinweise beibehalten, bis echte Angaben rechtlich geprüft vorliegen.
- Root-Metadaten, JSON-LD und `robots.ts`: als Basis erhalten und um Sitemap/Launch-URL-Prüfung ergänzen.

### Neu strukturieren

- `app/page.tsx`: in serverseitige Kapitel wie Hero, Trust/Chapter Divider, Services, Quality, Process, Contact und Footer zerlegen. Dadurch werden Zuständigkeiten, Tests und Motion-Grenzen klarer.
- `SiteHeader`: visuell neu aufbauen, Interaktionslogik grundsätzlich erhalten. Mobile Dialogverhalten benötigt Fokusfalle oder `inert` für Hintergrundinhalte, Rückgabe des Fokus auch beim normalen Schließen sowie eine robuste aktive Abschnittslogik. Der aktuelle IntersectionObserver wählt nur aus den gerade eintreffenden Entries und kann an Abschnittsgrenzen kurz inkonsistent sein.
- `WhatsAppForm`: UI weiterverwenden, Kontaktdaten zentralisieren, Fehler-/Fallback-Verhalten definieren und Datenschutztext final abstimmen.
- Hero-Visual: aktuelle Datenzuordnung und Linkziele sind brauchbar; DOM-/SVG-Struktur sollte für einen klaren Energiepfad, deterministisches Intro, Responsive-Endzustände und getrennte Motion-/GSAP-Verantwortung neu konzipiert werden.
- Prozess: Struktur für eine echte horizontale bzw. mobile vertikale Progresslinie vorbereiten; `tabIndex={0}` auf nicht interaktiven Artikeln nur beibehalten, wenn Fokus einen echten Informations- oder Steuerungszweck erfüllt.
- Footer und mobile Schnellaktionen: als eigene Komponenten auslagern. Mobile Floating Buttons müssen gegen Formular, Kartenleiste, Footer und Safe Areas geprüft werden.

## Accessibility- und Performance-Risiken aus Code-Inspektion

- Positiv: Skip-Link, deutsche Dokumentsprache, semantische Sections/Articles, native Formfelder, Labels, sichtbare Fokusregel, aktive Navigation und Reduced Motion sind angelegt.
- Mobile Navigation sperrt Body-Scroll und reagiert auf Escape, besitzt aber keine vollständige Fokusverwaltung. Hintergrundlinks bleiben vermutlich per Tab erreichbar; das ist ein wesentliches späteres Audit-Thema.
- FAQ-Inhalte bleiben im DOM und werden über Grid auf null Höhe gesetzt; `aria-hidden` hilft, aber tatsächliche Fokus-/Screenreader-Ausgabe muss verifiziert werden.
- Der Hero-Visual-Container hat ein Gruppenlabel, während die sechs verlinkten Leistungen zugänglich bleiben. Dekorative Orbit-/Grid-Elemente sind korrekt versteckt.
- Google Maps ist der größte externe Performance- und Privacy-Posten. Weitere große sichtbare Medien fehlen derzeit; hochwertige Kundenbilder werden für das Redesign benötigt und müssen lokal optimiert werden.
- System-Fontstacks vermeiden Font-Downloads und Layout Shifts, können aber je Plattform deutlich unterschiedliche Markenwirkung und Umbruchmaße erzeugen. Eine spätere lokale, lizenzierte Schriftstrategie ist gestalterisch zu entscheiden und auf CLS zu prüfen.
- Drei kleine Client Islands sind grundsätzlich effizient. Bei späterer Animation darf nicht die gesamte Seite unnötig zur Client Component werden; Motion-Wrapper sollten eng begrenzt bleiben.

## IONOS-Deployment

- Der dokumentierte Ablauf – lokaler statischer Build, Upload des Inhalts von `out/` nach `/Websites/elektronik`, danach Verzeichnisrechte 755 und Dateirechte 644 – passt zur Exportstrategie.
- Positiv sind explizite Remote-Pfadkontrolle, Passwortwarnung, erwartete Exportdateien und Prüfung der Asset-Rechte.
- Das Dokument enthält einen veralteten lokalen Pfad (`C:\Users\enric\dev\GitHub\...`) gegenüber dem aktuellen Workspace. Ein kopierter Befehl würde am aktuellen Rechner nicht in dieses Checkout führen.
- `put -r *` überschreibt/ergänzt Dateien, entfernt aber keine veralteten Remote-Artefakte. Alte gehashte Assets sind meist harmlos, können langfristig Müll erzeugen; wichtiger ist, dass entfernte Top-Level-Dateien nicht automatisch verschwinden. Eine sichere, explizite Synchronisationsstrategie muss vor Änderungen am Deploymentprozess entworfen werden.
- Ein statischer Server-Test des fertigen `out/` und eine Prüfung von Deep Links mit Trailing Slash gehören vor Upload in die Launch-Checkliste.
- Die Anleitung enthält reale Host- und Benutzernamen, aber kein Passwort. Das ist kein Geheimnis im engeren Sinn, erhöht jedoch die Angriffsoberfläche und sollte hinsichtlich gewünschter Repository-Öffentlichkeit bewusst entschieden werden.

## Priorisierter Umsetzungsplan für eine spätere Freigabe

1. Inhalts- und Kontaktkonstanten zentralisieren; Seitenabschnitte als Server Components aus `page.tsx` extrahieren.
2. Design-Tokens und Layout-Primitives konsolidieren; globale CSS-Kaskade in klar verantwortete Ebenen aufteilen und Containerbreiten verbindlich machen.
3. Header und Hero zuerst implementieren: stabile Viewport-Höhe, Projekt-CTA im Header, linksbündiger Leistungs-CTA im Hero, kompakte visuelle Kopplung, Mobile-Menü-Fokusmanagement und statischer Reduced-Motion-Endzustand.
4. Services, Qualitätskapitel, Prozess, FAQ und Kontakt entlang derselben Komponenten- und Abstandslogik überarbeiten; echte Bilder erst mit geklärter Herkunft integrieren.
5. Motion nur in kleinen Client-Grenzen ergänzen. CSS für Zustände, Motion für UI-Reveals; GSAP ausschließlich dort, wo Hero-/Pfad-/Prozess-Sequenzen die zusätzliche Komplexität rechtfertigen. Nie dasselbe Element doppelt steuern.
6. Karte datenschutzkonform entscheiden, Rechtstexte vervollständigen und kanonische Produktionsdomain bestätigen.
7. Erst nach Freigabe Dependencies ergänzen und anschließend Lint, TypeScript, Export-Build sowie Playwright in allen vorgegebenen Viewports ausführen. Das fertige `out/` zusätzlich über einen statischen Server und danach im IONOS-Preview-/Zielkontext prüfen.

## Abnahmeentscheidungen für Phase 1

Vor Produktionsarbeit sollten folgende Punkte explizit bestätigt sein:

- Hero-Höhenstrategie auf 1024×768 und kleinen Mobilgeräten.
- Lokale Typografie beziehungsweise Systemfont-Strategie.
- Bildbedarf und Herkunft für „Warum ElektroNik“.
- Datenschutzstrategie der Google-Maps-Einbettung.
- Komponenten-/CSS-Aufteilung und klare Zuständigkeit zwischen Frontend und Motion.
- Kanonische Domain sowie vollständige rechtliche Unternehmensangaben.
