import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Impressum | ElektroNik",
  description: "Impressum des Elektro-Meisterbetriebs ElektroNik in Köln.",
};

export default function ImpressumPage() {
  return (
    <main className="legal-page">
      <div className="legal-inner">
        <Link className="legal-back" href="/">← Zurück zur Startseite</Link>
        <p className="chapter">Rechtliches</p>
        <h1>Impressum</h1>
        <p className="legal-notice">
          Hinweis für den Betreiber: Diese Seite ist strukturell vorbereitet, aber noch nicht
          rechtssicher vollständig. Vor der Veröffentlichung müssen insbesondere vollständiger
          Inhabername, Rechtsform, zuständige Handwerkskammer, Berufsbezeichnung und weitere
          gesetzlich erforderliche Angaben geprüft und ergänzt werden.
        </p>
        <h2>Kontakt</h2>
        <p>ElektroNik<br />Krieler Str. 115<br />50935 Köln</p>
        <p>Telefon: 0151 68488353<br />E-Mail: kontakt@elektronik-meisterbetrieb.de</p>
        <h2>Noch zu ergänzende Pflichtangaben</h2>
        <ul>
          <li>Vollständiger Name des verantwortlichen Inhabers</li>
          <li>Rechtsform und gegebenenfalls Registerangaben</li>
          <li>Zuständige Handwerkskammer und Berufsbezeichnung</li>
          <li>Umsatzsteuer-ID, sofern vorhanden und erforderlich</li>
          <li>Verantwortliche Person für redaktionelle Inhalte, sofern erforderlich</li>
        </ul>
      </div>
    </main>
  );
}
