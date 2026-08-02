import { siteContact } from "../data/site-content";

export default function SiteFooter() {
  return (
    <footer>
      <div className="footer-inner">
        <div className="footer-brand">
          <a className="brand brand-footer" href="#start" aria-label={`${siteContact.businessName} Startseite`}>
            <span className="brand-name">
              ELEKTRO <span>– NIK</span>
            </span>
            <span className="brand-sub">Meisterbetrieb</span>
          </a>
          <p>
            Moderne Elektrotechnik.
            <br />
            Meisterhaft umgesetzt.
          </p>
        </div>

        <nav className="footer-nav" aria-label="Navigation im Footer">
          <div>
            <strong>Navigation</strong>
            <a href="#leistungen">Leistungen</a>
            <a href="#warum-wir">Über uns</a>
            <a href="#ablauf">Ablauf</a>
          </div>
          <div>
            <strong>Kontakt</strong>
            <a href={siteContact.phoneHref}>Telefon</a>
            <a href={siteContact.whatsappHref}>WhatsApp</a>
            <a href={siteContact.emailHref}>E-Mail</a>
          </div>
          <div>
            <strong>Rechtliches</strong>
            <a href="/impressum/">Impressum</a>
            <a href="/datenschutz/">Datenschutz</a>
          </div>
        </nav>

        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} {siteContact.businessName} Meisterbetrieb</span>
          <span>Mit Energie. Mit Verstand.</span>
        </div>
      </div>
    </footer>
  );
}
