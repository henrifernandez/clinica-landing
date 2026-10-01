"use client";

import { useEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";

/**
 * Revelação em escada. Marque os elementos com `data-reveal` dentro do
 * container que recebe o ref. Cada grupo que entra na tela aparece com fade
 * e subida de 26 px, com 80 ms entre irmãos, uma única vez, a 15% de visibilidade.
 * Com movimento reduzido nada é escondido nem animado.
 */
export function useReveal<T extends HTMLElement = HTMLElement>() {
  const ref = useRef<T>(null);

  useEffect(() => {
    const scope = ref.current;
    if (!scope) return;

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const targets = gsap.utils.toArray<HTMLElement>("[data-reveal]", scope);
        if (!targets.length) return;

        ScrollTrigger.batch(targets, {
          start: "top 85%",
          once: true,
          interval: 0.1,
          onEnter: (batch) => {
            gsap.fromTo(
              batch,
              { opacity: 0, y: 26 },
              {
                opacity: 1,
                y: 0,
                duration: 0.85,
                ease: "power4.out", // quint: cauda mais suave que expo para deslocamentos curtos
                stagger: 0.08,
                overwrite: true,
                clearProps: "transform",
              },
            );
          },
        });
      });
    }, scope);

    return () => ctx.revert();
  }, []);

  return ref;
}
