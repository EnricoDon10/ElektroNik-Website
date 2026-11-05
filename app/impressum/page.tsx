import type { Metadata } from "next";
import Link from "next/link";
import { siteContact } from "../data/site-content";

export const metadata: Metadata = {
  title: "Impressum",
  description: "Impressum von ElektroNIK in Wattenscheid.",
  alternates: { canonical: "/impressum/" },
};

export default function ImpressumPage() {
  return (
    <main className="legal-page">
      <article className="legal-inner">
        <Link className="legal-back" href="/">← Zurück zur Startseite</Link>
        <p className="chapter">Rechtliches</p>
        <h1>Impressum</h1>
        <p className="legal-updated">Stand: 2. November 2026</p>

        <section>
          <h2>Angaben gemäß § 5 DDG</h2>
          <p>
            {siteContact.businessName} (Markenname)<br />
            Inhaber: {siteContact.ownerName}, {siteContact.legalForm}<br />
            {siteContact.street}<br />
            {siteContact.postalCode} {siteContact.city}<br />
            Deutschland
          </p>
        </section>

        <section>
          <h2>Kontakt</h2>
          <p>
            Telefon: <a href={siteContact.phoneHref}>{siteContact.phoneDisplay}</a><br />
            E-Mail: <a href={siteContact.emailHref}>{siteContact.email}</a>
          </p>
        </section>

        <section>
          <h2>Berufsrechtliche Angaben</h2>
          <p>
            Zuständige Handwerkskammer: {siteContact.chamber}<br />
            Reinoldistraße 7-9<br />
            44135 Dortmund
          </p>
          <p>
            Gesetzliche Berufsbezeichnung: {siteContact.professionalTitle}<br />
            Staat der Verleihung: Deutschland
          </p>
          <p>
            Berufsrechtliche Regelung: Handwerksordnung (HwO). Sie ist unter{" "}
            <a href="https://www.gesetze-im-internet.de/hwo/" rel="noreferrer" target="_blank">
              Gesetze im Internet
            </a>{" "}
            einsehbar.
          </p>
        </section>

        <section>
          <h2>Website</h2>
          <p>
            Konzeption, Inhalte, Gestaltung und technische Betreuung: {siteContact.websiteAdministrator}.
          </p>
        </section>

        <section>
          <h2>Verbraucherstreitbeilegung</h2>
          <p>
            ElektroNIK ist nicht bereit und nicht verpflichtet, an Streitbeilegungsverfahren vor einer
            Verbraucherschlichtungsstelle teilzunehmen.
          </p>
        </section>
      </article>
    </main>
  );
}
