"use client";

import { useEffect } from "react";
import usePrefersReducedMotion from "./use-prefers-reduced-motion";

const POINTER_QUERY = "(min-width: 1280px) and (hover: hover) and (pointer: fine)";

export default function HeroPointerMotion() {
  const shouldReduceMotion = usePrefersReducedMotion();

  useEffect(() => {
    const visual = document.querySelector<HTMLElement>("[data-hero-visual]");
    if (!visual || shouldReduceMotion) {
      return;
    }

    const pointerQuery = window.matchMedia(POINTER_QUERY);
    let animationFrame = 0;
    let bounds: DOMRect | null = null;
    let pointerX = 0;
    let pointerY = 0;

    const reset = () => {
      if (animationFrame) {
        window.cancelAnimationFrame(animationFrame);
        animationFrame = 0;
      }
      visual.style.removeProperty("translate");
      visual.style.removeProperty("rotate");
      visual.style.removeProperty("will-change");
      bounds = null;
    };

    const renderPointerPosition = () => {
      animationFrame = 0;
      if (!bounds || !pointerQuery.matches || document.hidden) {
        reset();
        return;
      }

      const normalizedX = Math.max(-1, Math.min(1, (pointerX - bounds.left) / bounds.width * 2 - 1));
      const normalizedY = Math.max(-1, Math.min(1, (pointerY - bounds.top) / bounds.height * 2 - 1));
      visual.style.translate = `${(normalizedX * 5).toFixed(2)}px ${(normalizedY * 5).toFixed(2)}px`;
      visual.style.rotate = `${(normalizedX * 1.2).toFixed(2)}deg`;
    };

    const handlePointerEnter = () => {
      if (!pointerQuery.matches) {
        return;
      }
      bounds = visual.getBoundingClientRect();
      visual.style.willChange = "translate, rotate";
    };

    const handlePointerMove = (event: PointerEvent) => {
      if (!pointerQuery.matches) {
        return;
      }

      pointerX = event.clientX;
      pointerY = event.clientY;
      if (!animationFrame) {
        animationFrame = window.requestAnimationFrame(renderPointerPosition);
      }
    };

    const handleVisibilityChange = () => {
      if (document.hidden) {
        reset();
      }
    };

    let pointerListenersAttached = false;

    const attachPointerListeners = () => {
      if (pointerListenersAttached) {
        return;
      }
      pointerListenersAttached = true;
      visual.addEventListener("pointerenter", handlePointerEnter, { passive: true });
      visual.addEventListener("pointermove", handlePointerMove, { passive: true });
      visual.addEventListener("pointerleave", reset, { passive: true });
      document.addEventListener("visibilitychange", handleVisibilityChange);
    };

    const detachPointerListeners = () => {
      if (!pointerListenersAttached) {
        return;
      }
      pointerListenersAttached = false;
      visual.removeEventListener("pointerenter", handlePointerEnter);
      visual.removeEventListener("pointermove", handlePointerMove);
      visual.removeEventListener("pointerleave", reset);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };

    const handleQueryChange = (event: MediaQueryListEvent) => {
      if (event.matches) {
        attachPointerListeners();
      } else {
        detachPointerListeners();
        reset();
      }
    };

    pointerQuery.addEventListener("change", handleQueryChange);
    if (pointerQuery.matches) {
      attachPointerListeners();
    }

    return () => {
      pointerQuery.removeEventListener("change", handleQueryChange);
      detachPointerListeners();
      reset();
    };
  }, [shouldReduceMotion]);

  return null;
}
