import type { Metadata } from "next";
import Link from "next/link";
import { siteContact } from "../data/site-content";

export const metadata: Metadata = {
  title: "Impressum",
  description: "Impressum des Elektro-Meisterbetriebs ElektroNIK in Bochum.",
  alternates: { canonical: "/impressum/" },
};

export default function ImpressumPage() {
  return (
    <main className="legal-page">
      <article className="legal-inner">
        <Link className="legal-back" href="/">← Zurück zur Startseite</Link>
        <p className="chapter">Rechtliches</p>
        <h1>Impressum</h1>
        <p className="legal-updated">Stand: 19. August 2026</p>

        <p className="legal-notice">
          Launch-Hinweis: Name, Anschrift und Kontakt sind eingetragen. Vor der Veröffentlichung
          muss der Betreiber noch die genaue Rechtsform, die Handwerksrollendaten, Berufsbezeichnung,
          mögliche Register- und Umsatzsteuerdaten sowie seine Entscheidung zur
          Verbraucherstreitbeilegung bestätigen. Bis dahin ist das Impressum nicht abschließend
          freigegeben.
        </p>

        <section>
          <h2>Angaben gemäß § 5 DDG</h2>
          <p>
            {siteContact.businessName}<br />
            Inhaber: {siteContact.ownerName}<br />
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
          <h2>Rechtsform und Vertretung</h2>
          <p>
            Als Inhaber ist {siteContact.ownerName} angegeben. Ob das Unternehmen als nicht im
            Handelsregister eingetragenes Einzelunternehmen oder in einer anderen Rechtsform geführt
            wird, muss vor Veröffentlichung anhand der Gewerbe- und Registerunterlagen bestätigt werden.
          </p>
        </section>

        <section>
          <h2>Handwerksrechtliche Angaben</h2>
          <dl className="legal-definition-list">
            <div>
              <dt>Zuständige Handwerkskammer</dt>
              <dd>Betreiberangabe erforderlich</dd>
            </div>
            <div>
              <dt>Eintragung in die Handwerksrolle</dt>
              <dd>Nummer und eingetragenes Gewerk erforderlich</dd>
            </div>
            <div>
              <dt>Gesetzliche Berufsbezeichnung</dt>
              <dd>Exakte Bezeichnung laut Meisterbrief erforderlich</dd>
            </div>
            <div>
              <dt>Staat der Verleihung</dt>
              <dd>Betreiberangabe erforderlich</dd>
            </div>
            <div>
              <dt>Berufsrechtliche Regelungen</dt>
              <dd>Handwerksordnung und gegebenenfalls weitere Regelungen nach Betreiberprüfung</dd>
            </div>
          </dl>
          <p>
            Die Website verwendet den Begriff „Meisterbetrieb“. Der zugrunde liegende Meisterbrief
            und die Eintragung in die Handwerksrolle müssen vor dem Launch als Nachweis vorliegen.
          </p>
        </section>

        <section>
          <h2>Registerangaben</h2>
          <p>
            Registergericht und Registernummer sind nur anzugeben, wenn eine entsprechende Eintragung
            besteht. Der aktuelle Registerstatus ist noch nicht bestätigt. Eine Angabe wird deshalb
            nicht geraten.
          </p>
        </section>

        <section>
          <h2>Umsatzsteuer und Wirtschafts-Identifikationsnummer</h2>
          <p>
            Eine Umsatzsteuer-Identifikationsnummer nach § 27a UStG oder eine
            Wirtschafts-Identifikationsnummer nach § 139c AO ist anzugeben, wenn sie erteilt wurde.
            Der Status ist noch nicht bestätigt. Die persönliche Steuernummer gehört nicht in das
            Impressum und wird hier nicht veröffentlicht.
          </p>
        </section>

        <section>
          <h2>Verantwortlich für journalistisch-redaktionelle Inhalte</h2>
          <p>
            Soweit auf dieser Website künftig journalistisch-redaktionelle Inhalte im Sinne von § 18
            Abs. 2 MStV angeboten werden, muss eine in Deutschland wohnhafte verantwortliche Person mit
            vollständiger Anschrift benannt werden. Die derzeitige Unternehmensdarstellung enthält nach
            dem technischen Inhaltsaudit keinen gesonderten redaktionellen News- oder Pressebereich.
          </p>
        </section>

        <section>
          <h2>Verbraucherstreitbeilegung</h2>
          <p>
            Der Betreiber muss vor Veröffentlichung bestätigen, ob er bereit oder verpflichtet ist, an
            einem Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen. Die
            Informationspflicht nach § 36 VSBG hängt unter anderem von der Beschäftigtenzahl am
            31. Dezember des Vorjahres und von einer möglichen Teilnahmeverpflichtung ab. Eine Erklärung
            wird nicht ohne seine geschäftliche Entscheidung vorweggenommen.
          </p>
          <p>
            Die frühere Plattform der Europäischen Union zur Online-Streitbeilegung wird nicht verlinkt,
            weil sie eingestellt wurde.
          </p>
        </section>

        <section>
          <h2>Hinweis zu externen Links</h2>
          <p>
            Externe Links werden bei Veröffentlichung sorgfältig ausgewählt. Für Inhalte externer
            Anbieter ist der jeweilige Anbieter verantwortlich. Gesetzliche Haftungsregelungen bleiben
            unberührt.
          </p>
        </section>

        <section>
          <h2>Urheberrecht</h2>
          <p>
            Inhalte, Gestaltung, Texte, Grafiken und Bilder dieser Website dürfen nur im Rahmen der
            gesetzlichen Bestimmungen genutzt werden. Rechte Dritter bleiben unberührt. Für alle künftig
            eingesetzten Personen- und Mitarbeiterfotos müssen Nutzungsrechte und Einwilligungen vor der
            Veröffentlichung dokumentiert sein.
          </p>
        </section>
      </article>
    </main>
  );
}
