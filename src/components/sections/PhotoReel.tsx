import { Eyebrow } from "@/components/ui/Typography";
import { Photo } from "@/components/ui/Photo";
import type { MediaKey } from "@/content/media";

/**
 * Kurstan kareler: beton (surface-2) zeminde; konum bölümü asfalt olduğu için arka arkaya iki koyu bölüm olmasın diye.
 * Akış: yavaş akan fotoğraf şeridi. Kartlar kesik köşeli (levha dili),
 * altında asfalt şerit + kısa etiket (açık zeminde ince sarı çizgi yasak). JS yok:
 *  - Durdur/oynat: gizli checkbox + :has() (WCAG 2.2.2 — hareket durdurulabilir). Hover'da da durur.
 *  - Hareket, cihazın "hareketi azalt" ayarından bağımsız oynar (bkz. globals.css); durdurma düğmesi her zaman var.
 * Döngü için satır iki kez basılır; ikinci kopya aria-hidden.
 */
const frames: { name: MediaKey; label: string; wide?: boolean }[] = [
  { name: "hero", label: "Direksiyon başında", wide: true },
  { name: "classroom", label: "Teorik derslik" },
  { name: "classB", label: "Eğitim aracı" },
  { name: "classMoto", label: "Motosiklet eğitim alanı", wide: true },
  { name: "mirror", label: "Ayna kontrolü" },
  { name: "facade", label: "Kurum girişi" },
  { name: "gear", label: "Otomatik vites" },
];

function Row({ duplicate = false }: { duplicate?: boolean }) {
  return (
    <ul
      className="flex shrink-0 gap-4 pr-4 sm:gap-5 sm:pr-5"
      {...(duplicate ? { "aria-hidden": true, "data-dup": "" } : {})}
    >
      {frames.map((f) => (
        <li key={f.name} className="shrink-0">
          <figure>
            <div
              className={`cut-tr relative h-56 overflow-hidden rounded-hairline bg-ink-2 sm:h-72 lg:h-80 [--cut:28px] ${
                f.wide ? "aspect-[3/2]" : "aspect-[4/5]"
              }`}
            >
              <Photo name={f.name} fill sizes="(min-width: 1024px) 480px, (min-width: 640px) 432px, 336px" />
            </div>
            <figcaption className="mt-3 flex items-center gap-3 text-eyebrow text-graphite">
              <span aria-hidden="true" className="flex gap-1">
                <span className="h-1 w-4 bg-ink" />
                <span className="h-1 w-2 bg-ink" />
              </span>
              {f.label}
            </figcaption>
          </figure>
        </li>
      ))}
    </ul>
  );
}

export function PhotoReel({ number = "05" }: { number?: string }) {
  return (
    <section id="kareler" aria-labelledby="reel-title" className="reel overflow-hidden bg-surface-2 py-section-sm text-ink">
      <div className="container-site mb-10 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between lg:mb-12">
        <div>
          <Eyebrow number={number || undefined}>
            Kurstan kareler
          </Eyebrow>
          <h2 id="reel-title" className="mt-6 font-display text-h2">
            Derslikten direksiyona.
          </h2>
        </div>

        <label className="reel-toggle inline-flex min-h-11 cursor-pointer items-center gap-3 self-start rounded-control border-2 border-ink px-4 text-button text-ink transition-colors hover:bg-ink hover:text-on-ink sm:self-auto has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-3 has-[:focus-visible]:outline-ink">
          <input type="checkbox" aria-label="Fotoğraf akışını durdur" className="peer sr-only" />
          <span aria-hidden="true" className="flex gap-1 peer-checked:hidden">
            <span className="h-3.5 w-1 bg-current" />
            <span className="h-3.5 w-1 bg-current" />
          </span>
          <span aria-hidden="true" className="hidden size-0 border-y-[7px] border-l-[11px] border-y-transparent border-l-current peer-checked:block" />
          <span className="peer-checked:hidden">Akışı durdur</span>
          <span className="hidden peer-checked:inline">Akışı başlat</span>
        </label>
      </div>

      <div className="marquee reel-viewport">
        <div className="marquee-track [--marquee-duration:70s]">
          <Row />
          <Row duplicate />
        </div>
      </div>
    </section>
  );
}
