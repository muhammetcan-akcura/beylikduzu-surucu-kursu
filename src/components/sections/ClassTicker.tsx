import { site } from "@/config/site";

/**
 * Sarı kayan bant (hero'nun hemen altı): verilen eğitimler + doğrulanabilir kısa bilgiler.
 * Tamamen dekoratif (her bilgi sayfada ayrıca var) → aria-hidden.
 * prefers-reduced-motion'da durur; hover'da duraklar.
 * Bilgiler site.ts'ten gelir; rakam/iddia uydurulmaz.
 */
const items = [
  "B sınıfı",
  "Otomatik vites",
  `${site.foundingYear}'den beri`,
  "A1 sınıfı",
  "A2 sınıfı",
  "A sınıfı",
  site.openingHoursLabel,
  "Manuel vites",
  "Direksiyon eğitimi",
  `${site.address.neighborhood}`,
];

export function ClassTicker() {
  const row = (
    <ul className="flex shrink-0 items-center">
      {items.map((t) => (
        <li key={t} className="flex items-center">
          <span className="px-6 font-display text-[clamp(1.75rem,1.2rem+2vw,3rem)] leading-none whitespace-nowrap">{t}</span>
          <span className="flex gap-1.5">
            <span className="h-2 w-8 bg-ink" />
            <span className="h-2 w-3 bg-ink" />
          </span>
        </li>
      ))}
    </ul>
  );
  return (
    <div aria-hidden="true" className="marquee overflow-hidden border-y-4 border-ink bg-accent py-5 text-ink">
      <div className="marquee-track [--marquee-duration:48s]">
        {row}
        {row}
      </div>
    </div>
  );
}
