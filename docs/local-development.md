# Lokale Entwicklung unter Windows PowerShell

Diese Anleitung startet genau das aktuelle Checkout unter:

```text
C:\Users\enric\dev\GitHub\ElektroNik Website Neu
```

Sie installiert keine globalen Werkzeuge und führt kein Deployment aus.

## 1. Voraussetzungen prüfen

Benötigt werden:

- Windows 10 oder 11
- Windows PowerShell oder PowerShell 7
- Node.js mindestens `22.13.0`
- npm; es wird zusammen mit Node.js installiert

PowerShell öffnen und die Versionen prüfen:

```powershell
node --version
npm --version
```

Die Node-Ausgabe muss `v22.13.0` oder eine neuere Version zeigen. Wenn `node` oder `npm` nicht gefunden wird, Node.js installieren beziehungsweise aktualisieren und anschließend PowerShell neu öffnen.

## 2. In den richtigen Projektordner wechseln

Diesen Befehl vollständig kopieren:

```powershell
cd 'C:\Users\enric\dev\GitHub\ElektroNik Website Neu'
```

Die einfachen Anführungszeichen sind erforderlich, weil der Ordnername Leerzeichen enthält. Danach den Ort und die Projektdatei kontrollieren:

```powershell
Get-Location
Test-Path -LiteralPath '.\package.json'
```

`Get-Location` muss den oben genannten neuen Projektpfad anzeigen. `Test-Path` muss `True` ausgeben. Bei `False` nicht mit der Installation fortfahren, sondern zuerst den Pfad korrigieren.

## 3. Dependencies reproduzierbar installieren

Das Repository enthält `package-lock.json`. Für den normalen lokalen Einstieg deshalb ausführen:

```powershell
npm ci
```

`npm ci` verwendet exakt das Lockfile und erstellt `node_modules` reproduzierbar neu. Es kann einen vorhandenen `node_modules`-Ordner ersetzen, verändert aber weder Quellcode noch `package-lock.json`.

### Wann stattdessen `npm install`?

`npm install` nur verwenden, wenn Dependencies bewusst ergänzt oder aktualisiert werden sollen. Der Befehl darf `package-lock.json` verändern und ist deshalb kein allgemeiner Startschritt.

| Situation | Richtiger Befehl |
| --- | --- |
| frischer Checkout | `npm ci` |
| `package-lock.json` wurde aus Git aktualisiert | `npm ci` |
| vorhandene Installation soll exakt neu aufgebaut werden | `npm ci` |
| Dependency wird bewusst hinzugefügt oder aktualisiert | `npm install …` und Änderung prüfen |

Keine zusätzlichen Pakete nur zum lokalen Anzeigen der Website installieren.

## 4. Entwicklungsserver starten

```powershell
npm run dev
```

Warten, bis Next.js meldet, dass der Server bereit ist. Anschließend öffnen:

[http://localhost:3001](http://localhost:3001)

Wichtige Details:

- Der Entwicklungsserver bindet ausschließlich an `localhost`.
- Der festgelegte Projektport ist `3001`.
- Änderungen an Komponenten und Styles werden während der Entwicklung automatisch aktualisiert.
- Für dieses Projekt ist `http://localhost:3001` die verbindliche Standardadresse.

### Alternativport 3002

Falls Port `3001` belegt ist, den Entwicklungsserver so starten:

```powershell
npm run dev -- --port 3002
```

Dann [http://localhost:3002](http://localhost:3002) öffnen.

## 5. Server beenden

Zum PowerShell-Fenster zurückkehren, in dem der Server läuft, und drücken:

```text
Strg + C
```

Falls PowerShell nach einer Bestätigung fragt, mit `J` bestätigen. Vor einem Wechsel zwischen Development und statischer Preview den laufenden Server immer zuerst beenden.

## 6. Produktionsqualität prüfen

Die einzelnen Prüfungen lauten:

```powershell
npm run lint
npm run typecheck
npm run build
```

Als Kurzform führt dieser Befehl dieselben drei Schritte nacheinander aus:

```powershell
npm run check
```

Ein erfolgreicher Build erzeugt:

```text
C:\Users\enric\dev\GitHub\ElektroNik Website Neu\out
```

Der Ordner `out/` ist das statische Auslieferungsartefakt. Nur sein Inhalt wird später auf den IONOS-Webspace übertragen. IONOS benötigt dafür keine laufende Node.js-Anwendung.

Für die vollständige automatisierte Prüfung inklusive Playwright steht zusätzlich bereit:

```powershell
npm run verify
```

## 7. Statischen Export lokal ansehen

Zuerst den aktuellen Export erstellen, danach den integrierten Preview-Server starten:

```powershell
npm run build
npm run preview
```

Dann öffnen:

[http://localhost:3001](http://localhost:3001)

Der Preview-Server verwendet nur Node.js-Bordmittel aus `scripts/serve-static.mjs`. Es wird keine zusätzliche Dependency installiert und kein externer Dienst benötigt.

Wenn Port `3001` belegt ist:

```powershell
npm run preview -- --port 3002
```

Dann [http://localhost:3002](http://localhost:3002) öffnen.

Direkt prüfen:

- [Startseite](http://localhost:3001/)
- [Impressum](http://localhost:3001/impressum/)
- [Datenschutz](http://localhost:3001/datenschutz/)
- [Sitemap](http://localhost:3001/sitemap.xml)
- [Robots-Datei](http://localhost:3001/robots.txt)

`npm run start` ist aktuell ein Alias für denselben statischen Preview-Server. Für Klarheit in der lokalen Arbeit wird `npm run preview` empfohlen.

## 8. Häufige Fehler

### „Der Pfad wurde nicht gefunden“

Den exakten, in Anführungszeichen gesetzten Pfad verwenden:

```powershell
cd 'C:\Users\enric\dev\GitHub\ElektroNik Website Neu'
```

Nicht die früheren Projektkopien aus älteren Notizen verwenden. Verbindlich ist nur der oben angegebene Ordner `ElektroNik Website Neu`.

### „npm.ps1 kann nicht geladen werden“

Keine PowerShell-Sicherheitsrichtlinie umgehen. Stattdessen die Windows-Command-Datei von npm verwenden:

```powershell
npm.cmd ci
npm.cmd run dev
```

Dasselbe Muster funktioniert für andere npm-Scripts, zum Beispiel `npm.cmd run build`.

### `EADDRINUSE`: Port 3001 ist bereits belegt

Am einfachsten Port `3002` verwenden:

```powershell
npm run dev -- --port 3002
```

oder für den statischen Export:

```powershell
npm run preview -- --port 3002
```

Einen bestehenden Prozess nur beenden, wenn eindeutig feststeht, dass es der eigene alte Entwicklungsserver ist. Zuerst prüfen:

```powershell
$processId = Get-NetTCPConnection -LocalPort 3001 -State Listen |
  Select-Object -First 1 -ExpandProperty OwningProcess
Get-CimInstance Win32_Process -Filter "ProcessId = $processId" |
  Select-Object ProcessId, Name, CommandLine
```

Nur bei eindeutig erkanntem eigenen Prozess:

```powershell
Stop-Process -Id $processId
```

Den derzeit auf Port `3000` laufenden alten Checkout nicht ungeprüft beenden.

### `npm ci` meldet ein nicht passendes Lockfile

Zuerst kontrollieren, dass wirklich der aktuelle Projektordner geöffnet ist und Node.js mindestens Version `22.13.0` verwendet. `package-lock.json` nicht löschen. Nur wenn `package.json` bewusst geändert wurde, darf `npm install` das Lockfile kontrolliert aktualisieren.

Eine reine npm-Warnung bei Exitcode `0` bedeutet nicht automatisch, dass die Installation fehlgeschlagen ist. Insbesondere keine Installationsskripte oder `npm audit fix` pauschal freigeben beziehungsweise ausführen.

### Der Build fehlt oder `npm run preview` bricht ab

Der Preview-Server benötigt `out/index.html`. Neu bauen:

```powershell
npm run build
npm run preview
```

### Änderungen erscheinen in der Preview nicht

Die statische Preview aktualisiert sich nicht per Hot Reload. Preview mit `Strg + C` beenden, erneut bauen und neu starten:

```powershell
npm run build
npm run preview
```

Für laufende Entwicklung stattdessen `npm run dev` verwenden.

### Browser zeigt keine Seite

- Auf die Meldung warten, dass der Server bereit ist.
- `http://` und nicht `https://` verwenden.
- Den zum gestarteten Befehl passenden Port `3001` oder `3002` öffnen.
- Prüfen, ob das Server-Terminal noch läuft und dort ein Fehler ausgegeben wurde.

### Build oder Tests schlagen fehl

Die Prüfungen einzeln ausführen, damit der erste Fehler sichtbar wird:

```powershell
npm run lint
npm run typecheck
npm run build
npm run test:e2e
```

Fehler beheben und denselben Befehl erneut ausführen. Prüfungen nicht abschalten oder umgehen.

## 9. Bezug zum IONOS-Deployment

Die lokale Arbeit endet beim geprüften Ordner `out/`. Ein Build führt keinen Upload und keine Veröffentlichung aus.

Für ein später ausdrücklich freigegebenes Deployment gilt die separate Datei `IONOS-DEPLOYMENT-ANLEITUNG.md`. Sie verwendet denselben aktuellen Projektpfad:

```text
C:\Users\enric\dev\GitHub\ElektroNik Website Neu\out
```

Vor jedem Upload zusätzlich die offene Launch-Checkliste, rechtliche Angaben und das exakte entfernte Zielverzeichnis prüfen.
