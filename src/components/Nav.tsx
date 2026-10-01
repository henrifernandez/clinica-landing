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
    <header className="fixed left-1/2 top-[var(--nav-offset)] z-20 w-[min(var(--nav-width),100%-var(--gutter)*2)] -translate-x-1/2">
      <nav
        aria-label={site.nav.ariaLabel}
        className="relative flex items-center justify-between py-3 pl-6 pr-3 md:pl-7"
      >
        {/* Fundo da pílula. Só a opacidade anima, para não custar layout. */}
        <span
          aria-hidden="true"
          className={`pointer-events-none absolute inset-0 -z-10 rounded-pill border border-line bg-surface/80 backdrop-blur-[16px] transition-opacity duration-300 ease-out-quint ${
            scrolled ? "opacity-100" : "opacity-0"
          }`}
        />

        <a
          href="#"
          className="inline-flex min-h-11 items-center font-serif text-logo font-normal text-accent"
          aria-label={`${site.clinic.name}, voltar ao topo`}
        >
          {site.clinic.name}
        </a>

        <ul className="hidden items-center gap-8 text-sm text-muted md:flex">
          {site.nav.links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="inline-flex min-h-11 items-center px-2 transition-colors duration-micro ease-out-quint hover:text-ink"
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
