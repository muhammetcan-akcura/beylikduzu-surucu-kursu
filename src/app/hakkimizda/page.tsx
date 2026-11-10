import { pageMetadata } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/schema";
import { site } from "@/config/site";
import { JsonLd } from "@/components/seo/JsonLd";
import { PageIntro, Eyebrow } from "@/components/ui/Typography";
import { Photo } from "@/components/ui/Photo";
import { RichText } from "@/components/ui/RichText";
import { LocationSection } from "@/components/sections/LocationSection";
import { ClosingCta } from "@/components/sections/ClosingCta";

const crumbs = [
  { name: "Ana sayfa", path: "/" },
  { name: "Hakkımızda", path: "/hakkimizda" },
];

export const metadata = pageMetadata({
  title: "Hakkımızda",
  description:
    "Beylik Sürücü Kursu, 2000 yılından beri Beylikdüzü Cumhuriyet Mahallesi'nde ehliyet eğitimi veriyor. Yaklaşımımızı, eğitim ortamımızı ve ilkelerimizi tanıyın.",
  path: "/hakkimizda",
});

const principles = [
  { title: "Önce güven", text: "Öğrencinin kendini güvende hissetmediği bir derste öğrenme olmaz. Tempoyu öğrenciye göre ayarlıyoruz." },
  { title: "Net bilgi", text: "Süre, ücret ve belge konusunda telefonda net konuşuyoruz. Bilmediğimiz bir şeyi biliyormuş gibi söylemiyoruz." },
  { title: "Gerçek trafik", text: "Eğitim alanında öğrenilen beceriyi, Beylikdüzü'nün gerçek trafik koşullarında pekiştiriyoruz." },
];

export default function AboutPage() {
  return (
    <>
      <PageIntro
        eyebrow="Hakkımızda"
        title={`${site.foundingYear} yılından beri Beylikdüzü'nde.`}
        lead={`${site.brandName}, ${site.address.district} ${site.address.neighborhood}'nde ehliyet eğitimi veren bir sürücü kursu.`}
        breadcrumbs={crumbs}
      />

      <section aria-labelledby="story-title" className="container-site pb-section-md">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="relative aspect-[4/3] overflow-hidden rounded-hairline lg:col-span-7 lg:aspect-auto lg:min-h-[32rem]">
            <Photo name="facade" fill sizes="(min-width: 1024px) 58vw, 100vw" />
          </div>
          <div className="lg:col-span-4 lg:col-start-9 lg:self-end">
            <Eyebrow>Hikâyemiz</Eyebrow>
            <h2 id="story-title" className="mt-5 font-display text-h2">
              Aynı ilçede, aynı işi, yıllardır.
            </h2>
            <div className="mt-6 space-y-4 text-graphite">
              <p>
                {site.foundingYear} yılında {site.address.district}&apos;nde kapılarımızı açtık. O günden bu yana ilçe büyüdü,
                yollar değişti, sınav sistemi yenilendi; işimizin özü aynı kaldı: insanlara direksiyon başında kendine güvenmeyi
                öğretmek.
              </p>
              <p>
                <RichText text="[DOĞRULA: kurucu / yönetici adı, kuruluş hikâyesi, eğitmen sayısı ve MEB kurum izin bilgisi — işletmeden alınacak]" />
              </p>
            </div>
          </div>
        </div>
      </section>

      <section aria-labelledby="principles-title" className="on-ink bg-ink py-section-md text-on-ink">
        <div className="container-site">
          <Eyebrow tone="dark">İlkelerimiz</Eyebrow>
          <h2 id="principles-title" className="mt-5 max-w-2xl font-display text-h2">
            Nasıl çalışıyoruz?
          </h2>
          <ol className="mt-12 grid gap-10 md:grid-cols-3 md:gap-8">
            {principles.map((p, i) => (
              <li key={p.title} className="reveal border-t border-accent pt-6">
                <span className="font-display text-caption tabular-nums text-accent">0{i + 1}</span>
                <h3 className="mt-3 text-h3">{p.title}</h3>
                <p className="mt-3 text-small text-on-ink-muted">{p.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section id="ortam" aria-labelledby="space-title" className="container-site py-section-md">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Eyebrow>Eğitim ortamı</Eyebrow>
            <h2 id="space-title" className="mt-5 font-display text-h2">
              Derslik, eğitim alanı, araçlar
            </h2>
            <p className="mt-5 text-graphite">
              Teorik dersler kurumumuzun dersliğinde, direksiyon eğitimi önce trafiğe kapalı eğitim alanında, sonra trafikte
              yapılıyor. Eğitim araçlarımız Hyundai i10, i20 ve i30; manuel ve otomatik vites seçeneğiyle.
            </p>
          </div>
          <div className="relative aspect-[16/10] overflow-hidden rounded-hairline lg:col-span-8">
            <Photo name="classroom" fill sizes="(min-width: 1024px) 66vw, 100vw" />
          </div>
        </div>
      </section>

      <LocationSection number="" />
      <ClosingCta number="" />
      <JsonLd data={breadcrumbSchema(crumbs)} />
    </>
  );
}
