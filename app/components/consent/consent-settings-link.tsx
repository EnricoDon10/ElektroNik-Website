"use client";

import { useConsent } from "./consent-provider";

export default function ConsentSettingsLink() {
  const { openSettings } = useConsent();

  return (
    <button className="footer-link-button" onClick={openSettings} type="button">
      Datenschutzeinstellungen
    </button>
  );
}
