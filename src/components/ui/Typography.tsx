import Link from "next/link";
import { Icon } from "@/components/ui/Icon";
import type { ReactNode } from "react";
import { TrainingCar } from "@/components/brand/TrainingCar";

type Tone = "light" | "dark" | "accent";

/**
 * Bölüm etiketi: iki kısa şerit çizgisi + geniş büyük harf etiket.
 * `number` verilirse önde kare içinde numara (ana sayfa bölümleri).
 * Ton: light (açık zemin), dark (asfalt zemin), accent (sarı zemin).
 */
export function Eyebrow({ children, number, tone = "light" }: { children: ReactNode; number?: string; tone?: Tone }) {
  const text = tone === "dark" ? "text-on-ink" : "text-ink";
  const dash = tone === "dark" ? "bg-accent" : "bg-ink";
  const box = tone === "dark" ? "bg-accent text-ink" : tone === "accent" ? "bg-ink text-accent" : "bg-ink text-on-ink";
  return (
    <p className={`flex items-center gap-3 text-eyebrow ${text}`}>
      {number ? (
        <span className={`grid h-7 min-w-7 place-items-center rounded-[3px] px-1.5 font-cond text-[0.8125rem] font-extrabold tracking-normal tabular-nums ${box}`}>
          {number}
        </span>
      ) : (
        <span aria-hidden="true" className="flex gap-1">
          <span className={`h-1 w-4 ${dash}`} />
          <span className={`h-1 w-2 ${dash}`} />
        </span>
      )}
      <span>{children}</span>
    </p>
  );
}

export function Breadcrumbs({ items, tone = "light" }: { items: { name: string; path: string }[]; tone?: "light" | "dark" }) {
  const dark = tone === "dark";
  return (
    <nav aria-label="Sayfa konumu" className={`text-caption ${dark ? "text-on-ink-muted" : "text-muted"}`}>
      <ol className="flex flex-wrap items-center gap-1">
        {items.map((it, i) => {
          const last = i === items.length - 1;
          return (
            <li key={it.path} className="flex items-center gap-1">
              {last ? (
                <span aria-current="page" className={dark ? "text-on-ink" : "text-graphite"}>
                  {it.name}
                </span>
              ) : (
                <>
                  <Link href={it.path} className={`inline-flex min-h-11 items-center hover:underline ${dark ? "hover:text-on-ink" : "hover:text-ink"}`}>
                    {it.name}
                  </Link>
                  <Icon name="chevron-right" className="size-3.5"/>
                </>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

/**
 * İç sayfa başlığı: asfalt zemin, dev büyük harf başlık, altta akan yol şeridi.
 * `aside` verilirse sağ kolonda (ör. hızlı iletişim) gösterilir.
 */
export function PageIntro({
  eyebrow,
  title,
  lead,
  breadcrumbs,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  lead?: ReactNode;
  breadcrumbs: { name: string; path: string }[];
  children?: ReactNode;
}) {
  return (
    <header className="on-ink relative overflow-hidden bg-ink text-on-ink">
      <div className="container-site pt-4 pb-section-sm lg:pt-6">
        <Breadcrumbs items={breadcrumbs} tone="dark" />
        <div className="mt-8 grid gap-8 lg:mt-12 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-8">
            <Eyebrow tone="dark">{eyebrow}</Eyebrow>
            <h1 className="mt-5 font-display text-h1">{title}</h1>
          </div>
          {lead && (
            <div className="lg:col-span-4 lg:self-end">
              <p className="text-lead text-on-ink-muted">{lead}</p>
              {children}
            </div>
          )}
        </div>
      </div>
      <RoadStrip />
    </header>
  );
}

/**
 * Akan yol şeridi: asfalt bant + ortada kesik beyaz çizgi + yolda giden eğitim aracı.
 * Araç soldan sağa geçer, tekerlekler döner (cihazın hareket ayarından bağımsız). Dekoratif.
 */
export function RoadStrip({ className = "", car = true }: { className?: string; car?: boolean }) {
  return (
    <div aria-hidden="true" className={`road relative h-10 bg-ink-2 ${className}`}>
      <div className="absolute inset-x-0 top-0 h-1 bg-accent" />
      <div className="road-flow absolute inset-x-0 top-1/2 h-[3px] -translate-y-1/2 opacity-70" />
      <div className="absolute inset-x-0 bottom-0 h-1 bg-accent" />
      {car && (
        <div className="car-drive pointer-events-none absolute bottom-1 left-0">
          <TrainingCar className="car-bob block h-auto w-[150px] sm:w-[200px] lg:w-[236px]" />
        </div>
      )}
    </div>
  );
}
