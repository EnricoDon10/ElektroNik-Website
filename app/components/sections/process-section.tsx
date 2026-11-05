import { processSteps } from "../../data/site-content";

export default function ProcessSection() {
  return (
    <section className="section process" data-reveal-group id="ablauf">
      <div className="section-heading compact-heading" data-reveal>
        <div>
          <p className="chapter">04 / Ablauf</p>
          <p className="eyebrow dark">
            <span /> Klar und nachvollziehbar
          </p>
          <h2>
            Einfach zum <em>guten Ergebnis.</em>
          </h2>
        </div>
      </div>

      <div
        aria-label="Projektablauf in vier Schritten"
        className="process-track"
        data-process-track
        data-reveal-group
        role="list"
      >
        <span className="process-progress" data-process-progress aria-hidden="true" />
        {processSteps.map((step) => (
          <article
            aria-label={`Schritt ${step.number}: ${step.title}`}
            data-process-step
            data-reveal
            key={step.number}
            role="listitem"
          >
            <span>{step.number}</span>
            <div className="process-dot" aria-hidden="true" />
            <h3>{step.title}</h3>
            <p>{step.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
