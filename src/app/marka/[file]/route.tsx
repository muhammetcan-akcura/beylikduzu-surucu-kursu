import { ImageResponse } from "next/og";
import { BRAND_HEX, badgeSvgString, markSvgString } from "@/components/brand/mark";
import { OgLockup, OgMark, loadBrandFonts } from "@/components/brand/og";

/**
 * İndirilebilir logo dosyaları: /marka/<dosya>. Hepsi build sırasında statik üretilir.
 * Tek kaynak src/components/brand/mark.ts; şekil değişince dosyalar kendiliğinden güncellenir.
 * Kullanım rehberi: /styleguide#logo
 */

type PngSpec = { kind: "png"; w: number; h: number; bg?: string; node: () => React.ReactElement };
type SvgSpec = { kind: "svg"; svg: string };

const center = (child: React.ReactElement, bg?: string) => (
  <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", background: bg ?? "transparent" }}>
    {child}
  </div>
);

const files: Record<string, PngSpec | SvgSpec> = {
  // Vektör sembol
  "rozet.svg": { kind: "svg", svg: badgeSvgString() },
  "sembol-siyah.svg": { kind: "svg", svg: markSvgString(BRAND_HEX.ink) },
  "sembol-beyaz.svg": { kind: "svg", svg: markSvgString("#FFFFFF") },
  // Kilitler (şeffaf zemin, 2x)
  "logo-yatay.png": { kind: "png", w: 760, h: 220, node: () => center(<OgLockup height={120} tone="light" />) },
  "logo-yatay-koyu-zemin.png": { kind: "png", w: 760, h: 220, node: () => center(<OgLockup height={110} tone="dark" />) },
  "logo-dikey.png": { kind: "png", w: 600, h: 600, node: () => center(<OgLockup height={190} tone="light" layout="stacked" />) },
  "logo-dikey-koyu-zemin.png": { kind: "png", w: 600, h: 600, node: () => center(<OgLockup height={170} tone="dark" layout="stacked" />) },
  // Kare ikonlar: sosyal medya profil, Google İşletme, manifest, schema logo
  "ikon-512.png": { kind: "png", w: 512, h: 512, bg: BRAND_HEX.ink, node: () => center(<OgMark height={340} />, BRAND_HEX.ink) },
  "rozet-512.png": { kind: "png", w: 512, h: 512, node: () => center(<OgMark height={512} />) },
};

export const dynamicParams = false;

export function generateStaticParams() {
  return Object.keys(files).map((file) => ({ file }));
}

export async function GET(_req: Request, { params }: { params: Promise<{ file: string }> }) {
  const { file } = await params;
  const spec = files[file];
  if (!spec) return new Response("Bulunamadı", { status: 404 });

  if (spec.kind === "svg") {
    return new Response(spec.svg, {
      headers: { "Content-Type": "image/svg+xml; charset=utf-8", "Content-Disposition": `inline; filename="beylik-${file}"` },
    });
  }

  return new ImageResponse(spec.node(), { width: spec.w, height: spec.h, fonts: await loadBrandFonts() });
}
