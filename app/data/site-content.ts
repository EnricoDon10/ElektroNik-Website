export const services = [
  {
    id: "elektroinstallation",
    number: "01",
    icon: "cable",
    title: "Elektroinstallation",
    shortTitle: "Elektroinstallation",
    text: "Sichere, zukunftsfähige Installationen für Neubau, Umbau und Sanierung – sauber geplant und fachgerecht umgesetzt.",
    tags: ["Neubau", "Sanierung", "Unterverteilung"],
  },
  {
    id: "netzwerkverkabelung",
    number: "02",
    icon: "network",
    title: "Netzwerkverkabelung",
    shortTitle: "Netzwerkverkabelung",
    text: "Strukturierte Netzwerkverkabelung für zuverlässige Datenverbindungen – von Netzwerkschränken und Bodentanks bis zu fachgerecht installierten Netzwerkdosen.",
    tags: ["Netzwerkschränke", "Bodentanks", "Netzwerkdosen"],
  },
  {
    id: "e-mobilitaet",
    number: "03",
    icon: "battery-charging",
    title: "E-Mobilität",
    shortTitle: "E-Mobilität",
    text: "Wallbox, Lastmanagement und die passende Infrastruktur – vom ersten Check bis zur betriebsbereiten Ladestation.",
    tags: ["Wallbox", "Lastmanagement", "Prüfung"],
  },
  {
    id: "pv-energiemanagement",
    number: "04",
    icon: "solar-panel",
    title: "PV & Energiemanagement",
    shortTitle: "PV & Energie",
    text: "Energie sinnvoll erzeugen, speichern und verteilen. Durchdachte Systeme für mehr Unabhängigkeit und Transparenz.",
    tags: ["Photovoltaik", "Speicher", "Monitoring"],
  },
  {
    id: "pruefung-sicherheit",
    number: "05",
    icon: "shield-check",
    title: "Prüfung & Sicherheit",
    shortTitle: "Prüfung & Sicherheit",
    text: "Normgerechte Messungen, E-Checks und Prüfprotokolle für private, gewerbliche und vermietete Objekte.",
    tags: ["E-Check", "DGUV V3", "Dokumentation"],
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
  businessName: "Elektro - NIK",
  ownerName: "Nikolay Shirotskiy",
  phoneDisplay: "0157 / 742 99 367",
  phoneHref: "tel:+4915774299367",
  whatsappHref: "https://wa.me/4915774299367",
  email: "Elektro-nik@t-online.de",
  emailHref: "mailto:Elektro-nik@t-online.de",
  street: "Lindengraben 6",
  postalCode: "44803",
  city: "Bochum",
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
    title: "Angebot",
    text: "Sie erhalten einen transparenten und verständlichen Umfang.",
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
    question: "Übernimmt Elektro - NIK auch kleinere Aufträge?",
    answer:
      "Ja. Neben kompletten Installationen unterstützt Elektro - NIK auch bei einzelnen Steckdosen, Leuchten, Reparaturen, Prüfungen und der Fehlersuche.",
  },
  {
    question: "Wie entsteht ein transparentes Angebot?",
    answer:
      "Nach einer kurzen Abstimmung und – falls nötig – einem Vor-Ort-Termin erhalten Sie eine nachvollziehbare Leistungsübersicht mit klar beschriebenem Umfang.",
  },
  {
    question: "Arbeitet Elektro - NIK für Privat- und Gewerbekunden?",
    answer:
      "Ja. Die Leistungen reichen von Elektroarbeiten in Wohngebäuden bis zu Installations-, Netzwerk- und Prüfaufgaben im gewerblichen Umfeld.",
  },
  {
    question: "Was passiert bei einer Anfrage über WhatsApp?",
    answer:
      "Die Website erstellt aus Ihren Angaben eine Nachricht und öffnet WhatsApp. Erst dort prüfen und versenden Sie die Nachricht selbst; über die Website wird nichts direkt versendet.",
  },
] as const;
