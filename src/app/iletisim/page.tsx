import { Icon } from "@/components/ui/Icon";
import { pageMetadata } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/schema";
import { site, fullAddress, telHref, whatsappHref } from "@/config/site";
import { JsonLd } from "@/components/seo/JsonLd";
import { PageIntro, Eyebrow } from "@/components/ui/Typography";
import { ButtonLink } from "@/components/ui/Button";
import { ApplicationForm } from "@/components/forms/ApplicationForm";
import { LocationSection } from "@/components/sections/LocationSection";

const crumbs = [
  { name: "Ana sayfa", path: "/" },
  { name: "İletişim", path: "/iletisim" },
];

export const metadata = pageMetadata({
  title: "İletişim ve Başvuru",
  description:
    "Beylik Sürücü Kursu iletişim: Cumhuriyet Mahallesi, Beylikdüzü. Her gün 09.00–18.00 açığız. Telefon, WhatsApp veya kısa başvuru formuyla bize hemen ulaşın.",
  path: "/iletisim",
});

// Beylikdüzü'nün mahalleleri — kullanıcı "tüm mahallelere hizmet" dedi. Sayfa üretilmez, yalnızca doğal metin.
const neighborhoods = [
  "Adnan Kahveci",
  "Barış",
  "Büyükşehir",
  "Cumhuriyet",
  "Dereağzı",
  "Gürpınar",
  "Kavaklı",
  "Marmara",
  "Sahil",
  "Yakuplu",
];

export default function ContactPage() {
  const rows = [
    { icon: "phone" as const, label: "Telefon", value: site.phone.display, href: telHref() },
    { icon: "mail" as const, label: "E-posta", value: site.email, href: `mailto:${site.email}` },
    { icon: "clock" as const, label: "Çalışma saatleri", value: site.openingHoursLabel },
    { icon: "map-pin" as const, label: "Adres", value: fullAddress(), demo: site.address.isDemo },
  ];

  return (
    <>
      <PageIntro
        eyebrow="İletişim"
        title="Arayın, yazın ya da uğrayın."
        lead="En hızlı yol telefon. Mesai dışında WhatsApp'tan yazabilir ya da formu doldurabilirsiniz; çalışma saatleri içinde dönüş yapıyoruz."
        breadcrumbs={crumbs}
      />

      <section aria-labelledby="contact-title" className="container-site pt-section-sm pb-section-md">
        <h2 id="contact-title" className="sr-only">
          İletişim bilgileri
        </h2>
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-5">
            {/* Kartlar: kılcal çizgili satır listesi yerine */}
            <dl className="grid gap-3">
              {rows.map((r) => (
                <div key={r.label} className="flex items-start gap-4 rounded-card bg-surface-2 p-5">
                  <span aria-hidden="true" className="grid size-11 shrink-0 place-items-center rounded-control bg-ink text-on-ink [--icon-accent:var(--color-accent)]">
                    <Icon name={r.icon} className="size-5" />
                  </span>
                  <div className="min-w-0">
                    <dt className="text-eyebrow text-muted">{r.label}</dt>
                    <dd className="mt-1">
                      {r.href ? (
                        <a
                          href={r.href}
                          data-track-location="contact"
                          className={`inline-flex min-h-11 items-center break-all text-ink underline decoration-line-strong underline-offset-4 hover:decoration-ink ${
                            r.icon === "phone" ? "font-display text-[2rem] leading-none tabular-nums no-underline hover:underline" : "font-semibold"
                          }`}
                        >
                          {r.value}
                        </a>
                      ) : (
                        <span className="text-ink">{r.value}</span>
                      )}
                      {r.demo && <span className="verify ml-1">DEMO adres</span>}
                    </dd>
                  </div>
                </div>
              ))}
            </dl>
            {/* Mobilde gizli: alttaki sabit Ara/WhatsApp çubuğu (StickyCta, lg:hidden) aynı işi görüyor */}
            <div className="mt-8 hidden flex-wrap gap-3 lg:flex">
              <ButtonLink href={telHref()} size="lg" trackLocation="contact" icon="phone">
                Hemen ara
              </ButtonLink>
              <ButtonLink href={whatsappHref()} variant="whatsapp" size="lg" trackLocation="contact">
                WhatsApp
              </ButtonLink>
            </div>
          </div>

          <div id="basvuru" className="scroll-mt-28 lg:col-span-6 lg:col-start-7">
            <div className="rounded-hairline border border-line bg-raised p-6 sm:p-10">
              <Eyebrow>Başvuru formu</Eyebrow>
              <h2 className="mt-4 font-display text-h2">Sizi arayalım</h2>
              <p className="mt-3 mb-8 text-small text-muted">Bilgilerinizi bırakın, çalışma saatleri içinde dönüş yapalım.</p>
              <ApplicationForm />
            </div>
          </div>
        </div>
      </section>

      <LocationSection
        number=""
        title="Bize nasıl ulaşırsınız?"
        showDetails={false}
        aside={
          <div className="rounded-card bg-ink-2 p-6">
            <h3 className="text-eyebrow text-on-ink-muted">Hizmet bölgesi</h3>
            <p className="mt-3 text-on-ink">
              {site.address.district}&apos;nün tüm mahallelerinden başvuru alıyoruz: {neighborhoods.join(", ")}. Ders saatlerini
              ulaşımınızı düşünerek planlıyoruz.
            </p>
          </div>
        }
      />

      <JsonLd data={breadcrumbSchema(crumbs)} />
    </>
  );
}
