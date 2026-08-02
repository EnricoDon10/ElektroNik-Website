# Launch-Checkliste

Diese Liste ist eine Abnahmevorlage. Phase 3 enthält automatisierte Chromium-Nachweise; offene Kästchen bleiben ausstehende Nachweise und nicht automatisch bestätigte Fehler – außer wenn ausdrücklich als Blocker markiert.

## 1. Freigaben und Inhalte

- [x] Visuelle Richtung vom Auftraggeber am 1. August 2026 freigegeben.
- [ ] **BLOCKER:** Produktionsdomain, IONOS-DNS, HTTPS sowie Mail/MX bestätigen; `elektronik-meisterbetrieb.de` und `www` lieferten im Finalaudit NXDOMAIN.
- [ ] **BLOCKER:** Vollständiger Inhabername, Rechtsform, Kammer-/Berufsangaben und ggf. Register-/USt-ID-Angaben geliefert und Impressum fachlich geprüft.
- [ ] **BLOCKER:** Datenschutzerklärung für IONOS-Hosting, Logs, Google Maps, WhatsApp und Kontaktwege fachlich geprüft.
- [x] Consent-Banner mit „Alle akzeptieren“, „Alle ablehnen“ und „Einstellungen“ umgesetzt.
- [x] Google Maps wird erst nach Zustimmung zu „Externe Medien“ eingebettet.
- [ ] **BLOCKER:** Google-Maps-Verarbeitung in der Datenschutzerklärung fachlich/rechtlich freigegeben.
- [ ] Alle Telefonnummern, E-Mail-Adressen, Adresse, Öffnungszeiten und Leistungsangaben mit dem Betrieb abgeglichen.
- [ ] Keine erfundenen Bewertungen, Zertifikate, Referenzen oder Mitarbeiterdarstellungen.
- [ ] Alle neuen Bilder besitzen dokumentierte Herkunft/Lizenz, passende Formate/Crops und geprüfte Alt-Texte.

## 2. Codequalität

- [x] `npm run lint` am 1. August 2026 erfolgreich.
- [x] `npx tsc --noEmit` am 1. August 2026 erfolgreich.
- [x] `npm run build` am 1. August 2026 erfolgreich; 7/7 statische Seiten erzeugt.
- [x] `npx playwright test` am 1. August 2026: 162 bestanden, 9 erwartete Breakpoint-Skips, 0 fehlgeschlagen.
- [x] `npx eslint playwright.config.ts tests` am 1. August 2026 erfolgreich.
- [x] Keine Prüfung wurde durch Deaktivieren oder pauschales Ignorieren umgangen.
- [x] Nur die freigegebenen und fachlich begründeten Dependencies hinzugefügt; Lockfile, Lizenzen und Bundlegrenzen geprüft.
- [ ] **UPGRADE-GATE:** Die 6 von `npm audit` gemeldeten Advisories kontrolliert über kompatible Framework-/Lockfile-Updates beheben; kein automatisches Next.js-Downgrade verwenden.

## 3. Funktion

- [x] Desktopnavigation und alle Ankerziele funktionieren in der Chromium-Zielmatrix.
- [x] Mobiles Menü öffnet/schließt, Escape funktioniert, Fokus bleibt kontrolliert und kehrt zum Auslöser zurück.
- [x] Aktive Navigation ist visuell und programmatisch nach Linkklick geprüft.
- [x] Telefonlinks verwenden `+4915774299367`.
- [x] E-Mail-Links verwenden `Elektro-nik@t-online.de`.
- [ ] WhatsApp-Fähigkeit der vorläufig verwendeten Nummer `4915774299367` vom Kunden bestätigen lassen.
- [x] WhatsApp-Formular kodiert Thema, optionale Kontaktdaten, Nachricht und Sonderzeichen korrekt.
- [x] Nachrichten-Mindestlänge, ungültiges E-Mail-Format und Popup-Blockierung verhindern fehlerhafte Aufrufe und besitzen verständliche Browserzustände.
- [x] FAQ funktioniert automatisiert per Enter und Leertaste; reale Touch-/Screenreaderprüfung bleibt offen.
- [x] Karte zeigt vor Zustimmung einen lokalen Platzhalter; „Karte laden“, Adresse, iframe-Ziel und „In Maps öffnen“ sind geprüft.
- [x] Impressum und Datenschutz sind direkt ladbar und intern korrekt verlinkt; ihre Inhalte bleiben rechtlich unvollständig.

## 4. Accessibility

- [ ] Komplette Tastaturrunde ohne Fokusverlust oder unsichtbare Fokusziele.
- [x] Skip-Link funktioniert auf der Hauptseite in allen neun Ziel-Viewports.
- [ ] Fokus wird nicht durch Header oder fixe Schnellkontakte verdeckt.
- [x] Mobile Navigation erfüllt automatisiert Initialfokus, Fokusbegrenzung, `inert`, Escape und Fokuswiederherstellung.
- [ ] Überschriften, Landmarks, Namen/Rollen/Werte geprüft.
- [ ] Formlabels, Fehler, Hinweise und Live-Status mit Screenreader geprüft.
- [ ] NVDA + Firefox/Chrome und VoiceOver + Safari stichprobenartig geprüft.
- [x] Reduced Motion zeigt alle geprüften Hero-, Reveal-, Chip- und Prozessinhalte im statischen Endzustand.
- [ ] 200 % Zoom, Textzoom, Forced Colors und Reflow bei 320 CSS px geprüft.
- [ ] WCAG-2.2-AA-Kontraste für Text, UI, Fokus und Zustände gemessen.
- [ ] Touchziele ungefähr 44×44 px oder ausreichend getrennt.

