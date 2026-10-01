"use client";

import type { ReactNode } from "react";
import { site } from "@/content/site";
import { buildWhatsAppUrl, type WhatsAppSource } from "@/lib/whatsapp";
import { track } from "@/lib/track";

interface WhatsAppLinkProps {
  message?: string;
  source: WhatsAppSource;
  treatment?: string;
  className?: string;
  ariaLabel?: string;
  children: ReactNode;
}

/** Único ponto de entrada de links para o WhatsApp na página. */
export function WhatsAppLink({
  message,
  source,
  treatment,
  className,
  ariaLabel,
  children,
}: WhatsAppLinkProps) {
  return (
    <a
      href={buildWhatsAppUrl({ message, source })}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      aria-label={ariaLabel ? `${ariaLabel}, ${site.a11y.newTab}` : undefined}
      onClick={() => track("whatsapp_click", { source, treatment })}
    >
      {children}
      {!ariaLabel ? <span className="sr-only"> ({site.a11y.newTab})</span> : null}
    </a>
  );
}
