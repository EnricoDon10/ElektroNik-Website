type ConsentBannerProps = {
  onAcceptAll: () => void;
  onOpenSettings: () => void;
  onRejectAll: () => void;
};

export default function ConsentBanner({
  onAcceptAll,
  onOpenSettings,
  onRejectAll,
}: ConsentBannerProps) {
  return (
    <section
      aria-labelledby="consent-banner-title"
      aria-live="polite"
      className="consent-banner"
      data-testid="consent-banner"
    >
      <div className="consent-banner-copy">
        <p className="consent-kicker">Datenschutz</p>
        <h2 id="consent-banner-title">Ihre Privatsphäre-Einstellungen</h2>
        <p>
          Wir verwenden technisch notwendige Technologien, damit unsere Website zuverlässig
          funktioniert. Mit Ihrer Einwilligung können außerdem externe Inhalte geladen werden.
          Sie können optionale Technologien akzeptieren, ablehnen oder individuell auswählen.
          Ihre Entscheidung können Sie jederzeit über die Datenschutzeinstellungen ändern oder
          widerrufen.
        </p>
        <nav aria-label="Rechtliche Informationen" className="consent-legal-links">
          <a href="/datenschutz/">Datenschutzerklärung</a>
          <a href="/impressum/">Impressum</a>
        </nav>
      </div>

      <div className="consent-banner-actions">
        <button className="consent-button consent-button-decision" onClick={onAcceptAll} type="button">
          Alle akzeptieren
        </button>
        <button className="consent-button consent-button-decision" onClick={onRejectAll} type="button">
          Alle ablehnen
        </button>
        <button className="consent-button consent-button-settings" onClick={onOpenSettings} type="button">
          Einstellungen
        </button>
      </div>
    </section>
  );
}
