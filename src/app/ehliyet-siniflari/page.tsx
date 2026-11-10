import Link from "next/link";
import { pageMetadata } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/schema";
import { licenseClasses } from "@/content/license-classes";
import { JsonLd } from "@/components/seo/JsonLd";
import { PageIntro, Eyebrow } from "@/components/ui/Typography";
import { ClassesSection } from "@/components/sections/ClassesSection";
import { ClosingCta } from "@/components/sections/ClosingCta";
import { RichText } from "@/components/ui/RichText";
import { Icon } from "@/components/ui/Icon";

/** Karşılaştırma sütunları: başlık + bu sütuna düşen bilgi etiketleri (license-classes.ts `facts.label`). */
const compareColumns = [
  { title: "Araç", labels: ["Araç"] },
  { title: "Motor sınırı", labels: ["Motor sınırı"] },
  { title: "Vites", labels: ["Vites"] },
  { title: "Yaş / şart", labels: ["Asgari yaş", "Şart"] },
  { title: "Eğitim aracı", labels: ["Eğitim aracı"] },
];

const crumbs = [
  { name: "Ana sayfa", path: "/" },
  { name: "Ehliyet Sınıfları", path: "/ehliyet-siniflari" },
];

export const metadata = pageMetadata({
  title: "Ehliyet Sınıfları",
  description:
    "Beylikdüzü'nde B, A1, A2 ve A sınıfı ehliyet eğitimi. Hangi sınıfın size uygun olduğunu araç tipi, yaş şartı ve vites seçeneğiyle karşılaştırarak öğrenin.",
  path: "/ehliyet-siniflari",
});

const guide = [
  { q: "Otomobil kullanacağım.", a: "B sınıfı. Yalnızca otomatik araç kullanacaksanız otomatik vites seçeneğine de bakın.", href: "/ehliyet-siniflari/b-sinifi" },
  { q: "Scooter ya da hafif motosiklet istiyorum.", a: "A1 sınıfı genellikle ilk adımdır.", href: "/ehliyet-siniflari/a1-sinifi" },
  { q: "Motosikleti her gün, işim için kullanacağım.", a: "A2 sınıfı orta güçteki motosikletleri kapsar.", href: "/ehliyet-siniflari/a2-sinifi" },
  { q: "Güç sınırı olmayan bir motosiklet istiyorum.", a: "A sınıfı. Yaş veya deneyim şartını birlikte kontrol edelim.", href: "/ehliyet-siniflari/a-sinifi" },
];

