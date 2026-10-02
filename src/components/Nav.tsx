"use client";

import { useEffect, useState } from "react";
import { site } from "@/content/site";
import { WhatsAppLink } from "@/components/WhatsAppLink";

const SCROLL_THRESHOLD = 40;

export function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > SCROLL_THRESHOLD);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-20">
      {/* Fundo da barra. Só a opacidade anima, para não custar layout. */}
      <span
        aria-hidden="true"
        // avoid-ai-design-ignore: K3 (barra fixa sobre conteúdo que rola, camada real)
        className={`pointer-events-none absolute inset-0 -z-10 border-b border-line bg-glass backdrop-blur-[14px] transition-opacity duration-300 ease-out-quint ${
          scrolled ? "opacity-100" : "opacity-0"
        }`}
      />
      <nav
        aria-label={site.nav.ariaLabel}
        className="mx-auto flex h-[var(--nav-h)] w-[min(var(--container),100%-var(--gutter)*2)] items-center justify-between"
      >
        <a
          href="#"
          className="inline-flex min-h-11 flex-col justify-center text-ink sm:flex-row sm:items-baseline sm:gap-2.5"
          aria-label={`${site.clinic.name} ${site.clinic.specialty}, voltar ao topo`}
        >
          <span className="font-serif text-logo leading-none sm:leading-normal">{site.clinic.name}</span>
          <span className="mt-1 text-xs leading-none text-muted sm:mt-0">{site.clinic.specialty}</span>
        </a>

        <ul className="hidden items-center gap-9 text-sm text-muted md:flex">
          {site.nav.links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="inline-flex min-h-11 items-center transition-colors duration-micro ease-out-quint hover:text-ink"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <WhatsAppLink source="nav" className="btn">
          {site.nav.cta}
        </WhatsAppLink>
      </nav>
    </header>
  );
}
