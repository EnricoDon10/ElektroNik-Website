"use client";

import { animate, stagger, type AnimationPlaybackControls } from "motion";
import Image from "next/image";
import {
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import usePrefersReducedMotion from "./motion/use-prefers-reduced-motion";
import { siteContact } from "../data/site-content";

const navigationItems = [
  { href: "#leistungen", id: "leistungen", label: "Leistungen" },
  { href: "#warum-wir", id: "warum-wir", label: "Warum ElektroNIK" },
  { href: "#ablauf", id: "ablauf", label: "Ablauf" },
  { href: "#kontakt", id: "kontakt", label: "Kontakt" },
] as const;

const MOBILE_NAVIGATION_QUERY = "(max-width: 1279px)";
const FOCUSABLE_SELECTOR = [
  "a[href]",
  "button:not([disabled])",
  "input:not([disabled])",
  "select:not([disabled])",
  "textarea:not([disabled])",
  "[tabindex]:not([tabindex='-1'])",
].join(",");

type MenuState = "closed" | "open" | "closing";

function isVisible(element: HTMLElement) {
  return element.getClientRects().length > 0 && element.getAttribute("aria-hidden") !== "true";
}

function getFocusableElements(container: HTMLElement) {
  return Array.from(container.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR)).filter(
    (element) => isVisible(element) && !element.inert && !element.closest("[inert]"),
  );
}

function isolateOutsideTree(element: HTMLElement) {
  const previousStates = new Map<HTMLElement, boolean>();
  let current: HTMLElement = element;

  while (current.parentElement) {
    const parent = current.parentElement;

    Array.from(parent.children).forEach((sibling) => {
      if (
        sibling !== current
        && sibling instanceof HTMLElement
        && sibling.tagName !== "SCRIPT"
        && sibling.tagName !== "STYLE"
      ) {
        if (!previousStates.has(sibling)) {
          previousStates.set(sibling, sibling.inert);
        }
        sibling.inert = true;
      }
    });

    if (parent === document.body) {
      break;
    }

    current = parent;
  }

  return () => {
    previousStates.forEach((wasInert, sibling) => {
      sibling.inert = wasInert;
    });
  };
}

function clearMenuMotionStyles(navigation: HTMLElement | null) {
  if (!navigation) {
    return;
  }

  navigation.style.removeProperty("opacity");
  navigation.style.removeProperty("transform");
  navigation
    .querySelectorAll<HTMLElement>("[data-menu-item]")
    .forEach((item) => {
      item.style.removeProperty("opacity");
      item.style.removeProperty("transform");
    });
}

