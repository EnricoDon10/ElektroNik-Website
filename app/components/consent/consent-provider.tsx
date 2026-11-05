"use client";

import {
  createContext,
  type ReactNode,
  useCallback,
  useContext,
  useMemo,
  useState,
  useSyncExternalStore,
} from "react";
import {
  consentConfig,
  type ConsentPreferences,
  readStoredConsent,
} from "../../consent/consent-config";
import ConsentBanner from "./consent-banner";
import ConsentFloatingButton from "./consent-floating-button";
import ConsentSettingsDialog from "./consent-settings-dialog";

type ConsentContextValue = {
  externalMediaAllowed: boolean;
  grantExternalMedia: () => void;
  openSettings: () => void;
  preferences: ConsentPreferences | null;
};

const ConsentContext = createContext<ConsentContextValue | null>(null);
const CONSENT_CHANGE_EVENT = "elektro-nik-consent-change";

function subscribeToConsent(callback: () => void) {
  window.addEventListener("storage", callback);
  window.addEventListener(CONSENT_CHANGE_EVENT, callback);

  return () => {
    window.removeEventListener("storage", callback);
    window.removeEventListener(CONSENT_CHANGE_EVENT, callback);
  };
}

function getConsentSnapshot(): string | null | undefined {
  try {
    return window.localStorage.getItem(consentConfig.storageKey);
  } catch {
    return null;
  }
}

function getServerConsentSnapshot(): string | null | undefined {
  return undefined;
}

function clearOptionalCookies() {
  consentConfig.optionalCookieNames.forEach((cookieName) => {
    document.cookie = `${cookieName}=; Max-Age=0; path=/; SameSite=Lax`;
  });
}

export default function ConsentProvider({ children }: { children: ReactNode }) {
  const storedConsent = useSyncExternalStore(
    subscribeToConsent,
    getConsentSnapshot,
    getServerConsentSnapshot,
  );
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [settingsExternalMedia, setSettingsExternalMedia] = useState(false);
  const [sessionPreferences, setSessionPreferences] = useState<ConsentPreferences | null>(null);
  const preferences = useMemo(
    () => readStoredConsent(storedConsent ?? null) ?? sessionPreferences,
    [sessionPreferences, storedConsent],
  );
  const ready = storedConsent !== undefined;

  const openSettings = useCallback(() => {
    setSettingsExternalMedia(preferences?.externalMedia ?? false);
    setSettingsOpen(true);
  }, [preferences?.externalMedia]);

  const persistPreferences = useCallback((externalMedia: boolean) => {
    const nextPreferences: ConsentPreferences = {
      consentVersion: consentConfig.consentVersion,
      necessary: true,
      externalMedia,
      updatedAt: new Date().toISOString(),
    };

    if (!externalMedia) {
      clearOptionalCookies();
    }

    try {
      window.localStorage.setItem(
        consentConfig.storageKey,
        JSON.stringify(nextPreferences),
      );
    } catch {
      // Die Auswahl bleibt über den React-State für die laufende Sitzung wirksam.
    }

    setSessionPreferences(nextPreferences);
    window.dispatchEvent(new Event(CONSENT_CHANGE_EVENT));
    setSettingsOpen(false);
  }, []);

  const acceptAll = useCallback(() => persistPreferences(true), [persistPreferences]);
  const rejectAll = useCallback(() => persistPreferences(false), [persistPreferences]);

  const contextValue = useMemo<ConsentContextValue>(() => ({
    externalMediaAllowed: preferences?.externalMedia ?? false,
    grantExternalMedia: acceptAll,
    openSettings,
    preferences,
  }), [acceptAll, openSettings, preferences]);

  return (
    <ConsentContext.Provider value={contextValue}>
      {children}
      <ConsentFloatingButton onOpen={openSettings} />
      {ready && !preferences ? (
        <ConsentBanner
          onAcceptAll={acceptAll}
          onOpenSettings={openSettings}
          onRejectAll={rejectAll}
        />
      ) : null}
      <ConsentSettingsDialog
        externalMedia={settingsExternalMedia}
        onAcceptAll={acceptAll}
        onClose={() => setSettingsOpen(false)}
        onExternalMediaChange={setSettingsExternalMedia}
        onRejectAll={rejectAll}
        onSave={persistPreferences}
        open={settingsOpen}
      />
    </ConsentContext.Provider>
  );
}

export function useConsent() {
  const context = useContext(ConsentContext);

  if (!context) {
    throw new Error("useConsent muss innerhalb des ConsentProvider verwendet werden.");
  }

  return context;
}
