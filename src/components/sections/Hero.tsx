"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { site } from "@/content/site";
import { Container } from "@/components/Container";
import { WhatsAppLink } from "@/components/WhatsAppLink";

const { hero } = site;

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
        const out = "expo.out";
        const tl = gsap.timeline({ defaults: { ease: out } });

        tl.fromTo(q("[data-hero=eyebrow]"), { opacity: 0, y: 12 }, { opacity: 1, y: 0, duration: 0.8 }, 0.1)
          .fromTo(q("[data-hero=word]"), { yPercent: 110, y: 0 }, { yPercent: 0, y: 0, duration: 1.1, stagger: 0.07 }, 0.15)
          .fromTo(q("[data-hero=visual-inner]"), { scale: 1.06 }, { scale: 1, duration: 1.5 }, 0.2)
          .fromTo(q("[data-hero=lead]"), { y: 20 }, { y: 0, duration: 0.9 }, 0.6)
          .fromTo(q("[data-hero=actions]"), { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.9 }, 0.8)
          .fromTo(q("[data-hero=float]"), { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: 0.9, stagger: 0.12 }, 1.0)
          .fromTo(q("[data-hero=seal]"), { opacity: 0, y: 12 }, { opacity: 1, y: 0, duration: 0.8 }, 1.3);

        // Parallax leve, só transform, no máximo 50 px.
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
      className="hero relative flex min-h-[100svh] items-center pb-16 pt-28 md:pb-24 md:pt-36"
    >
      <Container className="grid items-center gap-10 lg:grid-cols-[1.05fr_.95fr] lg:gap-16">
        <div>
          <span data-hero="eyebrow" className="eyebrow">
            {hero.eyebrow}
          </span>

          <h1 className="my-5 text-h1 md:my-6">
            {hero.title.map((w, i) => (
              <span key={i}>
                <span className="hero-mask">
                  <span data-hero="word" className="hero-word">
                    {"emphasis" in w && w.emphasis ? <em>{w.text}</em> : w.text}
                  </span>
                </span>{" "}
              </span>
            ))}
          </h1>

          <p data-hero="lead" className="max-w-[46ch] text-base text-muted">
            {hero.subtitle}
          </p>

          <div data-hero="actions" className="mt-8 flex flex-wrap gap-3 md:mt-10">
            <WhatsAppLink source="hero" className="btn">
              {hero.primaryCta}
            </WhatsAppLink>
            <a href={hero.secondaryHref} className="btn btn-ghost">
              {hero.secondaryCta}
            </a>
          </div>

          <p
            data-hero="seal"
            className="mt-8 flex items-baseline gap-3 text-xs text-muted md:mt-12"
          >
            <b className="font-serif text-2xl font-light leading-none text-ink">
              {hero.seal.value}
            </b>
            <span>
              {hero.seal.label} · {site.labels.example}
            </span>
          </p>
        </div>

        <div
          data-hero="visual"
          className="relative mx-auto aspect-[4/5] w-full max-w-[26rem] lg:max-w-[30rem] lg:justify-self-end"
        >
          <div className="hero-blob absolute inset-0 overflow-hidden bg-accent-soft">
            <div ref={parallax} className="absolute inset-[-6%]">
              <div data-hero="visual-inner" className="h-full w-full">
                <Image
                  src="/placeholders/hero.svg"
                  alt={hero.visualAlt}
                  width={800}
                  height={1000}
                  priority
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
            <span className="absolute bottom-6 left-1/2 -translate-x-1/2 rounded-pill bg-ink/70 px-3 py-1 text-xs text-surface">
              {hero.visualTag}
            </span>
          </div>

          <div
            data-hero="float"
            className="hero-float absolute left-[-0.5rem] top-[18%] md:left-[-1.75rem]"
          >
            <b>{hero.floatCards[0].title}</b>
            {hero.floatCards[0].text}
          </div>
          <div
            data-hero="float"
            className="hero-float absolute bottom-[14%] right-[-0.5rem] md:right-[-0.875rem]"
          >
            <b>{hero.floatCards[1].title}</b>
            {hero.floatCards[1].text}
          </div>
        </div>
      </Container>
    </section>
  );
}
