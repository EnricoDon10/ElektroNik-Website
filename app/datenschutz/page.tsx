import type { Metadata } from "next";
import Link from "next/link";
import { siteContact } from "../data/site-content";

export const metadata: Metadata = {
  title: "Datenschutzerklärung",
  description: "Datenschutzerklärung von ElektroNIK in Bochum.",
  alternates: { canonical: "/datenschutz/" },
};

const ionosHostingUrl =
  "https://www.ionos.de/hilfe/datenschutz/datenverarbeitung-durch-ihr-ionos-produktes/datenverarbeitung-durch-webhosting-produkte/";
const ionosAvvUrl =
  "https://www.ionos.de/hilfe/datenschutz/allgemeine-informationen-zur-datenschutz-grundverordnung-dsgvo/vereinbarung-zur-auftragsverarbeitung-avv-mit-ionos-abschliessen/";

export default function DatenschutzPage() {
  return (
    <main className="legal-page">
      <article className="legal-inner">
        <Link className="legal-back" href="/">← Zurück zur Startseite</Link>
        <p className="chapter">Rechtliches</p>
        <h1>Datenschutzerklärung</h1>
        <p className="legal-updated">Stand: 19. August 2026</p>

        <p className="legal-notice">
          Diese Erklärung bildet den aktuell geprüften technischen Stand der Website ab. Vor der
          Veröffentlichung muss der Betreiber noch den konkreten IONOS-Vertrag, die betriebliche
          Löschpraxis für Kontaktanfragen und eine mögliche Pflicht zur Benennung eines
          Datenschutzbeauftragten bestätigen. Die offenen Punkte sind in der Launch-Dokumentation
          einzeln aufgeführt.
        </p>

        <section>
          <h2>1. Verantwortlicher</h2>
          <p>
            {siteContact.businessName}<br />
            Inhaber: {siteContact.ownerName}<br />
            {siteContact.street}<br />
            {siteContact.postalCode} {siteContact.city}<br />
            Deutschland
          </p>
          <p>
            Telefon: <a href={siteContact.phoneHref}>{siteContact.phoneDisplay}</a><br />
            E-Mail: <a href={siteContact.emailHref}>{siteContact.email}</a>
          </p>
          <p>
            Ein Datenschutzbeauftragter ist auf dieser Website derzeit nicht benannt. Anfragen zum
            Datenschutz können an die vorstehenden Kontaktdaten gerichtet werden. Ob eine gesetzliche
            Benennungspflicht besteht, muss der Betreiber anhand seiner tatsächlichen Organisation
            abschließend prüfen.
          </p>
        </section>

        <section>
          <h2>2. Grundsätze und Rechtsgrundlagen</h2>
          <p>
            Personenbezogene Daten werden nur verarbeitet, soweit dies für den sicheren Betrieb der
            Website, die Bearbeitung einer Anfrage, die Durchführung vorvertraglicher Maßnahmen, die
            Erfüllung eines Vertrags, gesetzliche Pflichten oder einen ausdrücklich freigegebenen
            externen Inhalt erforderlich ist.
          </p>
          <ul>
            <li>Art. 6 Abs. 1 lit. a DSGVO für freiwillig erteilte Einwilligungen</li>
            <li>Art. 6 Abs. 1 lit. b DSGVO für Anfragen und vorvertragliche oder vertragliche Maßnahmen</li>
            <li>Art. 6 Abs. 1 lit. c DSGVO für gesetzliche Aufbewahrungs- und Nachweispflichten</li>
            <li>Art. 6 Abs. 1 lit. f DSGVO für den sicheren, stabilen und wirtschaftlichen Betrieb der Website</li>
            <li>§ 25 TDDDG für das Speichern von Informationen in Ihrem Browser und den Zugriff darauf</li>
          </ul>
          <p>
            Soweit eine Verarbeitung auf berechtigten Interessen beruht, bestehen diese insbesondere
            in der sicheren Bereitstellung des Onlineangebots, der Abwehr von Missbrauch, der
            Fehleranalyse und der sachgerechten Bearbeitung geschäftlicher Kommunikation.
          </p>
        </section>

        <section>
          <h2>3. Hosting bei IONOS und Serverprotokolle</h2>
          <p>
            Die Website ist als statischer Export für das Webhosting der IONOS SE, Elgendorfer Straße
            57, 56410 Montabaur, vorgesehen. Beim Abruf einer Seite verarbeitet der Webserver technisch
            erforderliche Zugriffsdaten. Nach den aktuellen Produktinformationen von IONOS gehören
            dazu die aufgerufene Seite oder Datei, der Zeitpunkt des Zugriffs, der Referrer, Browsertyp
            und Browserversion, Betriebssystem, Gerätetyp und eine direkt bei der Erhebung anonymisierte
            IP-Adresse.
          </p>
          <p>
            Zweck ist die sichere und stabile Bereitstellung der Website. Rechtsgrundlage ist Art. 6
            Abs. 1 lit. f DSGVO. Nach der aktuellen IONOS-Produktinformation werden Besucherdaten acht
            Wochen gespeichert. IONOS erklärt für dieses Webhosting-Produkt, dass keine Weitergabe an
            Dritte und kein Transfer in Staaten außerhalb der Europäischen Union stattfindet. Zusätzlich
            erfolgt innerhalb des Hosting-Produkts eine Verarbeitung durch IONOS WebAnalytics. Im
            Quellcode dieser Website ist kein eigener Analytics- oder Trackingcode eingebunden.
          </p>
          <p>
            IONOS verarbeitet Hostingdaten im Auftrag des Verantwortlichen. Dies wird durch eine
            Vereinbarung zur Auftragsverarbeitung nach Art. 28 DSGVO geregelt. Laut IONOS ist diese
            Vereinbarung seit dem 19. Juli 2022 Bestandteil der AGB für neue Verträge. Bei älteren
            Verträgen ist der Status im IONOS-Konto zu prüfen und die Vereinbarung erforderlichenfalls
            dort abzuschließen.
          </p>
          <p className="legal-source-links">
            <a href={ionosHostingUrl} rel="noreferrer" target="_blank">IONOS: Datenverarbeitung im Webhosting</a>
            <a href={ionosAvvUrl} rel="noreferrer" target="_blank">IONOS: Vereinbarung zur Auftragsverarbeitung</a>
          </p>
        </section>

        <section>
          <h2>4. Consent-Speicherung im Browser</h2>
          <p>
            Die Website speichert Ihre Datenschutzauswahl im Local Storage Ihres Browsers unter dem
            Schlüssel <code>elektro-nik-consent</code>. Gespeichert werden die Version der
            Consent-Konfiguration, der notwendige Status, Ihre Auswahl für externe Medien und der
            Zeitpunkt der letzten Änderung. Die Speicherung dient ausschließlich dazu, Ihre Auswahl
            umzusetzen und nicht bei jedem Seitenaufruf erneut abzufragen.
          </p>
          <p>
            Die Entscheidung wird spätestens nach sechs Monaten erneut abgefragt. Eine beschädigte,
            veraltete oder zeitlich nicht plausible Speicherung wird verworfen. Ist Local Storage nicht
            verfügbar, bleibt die Auswahl nur für die laufende Sitzung wirksam. Rechtsgrundlagen sind
            § 25 Abs. 2 Nr. 2 TDDDG und Art. 6 Abs. 1 lit. f DSGVO. Die Speicherung ist für den von Ihnen
            gewünschten Consent-Dienst erforderlich.
          </p>
          <p>
            Über den festen Cookie-Button unten links und über den Link
            „Datenschutzeinstellungen“ im Footer können Sie Ihre Auswahl jederzeit ändern. Beim Widerruf
            wird eine bereits geladene Google-Karte sofort aus der Seite entfernt und bei weiteren
            Seitenaufrufen nicht mehr geladen.
          </p>
        </section>

        <section>
          <h2>5. Google Maps</h2>
          <p>
            Im Kontaktbereich wird zunächst ein lokaler Platzhalter angezeigt. Erst wenn Sie die
            Kategorie „Externe Medien“ freigeben oder gezielt auf „Karte laden“ klicken, wird ein
            Google-Maps-iframe erzeugt. Anbieter für Nutzerinnen und Nutzer im Europäischen
            Wirtschaftsraum ist grundsätzlich Google Ireland Limited, Gordon House, Barrow Street,
            Dublin 4, Irland. Google LLC und weitere Konzerngesellschaften können als Empfänger
            beteiligt sein.
          </p>
          <p>
            Beim Laden können insbesondere Ihre IP-Adresse, Browser- und Gerätedaten, der Zeitpunkt,
            die aufgerufene Website sowie Interaktionen mit der Karte an Google übermittelt werden.
            Google kann im eingebetteten Inhalt eigene Cookies oder vergleichbare Speichertechnologien
            einsetzen. Auf Umfang, weitere Zwecke und Speicherdauer der Verarbeitung durch Google hat
            der Verantwortliche keinen vollständigen Einfluss.
          </p>
          <p>
            Rechtsgrundlagen sind Ihre Einwilligung nach Art. 6 Abs. 1 lit. a DSGVO und § 25 Abs. 1
            TDDDG. Die Einwilligung ist freiwillig und jederzeit mit Wirkung für die Zukunft widerrufbar.
            Die Rechtmäßigkeit der bis zum Widerruf erfolgten Verarbeitung bleibt unberührt. Ein Widerruf
            verhindert künftige Verbindungen, kann aber bereits an Google übermittelte Daten nicht
            zurückholen.
          </p>
          <p>
            Eine Verarbeitung in den USA oder anderen Staaten außerhalb des Europäischen
            Wirtschaftsraums ist möglich. Google nennt hierfür insbesondere Angemessenheitsbeschlüsse,
            das EU-US Data Privacy Framework und Standardvertragsklauseln als Übermittlungsgrundlagen.
          </p>
          <p className="legal-source-links">
            <a href="https://policies.google.com/privacy?hl=de" rel="noreferrer" target="_blank">Datenschutzerklärung von Google</a>
            <a href="https://policies.google.com/privacy/frameworks?hl=de" rel="noreferrer" target="_blank">Google: Grundlagen internationaler Datenübermittlungen</a>
          </p>
        </section>

        <section>
          <h2>6. Kontaktaufnahme per WhatsApp</h2>
          <p>
            Das Anfrageformular verarbeitet Ihre Eingaben zunächst ausschließlich lokal im Browser.
            Die Website sendet die Angaben nicht an einen eigenen Server. Beim Absenden wird eine
            vorbereitete Nachricht in WhatsApp geöffnet. Erst dort prüfen und versenden Sie die
            Nachricht selbst. Übermittelt werden nur die von Ihnen eingegebenen Angaben sowie technisch
            durch WhatsApp erhobene Nutzungs-, Geräte- und Verbindungsdaten.
          </p>
          <p>
            Anbieter für Nutzerinnen und Nutzer in der Europäischen Region ist WhatsApp Ireland Limited,
            Merrion Road, Dublin 4, D04 X2K5, Irland. Wenn Sie WhatsApp verwenden, verarbeitet WhatsApp
            Daten in eigener Verantwortung nach seinen Bedingungen. WhatsApp beschreibt globale
            Verarbeitungen, auch in den USA, und nennt dafür unter anderem das EU-US Data Privacy
            Framework, Angemessenheitsbeschlüsse und Standardvertragsklauseln.
          </p>
          <p>
            Die Verarbeitung der von Ihnen versandten Anfrage durch ElektroNIK erfolgt nach Art. 6
            Abs. 1 lit. b DSGVO, soweit sie der Anbahnung oder Durchführung eines Vertrags dient, und
            ansonsten nach Art. 6 Abs. 1 lit. f DSGVO auf Grundlage des Interesses an der Beantwortung
            Ihrer Anfrage. Vertrags- oder buchungsrelevante Inhalte können zusätzlich nach Art. 6 Abs. 1
            lit. c DSGVO entsprechend gesetzlicher Aufbewahrungspflichten gespeichert werden. Nicht mehr
            erforderliche Nachrichten sind zu löschen, sobald keine gesetzlichen Pflichten oder
            berechtigten Gründe für die weitere Speicherung bestehen. Die konkrete betriebliche
            Löschroutine muss vor dem Launch bestätigt werden.
          </p>
          <p className="legal-source-links">
            <a href="https://www.whatsapp.com/legal/privacy-policy-eea" rel="noreferrer" target="_blank">Datenschutzerklärung von WhatsApp für die Europäische Region</a>
          </p>
        </section>

        <section>
          <h2>7. Kontakt per Telefon und E-Mail</h2>
          <p>
            Bei einer Kontaktaufnahme per Telefon oder E-Mail werden die von Ihnen übermittelten
            Kontaktdaten und Inhalte zur Bearbeitung der Anfrage verarbeitet. Rechtsgrundlage ist Art. 6
            Abs. 1 lit. b DSGVO bei vorvertraglichen oder vertraglichen Anliegen. Für sonstige Anfragen
            gilt Art. 6 Abs. 1 lit. f DSGVO. Soweit gesetzliche Aufbewahrungspflichten bestehen, beruht
            die weitere Speicherung auf Art. 6 Abs. 1 lit. c DSGVO.
          </p>
          <p>
            Empfänger können die eingesetzten Telekommunikations- und E-Mail-Dienstleister sein. Die
            konkrete Aufbewahrung im Betrieb und die beim E-Mail-Postfach eingesetzte IONOS-Produktart
            sind vor Veröffentlichung mit dem Betreiber abzugleichen.
          </p>
        </section>

        <section>
          <h2>8. Externe Links und lokal bereitgestellte Ressourcen</h2>
          <p>
            Ein normaler Link zu Google Maps, WhatsApp, einem E-Mail-Programm oder einem Telefonprogramm
            stellt beim bloßen Anzeigen der Seite noch keine Verbindung zum jeweiligen Anbieter her.
            Erst Ihre bewusste Betätigung öffnet das externe Ziel. Ab diesem Zeitpunkt gelten zusätzlich
            die Datenschutzinformationen des jeweiligen Anbieters.
          </p>
          <p>
            Schriften, Grafiken und Website-Assets werden lokal ausgeliefert. Es werden keine externen
            Webfonts geladen. Im geprüften Quellcode wurden keine Werbepixel, Tag Manager, Marketingdienste,
            Captchas, Social-Media-Plugins, Videoeinbettungen oder Chatwidgets gefunden.
          </p>
        </section>

        <section>
          <h2>9. Empfänger und internationale Übermittlungen</h2>
          <p>
            Empfänger personenbezogener Daten sind nur solche Stellen, die für die beschriebenen Zwecke
            erforderlich sind. Dazu können IONOS als Auftragsverarbeiter, Kommunikationsdienstleister,
            Google nach Ihrer Einwilligung, WhatsApp nach Ihrer bewussten Nutzung sowie Behörden und
            Beratende bei einer gesetzlichen Verpflichtung oder zur Rechtsverteidigung gehören.
          </p>
          <p>
            Eine Übermittlung außerhalb des Europäischen Wirtschaftsraums ist im normalen, nicht
            freigegebenen Seitenaufruf nach der IONOS-Produktinformation nicht vorgesehen. Sie kann nach
            Freigabe von Google Maps oder bei Nutzung von WhatsApp stattfinden. Die dazu von den
            Anbietern genannten Garantien sind in den jeweiligen Abschnitten beschrieben.
          </p>
        </section>

        <section>
          <h2>10. Speicherdauer</h2>
          <p>
            Personenbezogene Daten werden nur so lange gespeichert, wie es für den jeweiligen Zweck
            erforderlich ist. Danach werden sie gelöscht oder anonymisiert, sofern keine gesetzlichen
            Aufbewahrungspflichten, die Geltendmachung oder Abwehr von Ansprüchen oder andere zulässige
            Gründe entgegenstehen. Für IONOS-Besucherdaten gelten nach aktueller Produktinformation acht
            Wochen. Die lokale Consent-Auswahl wird nach spätestens sechs Monaten erneuert. Für durch
            Google und WhatsApp eigenverantwortlich gespeicherte Daten gelten deren veröffentlichte
            Lösch- und Aufbewahrungsregeln.
          </p>
        </section>

        <section>
          <h2>11. Ihre Rechte</h2>
          <p>Nach Maßgabe der gesetzlichen Voraussetzungen haben Sie insbesondere folgende Rechte:</p>
          <ul>
            <li>Auskunft nach Art. 15 DSGVO</li>
            <li>Berichtigung nach Art. 16 DSGVO</li>
            <li>Löschung nach Art. 17 DSGVO</li>
            <li>Einschränkung der Verarbeitung nach Art. 18 DSGVO</li>
            <li>Datenübertragbarkeit nach Art. 20 DSGVO</li>
            <li>Widerspruch gegen Verarbeitungen nach Art. 21 DSGVO</li>
            <li>Widerruf einer Einwilligung mit Wirkung für die Zukunft nach Art. 7 Abs. 3 DSGVO</li>
            <li>Beschwerde bei einer Datenschutzaufsichtsbehörde nach Art. 77 DSGVO</li>
          </ul>
          <p>
            Zur Ausübung Ihrer Rechte genügt eine Nachricht an die unter Ziffer 1 genannten Kontaktdaten.
            Ein Widerspruch gegen Verarbeitungen auf Grundlage berechtigter Interessen kann sich aus
            Gründen ergeben, die sich aus Ihrer besonderen Situation ergeben.
          </p>
        </section>

        <section>
          <h2>12. Zuständige Datenschutzaufsicht</h2>
          <p>
            Landesbeauftragte für Datenschutz und Informationsfreiheit Nordrhein-Westfalen<br />
            Postfach 20 04 44<br />
            40102 Düsseldorf<br />
            Telefon: +49 211 38424 0<br />
            Website: <a href="https://www.ldi.nrw.de/" rel="noreferrer" target="_blank">www.ldi.nrw.de</a>
          </p>
          <p>
            Sie können sich auch an jede andere für Sie zuständige Datenschutzaufsichtsbehörde wenden.
          </p>
        </section>

        <section>
          <h2>13. Pflicht zur Bereitstellung und automatisierte Entscheidungen</h2>
          <p>
            Für den reinen Besuch der Website müssen Sie keine Angaben bereitstellen. Technische
            Zugriffsdaten sind für die Auslieferung der Website erforderlich. Angaben in einer Anfrage
            sind freiwillig, können aber für deren Bearbeitung notwendig sein. Es findet keine
            automatisierte Entscheidungsfindung und kein Profiling durch ElektroNIK statt.
          </p>
        </section>

        <section>
          <h2>14. Aktualisierung dieser Erklärung</h2>
          <p>
            Diese Datenschutzerklärung wird angepasst, wenn sich Dienste, Hosting, Rechtslage oder die
            betriebliche Verarbeitung ändern. Maßgeblich ist die auf dieser Seite veröffentlichte Fassung.
          </p>
        </section>
      </article>
    </main>
  );
}
