# QA-, Accessibility- und Performance-Bericht

## Abschluss der Copy- und Layoutanpassungen vom 2. November 2026

Netzwerkleistung, Industrieservice, Terminablauf, WhatsApp-Button, Kontaktformular, Footer und
AGB wurden am statischen Export geprüft. Der Export lief auf `http://localhost:3201`; der bereits
laufende Next.js-Entwicklungsserver wurde nicht beendet. Ein IONOS-Upload fand nicht statt.

| Prüfung | Ergebnis |
| --- | --- |
| `npm run lint` | erfolgreich |
| `npx tsc --noEmit` | erfolgreich |
| `npm run build` | erfolgreich; statische Seiten erzeugt |
| `npx playwright test` gegen `out/` | **279 bestanden, 9 erwartete Breakpoint-Skips, 0 fehlgeschlagen** |
| Browser/Projekte | Chromium in allen neun Pflicht-Viewports |
| Sichtkontrolle | Kontaktformular, WhatsApp-Logo, Footer-Credit und Cookie-Button geprüft |
| `git diff --check` | erfolgreich |

Die erste Browserausführung konnte wegen einer bestehenden Next.js-Entwicklungssperre nicht
starten. Der vorhandene Server blieb unangetastet; die vollständige Suite lief danach gegen den
frischen statischen Export erfolgreich durch.

## AGB- und Impressumsupdate vom 2. November 2026

Der neue AGB-Endpunkt, die gekürzte Impressumsseite, der Footerlink und der Sitemap-Eintrag wurden
gegen den frisch gebauten statischen Export in `out/` geprüft. Der Export wurde isoliert auf
`http://localhost:3201` ausgeliefert. Der bestehende Next.js-Entwicklungsserver blieb unangetastet;
ein IONOS-Upload fand nicht statt.

| Prüfung | Ergebnis |
| --- | --- |
| `npm run lint` | erfolgreich |
| `npx tsc --noEmit` | erfolgreich |
| `npm run build` | erfolgreich; `/agb/` statisch erzeugt |
| `npx playwright test` gegen `out/` | **261 bestanden, 9 erwartete Breakpoint-Skips, 0 fehlgeschlagen** |
| Browser/Projekte | Chromium in allen neun Pflicht-Viewports |
| `git diff --check` | erfolgreich |

Die AGB-Prüfung bestätigte alle Vertragsabschnitte bis § 25, die Kostenregel für
Vor-Ort-Termine, Angebote auf Wunsch, die Netzanalyse und die Verbraucherstreitbeilegung. Die Impressumsprüfung bestätigte
den Verleihungsstaat Deutschland und die Entfernung interner Prüfhinweise. Die internen Hinweisboxen
auf Impressum und Datenschutzerklärung sind entfernt; die datenschutzrechtlichen Vertragsbedingungen
bleiben im passenden Abschnitt beschrieben. Geprüft wurden außerdem Footerlink, Canonical und Sitemap.

## Inhalts- und Legal-Update vom 2. November 2026

Die geänderten Leistungsangaben, Startseitenbereiche, Metadaten, Impressums- und
Datenschutzhinhalte wurden gegen den frisch erzeugten statischen Export in `out/` geprüft.
Der Export wurde isoliert auf `http://localhost:3200` ausgeliefert. Der bereits laufende
Next.js-Entwicklungsserver auf Port 3001 blieb unangetastet. Ein Upload auf IONOS oder ein
Produktivdeployment fand nicht statt.

| Prüfung | Ergebnis |
| --- | --- |
| `npm run lint` | erfolgreich |
| `npx tsc --noEmit` | erfolgreich |
| `npm run build` | erfolgreich; 7/7 statische Seiten erzeugt |
| `npx playwright test` gegen `out/` | **243 bestanden, 9 erwartete Breakpoint-Skips, 0 fehlgeschlagen** |
| Browser/Projekte | Chromium in allen neun Pflicht-Viewports |
| `git diff --check` | erfolgreich |

