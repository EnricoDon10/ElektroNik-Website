# ElektroNik Creative Brief – Phase 1

Aktualisierung vom 2. November 2026: Dieses Dokument hält die ursprüngliche Analyse fest. Die
nachfolgenden Betreiberangaben und Copy-Änderungen aktualisieren die betroffenen Punkte; maßgeblich
für den aktuellen Seiteninhalt ist `app/data/site-content.ts`.

## Status und Zweck

Dieses Dokument beschreibt die fachlich und gestalterisch abnehmbare Grundlage für das High-End-Redesign. Es basiert auf der tatsächlichen Implementierung in `app/page.tsx`, `app/globals.css`, den Komponenten unter `app/components/`, den Inhalten in `app/data/site-content.ts`, der Next.js-Konfiguration und der IONOS-Deployment-Anleitung. In Phase 1 wurde kein Produktionscode verändert.

## Unternehmen und Angebot

Elektro - NIK wird als persönlicher Elektro-Meisterbetrieb in Bochum und Umgebung positioniert. Das Angebot umfasst:

1. Elektroinstallation
2. Netzwerkverkabelung
3. E-Mobilität
4. PV und Energieberatung mit Machbarkeitsprüfung, Wartung und Netzanalyse mit modernem Messsystem
5. Reparatur, Fehlersuche und Wartung von Industriemaschinen und Anlagen sowie Netzanalyse
6. Service und Störung

Die vorhandene Kernbotschaft „Elektromeister für Haus und Industrie“ deckt Privat- und Gewerbekunden ab. Der Text verbindet moderne Technik mit „Handschlagqualität“, sauberer Ausführung und persönlicher Begleitung. Diese Kombination ist der stärkste differenzierende Kern und soll erhalten bleiben.

## Zielgruppen

### Primär

- Private Eigentümer und Bauherren im Raum Bochum, die Renovierung, Neubau, Wallbox, PV oder eine sichere Modernisierung planen.
- Kleine und mittlere Gewerbekunden, Hausverwaltungen und Vermieter mit Bedarf an Installation, Netzwerk, Prüfung oder Störungsbehebung.

### Nutzungssituationen

- Dringend und mobil: Telefonnummer oder WhatsApp sollen sofort erreichbar sein.
- Vergleichend und vertrauenssuchend: Kompetenz, Ablauf, Qualität und echte Arbeit müssen vor der Kontaktaufnahme glaubwürdig werden.
- Projektorientiert: Nutzer sollen ihr Vorhaben in wenigen Schritten einordnen und per WhatsApp übergeben können.

## Markenversprechen

**ElektroNik verbindet die Präzision moderner Elektrotechnik mit direkter, verlässlicher Meisterbetreuung.**

Die Website soll deshalb nicht primär „Technologie-Show“, sondern kontrollierte Kompetenz vermitteln. Premium entsteht durch Präzision, Ruhe, Typografie, echte Projektnähe und klare Entscheidungen – nicht durch eine hohe Anzahl an Effekten.

## Kommunikationsziele

1. In den ersten fünf Sekunden müssen Gewerk, Region, Qualitätsniveau und der nächste Schritt verständlich sein.
2. Leistungen sollen scanbar sein, ohne wie austauschbare Produktkarten zu wirken.
3. Der Qualitätsbereich muss mit realem Beleg statt nur Behauptungen Vertrauen aufbauen.
4. Der Ablauf soll Unsicherheit reduzieren.
5. Kontakt soll Wahlfreiheit bieten: Telefon, E-Mail, Karte und vorbereitete WhatsApp-Anfrage.

## Conversion-Ziel und Pfade

### Primäre Conversion

„Projekt unverbindlich anfragen“ führt zum vorhandenen WhatsApp-Formular und bleibt als primäre Aktion im festen Header jederzeit erreichbar. Nach der Nutzerentscheidung vom 1. August 2026 wird dieser CTA im Hero nicht wiederholt. Dort steht ausschließlich der linksbündige Orientierungslink „Leistungen ansehen“.

### Sekundäre Conversions

- direkte Telefonnummer `0157 / 742 99 367`
- WhatsApp vorläufig `+49 157 74299367` (Bestätigung ausstehend)
- E-Mail `Elektro-nik@t-online.de`
- Route zu `Kantstraße 10, 44867 Wattenscheid`
- vertiefender Einstieg über eine konkrete Leistung

### Empfohlener Hauptpfad

Hero → Vertrauenssignale → Leistungen → Warum ElektroNik mit gestapelten Qualitätsbelegen → Ablauf → FAQ → Kontaktformular.

Die vorhandene Seitenreihenfolge ist grundsätzlich richtig und wird nicht aus Selbstzweck neu sortiert.

## Bestehende Stärken

- Klare semantische Kapitel und eine sinnvolle One-Page-Informationsarchitektur.
- Zentral gepflegte Leistungs- und FAQ-Daten.
- Prägnante, weitgehend konkrete Leistungstexte.
- Direkte CTAs jeder Leistung zum WhatsApp-Formular.
- Kontaktbereich mit Telefon, E-Mail, Öffnungszeiten, Karte und Formular.
- WhatsApp-Formular erklärt transparent, dass erst in WhatsApp versendet wird.
- Skip-Link, sichtbare Fokusgestaltung, aktive Navigation und Escape-Schließen im mobilen Menü sind bereits angelegt.
- Rechtliche Seiten behaupten keine Vollständigkeit, sondern benennen offen fehlende Angaben.
- Statischer Export und IONOS-Ablauf sind fest dokumentiert.
- Das bestehende Farbfundament und der 1320-px-Container entsprechen bereits der gewünschten Markenrichtung.

