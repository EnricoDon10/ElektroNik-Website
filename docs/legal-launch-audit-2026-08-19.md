# Legal- und Datenschutz-Audit zum Launch

Stand: 19. August 2026

## Einordnung

Dieser Bericht verbindet eine Code- und Inhaltsprüfung mit einer technischen Launch-Vorbereitung. Er
ist keine anwaltliche Einzelfallberatung und ersetzt insbesondere nicht die Freigabe der echten
Unternehmensdaten und betrieblichen Prozesse durch den Verantwortlichen. Rechtstexte können nur so
richtig sein wie die Angaben zu Rechtsform, Hostingvertrag, Kommunikation und Aufbewahrung.

## Nachtrag vom 2. November 2026

Der Betreiber bestätigte: ElektroNIK ist der Markenname des Einzelunternehmens von Nikolay
Shirotskiy. Als Anschrift wurde Kantstraße 10, 44867 Wattenscheid angegeben. Zuständige
Handwerkskammer ist Dortmund; als Berufsbezeichnung wurde Elektrotechnikermeister genannt. Als
Tätigkeitsschwerpunkt wurde Elektronik und Automatisierungstechnik für die Industrie mitgeteilt.
Telefon und E-Mail wurden ebenfalls bestätigt. Diese Angaben wurden im Seiteninhalt aktualisiert;
eine rechtliche Freigabe ersetzen sie nicht.

Gestaltung, Inhalte und technische Betreuung erfolgen durch ME Digitale Maximilian Dirr & Enrico
Mancuso GbR. Die Website liegt im gleichen IONOS-Hostingumfeld wie weitere betreute Websites, aber
in einem eigenen Verzeichnis. ElektroNIK bleibt für die Zwecke und Mittel der geschäftlichen
Websiteverarbeitung verantwortlich. Die tatsächlichen Vertrags- und AVV-Beziehungen zwischen
Betreiber, Agentur und IONOS sind noch zu prüfen.

Der Betreiber wünscht im Qualitätsabschnitt kein Foto. Der Platzhalter wurde entfernt und durch die
drei vertikal angeordneten Qualitätspunkte ersetzt. Ein Projekt- oder Mitarbeiterfoto ist im
aktuellen Seitenentwurf keine Launchvoraussetzung. Die mitgeteilte DUNS-Nummer wird nicht in die
Website aufgenommen, da sie für die Anbieterangaben nicht benötigt wird.

## Ergebnis in Kurzform

- Die Consent-Architektur ist datensparsam aufgebaut. Im Quellcode gibt es nur die Kategorien
  `Notwendig` und `Externe Medien`.
- Google Maps ist der einzige optionale externe Laufzeitdienst. Das iframe wird vor Einwilligung
  nicht erzeugt und bei Widerruf sofort entfernt.
- Die eigene Website setzt keine Cookies. Die Consent-Auswahl wird als versionierter Datensatz im
  Local Storage gespeichert und nach spätestens 180 Tagen erneut abgefragt.
- Es wurden kein Google Analytics, kein Tag Manager, kein Meta-Pixel, kein Marketingtracker, kein
  Captcha, kein externes Video, kein Social-Plugin und kein externer Webfont gefunden.
- Das WhatsApp-Formular sendet nicht an einen eigenen Server. Es erstellt lokal eine Nachricht und
  öffnet WhatsApp erst nach dem Absenden durch die besuchende Person.
- IONOS Webhosting und die von IONOS für dieses Produkt beschriebene WebAnalytics-Verarbeitung sind
  in der Datenschutzerklärung aufgenommen.
- Impressum und Datenschutz wurden überarbeitet. Einzelunternehmen, Inhaber, Anschrift,
  Handwerkskammer und Berufsbezeichnung sind jetzt eingetragen. Handwerksrollen-, Register-, Steuer-
  und Streitbeilegungsangaben sowie der IONOS-Vertragsstatus bleiben offen.
- Ein fester Cookie-Button unten links öffnet die Einstellungen auf jeder Route erneut.
- Der Foto-Platzhalter im Qualitätsabschnitt wurde entfernt; die Qualitätspunkte stehen nun
  untereinander neben der Positionierung.
- Trennende Gedankenstriche wurden aus den sichtbaren Website-Texten entfernt. Sprachlich notwendige
  Bindestriche in Begriffen wie `E-Mail`, `E-Mobilität`, `Google-Maps-Karte` und `Vor-Ort-Termin`
  bleiben erhalten.