Die neun geprüften Viewports: 375 × 667, 390 × 844, 430 × 932, 768 × 1024, 1024 × 768,
1366 × 768, 1440 × 900, 1920 × 1080 und 2560 × 1440. Ergänzende Inhaltsprüfungen bestätigen
die neuen Leistungsnamen und Texte, die aktualisierte WhatsApp-Auswahl, die entfernte FAQ zum
Angebot, die Antwort zu Großkunden und Schwerindustrie sowie den Foto-freien Qualitätsabschnitt.

Die erste Playwright-Ausführung konnte wegen einer bereits belegten Next.js-Entwicklungssperre
nicht starten. Der bestehende Prozess wurde nicht beendet; die vollständige Suite lief danach gegen
den isolierten statischen Export erfolgreich durch.

Die automatisierten Prüfungen bestätigen weder die Richtigkeit unbekannter Betreiberangaben noch
die Vertragslage bei IONOS, AVV-Kette, DNS, HTTPS oder Serverheadern. Diese Punkte bleiben im
separaten Legal-Audit und in der Launch-Checkliste offen.

## Legal-Launch-Update vom 19. August 2026

Testziel war der frisch erzeugte statische Export unter `out/`, isoliert ausgeliefert auf
`http://localhost:3200`. Der bereits vorhandene Next.js-Entwicklungsserver auf Port 3001 wurde nicht
beendet und nicht als Abnahmenachweis verwendet. Ein Deployment in das IONOS-Zielsystem fand nicht
statt.

| Prüfung | Ergebnis |
| --- | --- |
| `npm run lint` | erfolgreich |
| `npx tsc --noEmit` | erfolgreich |
| `npm run build` | erfolgreich; 7/7 statische Seiten erzeugt |
| `npx playwright test` gegen `out/` | **234 bestanden, 9 erwartete Breakpoint-Skips, 0 fehlgeschlagen** |
| Browser/Projekte | Chromium in allen neun Pflicht-Viewports |
| Laufzeit Matrixlauf | 2,9 Minuten |
| `git diff --check` | erfolgreich |

Neu verifiziert wurden der dauerhaft feste Cookie-Button auf Start- und Rechtsseiten, die
gleichwertigen Erstentscheidungen, die sechsmonatige Consent-Gültigkeit, die sichere Behandlung
veralteter und beschädigter Datensätze, Escape und Fokuswiederherstellung sowie die unveränderte
Blockierung von Google Maps vor Einwilligung. Direkte Routen für Impressum und Datenschutz,
Canonical-Ziele, Sitemap und Robots-Datei waren im statischen Export erreichbar.

Die sichtbare Prüfung umfasste das Consent-Banner bei 375 × 667 und 1440 × 900, das Impressum bei
390 × 844 sowie die Datenschutzerklärung bei 1440 × 900. Banner, Rechtsseiten und der feste Button
waren ohne horizontale Überbreite oder abgeschnittene Hauptaktionen nutzbar.

Die technische Prüfung macht die offenen echten Betreiberangaben nicht automatisch rechtlich
vollständig. Diese Blocker stehen im separaten
[`legal-launch-audit-2026-08-19.md`](./legal-launch-audit-2026-08-19.md).

## Finale automatisierte Browserverifikation

Stand: 2. August 2026
Testziel: lokaler Next.js-Devserver auf `http://localhost:3100` sowie lokaler statischer Server für den erzeugten `out/`-Ordner; kein Deployment und noch kein Test im IONOS-Zielsystem.

### Ergebnis

| Prüfung | Ergebnis |
| --- | --- |
| `npm run lint` | erfolgreich |
| `npx tsc --noEmit` | erfolgreich |
| `npm run build` | erfolgreich; 7/7 statische Seiten erzeugt |
| `npx playwright test` | **216 bestanden, 9 erwartete Breakpoint-Skips, 0 fehlgeschlagen** |
| Browser/Projekte | Chromium in allen neun Pflicht-Viewports |
| Laufzeit finaler Matrixlauf | 4,8 Minuten |
| `npm audit --json` | 6 Advisories: 1 niedrig, 5 hoch; kein automatischer Fix ausgeführt |

Die neun Skips sind beabsichtigt: In fünf Menü-Viewports wird der reine Desktop-Menütest ausgelassen, in vier Desktop-Viewports der reine Overlay-Menütest. Es gibt keine übersprungenen fachlichen Prüffälle innerhalb ihres jeweils relevanten Breakpoints.

