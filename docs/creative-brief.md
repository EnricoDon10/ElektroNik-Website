# ElektroNik Creative Brief – Phase 1

## Status und Zweck

Dieses Dokument beschreibt die fachlich und gestalterisch abnehmbare Grundlage für das High-End-Redesign. Es basiert auf der tatsächlichen Implementierung in `app/page.tsx`, `app/globals.css`, den Komponenten unter `app/components/`, den Inhalten in `app/data/site-content.ts`, der Next.js-Konfiguration und der IONOS-Deployment-Anleitung. In Phase 1 wurde kein Produktionscode verändert.

## Unternehmen und Angebot

ElektroNik wird im vorhandenen Inhalt als persönlicher Elektro-Meisterbetrieb in Köln und Umgebung positioniert. Das Angebot umfasst:

1. Elektroinstallation
2. Netzwerkverkabelung
3. E-Mobilität
4. Photovoltaik und Energiemanagement
5. Prüfung und Sicherheit
6. Service und Störung

Die vorhandene Kernbotschaft „Elektromeister für Haus und Industrie“ deckt Privat- und Gewerbekunden ab. Der Text verbindet moderne Technik mit „Handschlagqualität“, sauberer Ausführung und persönlicher Begleitung. Diese Kombination ist der stärkste differenzierende Kern und soll erhalten bleiben.

## Zielgruppen

### Primär

- Private Eigentümer und Bauherren im Raum Köln, die Renovierung, Neubau, Wallbox, PV oder eine sichere Modernisierung planen.
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

- direkte Telefonnummer `0151 68488353`
- WhatsApp `+49 151 68488353`
- E-Mail `kontakt@elektronik-meisterbetrieb.de`
- Route zu `Krieler Str. 115, 50935 Köln-Lindenthal`
- vertiefender Einstieg über eine konkrete Leistung

### Empfohlener Hauptpfad

Hero → Vertrauenssignale → Leistungen → Warum ElektroNik mit echtem Projektbild → Ablauf → FAQ → Kontaktformular.

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

Der Bereich „Warum ElektroNik“ enthält nur eine als solche bezeichnete Fotoplatzhalterfläche. Damit fehlt der wichtigste visuelle Beleg für echte Ausführung, Materialqualität und Nähe zum Betrieb. Auch Referenzen, Zertifikate und Bewertungen fehlen; sie dürfen nicht erfunden werden.

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

- Telefon: 0151 68488353
- E-Mail: kontakt@elektronik-meisterbetrieb.de
- Adresse: Krieler Str. 115, 50935 Köln
- Öffnungszeiten: Montag bis Freitag, 07:00 bis 18:00 Uhr
- vorhandene Leistungen, FAQ-Inhalte und Kontaktlogik

Nicht ohne Kundennachweis ergänzen: Bewertungen, Mitarbeiter, Betriebsalter, Reaktionszeiten, Partnerlogos, Zertifikate, Referenzprojekte oder Garantiezusagen.

## Bildbedarf vor finaler visueller Umsetzung

Mindestens ein echtes, freigegebenes ElektroNik-Projektfoto wird benötigt. Ideal ist ein kleines Set:

| Motiv | Einsatz | Format | Perspektive / Crop | Alt-Text-Vorschlag |
| --- | --- | --- | --- | --- |
| Präzise Arbeit an Verteilung oder Schaltschrank | Warum ElektroNik, Hauptbild | 4:3, mindestens 2000 px breit | Detailaufnahme, Hände/Werkzeug erlaubt, Gesicht nicht erforderlich; Motivzentrum für 1:1-Mobile-Crop schützen | „Fachgerechte Elektroinstallation von ElektroNik an einer Verteilung“ |
| Sauber installierte Wallbox oder PV-Technik | Leistung/Vertrauen optional | 3:2 | klare Linien, reale Umgebung, keine fremden Marken dominant | „Von ElektroNik installierte Wallbox an einem Wohngebäude“ |
| Netzwerkverteiler oder Messsituation | ergänzende Projektfläche optional | 4:3 | technisch präzise, aufgeräumt, natürliches Licht | „Strukturierte Netzwerkverkabelung in einem ElektroNik-Projekt“ |

Keine externen Stockbilder und keine generierten Personen als reale Mitarbeiter verwenden. Herkunft, Einwilligung und Nutzungsrecht müssen dokumentiert werden.

## Annahmen zur Abnahme

- ElektroNik möchte weiterhin Privat- und Gewerbekunden gleichwertig ansprechen.
- WhatsApp bleibt der primäre digitale Anfrageweg.
- Es liegt aktuell kein freigegebenes Projektbild im Repository vor; `public/` enthält nur WhatsApp-Icon, Favicon und Open-Graph-Grafiken.
- Systemschriften bleiben der performante Fallback. Ob eine lizenzierte lokale Markenschrift bereitgestellt werden kann, ist vor der Implementierung zu entscheiden.
- Google Maps bleibt fachlich gewünscht; Datenschutz und Einwilligungsbedarf werden separat rechtlich geprüft.

## Abnahmefragen

1. Wird „Präzisionshandwerk mit persönlicher Meisterbetreuung“ als Kernpositionierung freigegeben?
2. Bleibt WhatsApp der primäre Projekt-CTA?
3. Kann mindestens ein echtes, freigegebenes Projektfoto bereitgestellt werden?
4. Soll die Website Privat- und Gewerbekunden weiterhin ohne getrennte Einstiegsseiten gemeinsam führen?
5. Ist eine lokal gehostete, lizenzierte Display-Schrift verfügbar oder soll bewusst ein optimierter System-Stack verwendet werden?
