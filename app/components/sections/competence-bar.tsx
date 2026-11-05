import { Fragment } from "react";
import { competenceSignals } from "../../data/site-content";

export default function CompetenceBar() {
  return (
    <aside className="trust-bar competence-bar" aria-label="ElektroNIK Qualitätsmerkmale">
      <div>
        {competenceSignals.map((signal, index) => (
          <Fragment key={signal}>
            <span>{signal}</span>
            {index < competenceSignals.length - 1 ? <i aria-hidden="true" /> : null}
          </Fragment>
        ))}
      </div>
    </aside>
  );
}
