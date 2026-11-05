# ElektroNik Page Experience – Phase 1

## Experience-Ziel

Die Seite führt von „Passt dieser Betrieb zu meinem Projekt?“ zu „Ich kann mein Vorhaben jetzt unkompliziert schildern.“ Jedes Kapitel beantwortet genau eine Frage und baut auf dem vorherigen auf.

## Seitenfluss

| Kapitel | Nutzerfrage | Kerninhalt | Hauptaktion |
| --- | --- | --- | --- |
| Header/Hero | Wer ist ElektroNik und was kann ich tun? | Meisterbetrieb, Region, Nutzen, technisches Markensignet | Header: Leistung anfragen; Hero: Leistungen ansehen |
| Kompetenzleiste | Warum sollte ich weiterlesen? | Meisterbetrieb, Beratung, Ausführung, Region | Orientierung |
| Leistungen | Wird mein Thema abgedeckt? | sechs bestehende Leistungen | Leistung anfragen |
| Warum ElektroNik | Kann ich Qualität und Haltung vertrauen? | drei konkrete Qualitätsargumente ohne Foto | persönlich kennenlernen |
| Ablauf | Wie geht es nach der Anfrage weiter? | Anfrage, Beratung, Terminvereinbarung, Umsetzung | Unsicherheit reduzieren |
| FAQ | Was muss ich noch wissen? | fünf bestehende Fragen | Kontakt aufnehmen |
| Kontakt | Wie starte ich konkret? | Telefon, E-Mail, Zeiten, Karte, WhatsApp-Formular | Anfrage in WhatsApp öffnen |
| Footer | Wo finde ich Navigation und Rechtliches? | Navigation, Kontakt, Impressum, Datenschutz | gezielter Abschluss |

## 1. Header

### Desktop

- 80 px hoch, Inhalt im 1320-px-Container.
- Logo links, vier Navigationspunkte mittig, Projekt-CTA rechts.
- Über Hero transparent/dunkel; nach 24–40 px Scroll eine stabile Navy-Fläche mit feiner Linie.
- Aktiver Abschnitt bleibt sichtbar.

### Mobile

- Logo links, kompakte Kontaktaktion und Menü rechts.
- Menü als klarer Vollbild-Layer ist möglich, benötigt aber kontrollierte Fokusreihenfolge, Fokus-Trap, Escape und Rückgabe zum Button.
- Telefonnummer und WhatsApp im Menü bleiben sinnvoll.

### Bestehende Wiederverwendung

`SiteHeader` liefert bereits Scrollzustand, Intersection Observer, Escape-Handling und Rückfokus. Diese Logik ist eine gute Grundlage; Fokus-Trap und der erste Fokus beim Öffnen fehlen.

## 2. Hero

### Desktop Wireflow

- Eyebrow
- H1 auf zwei bis drei kompakten Zeilen
- Lead mit maximal etwa 560 px Breite
- ein linksbündiger Hero-CTA „Leistungen ansehen“; der Projekt-CTA bleibt ausschließlich im festen Header
- drei Trust-Punkte
- rechts das technische Energie-Diagramm
- unten eine klare Basislinie/Scroll-Cue

Bei 1366 × 768 wird mit dynamischer Viewporthöhe gearbeitet. Der Header ist eingerechnet; die Komposition bleibt vollständig sichtbar, ohne eine pauschale Mindesthöhe von 820 oder 900 px zu erzwingen. Bei sehr niedrigen Viewports darf der Hero höher als ein Viewport werden, solange der nächste Abschnitt initial nicht deutlich erscheint.

### Mobile Wireflow

- Eyebrow
- H1
- Lead
- linksbündiger Leistungs-CTA
- Trust-Zeile
- reduzierter Blitz/Leitungskern
- optional 2–3 kompakte Leistungsanker, nicht alle sechs ausführlich

Das heutige mobile Visual listet alle sechs Leistungs-Chips und wiederholt den Folgeabschnitt. Diese Wiederholung wird reduziert.

### Inhalt

Vorhandene Aussagen bleiben. Es wird kein neuer Superlativ oder unbelegtes Versprechen ergänzt. Der Projekt-CTA wird nicht im Hero wiederholt; der feste Header übernimmt diese Conversion-Aufgabe, während der Hero in die Leistungen führt.

## 3. Kompetenzübergang

Die vorhandene gerade Trust-Bar ist bereits näher an der Zielrichtung als ein schräger Ticker. Empfohlen ist eine ruhige, nicht endlos animierte Leiste:

