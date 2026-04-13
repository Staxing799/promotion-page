"use client";

import { useEffect } from "react";

function showElement(element: Element) {
  element.classList.add("is-visible");
}

export function RevealObserver() {
  useEffect(() => {
    const revealElements = Array.from(document.querySelectorAll(".reveal"));

    if (revealElements.length === 0) {
      return;
    }

    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const legacyMotionQuery = motionQuery as MediaQueryList & {
      addListener?: (listener: (event: MediaQueryListEvent) => void) => void;
      removeListener?: (listener: (event: MediaQueryListEvent) => void) => void;
    };

    if (motionQuery.matches || !("IntersectionObserver" in window)) {
      revealElements.forEach(showElement);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return;
          }

          showElement(entry.target);
          observer.unobserve(entry.target);
        });
      },
      {
        threshold: 0.18,
        rootMargin: "0px 0px -12% 0px",
      },
    );

    revealElements.forEach((element) => {
      observer.observe(element);
    });

    const handleMotionChange = (event: MediaQueryListEvent) => {
      if (!event.matches) {
        return;
      }

      observer.disconnect();
      revealElements.forEach(showElement);
    };

    if ("addEventListener" in motionQuery) {
      motionQuery.addEventListener("change", handleMotionChange);
    } else {
      legacyMotionQuery.addListener?.(handleMotionChange);
    }

    return () => {
      observer.disconnect();

      if ("removeEventListener" in motionQuery) {
        motionQuery.removeEventListener("change", handleMotionChange);
      } else {
        legacyMotionQuery.removeListener?.(handleMotionChange);
      }
    };
  }, []);

  return null;
}
