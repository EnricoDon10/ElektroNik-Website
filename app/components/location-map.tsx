import { ExternalLink, MapPin } from "lucide-react";
import { siteContact } from "../data/site-content";

const mapAddress = `${siteContact.street}, ${siteContact.postalCode} ${siteContact.city}`;
const encodedMapAddress = encodeURIComponent(mapAddress);
const mapEmbedUrl = `https://www.google.com/maps?q=${encodedMapAddress}&z=17&output=embed`;
const mapDirectionsUrl = `https://www.google.com/maps/search/?api=1&query=${encodedMapAddress}`;

export default function LocationMap() {
  return (
    <div className="contact-map map-is-loaded">
      <iframe
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        src={mapEmbedUrl}
        title={`Google Maps – ${siteContact.businessName}, ${mapAddress}`}
      />

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