Abgedeckt wurden:

- Skip-Link, Ankerziele und Desktop-/Mobilnavigation;
- Initialfokus, Fokusbegrenzung, `inert`, Escape und Fokuswiederherstellung des mobilen Menüs;
- unveränderte Telefon-, E-Mail- und direkte WhatsApp-Ziele;
- WhatsApp-Nachrichtenkodierung einschließlich Umlauten/Sonderzeichen, native Mindestlänge sowie Erfolg und Popup-Blockierung;
- FAQ per Enter und Leertaste sowie synchrones `aria-expanded`, `aria-controls` und `aria-hidden`;
- Consent-Banner, Einstellungsdialog, versionierte lokale Auswahl, Widerruf und Google-Maps-Blockierung;
- horizontale Dokumentüberbreite sowie abgeschnittene Kerntexte/Bedienelemente;
- Sichtbarkeit, Mindestgröße und Überlagerungsfreiheit der zentralen Projekt-CTAs;
- Reduced-Motion-Endzustand, eindeutige IDs, Formularlabels, Semantik und fehlende unnötige Prozess-Tabstopps;
- keine Drittanbieteranfrage vor Kartenfreigabe, keine Browser-/Hydrationfehler und automatisierter CLS-Wert von höchstens `0.1`.
- aktive Navigation nach Desktop- und Mobile-Linkklick, ungültiges optionales E-Mail-Format und reaktive Reduced-Motion-Umschaltung während der Sitzung;
- Canonicals, Open Graph, Twitter Card, Electrician-/FAQ-JSON-LD, Rechtsseiten, Footerlinks, `robots.txt` und `sitemap.xml`.

### Im Test gefundene und anschließend behobene Produktfehler

1. Bei 768 × 1024 und 1024 × 768 erzeugte `backdrop-filter` am geöffneten Header einen neuen Containing Block. Das feste Menü lag dadurch teilweise außerhalb des Viewports. Im offenen Zustand wird der Filter nun deaktiviert; beide Navigationstests und die finale Matrix sind grün.
2. Bei 1024 × 768 erzwangen `min-height: 420px` und `aspect-ratio: 1.28` der Bildplatzhalterfläche eine intrinsische Breite von rund 538 px. Gemeinsam mit dem Hero-Visual entstand eine reale Überbreite von 54 px. Die globale Mindesthöhe wurde entfernt, der Mobile-Wert bleibt erhalten und das Small-Desktop-Hero-Visual wurde reduziert. Der isolierte Overflow-Recheck und die finale Matrix sind grün.

### Weiterhin offene Nachweise und Launch-Gates

- Impressum und Datenschutzerklärung benötigen vollständige Kundendaten und fachliche/rechtliche Freigabe.
- Die Consent-geschützte Google-Maps-Einbettung ist technisch verifiziert; Datenschutzerklärung und Rechtsgrundlage sind damit noch nicht rechtlich freigegeben.
- Ein echtes, freigegebenes ElektroNik-Projektfoto fehlt; der sichtbare lokale Platzhalter bleibt ein Launch-Gate.
- NVDA/Firefox, VoiceOver/Safari, 200-%-Zoom, 320-CSS-px-Reflow, Forced Colors und eine vollständige manuelle WCAG-Kontrastmessung stehen aus.
- Lighthouse, LCP, INP, TBT, Bundle-/Main-Thread-Analyse und Prüfung auf einem schwächeren realen Mobilgerät stehen aus. Der automatisierte CLS-Test ersetzt diese Messungen nicht.
- Der finale statische Export wurde nach dem letzten Produktionsstand gebaut und lokal aus `out/` ausgeliefert. `/`, `/impressum/`, `/datenschutz/`, `/sitemap.xml`, `/robots.txt`, das Open-Graph-Bild und ein gebautes JavaScript-Asset antworteten mit HTTP 200; eine unbekannte Route lieferte HTTP 404. Die Prüfung im IONOS-Zielsystem steht weiterhin aus.
- Die Browsermatrix verwendet Chromium; Firefox und WebKit sind nicht Teil dieser Phase-3-Suite.
- Der Dependency-Audit meldet sechs bekannte Advisories in `@babel/core`, `brace-expansion`, `js-yaml`, `postcss` und `sharp`; `next` wird wegen transitiver `postcss`-/`sharp`-Befunde mitgeführt. Der von npm angebotene automatische Fix würde Next.js auf `9.3.3` zurücksetzen und wurde daher nicht ausgeführt. Ein kontrolliertes Framework-/Lockfile-Upgrade mit anschließendem vollständigem Re-Test bleibt ein Launch-Gate.

