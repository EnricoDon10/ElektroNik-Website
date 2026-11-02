# Finale Projektübergabe

Stand: 1. August 2026  
Branch: `redesign/high-end-v2`

## Projektstatus

Der Redesign-Stand ist lokal als statischer Release Candidate fertiggestellt. Entwicklung, Produktionsbuild und statische Vorschau sind ohne Vercel oder andere Laufzeitdienste möglich. Ein Commit, Push oder Deployment wurde nicht ausgeführt.

Projektordner:

```text
C:\Users\enric\dev\GitHub\ElektroNik Website Neu
```

Lokale Entwicklungsadresse:

```text
http://localhost:3001
```

Das konsolidierte Projekt verwendet Port `3001`; die früheren Checkout-Pfade sind nach der Migration nicht mehr zu verwenden.

Die vollständige Schritt-für-Schritt-Anleitung steht in `docs/local-development.md`.

## Finale lokale Evidenz

- `npm run verify`: vollständig erfolgreich.
- ESLint und TypeScript: ohne Fehler.
- Statischer Next.js-Export: 7/7 Routen erfolgreich erzeugt.
- Playwright: 162 Tests bestanden, 9 erwartete Breakpoint-Skips, 0 fehlgeschlagen.
- Statische Vorschau: Startseite, Rechtsseiten, SEO-Dateien, Open-Graph-Bild und JavaScript-Asset antworten korrekt; eine unbekannte Route liefert die vorgesehene 404-Antwort.
- Visueller Chromium-Gutcheck bei 1440 × 900 und 390 × 844: keine Überbreite, keine Browser- oder Hydrationfehler, Hero und Mobile-Menü im erwarteten Zustand.
- Nach der Prüfung wurden alle hierfür gestarteten Server beendet; Port `3001` ist für den lokalen Start frei.

## Nachträgliche Kundenanpassungen

- Der Projekt-CTA bleibt ausschließlich oben rechts im Header; der doppelte gelbe CTA wurde aus dem Hero entfernt.
- „Leistungen ansehen“ steht im Hero als einzige Aktion exakt linksbündig zum Text.
- Die Satelliten „Netzwerkverkabelung“ und „E-Mobilität“ besitzen wieder zuverlässig sichtbare Lucide-Icons. Eine feste `18 × 18 px`-Iconfläche verhindert das zuvor gemessene Kollabieren auf null Pixel.
- Die Responsive-Prüfung kontrolliert CTA-Anzahl, Linksausrichtung und beide Iconflächen in allen neun Pflicht-Viewports.
- Das Projekt wurde als eigenständiges Git-Repository nach `C:\Users\enric\dev\GitHub\ElektroNik Website Neu` konsolidiert; `.git`, Dependencies, Buildartefakte und `out/` liegen dort lokal vor.
- Der vollständige Lauf nach der Konsolidierung ergab erneut 7/7 statische Routen, 162 bestandene Tests, 9 erwartete Breakpoint-Skips und 0 Fehler.

## Lokal starten

```powershell
cd 'C:\Users\enric\dev\GitHub\ElektroNik Website Neu'
npm ci
npm run dev
```

Danach `http://localhost:3001` öffnen. Beenden mit `Strg + C`.

## Produktionsstand lokal ansehen

```powershell
cd 'C:\Users\enric\dev\GitHub\ElektroNik Website Neu'
npm run check
npm run preview
```

`npm run check` prüft Lint und TypeScript und erzeugt den statischen Export unter `out/`. `npm run preview` liefert genau diesen Export auf `http://localhost:3001` aus.

Wenn Port `3001` belegt ist:

```powershell
npm run dev -- --port 3002
# oder nach einem Build:
npm run preview -- --port 3002
```

## Vor einem öffentlichen Launch zwingend benötigt

### 1. Produktionsdomain und E-Mail

`elektronik-meisterbetrieb.de` und `www.elektronik-meisterbetrieb.de` lieferten beim Abschlussaudit NXDOMAIN. Es waren auch keine belastbaren NS-/MX-Ziele vorhanden. Vor einem Deployment müssen daher verbindlich geklärt werden:

