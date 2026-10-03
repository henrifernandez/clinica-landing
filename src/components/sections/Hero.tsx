"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { site } from "@/content/site";
import { Container } from "@/components/Container";
import { WhatsAppLink } from "@/components/WhatsAppLink";

const { hero } = site;

/**
 * Hero: o único momento de movimento grande da página.
 * Título entra por palavra (máscara), foto assenta de 1,06 para 1 e a foto
 * tem parallax leve. Subtítulo e foto ficam visíveis no HTML (LCP) e animam só transform.
 */
export function Hero() {
  const root = useRef<HTMLElement>(null);
  const parallax = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = root.current;
    if (!el) return;
    const q = (sel: string) => el.querySelectorAll(sel);

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      // Só roda com movimento liberado. Com reduce, o CSS já mostra o estado final.
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const tl = gsap.timeline({ defaults: { ease: "expo.out" } });

        tl.fromTo(q("[data-hero=word]"), { yPercent: 110, y: 0 }, { yPercent: 0, y: 0, duration: 1.1, stagger: 0.07 }, 0.1)
          .fromTo(q("[data-hero=visual-inner]"), { scale: 1.06 }, { scale: 1, duration: 1.5 }, 0.15)
          .fromTo(q("[data-hero=lead]"), { y: 20 }, { y: 0, duration: 0.9 }, 0.55)
          .fromTo(q("[data-hero=actions]"), { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.9 }, 0.75);

        // Parallax leve da foto, só transform, no máximo 50 px.
        if (parallax.current) {
          gsap.to(parallax.current, {
            y: 50,
            ease: "none",
            scrollTrigger: {
              trigger: el,
              start: "top top",
              end: "bottom top",
              scrub: true,
            },
          });
        }
      });
    }, el);

    return () => {
      ctx.revert();
      ScrollTrigger.refresh();
    };
  }, []);

  return (
    <section
      ref={root}
      className="hero relative pb-16 pt-[calc(var(--nav-h)+2.5rem)] md:pb-20"
    >
      <Container className="grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,.95fr)] lg:gap-[4.5rem]">
        <div>
          {/* avoid-ai-design-ignore: SD5 (cada palavra vai em um span só para a máscara de entrada, sem destaque visual) */}
          <h1 className="mb-7 text-h1">
            {hero.title.map((w, i) => (
              <span key={i}>
                <span className="hero-mask">
                  <span data-hero="word" className="hero-word">
                    {w.text}
                  </span>
                </span>{" "}
              </span>
            ))}
          </h1>

          <p data-hero="lead" className="max-w-[46ch] text-lead text-muted">
            {hero.subtitle}
          </p>

          <div data-hero="actions" className="mt-10">
            <div className="flex flex-wrap gap-3">
              <WhatsAppLink source="hero" className="btn btn-lg">
                {hero.primaryCta}
              </WhatsAppLink>
              <a href={hero.secondaryHref} className="btn btn-ghost btn-lg">
                {hero.secondaryCta}
              </a>
            </div>
            {/* Identifica o tipo de negócio em texto, para não depender da foto. */}
            <p className="mt-7 flex flex-wrap gap-x-2 gap-y-1 text-sm text-muted">
              <span>
                {hero.descriptor} em {site.clinic.city}
              </span>
              <span aria-hidden="true" className="hidden sm:inline">
                ·
              </span>
              <span>{site.clinic.hours}</span>
            </p>
          </div>
        </div>

        {/* A foto sangra até a borda direita da tela. O sangramento é limitado a 11rem:
            em telas muito largas ela para de tocar a borda e volta a ter o canto
            direito arredondado, em vez de virar uma faixa horizontal. */}
        <div
          data-hero="visual"
          className="relative aspect-[4/5] w-full max-w-[32.5rem] overflow-hidden rounded-photo lg:w-auto lg:-mr-[min(11rem,calc((100vw-min(var(--container),100vw-var(--gutter)*2))/2))] lg:aspect-auto lg:h-[clamp(520px,calc(min(100svh,900px)-9rem),760px)] lg:max-w-none lg:rounded-r-none min-[1592px]:rounded-r-photo"
        >
          <div ref={parallax} className="absolute inset-[-6%]">
            <div data-hero="visual-inner" className="h-full w-full">
              <Image
                src="/placeholders/hero-consultorio-ia.webp"
                alt={hero.visualAlt}
                width={1122}
                height={1402}
                sizes="(min-width: 1024px) 46vw, (min-width: 640px) 32.5rem, calc(100vw - 3rem)"
                priority
                fetchPriority="high"
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          <span className="absolute left-5 top-5 rounded-pill bg-scrim px-3 py-1 text-xs text-surface">
            {hero.visualTag} · {site.labels.example}
          </span>

          {/* Legendas planas, no lugar dos cartões flutuantes. */}
          <ul
            role="list"
            className="absolute inset-x-0 bottom-0 grid border-t border-line bg-surface sm:grid-cols-2"
          >
            {hero.captions.map((c) => (
              <li
                key={c.title}
                className="px-5 py-3.5 text-xs leading-snug text-muted sm:[&:nth-child(2)]:border-l sm:[&:nth-child(2)]:border-line"
              >
                <b className="block text-sm font-medium text-ink">{c.title}</b>
                {c.text}
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
