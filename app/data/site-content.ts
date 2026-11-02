export const services = [
  {
    id: "elektroinstallation",
    number: "01",
    icon: "cable",
    title: "Elektroinstallation",
    shortTitle: "Elektroinstallation",
    text: "Sichere, zukunftsfähige Installationen für Neubau, Umbau und Sanierung. Sauber geplant und fachgerecht umgesetzt.",
    tags: ["Neubau", "Sanierung", "Unterverteilung"],
  },
  {
    id: "netzwerkverkabelung",
    number: "02",
    icon: "network",
    title: "Netzwerkverkabelung und IT-Beratung",
    shortTitle: "Netzwerkverkabelung",
    text: "Strukturierte Netzwerkverkabelung für zuverlässige Datenverbindungen, von Netzwerkschränken und Bodentanks bis zu Netzwerkdosen.",
    tags: ["Netzwerkschränke", "Bodentanks", "Netzwerkdosen"],
  },
  {
    id: "e-mobilitaet",
    number: "03",
    icon: "battery-charging",
    title: "E-Mobilität",
    shortTitle: "E-Mobilität",
    text: "Wallbox, Lastmanagement und die passende Infrastruktur. Von der Planung bis zur betriebsbereiten Ladestation.",
    tags: ["Wallbox", "Lastmanagement", "Infrastruktur"],
  },
  {
    id: "pv-energieberatung",
    number: "04",
    icon: "solar-panel",
    title: "PV & Energieberatung",
    shortTitle: "PV & Energieberatung",
    text: "Wir beraten zu Photovoltaik, prüfen die Machbarkeit und übernehmen die Wartung. Netzanalyse mit modernem Messsystem.",
    tags: ["Photovoltaik", "Machbarkeit", "Wartung", "Netzanalyse"],
  },
  {
    id: "industriemaschinen-anlagen",
    number: "05",
    icon: "factory",
    title: "Industriemaschinen & Anlagen",
    shortTitle: "Industrieservice",
    text: "Reparatur, Fehlersuche und Wartung von Industrieanlagen. Netzanalyse mit modernem Messsystem.",
    tags: ["Reparatur", "Fehlersuche", "Wartung", "Netzanalyse"],
  },
  {
    id: "service-stoerung",
    number: "06",
    icon: "wrench",
    title: "Service & Störung",
    shortTitle: "Service & Störung",
    text: "Schnelle Hilfe, klare Kommunikation und nachhaltige Fehlerbehebung, wenn elektrische Anlagen nicht funktionieren.",
    tags: ["Fehlersuche", "Reparatur", "Wartung"],
  },
] as const;

export const siteContact = {
  businessName: "ElektroNIK",
  ownerName: "Nikolay Shirotskiy",
  legalForm: "Einzelunternehmen",
  chamber: "Handwerkskammer Dortmund",
  professionalTitle: "Elektrotechnikermeister",
  industrySpecialty: "Elektronik und Automatisierungstechnik für die Industrie",
  websiteAdministrator: "ME Digitale Maximilian Dirr & Enrico Mancuso GbR",
  phoneDisplay: "0157 / 742 99 367",
  phoneHref: "tel:+4915774299367",
  whatsappHref: "https://wa.me/4915774299367",
  email: "Elektro-nik@t-online.de",
  emailHref: "mailto:Elektro-nik@t-online.de",
  street: "Kantstraße 10",
  postalCode: "44867",
  city: "Wattenscheid",
} as const;

export const trustSignals = [
  "Meisterbetrieb",
  "Direkter Kontakt",
  "Saubere Ausführung",
] as const;

export const competenceSignals = [
  "Meisterbetrieb",
  "Persönliche Beratung",
  "Saubere Ausführung",
  "Bochum & Umgebung",
] as const;

export const qualityPoints = [
  {
    number: "01",
    title: "Direkter Kontakt",
    text: "Sie sprechen mit dem Fachmann, der Ihr Projekt versteht und begleitet.",
  },
  {
    number: "02",
    title: "Saubere Ausführung",
    text: "Durchdachte Planung, ordentliche Baustelle und transparente Dokumentation.",
  },
  {
    number: "03",
    title: "Zukunftssicher",
    text: "Lösungen, die heute überzeugen und für morgen sinnvoll vorbereitet sind.",
  },
] as const;

export const processSteps = [
  {
    number: "01",
    title: "Anfrage",
    text: "Kurz anrufen, schreiben oder Bilder per WhatsApp senden.",
  },
  {
    number: "02",
    title: "Beratung",
    text: "Wir klären Bedarf, Machbarkeit und die sinnvollste Lösung.",
  },
  {
    number: "03",
    title: "Terminvereinbarung",
    text: "Wir vereinbaren einen passenden Termin und klären den Umfang der gewünschten Arbeiten.",
  },
  {
    number: "04",
    title: "Umsetzung",
    text: "Fachgerecht, sauber und mit abschließendem Funktionscheck.",
  },
] as const;

export const faqs = [
  {
    question: "Welche Angaben helfen für eine erste Einschätzung?",
    answer:
      "Eine kurze Beschreibung, Fotos der Situation, der Einsatzort und das gewünschte Ergebnis helfen dabei, Ihr Vorhaben schnell einzuordnen. Details können anschließend persönlich geklärt werden.",
  },
  {
    question: "Übernimmt ElektroNIK auch kleinere Aufträge?",
    answer:
      "Ja. Neben kompletten Installationen unterstützt ElektroNIK auch bei einzelnen Steckdosen, Leuchten, Reparaturen und der Fehlersuche.",
  },
  {
    question: "Arbeitet ElektroNIK für Privat- und Gewerbekunden?",
    answer:
      "Ja. ElektroNIK arbeitet für Privatkunden, Gewerbebetriebe und große Industriekunden, auch aus der Schwerindustrie.",
  },
  {
    question: "Was passiert bei einer Anfrage über WhatsApp?",
    answer:
      "Die Website erstellt aus Ihren Angaben eine Nachricht und öffnet WhatsApp. Erst dort prüfen und versenden Sie die Nachricht selbst; über die Website wird nichts direkt versendet.",
  },
] as const;
