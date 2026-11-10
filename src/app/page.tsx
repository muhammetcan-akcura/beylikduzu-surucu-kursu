import Link from "next/link";
import { pageMetadata } from "@/lib/metadata";
import { site } from "@/config/site";
import { featuredFaqs } from "@/content/faq";
import { faqSchema } from "@/lib/schema";
import { JsonLd } from "@/components/seo/JsonLd";
import { Hero } from "@/components/sections/Hero";
import { ClassTicker } from "@/components/sections/ClassTicker";
import { ValueSection } from "@/components/sections/ValueSection";
import { ClassesSection } from "@/components/sections/ClassesSection";
import { ProcessRoute } from "@/components/sections/ProcessRoute";
import { WhyUs } from "@/components/sections/WhyUs";
import { PhotoReel } from "@/components/sections/PhotoReel";
import { LocationSection } from "@/components/sections/LocationSection";
import { FleetSection } from "@/components/sections/FleetSection";
import { FaqList } from "@/components/sections/FaqList";
import { ClosingCta } from "@/components/sections/ClosingCta";
import { Eyebrow } from "@/components/ui/Typography";

export const metadata = pageMetadata({
  absoluteTitle: `Beylikdüzü Sürücü Kursu ve Ehliyet Eğitimi | ${site.shortName}`,
  description:
    "Beylikdüzü Cumhuriyet Mahallesi'nde 2000'den beri B, A1, A2 ve A sınıfı ehliyet eğitimi. Manuel ve otomatik vitesli araçlar, her gün açık. Hemen arayın.",
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <Hero />
      <ClassTicker />
      <ValueSection />
      <ClassesSection />
      <ProcessRoute />
      <WhyUs />
      <PhotoReel number="05" />
      <LocationSection number="06" />
      <FleetSection number="07" />

      <section id="sss" aria-labelledby="faq-title" className="bg-surface-2 py-section-md">
        <div className="container-site grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Eyebrow number="08">Sık sorulanlar</Eyebrow>
            <h2 id="faq-title" className="mt-6 font-display text-h2">
              Başlamadan önce merak edilenler.
            </h2>
            <Link
              href="/sik-sorulan-sorular"
              className="mt-8 inline-flex min-h-12 items-center rounded-control bg-ink px-5 text-button text-on-ink hover:bg-ink-2"
            >
              Tüm soruları görün
            </Link>
          </div>
          <div className="lg:col-span-8">
            <FaqList items={featuredFaqs} />
          </div>
        </div>
      </section>

      <ClosingCta number="09" />
      <JsonLd data={faqSchema(featuredFaqs)} />
    </>
  );
}
