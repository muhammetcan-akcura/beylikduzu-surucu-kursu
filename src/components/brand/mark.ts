/**
 * LOGO GEOMETRİSİ — TEK KAYNAK
 *
 * Sembol: dolu, dar ve kalın bir "B" (başlık fontu Archivo dar 800 ile aynı karakter).
 * B'nin iki iç boşluğu aynı eksende, eşit boyda iki dikdörtgendir → harfin içinden geçen
 * kesik yol orta çizgisi. Kurumun adı (Beylik) ile işi (yol) tek işarette.
 * Dikey kalınlıklar yataylardan kalındır (gövde 9, yatay 6–7): gerçek bir harf gibi durur.
 *
 * Levha: sağ üst köşesi kesik sarı kare (sitedeki `cut-tr` kart/levha dili, plaka ve trafik levhası).
 * Sembol levhanın içinde ink renkte; iç boşluklar delik olduğu için şerit çizgileri levhanın sarısıdır.
 * Levha açık ve koyu zeminde AYNIDIR (sarı–ink 10.72:1). Tek renk (mono) kullanımda levhasız B.
 *
 * Hem React (LogoMark) hem next/og görselleri (OG, ikonlar, PNG logolar) bu değerleri kullanır;
 * şekli yalnızca burada değiştirin. `src/app/icon.svg` elle eşlenir.
 */

/* ---------- Sembol (B) ---------- */

export const MARK_W = 26;
export const MARK_H = 44;
export const MARK_VIEWBOX = `0 0 ${MARK_W} ${MARK_H}`;

/** Dış biçim: üst kâse 24 geniş, alt kâse 26 (klasik B oranı); bel çentiği ortada. */
const MARK_OUTER = "M0 0H16A8 8 0 0 1 24 8V13A8 8 0 0 1 16 21H17A9 9 0 0 1 26 30V35A9 9 0 0 1 17 44H0Z";
/** İç boşluklar = iki şerit çizgisi (7 × 9, aynı eksende, arada 13 birim boşluk). */
export const MARK_LANES = [
  { x: 9, y: 6, width: 7, height: 9 },
  { x: 9, y: 28, width: 7, height: 9 },
];
const lanePath = MARK_LANES.map((l) => `M${l.x} ${l.y}H${l.x + l.width}V${l.y + l.height}H${l.x}Z`).join("");

/** Tek parça yol; `fill-rule="evenodd"` ile çizilir (iç boşluklar gerçek delik). */
export const MARK_PATH = MARK_OUTER + lanePath;
export const MARK_FILL_RULE = "evenodd" as const;

/* ---------- Levha (rozet) ---------- */

export const BADGE_SIZE = 64;
export const BADGE_CUT = 12;
export const BADGE_VIEWBOX = `0 0 ${BADGE_SIZE} ${BADGE_SIZE}`;
/** Sağ üst köşesi kesik kare */
export const BADGE_PATH = `M0 0H${BADGE_SIZE - BADGE_CUT}L${BADGE_SIZE} ${BADGE_CUT}V${BADGE_SIZE}H0Z`;
/** Sembol levhada yüksekliğin %75'i; yatayda ortada, dikeyde ortada. */
const BADGE_MARK_SCALE = 48 / MARK_H;
export const BADGE_MARK_TRANSFORM = `translate(${(BADGE_SIZE - MARK_W * BADGE_MARK_SCALE) / 2} ${(BADGE_SIZE - 48) / 2}) scale(${BADGE_MARK_SCALE})`;

/* ---------- Renkler ---------- */

/**
 * Marka renkleri (globals.css @theme ile aynı). next/og CSS değişkeni okuyamadığı için
 * görsel üretiminde bu hex değerleri kullanılır.
 */
export const BRAND_HEX = {
  ink: "#14171C",
  surface: "#F4F5F6",
  accent: "#F2C230",
  muted: "#5A616A",
  onInkMuted: "#A3ABB5",
} as const;

export type LogoTone = "light" | "dark" | "mono";

/** Zemine göre yazı renkleri. Levha her iki tonda aynı (sarı levha + ink B). */
export const toneHex: Record<Exclude<LogoTone, "mono">, { name: string; sub: string }> = {
  light: { name: BRAND_HEX.ink, sub: BRAND_HEX.muted },
  dark: { name: BRAND_HEX.surface, sub: BRAND_HEX.onInkMuted },
};

/** Tam SVG metni (indirilebilir dosyalar, statik ikonlar). */
export const badgeSvgString = () =>
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${BADGE_VIEWBOX}"><path d="${BADGE_PATH}" fill="${BRAND_HEX.accent}"/><path d="${MARK_PATH}" fill-rule="evenodd" fill="${BRAND_HEX.ink}" transform="${BADGE_MARK_TRANSFORM}"/></svg>`;
export const markSvgString = (fill: string) =>
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${MARK_VIEWBOX}"><path d="${MARK_PATH}" fill-rule="evenodd" fill="${fill}"/></svg>`;

/* ---------- ESKİ GEOMETRİ (geçici) ----------
 * TrainingCar.tsx kapıdaki logoyu hâlâ bunlarla çiziyor. O dosya MARK_PATH'e geçince silinecek.
 * Yeni kodda KULLANMAYIN.
 */
/** @deprecated MARK_PATH kullanın */
export const MARK_DASHES = [0, 15, 30].map((y) => ({ x: 0, y, width: 7, height: 10, rx: 1 }));
/** @deprecated MARK_PATH kullanın */
export const MARK_BOWLS = "M10 3.5H19A8.25 8.25 0 0 1 19 20H10M10 20H21A8.25 8.25 0 0 1 21 36.5H10";
/** @deprecated MARK_PATH kullanın */
export const MARK_STROKE = 7;
