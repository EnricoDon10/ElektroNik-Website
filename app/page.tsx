import Image from "next/image";
import FaqList from "./components/faq-list";
import LocationMap from "./components/location-map";
import SiteHeader from "./components/site-header";
import WhatsAppForm from "./components/whatsapp-form";
import { services } from "./data/site-content";

const chipClasses = ["chip-one", "chip-two", "chip-three", "chip-four", "chip-five", "chip-six"];

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main-content">Zum Inhalt springen</a>
      <SiteHeader />

      <main id="main-content" tabIndex={-1}>
      <section className="hero" id="start">
        <div className="hero-grid" aria-hidden="true" />
        <div className="hero-glow" aria-hidden="true" />
        <div className="hero-content">
          <p className="eyebrow"><span /> Elektro-Meisterbetrieb · zuverlässig &amp; persönlich</p>
          <h1>
            Elektromeister<br />
            <span>für Haus und Industrie</span>
          </h1>
          <p className="hero-lead">
            ElektroNik steht für moderne Elektrotechnik mit Handschlagqualität –
            von der klassischen Installation bis zur intelligenten Energielösung.
          </p>
          <div className="hero-actions">
            <a className="button button-ghost hero-service-button" href="#leistungen">
              Leistungen ansehen <span aria-hidden="true">↓</span>
            </a>
          </div>
        </div>

        <div className="hero-visual" aria-label="ElektroNik Kompetenzübersicht" role="group">
          <div className="visual-orbit orbit-one" />
          <div className="visual-orbit orbit-two" />
          <div className="visual-core">
            <span className="core-bolt" aria-hidden="true" />
            <small>ENERGIE</small>
            <strong>mit System</strong>
          </div>
          {services.map((service, index) => (
            <a
              className={`visual-chip ${chipClasses[index]}`}
              href={`#${service.id}`}
              key={service.id}
            >
              <span className="visual-chip-number">{service.number}</span>
              <span className="visual-chip-label">{service.shortTitle}</span>
            </a>
          ))}
        </div>

      </section>

      <section className="ticker" aria-label="Leistungsschwerpunkte">
        <div>
          <span>ELEKTROINSTALLATION</span><i>✦</i>
          <span>NETZWERKVERKABELUNG</span><i>✦</i>
          <span>E-MOBILITÄT</span><i>✦</i>
          <span>PHOTOVOLTAIK</span><i>✦</i>
          <span>SICHERHEIT</span><i>✦</i>
          <span>ELEKTROINSTALLATION</span><i>✦</i>
        </div>
      </section>

      <section className="section services" id="leistungen">
        <div className="section-heading">
          <div>
            <p className="eyebrow dark"><span /> Was wir für Sie tun</p>
            <h2>Leistung, die<br /><em>weiterdenkt.</em></h2>
          </div>
          <p>
            Von der Idee bis zur Abnahme: ElektroNik verbindet fundiertes
            Handwerk mit moderner Technik und einem Blick für die beste Lösung.
          </p>
        </div>
        <div className="service-grid">
          {services.map((service) => (
            <article className="service-card" id={service.id} key={service.number}>
              <div className="service-top">
                <span>{service.number}</span>
                <span className="service-arrow" aria-hidden="true">+</span>
              </div>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
              <div className="tag-list">
                {service.tags.map((tag) => <span key={tag}>{tag}</span>)}
              </div>
              <a className="service-cta" href="#whatsapp-anfrage">
                Projekt besprechen <span aria-hidden="true">↗</span>
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="quality" id="warum-wir">
        <div className="quality-copy">
          <p className="eyebrow"><span /> Darum ElektroNik</p>
          <h2>Meisterhaft.<br /><em>Menschlich.</em><br />Auf den Punkt.</h2>
          <a className="text-link" href="#kontakt">Persönlich kennenlernen <span>↗</span></a>
        </div>
        <div className="quality-panel">
          <div className="panel-line" />
          <div className="panel-monogram">NIK</div>
          <div className="panel-card">
            <span>Unser Versprechen</span>
            <strong>Wir hinterlassen<br />Lösungen. Keine Fragen.</strong>
          </div>
        </div>
        <div className="quality-points">
          <div><strong>01</strong><h3>Direkter Kontakt</h3><p>Sie sprechen mit dem Fachmann, der Ihr Projekt versteht und begleitet.</p></div>
          <div><strong>02</strong><h3>Saubere Ausführung</h3><p>Durchdachte Planung, ordentliche Baustelle und transparente Dokumentation.</p></div>
          <div><strong>03</strong><h3>Zukunftssicher</h3><p>Lösungen, die heute überzeugen und für morgen sinnvoll vorbereitet sind.</p></div>
        </div>
      </section>

      <section className="section process" id="ablauf">
        <div className="section-heading">
          <div>
            <p className="eyebrow dark"><span /> So läuft es ab</p>
            <h2>Einfach zum<br /><em>guten Ergebnis.</em></h2>
          </div>
        </div>
        <div className="process-track">
          {[
            ["01", "Anfrage", "Kurz anrufen, schreiben oder Bilder per WhatsApp senden."],
            ["02", "Beratung", "Wir klären Bedarf, Machbarkeit und die sinnvollste Lösung."],
            ["03", "Angebot", "Sie erhalten einen transparenten und verständlichen Umfang."],
            ["04", "Umsetzung", "Fachgerecht, sauber und mit abschließendem Funktionscheck."],
          ].map(([number, title, text]) => (
            <article
              aria-label={`Schritt ${number}: ${title}`}
              key={number}
              tabIndex={0}
            >
              <span>{number}</span>
              <div className="process-dot" aria-hidden="true" />
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="faq-section">
        <div>
          <p className="eyebrow dark"><span /> Kurz erklärt</p>
          <h2>Häufige<br /><em>Fragen.</em></h2>
          <p className="faq-intro">Noch etwas offen? <br /> Schreiben Sie uns einfach direkt! </p>
        </div>
        <FaqList />
      </section>

      <section className="contact" id="kontakt">
        <div className="contact-intro">
          <p className="eyebrow"><span /> Direkt &amp; unkompliziert</p>
          <h2>Was können wir<br />für Sie <em>anschließen?</em></h2>
          <p>Beschreiben Sie kurz Ihr Vorhaben. Wir melden uns persönlich und besprechen den sinnvollsten nächsten Schritt.</p>
          <div className="contact-options">
            <a className="contact-item" href="tel:+4915168488353">
              <span className="contact-symbol">T</span>
              <span className="contact-copy"><small>Telefon</small><strong>0151 68488353</strong></span>
              <i>↗</i>
            </a>
            <a className="contact-item" href="mailto:kontakt@elektronik-meisterbetrieb.de">
              <span className="contact-symbol">@</span>
              <span className="contact-copy"><small>E-Mail</small><strong>kontakt@elektronik-meisterbetrieb.de</strong></span>
              <i>↗</i>
            </a>
            <div className="contact-item contact-hours">
              <span className="contact-symbol">Ö</span>
              <span className="contact-copy">
                <small>Öffnungszeiten</small>
                <strong>Mo–Fr · 07:00–18:00 Uhr</strong>
              </span>
            </div>
            <LocationMap />
          </div>
        </div>
        <WhatsAppForm />
      </section>
      </main>

      <footer>
        <div className="footer-brand">
          <a className="brand brand-footer" href="#start">
            <span className="brand-name">ELEKTRO<span>NIK</span></span>
            <span className="brand-sub">Meisterbetrieb</span>
          </a>
          <p>Moderne Elektrotechnik.<br />Meisterhaft umgesetzt.</p>
        </div>
        <div className="footer-nav">
          <div><strong>Navigation</strong><a href="#leistungen">Leistungen</a><a href="#warum-wir">Über uns</a><a href="#ablauf">Ablauf</a></div>
          <div><strong>Kontakt</strong><a href="tel:+4915168488353">Telefon</a><a href="https://wa.me/4915168488353">WhatsApp</a><a href="mailto:kontakt@elektronik-meisterbetrieb.de">E-Mail</a></div>
          <div className="footer-legal">
            <strong>Rechtliches</strong>
            <span>Impressum (folgt)</span>
            <span>Datenschutz (folgt)</span>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} ElektroNik Meisterbetrieb</span>
          <span>Mit Energie. Mit Verstand.</span>
        </div>
      </footer>

      <div className="mobile-actions" aria-label="Schnellkontakt">
        <a className="mobile-action mobile-action-phone" href="tel:+4915168488353" aria-label="ElektroNik anrufen">
          <svg aria-hidden="true" viewBox="0 0 24 24">
            <path d="M6.62 10.79a15.46 15.46 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.02-.24 11.36 11.36 0 0 0 3.57.57 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.61 21 3 13.39 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1 11.36 11.36 0 0 0 .57 3.57 1 1 0 0 1-.25 1.02l-2.2 2.2Z" />
          </svg>
        </a>
        <a className="mobile-action mobile-action-whatsapp" href="https://wa.me/4915168488353" aria-label="ElektroNik über WhatsApp kontaktieren">
          <Image src="/whatsapp.svg" alt="" height={28} width={28} />
        </a>
      </div>
    </>
  );
}
