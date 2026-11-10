import {
  BADGE_MARK_TRANSFORM,
  BADGE_PATH,
  BADGE_VIEWBOX,
  MARK_FILL_RULE,
  MARK_PATH,
  MARK_VIEWBOX,
  type LogoTone,
} from "./mark";

/**
 * Sembol. Boyutu `className` ile verilir, örn. `h-10 w-auto`.
 *  - light / dark: sarı, sağ üst köşesi kesik levha + ink "B" (iç boşluklar = şerit çizgisi). İki zeminde aynı.
 *  - mono: levhasız, tek renk (currentColor) B; baskı, kabartma, filigran.
 * Varsayılan dekoratiftir; tek başına anlam taşıyorsa `title` verin.
 * `animated`: üst öğede `group` varsa hover'da levha hafifçe yükselir (reduced-motion'da kapalı).
 */
export function LogoMark({
  tone = "light",
  className = "h-10 w-auto",
  title,
  animated = false,
}: {
  tone?: LogoTone;
  className?: string;
  title?: string;
  animated?: boolean;
}) {
  const badge = tone !== "mono";
  const motion = animated
    ? "motion-safe:transition-transform motion-safe:duration-300 motion-safe:group-hover:-translate-y-0.5"
    : "";

  return (
    <svg
      viewBox={badge ? BADGE_VIEWBOX : MARK_VIEWBOX}
      className={`shrink-0 ${motion} ${className}`}
      role={title ? "img" : undefined}
      aria-label={title}
      aria-hidden={title ? undefined : true}
      focusable="false"
    >
      {badge ? (
        <>
          <path d={BADGE_PATH} className="fill-accent" />
          <path d={MARK_PATH} fillRule={MARK_FILL_RULE} transform={BADGE_MARK_TRANSFORM} className="fill-ink" />
        </>
      ) : (
        <path d={MARK_PATH} fillRule={MARK_FILL_RULE} className="fill-current" />
      )}
    </svg>
  );
}
