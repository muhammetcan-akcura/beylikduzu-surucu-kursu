import { pageMetadata } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/schema";
import { processSteps } from "@/content/process";
import { JsonLd } from "@/components/seo/JsonLd";
import { PageIntro } from "@/components/ui/Typography";
import { RichText } from "@/components/ui/RichText";
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
      <nav aria-label="Adımlar" className="container-site pt-8">
        <ol className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-6">
          {processSteps.map((s) => (
            <li key={s.number}>
              <a href={`#adim-${s.number}`} className="flex h-full min-h-16 items-center gap-3 rounded-card bg-surface-2 px-3 py-3 transition-colors hover:bg-accent">
                <span className="grid size-9 shrink-0 place-items-center rounded-[3px] bg-ink font-display text-[1.125rem] leading-none text-accent">{s.number}</span>
                <span className="text-small leading-tight font-semibold">{s.title}</span>
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
              <div className="hidden lg:col-span-3 lg:block">
                <p aria-hidden="true" className="text-outline font-display text-[7rem] leading-[0.8] tabular-nums">{s.number}</p>
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
                <dl className="mt-8 grid gap-px border-y border-line bg-line sm:grid-cols-2">
                  <div className="bg-surface py-4 sm:pr-6">
                    <dt className="text-eyebrow uppercase text-muted">Siz</dt>
                    <dd className="mt-2 text-small">{s.youDo}</dd>
                  </div>
                  <div className="bg-surface py-4 sm:pl-6">
                    <dt className="text-eyebrow uppercase text-muted">Biz</dt>
                    <dd className="mt-2 text-small">{s.weDo}</dd>
                  </div>
                </dl>
                {s.duration && (
                  <p className="mt-4 text-caption text-muted">
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
