"use client";

import { ExternalLink, MapPin } from "lucide-react";
import { useState } from "react";

const mapEmbedUrl =
  "https://www.google.com/maps?q=Krieler+Stra%C3%9Fe+115%2C+50935+K%C3%B6ln-Lindenthal&z=17&output=embed";
const mapDirectionsUrl =
  "https://www.google.com/maps/search/?api=1&query=Krieler+Str.+115%2C+50935+K%C3%B6ln-Lindenthal";

export default function LocationMap() {
  const [mapLoaded, setMapLoaded] = useState(false);

  return (
    <div className={mapLoaded ? "contact-map map-is-loaded" : "contact-map"}>
      {mapLoaded ? (
        <iframe
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          src={mapEmbedUrl}
          title="Google Maps – ElektroNik, Krieler Straße 115 in Köln-Lindenthal"
        />
      ) : (
        <div className="map-consent">
          <span className="map-consent-icon" aria-hidden="true">
            <MapPin size={24} strokeWidth={1.7} />
          </span>
          <div>
            <p className="map-consent-label">Standort · Köln-Lindenthal</p>
            <strong>Krieler Str. 115 · 50935 Köln</strong>
            <p>
              Die interaktive Karte wird erst nach Ihrer Auswahl von Google geladen.
              Dabei können Daten an Google übertragen werden.
            </p>
          </div>
          <button className="button button-map" onClick={() => setMapLoaded(true)} type="button">
            Interaktive Karte laden
          </button>
        </div>
      )}

      <div className="contact-map-bar">
        <span className="contact-symbol map-location-mark" aria-hidden="true">
          <MapPin size={19} strokeWidth={1.8} />
        </span>
        <span className="contact-map-address">
          <small>Unser Standort</small>
          <strong>Krieler Str. 115 · 50935 Köln-Lindenthal</strong>
        </span>
        <a href={mapDirectionsUrl} rel="noopener noreferrer" target="_blank">
          In Maps öffnen <ExternalLink aria-hidden="true" size={14} strokeWidth={1.8} />
        </a>
      </div>
    </div>
  );
}
