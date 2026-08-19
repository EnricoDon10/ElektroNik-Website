import { ArrowUpRight } from "lucide-react";
import FaqList from "../faq-list";

export default function FaqSection() {
  return (
    <section className="faq-section" data-reveal-group id="faq">
      <div className="faq-intro-block" data-reveal>
        <p className="chapter">05 / FAQ</p>
        <p className="eyebrow dark">
          <span /> Kurz erklärt
        </p>
        <h2>
          Häufige <em>Fragen.</em>
        </h2>
        <p className="faq-intro">Noch etwas offen? Schreiben Sie uns einfach direkt.</p>
        <a className="text-link dark-link" href="#kontakt">
          Kontakt aufnehmen
          <span aria-hidden="true">
            <ArrowUpRight focusable="false" size={17} />
          </span>
        </a>
      </div>
      <div data-reveal>
        <FaqList />
      </div>
    </section>
  );
}
