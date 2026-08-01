# ElektroNik Website

Responsive Next.js-Website für den Elektro-Meisterbetrieb ElektroNik. Das Projekt wird als vollständig statische Website in `out/` exportiert und bleibt damit mit dem bestehenden IONOS-Webspace kompatibel.

## Schnellstart unter Windows PowerShell

Vorausgesetzt werden Node.js `22.13.0` oder neuer und das mit Node.js installierte npm.

```powershell
cd 'C:\Users\enric\dev\GitHub\ElektroNik Website Neu'
node --version
npm --version
npm ci
npm run dev
```

Danach im Browser öffnen:

[http://localhost:3001](http://localhost:3001)

Der Projektpfad steht wegen der Leerzeichen in einfachen Anführungszeichen. Das Projekt verwendet bewusst Port `3001`.

Zum Beenden im Server-Terminal `Strg + C` drücken.

## Produktionsbuild und statische Vorschau

```powershell
npm run check
npm run preview
```

`npm run check` führt Lint, TypeScript-Prüfung und den Produktionsbuild aus. Der Build erzeugt den statischen Export unter:

```text
C:\Users\enric\dev\GitHub\ElektroNik Website Neu\out
```

`npm run preview` liefert exakt diesen Ordner ohne zusätzliche Dependency unter [http://localhost:3001](http://localhost:3001) aus. Falls Port `3001` belegt ist:

```powershell
npm run preview -- --port 3002
```

Dann [http://localhost:3002](http://localhost:3002) öffnen. Development- und Preview-Server können nicht gleichzeitig denselben Port verwenden.

## Wichtige npm-Befehle

| Befehl | Zweck |
| --- | --- |
| `npm run dev` | Entwicklungsserver mit Hot Reload auf Port 3001 |
| `npm run lint` | ESLint-Prüfung |
| `npm run typecheck` | TypeScript-Prüfung ohne Dateien zu erzeugen |
| `npm run build` | statischen Produktionsexport nach `out/` erstellen |
| `npm run preview` | vorhandenen Ordner `out/` lokal ausliefern |
| `npm run test:e2e` | Playwright-End-to-End-Tests ausführen |
| `npm run check` | Lint, TypeScript und Build nacheinander ausführen |
| `npm run verify` | vollständige Prüfung inklusive Playwright |

## `npm ci` oder `npm install`?

Für einen frischen Checkout und nach Änderungen an `package-lock.json` immer `npm ci` verwenden. Dadurch werden exakt die festgeschriebenen Versionen installiert. `npm install` ist nur für die bewusste Pflege oder Ergänzung von Dependencies gedacht, weil es das Lockfile verändern kann.

## Ausführliche Anleitungen

- [Lokale Entwicklung unter Windows](docs/local-development.md)
- [Finale Projektübergabe und offene Launch-Gates](docs/final-handoff.md)
- [IONOS-Deployment](IONOS-DEPLOYMENT-ANLEITUNG.md)
- [Launch-Checkliste](docs/launch-checklist.md)
- [QA-Bericht](docs/qa-report.md)

Wichtig: Für alle lokalen Befehle gilt ausschließlich der neue Projektpfad aus dieser README. Die IONOS-Anleitung ist darauf abgestimmt; das entfernte Zielverzeichnis muss vor einem späteren Upload trotzdem ausdrücklich bestätigt werden.

## Technische Basis

- Next.js App Router, React und TypeScript
- statischer Export durch `output: "export"`
- `trailingSlash: true` für statische Unterseiten
- lokale Assets und unoptimierte Next.js-Bilder für hostunabhängigen Export
- Motion und GSAP für kontrollierte Interaktionen
- Playwright für responsive und funktionale Prüfungen

Impressum und Datenschutz enthalten noch offen gekennzeichnete Pflichtangaben. Der lokale Build ist dadurch technisch funktionsfähig, aber die Website ist erst nach fachlicher und rechtlicher Vervollständigung produktionsreif.
