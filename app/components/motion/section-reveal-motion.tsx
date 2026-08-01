"use client";

import { animate, inView, stagger, type AnimationPlaybackControls } from "motion";
import { useLayoutEffect } from "react";
import usePrefersReducedMotion from "./use-prefers-reduced-motion";

const EASE_OUT = [0.22, 1, 0.36, 1] as const;

function setFinalState(element: HTMLElement) {
  element.style.removeProperty("opacity");
  element.style.removeProperty("transform");
  element.style.removeProperty("will-change");
  element.setAttribute("data-reveal-state", "visible");
}

function prepare(element: HTMLElement, distance: number) {
  element.style.opacity = "0";
  element.style.transform = `translateY(${distance}px)`;
  element.style.willChange = "opacity, transform";
  element.setAttribute("data-reveal-state", "pending");
}

export default function SectionRevealMotion() {
  const shouldReduceMotion = usePrefersReducedMotion();

  useLayoutEffect(() => {
    const revealElements = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"))
      .filter((element) => !element.closest("[data-hero-copy], [data-hero-visual]"));
    const groups = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal-group]"));

    if (revealElements.length === 0 && groups.length === 0) {
      return;
    }

    if (shouldReduceMotion || !("IntersectionObserver" in window)) {
      revealElements.forEach(setFinalState);
      groups.forEach((group) => group.setAttribute("data-reveal-state", "visible"));
      return;
    }

    const mobile = window.matchMedia("(max-width: 760px)").matches;
    const distance = mobile ? 12 : 18;
    const duration = mobile ? 0.44 : 0.52;
    const staggerDuration = mobile ? 0.045 : 0.07;
    const groupedElements = new Set<HTMLElement>();
    const animations = new Set<AnimationPlaybackControls>();
    const stopObservers: Array<() => void> = [];

    groups.forEach((group) => {
      const items = Array.from(group.querySelectorAll<HTMLElement>("[data-reveal]"))
        .filter((item) => item.closest("[data-reveal-group]") === group);

      if (items.length === 0) {
        return;
      }

      items.forEach((item) => {
        groupedElements.add(item);
        prepare(item, distance);
      });
      group.setAttribute("data-reveal-state", "pending");

      stopObservers.push(inView(
        group,
        () => {
          const animation = animate(
            items,
            { opacity: [0, 1], transform: [`translateY(${distance}px)`, "translateY(0)"] },
            {
              delay: stagger(staggerDuration),
              duration,
              ease: EASE_OUT,
            },
          );
          animations.add(animation);
          void animation.finished.then(
            () => {
              items.forEach(setFinalState);
              group.setAttribute("data-reveal-state", "visible");
              animations.delete(animation);
            },
            () => animations.delete(animation),
          );
        },
        { amount: 0.18, margin: "0px 0px -8% 0px" },
      ));
    });

    revealElements
      .filter((element) => !groupedElements.has(element))
      .forEach((element) => {
        prepare(element, distance);
        stopObservers.push(inView(
          element,
          () => {
            const animation = animate(
              element,
              { opacity: [0, 1], transform: [`translateY(${distance}px)`, "translateY(0)"] },
              { duration, ease: EASE_OUT },
            );
            animations.add(animation);
            void animation.finished.then(
              () => {
                setFinalState(element);
                animations.delete(animation);
              },
              () => animations.delete(animation),
            );
          },
          { amount: 0.18, margin: "0px 0px -8% 0px" },
        ));
      });

    return () => {
      stopObservers.forEach((stopObserver) => stopObserver());
      animations.forEach((animation) => animation.complete());
      revealElements.forEach(setFinalState);
      groups.forEach((group) => group.setAttribute("data-reveal-state", "visible"));
    };
  }, [shouldReduceMotion]);

  return null;
}
