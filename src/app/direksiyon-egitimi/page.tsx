import { pageMetadata } from "@/lib/metadata";
import { breadcrumbSchema, faqSchema } from "@/lib/schema";
import { JsonLd } from "@/components/seo/JsonLd";
import { PageIntro, Eyebrow } from "@/components/ui/Typography";
import { Photo } from "@/components/ui/Photo";
import { RichText } from "@/components/ui/RichText";
import { FaqList } from "@/components/sections/FaqList";
import { FleetSection } from "@/components/sections/FleetSection";
import { ClosingCta } from "@/components/sections/ClosingCta";

const crumbs = [
  { name: "Ana sayfa", path: "/" },
  { name: "Direksiyon Eğitimi", path: "/direksiyon-egitimi" },
];

export const metadata = pageMetadata({
  title: "Direksiyon Eğitimi",
  description:
    "Beylikdüzü'nde direksiyon eğitimi: önce trafiğe kapalı eğitim alanında, sonra gerçek trafikte. Manuel ve otomatik vitesli Hyundai araçlarla adım adım ilerleyin.",
  path: "/direksiyon-egitimi",
});

const stages = [
  {
    label: "Eğitim alanı",
    title: "Önce sakin bir alan",
    text: "Koltuk ve ayna ayarı, kalkış, durma, vites geçişleri, geri manevra ve park. Trafik baskısı olmadan, aracın tepkilerini tanıyarak.",
  },
  {
    label: "Sakin trafik",
    title: "Sonra mahalle içi yollar",
    text: "Düşük hızlı site ve mahalle yollarında kavşak, yaya geçidi, sağa–sola dönüş ve şerit takibi.",
  },
  {
    label: "Yoğun trafik",
    title: "En son ana arterler",
    text: "Beylikdüzü'nün geniş bulvarlarında şerit değiştirme, birleşme, takip mesafesi ve öngörülü sürüş.",
  },
  {
    label: "Sınav provası",
    title: "Sınav koşullarında tekrar",
    text: "Sınavda değerlendirilen davranışlar üzerinden prova. [DOĞRULA: sınav güzergâhı/alanı uygulaması]",
  },
];

const faqs = [
  {
    q: "İlk derste hemen trafiğe mi çıkacağım?",
    a: "Hayır. İlk dersler trafiğe kapalı eğitim alanında yapılıyor. Trafiğe temel kontrol oturduğunda çıkıyoruz.",
  },
  {
    q: "Kaç saat direksiyon dersi alacağım?",
    a: "Asgari direksiyon ders saati mevzuatla belirlenir. [DOĞRULA: MEB asgari ders saati] İhtiyaç halinde ek ders planlanabilir.",
  },
  {
    q: "Derslere hangi saatlerde gelebilirim?",
    a: "Kurumumuz haftanın 7 günü 09.00–18.00 arasında açık. Ders saatlerini programınıza göre birlikte belirliyoruz.",
  },
  {
    q: "Heyecanlanırsam ne olur?",
    a: "İlk derslerde heyecanlanmak çok yaygın. Bu yüzden trafikten uzak bir alanda başlıyor, aracın tepkilerini tanıdıkça ilerliyoruz.",
  },
];

export default function SteeringPage() {
  return (
    <>
      <PageIntro
        eyebrow="Direksiyon eğitimi"
        title="Önce alan, sonra trafik."
        lead="Direksiyon eğitimini dört aşamada kuruyoruz. Bir sonraki aşamaya, bir öncekinde rahatladığınızda geçiyoruz."
        breadcrumbs={crumbs}
      />

      <div className="container-site">
        <div className="relative aspect-[4/3] overflow-hidden rounded-hairline sm:aspect-[21/9]">
          <Photo name="hero" fill sizes="(min-width: 1280px) 1280px, 100vw" />
        </div>
      </div>

      <section id="asamalar" aria-labelledby="stages-title" className="container-site py-section-md">
        <Eyebrow>Aşamalar</Eyebrow>
        <h2 id="stages-title" className="mt-5 max-w-2xl font-display text-h2">
          Dört aşamada güvenli bir başlangıç
        </h2>
        <ol className="mt-12 grid gap-px border-y border-ink bg-line md:grid-cols-2 lg:grid-cols-4">
          {stages.map((s, i) => (
            <li key={s.label} className="reveal bg-surface p-6 lg:p-8">
              <p className="flex items-center gap-3 text-eyebrow uppercase text-accent-ink">
                <span className="font-display text-caption tracking-normal text-ink tabular-nums">0{i + 1}</span>
                {s.label}
              </p>
              <h3 className="mt-6 text-h3">{s.title}</h3>
              <p className="mt-3 text-small text-graphite">
                <RichText text={s.text} />
              </p>
            </li>
          ))}
        </ol>
      </section>

      <section id="ilk-ders" aria-labelledby="first-lesson-title" className="bg-surface-2 py-section-md">
        <div className="container-site grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Eyebrow>İlk ders</Eyebrow>
            <h2 id="first-lesson-title" className="mt-5 font-display text-h2">
              İlk derse gelmeden önce
            </h2>
          </div>
          <ul className="lg:col-span-6 lg:col-start-7">
            {[
              "Rahat, ince tabanlı ayakkabı giyin. Topuklu, kalın tabanlı ayakkabı ve terlik pedal hissini azaltır.",
              "Gözlük ya da lens kullanıyorsanız yanınızda olsun.",
              "Kimliğinizi yanınıza alın.",
              "Ders saatinden birkaç dakika önce gelin; aceleyle başlamayalım.",
            ].map((t, i) => (
              <li key={t} className="flex gap-5 border-b border-line-strong/60 py-5 first:border-t first:border-t-ink">
                <span className="font-display text-caption tabular-nums text-accent-ink">0{i + 1}</span>
                <span className="text-graphite">{t}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <FleetSection number="" />

      <section aria-labelledby="steer-faq-title" className="bg-surface-2 py-section-md">
        <div className="container-site grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Eyebrow>Sorular</Eyebrow>
            <h2 id="steer-faq-title" className="mt-5 font-display text-h2">
              Direksiyon dersleri hakkında
            </h2>
          </div>
          <div className="lg:col-span-8">
            <FaqList items={faqs} />
          </div>
        </div>
      </section>

      <ClosingCta number="" title="Direksiyona ne zaman başlayabilirsiniz?" body="Programınızı ve tercih ettiğiniz vites tipini konuşalım; ders takvimini birlikte çıkaralım." />
      <JsonLd data={[breadcrumbSchema(crumbs), faqSchema(faqs)]} />
    </>
  );
}
