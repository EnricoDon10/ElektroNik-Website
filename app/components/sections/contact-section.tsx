import { ArrowUpRight, Clock, Mail, Phone } from "lucide-react";
import { siteContact } from "../../data/site-content";
import LocationMap from "../location-map";
import WhatsAppForm from "../whatsapp-form";

export default function ContactSection() {
  return (
    <section className="contact" data-reveal-group id="kontakt">
      <div className="contact-inner">
        <div className="contact-intro" data-reveal>
          <p className="chapter light">06 — Kontakt</p>
          <p className="eyebrow">
            <span /> Direkt &amp; unkompliziert
          </p>
          <h2>
            Was können wir für Sie <em>anschließen?</em>
          </h2>
          <p>
            Beschreiben Sie kurz Ihr Vorhaben. Wir melden uns persönlich und besprechen
            den sinnvollsten nächsten Schritt.
          </p>

          <div className="contact-options" data-reveal-group>
            <a className="contact-item" data-reveal href={siteContact.phoneHref}>
              <span className="contact-symbol" aria-hidden="true">
                <Phone focusable="false" size={19} strokeWidth={1.7} />
              </span>
              <span className="contact-copy">
                <small>Telefon</small>
                <strong>{siteContact.phoneDisplay}</strong>
              </span>
              <i aria-hidden="true">
                <ArrowUpRight focusable="false" size={17} />
              </i>
            </a>

            <a className="contact-item" data-reveal href={siteContact.emailHref}>
              <span className="contact-symbol" aria-hidden="true">
                <Mail focusable="false" size={19} strokeWidth={1.7} />
              </span>
              <span className="contact-copy">
                <small>E-Mail</small>
                <strong>{siteContact.email}</strong>
              </span>
              <i aria-hidden="true">
                <ArrowUpRight focusable="false" size={17} />
              </i>
            </a>

            <div className="contact-item contact-hours" data-reveal>
              <span className="contact-symbol" aria-hidden="true">
                <Clock focusable="false" size={19} strokeWidth={1.7} />
              </span>
              <span className="contact-copy">
                <small>Öffnungszeiten</small>
                <strong>{siteContact.openingHoursLabel}</strong>
              </span>
            </div>

            <div className="contact-map-shell" data-reveal>
              <LocationMap />
            </div>
          </div>
        </div>

        <div className="contact-form-shell" data-reveal>
          <WhatsAppForm />
        </div>
      </div>
    </section>
  );
}
