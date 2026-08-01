"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const navigationItems = [
  { href: "#leistungen", id: "leistungen", label: "Leistungen" },
  { href: "#warum-wir", id: "warum-wir", label: "Warum ElektroNik" },
  { href: "#ablauf", id: "ablauf", label: "Ablauf" },
  { href: "#kontakt", id: "kontakt", label: "Kontakt" },
] as const;

export default function SiteHeader() {
  const [activeSection, setActiveSection] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!menuOpen) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", closeOnEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [menuOpen]);

  useEffect(() => {
    const desktopQuery = window.matchMedia("(min-width: 1101px)");
    const closeMenuOnDesktop = (event: MediaQueryListEvent) => {
      if (event.matches) {
        setMenuOpen(false);
      }
    };

    desktopQuery.addEventListener("change", closeMenuOnDesktop);
    return () => desktopQuery.removeEventListener("change", closeMenuOnDesktop);
  }, []);

  useEffect(() => {
    const updateScrolledState = () => setScrolled(window.scrollY > 24);
    const sections = navigationItems
      .map(({ id }) => document.getElementById(id))
      .filter((section): section is HTMLElement => section !== null);
    const sectionObserver = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visibleSection) {
          setActiveSection(visibleSection.target.id);
        }
      },
      { rootMargin: "-32% 0px -58% 0px", threshold: [0, 0.1, 0.5] },
    );

    updateScrolledState();
    window.addEventListener("scroll", updateScrolledState, { passive: true });
    sections.forEach((section) => sectionObserver.observe(section));

    return () => {
      window.removeEventListener("scroll", updateScrolledState);
      sectionObserver.disconnect();
    };
  }, []);

  const closeMenu = () => setMenuOpen(false);
  const headerClassName = [
    "site-header",
    scrolled ? "header-scrolled" : "",
    menuOpen ? "header-menu-open" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <header className={headerClassName}>
      <a className="brand" href="#start" aria-label="ElektroNik Startseite">
        <span className="brand-name">ELEKTRO<span>NIK</span></span>
        <span className="brand-sub">Meisterbetrieb</span>
      </a>
      <nav
        className={menuOpen ? "nav nav-open" : "nav"}
        aria-label="Hauptnavigation"
        id="primary-navigation"
      >
        {navigationItems.map((item) => (
          <a
            aria-current={activeSection === item.id ? "location" : undefined}
            className={activeSection === item.id ? "nav-link-active" : undefined}
            href={item.href}
            key={item.id}
            onClick={closeMenu}
          >
            {item.label}
          </a>
        ))}
        <div className="nav-contact">
          <a href="tel:+4915168488353" onClick={closeMenu}>
            <small>Direkt anrufen</small>
            <strong>0151 68488353</strong>
          </a>
          <a href="https://wa.me/4915168488353" onClick={closeMenu}>
            <small>WhatsApp</small>
            <strong>Anfrage starten</strong>
          </a>
        </div>
      </nav>
      <a className="header-cta" href="#whatsapp-anfrage" aria-label="Zum WhatsApp-Anfrageformular">
        <span className="whatsapp-mark" aria-hidden="true">
          <Image src="/whatsapp.svg" alt="" height={22} width={22} />
        </span>
        <strong className="header-cta-label">Projekt unverbindlich anfragen</strong>
        <span className="header-cta-arrow" aria-hidden="true">↓</span>
      </a>
      <button
        className={menuOpen ? "menu-button menu-button-open" : "menu-button"}
        type="button"
        aria-controls="primary-navigation"
        aria-label={menuOpen ? "Menü schließen" : "Menü öffnen"}
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen((value) => !value)}
        ref={menuButtonRef}
      >
        <span />
        <span />
      </button>
    </header>
  );
}
