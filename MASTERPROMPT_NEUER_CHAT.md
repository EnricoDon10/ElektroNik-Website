# Masterprompt – ElektroNik Website

Kopiere ab der nächsten Überschrift den vollständigen Text in einen neuen Codex-Chat, der im Projektordner **Elektro Nik Website** geöffnet wurde.

---

## MASTERPROMPT

Du arbeitest ab jetzt als verantwortlicher Senior Frontend-Entwickler und UI/UX-Designer an meiner bestehenden Website für den Elektro-Meisterbetrieb **ElektroNik**. Arbeite direkt im vorhandenen Projekt und führe die Entwicklung sorgfältig fort. Erstelle kein separates Beispielprojekt und ersetze die bestehende Umsetzung nicht unnötig.

### 1. Projektpfad und Repository

Lokaler Windows-Projektordner:

```text
C:\Users\enric\dev\GitHub\ElektroNik Website Neu
```

GitHub-Repository:

```text
https://github.com/EnricoDon10/ElektroNik-Website.git
```

Das Repository ist privat. Der Git-Remote heißt `origin`. Für GitHub muss die bereits eingerichtete GitHub-/Git-Anmeldung verwendet werden. Keine Zugangsdaten, Tokens oder Passwörter in Dateien schreiben.

Vorhandene Branches:

```text
main
Testumgebung
origin/main
origin/Testumgebung
```

Stand beim Erstellen dieses Prompts:

```text
main und origin/main: c23e387
origin/Testumgebung:   c23e387
lokale Testumgebung:  6a52526
```

WICHTIG: Im lokalen Arbeitsordner liegen derzeit noch nicht committete Änderungen in:

```text
app/page.tsx
app/globals.css
```

Diese lokalen Änderungen enthalten unter anderem den Maps-Bereich und die begonnene responsive Überarbeitung der Satelliten-Kärtchen. Sie sind neuer als der letzte GitHub-Commit und dürfen nicht durch `git reset`, `git checkout --`, `git restore`, einen erzwungenen Branchwechsel oder einen unbedachten Pull überschrieben werden.

### 2. Verpflichtende erste Prüfung

Führe zu Beginn diese rein lesenden Prüfungen aus:

```powershell
Set-Location 'C:\Users\enric\dev\GitHub\ElektroNik Website Neu'
git status --short --branch
git remote -v
git branch -a
git log -5 --oneline --decorate
git diff -- app/page.tsx app/globals.css
```

Lies danach den gesamten aktuellen Projektcode vollständig aus dem Arbeitsordner. Verlasse dich nicht nur auf diese Zusammenfassung. Insbesondere müssen alle Zeilen dieser Dateien gelesen und verstanden werden:

```text
app/page.tsx          365 Zeilen
app/globals.css      1951 Zeilen
app/layout.tsx         47 Zeilen
package.json           30 Zeilen
README.md              35 Zeilen
next.config.ts          7 Zeilen
tsconfig.json          34 Zeilen
eslint.config.mjs      18 Zeilen
postcss.config.mjs      7 Zeilen
.gitignore             44 Zeilen
```

Lies außerdem die Assets und ihre Verwendung:

```text
public/whatsapp.svg
public/favicon.svg
public/og-v2.png
```

Der aktuelle Code auf der Festplatte ist die maßgebliche Quelle. Er darf nicht aus diesem Prompt rekonstruiert oder durch eine vereinfachte Neufassung ersetzt werden.

### 3. Code aus GitHub beziehen

Wenn der lokale Ordner bereits vorhanden ist und Änderungen enthält, zuerst nur den Remote-Stand abrufen:

```powershell
git fetch origin
git status --short --branch
```

Kein `git pull`, solange lokale, nicht gesicherte Änderungen vorhanden sind. Diese Änderungen zuerst prüfen und nach meiner Freigabe sinnvoll committen oder anderweitig sichern.

Für eine komplett neue, leere Arbeitsumgebung kann das private Repository so geklont werden:

```powershell
Set-Location 'C:\Users\enric\dev\GitHub'
git clone https://github.com/EnricoDon10/ElektroNik-Website.git 'ElektroNik Website Neu'
Set-Location 'C:\Users\enric\dev\GitHub\ElektroNik Website Neu'
git switch main
git pull --ff-only origin main
npm ci
```