## Historischer Phase-1-Audit

Die folgenden Feststellungen dokumentieren den damaligen Ausgangszustand. Soweit sie der Phase-3-Zusammenfassung widersprechen, gilt der neuere verifizierte Stand oben.

Stand: 1. August 2026
Scope: ausschließlich statische Repository-Analyse; kein Produktionscode geändert, keine Dependencies installiert, keine Builds oder Browser-Tests ausgeführt.
## Prüfgrundlage

Analysiert wurden `package.json`, `next.config.ts`, App Router und Seiten, Client-Komponenten, Inhaltsdaten, globale Styles inklusive Media Queries und Reduced Motion, Metadaten/JSON-LD/`robots.ts`, Kontaktwege, WhatsApp-Formular, Google-Maps-Einbettung sowie die IONOS-Deployment-Anleitung.

## Kurzurteil

Die bestehende Seite besitzt eine brauchbare technische Basis: Next.js App Router, TypeScript, statischer Export, semantische Hauptbereiche, Skip-Link, native Formularelemente, eine grundsätzlich zugängliche FAQ-Steuerung, Lazy Loading der Karte und eine globale Reduced-Motion-Regel. Phase 1 liefert jedoch noch keinen belastbaren Nachweis für Browserkompatibilität, responsives Verhalten, Build-Erfolg oder reale Performance.

Vor einer Veröffentlichung sind insbesondere das mobile Dialog-/Fokusverhalten, die Google-Maps-Datenschutzentscheidung und die unvollständigen Rechtstexte zu klären. Diese Punkte sind keine rein visuelle Politur.

## Priorisierte Befunde

### P0 – Veröffentlichung blockierend

1. **Impressum und Datenschutzerklärung sind ausdrücklich unvollständig.** Beide Seiten nennen fehlende Pflichtangaben. Sie dürfen nicht als rechtssicher fertig behandelt werden. Fachliche/rechtliche Freigabe ist erforderlich.
2. **Google Maps ist technisch blockiert, bis „Externe Medien“ erlaubt werden.** Vorher wird kein iframe erzeugt. Einwilligung, Ablehnung, individuelle Auswahl und Widerruf sind umgesetzt; Datenschutztext und Rechtsgrundlage müssen vor Launch dennoch verbindlich geprüft werden.

### P1 – hoch

1. **Mobiles Menü besitzt keinen Fokus-Dialog.** Escape schließt und stellt Fokus zum Menübutton zurück; beim Öffnen wird der Fokus jedoch nicht ins Menü gesetzt, Tab bleibt nicht im Overlay, Hintergrundinhalte werden nicht `inert`, und beim normalen Schließen per Button/Link ist keine explizite Fokusstrategie vorhanden. Damit können Tastaturnutzende hinter das visuell vollflächige Menü gelangen.
2. **Responsive Layout ist nur aus CSS ableitbar, nicht verifiziert.** Kritische Kandidaten sind 1024×768 (Hero erzwingt mindestens 900 px Höhe), 768×1024/Tablet (zweispaltige Hero-Visualisierung bis 900 px), 375×667 (einspaltige Visual-Chips unter 420 px erzeugen einen sehr langen Hero) und die fixe Schnellkontaktleiste. `overflow-x: clip` kann echte Überbreite verdecken statt verhindern.
3. **WhatsApp-Popup ist nicht robust rückgemeldet.** `window.open()` wird ausgelöst, der Live-Status meldet aber stets Erfolg. Popup-Blockierung oder fehlendes WhatsApp-Ziel werden nicht erkannt. Außerdem fehlen Browser-Tests für Kodierung, Pflichtfeldvalidierung und die korrekte Zielnummer.
4. **Interaktive Prozesskarten erzeugen unnötige Tabstopps.** Vier nicht handlungsfähige `article`-Elemente haben `tabIndex={0}` ausschließlich für einen visuellen Fortschrittseffekt. Das verlängert die Tastaturnavigation ohne Funktion; die Information ist ohnehin statisch sichtbar.

