import type { Metadata, Viewport } from "next";
import { DM_Sans, Fraunces } from "next/font/google";
import "lenis/dist/lenis.css";
import "@/styles/tokens.css";
import "./globals.css";
import { MotionProvider } from "@/components/MotionProvider";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { Analytics } from "@/components/Analytics";
import { MOTION_FLAG_SCRIPT } from "@/lib/motion";
import { site } from "@/content/site";

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["300", "400"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-fraunces",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
  variable: "--font-dm-sans",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

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
  themeColor: "#f4efe7",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="pt-BR"
      className={`${fraunces.variable} ${dmSans.variable}`}
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
