"use client";

import { animate, stagger, type AnimationPlaybackControls } from "motion";
import { useLayoutEffect, useRef } from "react";
import usePrefersReducedMotion from "./use-prefers-reduced-motion";

const EASE_OUT = [0.22, 1, 0.36, 1] as const;

function clearIntroStyles(elements: Iterable<HTMLElement>) {
  for (const element of elements) {
    element.style.removeProperty("opacity");
    element.style.removeProperty("transform");
    element.style.removeProperty("will-change");
  }
}

export default function HeroMotion() {
  const shouldReduceMotion = usePrefersReducedMotion();
  const introHandledRef = useRef(false);

  useLayoutEffect(() => {
    const copy = document.querySelector<HTMLElement>("[data-hero-copy]");
    const visual = document.querySelector<HTMLElement>("[data-hero-visual]");

    if ((!copy && !visual) || introHandledRef.current) {
      return;
    }

    introHandledRef.current = true;

    const hero = (copy ?? visual)?.closest<HTMLElement>("section") ?? null;
    const eyebrow = copy?.querySelector<HTMLElement>(".eyebrow") ?? null;
    const title = copy?.querySelector<HTMLElement>("h1") ?? null;
    const lead = copy?.querySelector<HTMLElement>(".hero-lead") ?? null;
    const actions = copy?.querySelector<HTMLElement>(".hero-actions") ?? null;
    const trust = copy?.querySelector<HTMLElement>(".hero-trust") ?? null;
    const core = visual?.querySelector<HTMLElement>(".visual-core") ?? null;
    const energyPath = visual?.querySelector<SVGGeometryElement>("[data-energy-path]") ?? null;
    const pulse = visual?.querySelector<SVGElement>("[data-energy-pulse]") ?? null;
    const chips = Array.from(document.querySelectorAll<HTMLElement>("[data-hero-chip]"));
    const scrollCue = hero?.querySelector<HTMLElement>("[data-hero-scroll], .scroll-cue") ?? null;
    const animatedElements = new Set(
      [eyebrow, title, lead, actions, trust, visual, core, scrollCue, ...chips]
        .filter((element): element is HTMLElement => element !== null),
    );

    hero?.setAttribute("data-hero-motion-state", "running");

    if (shouldReduceMotion) {
      clearIntroStyles(animatedElements);
      if (pulse) {
        pulse.style.opacity = "0";
      }
      hero?.setAttribute("data-hero-motion-state", "complete");
      return;
    }

    animatedElements.forEach((element) => {
      element.style.willChange = "opacity, transform";
    });

    const controls: AnimationPlaybackControls[] = [];
    const animateRise = (
      element: HTMLElement | null,
      delay: number,
      duration: number,
      distance = 16,
    ) => {
      if (!element) {
        return;
      }

      controls.push(animate(
        element,
        { opacity: [0, 1], transform: [`translateY(${distance}px)`, "translateY(0)"] },
        { delay, duration, ease: EASE_OUT },
      ));
    };

    animateRise(eyebrow, 0, 0.5);
    animateRise(title, 0, 0.5);
    animateRise(lead, 0.12, 0.48, 14);

    if (visual) {
      controls.push(animate(
        visual,
        { opacity: [0, 1] },
        { delay: 0.22, duration: 0.5, ease: EASE_OUT },
      ));
    }

    if (core) {
      controls.push(animate(
        core,
        { opacity: [0, 1] },
        { delay: 0.26, duration: 0.42, ease: EASE_OUT },
      ));
    }

    if (energyPath) {
      const pathLength = energyPath.getTotalLength();
      energyPath.style.strokeDasharray = `${pathLength}`;
      energyPath.style.strokeDashoffset = `${pathLength}`;
      energyPath.style.willChange = "opacity, stroke-dashoffset";
      controls.push(animate(
        energyPath,
        {
          opacity: [0.34, 1, 0.34],
          strokeDashoffset: [`${pathLength}px`, "0px"],
        },
        { delay: 0.3, duration: 0.62, ease: EASE_OUT },
      ));
    }

    if (pulse) {
      pulse.style.willChange = "opacity";
      controls.push(animate(
        pulse,
        { opacity: [0, 1, 0] },
        { delay: 0.42, duration: 0.68, ease: EASE_OUT },
      ));
    }

    if (chips.length > 0) {
      controls.push(animate(
        chips,
        { opacity: [0, 1] },
        {
          delay: stagger(0.07, { startDelay: 0.48 }),
          duration: 0.36,
          ease: EASE_OUT,
        },
      ));
    }

    animateRise(actions, 0.7, 0.42, 10);
    animateRise(trust, 0.72, 0.42, 10);
    animateRise(scrollCue, 1.05, 0.3, 8);

    let finalized = false;
    const finalize = () => {
      if (finalized) {
        return;
      }

      finalized = true;
      clearIntroStyles(animatedElements);
      if (energyPath) {
        energyPath.style.removeProperty("opacity");
        energyPath.style.removeProperty("stroke-dasharray");
        energyPath.style.removeProperty("stroke-dashoffset");
        energyPath.style.removeProperty("will-change");
      }
      if (pulse) {
        pulse.style.removeProperty("will-change");
        pulse.style.opacity = "0";
      }
      hero?.setAttribute("data-hero-motion-state", "complete");
    };

    void Promise.all(controls.map((control) => control.finished)).then(finalize, finalize);

    return () => {
      controls.forEach((control) => control.complete());
      finalize();
    };
  }, [shouldReduceMotion]);

  return null;
}