### P2 – mittel

1. **FAQ-Zustand ist grundsätzlich gut, aber zu testen.** Button, `aria-expanded`, `aria-controls`, Region und Beschriftung sind vorhanden. Zu prüfen sind Fokusdarstellung, Screenreader-Ausgabe, Animation und tatsächliche Unsichtbarkeit geschlossener Antworten in Safari/VoiceOver.
2. **Karte hat einen Titel und externen Ersatzlink, aber keinen Fehler-/No-JS-Fallback.** Bei Blockierung bleibt primär eine leere Fläche; die Adresse liegt zwar im Overlay, muss aber unter realen Blocker- und Mobilbedingungen geprüft werden.
3. **SEO ist solide angelegt, aber unvollständig verifiziert.** Metadaten, Open Graph, Twitter Card, deutsche Sprache, LocalBusiness-/FAQ-JSON-LD und `robots.txt` sind vorhanden. Es gibt keine Sitemap-Route. Canonical und strukturierte URL hängen in Production von `NEXT_PUBLIC_SITE_URL` beziehungsweise dem Produktions-Fallback ab und müssen am gebauten Export geprüft werden.
4. **Schema-Inhalte brauchen fachliche Prüfung.** Der Typ `Electrician`, Öffnungszeiten, Adresse, Leistungen und FAQ müssen exakt dem realen Betrieb entsprechen; Phase 1 bestätigt nur ihre technische Anlage.
5. **Touchziele sind überwiegend ausreichend, aber nicht vollständig belegt.** Header-CTA, Menübutton, Buttons und Schnellkontakte erreichen etwa 42–54 px; die 42-px-Header-CTA liegt knapp unter dem Zielwert von ungefähr 44 px. Textlinks und Footerlinks haben keine explizite Mindesthöhe.
6. **Kontrastwerte sind nicht gemessen.** Mehrere Texte nutzen stark transparente Weiß-/Grauwerte auf Navy oder Off-White. Besonders 9–11-px-Metadaten, Footertexte, Eyebrows, Formhinweise und Kartenbeschriftungen benötigen rechnerische und visuelle Kontrastprüfung.
7. **Kein explizites Security-Header-Konzept dokumentiert.** Bei statischem IONOS-Hosting sind CSP, Referrer-Policy, `X-Content-Type-Options`, Frame-Regeln und Permissions Policy serverseitig zu klären. Eine CSP muss Google Maps und JSON-LD bewusst berücksichtigen.

## Gute bestehende Lösungen

- `output: "export"`, `trailingSlash: true` und `images.unoptimized: true` erhalten statische Hostingfähigkeit.
- Ein Skip-Link verweist auf ein fokussierbares `main`; globale `:focus-visible`-Stile sind vorhanden.
- Hauptseite und Rechtstexte besitzen jeweils ein `main` und eine nachvollziehbare H1/H2/H3-Struktur.
- Telefon- und E-Mail-Ziele sind semantische `tel:`-/`mailto:`-Links; WhatsApp nutzt eine feste `wa.me`-Nummer.
- Das WhatsApp-Formular nutzt native Labels, passende `autocomplete`-/`type`-Attribute, ein Pflichtfeld mit `minLength` und eine höfliche Live-Region.
- FAQ nutzt native Buttons und programmatisch gekoppelte Antworten.
- Dekorative Hero-/Icon-Elemente sind überwiegend mit `aria-hidden` oder leerem Alt-Text versehen.
- Karte besitzt einen aussagekräftigen iframe-Titel, Lazy Loading und einen expliziten externen Maps-Link mit sicherem `rel`.
- Reduced Motion deaktiviert Smooth Scroll und verkürzt Animationen/Transitionen global.
- Keine externen Webfonts, Videos oder große Runtime-Bibliotheken; der überwiegende Inhalt bleibt servergerendert. Client JavaScript ist auf Header, FAQ und WhatsApp-Formular begrenzt.