- Konkrete SFTP-Verbindungskennungen wurden aus der IONOS-Anleitung entfernt und durch Platzhalter
  ersetzt. Passwörter oder private Schlüssel wurden nicht gefunden.

## Tatsächlich geprüfter technischer Datenfluss

| Verarbeitung | Auslöser | Daten oder Speicher | Empfänger | Consent-Status |
|---|---|---|---|---|
| IONOS Webhosting | Jeder Seitenabruf | Aufgerufene Datei, Zeitpunkt, Referrer, Browser, Betriebssystem, Gerätetyp, laut IONOS direkt anonymisierte IP-Adresse | IONOS SE und bei technischer Administration gegebenenfalls ME Digitale Maximilian Dirr & Enrico Mancuso GbR | Erforderlicher Betrieb, keine optionale Bannerkategorie |
| Consent-Auswahl | Entscheidung im Banner oder Dialog | `elektro-nik-consent` im Local Storage mit Version, Zeit, notwendigem Status und Auswahl für externe Medien | Nur Browser der besuchenden Person | Technisch notwendige Speicherung der Auswahl |
| Google Maps | Erst nach Freigabe oder „Karte laden“ | IP-Adresse, Browser- und Gerätedaten, Zugriff und Karteninteraktion; mögliche Google-Speichertechnologien | Google Ireland Limited und mögliche Konzerngesellschaften | Einwilligung erforderlich |
| WhatsApp | Erst nach bewusstem Öffnen und anschließendem Versand in WhatsApp | Nachricht, optional Name und E-Mail, Nutzungs-, Geräte- und Verbindungsdaten bei WhatsApp | WhatsApp Ireland Limited und nach deren Richtlinie weitere Meta-Stellen | Kein automatischer Website-Request; bewusste externe Nutzung |
| Telefon und E-Mail | Erst nach Linkbetätigung oder eigener Kontaktaufnahme | Vom Nutzer übermittelte Kontakt- und Inhaltsdaten | Telekommunikations- oder E-Mail-Dienstleister und ElektroNIK | Anfrage oder Vertrag |
| Lokale Assets | Seitenabruf | Normale Hosting-Zugriffsdaten | IONOS | Erforderlicher Betrieb |

## Consent-Prüfung

### Umgesetzt

- Gleich erreichbare Aktionen `Alle akzeptieren`, `Alle ablehnen` und `Einstellungen` beim ersten
  Besuch.
- Keine optionale Vorauswahl.
- Notwendige Kategorie ist transparent als immer aktiv gekennzeichnet.
- Google Maps wird vor Zustimmung weder als iframe noch als aktives Ressourcenattribut ausgegeben.
- Individuelle Auswahl, Ablehnung und Zustimmung werden gespeichert.
- Auswahl wird anhand von Version, Format, Datum und maximalem Alter validiert.
- Defekte, veraltete, zukünftige oder abgelaufene Datensätze gelten als unentschieden.
- Widerruf entfernt das Karten-iframe sofort.
- Native Dialogfunktion mit Escape, Fokuswiederherstellung und Scrollsperre.
- Dauerhafter, zugänglicher Cookie-Button unten links sowie zusätzlicher Footer-Link.
- Kein Consent-Management-Paket und keine neue Dependency erforderlich.

### Bewusste Kategorienentscheidung

Es werden keine Kategorien für Statistik oder Marketing angezeigt, weil dafür kein Dienst im
Frontend gefunden wurde. IONOS beschreibt für das Webhosting-Produkt eine serverseitige
WebAnalytics-Verarbeitung aus anonymisierten Hostingdaten. Dafür wurde kein eigener Browsertracker
im Projekt gefunden. Eine erfundene optionale Kategorie würde das tatsächliche Verhalten falsch
darstellen.

## Noch von Nick zu klären

### P0: Vor öffentlichem Launch erforderlich

1. Nummer der Eintragung in die Handwerksrolle und das dort genau eingetragene Gewerk nennen.
2. Meisterbrief und Handwerksrolleneintragung als internen Nachweis bereitstellen. Den Staat der
   Verleihung des Meistertitels noch bestätigen.
3. Handels-, Partnerschafts- oder sonstigen Registerstatus bestätigen. Falls eingetragen:
   Registergericht und Registernummer liefern.
4. Bestätigen, ob eine Umsatzsteuer-Identifikationsnummer oder Wirtschafts-Identifikationsnummer
   erteilt wurde. Der Betreiber klärt dies mit seiner Bürokraft. Nur diese Nummern liefern, niemals
   die persönliche Steuernummer.
