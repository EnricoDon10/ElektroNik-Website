# ElektroNik Website

Lokale Website für den Elektro-Meisterbetrieb ElektroNik.

## Voraussetzungen

- Node.js ab Version 22
- npm

## Website lokal starten

Im Projektordner ein Terminal öffnen und ausführen:

```powershell
npm install
npm run dev
```

Anschließend ist die Website unter
[http://localhost:3000](http://localhost:3000) erreichbar.

## Website beenden

Im Terminal, in dem der Webserver läuft, `Strg + C` drücken und die Nachfrage
gegebenenfalls mit `J` bestätigen.

## Produktionsversion lokal testen

```powershell
npm run build
npm run start
```

Auch diese Version läuft unter
[http://localhost:3000](http://localhost:3000) und wird mit `Strg + C` beendet.