## Performance- und Architekturbeobachtung

### Ist-Befund

- Die Homepage verwendet im sichtbaren Inhalt keine Raster-Fotografie; `next/image` wird nur für das kleine lokale WhatsApp-SVG genutzt. OG-PNGs werden nicht als Seiteninhalt geladen.
- Daueranimationen existieren für Orbit und Energiepuls. Sie verwenden überwiegend Transform/Opacity-orientierte CSS-Effekte; Reduced Motion ist vorhanden.
- `backdrop-filter`, große Schatten, radiale Verläufe und dauerhaft animierte Flächen können auf schwächeren Mobilgeräten GPU-/Paint-Kosten verursachen.
- IntersectionObserver und passiver Scroll-Listener im Header sind begrenzt und werden aufgeräumt.
- Das Google-Maps-iframe ist der einzige optionale externe Laufzeitdienst und wird erst nach Einwilligung erzeugt.
- Systemschriftarten vermeiden Font-Downloads und Font Layout Shift.

### Phase 1 nicht getestet

- Keine Lighthouse-/Web-Vitals-Messung, keine Bundle-Analyse, keine Netzwerkaufzeichnung.
- Kein Nachweis zu LCP, CLS, INP, TBT oder Speicher-/GPU-Verhalten.
- Kein Nachweis, dass `npm run lint`, `npx tsc --noEmit` oder `npm run build` aktuell erfolgreich sind.
- Kein Test des erzeugten `out/`-Ordners auf IONOS oder einem vergleichbaren statischen Server.

## Statischer Export und IONOS

Die Konfiguration ist grundsätzlich kompatibel mit einem statischen Dateiupload. Die Anleitung berücksichtigt Build, SFTP-Ziel, Verzeichnis-/Dateirechte und eine manuelle Nachkontrolle. Risiken:

- Der in der Anleitung verwendete lokale Pfad weicht vom aktuellen Workspace-Pfad ab und muss als Beispiel oder benutzerspezifisch gekennzeichnet werden.
- `put -r *` entfernt keine veralteten Remote-Dateien. Alte gehashte Assets können liegen bleiben; kritischer wären alte HTML-/Route-Artefakte nach Umbenennungen. Ein sicherer, explizit geprüfter Synchronisationsprozess fehlt.
- Keine dokumentierte atomare Umschaltung oder Rollback-Strategie; während eines Uploads können HTML und gehashte Assets kurzzeitig inkonsistent sein.
- Keine dokumentierte IONOS-Konfiguration für Security Header, Cache-Control, 404-Verhalten und HTTPS-Weiterleitung.
- Nach `trailingSlash: true` müssen `/impressum/` und `/datenschutz/` sowie direkte Reloads auf IONOS geprüft werden.
- Das Deployment enthält reale Hostkennung und Benutzerkennung, aber laut Repository keine Passwörter. Zugangsdaten dürfen weiterhin nie eingecheckt werden.

## Verifikation in späteren Phasen

1. Lint, TypeScript, Produktionsbuild und Playwright erst nach Freigabe/Dependency-Phase ausführen.
2. Alle neun Ziel-Viewports auf horizontale Überbreite, Hero-Abschluss, Fixelemente, Navigation, Karte und Formular testen.
3. Vollständige Tastaturrunde inklusive Skip-Link, Menüdialog, Escape, FAQ und Formular; zusätzlich NVDA/Firefox und VoiceOver/Safari stichprobenartig.
4. Reduced Motion im Betriebssystem und per Browseremulation prüfen; es darf keine initiale Inhaltsblockade geben.
5. Telefon, E-Mail, direkte WhatsApp-Links und generierte WhatsApp-Nachricht einschließlich Sonderzeichen testen.
6. Google Maps mit Consent-Entscheidung, Content-Blocker, langsamer Verbindung und Tastatur testen.
7. Lighthouse/Web Vitals mindestens auf repräsentativem Mobile und Desktop messen; Performancebudget vor Implementierung festlegen.
8. Export lokal über einen statischen Server und anschließend in einer nichtproduktiven IONOS-Zielstruktur prüfen.
