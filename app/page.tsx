"use client";

import Image from "next/image";
import { FormEvent, useState } from "react";

const services = [
  {
    number: "01",
    title: "Elektroinstallation",
    text: "Sichere, zukunftsfähige Installationen für Neubau, Umbau und Sanierung – sauber geplant und fachgerecht umgesetzt.",
    tags: ["Neubau", "Sanierung", "Unterverteilung"],
  },
  {
    number: "02",
    title: "Netzwerkverkabelung",
    text: "Strukturierte Netzwerkverkabelung für zuverlässige Datenverbindungen – von Netzwerkschränken und Bodentanks bis zu fachgerecht installierten Netzwerkdosen.",
    tags: ["Netzwerkschränke", "Bodentanks", "Netzwerkdosen"],
  },
  {
    number: "03",
    title: "E-Mobilität",
    text: "Wallbox, Lastmanagement und die passende Infrastruktur – vom ersten Check bis zur betriebsbereiten Ladestation.",
    tags: ["Wallbox", "Lastmanagement", "Prüfung"],
  },
  {
    number: "04",
    title: "PV & Energiemanagement",
    text: "Energie sinnvoll erzeugen, speichern und verteilen. Durchdachte Systeme für mehr Unabhängigkeit und Transparenz.",
    tags: ["Photovoltaik", "Speicher", "Monitoring"],
  },
  {
    number: "05",
    title: "Prüfung & Sicherheit",
    text: "Normgerechte Messungen, E-Checks und Prüfprotokolle für private, gewerbliche und vermietete Objekte.",
    tags: ["E-Check", "DGUV V3", "Dokumentation"],
  },
  {
    number: "06",
    title: "Service & Störung",
    text: "Schnelle Hilfe, klare Kommunikation und nachhaltige Fehlerbehebung, wenn elektrische Anlagen nicht funktionieren.",
    tags: ["Fehlersuche", "Reparatur", "Wartung"],
  },
];