## 5. Responsive/visuell

- [x] 375×667
- [x] 390×844
- [x] 430×932
- [x] 768×1024
- [x] 1024×768
- [x] 1366×768
- [x] 1440×900
- [x] 1920×1080
- [x] 2560×1440
- [x] Kein horizontaler Überlauf auf Dokument- und sichtbarer Kernkomponentenebene; nicht nur durch `overflow-x: clip` verborgen.
- [x] Hero füllt mindestens den ersten Bildschirm; Leistungen beginnen unterhalb des initialen Viewports.
- [x] Keine abgeschnittenen Headlines, Chips, Karten, CTAs oder Formularinhalte in der Chromium-Zielmatrix.
- [x] Tablet Landscape und sehr große Monitore bleiben ohne Überbreite kompakt und zusammenhängend.
- [x] Doppelte fixe Mobile-Schnellkontakte wurden entfernt; zentrale Projekt-CTAs sind nicht verdeckt.
- [x] Hero, Leistungen, Ablauf, Kontakt, Mobile Hero und Mobile Navigation wurden visuell geprüft; temporäre Screenshots werden nicht versioniert.

## 6. SEO und strukturierte Daten

- [x] Seitentitel, Beschreibungen, Canonical, Open Graph und Twitter Card im gebauten Export geprüft.
- [x] Das aktuelle Build-Artefakt enthält für SEO-Ziele ausschließlich `https://elektronik-meisterbetrieb.de`; die Domain selbst bleibt extern unbestätigt.
- [ ] OG-Bild unter realer Produktions-URL erreichbar und visuell geprüft.
- [ ] Electrician- und FAQ-JSON-LD sind technisch geprüft; Unternehmensdaten benötigen weiterhin inhaltliche Kundenbestätigung.
- [x] `robots.txt` ist im Export vorhanden, erlaubt Crawling und verweist auf die Sitemap.
- [x] `sitemap.xml` wird mit Startseite, Impressum und Datenschutz generiert und wurde im Export geprüft.
- [x] Keine Staging-/localhost-URL und kein versehentliches `noindex` im Produktionsartefakt.

## 7. Performance und Stabilität

- [ ] Lighthouse/Web Vitals auf repräsentativem Mobile und Desktop dokumentiert.
- [ ] LCP und INP erfüllen das vereinbarte Budget; Messung steht aus.
- [x] Automatisierter CLS-Wert blieb in allen neun Chromium-Viewports bei höchstens `0.1`.
- [x] Keine sichtbaren Layout Shifts bei Header, Hero, Karte oder Platzhalterfläche im automatisierten und visuellen Chromium-Lauf.
- [ ] Animationen laufen ohne auffällige Paint-/GPU-Probleme; schwaches Mobilgerät stichprobenartig geprüft.
- [x] Google Maps lädt technisch erst nach Einwilligung; Widerruf entfernt das iframe sofort. Rechtliche Freigabe und Datenschutztext bleiben separat offen.
- [x] Versionierte Auswahl wird lokal gespeichert und kann über den Footer erneut geöffnet werden.
- [x] Client-Grenzen und Motion-/GSAP-Bundles geprüft; GSAP lädt erst bei Annäherung des Prozessbereichs.
- [x] Keine Console-/Page-Errors, Hydrationfehler oder Drittanbieterrequests vor Kartenfreigabe im automatisierten Chromium-Lauf.

## 8. Statischer Export und IONOS

- [x] `out/` enthält `index.html`, `404.html`, `_next`, `favicon.svg`, `whatsapp.svg` und `robots.txt`.
- [x] Export lokal über einen echten statischen Server geprüft, nicht nur mit `next dev`.
- [x] Direkte Requests für `/`, `/impressum/` und `/datenschutz/` antworten lokal mit HTTP 200.
- [ ] Remote-Ziel `/Websites/elektronik` vor jeder Übertragung explizit bestätigt.
- [ ] Veraltete Remote-Dateien werden mit einem sicheren, geprüften Verfahren behandelt; kein blindes Löschen.
- [ ] Upload-/Umschaltstrategie vermeidet eine Mischung aus neuem HTML und fehlenden Assets.
- [ ] Verzeichnisrechte 755 und Dateirechte 644 geprüft.
- [ ] HTTPS-Weiterleitung, 404-Seite, Cache-Control und Security Header auf IONOS geprüft.
- [ ] Rollback-Kopie oder dokumentierter Rückweg vorhanden.
- [ ] Nach Upload privates Fenster/Hard Reload sowie Mobile/Desktop-Smoke-Test durchgeführt.

## 9. Sicherheits- und Abschlusskontrolle

- [x] Keine Passwörter, Tokens, privaten Schlüssel oder personenbezogenen Testdaten im Repository/Export gefunden.
- [ ] CSP, Referrer Policy, MIME-Sniffing-Schutz, Frame-Regeln und Permissions Policy für IONOS festgelegt.
- [x] Externe Ziele nutzen HTTPS; der neue Maps-Tab verwendet sichere `rel`-Attribute.
- [x] Git-Diff enthält ausschließlich Dateien des freigegebenen Redesign-, Test- und Dokumentationsumfangs.
- [x] Branch, lokaler Reviewstand und statisches Deployment-Artefakt `out/` sind eindeutig dokumentiert.
- [ ] Produktionsfreigabe durch Auftraggeber und Verantwortlichen erteilt.
