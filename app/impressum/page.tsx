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
      <div className="legal-inner">
        <Link className="legal-back" href="/">← Zurück zur Startseite</Link>
        <p className="chapter">Rechtliches</p>
        <h1>Impressum</h1>
        <p className="legal-notice">
          Hinweis für den Betreiber: Diese Seite ist strukturell vorbereitet, aber noch nicht
          rechtssicher vollständig. Vor der Veröffentlichung müssen insbesondere Rechtsform,
          zuständige Handwerkskammer, Berufsbezeichnung und weitere
          gesetzlich erforderliche Angaben geprüft und ergänzt werden.
        </p>
        <h2>Anbieter und Kontakt</h2>
        <p>{siteContact.businessName}<br />Inhaber: {siteContact.ownerName}<br />{siteContact.street}<br />{siteContact.postalCode} {siteContact.city}</p>
        <p>Telefon: {siteContact.phoneDisplay}<br />E-Mail: <a href={siteContact.emailHref}>{siteContact.email}</a></p>
        <h2>Noch zu ergänzende Pflichtangaben</h2>
        <ul>
          <li>Rechtsform und gegebenenfalls Registerangaben</li>
          <li>Zuständige Handwerkskammer und Berufsbezeichnung</li>
          <li>Umsatzsteuer-ID, sofern vorhanden und erforderlich</li>
          <li>Verantwortliche Person für redaktionelle Inhalte, sofern erforderlich</li>
        </ul>
      </div>
    </main>
  );
}