5. Entscheidung zur Verbraucherstreitbeilegung liefern: bereit, verpflichtet oder nicht bereit.
   Zusätzlich Beschäftigtenzahl am 31. Dezember 2025 bestätigen, weil die Ausnahme in § 36 Abs. 3
   VSBG davon abhängen kann.
6. Exakten IONOS-Vertrag und Produktnamen bestätigen. Prüfen, ob es wirklich `Webhosting` ist.
7. Vertragsdatum und AVV-Status im IONOS-Konto bestätigen. Für Neuverträge seit dem 19. Juli 2022
    nennt IONOS die AVV als Bestandteil der AGB. Bei älteren Verträgen muss der Status geprüft werden.
8. Prüfen und dokumentieren, ob IONOS WebAnalytics im Vertrag aktiv ist und welche Einstellungen im
    Kundenkonto gelten.
9. Betriebliche Löschroutine für E-Mail- und WhatsApp-Anfragen festlegen. Benötigt werden Regeln für
    unverbindliche Anfragen, abgelehnte Angebote, Vertragsunterlagen, Rechnungsbezug und Streitfälle.
10. Bestätigen, ob ein Datenschutzbeauftragter bestellt ist oder bestellt werden muss. Falls ja:
    veröffentlichbare Kontaktdaten liefern.
11. Bestätigen, ob die Mobilnummer als WhatsApp- oder WhatsApp-Business-Konto geschäftlich genutzt
    wird und ob WhatsApp der gewünschte Anfragekanal bleiben soll.
12. Produktionsdomain, Domaininhaber, IONOS-Zielvertrag, HTTPS-Zertifikat und Weiterleitungen zwischen
    Hauptdomain und `www` bestätigen.

### P1: Inhalt und Nachweise vor Launch

1. Öffnungszeiten liefern und bestätigen. Sie werden derzeit nicht öffentlich dargestellt.
2. Telefonnummer, E-Mail-Adresse und neue Anschrift im abschließenden Freigabedurchlauf schriftlich
   bestätigen. WhatsApp-Fähigkeit der Nummer ist noch offen.
3. Die aktualisierten Leistungsangaben mit dem tatsächlichen Leistungsumfang abgleichen. Prüfungen
   nach DGUV V3 und E-Checks werden aus der Leistungsübersicht entfernt, da sie laut Betreiber nicht
   angeboten werden.
4. Die Markenformulierung `Wir hinterlassen Lösungen. Keine Fragen.` wurde für den Qualitätsabschnitt
   freigegeben. Sie darf nicht als Kundenbewertung erscheinen.
5. Berufshaftpflicht und deren Informationspflichten für die konkrete Leistungserbringung prüfen.
6. Bestätigen, ob künftig Referenzen, Bewertungen, Zertifikate, Herstellerlogos oder Partnerlogos
    verwendet werden. Vor Verwendung müssen Echtheit und Nutzungsrechte dokumentiert sein.

### P2: Technischer IONOS-Launch

1. HTTPS-Zwang, HSTS nach erfolgreicher HTTPS-Prüfung, Referrer-Policy, MIME-Sniffing-Schutz,
   Frame-Regel und Permissions Policy im echten IONOS-Zielsystem festlegen.
2. Content Security Policy anhand des realen Google-Maps-Ziels testen. Nicht unbesehen eine Vorlage
   übernehmen.
3. Direkte Aufrufe von `/impressum/`, `/datenschutz/`, `/sitemap.xml`, `/robots.txt` und einer
   unbekannten Route im Zielsystem testen.
4. Cache-Regeln so setzen, dass HTML aktualisierbar bleibt und gehashte Assets lange gespeichert
   werden können.
5. Backup und Rollback vor dem Upload dokumentieren.
6. Nach Deployment in einem privaten Browserfenster prüfen, dass Google vor Einwilligung nicht
   kontaktiert wird und die Karte nach Widerruf verschwindet.

## Impressumsprüfung

Rechtsform, Inhaber, Anschrift, Telefon, E-Mail, Handwerkskammer und Berufsbezeichnung sind
eingetragen. Noch zu klären sind Handwerksrollennummer und eingetragenes Gewerk, Staat der
Verleihung, Registerstatus, eine eventuell erteilte Umsatzsteuer- oder Wirtschafts-ID und die
Entscheidung zur Streitbeilegung. Die DUNS-Nummer wird nicht veröffentlicht.

