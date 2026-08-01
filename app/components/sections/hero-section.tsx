import { ArrowDown, Zap } from "lucide-react";
import { services, trustSignals } from "../../data/site-content";
import ServiceIcon from "./service-icon";

const chipClasses = [
  "chip-one",
  "chip-two",
  "chip-three",
  "chip-four",
  "chip-five",
  "chip-six",
] as const;

function EnergyVisual() {
  return (
    <div
      aria-label="ElektroNik Kompetenzübersicht"
      className="hero-visual energy-visual"
      data-hero-visual
      role="group"
    >
      <svg
        aria-hidden="true"
        className="energy-diagram"
        focusable="false"
        viewBox="0 0 640 640"
      >
        <circle className="energy-ring energy-ring-outer" cx="320" cy="320" r="250" />
        <circle className="energy-ring energy-ring-inner" cx="320" cy="320" r="172" />
        <path
          className="energy-path"
          d="M320 70 L320 148 M536 195 L468 234 M536 445 L468 406 M320 570 L320 492 M104 445 L172 406 M104 195 L172 234"
          data-energy-path
        />
        <g className="energy-nodes">
          <circle cx="320" cy="70" r="5" />
          <circle cx="536" cy="195" r="5" />
          <circle cx="536" cy="445" r="5" />
          <circle cx="320" cy="570" r="5" />
          <circle cx="104" cy="445" r="5" />
          <circle cx="104" cy="195" r="5" />
        </g>
        <circle
          className="energy-pulse"
          cx="320"
          cy="70"
          data-energy-pulse
          r="7"
        />
      </svg>

      <div className="visual-orbit orbit-one" aria-hidden="true" />
      <div className="visual-orbit orbit-two" aria-hidden="true" />
      <div className="visual-core" aria-hidden="true">
        <span className="core-bolt">
          <Zap aria-hidden="true" focusable="false" strokeWidth={1.7} />
        </span>
        <small>Energie</small>
        <strong>mit System</strong>
      </div>

      {services.map((service, index) => (
        <a
          aria-label={`${service.title}: zum Leistungsbereich`}
          className={`visual-chip ${chipClasses[index]}`}
          data-hero-chip
          href={`#${service.id}`}
          key={service.id}
        >
          <span className="visual-chip-icon">
            <ServiceIcon name={service.icon} size={18} />
          </span>
          <span className="visual-chip-number">{service.number}</span>
          <span className="visual-chip-label">{service.shortTitle}</span>
        </a>
      ))}
    </div>
  );
}

export default function HeroSection() {
  return (
    <section className="hero" id="start">
      <div className="hero-grid" aria-hidden="true" />
      <div className="hero-glow" aria-hidden="true" />

      <div className="hero-inner">
        <div className="hero-content" data-hero-copy>
          <p className="eyebrow">
            <span /> Elektro-Meisterbetrieb · Köln &amp; Umgebung
          </p>
          <h1>
            Elektromeister <span>für Haus und Industrie</span>
          </h1>
          <p className="hero-lead">
            Moderne Elektrotechnik mit Handschlagqualität – fachgerecht geplant,
            sauber umgesetzt und persönlich begleitet.
          </p>
          <div className="hero-actions">
            <a className="button button-ghost" href="#leistungen">
              Leistungen ansehen
              <ArrowDown aria-hidden="true" focusable="false" size={18} />
            </a>
          </div>
          <ul className="hero-trust" aria-label="ElektroNik Vorteile">
            {trustSignals.map((signal) => (
              <li key={signal}>{signal}</li>
            ))}
          </ul>
        </div>

        <EnergyVisual />
      </div>

      <a className="scroll-cue" href="#leistungen">
        <span>Leistungen entdecken</span>
        <i aria-hidden="true">
          <ArrowDown focusable="false" size={17} />
        </i>
      </a>
    </section>
  );
}
