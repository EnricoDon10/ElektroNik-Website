"use client";

import { useEffect, useRef } from "react";
import { consentConfig } from "../../consent/consent-config";

type ConsentSettingsDialogProps = {
  externalMedia: boolean;
  onAcceptAll: () => void;
  onClose: () => void;
  onExternalMediaChange: (enabled: boolean) => void;
  onRejectAll: () => void;
  onSave: (externalMedia: boolean) => void;
  open: boolean;
};

export default function ConsentSettingsDialog({
  externalMedia,
  onAcceptAll,
  onClose,
  onExternalMediaChange,
  onRejectAll,
  onSave,
  open,
}: ConsentSettingsDialogProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const restoreFocusRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) {
      return;
    }

    if (open && !dialog.open) {
      restoreFocusRef.current = document.activeElement instanceof HTMLElement
        ? document.activeElement
        : null;
      dialog.showModal();
      const frame = window.requestAnimationFrame(() => headingRef.current?.focus());
      const previousOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";

      return () => {
        window.cancelAnimationFrame(frame);
        document.body.style.overflow = previousOverflow;
      };
    }

    if (!open && dialog.open) {
      dialog.close();
      restoreFocusRef.current?.focus();
    }
  }, [open]);

  return (
    <dialog
      aria-describedby="consent-dialog-description"
      aria-labelledby="consent-dialog-title"
      className="consent-dialog"
      data-testid="consent-settings-dialog"
      onCancel={(event) => {
        event.preventDefault();
        onClose();
      }}
      onClose={() => {
        restoreFocusRef.current?.focus();
        onClose();
      }}
      ref={dialogRef}
    >
      <div className="consent-dialog-head">
        <div>
          <p className="consent-kicker">Individuelle Auswahl</p>
          <h2 id="consent-dialog-title" ref={headingRef} tabIndex={-1}>
            Datenschutzeinstellungen
          </h2>
        </div>
        <button aria-label="Einstellungen schließen" className="consent-dialog-close" onClick={onClose} type="button">
          ×
        </button>
      </div>

      <p id="consent-dialog-description">
        Optionale Inhalte bleiben deaktiviert, bis Sie ausdrücklich zustimmen. Ihre Auswahl
        wird für sechs Monate gespeichert und kann jederzeit geändert werden.
      </p>

      <div className="consent-category-list">
        <article className="consent-category">
          <div className="consent-category-heading">
            <div>
              <h3>{consentConfig.categories.necessary.name}</h3>
              <p>{consentConfig.categories.necessary.purpose}</p>
            </div>
            <span className="consent-always-active">Immer aktiv</span>
          </div>
          <p className="consent-services">
            <strong>Dienste:</strong> {consentConfig.categories.necessary.services.join(", ")}
          </p>
        </article>

        <article className="consent-category">
          <div className="consent-category-heading">
            <div>
              <h3>{consentConfig.categories.externalMedia.name}</h3>
              <p>{consentConfig.categories.externalMedia.purpose}</p>
            </div>
            <label className="consent-switch">
              <span className="sr-only">Externe Medien erlauben</span>
              <input
                checked={externalMedia}
                onChange={(event) => onExternalMediaChange(event.target.checked)}
                type="checkbox"
              />
              <span aria-hidden="true" />
            </label>
          </div>
          <p className="consent-services">
            <strong>Dienste:</strong> {consentConfig.categories.externalMedia.services.join(", ")}
          </p>
          <p className="consent-status" data-enabled={externalMedia}>
            Status: {externalMedia ? "aktiviert" : "deaktiviert"}
          </p>
        </article>
      </div>

      <div className="consent-dialog-actions">
        <button className="consent-button consent-button-primary" onClick={() => onSave(externalMedia)} type="button">
          Auswahl speichern
        </button>
        <button className="consent-button consent-button-decision" onClick={onAcceptAll} type="button">
          Alle akzeptieren
        </button>
        <button className="consent-button consent-button-decision" onClick={onRejectAll} type="button">
          Alle ablehnen
        </button>
      </div>
    </dialog>
  );
}
