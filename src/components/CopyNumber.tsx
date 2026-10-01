"use client";

import { useRef, useState } from "react";
import { site } from "@/content/site";
import { formatWhatsAppNumber } from "@/lib/whatsapp";
import { track } from "@/lib/track";

/** Só desktop: para quem não tem o WhatsApp instalado. */
export function CopyNumber({ source }: { source: "fechamento" }) {
  const [copied, setCopied] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout>>(undefined);
  const number = formatWhatsAppNumber();

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(number);
      setCopied(true);
      track("whatsapp_copy", { source });
      clearTimeout(timer.current);
      timer.current = setTimeout(() => setCopied(false), 2000);
    } catch {
      /* sem permissão de área de transferência: o número continua visível */
    }
  };

  return (
    <p className="mt-6 hidden text-sm text-on-accent-muted md:block">
      <button
        type="button"
        onClick={copy}
        className="min-h-11 rounded-sm px-2 py-2 underline underline-offset-4 transition-colors duration-micro ease-out-quint hover:text-on-accent "
      >
        {site.whatsapp.copyLabel}: {number}
      </button>
      <span role="status" className="ml-2">
        {copied ? site.whatsapp.copiedLabel : ""}
      </span>
    </p>
  );
}