„MEISTERBETRIEB · PERSÖNLICHE BERATUNG · SAUBERE AUSFÜHRUNG · KÖLN & UMGEBUNG“

Mobile darf umbrechen oder eine verkürzte zweizeilige Variante zeigen. Eine unsichtbar scrollbar wirkende Ein-Zeilen-Lösung wird vermieden.

## 4. Leistungen

### Desktop

- 3 × 2 Karten im 1320-px-Container.
- Kapitelkopf mit H2 links und kurzer Einordnung rechts.
- Jede Karte enthält Nummer, Icon, Titel, vorhandenen Text, Tags und „Projekt besprechen“.
- Hover/Fokus aktiviert eine Leitungsmarke und Pfeil, ohne die gesamte Oberfläche dramatisch zu wechseln.

### Tablet

- 2 × 3 Karten.
- Kartenhöhen je Reihe angleichen, Texte nicht abschneiden.

### Mobile

- 1 × 6 Karten.
- Innenabstand 22–28 px, Mindesthöhe nur inhaltlich erforderlich.
- CTA und Touchfläche klar, keine hoverabhängige Information.

### Wiederverwendung

Leistungsdaten, IDs, Texte, Tags und CTA-Ziel werden beibehalten. Die Datenstruktur ist bereits geeignet.

## 5. Warum ElektroNik

### Rolle

Dieser Bereich wechselt von Leistungsbehauptung zu Vertrauensbeleg.

### Komposition

- Desktop: Positionierung und drei vertikal gestapelte Qualitätspunkte zweispaltig.
- Tablet/Mobile: Positionierung → Qualitätspunkte.
- Ein Foto-Platzhalter wird nicht verwendet.

### Offener Inhalt

Auf Wunsch des Betreibers wurde der Foto-Platzhalter entfernt. Ein Foto ist für den aktuellen Entwurf nicht erforderlich.

Die Aussage „Wir hinterlassen Lösungen. Keine Fragen.“ ist als Markenclaim freigegeben und darf nicht wie ein Kunden-Zitat inszeniert werden.

## 6. Ablauf

### Desktop

Vier Schritte in einem 1080–1120-px-Container. Eine Leitung läuft von Anfrage bis Umsetzung; Schritte sind jederzeit lesbar. Aktivierung kann beim Scrollen erfolgen, statischer Grundzustand bleibt vollständig verständlich.

### Mobile

Vertikale Linie links, Nummer/Knoten und Text rechts. Der aktuelle mobile Zustand entfernt die Linie vollständig und zeigt nur getrennte Zeilen; eine ruhige vertikale Verbindung stärkt die Erzählung.

### Interaktion

Die derzeitige `:has(:hover/:focus)`-Linie ist eine brauchbare CSS-Idee, aber auf Touch nicht als Haupterlebnis geeignet. Der zukünftige Fortschritt soll viewportbasiert sein; Reduced Motion zeigt die gesamte Linie und alle Schritte statisch.

## 7. FAQ

### Desktop

Intro links, Akkordeon rechts in etwa 680–720 px Lesebreite. Fragen erhalten ausreichend große Touchflächen und sichtbare Fokuszustände.

### Mobile

Einspaltig. Antworttext ohne unnötig großen rechten Innenabstand. Plus/Minus bleibt ergänzend; `aria-expanded`, `aria-controls` und Region-Bezug bleiben erhalten.

### Bestehende Wiederverwendung

FAQ-Inhalte und State-Logik werden beibehalten. Zu prüfen ist, ob geschlossene Antworten tatsächlich aus Fokus-/Screenreader-Navigation entfernt werden müssen; `aria-hidden` allein ändert die Renderhöhe, ist aber keine vollständige Offen-/Geschlossen-Semantik für alle Hilfsmittel.

## 8. Kontakt

### Desktop

Zweispaltiger Abschluss im Navy-Soft-Ton:

- links: Headline, Erklärung, Telefon, E-Mail, Öffnungszeiten, Karte
- rechts: Formular als helle, angehobene Fläche

Telefon und E-Mail müssen sofort erkennbar bleiben. Die Karte folgt sekundär. Das Formular behält Leistungsauswahl, optionalen Namen, optionale E-Mail und erforderliche Beschreibung.

### Mobile

Kontaktoptionen, Karte und Formular werden einspaltig. Floating Actions dürfen weder Kartentext noch Formularbutton verdecken. Safe Areas werden berücksichtigt.

