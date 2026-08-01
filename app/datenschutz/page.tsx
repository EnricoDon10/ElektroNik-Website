import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Datenschutz",
  description: "Hinweise zum Datenschutz auf der Website von ElektroNik.",
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
        <p>Die vollständige verantwortliche Person beziehungsweise Unternehmensbezeichnung muss noch ergänzt werden.</p>
        <p>ElektroNik<br />Krieler Str. 115<br />50935 Köln<br />E-Mail: kontakt@elektronik-meisterbetrieb.de</p>
        <h2>Auf dieser Website eingesetzte Dienste</h2>
        <ul>
          <li>Webhosting bei IONOS</li>
          <li>Eingebettete Karte von Google Maps</li>
          <li>Verlinkung und vorbereitete Nachrichtenübergabe an WhatsApp</li>
          <li>Telefon- und E-Mail-Verlinkungen</li>
        </ul>
        <h2>Noch zu ergänzen</h2>
        <p>Rechtsgrundlagen, Speicherdauer, Betroffenenrechte, Hosting-Logfiles, Empfänger und mögliche Drittlandübermittlungen müssen fachlich geprüft und ergänzt werden.</p>
      </div>
    </main>
  );
}