## Kernprobleme der aktuellen Experience

### Vertrauen

Der Bereich „Warum ElektroNik“ enthielt zunächst einen Foto-Platzhalter. Auf Wunsch des Betreibers wurde dieser am 2. November 2026 entfernt und durch drei vertikal angeordnete Qualitätsbelege neben der Positionierung ersetzt. Referenzen, Zertifikate und Bewertungen dürfen nicht erfunden werden.

### Hero und Hierarchie

- Der Hero behält bewusst nur den Leistungslink; die primäre Projektaktion liegt im festen Header und wird nicht doppelt gezeigt.
- Die Headline erreicht bis zu 94 px und die zweite Zeile ist vollständig neongrün; das ist aufmerksamkeitsstark, kann aber auf Kosten der gewünschten Ruhe gehen.
- Das technische Hero-Visual ist gut angelegt, wirkt durch sechs schwebende Chips, zwei Orbits, Glow und permanenten Puls noch eher wie ein Interface-Diagramm als wie ein unverwechselbares Markensignet.
- Auf Desktop erzwingen Hero und Hero-Inner mindestens 820 px Höhe. Bei 768 px hohen Viewports liegt der nächste Bereich sicher unterhalb des Initialscreens, zugleich entsteht aber ein unnötig langer Hero. Auf 901–1100 px Breite werden mindestens 900 px erzwungen. Unter 900 px fällt die Mindesthöhe weg und Text, CTAs, Trust-Zeile, Visual und sechs Chips wachsen vertikal stark; der First Screen wird dort nicht mehr bewusst komponiert.

### Responsive und Mobile

- Die mobile Hero-Grafik wird zu einem 230-px-Orbit plus zwei- beziehungsweise einspaltiger Liste aller sechs Leistungen. Das wiederholt den unmittelbar folgenden Leistungsbereich und verlängert den Einstieg erheblich.
- Unter 420 px wird die Chip-Liste einspaltig und ist besonders hoch.
- Die Kompetenzleiste wird horizontal scrollbar, besitzt aber keinen sichtbaren Hinweis auf weitere Inhalte.
- Zwei feste Mobile-Schnellkontaktbuttons können Inhalte im unteren rechten Bereich verdecken; der Footer kompensiert nur mit zusätzlichem Bottom-Padding.
- Das mobile Menü verdeckt den Viewport vollständig, sperrt Body-Scroll und reagiert auf Escape; ein vollständiges Fokus-Trapping beziehungsweise eine explizite Dialogsemantik ist im Code jedoch nicht vorhanden.

### Visuelle Kohärenz

- Buchstaben wie `T`, `@`, `Ö` und `A` dienen als Kontaktsymbole, während andernorts Pfeile und ein selbst gebauter Blitz verwendet werden. Eine konsistente technische Icon-Sprache fehlt.
- Der starke Wechsel einer kompletten Leistungskarte zu Navy ist funktional, aber visuell gewichtiger als nötig.
- Mehrere sehr große Headlines pro Seite schwächen den Kontrast zwischen Hero und Folgekapiteln.
- System-Font-Stacks sind performant, aber die Markenwirkung ist geräteabhängig und nicht vollständig kontrollierbar.

## Inhaltliche Grenzen

Folgende Angaben werden unverändert bewahrt:

- Unternehmensname: Elektro - NIK
- Inhaber: Nikolay Shirotskiy
- Telefon: 0157 / 742 99 367
- E-Mail: Elektro-nik@t-online.de
- Adresse: Kantstraße 10, 44867 Wattenscheid
- Öffnungszeiten: noch nicht bestätigt und daher derzeit nicht öffentlich dargestellt
- vorhandene Leistungen, FAQ-Inhalte und Kontaktlogik

Nicht ohne Kundennachweis ergänzen: Bewertungen, Mitarbeiter, Betriebsalter, Reaktionszeiten, Partnerlogos, Zertifikate, Referenzprojekte oder Garantiezusagen.

## Bilder

Für den aktuellen Seitenentwurf wird kein Projekt- oder Mitarbeiterfoto benötigt. Es werden keine
Platzhalterbilder, Stockbilder oder generierten Personen als reale Mitarbeiter verwendet. Wenn
später echte Fotos ergänzt werden, müssen Herkunft, Nutzungsrechte, erforderliche Einwilligungen und
Alt-Texte vor Veröffentlichung geklärt werden.

## Annahmen zur Abnahme

- ElektroNik möchte weiterhin Privat- und Gewerbekunden gleichwertig ansprechen.
- WhatsApp bleibt der primäre digitale Anfrageweg.
- Der Foto-Platzhalter wurde entfernt; Fotos sind im aktuellen Entwurf nicht vorgesehen.
- Systemschriften bleiben der performante Fallback. Ob eine lizenzierte lokale Markenschrift bereitgestellt werden kann, ist vor der Implementierung zu entscheiden.
- Google Maps bleibt fachlich gewünscht; Datenschutz und Einwilligungsbedarf werden separat rechtlich geprüft.

## Abnahmefragen

1. Wird „Präzisionshandwerk mit persönlicher Meisterbetreuung“ als Kernpositionierung freigegeben?
2. Bleibt WhatsApp der primäre Projekt-CTA?
3. Sind die neu eingetragenen Unternehmens- und Leistungsangaben final bestätigt?
4. Soll die Website Privat- und Gewerbekunden weiterhin ohne getrennte Einstiegsseiten gemeinsam führen?
5. Ist eine lokal gehostete, lizenzierte Display-Schrift verfügbar oder soll bewusst ein optimierter System-Stack verwendet werden?