### Conversion- und Datenschutzklarheit

Die bestehende Formulierung, dass WhatsApp nur eine vorbereitete Nachricht öffnet und der Nutzer dort selbst versendet, bleibt erhalten. Google Maps wird erst nach Zustimmung zu „Externe Medien“ geladen. Vorher bleiben Adresse, Routenlink und ein lokaler Kartenplatzhalter sichtbar; die Auswahl kann über den Footer widerrufen werden.

## 9. Footer und Rechtliches

Der Footer bleibt kompakt: Logo und Kurzsatz links, Navigation/Kontakt/Rechtliches rechts, Copyright unten. Mobile werden die Bereiche sauber gestapelt.

Impressum und Datenschutz sind ausdrücklich noch unvollständig. Fehlende Angaben werden nicht visuell kaschiert und nicht erfunden. Der Launch ist ohne rechtliche Vervollständigung nicht freigegeben.

## Responsive-Abnahmematrix

| Viewport | Erwartete Experience |
| --- | --- |
| 375 × 667 | Hero-Headline und einzelner Leistungs-CTA ohne horizontalen Overflow; reduziertes Visual; kein verdeckter CTA |
| 390 × 844 | ruhiger einspaltiger Hero; Leistungen einspaltig; Floating Contact kollisionsfrei |
| 430 × 932 | etwas großzügiger Mobile-Rhythmus; Projektbild sinnvoll gecroppt |
| 768 × 1024 | Tablet-Portrait-Hero einspaltig; Leistungen zweispaltig; Kontakt nicht gequetscht |
| 1024 × 768 | Landscape-Komposition ohne 900-px-Mindesthöhe; Hero bleibt kontrolliert |
| 1366 × 768 | kompletter Hero als erster Screen; Leistungsbereich nicht deutlich sichtbar |
| 1440 × 900 | ausgewogene 2-Spalten-Komposition; Visual nahe am Text |
| 1920 × 1080 | 1320-px-Container verhindert Auseinanderziehen |
| 2560 × 1440 | kompakte zentrale Bühne, Hintergründe vollflächig |

Für alle Viewports gelten: keine horizontale Scrollbar, keine abgeschnittenen Headlines, keine Chip-/CTA-Überlappungen, funktionierende Navigation und mindestens 44-px-Touchziele.

## Technische Rahmenbedingungen mit UX-Auswirkung

- Next.js App Router mit statischem Export (`output: "export"`) bleibt erhalten.
- Bilder sind derzeit unoptimiert konfiguriert; neue Projektbilder benötigen deshalb bewusst erzeugte Größen/Formate, damit der IONOS-Export performant bleibt.
- Es existieren derzeit nur Next, React und React DOM als Runtime-Abhängigkeiten; Phase 1 installiert nichts.
- Der IONOS-Prozess lädt den `out`-Ordner per SFTP und setzt Datei-/Ordnerrechte. Das Redesign darf keine Server-Laufzeit voraussetzen.
- SEO-Metadaten, LocalBusiness- und FAQ-Strukturdaten sind vorhanden und sollen in späteren Phasen bewahrt werden.

## Prioritäten für die spätere Umsetzung

### Muss

- Projekt-CTA ausschließlich im Header und linksbündiger Leistungs-CTA im Hero
- robuste Hero-Höhen für 375–2560 px und besonders 1024 × 768
- reduziertes Mobile-Hero-Visual
- konsistente Icon-Sprache
- echtes Projektbild oder klar dokumentierter, nicht veröffentlichungsfertiger Platzhalter
- kollisionsfreie Mobile-Kontaktaktion
- barrierefreies Mobile-Menü und FAQ

### Soll

- feinere Typografiehierarchie
- ruhigere Karten-Hover
- vertikale Mobile-Prozesslinie
- rechtliche Freigabe der umgesetzten Consent- und Google-Maps-Strategie

### Kann

- lokal lizenzierte Display-Schrift
- zusätzliche echte Projektbilder
- dezente technische Annotationen auf Bildflächen

## Visuelle Freigabeentscheidung

Vor Phase 2/Implementierung sollen Nutzer oder Auftraggeber ausdrücklich bestätigen:

1. Leitidee und Farbgewichtung
2. Hero-Komposition mit einem linksbündigen Leistungs-CTA
3. reduzierte Mobile-Hero-Variante
4. Karten- und Icon-Stil
5. Bildmotiv und Nutzungsrecht
6. Kontaktpriorität WhatsApp
