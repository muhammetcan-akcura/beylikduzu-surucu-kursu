import { pageMetadata } from "@/lib/metadata";
import { breadcrumbSchema, faqSchema } from "@/lib/schema";
import { faqGroups, allFaqs } from "@/content/faq";
import { JsonLd } from "@/components/seo/JsonLd";
import { PageIntro } from "@/components/ui/Typography";
import { FaqList } from "@/components/sections/FaqList";
import { ClosingCta } from "@/components/sections/ClosingCta";

const crumbs = [
  { name: "Ana sayfa", path: "/" },
  { name: "Sık Sorulan Sorular", path: "/sik-sorulan-sorular" },
];

export const metadata = pageMetadata({
  title: "Sık Sorulan Sorular",
  description:
    "Ehliyet kursu hakkında sık sorulan sorular: kayıt belgeleri, eğitim süresi, manuel ve otomatik vites, sınavlar ve Beylikdüzü'ndeki kurumumuza ulaşım bilgileri.",
  path: "/sik-sorulan-sorular",
});

export default function FaqPage() {
  return (
    <>
      <PageIntro
        eyebrow="Sık sorulan sorular"
        title="Aklınızdaki sorular."
        lead="Burada cevabını bulamadığınız bir şey varsa arayın; telefonda kısa bir görüşmeyle netleştirelim."
        breadcrumbs={crumbs}
      />

      <div className="container-site grid gap-12 pt-section-sm pb-section-md lg:grid-cols-12">
        <nav aria-label="Konular" className="lg:col-span-3">
          <ul className="flex flex-wrap gap-2 lg:sticky lg:top-24 lg:flex-col lg:gap-0">
            {faqGroups.map((g) => (
              <li key={g.id}>
                <a
                  href={`#${g.id}`}
                  className="inline-flex min-h-11 items-center rounded-control border border-line-strong px-4 text-small font-medium hover:border-ink lg:rounded-none lg:border-0 lg:border-l-2 lg:border-line lg:px-4 lg:hover:border-accent"
                >
                  {g.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="space-y-section-sm lg:col-span-8 lg:col-start-5">
          {faqGroups.map((g) => (
            <section key={g.id} id={g.id} aria-labelledby={`${g.id}-title`}>
              <h2 id={`${g.id}-title`} className="mb-6 font-display text-h2">
                {g.title}
              </h2>
              <FaqList items={g.items} />
            </section>
          ))}
        </div>
      </div>

      <ClosingCta number="" title="Sorunuz burada yok mu?" body="Bize yazın ya da arayın. Formu doldurursanız çalışma saatleri içinde sizi arıyoruz." />
      <JsonLd data={[breadcrumbSchema(crumbs), faqSchema(allFaqs)]} />
    </>
  );
}
