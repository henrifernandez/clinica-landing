export const REDUCED_MOTION_QUERY = "(prefers-reduced-motion: reduce)";

export function prefersReducedMotion(): boolean {
  if (typeof window === "undefined") return true;
  return window.matchMedia(REDUCED_MOTION_QUERY).matches;
}

declare global {
  interface Window {
    /** Marcado pelo MotionProvider quando o movimento foi inicializado. */
    __motionReady?: boolean;
  }
}

/**
 * Script inline executado antes da primeira pintura. Marca o documento
 * quando o movimento está liberado, para o CSS esconder só nesse caso
 * os elementos que serão revelados (sem flash). Se o movimento não
 * inicializar em 6 s (erro de script), mostra tudo sem animar.
 */
export const MOTION_FLAG_SCRIPT = `try{if(!window.matchMedia("${REDUCED_MOTION_QUERY}").matches){var d=document.documentElement;d.dataset.motion="on";setTimeout(function(){if(!window.__motionReady)d.dataset.motion="off"},6000)}}catch(e){}`;
