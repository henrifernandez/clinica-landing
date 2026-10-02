import type { Metadata, Viewport } from "next";
import { Figtree, Newsreader } from "next/font/google";
import "lenis/dist/lenis.css";
import "@/styles/tokens.css";
import "./globals.css";
import { MotionProvider } from "@/components/MotionProvider";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { Analytics } from "@/components/Analytics";
import { MOTION_FLAG_SCRIPT } from "@/lib/motion";
import { site } from "@/content/site";
import { getSiteUrl } from "@/lib/site-url";

/* Títulos: Newsreader 400, sem itálico (a direção E não usa itálico de destaque). */
const newsreader = Newsreader({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal"],
  display: "swap",
  variable: "--font-newsreader",
});

/* Corpo e interface. */
const figtree = Figtree({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
  variable: "--font-figtree",
});

const siteUrl = getSiteUrl();

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: site.seo.title,
  description: site.seo.description,
  alternates: { canonical: "/" },
  twitter: { card: "summary_large_image" },
  openGraph: {
    title: site.seo.title,
    description: site.seo.description,
    type: "website",
    locale: "pt_BR",
    siteName: site.clinic.name,
  },
};

export const viewport: Viewport = {
  themeColor: "#f3eee6",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="pt-BR"
      className={`${newsreader.variable} ${figtree.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: MOTION_FLAG_SCRIPT }} />
      </head>
      <body>
        <a href="#conteudo" className="skip-link">
          {site.a11y.skipLink}
        </a>
        <MotionProvider>
          {children}
          <WhatsAppFloat />
        </MotionProvider>
        <Analytics />
      </body>
    </html>
  );
}
