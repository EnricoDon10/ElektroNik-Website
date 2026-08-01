# Website-Update auf IONOS veröffentlichen

Normalerweise müssen Rechte nicht nach jedem SFTP-Upload gesetzt werden. Bei diesem IONOS-Webspace hat der rekursive Upload jedoch neue Dateien beziehungsweise Unterordner mit ungeeigneten Webserverrechten erzeugt. Deshalb ist die Rechteprüfung fester Bestandteil dieses Ablaufs.

## Phase 1: Änderungen lokal prüfen

PowerShell öffnen und ins Projekt wechseln:

```powershell
Set-Location 'C:\Users\enric\dev\GitHub\Elektro Nik Website'
```

Den Code prüfen:

```powershell
npm run lint
npx tsc --noEmit
```

Wenn beide Befehle ohne Fehler durchlaufen, den fertigen Website-Export erstellen:

```powershell
npm run build
```

Der fertige Upload liegt danach hier:

```text
C:\Users\enric\dev\GitHub\Elektro Nik Website\out
```

Wichtig: Erst nach `npm run build` hochladen. Dadurch enthält `out` immer den neuesten Stand.

---

## Phase 2: Verbindung über SFTP herstellen

In derselben PowerShell:

```powershell
Set-Location 'C:\Users\enric\dev\GitHub\Elektro Nik Website\out'
```

Dann verbinden:

```powershell
sftp -P 22 su8995@access-5021047713.webspace-host.com
```

Das Passwort eingeben. Während der Eingabe werden keine Zeichen angezeigt.

Nach erfolgreicher Anmeldung erscheint:

```text
sftp>
```

## Phase 3: Lokalen und entfernten Ordner festlegen

Remote-Zielverzeichnis öffnen:

```text
cd Websites/elektronik
```

Kontrollieren:

```text
pwd
```

Das Ergebnis sollte lauten:

```text
Remote working directory: /Websites/elektronik
```

Lokalen Exportordner festlegen:

```text
lcd "C:/Users/enric/dev/GitHub/Elektro Nik Website/out"
```

Kontrollieren:

```text
lpwd
```

Das Ergebnis sollte auf den lokalen `out`-Ordner zeigen.

## Phase 4: Dateien hochladen

Upload starten:

```text
put -r *
```

Warten, bis sämtliche Übertragungen abgeschlossen sind.

Danach kontrollieren:

```text
ls -la
```

Die folgenden Elemente müssen vorhanden sein:

```text
index.html
404.html
_next
favicon.svg
whatsapp.svg
robots.txt
```

SFTP-Verbindung beenden:

```text
bye
```

---

## Phase 5: Webserverberechtigungen setzen

Jetzt über SSH verbinden:

```powershell
ssh -p 22 su8995@access-5021047713.webspace-host.com
```

Auf dem Server in den Websiteordner wechseln:

```bash
cd ~/Websites/elektronik
```

Verzeichnisrechte setzen:

```bash
find . -type d -exec chmod 755 {} \;
```

Dateirechte setzen:

```bash
find . -type f -exec chmod 644 {} \;
```

Damit gelten:

- Ordner: `755`
- Dateien: `644`

Anschließend kontrollieren:

```bash
ls -ld _next _next/static _next/static/chunks
```

Die Verzeichnisse sollten vorne ungefähr so aussehen:

```text
drwxr-xr-x
```

CSS-Dateien kontrollieren:

```bash
find _next/static/chunks -maxdepth 1 -name "*.css" -exec ls -l {} \;
```

CSS-Dateien sollten vorne so aussehen:

```text
-rw-r--r--
```

SSH-Verbindung beenden:

```bash
exit
```

---

## Phase 6: Website kontrollieren

Die Website zuerst in einem privaten Browserfenster öffnen. Alternativ die Seite mit `Strg + F5` vollständig neu laden.

Anschließend prüfen:

- Wird das vollständige Design geladen?
- Funktioniert die mobile Navigation?
- Bleiben Telefon- und WhatsApp-Bubble beim Scrollen sichtbar?
- Funktionieren Telefon und WhatsApp?
- Werden Bilder und Symbole angezeigt?
- Gibt es auf Smartphone und Desktop keine Darstellungsfehler?

## Kurzfassung zum Kopieren

### Lokaler Export

```powershell
Set-Location 'C:\Users\enric\dev\GitHub\Elektro Nik Website'
npm run lint
npx tsc --noEmit
npm run build
Set-Location 'C:\Users\enric\dev\GitHub\Elektro Nik Website\out'
```

### SFTP-Upload

```powershell
sftp -P 22 su8995@access-5021047713.webspace-host.com
```

Innerhalb von SFTP:

```text
cd Websites/elektronik
lcd "C:/Users/enric/dev/GitHub/Elektro Nik Website/out"
put -r *
ls -la
bye
```

### Berechtigungen

```powershell
ssh -p 22 su8995@access-5021047713.webspace-host.com
```

Innerhalb von SSH:

```bash
cd ~/Websites/elektronik
find . -type d -exec chmod 755 {} \;
find . -type f -exec chmod 644 {} \;
exit
```

Ein Update nur veröffentlichen, wenn `npm run lint`, `npx tsc --noEmit` und `npm run build` erfolgreich durchgelaufen sind.

## Sicherheitshinweise

- Das SFTP-/SSH-Passwort niemals in dieser Datei, im Projekt oder in GitHub speichern.
- Den Windows-Schutz bei blockierten Installationsdateien nicht umgehen.
- Vor dem Upload immer prüfen, dass das Remote-Zielverzeichnis `/Websites/elektronik` lautet.
