"use client";

import { type FormEvent, useState } from "react";
import Image from "next/image";
import { services, siteContact } from "../data/site-content";

export default function WhatsAppForm() {
  const [projectType, setProjectType] = useState("Allgemeine Anfrage");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");
  const [statusTone, setStatusTone] = useState<"idle" | "success" | "error">("idle");

  const sendWhatsApp = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const contactDetails = [
      name.trim() ? `Name: ${name.trim()}` : "",
      email.trim() ? `E-Mail: ${email.trim()}` : "",
    ].filter(Boolean);
    const text = encodeURIComponent(
      [
        `Hallo ${siteContact.businessName},`,
        "",
        `Thema: ${projectType}`,
        ...contactDetails,
        "",
        message.trim(),
      ].join("\n"),
    );

    const whatsAppWindow = window.open(
      `${siteContact.whatsappHref}?text=${text}`,
      "_blank",
    );

    if (whatsAppWindow) {
      whatsAppWindow.opener = null;
      setStatusTone("success");
      setStatus("WhatsApp wurde mit Ihrer vorbereiteten Nachricht geöffnet.");
      return;
    }

    setStatusTone("error");
    setStatus(
      "WhatsApp konnte nicht geöffnet werden. Bitte erlauben Sie Pop-ups oder nutzen Sie den direkten WhatsApp-Link.",
    );
  };

  return (
    <form className="contact-form" id="whatsapp-anfrage" onSubmit={sendWhatsApp}>
      <div className="form-head">
        <span>Leistung anfragen</span>
        <span className="online"><i /> Persönlich erreichbar</span>
      </div>
      <label>
        Gewünschte Leistung
        <select
          name="projectType"
          onChange={(event) => setProjectType(event.target.value)}
          value={projectType}
        >
          <option>Allgemeine Anfrage</option>
          {services.map((service) => (
            <option key={service.id} value={service.title}>
              {service.title}
            </option>
          ))}
        </select>
      </label>
      <label>
        Ihr Name <small>optional</small>
        <input
          autoComplete="name"
          name="name"
          onChange={(event) => setName(event.target.value)}
          placeholder="Vor- und Nachname"
          value={name}
        />
      </label>
      <label>
        Ihre E-Mail-Adresse <small>optional</small>
        <input
          autoComplete="email"
          inputMode="email"
          name="email"
          onChange={(event) => setEmail(event.target.value)}
          placeholder="name@beispiel.de"
          type="email"
          value={email}
        />
      </label>
      <label>
        Worum geht es?
        <textarea
          minLength={8}
          name="message"
          onChange={(event) => setMessage(event.target.value)}
          placeholder="z. B. Wallbox installieren, Elektroplanung für Neubau ..."
          required
          rows={4}
          value={message}
        />
      </label>
      <button
        aria-describedby="whatsapp-form-note"
        className="button button-primary form-button"
        type="submit"
      >
        <span className="form-button-content">
          <Image alt="" aria-hidden="true" height={22} src="/whatsapp.svg" width={22} />
          Anfrage in WhatsApp öffnen
        </span>
        <span aria-hidden="true">↗</span>
      </button>
      <p className="form-note" id="whatsapp-form-note">
        WhatsApp öffnet eine vorbereitete Nachricht. Sie prüfen und versenden sie dort selbst.
      </p>
      <p aria-live="polite" className="form-status" data-state={statusTone} role="status">
        {status}
      </p>
    </form>
  );
}
