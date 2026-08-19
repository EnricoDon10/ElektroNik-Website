# Legal- und Datenschutz-Audit zum Launch

Stand: 19. August 2026

## Einordnung

Dieser Bericht verbindet eine Code- und Inhaltsprüfung mit einer technischen Launch-Vorbereitung. Er
ist keine anwaltliche Einzelfallberatung und ersetzt insbesondere nicht die Freigabe der echten
Unternehmensdaten und betrieblichen Prozesse durch den Verantwortlichen. Rechtstexte können nur so
richtig sein wie die Angaben zu Rechtsform, Hostingvertrag, Kommunikation und Aufbewahrung.

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
- Impressum und Datenschutz wurden umfassend überarbeitet. Das Impressum ist wegen fehlender echter
  Handwerks-, Rechtsform- und Steuerangaben noch nicht final freigabefähig.
- Ein fester Cookie-Button unten links öffnet die Einstellungen auf jeder Route erneut.
- Trennende Gedankenstriche wurden aus den sichtbaren Website-Texten entfernt. Sprachlich notwendige
  Bindestriche in Begriffen wie `E-Mail`, `E-Mobilität`, `Google-Maps-Karte` und `Vor-Ort-Termin`
  bleiben erhalten.
- Konkrete SFTP-Verbindungskennungen wurden aus der IONOS-Anleitung entfernt und durch Platzhalter
  ersetzt. Passwörter oder private Schlüssel wurden nicht gefunden.

## Tatsächlich geprüfter technischer Datenfluss

| Verarbeitung | Auslöser | Daten oder Speicher | Empfänger | Consent-Status |
|---|---|---|---|---|
| IONOS Webhosting | Jeder Seitenabruf | Aufgerufene Datei, Zeitpunkt, Referrer, Browser, Betriebssystem, Gerätetyp, laut IONOS direkt anonymisierte IP-Adresse | IONOS SE als Hostingdienstleister | Erforderlicher Betrieb, keine optionale Bannerkategorie |
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

## Von Nick zwingend anzufordernde Informationen

### P0: Vor öffentlichem Launch erforderlich

1. Exakte Geschäftsbezeichnung und Rechtsform bestätigen. Insbesondere klären, ob `ElektroNIK,
   Inhaber Nikolay Shirotskiy` ein nicht im Handelsregister eingetragenes Einzelunternehmen ist.
2. Schreibweise des vollständigen bürgerlichen Namens anhand offizieller Unterlagen bestätigen.
3. Zuständige Handwerkskammer nennen.
4. Nummer der Eintragung in die Handwerksrolle und das dort eingetragene Gewerk nennen.
5. Exakte gesetzliche Berufsbezeichnung laut Meisterbrief und Staat der Verleihung nennen.
6. Meisterbrief und Handwerksrolleneintragung als internen Nachweis bereitstellen, weil die Website
   `Meisterbetrieb` verwendet.
7. Handels-, Partnerschafts- oder sonstigen Registerstatus bestätigen. Falls eingetragen:
   Registergericht und Registernummer liefern.
8. Bestätigen, ob eine Umsatzsteuer-Identifikationsnummer oder Wirtschafts-Identifikationsnummer
   erteilt wurde. Nur diese Nummern liefern, niemals die persönliche Steuernummer.
9. Entscheidung zur Verbraucherstreitbeilegung liefern: bereit, verpflichtet oder nicht bereit.
   Zusätzlich Beschäftigtenzahl am 31. Dezember 2025 bestätigen, weil die Ausnahme in § 36 Abs. 3
   VSBG davon abhängen kann.
10. Exakten IONOS-Vertrag und Produktnamen bestätigen. Prüfen, ob es wirklich `Webhosting` ist.
11. Vertragsdatum und AVV-Status im IONOS-Konto bestätigen. Für Neuverträge seit dem 19. Juli 2022
    nennt IONOS die AVV als Bestandteil der AGB. Bei älteren Verträgen muss der Status geprüft werden.
12. Prüfen und dokumentieren, ob IONOS WebAnalytics im Vertrag aktiv ist und welche Einstellungen im
    Kundenkonto gelten.
