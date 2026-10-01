import { site } from "@/content/site";

/** Número fictício usado quando NEXT_PUBLIC_WHATSAPP_NUMBER não está definido. */
export const FALLBACK_WHATSAPP_NUMBER = "5500000000000";

export type WhatsAppSource =
  | "nav"
  | "hero"
  | "tratamento"
  | "flutuante"
  | "fechamento";

export interface BuildWhatsAppUrlOptions {
  message?: string;
  /** Origem do clique. Não vai na URL, serve ao rastreamento. */
  source?: WhatsAppSource;
}

let warned = false;

function onlyDigits(value: string | undefined): string {
  return (value ?? "").replace(/\D/g, "");
}

export function getWhatsAppNumber(): string {
  const number = onlyDigits(process.env.NEXT_PUBLIC_WHATSAPP_NUMBER);
  if (number) return number;
  if (process.env.NODE_ENV === "development" && !warned) {
    warned = true;
    console.warn(
      "[whatsapp] NEXT_PUBLIC_WHATSAPP_NUMBER não definido. Usando número fictício.",
    );
  }
  return FALLBACK_WHATSAPP_NUMBER;
}

export function buildWhatsAppUrl({
  message,
}: BuildWhatsAppUrlOptions = {}): string {
  const text =
    message?.trim() ||
    process.env.NEXT_PUBLIC_WHATSAPP_MESSAGE?.trim() ||
    site.whatsapp.defaultMessage;
  return `https://wa.me/${getWhatsAppNumber()}?text=${encodeURIComponent(text)}`;
}

/** Número com máscara simples para exibição, ex.: +55 11 99999-9999. */
export function formatWhatsAppNumber(): string {
  const n = getWhatsAppNumber();
  if (n.length === 13) {
    return `+${n.slice(0, 2)} ${n.slice(2, 4)} ${n.slice(4, 9)}-${n.slice(9)}`;
  }
  return `+${n}`;
}
