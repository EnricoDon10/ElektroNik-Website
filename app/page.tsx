import Image from "next/image";
import FaqList from "./components/faq-list";
import LocationMap from "./components/location-map";
import SiteHeader from "./components/site-header";
import WhatsAppForm from "./components/whatsapp-form";
import { services } from "./data/site-content";

const chipClasses = ["chip-one", "chip-two", "chip-three", "chip-four", "chip-five", "chip-six"];
const processSteps = [
  ["01", "Anfrage", "Kurz anrufen, schreiben oder Bilder per WhatsApp senden."],
  ["02", "Beratung", "Wir klären Bedarf, Machbarkeit und die sinnvollste Lösung."],
  ["03", "Angebot", "Sie erhalten einen transparenten und verständlichen Umfang."],
  ["04", "Umsetzung", "Fachgerecht, sauber und mit abschließendem Funktionscheck."],
] as const;

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main-content">Zum Inhalt springen</a>
      <SiteHeader />

      <main id="main-content" tabIndex={-1}>
        <section className="hero" id="start">
          <div className="hero-grid" aria-hidden="true" />
          <div className="hero-glow" aria-hidden="true" />
          <div className="hero-inner">
            <div className="hero-content">
              <p className="eyebrow"><span /> Elektro-Meisterbetrieb · Köln &amp; Umgebung</p>
              <h1>Elektromeister <span>für Haus und Industrie</span></h1>
              <p className="hero-lead">
                Moderne Elektrotechnik mit Handschlagqualität – fachgerecht geplant,
                sauber umgesetzt und persönlich begleitet.
              </p>
              <div className="hero-actions">
                <a className="button button-ghost" href="#leistungen">
                  Leistungen ansehen <span aria-hidden="true">↓</span>
                </a>
              </div>
              <ul className="hero-trust" aria-label="ElektroNik Vorteile">
                <li>Meisterbetrieb</li>
                <li>Direkter Kontakt</li>
                <li>Saubere Ausführung</li>
              </ul>
            </div>

            <div className="hero-visual" aria-label="ElektroNik Kompetenzübersicht" role="group">
              <div className="visual-orbit orbit-one" aria-hidden="true" />
              <div className="visual-orbit orbit-two" aria-hidden="true" />
              <div className="visual-core">
                <span className="core-bolt" aria-hidden="true" />
                <small>ENERGIE</small>
                <strong>mit System</strong>
              </div>
              {services.map((service, index) => (
                <a className={`visual-chip ${chipClasses[index]}`} href={`#${service.id}`} key={service.id}>
                  <span className="visual-chip-number">{service.number}</span>
                  <span className="visual-chip-label">{service.shortTitle}</span>
                </a>
              ))}
            </div>
          </div>
          <a className="scroll-cue" href="#leistungen">
            <span>Leistungen entdecken</span><i aria-hidden="true">↓</i>
          </a>
        </section>

        <aside className="trust-bar" aria-label="ElektroNik Qualitätsmerkmale">
          <div>
            <span>Meisterbetrieb</span><i aria-hidden="true" />
            <span>Persönliche Beratung</span><i aria-hidden="true" />
            <span>Saubere Ausführung</span><i aria-hidden="true" />
            <span>Köln &amp; Umgebung</span>
          </div>
        </aside>

        <section className="section services" id="leistungen">
          <div className="section-heading">
            <div>
              <p className="chapter">02 — Leistungen</p>
              <p className="eyebrow dark"><span /> Was wir für Sie tun</p>
              <h2>Leistung, die <em>weiterdenkt.</em></h2>
            </div>
            <p>Von der Idee bis zur Abnahme: fundiertes Handwerk, moderne Technik und ein klarer Blick für die passende Lösung.</p>
          </div>
          <div className="service-grid">
            {services.map((service) => (
              <article className="service-card" id={service.id} key={service.number}>
                <div className="service-top"><span>{service.number}</span><span className="service-arrow" aria-hidden="true">↗</span></div>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
                <div className="tag-list">{service.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                <a className="service-cta" href="#whatsapp-anfrage">Projekt besprechen <span aria-hidden="true">↗</span></a>
              </article>
            ))}
          </div>
        </section>

        <section className="quality" id="warum-wir">
          <div className="quality-inner">
            <div className="quality-copy">
              <p className="chapter light">03 — Warum ElektroNik</p>
              <p className="eyebrow"><span /> Qualität mit Haltung</p>
              <h2>Meisterhaft. <em>Menschlich.</em> Auf den Punkt.</h2>
              <p>Gute Elektrotechnik beginnt mit Zuhören und endet erst, wenn alles zuverlässig funktioniert. Dazwischen liegen klare Beratung, saubere Arbeit und Lösungen mit Zukunft.</p>
              <a className="text-link" href="#kontakt">Persönlich kennenlernen <span aria-hidden="true">↗</span></a>
            </div>
            <div className="quality-panel quality-photo-placeholder" aria-label="Vorbereitete Bildfläche für ein zukünftiges Foto von ElektroNik">
              <div className="panel-grid" aria-hidden="true" />
              <span className="panel-kicker">Foto · ElektroNik bei der Arbeit</span>
              <div className="photo-placeholder-copy">
                <span aria-hidden="true">+</span>
                <strong>Projektfoto vorbereitet</strong>
                <small>Diese Fläche kann später direkt durch ein echtes Foto ersetzt werden.</small>
              </div>
              <div className="panel-card"><span>Unser Versprechen</span><strong>„Wir hinterlassen Lösungen. Keine Fragen.“</strong></div>
            </div>
            <div className="quality-points">
              <article><strong>01</strong><div><h3>Direkter Kontakt</h3><p>Sie sprechen mit dem Fachmann, der Ihr Projekt versteht und begleitet.</p></div></article>
              <article><strong>02</strong><div><h3>Saubere Ausführung</h3><p>Durchdachte Planung, ordentliche Baustelle und transparente Dokumentation.</p></div></article>
              <article><strong>03</strong><div><h3>Zukunftssicher</h3><p>Lösungen, die heute überzeugen und für morgen sinnvoll vorbereitet sind.</p></div></article>
            </div>
          </div>
        </section>

        <section className="section process" id="ablauf">
          <div className="section-heading compact-heading">
            <div><p className="chapter">04 — Ablauf</p><p className="eyebrow dark"><span /> Klar und nachvollziehbar</p><h2>Einfach zum <em>guten Ergebnis.</em></h2></div>
          </div>
          <div className="process-track">
            {processSteps.map(([number, title, text]) => (
              <article aria-label={`Schritt ${number}: ${title}`} key={number} tabIndex={0}>
                <span>{number}</span><div className="process-dot" aria-hidden="true" /><h3>{title}</h3><p>{text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="faq-section" id="faq">
          <div className="faq-intro-block">
            <p className="chapter">05 — FAQ</p>
            <p className="eyebrow dark"><span /> Kurz erklärt</p>
            <h2>Häufige <em>Fragen.</em></h2>
            <p className="faq-intro">Noch etwas offen? Schreiben Sie uns einfach direkt.</p>
            <a className="text-link dark-link" href="#kontakt">Kontakt aufnehmen <span aria-hidden="true">↗</span></a>
          </div>
          <FaqList />
        </section>

        <section className="contact" id="kontakt">
          <div className="contact-inner">
            <div className="contact-intro">
              <p className="chapter light">06 — Kontakt</p>
              <p className="eyebrow"><span /> Direkt &amp; unkompliziert</p>
              <h2>Was können wir für Sie <em>anschließen?</em></h2>
              <p>Beschreiben Sie kurz Ihr Vorhaben. Wir melden uns persönlich und besprechen den sinnvollsten nächsten Schritt.</p>
              <div className="contact-options">
                <a className="contact-item" href="tel:+4915168488353"><span className="contact-symbol">T</span><span className="contact-copy"><small>Telefon</small><strong>0151 68488353</strong></span><i aria-hidden="true">↗</i></a>
                <a className="contact-item" href="mailto:kontakt@elektronik-meisterbetrieb.de"><span className="contact-symbol">@</span><span className="contact-copy"><small>E-Mail</small><strong>kontakt@elektronik-meisterbetrieb.de</strong></span><i aria-hidden="true">↗</i></a>
                <div className="contact-item contact-hours"><span className="contact-symbol">Ö</span><span className="contact-copy"><small>Öffnungszeiten</small><strong>Mo–Fr · 07:00–18:00 Uhr</strong></span></div>
                <LocationMap />
              </div>
            </div>
            <WhatsAppForm />
          </div>
        </section>
      </main>

      <footer>
        <div className="footer-inner">
          <div className="footer-brand"><a className="brand brand-footer" href="#start"><span className="brand-name">ELEKTRO<span>NIK</span></span><span className="brand-sub">Meisterbetrieb</span></a><p>Moderne Elektrotechnik.<br />Meisterhaft umgesetzt.</p></div>
          <div className="footer-nav">
            <div><strong>Navigation</strong><a href="#leistungen">Leistungen</a><a href="#warum-wir">Über uns</a><a href="#ablauf">Ablauf</a></div>
            <div><strong>Kontakt</strong><a href="tel:+4915168488353">Telefon</a><a href="https://wa.me/4915168488353">WhatsApp</a><a href="mailto:kontakt@elektronik-meisterbetrieb.de">E-Mail</a></div>
            <div><strong>Rechtliches</strong><a href="/impressum/">Impressum</a><a href="/datenschutz/">Datenschutz</a></div>
          </div>
          <div className="footer-bottom"><span>© {new Date().getFullYear()} ElektroNik Meisterbetrieb</span><span>Mit Energie. Mit Verstand.</span></div>
        </div>
      </footer>

      <div className="mobile-actions" aria-label="Schnellkontakt">
        <a className="mobile-action mobile-action-phone" href="tel:+4915168488353" aria-label="ElektroNik anrufen"><svg aria-hidden="true" viewBox="0 0 24 24"><path d="M6.62 10.79a15.46 15.46 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.02-.24 11.36 11.36 0 0 0 3.57.57 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.61 21 3 13.39 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1 11.36 11.36 0 0 0 .57 3.57 1 1 0 0 1-.25 1.02l-2.2 2.2Z" /></svg></a>
        <a className="mobile-action mobile-action-whatsapp" href="https://wa.me/4915168488353" aria-label="ElektroNik über WhatsApp kontaktieren"><Image src="/whatsapp.svg" alt="" height={30} width={30} /></a>
      </div>
    </>
  );
}
