"use client";

import { Cookie } from "lucide-react";

export default function ConsentFloatingButton({ onOpen }: { onOpen: () => void }) {
  return (
    <button
      aria-label="Cookie-Einstellungen öffnen"
      className="consent-floating-button"
      data-testid="floating-consent-settings"
      onClick={onOpen}
      title="Cookie-Einstellungen"
      type="button"
    >
      <Cookie aria-hidden="true" size={19} strokeWidth={1.8} />
    </button>
  );
}
