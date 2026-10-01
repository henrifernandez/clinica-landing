import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import {
  buildWhatsAppUrl,
  FALLBACK_WHATSAPP_NUMBER,
} from "./whatsapp";
import { site } from "@/content/site";

describe("buildWhatsAppUrl", () => {
  beforeEach(() => {
    vi.stubEnv("NEXT_PUBLIC_WHATSAPP_NUMBER", "5511999999999");
    vi.stubEnv("NEXT_PUBLIC_WHATSAPP_MESSAGE", "");
  });
  afterEach(() => {
    vi.unstubAllEnvs();
    vi.restoreAllMocks();
  });

  it("codifica acentos e espaços na mensagem", () => {
    const url = buildWhatsAppUrl({
      message: "Olá, gostaria de agendar uma avaliação.",
    });
    expect(url).toBe(
      "https://wa.me/5511999999999?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20avalia%C3%A7%C3%A3o.",
    );
    expect(decodeURIComponent(url.split("text=")[1])).toBe(
      "Olá, gostaria de agendar uma avaliação.",
    );
  });

  it("mantém só os dígitos do número", () => {
    vi.stubEnv("NEXT_PUBLIC_WHATSAPP_NUMBER", "+55 (11) 99999-9999");
    expect(buildWhatsAppUrl({ message: "oi" })).toContain(
      "https://wa.me/5511999999999?",
    );
  });

  it("usa o número fictício quando o número está ausente", () => {
    vi.stubEnv("NEXT_PUBLIC_WHATSAPP_NUMBER", "");
    expect(buildWhatsAppUrl({ message: "oi" })).toContain(
      `https://wa.me/${FALLBACK_WHATSAPP_NUMBER}?`,
    );
  });

  it("usa a mensagem do .env quando a mensagem vem vazia", () => {
    vi.stubEnv("NEXT_PUBLIC_WHATSAPP_MESSAGE", "Olá, quero informações");
    expect(buildWhatsAppUrl({ message: "   " })).toBe(
      `https://wa.me/5511999999999?text=${encodeURIComponent("Olá, quero informações")}`,
    );
  });

  it("cai na mensagem padrão do site sem mensagem e sem .env", () => {
    expect(buildWhatsAppUrl()).toBe(
      `https://wa.me/5511999999999?text=${encodeURIComponent(site.whatsapp.defaultMessage)}`,
    );
  });
});
