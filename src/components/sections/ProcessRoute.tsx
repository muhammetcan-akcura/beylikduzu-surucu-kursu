import Link from "next/link";
import { Icon } from "@/components/ui/Icon";
import { processSteps } from "@/content/process";
import { Eyebrow } from "@/components/ui/Typography";
import { RichText } from "@/components/ui/RichText";

/**
 * Süreç: sarı zemin üzerinde asfalt bir yol; her adım yolun üstünde bir "kilometre taşı".
 * Masaüstünde yol yatay, mobilde dikey akar.
 */
export function ProcessRoute({ number = "03", showLink = true }: { number?: string; showLink?: boolean }) {
  return (
    <section id="surec" aria-labelledby="process-title" className="on-accent relative overflow-hidden bg-accent py-section-md text-ink">
      <div className="container-site">
        <div className="grid gap-6 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-7">
            <Eyebrow number={number} tone="accent">
              Eğitim süreci
            </Eyebrow>
            <h2 id="process-title" className="mt-6 font-display text-h2">
              Kayıttan belgeye altı durak.
            </h2>
          </div>
          <p className="text-lead lg:col-span-5 lg:self-end">
            Her durakta ne yapacağınızı ve bizim ne yapacağımızı önceden biliyorsunuz. Süreler resmi takvime ve sizin
            programınıza göre değişir.
          </p>
        </div>

        <ol className="relative mt-12 grid lg:mt-16 lg:grid-cols-6 lg:gap-4">
          {/* Yol: mobilde dikey, masaüstünde yatay asfalt bant + kesik beyaz orta çizgi */}
          <span aria-hidden="true" className="absolute top-0 bottom-0 left-0 w-10 rounded-[3px] bg-ink lg:right-0 lg:bottom-auto lg:h-10 lg:w-auto">
            <span className="absolute inset-y-3 left-1/2 w-[3px] -translate-x-1/2 bg-[repeating-linear-gradient(to_bottom,var(--color-on-ink)_0_18px,transparent_18px_34px)] lg:inset-x-3 lg:inset-y-auto lg:top-1/2 lg:left-auto lg:h-[3px] lg:w-auto lg:translate-x-0 lg:-translate-y-1/2 lg:bg-[repeating-linear-gradient(to_right,var(--color-on-ink)_0_28px,transparent_28px_52px)]" />
          </span>

          {processSteps.map((s) => (
            <li key={s.number} className="reveal relative pb-10 pl-16 last:pb-0 lg:pt-16 lg:pb-0 lg:pl-0">
              {/* Kilometre taşı */}
              <span
                aria-hidden="true"
                className="absolute top-0 left-0 grid h-10 w-10 place-items-center rounded-[3px] bg-ink font-display text-[1.25rem] leading-none text-accent ring-4 ring-accent lg:left-4 lg:w-12"
              >
                {s.number}
              </span>
              <h3 className="font-display text-[1.625rem] leading-[0.95]">{s.title}</h3>
              <p className="mt-3 text-small">
                <RichText text={s.short} />
              </p>
            </li>
          ))}
        </ol>

        {showLink && (
          <div className="mt-14 flex flex-wrap items-center gap-4 border-t-2 border-ink pt-8">
            <Link
              href="/egitim-sureci"
              className="group inline-flex min-h-12 items-center gap-3 rounded-control bg-ink px-5 text-button text-on-ink transition-transform hover:-translate-y-0.5"
            >
              Süreci ayrıntılı okuyun
              <Icon name="arrow-right" className="size-4 transition-transform group-hover:translate-x-1"/>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
