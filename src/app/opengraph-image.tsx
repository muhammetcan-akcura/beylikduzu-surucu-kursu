import { ImageResponse } from "next/og";
import { site } from "@/config/site";
import { BRAND_HEX } from "@/components/brand/mark";
import { OgLockup, loadBrandFonts } from "@/components/brand/og";

export const alt = `${site.brandName} — Beylikdüzü'nde ehliyet eğitimi`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: BRAND_HEX.ink,
          color: BRAND_HEX.surface,
          padding: "64px 80px",
          borderBottom: `16px solid ${BRAND_HEX.accent}`,
          fontFamily: "Sans",
        }}
      >
        <OgLockup height={60} tone="dark" />
        <div style={{ display: "flex", flexDirection: "column", fontFamily: "Display", fontSize: 104, lineHeight: 0.92, maxWidth: 1040 }}>
          <div style={{ display: "flex" }}>{"BEYLİKDÜZÜ'NDE EHLİYETE"}</div>
          <div style={{ display: "flex" }}>
            {"GİDEN YOL, "}
            <span style={{ color: BRAND_HEX.accent, marginLeft: 24 }}>{"ADIM ADIM."}</span>
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 26, color: BRAND_HEX.onInkMuted }}>
          <div style={{ display: "flex" }}>B · A1 · A2 · A · Otomatik vites</div>
          <div style={{ display: "flex", color: BRAND_HEX.accent }}>{site.phone.display}</div>
        </div>
      </div>
    ),
    { ...size, fonts: await loadBrandFonts() },
  );
}
