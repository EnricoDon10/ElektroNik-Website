"use client";

import HeroMotion from "./hero-motion";
import HeroPointerMotion from "./hero-pointer-motion";
import ProcessLineMotion from "./process-line-motion";
import SectionRevealMotion from "./section-reveal-motion";

export default function MotionOrchestrator() {
  return (
    <>
      <HeroMotion />
      <HeroPointerMotion />
      <SectionRevealMotion />
      <ProcessLineMotion />
    </>
  );
}