13. Betriebliche Löschroutine für E-Mail- und WhatsApp-Anfragen festlegen. Benötigt werden Regeln für
    unverbindliche Anfragen, abgelehnte Angebote, Vertragsunterlagen, Rechnungsbezug und Streitfälle.
14. Bestätigen, ob ein Datenschutzbeauftragter bestellt ist oder bestellt werden muss. Falls ja:
    veröffentlichbare Kontaktdaten liefern.
15. Bestätigen, ob die Mobilnummer als WhatsApp- oder WhatsApp-Business-Konto geschäftlich genutzt
    wird und ob WhatsApp der gewünschte Anfragekanal bleiben soll.
16. Produktionsdomain, Domaininhaber, IONOS-Zielvertrag, HTTPS-Zertifikat und Weiterleitungen zwischen
    Hauptdomain und `www` bestätigen.

### P1: Inhalt und Nachweise vor Launch

1. Foto von Nick liefern.
2. Foto des Mitarbeiters liefern.
3. Für jedes Foto Urheber beziehungsweise Fotograf, Nutzungsumfang und Quelle dokumentieren.
4. Für Mitarbeiterfotos eine freiwillige, dokumentierte Einwilligung oder eine andere geprüfte
   Rechtsgrundlage für Website und Social Preview vorhalten. Die Einwilligung muss den konkreten Zweck
   und die Widerrufsfolgen verständlich beschreiben.
5. Bestätigen, ob das Foto nur auf der Website oder auch als Open-Graph-Bild und in sozialen Medien
   verwendet werden darf.
6. Öffnungszeiten liefern und bestätigen. Sie werden derzeit nicht öffentlich dargestellt.
7. Telefonnummer, E-Mail-Adresse, Anschrift und WhatsApp-Fähigkeit der Nummer nochmals schriftlich
   freigeben.
8. Leistungsbehauptungen `Meisterbetrieb`, `E-Check`, `DGUV V3`, Photovoltaik,
   Netzwerkverkabelung und Gewerbekunden mit dem tatsächlichen Leistungsumfang abgleichen.
9. Die Markenformulierung `Wir hinterlassen Lösungen. Keine Fragen.` schriftlich bestätigen oder
   ersetzen. Sie darf nicht als Kundenbewertung erscheinen.
10. Berufshaftpflicht und deren Informationspflichten für die konkrete Leistungserbringung prüfen.
11. Bestätigen, ob künftig Referenzen, Bewertungen, Zertifikate, Herstellerlogos oder Partnerlogos
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

Die bekannte Anbieteranschrift, der Inhaber, Telefon und E-Mail sind eingebunden. Bewusst nicht
erfunden wurden Rechtsform, Kammer, Handwerksrollennummer, Berufsbezeichnung, Verleihungsstaat,
Registerdaten, Umsatzsteuer-Identifikationsnummer und die Entscheidung zur Streitbeilegung.

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

- Lint, TypeScript, Produktionsbuild, alle Playwright-Projekte, Consent-Ablauf, permanente
  Wiederöffnung, direkte Rechtstextrouten und Drittanbieterblockierung.

### Erst im echten Zielsystem verifizierbar

- IONOS-Produkt und Vertragsstatus, AVV, WebAnalytics-Einstellungen, reale Serverheader, HTTPS,
  DNS, Cache, Webspace-Protokolle, E-Mail-Konfiguration und produktive Drittanbieterrequests.

## Launch-Entscheidung

Der Code kann nach erfolgreicher technischer Qualitätssicherung als Releasekandidat gelten. Ein
öffentlicher Launch ist rechtlich und inhaltlich erst vertretbar, nachdem die P0-Angaben geliefert,
in Impressum und Datenschutz eingearbeitet und vom Betreiber beziehungsweise einer geeigneten
Rechtsberatung freigegeben wurden. Das fehlende Foto von Nick und das Mitarbeiterfoto samt
Nutzungsrechten bleiben zusätzlich ein sichtbarer Inhaltsblocker.
