import Link from "next/link";
import { Icon } from "@/components/ui/Icon";
import { licenseClasses } from "@/content/license-classes";
import { Eyebrow } from "@/components/ui/Typography";

/**
 * Ehliyet sınıfları: asfalt "levha" karolar. Dev sarı sınıf kodu; hover'da karo sarıya döner.
 * Masaüstünde B karosu iki satır kaplar (en çok aranan sınıf).
 */
export function ClassesSection({ withIntro = true, headingLevel = "h2" }: { withIntro?: boolean; headingLevel?: "h2" | "h3" }) {
  const rows = [
    ...licenseClasses.map((c) => ({ code: c.code, sub: "", name: c.name, vehicle: c.vehicle, summary: c.summary, href: `/ehliyet-siniflari/${c.slug}` })),
    {
      code: "B",
      sub: "oto",
      name: "B Sınıfı · Otomatik vites",
      vehicle: "Otomatik vitesli otomobil",
      summary: "Debriyajsız araçla eğitim. Ehliyet otomatik vites kısıtlamalı düzenlenir; seçmeden önce farkı birlikte konuşalım.",
      href: "/ehliyet-siniflari/b-sinifi#otomatik-vites",
    },
  ];
  const H = headingLevel;

  const grid = (
    <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 lg:grid-rows-2">
      {rows.map((r, i) => {
        const big = i === 0;
        return (
          <li key={r.href} className={big ? "sm:col-span-2 lg:col-span-1 lg:row-span-2" : ""}>
            <Link
              href={r.href}
              className={`group relative flex h-full flex-col overflow-hidden rounded-card border border-on-ink-muted/15 bg-ink-2 p-6 text-on-ink transition-colors duration-300 hover:border-accent hover:bg-accent hover:text-ink lg:p-8 ${big ? "min-h-[22rem] lg:min-h-full" : "min-h-[15rem]"}`}
            >
              <span className="flex items-start justify-between gap-4">
                <span
                  aria-hidden="true"
                  className={`font-display leading-[0.78] text-accent transition-colors group-hover:text-ink ${big ? "text-[clamp(8rem,6rem+8vw,14rem)]" : "text-[clamp(5rem,4rem+3vw,7rem)]"}`}
                >
                  {r.code}
                  {r.sub && <span className="ml-1 align-top font-wide text-[0.875rem] font-bold tracking-[0.1em]">{r.sub}</span>}
                </span>
                <span
                  aria-hidden="true"
                  className="grid size-11 shrink-0 place-items-center rounded-full border-2 border-on-ink-muted/40 transition-all group-hover:rotate-45 group-hover:border-ink group-hover:bg-ink group-hover:text-accent"
                >
                  <Icon name="arrow-up-right" className="size-5"/>
                </span>
              </span>
              <span className="mt-auto block pt-8">
                <H className="text-h3">{r.name}</H>
                <span className="mt-1 block text-eyebrow text-on-ink-muted transition-colors group-hover:text-ink">{r.vehicle}</span>
                <span className={`mt-4 block text-small text-on-ink-muted transition-colors group-hover:text-ink ${big ? "max-w-sm" : ""}`}>{r.summary}</span>
              </span>
            </Link>
          </li>
        );
      })}
    </ul>
  );

  if (!withIntro) return grid;

  return (
    <section id="siniflar" aria-labelledby="classes-title" className="on-ink bg-ink py-section-md text-on-ink">
      <div className="container-site">
        <div className="mb-10 flex flex-col gap-6 lg:mb-14 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <Eyebrow number="02" tone="dark">
              Ehliyet sınıfları
            </Eyebrow>
            <h2 id="classes-title" className="mt-6 max-w-3xl font-display text-h2">
              Otomobilden motosiklete, size uygun sınıf.
            </h2>
          </div>
          <Link
            href="/ehliyet-siniflari"
            className="inline-flex min-h-11 items-center gap-2 text-button text-on-ink hover:text-accent"
          >
            <span className="leading-[1.9] underline decoration-accent decoration-[3px] underline-offset-[5px]">Tüm sınıfları karşılaştırın</span>
          </Link>
        </div>
        {grid}
      </div>
    </section>
  );
}