Für die Testumgebung in einem sauberen Clone:

```powershell
git fetch origin
git switch Testumgebung
git pull --ff-only origin Testumgebung
```

Niemals Änderungen committen, pushen, mergen oder auf beide Branches übertragen, wenn ich das nicht ausdrücklich verlange.

### 4. Technischer Aufbau

Das Projekt ist eine lokale Next.js-Website mit:

```text
Next.js 16.2.6
React 19.2.6
React DOM 19.2.6
TypeScript 5.9.3
Node.js >= 22.13.0
npm
Next App Router
```

Die Startseite ist eine Client Component in `app/page.tsx`. Das gesamte globale Styling liegt in `app/globals.css`. Es gibt aktuell keine separaten Komponentenordner, kein Backend, keine Datenbank, keine Benutzeranmeldung und keine API-Routen.

Es darf keinen Code für ChatGPT-, OpenAI- oder Codex-Authentifizierung geben. Die Website soll unabhängig als normale Website funktionieren. Im Projekt existiert keine `.openai/hosting.json`; es ist aktuell keine Sites-Bereitstellung eingerichtet.

### 5. Lokalen Webserver starten und beenden

Entwicklungsserver:

```powershell
Set-Location 'C:\Users\enric\dev\GitHub\ElektroNik Website Neu'
npm install
npm run dev
```

Aufruf:

```text
http://localhost:3000
```

Beenden:

```text
Im laufenden Terminal Strg + C drücken und eine eventuelle Nachfrage mit J bestätigen.
```

Produktionsversion lokal prüfen:

```powershell
npm run build
npm run start
```

Auch diese läuft unter `http://localhost:3000` und wird mit `Strg + C` beendet.

Wenn Port 3000 bereits belegt ist, zuerst feststellen, ob der vorhandene Prozess zu diesem Projekt gehört. Keinen fremden Prozess ungefragt beenden.

### 6. Unternehmen, Marke und Tonalität

Der Betrieb heißt **ElektroNik**. Der Name entstand aus der Verbindung von **Elektro** und **Nikolay Nik**.

Markenwirkung:

- hochprofessionell
- moderner Elektro-Meisterbetrieb
- technisch präzise
- vertrauenswürdig und persönlich
- hochwertig, klar und strukturiert
- dunkles Navy-/Ink-Design mit leuchtendem Gelb-Grün als Akzent
- markante große Typografie
- feine Raster, Linien, Glows, Orbits und kontrollierte Animationen

Das Logo zeigt nur den Schriftzug `ELEKTRO` + `NIK`; kein separates gelbes „EN“-Monogramm davor. Unter dem Logo steht `Meisterbetrieb` optisch mittig.

Wichtige Markenformulierungen aus der bisherigen Entwicklung:

```text
Verkabeln. Vernetzen. Vertrauen.
Meisterstrom für Haus und Industrie
Elektromeister für Haus und Industrie
Energie mit System
```

Der aktuell sichtbare Hero verwendet `Elektromeister für Haus und Industrie`. Die Formulierungen `Verkabeln. Vernetzen. Vertrauen.` und `Meisterstrom für Haus und Industrie` werden außerdem in den Metadaten/Open-Graph-Inhalten verwendet. Änderungen an diesen Kernaussagen nur gezielt und nicht versehentlich vornehmen.

### 7. Aktueller Seiteninhalt

Die Website ist eine professionelle One-Page-Seite mit diesen Bereichen:

1. Sticky/oberer Header mit Logo, Navigation und auffälligem gelb-grünem Button `Projekt anfragen`.
2. Hero mit großer Überschrift, Einleitung, Button `Leistungen ansehen` und zentralem Energie-/Blitz-Orbit.
3. Sechs Satelliten-Kärtchen um die zentrale Blitzdarstellung.
4. Laufender Leistungsticker.
5. Leistungsübersicht mit sechs Karten.
6. Bereich `Warum ElektroNik`.
7. Ablauf in vier Schritten.
8. FAQ-Akkordeon.
9. Kontaktbereich mit Telefon, E-Mail, Öffnungszeiten, Google Maps und WhatsApp-Direktanfrage.
10. Footer und mobile Schnellaktionen.

Die sechs Leistungen sind:

```text
01 Elektroinstallation
02 Netzwerkverkabelung
03 E-Mobilität
04 PV & Energiemanagement
05 Prüfung & Sicherheit
06 Service & Störung
```