Eine alte Verlinkung zur früheren EU-Plattform zur Online-Streitbeilegung wurde nicht aufgenommen.
Die Teilnahmeinformation nach VSBG darf erst nach Entscheidung des Betreibers formuliert werden.

## Datenschutzerklärung

Die neue Erklärung behandelt:

- Verantwortlichen und Kontakt;
- Rechtsgrundlagen nach DSGVO und TDDDG;
- IONOS Webhosting, Serverprotokolle, achtwöchige Speicherdauer und WebAnalytics;
- Auftragsverarbeitung und IONOS-AVV;
- Local Storage, Datenfelder, Zweck, Validierung und sechsmonatige Erneuerung;
- Google Maps mit vorheriger Einwilligung, Datenarten, Widerruf und Drittlandtransfer;
- WhatsApp mit lokaler Nachrichtenvorbereitung, Anbieter und Drittlandtransfer;
- Telefon und E-Mail;
- lokale Ressourcen und nicht vorhandene Marketingdienste;
- Empfänger, Löschung, Betroffenenrechte und Beschwerde bei der LDI NRW;
- fehlendes Profiling und fehlende automatisierte Entscheidungen.

## Offizielle Grundlagen des Audits

- [§ 5 DDG](https://www.gesetze-im-internet.de/ddg/__5.html)
- [§ 25 TDDDG](https://www.gesetze-im-internet.de/ttdsg/__25.html)
- [§ 36 VSBG](https://www.gesetze-im-internet.de/vsbg/__36.html)
- [Datenschutz-Grundverordnung bei EUR-Lex](https://eur-lex.europa.eu/legal-content/DE/TXT/?uri=CELEX%3A32016R0679)
- [IONOS: Datenverarbeitung durch Webhosting-Produkte](https://www.ionos.de/hilfe/datenschutz/datenverarbeitung-durch-ihr-ionos-produktes/datenverarbeitung-durch-webhosting-produkte/)
- [IONOS: Vereinbarung zur Auftragsverarbeitung](https://www.ionos.de/hilfe/datenschutz/allgemeine-informationen-zur-datenschutz-grundverordnung-dsgvo/vereinbarung-zur-auftragsverarbeitung-avv-mit-ionos-abschliessen/)
- [Google-Datenschutzerklärung](https://policies.google.com/privacy?hl=de)
- [Google: Internationale Datenübermittlungen](https://policies.google.com/privacy/frameworks?hl=de)
- [WhatsApp-Datenschutzerklärung für die Europäische Region](https://www.whatsapp.com/legal/privacy-policy-eea)
- [Kontakt und Beschwerde bei der LDI NRW](https://www.ldi.nrw.de/kontakt)

## Abgrenzung der Nachweise

### Durch Code-Inspektion festgestellt

- Dienstinventar, externe URLs, Speicherzugriffe, iframe-Gating, Formularverhalten, lokale Assets,
  statische Exportkonfiguration und fehlende Tracking-Skripte.

### Automatisiert zu verifizieren

- **Stand 2. November 2026: erledigt.** Lint, TypeScript, Produktionsbuild und alle neun
  Playwright-Viewport-Projekte liefen gegen den frischen statischen Export erfolgreich: 243
  bestanden, 9 erwartete Breakpoint-Skips, 0 fehlgeschlagen. Die Suite prüfte unter anderem
  Consent-Ablauf, permanente Wiederöffnung, direkte Rechtstextrouten, Drittanbieterblockierung,
  überarbeitete Leistungstexte, FAQ, Dropdown und Foto-freien Qualitätsabschnitt. Details stehen
  im [`qa-report.md`](./qa-report.md).

### Erst im echten Zielsystem verifizierbar

- IONOS-Produkt und Vertragsstatus, AVV, WebAnalytics-Einstellungen, reale Serverheader, HTTPS,
  DNS, Cache, Webspace-Protokolle, E-Mail-Konfiguration und produktive Drittanbieterrequests.

## Launch-Entscheidung

Der Code kann nach erfolgreicher technischer Qualitätssicherung als Releasekandidat gelten. Ein
öffentlicher Launch ist rechtlich und inhaltlich erst vertretbar, nachdem die offenen P0-Angaben
geliefert, die tatsächlichen IONOS- und Agenturverträge geprüft, die Datenschutzerklärung fachlich
freigegeben und der Betreiber- beziehungsweise Rechtsreview abgeschlossen wurden. Fotos sind für den
aktuellen Seitenentwurf nicht vorgesehen.