- Ist `elektronik-meisterbetrieb.de` die tatsächlich gewünschte und registrierte Domain?
- Sind IONOS-DNS, HTTPS-Zertifikat und Weiterleitungen eingerichtet?
- Ist das Postfach `Elektro-nik@t-online.de` aktiv und getestet?
- Falls eine andere Domain vorgesehen ist, müssen `NEXT_PUBLIC_SITE_URL`, Kontaktmail, Canonicals, Open Graph, JSON-LD, `robots.txt` und `sitemap.xml` gemeinsam angepasst werden.

### 2. Rechtstexte

Impressum und Datenschutz sind bewusst als unvollständige Platzhalter gekennzeichnet. Benötigt werden insbesondere:

- vollständiger Inhabername und Rechtsform;
- Register- und Umsatzsteuerangaben, soweit zutreffend;
- zuständige Handwerkskammer, Berufsbezeichnung und berufsrechtliche Angaben;
- verantwortliche Person für Inhalte, soweit erforderlich;
- Angaben zu IONOS-Hosting und Logfiles;
- Rechtsgrundlagen, Speicherdauer, Empfänger, Drittlandübermittlungen und Betroffenenrechte;
- fachliche Prüfung der Consent-geschützten Google-Maps-Einbettung und der WhatsApp-Übergabe.

Die Texte dürfen erst nach fachlicher beziehungsweise rechtlicher Freigabe als fertig gelten.

### 3. Qualitätsabschnitt ohne Foto

Am 2. November 2026 wurde der Foto-Platzhalter auf Wunsch des Betreibers entfernt. Die drei
Qualitätspunkte stehen jetzt untereinander neben der Positionierung. Der Satz „Wir hinterlassen
Lösungen. Keine Fragen.“ ist als Markenformulierung freigegeben. Ein Foto ist für diesen
Seitenabschnitt aktuell nicht erforderlich. Wird später eines ergänzt, müssen Herkunft, Rechte,
Einwilligung und Alt-Text vor Veröffentlichung geklärt werden.

Zusätzlich müssen Telefonnummer, E-Mail, Adresse, Öffnungszeiten, Leistungen und alle vertrauensbildenden Aussagen durch den Betrieb bestätigt werden.

### 4. Hosting-Abnahme

Vor einem IONOS-Upload sind Remote-Ziel, Backup/Rollback, veraltete Dateien, Datei- und Verzeichnisrechte, HTTPS, 404-Verhalten, Cache-Regeln und Security Header zu prüfen. Die Datei `IONOS-DEPLOYMENT-ANLEITUNG.md` beschreibt den bestehenden Ablauf, ersetzt aber keine Bestätigung des echten Zielsystems.

## Bekannter Dependency-Gate

`npm audit` meldet sechs Advisories insgesamt; `npm audit --omit=dev` meldet drei High-Advisories über Next.js und dessen eingebettete PostCSS-/Sharp-Versionen. npm bietet aktuell nur ein ungeeignetes Downgrade auf Next.js 9 als automatischen Fix an. Deshalb wurde bewusst weder `npm audit fix` noch ein unkontrolliertes Framework-Upgrade ausgeführt.

Ein später verfügbares kompatibles Next.js-/Lockfile-Update muss separat eingespielt und anschließend mit `npm run verify` vollständig regressionsgetestet werden.

## Freigabereihenfolge für den echten Launch

1. Domain, DNS, HTTPS und Mail bestätigen.
2. Unternehmensdaten und Rechtstexte liefern und freigeben.
3. Unternehmensangaben und Leistungsumfang final schriftlich bestätigen.
4. Finale visuelle, mobile und inhaltliche Abnahme durchführen.
5. `NEXT_PUBLIC_SITE_URL` auf die bestätigte Domain setzen.
6. `npm run verify` ausführen und `out/` statisch prüfen.
7. IONOS-Ziel und Rollback bestätigen.
8. Erst danach Upload und Post-Deployment-Smoke-Test durchführen.