Inhalt der Netzwerkverkabelung:

```text
Netzwerkschränke
Bodentanks
Netzwerkdosen
strukturierte Netzwerkverkabelung
```

### 8. Kontaktdaten und Verknüpfungen

Telefon und WhatsApp:

```text
0151 68488353
international für Links: +49 151 68488353
tel-Link: tel:+4915168488353
WhatsApp-Link: https://wa.me/4915168488353
```

E-Mail:

```text
kontakt@elektronik-meisterbetrieb.de
mailto:kontakt@elektronik-meisterbetrieb.de
```

Adresse:

```text
Krieler Str. 115
50935 Köln-Lindenthal
```

Öffnungszeiten:

```text
Mo–Fr · 07:00–18:00 Uhr
```

Google Maps:

- Im Kontaktbereich ist ein eingebetteter, angezoomter Kartenausschnitt vorhanden.
- Der Kartenausschnitt belegt in der Kontaktmatrix die linke Hälfte.
- Die Adresse erscheint nicht zusätzlich als doppelte normale Kontaktkarte.
- Es gibt einen direkten Link `In Maps öffnen`.

WhatsApp:

- Der obere Button `Projekt anfragen` enthält das lokale offizielle WhatsApp-Symbol aus `public/whatsapp.svg`.
- Der Button springt zum unteren Formular `#whatsapp-anfrage`.
- Das Formular fragt Name, E-Mail-Adresse und Nachricht ab.
- Beim Absenden wird keine Server-E-Mail verschickt. JavaScript öffnet WhatsApp über `wa.me` mit einer vorbereiteten Nachricht an `0151 68488353`.
- Die eingegebene E-Mail-Adresse wird in den vorbereiteten WhatsApp-Text aufgenommen.

### 9. Bestehende Interaktionen

Diese Funktionen müssen erhalten bleiben:

- Navigation über Sprungmarken.
- Mobiles Navigationsmenü.
- FAQ-Akkordeon.
- Telefon-, E-Mail-, WhatsApp- und Maps-Links.
- WhatsApp-Formular mit vorausgefüllter Nachricht.
- `Leistungen ansehen` scrollt zur Leistungsübersicht.
- Satelliten-Kärtchen sind Links zur Leistungsübersicht.
- Satelliten-Kärtchen kommen bei Hover/Fokus visuell nach vorn.
- Mobile Schnellaktionen für Telefon und WhatsApp.
- Animationen respektieren `prefers-reduced-motion`.

### 10. Aktueller offener Arbeitsstand: Satelliten-Kärtchen

Die zuletzt begonnene Aufgabe ist eine vollständige responsive Überarbeitung der sechs Satelliten-Kärtchen. In `app/page.tsx` wurden Nummer und Text bereits in getrennte Spans aufgeteilt:

```text
visual-chip-number
visual-chip-label
```

In `app/globals.css` wurde eine neue responsive Logik begonnen:

- `.hero-visual` verwendet `container-type: inline-size`.
- Größen verwenden `clamp()` und Container-Query-Einheiten `cqw`.
- Positionen verwenden relative Variablen `--chip-x` und `--chip-y`.
- Die Karten verwenden Grid, `white-space: nowrap` und getrennte Nummer-/Textspalten.
- Desktop-Positionen liegen relativ zum Mittelpunkt auf sechs definierten Orbitpunkten.
- Bis 1024 px ist eine kontrollierte kompakte Alternative begonnen: zentraler kleiner Orbit oberhalb eines Karten-Grids.
- Bis 420 px wechselt das Karten-Grid auf eine Spalte.
- Animationen werden in der kompakten Variante deaktiviert.
- `prefers-reduced-motion` ist vorhanden.

Diese Arbeit ist lokal noch nicht committet und noch nicht vollständig in allen geforderten Größen verifiziert. Setze sie nicht blind zurück. Prüfe zuerst die tatsächliche CSS-Kaskade und die gerenderte Seite.

Die Zielanforderungen für die Satelliten sind:

- Desktop, Laptop, Tablet und Smartphone vollständig responsiv.
- Keine Karte außerhalb des sichtbaren Bereichs.
- Kein Abschneiden und keine unkontrollierten Überlagerungen.
- Keine Zeilenumbrüche in den Satelliten-Kärtchen.
- Kein horizontales Scrollen.
- Positionen und Größen proportional statt nur mit festen Pixelwerten.
- Auf Desktop gleichmäßige Verteilung auf den Umlaufbahnen.
- Auf kleinen Displays eine kontrollierte Alternative mit erkennbarem Bezug zum Orbit.
- Stabil bei Browser-Zoom, verschiedenen Seitenverhältnissen und längeren Texten.
- Hover, Fokus und Klick bleiben erhalten.
- Animationen dürfen keine Karte aus dem sicheren Bereich bewegen.
- `prefers-reduced-motion` beachten.

Mindestens zu testen:

```text
320 px
375 px
768 px
1024 px
1440 px
1920 px
```

Zusätzlich Hoch- und Querformat prüfen. Bei jedem Test kontrollieren:

- `document.documentElement.scrollWidth <= window.innerWidth`
- alle sechs Karten horizontal innerhalb des Layouts
- keine Kartenüberschneidungen
- kein Zeilenumbruch
- lesbare Schrift und konsistente Abstände
- Orbit und Kern vollständig sichtbar
- keine Überschneidung mit Hero-Text, Header oder Folgesektion

### 11. Qualitäts- und Arbeitsregeln

- Vor Änderungen immer den vorhandenen Code und `git diff` analysieren.
- Vorhandene Struktur wiederverwenden, wenn sie sinnvoll ist.
- Keine unnötige Komplett-Neuentwicklung.
- Bestehende Inhalte und Funktionen erhalten.
- Änderungen direkt in den vorhandenen Dateien umsetzen.
- CSS-Konflikte und widersprüchliche Media Queries bereinigen.
- Responsive Werte bevorzugt mit `clamp()`, relativen Einheiten, Grid/Flexbox, Container Queries und gezielten Media Queries lösen.
- Semantisches HTML, Tastaturbedienbarkeit, Fokuszustände und sinnvolle ARIA-Texte beibehalten.
- Keine externen UI-Frameworks ohne echten Grund hinzufügen.
- Keine Zugangsdaten oder geheimen Werte committen.
- Nutzerfremde Änderungen nicht überschreiben.
- Nicht ungefragt deployen.
- Nicht ungefragt committen oder pushen.

Nach Codeänderungen mindestens ausführen:

```powershell
npm run lint
npx tsc --noEmit
git diff --check
```

Wenn kein Entwicklungsserver die `.next`-Dateien sperrt:

```powershell
npm run build
```

Bei visuellen Aufgaben die Website zusätzlich im Browser prüfen und nicht nur aus dem CSS ableiten.

### 12. Git-Workflow bei ausdrücklicher Freigabe

Wenn ich ausdrücklich verlange, die fertigen Änderungen in beide Branches zu übertragen:

1. Aktuellen Status und Diff prüfen.
2. Nur zum Auftrag gehörende Dateien stagen.
3. Einen verständlichen Commit auf `Testumgebung` erstellen und pushen.
4. Den geprüften Stand kontrolliert nach `main` übernehmen.
5. `main` pushen.
6. Abschließend Remote-Hashes und sauberen Status prüfen.

Verwende keine destruktiven Git-Befehle. Bei Branch-Unterschieden zuerst prüfen und sauber mergen oder cherry-picken, statt Dateien zu überschreiben.

### 13. Bekannte Grenzen und noch offene Punkte

- Das Kontaktformular besitzt kein eigenes Backend; es öffnet WhatsApp.
- Impressum und Datenschutz verlinken aktuell noch nicht auf fertige Rechtstext-Seiten.
- Die in diesem Arbeitsstand begonnene Satelliten-Responsivität muss noch vollständig im Browser getestet und gegebenenfalls nachgebessert werden.
- Die aktuell lokalen, uncommitteten Maps- und Satelliten-Änderungen sind noch nicht auf GitHub.

Beginne jetzt mit einer kurzen Bestandsaufnahme anhand des realen Codes. Teile mir konkret mit, welchen Stand du gefunden hast, bevor du größere strukturelle Änderungen vornimmst. Wenn ich dir danach eine konkrete Änderung nenne, setze sie selbstständig um, teste sie angemessen und fasse am Ende knapp zusammen, welche Dateien geändert wurden und was geprüft wurde.

## ENDE DES MASTERPROMPTS