const faqs = [
  {
    q: "Wie schnell erhalte ich eine Rückmeldung?",
    a: "Anfragen per WhatsApp oder Telefon beantworten wir in der Regel besonders schnell. Für eine gute Ersteinschätzung helfen uns Fotos und eine kurze Beschreibung des Vorhabens.",
  },
  {
    q: "Übernimmt ElektroNik auch kleinere Aufträge?",
    a: "Ja. Neben kompletten Installationen unterstützen wir auch bei einzelnen Steckdosen, Leuchten, Reparaturen, Prüfungen und der Fehlersuche.",
  },
  {
    q: "Bekomme ich vorab ein transparentes Angebot?",
    a: "Nach einer kurzen Abstimmung und – falls nötig – einem Vor-Ort-Termin erhalten Sie eine nachvollziehbare Leistungsübersicht mit klar beschriebenem Umfang.",
  },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const sendWhatsApp = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const text = encodeURIComponent(
      `Hallo ElektroNik, ich bin ${name || "Interessent/in"}.\nE-Mail: ${email}\n\n${message || "Ich möchte ein Projekt besprechen."}`,
    );
    window.open(`https://wa.me/4915168488353?text=${text}`, "_blank", "noopener,noreferrer");
  };

  const closeMenu = () => setMenuOpen(false);

  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#start" aria-label="ElektroNik Startseite">
          <span className="brand-name">ELEKTRO<span>NIK</span></span>
          <span className="brand-sub">Meisterbetrieb</span>
        </a>
        <nav className={menuOpen ? "nav nav-open" : "nav"} aria-label="Hauptnavigation">
          <a href="#leistungen" onClick={closeMenu}>Leistungen</a>
          <a href="#warum-wir" onClick={closeMenu}>Warum ElektroNik</a>
          <a href="#ablauf" onClick={closeMenu}>Ablauf</a>
          <a href="#kontakt" onClick={closeMenu}>Kontakt</a>
        </nav>
        <a className="header-cta" href="#whatsapp-anfrage" aria-label="Zum WhatsApp-Anfrageformular">
          <span className="whatsapp-mark" aria-hidden="true">
            <Image src="/whatsapp.svg" alt="" height={22} width={22} />
          </span>
          <strong className="header-cta-label">Projekt anfragen</strong>
          <span className="header-cta-arrow" aria-hidden="true">↓</span>
        </a>
        <button
          className="menu-button"
          type="button"
          aria-label={menuOpen ? "Menü schließen" : "Menü öffnen"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((value) => !value)}
        >
          <span />
          <span />
        </button>
      </header>

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
            <a className="button button-ghost" href="#leistungen">
              Leistungen ansehen <span aria-hidden="true">↓</span>
            </a>
          </div>
        </div>

        <div className="hero-visual" aria-label="ElektroNik Kompetenzübersicht">
          <div className="visual-orbit orbit-one" />
          <div className="visual-orbit orbit-two" />
          <div className="visual-core">
            <span className="core-bolt" aria-hidden="true" />
            <small>ENERGIE</small>
            <strong>mit System</strong>
          </div>
          <a className="visual-chip chip-one" href="#leistungen"><span>01</span> ELEKTROINSTALLATION</a>
          <a className="visual-chip chip-two" href="#leistungen"><span>02</span> NETZWERKVERKABELUNG</a>
          <a className="visual-chip chip-three" href="#leistungen"><span>03</span> E-MOBILITÄT</a>
          <a className="visual-chip chip-four" href="#leistungen"><span>04</span> PV &amp; ENERGIE</a>
          <a className="visual-chip chip-five" href="#leistungen"><span>05</span> PRÜFUNG &amp; SICHERHEIT</a>
          <a className="visual-chip chip-six" href="#leistungen"><span>06</span> SERVICE &amp; STÖRUNG</a>
        </div>

        <a className="hero-phone" href="tel:+4915168488353">
          <span className="phone-icon" aria-hidden="true">⌕</span>
          <span><small>Direkt anrufen</small><strong>0151 68488353</strong></span>
        </a>
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
            <article className="service-card" key={service.number}>
              <div className="service-top">
                <span>{service.number}</span>
                <span className="service-arrow" aria-hidden="true">↗</span>
              </div>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
              <div className="tag-list">
                {service.tags.map((tag) => <span key={tag}>{tag}</span>)}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="quality" id="warum-wir">
        <div className="quality-copy">
          <p className="eyebrow"><span /> Darum ElektroNik</p>
          <h2>Meisterhaft.<br /><em>Menschlich.</em><br />Auf den Punkt.</h2>
          <p className="quality-text">
            ElektroNik ist aus der Verbindung von Elektrohandwerk und dem Namen
            Nikolay Nik entstanden. Dahinter steht ein klarer Anspruch: Technik
            verständlich machen, Verantwortung übernehmen und Ergebnisse liefern,
            auf die man sich verlassen kann.
          </p>
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
          <p>Klare Schritte, feste Absprachen und ein Ansprechpartner vom ersten Kontakt bis zur fertigen Lösung.</p>
        </div>
        <div className="process-track">
          {[
            ["01", "Anfrage", "Kurz anrufen, schreiben oder Bilder per WhatsApp senden."],
            ["02", "Beratung", "Wir klären Bedarf, Machbarkeit und die sinnvollste Lösung."],
            ["03", "Angebot", "Sie erhalten einen transparenten und verständlichen Umfang."],
            ["04", "Umsetzung", "Termintreu, fachgerecht, sauber – inklusive Abschlusscheck."],
          ].map(([number, title, text]) => (
            <article key={number}>
              <span>{number}</span>
              <div className="process-dot" />
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
          <p className="faq-intro">Noch etwas offen? Schreiben Sie uns einfach direkt – ohne Warteschleife.</p>
        </div>
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <article className={openFaq === index ? "faq-item faq-open" : "faq-item"} key={faq.q}>
              <button type="button" onClick={() => setOpenFaq(openFaq === index ? null : index)} aria-expanded={openFaq === index}>
                <span>{faq.q}</span><i>{openFaq === index ? "−" : "+"}</i>
              </button>
              <div className="faq-answer"><p>{faq.a}</p></div>
            </article>
          ))}
        </div>
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
            <a
              aria-label="ElektroNik in Google Maps öffnen"
              className="contact-item"
              href="https://www.google.com/maps/search/?api=1&query=Krieler+Str.+115%2C+50935+K%C3%B6ln-Lindenthal"
              rel="noopener noreferrer"
              target="_blank"
            >
              <span className="contact-symbol">A</span>
              <span className="contact-copy">
                <small>Adresse</small>
                <strong className="contact-address">
                  <span>Krieler Str. 115</span>
                  <span>50935</span>
                  <span>Köln-Lindenthal</span>
                </strong>
              </span>
              <i>↗</i>
            </a>
            <div className="contact-item contact-item-placeholder">
              <span className="contact-symbol">Ö</span>
              <span className="contact-copy"><small>Öffnungszeiten</small><strong>Öffnungszeiten ergänzen</strong></span>
            </div>
          </div>
        </div>
        <form className="contact-form" id="whatsapp-anfrage" onSubmit={sendWhatsApp}>
          <div className="form-head">
            <span>WhatsApp-Direktanfrage</span>
            <span className="online"><i /> Persönlich erreichbar</span>
          </div>
          <label>
            Ihr Name
            <input autoComplete="name" value={name} onChange={(event) => setName(event.target.value)} placeholder="Vor- und Nachname" />
          </label>
          <label>
            Ihre E-Mail-Adresse
            <input
              autoComplete="email"
              inputMode="email"
              onChange={(event) => setEmail(event.target.value)}
              placeholder="name@beispiel.de"
              required
              type="email"
              value={email}
            />
          </label>
          <label>
            Worum geht es?
            <textarea value={message} onChange={(event) => setMessage(event.target.value)} placeholder="z. B. Wallbox installieren, Elektroplanung für Neubau ..." rows={4} />
          </label>
          <button className="button button-primary form-button" type="submit">
            Per WhatsApp senden <span aria-hidden="true">↗</span>
          </button>
          <p className="form-note">Mit Klick öffnet sich WhatsApp mit Ihrer vorbereiteten Nachricht.</p>
        </form>
      </section>

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
          <div><strong>Rechtliches</strong><a href="#kontakt">Impressum</a><a href="#kontakt">Datenschutz</a></div>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} ElektroNik Meisterbetrieb</span>
          <span>Mit Energie. Mit Verstand.</span>
        </div>
      </footer>

      <div className="mobile-actions">
        <a href="tel:+4915168488353">Anrufen</a>
        <a href="https://wa.me/4915168488353">WhatsApp</a>
      </div>
    </main>
  );
}
