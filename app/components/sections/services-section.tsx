import { ArrowUpRight } from "lucide-react";
import { services } from "../../data/site-content";
import ServiceIcon from "./service-icon";

export default function ServicesSection() {
  return (
    <section className="section services" data-reveal-group id="leistungen">
      <div className="section-heading" data-reveal>
        <div>
          <p className="chapter">02 / Leistungen</p>
          <p className="eyebrow dark">
            <span /> Was wir für Sie tun
          </p>
          <h2>
            Leistung, die <em>weiterdenkt.</em>
          </h2>
        </div>
        <p>
          Von der Idee bis zur Abnahme: fundiertes Handwerk, moderne Technik und ein
          klarer Blick für die passende Lösung.
        </p>
      </div>

      <div className="service-grid" data-reveal-group>
        {services.map((service) => (
          <article
            className="service-card"
            data-reveal
            data-service-card
            id={service.id}
            key={service.number}
          >
            <div className="service-top">
              <span className="service-number">{service.number}</span>
              <span className="service-top-icons">
                <span className="service-icon">
                  <ServiceIcon name={service.icon} />
                </span>
                <span className="service-arrow" aria-hidden="true">
                  <ArrowUpRight focusable="false" size={16} />
                </span>
              </span>
            </div>
            <h3>{service.title}</h3>
            <p>{service.text}</p>
            <div className="tag-list">
              {service.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
            <a className="service-cta" href="#whatsapp-anfrage">
              Projekt besprechen
              <span aria-hidden="true">
                <ArrowUpRight focusable="false" size={17} />
              </span>
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
