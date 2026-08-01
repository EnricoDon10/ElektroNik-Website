"use client";

import { useEffect } from "react";
import usePrefersReducedMotion from "./use-prefers-reduced-motion";

const MOBILE_PROCESS_QUERY = "(max-width: 900px)";

function setStepState(steps: HTMLElement[], progress: number, hasStarted: boolean) {
  const finalStepIndex = Math.max(steps.length - 1, 1);

  steps.forEach((step, index) => {
    const isActive = hasStarted && progress >= index / finalStepIndex;
    const nextState = String(isActive);
    if (step.getAttribute("data-process-active") !== nextState) {
      step.setAttribute("data-process-active", nextState);
    }
  });
}

function resolveAxis(track: HTMLElement, mobile: boolean) {
  const configuredAxis = track.dataset.processAxis;
  if (configuredAxis === "x" || configuredAxis === "y") {
    return configuredAxis;
  }
  return mobile ? "y" : "x";
}

function setStaticEndState(track: HTMLElement) {
  const progress = track.querySelector<HTMLElement>("[data-process-progress]");
  const steps = Array.from(track.querySelectorAll<HTMLElement>("[data-process-step]"));
  const axis = resolveAxis(track, window.matchMedia(MOBILE_PROCESS_QUERY).matches);

  if (progress) {
    progress.style.transform = axis === "y" ? "scaleY(1)" : "scaleX(1)";
  }
  steps.forEach((step) => step.setAttribute("data-process-active", "true"));
  track.setAttribute("data-process-motion-state", "complete");
}

export default function ProcessLineMotion() {
  const shouldReduceMotion = usePrefersReducedMotion();

  useEffect(() => {
    const tracks = Array.from(document.querySelectorAll<HTMLElement>("[data-process-track]"));
    if (tracks.length === 0) {
      return;
    }

    if (shouldReduceMotion) {
      tracks.forEach(setStaticEndState);
      return () => {
        tracks.forEach((track) => {
          track.querySelector<HTMLElement>("[data-process-progress]")?.style.removeProperty("transform");
        });
      };
    }

    let cancelled = false;
    let disposeGsap = () => {};

    let importStarted = false;
    let proximityObserver: IntersectionObserver | null = null;

    const initializeGsap = () => {
      if (importStarted || cancelled) {
        return;
      }
      importStarted = true;
      proximityObserver?.disconnect();

      void Promise.all([
        import("gsap"),
        import("gsap/ScrollTrigger"),
      ]).then(([gsapModule, scrollTriggerModule]) => {
        if (cancelled) {
          return;
        }

        const gsap = gsapModule.gsap;
        const ScrollTrigger = scrollTriggerModule.ScrollTrigger;
        gsap.registerPlugin(ScrollTrigger);

        const contexts: Array<ReturnType<typeof gsap.context>> = [];
        const mediaContexts: Array<ReturnType<typeof gsap.matchMedia>> = [];

        tracks.forEach((track) => {
          const progress = track.querySelector<HTMLElement>("[data-process-progress]");
          const steps = Array.from(track.querySelectorAll<HTMLElement>("[data-process-step]"));
          if (!progress || steps.length === 0) {
            setStaticEndState(track);
            return;
          }

          const context = gsap.context(() => {
            const mediaContext = gsap.matchMedia();
            mediaContexts.push(mediaContext);
            mediaContext.add(
              { mobile: MOBILE_PROCESS_QUERY },
              (matchContext) => {
                const mobile = Boolean(matchContext.conditions?.mobile);
                const axis = resolveAxis(track, mobile);
                const property = axis === "y" ? "scaleY" : "scaleX";
                const initialState = axis === "y"
                  ? { scaleX: 1, scaleY: 0, transformOrigin: "center top" }
                  : { scaleX: 0, scaleY: 1, transformOrigin: "left center" };

                track.setAttribute("data-process-motion-state", "running");
                track.setAttribute("data-process-resolved-axis", axis);
                setStepState(steps, 0, false);
                gsap.set(progress, initialState);

                const tween = gsap.to(progress, {
                  [property]: 1,
                  ease: "none",
                  scrollTrigger: {
                    end: "bottom 45%",
                    invalidateOnRefresh: true,
                    onUpdate: (self) => {
                      setStepState(steps, self.progress, self.isActive || self.progress > 0);
                      const nextMotionState = self.progress >= 1 ? "complete" : "running";
                      if (track.dataset.processMotionState !== nextMotionState) {
                        track.setAttribute("data-process-motion-state", nextMotionState);
                      }
                    },
                    scrub: 0.35,
                    start: "top 70%",
                    trigger: track,
                  },
                });

                const trigger = tween.scrollTrigger;
                if (trigger) {
                  setStepState(steps, trigger.progress, trigger.isActive || trigger.progress > 0);
                }

                return () => {
                  trigger?.kill();
                  tween.kill();
                  progress.style.removeProperty("transform");
                  progress.style.removeProperty("transform-origin");
                  steps.forEach((step) => step.setAttribute("data-process-active", "false"));
                  track.removeAttribute("data-process-resolved-axis");
                };
              },
            );
          }, track);
          contexts.push(context);
        });

        const refresh = () => {
          if (!cancelled) {
            ScrollTrigger.refresh();
          }
        };
        const refreshFrame = window.requestAnimationFrame(refresh);
        void document.fonts?.ready.then(refresh);

        disposeGsap = () => {
          window.cancelAnimationFrame(refreshFrame);
          mediaContexts.forEach((mediaContext) => mediaContext.revert());
          contexts.forEach((context) => context.revert());
        };
      }).catch(() => {
        if (!cancelled) {
          tracks.forEach(setStaticEndState);
        }
      });
    };

    if ("IntersectionObserver" in window) {
      proximityObserver = new IntersectionObserver(
        (entries) => {
          if (entries.some((entry) => entry.isIntersecting)) {
            initializeGsap();
          }
        },
        { rootMargin: "600px 0px" },
      );
      tracks.forEach((track) => proximityObserver?.observe(track));
    } else {
      initializeGsap();
    }

    return () => {
      cancelled = true;
      proximityObserver?.disconnect();
      disposeGsap();
    };
  }, [shouldReduceMotion]);

  return null;
}
