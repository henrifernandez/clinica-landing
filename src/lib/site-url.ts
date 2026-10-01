const LOCAL_URL = "http://localhost:3000";

/**
 * URL pública do site, sem barra no final.
 * Aceita NEXT_PUBLIC_SITE_URL vazia ou inválida (cai no próximo valor),
 * usa o domínio de produção da Vercel quando existir e, por fim, o localhost.
 */
export function getSiteUrl(): string {
  const candidates = [
    process.env.NEXT_PUBLIC_SITE_URL,
    process.env.VERCEL_PROJECT_PRODUCTION_URL
      ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
      : undefined,
  ];

  for (const raw of candidates) {
    const value = raw?.trim();
    if (!value) continue;
    const withProtocol = /^https?:\/\//i.test(value) ? value : `https://${value}`;
    try {
      return new URL(withProtocol).origin;
    } catch {
      /* valor inválido: tenta o próximo */
    }
  }
  return LOCAL_URL;
}
