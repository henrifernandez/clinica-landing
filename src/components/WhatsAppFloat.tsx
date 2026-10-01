"use client";

import { useEffect, useState } from "react";
import { site } from "@/content/site";
import { WhatsAppLink } from "@/components/WhatsAppLink";

const { whatsapp } = site;
/** Aparece depois de 60% da altura da primeira tela. */
const SHOW_AFTER = 0.6;

export function WhatsAppFloat() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () =>
      setVisible(window.scrollY > window.innerHeight * SHOW_AFTER);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className="wa-float"
      data-visible={visible}
      // fora da tela o botão não recebe foco nem leitura
      aria-hidden={!visible}
    >
      <WhatsAppLink
        source="flutuante"
        message={whatsapp.floatMessage}
        ariaLabel={whatsapp.floatAriaLabel}
        className="btn wa-float-btn"
      >
        <span aria-hidden="true" className="h-2 w-2 rounded-pill bg-wa-dot" />
        {whatsapp.floatLabel}
      </WhatsAppLink>
    </div>
  );
}
