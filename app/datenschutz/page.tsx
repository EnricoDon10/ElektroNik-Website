import type { Metadata } from "next";
import Link from "next/link";
import { siteContact } from "../data/site-content";

export const metadata: Metadata = {
  title: "Datenschutz",
  description: "Hinweise zum Datenschutz auf der Website von ElektroNIK.",
  alternates: { canonical: "/datenschutz/" },
};

export default function DatenschutzPage() {
  return (
    <main className="legal-page">
      <div className="legal-inner">
        <Link className="legal-back" href="/">← Zurück zur Startseite</Link>
        <p className="chapter">Rechtliches</p>
        <h1>Datenschutz</h1>
        <p className="legal-notice">
          Hinweis für den Betreiber: Diese Seite ist noch keine vollständige Datenschutzerklärung.
          Vor der Veröffentlichung muss sie anhand des tatsächlich eingesetzten Hostings, der
          Google-Maps-Einbindung, der WhatsApp-Verlinkung und möglicher Server-Logfiles rechtlich
          geprüft und vervollständigt werden.
        </p>
        <h2>Verantwortliche Stelle</h2>
        <p>{siteContact.ownerName}<br />{siteContact.businessName}<br />{siteContact.street}<br />{siteContact.postalCode} {siteContact.city}<br />E-Mail: <a href={siteContact.emailHref}>{siteContact.email}</a></p>
        <h2>Auf dieser Website eingesetzte Dienste</h2>
        <ul>
          <li>Webhosting bei IONOS</li>
          <li>Google Maps als optionales externes Medium nach Einwilligung</li>
          <li>Verlinkung und vorbereitete Nachrichtenübergabe an WhatsApp</li>
          <li>Telefon- und E-Mail-Verlinkungen</li>
        </ul>
        <h2>Speicherung der Datenschutzauswahl</h2>
        <p>
          Die Website speichert Ihre Auswahl lokal im Browser. Gespeichert werden die Version
          der Einwilligung, der notwendige Status, die Auswahl für externe Medien und der
          Zeitpunkt der letzten Änderung. Über „Datenschutzeinstellungen“ im Footer können Sie
          Ihre Entscheidung jederzeit ändern oder widerrufen.
        </p>
        <p>
          Die Google-Maps-Karte wird erst nach Zustimmung zu externen Medien eingebettet. Ohne
          Zustimmung bleiben Adresse und der freiwillig nutzbare Link zur Routenplanung sichtbar,
          das Karten-Iframe wird jedoch nicht geladen.
        </p>
        <h2>Noch zu ergänzen</h2>
        <p>Rechtsgrundlagen, Speicherdauer, Betroffenenrechte, Hosting-Logfiles, Empfänger und mögliche Drittlandübermittlungen müssen fachlich geprüft und ergänzt werden.</p>
      </div>
    </main>
  );
}
