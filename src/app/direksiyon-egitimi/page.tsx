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
    text: "Sınavda değerlendirilen davranışlar üzerinden prova. Sınav rotası sınav sabahı kurayla belirlendiği için tek bir yolu ezberletmiyor, benzer koşullarda çalışıyoruz.",
  },
];

const faqs = [
  {
    q: "İlk derste hemen trafiğe mi çıkacağım?",
    a: "Hayır. İlk dersler trafiğe kapalı eğitim alanında yapılıyor. Trafiğe temel kontrol oturduğunda çıkıyoruz.",
  },
  {
    q: "Kaç saat direksiyon dersi alacağım?",
    a: "Eğitim alanında en az 2 saatten sonra, akan trafikte B sınıfında en az 14 saat, A1 ve A2 sınıflarında en az 12 saat ders alırsınız; bunun en az 2 saati gece yapılır. Günde en fazla 2 saat ders yapılabilir. Kendinizi hazır hissetmezseniz ek ders planlanabilir.",
  },
  {
    q: "Derslere hangi saatlerde gelebilirim?",
    a: "Direksiyon dersleri hafta içi 09.00–18.00 arasında yapılıyor. Bu aralıkta saatleri programınıza göre birlikte belirliyoruz. Yönetmelikteki zorunlu gece dersi için saati ayrıca, esnek olarak ayarlıyoruz. Ofisimiz her gün 09.00–18.00 açık.",
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

      <div className="container-site pt-section-sm">
        <div className="relative aspect-[4/3] overflow-hidden rounded-hairline sm:aspect-[21/9]">
          <Photo name="hero" fill sizes="(min-width: 1280px) 1280px, 100vw" />
        </div>
      </div>

      <section id="asamalar" aria-labelledby="stages-title" className="container-site py-section-md">
        <Eyebrow>Aşamalar</Eyebrow>
        <h2 id="stages-title" className="mt-5 max-w-2xl font-display text-h2">
          Dört aşamada güvenli bir başlangıç
        </h2>
        {/* Kilometre taşı kartları; aralarındaki kesik şerit aşamaların sırasını gösterir */}
        <ol className="mt-12 grid gap-3 md:grid-cols-2 lg:grid-cols-4">
          {stages.map((s, i) => (
            <li key={s.label} className="reveal flex flex-col rounded-card bg-ink p-6 text-on-ink lg:p-7">
              <span aria-hidden="true" className="grid size-14 place-items-center rounded-control bg-accent font-display text-[1.75rem] leading-none text-ink tabular-nums">
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="mt-6 text-eyebrow text-accent">{s.label}</p>
              <h3 className="mt-2 text-h3">{s.title}</h3>
              <p className="mt-3 text-small text-on-ink-muted">
                <RichText text={s.text} />
              </p>
            </li>
          ))}
        </ol>
      </section>

      <section id="ilk-ders" aria-labelledby="first-lesson-title" className="on-accent bg-accent py-section-md text-ink">
        <div className="container-site grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Eyebrow tone="accent">İlk ders</Eyebrow>
            <h2 id="first-lesson-title" className="mt-5 font-display text-h2">
              İlk derse gelmeden önce
            </h2>
          </div>
          <ul className="grid gap-3 sm:grid-cols-2 lg:col-span-7 lg:col-start-6">
            {[
              "Rahat, ince tabanlı ayakkabı giyin. Topuklu, kalın tabanlı ayakkabı ve terlik pedal hissini azaltır.",
              "Gözlük ya da lens kullanıyorsanız yanınızda olsun.",
              "Kimliğinizi yanınıza alın.",
              "Ders saatinden birkaç dakika önce gelin; aceleyle başlamayalım.",
            ].map((t, i) => (
              <li key={t} className="reveal flex flex-col gap-4 rounded-card bg-surface p-5">
                <span aria-hidden="true" className="grid size-10 place-items-center rounded-control bg-ink font-display text-[1.25rem] leading-none text-accent tabular-nums">
                  {i + 1}
                </span>
                <span className="font-medium text-ink">{t}</span>
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
