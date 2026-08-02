"use client";

import { ExternalLink, MapPin } from "lucide-react";
import { siteContact } from "../data/site-content";
import { useConsent } from "./consent/consent-provider";

const mapAddress = `${siteContact.street}, ${siteContact.postalCode} ${siteContact.city}`;
const encodedMapAddress = encodeURIComponent(mapAddress);
const mapEmbedUrl = `https://www.google.com/maps?q=${encodedMapAddress}&z=17&output=embed`;
const mapDirectionsUrl = `https://www.google.com/maps/search/?api=1&query=${encodedMapAddress}`;

export default function LocationMap() {
  const { externalMediaAllowed, grantExternalMedia } = useConsent();

  return (
    <div className={externalMediaAllowed ? "contact-map map-is-loaded" : "contact-map"}>
      {externalMediaAllowed ? (
        <iframe
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          src={mapEmbedUrl}
          title={`Google Maps – ${siteContact.businessName}, ${mapAddress}`}
        />
      ) : (
        <div className="map-placeholder">
          <span aria-hidden="true" className="map-placeholder-icon">
            <MapPin size={26} strokeWidth={1.7} />
          </span>
          <div>
            <p className="map-placeholder-label">Externe Medien</p>
            <h3>Standortkarte anzeigen</h3>
            <p>
              Für die Anzeige der interaktiven Google-Maps-Karte ist Ihre Zustimmung
              erforderlich. Erst danach wird eine Verbindung zu Google aufgebaut.
            </p>
          </div>
          <button className="button map-load-button" onClick={grantExternalMedia} type="button">
            Karte laden
          </button>
        </div>
      )}

      <div className="contact-map-bar">
        <span className="contact-symbol map-location-mark" aria-hidden="true">
          <MapPin size={19} strokeWidth={1.8} />
        </span>
        <span className="contact-map-address">
          <small>Unser Standort</small>
          <strong>{siteContact.street} · {siteContact.postalCode} {siteContact.city}</strong>
        </span>
        <a href={mapDirectionsUrl} rel="noopener noreferrer" target="_blank">
          In Maps öffnen <ExternalLink aria-hidden="true" size={14} strokeWidth={1.8} />
        </a>
      </div>
    </div>
  );
}
