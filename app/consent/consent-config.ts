export const consentConfig = {
  consentVersion: 1,
  storageKey: "elektro-nik-consent",
  categories: {
    necessary: {
      name: "Notwendig",
      purpose: "Speichert Ihre Datenschutzauswahl und stellt die Grundfunktionen der Website bereit.",
      services: ["Lokale Speicherung der Einwilligungsentscheidung"],
    },
    externalMedia: {
      name: "Externe Medien",
      purpose: "Erlaubt das Laden eingebetteter Inhalte von externen Anbietern.",
      services: ["Google Maps"],
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

    if (
      parsed.consentVersion !== consentConfig.consentVersion
      || parsed.necessary !== true
      || typeof parsed.externalMedia !== "boolean"
      || typeof parsed.updatedAt !== "string"
      || Number.isNaN(Date.parse(parsed.updatedAt))
    ) {
      return null;
    }

    return parsed as ConsentPreferences;
  } catch {
    return null;
  }
}