export default function ClassesHubPage() {
  return (
    <>
      <PageIntro
        eyebrow="Ehliyet sınıfları"
        title="Hangi ehliyet size uygun?"
        lead="Dört sınıfta eğitim veriyoruz. Aşağıdaki karşılaştırma bir başlangıç; kesin kararı kullanacağınız araca göre birlikte veriyoruz."
        breadcrumbs={crumbs}
      />

      <section aria-labelledby="compare-title" className="container-site pt-section-sm pb-section-md">
        <h2 id="compare-title" className="sr-only">
          Sınıf karşılaştırması
        </h2>
        {/* Mobil (<md): her sınıf bir kart; sınıfın kendi bilgi başlıklarıyla. */}
        <ul className="grid gap-3 md:hidden">
          {licenseClasses.map((c) => (
            <li key={c.slug} className="rounded-card bg-surface-2 p-5">
              <Link href={`/ehliyet-siniflari/${c.slug}`} className="group/cls flex items-center gap-4">
                <span className="grid h-12 min-w-12 shrink-0 place-items-center rounded-[3px] bg-ink px-2 font-display text-[1.5rem] leading-none text-accent">
                  {c.code}
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block font-semibold">{c.name}</span>
                  <span className="block text-small text-graphite">{c.vehicle}</span>
                </span>
                <Icon name="arrow-right" className="size-5 shrink-0 transition-transform group-hover/cls:translate-x-0.5" />
              </Link>
              <dl className="mt-4 grid gap-3 border-t border-line pt-4">
                {c.facts
                  .filter((f) => f.label !== "Araç")
                  .map((f) => (
                    <div key={f.label} className="grid grid-cols-[7.5rem_1fr] gap-3">
                      <dt className="text-caption font-semibold text-muted">{f.label}</dt>
                      <dd className="text-small text-ink">
                        <RichText text={f.value} />
                      </dd>
                    </div>
                  ))}
              </dl>
            </li>
          ))}
        </ul>

        {/* md+: tablo. Sütunlar etikete göre eşlenir (sınıfların bilgi sırası farklı); olmayan bilgi "—". */}
        <div className="hidden overflow-x-auto md:block">
          <table className="w-full min-w-[44rem] border-separate border-spacing-y-2 text-left">
            <caption className="sr-only">Ehliyet sınıflarının araç, motor sınırı, vites, yaş ve eğitim aracı karşılaştırması</caption>
            <thead>
              <tr className="text-eyebrow text-on-ink">
                <th scope="col" className="rounded-l-card bg-ink py-4 pr-6 pl-5 font-semibold">Sınıf</th>
                {compareColumns.map((col, ci) => (
                  <th
                    key={col.title}
                    scope="col"
                    className={`bg-ink py-4 pr-6 font-semibold ${ci === compareColumns.length - 1 ? "rounded-r-card" : ""}`}
                  >
                    {col.title}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {licenseClasses.map((c) => (
                <tr key={c.slug} className="align-top">
                  <th scope="row" className="rounded-l-card bg-surface-2 py-4 pr-6 pl-4">
                    <Link
                      href={`/ehliyet-siniflari/${c.slug}`}
                      aria-label={`${c.name} sayfası`}
                      className="grid h-14 min-w-14 place-items-center rounded-control bg-ink px-2 font-display text-[1.75rem] leading-none text-accent transition-colors hover:bg-accent hover:text-ink"
                    >
                      {c.code}
                    </Link>
                  </th>
                  {compareColumns.map((col, ci) => {
                    const value = c.facts.find((f) => col.labels.includes(f.label))?.value;
                    return (
                      <td
                        key={col.title}
                        className={`bg-surface-2 py-5 pr-6 text-small text-ink ${ci === compareColumns.length - 1 ? "rounded-r-card" : ""}`}
                      >
                        {value ? (
                          <RichText text={value} />
                        ) : (
                          <>
                            <span aria-hidden="true">—</span>
                            <span className="sr-only">Uygulanmaz</span>
                          </>
                        )}
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section aria-labelledby="list-title" className="bg-surface-2 py-section-md">
        <div className="container-site">
          <Eyebrow>Sınıflar</Eyebrow>
          <h2 id="list-title" className="mt-5 mb-12 font-display text-h2">
            Her sınıfın ayrıntısı
          </h2>
          <ClassesSection withIntro={false} headingLevel="h3" />
        </div>
      </section>

      <section aria-labelledby="guide-title" className="on-accent bg-accent py-section-md text-ink">
        {/* Başlık üstte, kartlar altta: "KARARSIZSANIZ" dar sütuna sığmıyordu */}
        <div className="container-site">
          <div>
            <Eyebrow tone="accent">Kısa rehber</Eyebrow>
            <h2 id="guide-title" className="mt-5 font-display text-h2">
              Kararsızsanız buradan başlayın.
            </h2>
          </div>
          <ul className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {guide.map((g) => (
              <li key={g.q}>
                <Link
                  href={g.href}
                  className="group flex h-full flex-col justify-between gap-6 rounded-card bg-ink p-6 text-on-ink transition-colors hover:bg-ink-2 sm:p-7"
                >
                  <span>
                    <h3 className="text-h3">“{g.q}”</h3>
                    <p className="mt-3 text-small text-on-ink-muted">{g.a}</p>
                  </span>
                  <Icon name="arrow-right" className="size-6 text-accent transition-transform group-hover:translate-x-1" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <ClosingCta number="" title="Sınıfı birlikte seçelim." />
      <JsonLd data={breadcrumbSchema(crumbs)} />
    </>
  );
}
