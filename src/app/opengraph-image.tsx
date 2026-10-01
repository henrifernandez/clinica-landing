import { ImageResponse } from "next/og";
import { site } from "@/content/site";

export const alt = site.seo.ogImageAlt;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 80,
          background: "#f4efe7",
          color: "#1d2822",
        }}
      >
        <div style={{ fontSize: 44, color: "#2e4a3b" }}>{site.clinic.name}</div>
        <div style={{ fontSize: 88, lineHeight: 1.05, maxWidth: 900 }}>
          {site.seo.ogTagline}
        </div>
        <div style={{ fontSize: 30, color: "#5a6454" }}>
          {`${site.clinic.specialty} em ${site.clinic.city}`}
        </div>
      </div>
    ),
    size,
  );
}