export default function SiteHeader() {
  const shouldReduceMotion = usePrefersReducedMotion();
  const [activeSection, setActiveSection] = useState("");
  const [menuState, setMenuState] = useState<MenuState>("closed");
  const [scrolled, setScrolled] = useState(false);
  const exitAnimationRef = useRef<AnimationPlaybackControls | null>(null);
  const headerRef = useRef<HTMLElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const navigationRef = useRef<HTMLElement>(null);

  const menuOpen = menuState === "open";
  const menuVisible = menuState !== "closed";

  const restoreMenuButtonFocus = useCallback(() => {
    window.requestAnimationFrame(() => menuButtonRef.current?.focus());
  }, []);

  const closeMenu = useCallback((options?: { immediate?: boolean; restoreFocus?: boolean }) => {
    if (menuState === "closed") {
      return;
    }

    const navigation = navigationRef.current;
    const immediate = options?.immediate
      || shouldReduceMotion
      || !window.matchMedia(MOBILE_NAVIGATION_QUERY).matches;

    exitAnimationRef.current?.stop();
    exitAnimationRef.current = null;

    if (options?.restoreFocus && menuState === "open") {
      restoreMenuButtonFocus();
    }

    if (!navigation || immediate || menuState !== "open") {
      clearMenuMotionStyles(navigation);
      setMenuState("closed");
      return;
    }

    setMenuState("closing");
    const exitAnimation = animate(
      navigation,
      { opacity: [1, 0], transform: ["translateY(0)", "translateY(-8px)"] },
      { duration: 0.2, ease: [0.4, 0, 1, 1] },
    );
    exitAnimationRef.current = exitAnimation;

    void exitAnimation.finished.then(
      () => {
        clearMenuMotionStyles(navigation);
        exitAnimationRef.current = null;
        setMenuState("closed");
      },
      () => {
        clearMenuMotionStyles(navigation);
        exitAnimationRef.current = null;
        setMenuState("closed");
      },
    );
  }, [menuState, restoreMenuButtonFocus, shouldReduceMotion]);

  const openMenu = useCallback(() => {
    exitAnimationRef.current?.stop();
    exitAnimationRef.current = null;
    clearMenuMotionStyles(navigationRef.current);
    setMenuState("open");
  }, []);

  useEffect(() => {
    if (!menuOpen || !headerRef.current || !navigationRef.current) {
      return;
    }

    const header = headerRef.current;
    const navigation = navigationRef.current;
    const previousOverflow = document.body.style.overflow;
    const restoreOutsideTree = isolateOutsideTree(header);
    const initialFocusFrame = window.requestAnimationFrame(() => {
      navigation.querySelector<HTMLElement>("[data-menu-item]")?.focus();
    });

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        closeMenu({ restoreFocus: true });
        return;
      }

      if (event.key !== "Tab") {
        return;
      }

      const focusableElements = getFocusableElements(header);
      if (focusableElements.length === 0) {
        event.preventDefault();
        menuButtonRef.current?.focus();
        return;
      }

      const firstElement = focusableElements[0];
      const lastElement = focusableElements.at(-1) ?? firstElement;
      const activeElement = document.activeElement;

      if (event.shiftKey && (activeElement === firstElement || !header.contains(activeElement))) {
        event.preventDefault();
        lastElement.focus();
      } else if (!event.shiftKey && activeElement === lastElement) {
        event.preventDefault();
        firstElement.focus();
      }
    };

    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      window.cancelAnimationFrame(initialFocusFrame);
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
      restoreOutsideTree();
    };
  }, [closeMenu, menuOpen]);

  useEffect(() => {
    if (!menuOpen || !navigationRef.current) {
      return;
    }

    if (
      !window.matchMedia(MOBILE_NAVIGATION_QUERY).matches
      || shouldReduceMotion
    ) {
      clearMenuMotionStyles(navigationRef.current);
      return;
    }

    const navigation = navigationRef.current;
    const items = Array.from(navigation.querySelectorAll<HTMLElement>("[data-menu-item]"));
    const navigationAnimation = animate(
      navigation,
      { opacity: [0, 1], transform: ["translateY(-8px)", "translateY(0)"] },
      { duration: 0.28, ease: [0.22, 1, 0.36, 1] },
    );
    const itemAnimation = animate(
      items,
      { opacity: [0, 1], transform: ["translateY(-6px)", "translateY(0)"] },
      {
        delay: stagger(0.045, { startDelay: 0.04 }),
        duration: 0.24,
        ease: [0.22, 1, 0.36, 1],
      },
    );

    return () => {
      navigationAnimation.complete();
      itemAnimation.complete();
      clearMenuMotionStyles(navigation);
    };
  }, [menuOpen, shouldReduceMotion]);

  useEffect(() => {
    const desktopQuery = window.matchMedia("(min-width: 1280px)");
    const closeMenuOnDesktop = (event: MediaQueryListEvent) => {
      if (event.matches) {
        closeMenu({ immediate: true });
      }
    };

    desktopQuery.addEventListener("change", closeMenuOnDesktop);
    return () => desktopQuery.removeEventListener("change", closeMenuOnDesktop);
  }, [closeMenu]);

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

  useEffect(() => () => {
    exitAnimationRef.current?.stop();
    clearMenuMotionStyles(navigationRef.current);
  }, []);

  const headerClassName = [
    "site-header",
    scrolled ? "header-scrolled" : "",
    menuVisible ? "header-menu-open" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <header className={headerClassName} data-menu-state={menuState} ref={headerRef}>
      <a
        className="brand"
        href="#start"
        aria-label={`${siteContact.businessName} Startseite`}
        onClick={() => menuOpen && closeMenu({ restoreFocus: true })}
      >
        <span className="brand-name">ELEKTRO<span>NIK</span></span>
        <span className="brand-sub">Meisterbetrieb</span>
      </a>
      <nav
        aria-hidden={menuState === "closing" ? true : undefined}
        aria-label="Hauptnavigation"
        className={menuVisible ? "nav nav-open" : "nav"}
        data-menu-panel
        id="primary-navigation"
        inert={menuState === "closing"}
        ref={navigationRef}
      >
        {navigationItems.map((item) => (
          <a
            aria-current={activeSection === item.id ? "location" : undefined}
            className={activeSection === item.id ? "nav-link-active" : undefined}
            data-menu-item
            href={item.href}
            key={item.id}
            onClick={() => {
              setActiveSection(item.id);
              closeMenu({ restoreFocus: true });
            }}
          >
            {item.label}
          </a>
        ))}
        <div className="nav-contact">
          <a data-menu-item href={siteContact.phoneHref} onClick={() => closeMenu({ restoreFocus: true })}>
            <small>Direkt anrufen</small>
            <strong>{siteContact.phoneDisplay}</strong>
          </a>
          <a data-menu-item href={siteContact.whatsappHref} onClick={() => closeMenu({ restoreFocus: true })}>
            <small>WhatsApp</small>
            <strong>Anfrage starten</strong>
          </a>
        </div>
      </nav>
      <a
        aria-label="Zum WhatsApp-Anfrageformular"
        className="header-cta"
        href="#whatsapp-anfrage"
        onClick={() => menuOpen && closeMenu({ restoreFocus: true })}
      >
        <span className="whatsapp-mark" aria-hidden="true">
          <Image src="/whatsapp.svg" alt="" height={22} width={22} />
        </span>
        <strong className="header-cta-label">Leistung anfragen</strong>
        <span className="header-cta-arrow" aria-hidden="true">↓</span>
      </a>
      <button
        aria-controls="primary-navigation"
        aria-expanded={menuOpen}
        aria-label={menuOpen ? "Menü schließen" : "Menü öffnen"}
        className={menuOpen ? "menu-button menu-button-open" : "menu-button"}
        onClick={() => menuOpen ? closeMenu() : openMenu()}
        ref={menuButtonRef}
        type="button"
      >
        <span />
        <span />
      </button>
    </header>
  );
}
