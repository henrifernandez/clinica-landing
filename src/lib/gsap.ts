import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

/**
 * Registro único dos plugins. Todo componente importa gsap daqui,
 * então o registro acontece uma vez, antes de qualquer efeito rodar.
 */
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export { gsap, ScrollTrigger };
