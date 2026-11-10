import type { ReactNode } from "react";
import { Icon, type IconName } from "@/components/ui/Icon";
import { site, fullAddress, mapsDirectionsHref, mapsEmbedSrc, telHref } from "@/config/site";
import { Eyebrow, RoadStrip } from "@/components/ui/Typography";
import { MapEmbed } from "@/components/consent/MapEmbed";
import { ButtonLink } from "@/components/ui/Button";
import { RichText } from "@/components/ui/RichText";

export const transitNotes: { icon: IconName; label: string; text: string }[] = [
  { icon: "metrobus", label: "Metrobüs", text: "En yakın durak ve yürüme süresi [DOĞRULA: durak adı]" },
  { icon: "bus", label: "Otobüs", text: "Kuruma yakın duraktan geçen hatlar [DOĞRULA: hat numaraları]" },
  { icon: "parking", label: "Otopark", text: "Kurum önü / yakın otopark durumu [DOĞRULA]" },
];

/**
 * Konum ve ulaşım: asfalt zemin, sarı ofset bloklu kesik köşeli harita (WhyUs fotoğrafıyla aynı dil),
 * "levha" bilgi satırları, altta üç ulaşım kartı ve bölümü kapatan yol şeridi.
 * `showDetails={false}`: adres/telefon sayfada zaten varsa (iletişim) yalnızca harita + ulaşım.
 */
export function LocationSection({
  number = "05",
  headingLevel = "h2",
  title,
  showDetails = true,
  aside,
}: {
  number?: string;
  headingLevel?: "h2" | "h3";
  title?: ReactNode;
  showDetails?: boolean;
  aside?: ReactNode;
}) {
  const visibleTransit = transitNotes.filter((t) => !t.text.includes("[DOĞRULA"));
  const H = headingLevel;
  const Sub = headingLevel === "h2" ? "h3" : "h4";

  const details: { icon: IconName; label: string; value: ReactNode }[] = [
    {
      icon: "map-pin",
      label: "Adres",
      value: (
        <>
          {fullAddress()}
          {site.address.isDemo && <span className="verify ml-1">DEMO adres</span>}
        </>
      ),
    },
    { icon: "clock", label: "Çalışma saatleri", value: site.openingHoursLabel },
    {
      icon: "phone",
      label: "Telefon",
      value: (
        <a
          href={telHref()}
          data-track-location="location"
          className="inline-flex min-h-11 items-center font-display text-[2rem] leading-none text-accent tabular-nums underline-offset-[6px] hover:underline"
        >
          {site.phone.display}
        </a>
      ),
    },
  ];

  return (
    <section id="konum" aria-labelledby="location-title" className="on-ink relative overflow-hidden bg-ink text-on-ink">
      <div className="container-site py-section-md">
        <div className="grid gap-6 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-7">
            <Eyebrow number={number} tone="dark">
              Konum ve ulaşım
            </Eyebrow>
            <H id="location-title" className="mt-6 font-display text-h2">
              {title ?? (
                <>
                  {site.address.neighborhood},
                  <br />
                  <span className="text-accent">{site.address.district}.</span>
                </>
              )}
            </H>
          </div>
          <p className="text-lead text-on-ink-muted lg:col-span-5 lg:self-end">
            Gelmeden önce arayabilir ya da haritadan doğrudan yol tarifi alabilirsiniz.
          </p>
        </div>

        <div className="mt-12 grid gap-12 lg:mt-16 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-7">
            <div className="relative">
              <span aria-hidden="true" className="cut absolute inset-0 translate-x-3 translate-y-3 bg-accent [--cut:36px] sm:translate-x-4 sm:translate-y-4" />
              <div className="relative">
                <MapEmbed
                  src={mapsEmbedSrc()}
                  title={`${site.brandName} konumu, Google Haritalar`}
                  address={fullAddress()}
                />
              </div>
            </div>
            {site.geo?.isDemo && (
              <p className="mt-8 text-caption text-on-ink-muted">
                <span className="verify">DEMO konum</span> Harita noktası yaklaşık değerdir; gerçek koordinat girilecek.
              </p>
            )}
          </div>

          <div className="flex flex-col lg:col-span-5">
            {showDetails && (
              <dl className="space-y-3">
                {details.map((d) => (
                  <div key={d.label} className="flex items-start gap-4 rounded-card bg-ink-2 p-5">
                    <span aria-hidden="true" className="grid size-11 shrink-0 place-items-center rounded-control bg-accent text-ink">
                      <Icon name={d.icon} className="size-5" />
                    </span>
                    <div className="min-w-0">
                      <dt className="text-eyebrow text-on-ink-muted">{d.label}</dt>
                      <dd className="mt-1.5 font-medium text-on-ink">{d.value}</dd>
                    </div>
                  </div>
                ))}
              </dl>
            )}
            {aside}
            <ButtonLink
              href={mapsDirectionsHref()}
              size="lg"
              className={`self-start ${showDetails || aside ? "mt-8" : ""}`}
              trackLocation="location"
              icon="directions"
              arrow
            >
              Yol tarifi al
            </ButtonLink>
          </div>
        </div>

        {/* Bilgisi gelmemiş (yalnızca [DOĞRULA]) ulaşım kartları gösterilmez: boş işletme alanı sitede görünmez. */}
        {visibleTransit.length > 0 && (
        <div className="mt-section-sm">
          <Sub className="font-display text-[1.75rem] leading-none">Nasıl gelinir</Sub>
          <ul className="mt-6 grid gap-3 sm:grid-cols-3">
            {visibleTransit.map((t) => (
              <li key={t.label} className="reveal rounded-card bg-ink-2 p-6">
                <span
                  aria-hidden="true"
                  className="grid size-12 place-items-center rounded-[3px] bg-ink text-on-ink ring-2 ring-accent [--icon-accent:var(--color-accent)]"
                >
                  <Icon name={t.icon} className="size-6" />
                </span>
                <p className="mt-6 font-display text-[1.625rem] leading-[0.95]">{t.label}</p>
                <p className="mt-2 text-small text-on-ink-muted">
                  <RichText text={t.text} />
                </p>
              </li>
            ))}
          </ul>
        </div>
        )}
      </div>
      <RoadStrip car={false} />
    </section>
  );
}
