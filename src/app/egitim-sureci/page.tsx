import { pageMetadata } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/schema";
import { processSteps } from "@/content/process";
import { JsonLd } from "@/components/seo/JsonLd";
import { PageIntro } from "@/components/ui/Typography";
import { RichText } from "@/components/ui/RichText";
import { Icon } from "@/components/ui/Icon";
import { ClosingCta } from "@/components/sections/ClosingCta";

const crumbs = [
  { name: "Ana sayfa", path: "/" },
  { name: "Eğitim Süreci", path: "/egitim-sureci" },
];

export const metadata = pageMetadata({
  title: "Ehliyet Eğitim Süreci",
  description:
    "Kayıttan sürücü belgesine ehliyet süreci adım adım: belgeler, teorik eğitim, e-Sınav, direksiyon eğitimi ve sınavı. Beylikdüzü'nde süreci birlikte planlayalım.",
  path: "/egitim-sureci",
});

export default function ProcessPage() {
  return (
    <>
      <PageIntro
        eyebrow="Eğitim süreci"
        title="Kayıttan belgeye, adım adım."
        lead="Ehliyet sürecinin en zor yanı belirsizlik. Burada her adımda ne olacağını, sizin ne yapacağınızı ve bizim ne yapacağımızı yazdık."
        breadcrumbs={crumbs}
      />

      {/* Adım dizini (sayfa içi gezinme) */}
      <nav aria-label="Adımlar" className="container-site pt-section-sm">
        <ol className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-6">
          {processSteps.map((s) => (
            <li key={s.number}>
              <a href={`#adim-${s.number}`} className="flex h-full min-h-16 items-center gap-3 rounded-card bg-surface-2 px-3 py-3 transition-colors hover:bg-accent">
                <span className="grid size-9 shrink-0 place-items-center rounded-[3px] bg-ink font-display text-[1.125rem] leading-none text-accent">{s.number}</span>
                {/* U+2011: "(e-Sınav)" tireden kırılmasın */}
                <span className="text-small leading-tight font-semibold">{s.title.replace("-", "‑")}</span>
              </a>
            </li>
          ))}
        </ol>
      </nav>

      <div className="container-site py-section-md">
        <ol className="relative">
          <span aria-hidden="true" className="absolute top-2 bottom-2 left-[0.5625rem] w-1.5 rounded-full bg-ink lg:left-[calc(25%+0.5625rem)]" />
          {processSteps.map((s) => (
            <li key={s.number} id={`adim-${s.number}`} className="relative grid gap-6 pb-section-sm last:pb-0 lg:grid-cols-12 lg:gap-10">
              {/* Sol sütun boş kalmasın: numara + adımın kısa özeti, adım boyunca yapışık */}
              <div className="hidden lg:col-span-3 lg:block">
                <div className="sticky top-32 pr-8">
                  <p aria-hidden="true" className="text-outline font-display text-[7rem] leading-[0.8] tabular-nums">{s.number}</p>
                  <p className="mt-5 text-small font-semibold text-graphite">{s.short}</p>
                </div>
              </div>
              <span aria-hidden="true" className="absolute top-1.5 left-0 grid size-6 place-items-center rounded-full border-2 border-ink bg-ink lg:left-[25%]">
                <span className="size-2 rounded-full bg-accent" />
              </span>
              <div className="pl-12 lg:col-span-8 lg:col-start-4 lg:pl-14">
                <p className="font-display text-[1.25rem] tabular-nums text-accent-ink lg:hidden">{s.number}</p>
                <h2 className="font-display text-h2">{s.title}</h2>
                <div className="mt-5 max-w-prose space-y-4 text-graphite">
                  {s.detail.map((d) => (
                    <p key={d}>
                      <RichText text={d} />
                    </p>
                  ))}
                </div>
                {/* Siz / Biz: iki renkli kart (sarı = sizin adımınız, asfalt = bizim işimiz) */}
                <dl className="mt-8 grid gap-3 sm:grid-cols-2">
                  <div className="on-accent rounded-card bg-accent p-5 text-ink">
                    <dt className="flex items-center gap-2 text-eyebrow">
                      <Icon name="check" className="size-4" />
                      Siz
                    </dt>
                    <dd className="mt-3 font-medium">{s.youDo}</dd>
                  </div>
                  <div className="on-ink rounded-card bg-ink p-5 text-on-ink">
                    <dt className="flex items-center gap-2 text-eyebrow text-accent">
                      <Icon name="steering-wheel" className="size-4" />
                      Biz
                    </dt>
                    <dd className="mt-3 font-medium">{s.weDo}</dd>
                  </div>
                </dl>
                {s.duration && (
                  <p className="mt-4 inline-flex items-center gap-2 rounded-control bg-surface-2 px-3 py-2 text-small font-semibold text-ink">
                    <Icon name="clock" className="size-4" />
                    Süre: <RichText text={s.duration} />
                  </p>
                )}
              </div>
            </li>
          ))}
        </ol>
      </div>

      <ClosingCta number="" title="İlk adım bir telefon." />
      <JsonLd data={breadcrumbSchema(crumbs)} />
    </>
  );
}
