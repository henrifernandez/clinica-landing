export type TrackParams = Record<string, string | number | boolean | undefined>;

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    fbq?: (...args: unknown[]) => void;
  }
}

/**
 * Registra eventos. Em desenvolvimento escreve no console.
 * Envia ao GA4 ou ao Meta Pixel somente se os IDs do .env existirem
 * (os scripts só são carregados nesse caso, ver components/Analytics.tsx).
 */
export function track(event: string, params: TrackParams = {}): void {
  if (typeof window === "undefined") return;

  if (process.env.NODE_ENV === "development") {
    console.info(`[track] ${event}`, params);
  }

  if (process.env.NEXT_PUBLIC_GA4_ID && window.gtag) {
    window.gtag("event", event, params);
  }
  if (process.env.NEXT_PUBLIC_META_PIXEL_ID && window.fbq) {
    window.fbq("trackCustom", event, params);
  }
}
