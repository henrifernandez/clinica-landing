"use client";

import { useEffect, type ReactNode } from "react";
import Lenis from "lenis";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { REDUCED_MOTION_QUERY } from "@/lib/motion";

/**
 * Liga o Lenis ao ticker do GSAP e desativa tudo quando o usuário
 * pede movimento reduzido (inclusive se mudar a preferência com a página aberta).
 */
export function MotionProvider({ children }: { children: ReactNode }) {
  useEffect(() => {
    const query = window.matchMedia(REDUCED_MOTION_QUERY);
    let lenis: Lenis | null = null;
    let tick: ((time: number) => void) | null = null;

    const start = () => {
      if (lenis) return;
      lenis = new Lenis({
        duration: 1.1,
        easing: (t) => 1 - Math.pow(1 - t, 4),
        anchors: { offset: -88 },
      });
      lenis.on("scroll", ScrollTrigger.update);
      tick = (time) => lenis?.raf(time * 1000);
      gsap.ticker.add(tick);
      gsap.ticker.lagSmoothing(0);
    };

    const stop = () => {
      if (tick) gsap.ticker.remove(tick);
      lenis?.destroy();
      lenis = null;
      tick = null;
    };

    const sync = () => {
      // Cada componente usa gsap.matchMedia, que reverte as animações ao ativar
      // o movimento reduzido e as recria ao desativar. Aqui só liga e desliga o Lenis.
      document.documentElement.dataset.motion = query.matches ? "off" : "on";
      if (query.matches) stop();
      else start();
    };

    window.__motionReady = true;
    if (!query.matches) start();
    query.addEventListener("change", sync);

    // Fontes e imagens mudam a altura da página, então recalcula os gatilhos.
    const refresh = () => ScrollTrigger.refresh();
    document.fonts?.ready.then(refresh);
    window.addEventListener("load", refresh);

    return () => {
      query.removeEventListener("change", sync);
      window.removeEventListener("load", refresh);
      stop();
    };
  }, []);

  return <>{children}</>;
}
