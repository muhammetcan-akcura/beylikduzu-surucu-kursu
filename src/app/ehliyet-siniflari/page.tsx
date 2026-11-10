import Link from "next/link";
import { pageMetadata } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/schema";
import { licenseClasses } from "@/content/license-classes";
import { JsonLd } from "@/components/seo/JsonLd";
import { PageIntro, Eyebrow } from "@/components/ui/Typography";
import { ClassesSection } from "@/components/sections/ClassesSection";
import { ClosingCta } from "@/components/sections/ClosingCta";
import { RichText } from "@/components/ui/RichText";

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

      <section aria-labelledby="compare-title" className="container-site pb-section-md">
        <h2 id="compare-title" className="sr-only">
          Sınıf karşılaştırması
        </h2>
        <div className="-mx-[var(--spacing-gutter)] overflow-x-auto px-[var(--spacing-gutter)]">
          <table className="w-full min-w-[40rem] border-t border-ink text-left">
            <caption className="sr-only">Ehliyet sınıflarının araç, yaş ve eğitim aracı karşılaştırması</caption>
            <thead>
              <tr className="text-eyebrow uppercase text-muted">
                <th scope="col" className="py-4 pr-6 font-semibold">Sınıf</th>
                {licenseClasses[0]!.facts.map((f) => (
                  <th key={f.label} scope="col" className="py-4 pr-6 font-semibold">
                    {f.label}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {licenseClasses.map((c) => (
                <tr key={c.slug} className="border-t border-line-strong/60 align-top">
                  <th scope="row" className="py-5 pr-6">
                    <Link href={`/ehliyet-siniflari/${c.slug}`} className="font-display text-h3 font-medium underline decoration-line-strong underline-offset-4 hover:decoration-ink">
                      {c.code}
                    </Link>
                  </th>
                  {c.facts.map((f) => (
                    <td key={f.label} className="py-5 pr-6 text-small text-graphite">
                      <RichText text={f.value} />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-3 text-caption text-muted">Tablo sütunları B sınıfı başlıklarına göre; motosiklet sınıflarında ikinci sütun motor sınırını gösterir.</p>
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

      <section aria-labelledby="guide-title" className="container-site py-section-md">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Eyebrow>Kısa rehber</Eyebrow>
            <h2 id="guide-title" className="mt-5 font-display text-h2">
              Kararsızsanız buradan başlayın.
            </h2>
          </div>
          <ul className="grid gap-px bg-line sm:grid-cols-2 lg:col-span-8">
            {guide.map((g) => (
              <li key={g.q} className="bg-surface">
                <Link href={g.href} className="block h-full p-6 transition-colors hover:bg-raised sm:p-8">
                  <h3 className="font-display text-h3">“{g.q}”</h3>
                  <p className="mt-3 text-small text-graphite">{g.a}</p>
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
