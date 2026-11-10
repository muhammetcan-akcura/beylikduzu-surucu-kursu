import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Icon } from "@/components/ui/Icon";
import { licenseClasses, getLicenseClass } from "@/content/license-classes";
import { pageMetadata } from "@/lib/metadata";
import { breadcrumbSchema, courseSchema, faqSchema } from "@/lib/schema";
import { JsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs, Eyebrow, RoadStrip } from "@/components/ui/Typography";
import { RichText } from "@/components/ui/RichText";
import { Photo } from "@/components/ui/Photo";
import { FaqList } from "@/components/sections/FaqList";
import { ClosingCta } from "@/components/sections/ClosingCta";
import { ButtonLink } from "@/components/ui/Button";
import { telHref, whatsappHref } from "@/config/site";

type Params = { slug: string };

export const dynamicParams = false;

export function generateStaticParams(): Params[] {
  return licenseClasses.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const c = getLicenseClass(slug);
  if (!c) return {};
  return pageMetadata({ title: c.metaTitle, description: c.metaDescription, path: `/ehliyet-siniflari/${c.slug}` });
}

export default async function LicenseClassPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const c = getLicenseClass(slug);
  if (!c) notFound();

  const crumbs = [
    { name: "Ana sayfa", path: "/" },
    { name: "Ehliyet Sınıfları", path: "/ehliyet-siniflari" },
    { name: c.name, path: `/ehliyet-siniflari/${c.slug}` },
  ];
  const related = c.related.map(getLicenseClass).filter((r): r is NonNullable<typeof r> => Boolean(r));
  const waMessage = `Merhaba, ${c.name} eğitimi hakkında bilgi almak istiyorum.`;

  return (
    <>
      <header className="on-ink relative overflow-hidden bg-ink text-on-ink">
        {/* Dev sınıf kodu: sarı, sağa yaslı, kısmen taşan (dekoratif) */}
        <p
          aria-hidden="true"
          className="pointer-events-none absolute top-[54%] right-[var(--spacing-gutter)] -translate-y-1/2 font-display text-[clamp(12rem,6rem+20vw,26rem)] leading-[0.8] text-accent select-none max-lg:top-auto max-lg:-right-4 max-lg:bottom-6 max-lg:translate-y-0 max-lg:opacity-15"
        >
          {c.code}
        </p>
        <div className="container-site relative pt-4 pb-section-sm lg:pt-6">
          <Breadcrumbs items={crumbs} tone="dark" />
          <div className="mt-8 max-w-3xl lg:mt-12 lg:max-w-[52%]">
            <Eyebrow tone="dark">{c.vehicle}</Eyebrow>
            <h1 className="mt-5 font-display text-h1">{c.h1}</h1>
            <p className="mt-6 max-w-xl text-lead text-on-ink-muted">{c.lead}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href={telHref()} size="lg" icon="phone" trackLocation={`class-${c.slug}`}>
                Hemen ara
              </ButtonLink>
              <ButtonLink href={whatsappHref(waMessage)} variant="whatsapp" size="lg" trackLocation={`class-${c.slug}`}>
                WhatsApp
              </ButtonLink>
            </div>
          </div>

          <dl className="relative mt-12 grid grid-cols-2 gap-2 lg:mt-16 lg:max-w-[60%] lg:grid-cols-4">
            {c.facts.map((f) => (
              <div key={f.label} className="rounded-card border border-on-ink-muted/20 bg-ink-2/90 p-4 backdrop-blur-sm">
                <dt className="text-eyebrow text-on-ink-muted">{f.label}</dt>
                <dd className="mt-2 font-semibold">
                  <RichText text={f.value} />
                </dd>
              </div>
            ))}
          </dl>
        </div>
        <RoadStrip />
      </header>

      <section aria-labelledby="fit-title" className="container-site py-section-md">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="cut relative aspect-[4/3] overflow-hidden bg-ink [--cut:32px]">
              <Photo name={c.image} fill sizes="(min-width: 1024px) 40vw, 100vw" />
            </div>
          </div>
          <div className="lg:col-span-6 lg:col-start-7">
            <Eyebrow>Kimler için</Eyebrow>
            <h2 id="fit-title" className="mt-6 font-display text-h2">
              {c.name} kimlere uygun?
            </h2>
            <ul className="mt-8 border-t border-line-strong/60">
              {c.suitableFor.map((s) => (
                <li key={s} className="flex gap-4 border-b border-line-strong/60 py-4">
                  <Icon name="check" className="mt-1 size-5 shrink-0 text-accent-ink"/>
                  <span className="text-graphite">
                    <RichText text={s} />
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {c.sections.map((s, i) => (
        <section
          key={s.title}
          id={s.id}
          aria-labelledby={`sec-${i}`}
          className={i % 2 === 0 ? "bg-surface-2 py-section-md" : "py-section-md"}
        >
          <div className="container-site grid gap-8 lg:grid-cols-12">
            <div className="lg:col-span-4">
              {s.eyebrow && <Eyebrow>{s.eyebrow}</Eyebrow>}
              <h2 id={`sec-${i}`} className="mt-6 font-display text-h2">
                {s.title}
              </h2>
            </div>
            <div className="space-y-5 lg:col-span-7 lg:col-start-6">
              {s.paragraphs.map((p) => (
                <p key={p} className="max-w-prose text-graphite">
                  <RichText text={p} />
                </p>
              ))}
              {s.bullets && (
                <ul className="mt-6 border-t border-ink">
                  {s.bullets.map((b) => (
                    <li key={b} className="border-b border-line-strong/60 py-4 text-ink">
                      <RichText text={b} />
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </section>
      ))}

      <section aria-labelledby="docs-title" className="container-site py-section-md">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Eyebrow>Belgeler</Eyebrow>
            <h2 id="docs-title" className="mt-6 font-display text-h2">
              Kayıt için gerekenler
            </h2>
            <p className="mt-4 text-small text-muted">
              Liste genel bilgidir; güncel listeyi kayıtta yazılı olarak veriyoruz. <RichText text="[DOĞRULA: MEB / güncel belge listesi]" />
            </p>
          </div>
          <ol className="lg:col-span-7 lg:col-start-6">
            {c.documents.map((d, i) => (
              <li key={d} className="flex gap-5 border-b border-line-strong/60 py-5 first:border-t first:border-t-ink">
                <span className="font-display text-caption tabular-nums text-accent-ink">0{i + 1}</span>
                <span>
                  <RichText text={d} />
                </span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section aria-labelledby="class-faq-title" className="bg-surface-2 py-section-md">
        <div className="container-site grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Eyebrow>Sorular</Eyebrow>
            <h2 id="class-faq-title" className="mt-6 font-display text-h2">
              {c.code} sınıfı hakkında sık sorulanlar
            </h2>
          </div>
          <div className="lg:col-span-8">
            <FaqList items={c.faqs} />
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <nav aria-labelledby="related-title" className="container-site py-section-sm">
          <h2 id="related-title" className="text-eyebrow text-ink">
            İlgili sınıflar
          </h2>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {related.map((r) => (
              <li key={r.slug}>
                <Link href={`/ehliyet-siniflari/${r.slug}`} className="group flex items-center justify-between gap-6 rounded-card bg-ink p-5 text-on-ink transition-colors hover:bg-accent hover:text-ink sm:p-6">
                  <span className="flex items-baseline gap-5">
                    <span className="font-display text-[3.5rem] leading-[0.8] text-accent group-hover:text-ink">{r.code}</span>
                    <span>
                      <span className="block text-h3 font-semibold">{r.name}</span>
                      <span className="text-small text-on-ink-muted group-hover:text-ink">{r.vehicle}</span>
                    </span>
                  </span>
                  <Icon name="arrow-up-right" className="size-6 shrink-0 text-on-ink-muted group-hover:text-ink"/>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}

      <ClosingCta number="" title={`${c.code} sınıfı için ilk adım.`} defaultClass={c.code} />

      <JsonLd data={[breadcrumbSchema(crumbs), courseSchema(c), faqSchema(c.faqs)]} />
    </>
  );
}
