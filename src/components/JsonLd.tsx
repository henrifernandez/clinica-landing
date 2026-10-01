import { site } from "@/content/site";
import { getWhatsAppNumber } from "@/lib/whatsapp";
import { getSiteUrl } from "@/lib/site-url";

const { clinic, seo } = site;

/** Dados estruturados `Dentist`, todos vindos de site.ts e do .env. */
export function JsonLd() {
  const siteUrl = getSiteUrl();

  const data = {
    "@context": "https://schema.org",
    "@type": "Dentist",
    name: clinic.legalName,
    description: seo.description,
    url: siteUrl,
    image: `${siteUrl}/opengraph-image`,
    telephone: `+${getWhatsAppNumber()}`,
    address: {
      "@type": "PostalAddress",
      streetAddress: clinic.address,
      addressLocality: clinic.city,
      addressRegion: clinic.state,
      postalCode: clinic.postalCode,
      addressCountry: "BR",
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: clinic.openingHours.days,
      opens: clinic.openingHours.opens,
      closes: clinic.openingHours.closes,
    },
    sameAs: [clinic.instagramUrl],
  };

  return (
    <script
      type="application/ld+json"
      // `<` escapado para o JSON nunca fechar a tag
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\u003c"),
      }}
    />
  );
}
