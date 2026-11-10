import Link from "next/link";
import { site } from "@/config/site";
import { LogoMark } from "@/components/brand/LogoMark";
import type { LogoTone } from "@/components/brand/mark";

export type LogoVariant = "horizontal" | "stacked" | "wordmark" | "mark";
export type LogoSize = "sm" | "md" | "lg";

/**
 * Logo sistemi. Varyantlar:
 *  - horizontal: sembol + isim + alt satır (header, form başlıkları, belgeler)
 *  - stacked:    ortalanmış dikey kilit (footer, kapanış, baskı, sosyal medya)
 *  - wordmark:   yalnızca yazı (sembolün yakınında zaten tekrarlandığı yerler)
 *  - mark:       yalnızca sembol (favicon, dar alanlar, filigran)
 * Tonlar: light (açık zemin) ve dark (ink zemin) → sarı levha aynı, yalnızca yazı rengi değişir;
 *        mono (currentColor; levhasız tek renk B, baskı/kabartma).
 * `href={null}` verilirse link olmadan, düz görsel olarak render edilir.
 */
// Levha kare olduğu ve iç boşluk taşıdığı için levhasız sembolden (mono) bir adım büyüktür;
// böylece B harfi gözle aynı ağırlıkta görünür. Levha yazının büyük harf yüksekliğinden biraz uzundur.
const sizes: Record<
  LogoSize,
  { badge: string; free: string; badgeStacked: string; freeStacked: string; name: string; sub: string; gap: string }
> = {
  sm: { badge: "h-9", free: "h-7", badgeStacked: "h-12", freeStacked: "h-10", name: "text-[1.25rem]", sub: "text-[0.5625rem]", gap: "gap-2.5" },
  md: { badge: "h-11", free: "h-9", badgeStacked: "h-16", freeStacked: "h-14", name: "text-[1.625rem]", sub: "text-[0.625rem]", gap: "gap-3" },
  lg: { badge: "h-14", free: "h-12", badgeStacked: "h-20", freeStacked: "h-16", name: "text-[2.25rem]", sub: "text-[0.75rem]", gap: "gap-4" },
};

const textTone: Record<LogoTone, { name: string; sub: string }> = {
  light: { name: "text-ink", sub: "text-muted" },
  dark: { name: "text-on-ink", sub: "text-on-ink-muted" },
  mono: { name: "text-current", sub: "text-current opacity-80" },
};

export function Logo({
  variant = "horizontal",
  tone = "light",
  size = "md",
  href = "/",
  className = "",
}: {
  variant?: LogoVariant;
  tone?: LogoTone;
  size?: LogoSize;
  href?: string | null;
  className?: string;
}) {
  const s = sizes[size];
  const t = textTone[tone];
  const stacked = variant === "stacked";
  const badge = tone !== "mono";
  const markH = stacked ? (badge ? s.badgeStacked : s.freeStacked) : badge ? s.badge : s.free;

  const words = (
    <span className={`flex flex-col leading-none ${stacked ? "items-center text-center" : ""}`}>
      <span className={`whitespace-nowrap font-display tracking-[-0.005em] ${s.name} ${t.name}`}>{site.shortName}</span>
      <span className={`mt-1 font-wide font-semibold tracking-[0.16em] whitespace-nowrap uppercase ${s.sub} ${t.sub}`}>
        Sürücü Kursu · {site.foundingYear}
      </span>
    </span>
  );

  const content =
    variant === "mark" ? (
      <LogoMark tone={tone} className={`${markH} w-auto`} animated={!!href} />
    ) : variant === "wordmark" ? (
      words
    ) : (
      <span className={`inline-flex ${stacked ? `flex-col items-center ${s.gap}` : `items-center ${s.gap}`}`}>
        <LogoMark tone={tone} className={`${markH} w-auto`} animated={!!href} />
        {words}
      </span>
    );

  if (href === null) {
    return (
      <span role="img" aria-label={site.brandName} className={`inline-flex ${className}`}>
        {content}
      </span>
    );
  }

  return (
    <Link
      href={href}
      aria-label={`${site.brandName}, ana sayfa`}
      className={`group inline-flex min-h-11 items-center ${className}`}
    >
      {content}
    </Link>
  );
}
