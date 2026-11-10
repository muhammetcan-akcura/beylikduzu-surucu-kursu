import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { site } from "@/config/site";
import { BADGE_MARK_TRANSFORM, BADGE_PATH, BADGE_VIEWBOX, BRAND_HEX, MARK_PATH, toneHex } from "./mark";

/**
 * next/og (Satori) için logo parçaları. Yalnızca sunucuda, görsel üretiminde kullanılır.
 * Fontlar yerelden okunur (Türkçe karakterler için, OFL lisanslı): Archivo dar 800 ("Display") + Archivo 500 ("Sans").
 */
export async function loadBrandFonts() {
  const [display, sans] = await Promise.all([
    readFile(join(process.cwd(), "src/app/fonts/archivo-cond-800.ttf")),
    readFile(join(process.cwd(), "src/app/fonts/archivo-500.ttf")),
  ]);
  return [
    { name: "Display", data: display, weight: 800 as const, style: "normal" as const },
    { name: "Sans", data: sans, weight: 500 as const, style: "normal" as const },
  ];
}

type Tone = keyof typeof toneHex;

/** Levha (sarı, sağ üst köşesi kesik) + ink B. `height` levhanın kenarı. Levha iki tonda aynıdır. */
export function OgMark({ height }: { height: number; tone?: Tone }) {
  return (
    <svg width={height} height={height} viewBox={BADGE_VIEWBOX}>
      <path d={BADGE_PATH} fill={BRAND_HEX.accent} />
      <path d={MARK_PATH} fillRule="evenodd" fill={BRAND_HEX.ink} transform={BADGE_MARK_TRANSFORM} />
    </svg>
  );
}

/** Kilit: `height` sembol yüksekliğidir; yazı buna oranlanır. */
export function OgLockup({
  height,
  tone = "light",
  layout = "horizontal",
}: {
  height: number;
  tone?: Tone;
  layout?: "horizontal" | "stacked";
}) {
  const c = toneHex[tone];
  const stacked = layout === "stacked";
  const name = stacked ? height * 0.62 : height * 0.74;
  return (
    <div
      style={{
        display: "flex",
        flexDirection: stacked ? "column" : "row",
        alignItems: "center",
        gap: stacked ? height * 0.28 : height * 0.36,
      }}
    >
      <OgMark height={height} tone={tone} />
      <div style={{ display: "flex", flexDirection: "column", alignItems: stacked ? "center" : "flex-start" }}>
        <div style={{ fontFamily: "Display", fontSize: name, lineHeight: 1, letterSpacing: -name * 0.02, color: c.name }}>
          {site.shortName}
        </div>
        <div
          style={{
            fontFamily: "Sans",
            fontSize: name * 0.27,
            lineHeight: 1,
            marginTop: name * 0.16,
            letterSpacing: name * 0.27 * 0.2,
            color: c.sub,
          }}
        >
          {`SÜRÜCÜ KURSU · ${site.foundingYear}`}
        </div>
      </div>
    </div>
  );
}
