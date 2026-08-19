export const consentConfig = {
  consentVersion: 2,
  consentLifetimeDays: 180,
  storageKey: "elektro-nik-consent",
  categories: {
    necessary: {
      name: "Notwendig",
      purpose: "Speichert Ihre Datenschutzauswahl für sechs Monate und stellt die Grundfunktionen der Website bereit.",
      services: ["Lokale Consent-Speicherung im Browser"],
    },
    externalMedia: {
      name: "Externe Medien",
      purpose: "Erlaubt das Laden der eingebetteten Standortkarte. Dabei wird eine Verbindung zu Google aufgebaut.",
      services: ["Google Maps, Anbieter: Google Ireland Limited"],
    },
  },
  optionalCookieNames: [] as string[],
} as const;

export type ConsentPreferences = {
  consentVersion: number;
  necessary: true;
  externalMedia: boolean;
  updatedAt: string;
};

export function readStoredConsent(value: string | null): ConsentPreferences | null {
  if (!value) {
    return null;
  }

  try {
    const parsed = JSON.parse(value) as Partial<ConsentPreferences>;

    const updatedAt = typeof parsed.updatedAt === "string"
      ? Date.parse(parsed.updatedAt)
      : Number.NaN;
    const maximumAge = consentConfig.consentLifetimeDays * 24 * 60 * 60 * 1000;
    const now = Date.now();

    if (
      parsed.consentVersion !== consentConfig.consentVersion
      || parsed.necessary !== true
      || typeof parsed.externalMedia !== "boolean"
      || typeof parsed.updatedAt !== "string"
      || Number.isNaN(updatedAt)
      || updatedAt > now + 5 * 60 * 1000
      || now - updatedAt > maximumAge
    ) {
      return null;
    }

    return parsed as ConsentPreferences;
  } catch {
    return null;
  }
}
