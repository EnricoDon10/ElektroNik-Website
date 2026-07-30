export const services = [
  {
    id: "elektroinstallation",
    number: "01",
    title: "Elektroinstallation",
    shortTitle: "Elektroinstallation",
    text: "Sichere, zukunftsfähige Installationen für Neubau, Umbau und Sanierung – sauber geplant und fachgerecht umgesetzt.",
    tags: ["Neubau", "Sanierung", "Unterverteilung"],
  },
  {
    id: "netzwerkverkabelung",
    number: "02",
    title: "Netzwerkverkabelung",
    shortTitle: "Netzwerkverkabelung",
    text: "Strukturierte Netzwerkverkabelung für zuverlässige Datenverbindungen – von Netzwerkschränken und Bodentanks bis zu fachgerecht installierten Netzwerkdosen.",
    tags: ["Netzwerkschränke", "Bodentanks", "Netzwerkdosen"],
  },
  {
    id: "e-mobilitaet",
    number: "03",
    title: "E-Mobilität",
    shortTitle: "E-Mobilität",
    text: "Wallbox, Lastmanagement und die passende Infrastruktur – vom ersten Check bis zur betriebsbereiten Ladestation.",
    tags: ["Wallbox", "Lastmanagement", "Prüfung"],
  },
  {
    id: "pv-energiemanagement",
    number: "04",
    title: "PV & Energiemanagement",
    shortTitle: "PV & Energie",
    text: "Energie sinnvoll erzeugen, speichern und verteilen. Durchdachte Systeme für mehr Unabhängigkeit und Transparenz.",
    tags: ["Photovoltaik", "Speicher", "Monitoring"],
  },
  {
    id: "pruefung-sicherheit",
    number: "05",
    title: "Prüfung & Sicherheit",
    shortTitle: "Prüfung & Sicherheit",
    text: "Normgerechte Messungen, E-Checks und Prüfprotokolle für private, gewerbliche und vermietete Objekte.",
    tags: ["E-Check", "DGUV V3", "Dokumentation"],
  },
  {
    id: "service-stoerung",
    number: "06",
    title: "Service & Störung",
    shortTitle: "Service & Störung",
    text: "Schnelle Hilfe, klare Kommunikation und nachhaltige Fehlerbehebung, wenn elektrische Anlagen nicht funktionieren.",
    tags: ["Fehlersuche", "Reparatur", "Wartung"],
  },
] as const;

export const faqs = [
  {
    question: "Welche Angaben helfen für eine erste Einschätzung?",
    answer:
      "Eine kurze Beschreibung, Fotos der Situation, der Einsatzort und das gewünschte Ergebnis helfen dabei, Ihr Vorhaben schnell einzuordnen. Details können anschließend persönlich geklärt werden.",
  },
  {
    question: "Übernimmt ElektroNik auch kleinere Aufträge?",
    answer:
      "Ja. Neben kompletten Installationen unterstützt ElektroNik auch bei einzelnen Steckdosen, Leuchten, Reparaturen, Prüfungen und der Fehlersuche.",
  },
  {
    question: "Wie entsteht ein transparentes Angebot?",
    answer:
      "Nach einer kurzen Abstimmung und – falls nötig – einem Vor-Ort-Termin erhalten Sie eine nachvollziehbare Leistungsübersicht mit klar beschriebenem Umfang.",
  },
  {
    question: "Arbeitet ElektroNik für Privat- und Gewerbekunden?",
    answer:
      "Ja. Die Leistungen reichen von Elektroarbeiten in Wohngebäuden bis zu Installations-, Netzwerk- und Prüfaufgaben im gewerblichen Umfeld.",
  },
  {
    question: "Was passiert bei einer Anfrage über WhatsApp?",
    answer:
      "Die Website erstellt aus Ihren Angaben eine Nachricht und öffnet WhatsApp. Erst dort prüfen und versenden Sie die Nachricht selbst; über die Website wird nichts direkt versendet.",
  },
] as const;
