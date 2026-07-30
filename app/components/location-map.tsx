const mapEmbedUrl =
  "https://www.google.com/maps?q=Krieler+Stra%C3%9Fe+115%2C+50935+K%C3%B6ln-Lindenthal&z=17&output=embed";
const mapDirectionsUrl =
  "https://www.google.com/maps/search/?api=1&query=Krieler+Str.+115%2C+50935+K%C3%B6ln-Lindenthal";

export default function LocationMap() {
  return (
    <div className="contact-map map-is-loaded">
      <iframe
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        src={mapEmbedUrl}
        title="Google Maps – ElektroNik, Krieler Straße 115 in Köln-Lindenthal"
      />
      <div className="contact-map-bar">
        <span className="contact-symbol map-location-mark" aria-hidden="true">A</span>
        <span className="contact-map-address">
          <small>Unser Standort</small>
          <strong>Krieler Str. 115 · 50935 Köln-Lindenthal</strong>
        </span>
        <a href={mapDirectionsUrl} rel="noopener noreferrer" target="_blank">
          In Maps öffnen <span aria-hidden="true">↗</span>
        </a>
      </div>
    </div>
  );
}
