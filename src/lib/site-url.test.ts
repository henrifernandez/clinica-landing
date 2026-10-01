import { afterEach, describe, expect, it, vi } from "vitest";
import { getSiteUrl } from "./site-url";

describe("getSiteUrl", () => {
  afterEach(() => vi.unstubAllEnvs());

  it("usa NEXT_PUBLIC_SITE_URL e remove a barra final", () => {
    vi.stubEnv("NEXT_PUBLIC_SITE_URL", "https://clinica.com.br/");
    expect(getSiteUrl()).toBe("https://clinica.com.br");
  });

  it("não quebra com a variável vazia (erro do deploy)", () => {
    vi.stubEnv("NEXT_PUBLIC_SITE_URL", "");
    vi.stubEnv("VERCEL_PROJECT_PRODUCTION_URL", "");
    expect(getSiteUrl()).toBe("http://localhost:3000");
  });

  it("aceita valor sem protocolo", () => {
    vi.stubEnv("NEXT_PUBLIC_SITE_URL", "clinica.com.br");
    expect(getSiteUrl()).toBe("https://clinica.com.br");
  });

  it("cai no domínio da Vercel quando a variável está vazia", () => {
    vi.stubEnv("NEXT_PUBLIC_SITE_URL", "   ");
    vi.stubEnv("VERCEL_PROJECT_PRODUCTION_URL", "clinica-landing.vercel.app");
    expect(getSiteUrl()).toBe("https://clinica-landing.vercel.app");
  });

  it("ignora valor inválido", () => {
    vi.stubEnv("NEXT_PUBLIC_SITE_URL", "http://");
    vi.stubEnv("VERCEL_PROJECT_PRODUCTION_URL", "");
    expect(getSiteUrl()).toBe("http://localhost:3000");
  });
});
