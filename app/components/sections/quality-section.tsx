import { ArrowUpRight } from "lucide-react";
import { qualityPoints } from "../../data/site-content";

export default function QualitySection() {
  return (
    <section className="quality" data-reveal-group id="warum-wir">
      <div className="quality-inner">
        <div className="quality-copy" data-reveal>
          <p className="chapter light">03 / Warum ElektroNIK</p>
          <p className="eyebrow">
            <span /> Qualität mit Haltung
          </p>
          <h2>
            Meisterhaft. <em>Menschlich.</em> Auf den Punkt.
          </h2>
          <p>
            Gute Elektrotechnik beginnt mit Zuhören und endet erst, wenn alles
            zuverlässig funktioniert. Dazwischen liegen klare Beratung, saubere Arbeit
            und Lösungen mit Zukunft.
          </p>
          <p className="quality-quote">Wir hinterlassen Lösungen. Keine Fragen.</p>
          <a className="text-link" href="#kontakt">
            Persönlich kennenlernen
            <span aria-hidden="true">
              <ArrowUpRight focusable="false" size={17} />
            </span>
          </a>
        </div>

        <div className="quality-points" data-reveal-group>
          {qualityPoints.map((point) => (
            <article data-reveal key={point.number}>
              <strong>{point.number}</strong>
              <div>
                <h3>{point.title}</h3>
                <p>{point.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
