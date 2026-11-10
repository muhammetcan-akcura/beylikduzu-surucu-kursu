import { Icon, type IconName } from "@/components/ui/Icon";
import { home } from "@/content/home";
import { site, telHref, whatsappHref } from "@/config/site";
import { ButtonLink } from "@/components/ui/Button";
import { Eyebrow, RoadStrip } from "@/components/ui/Typography";
import { HeroRoute } from "./HeroRoute";
import { InlineArrowLabel } from "@/components/ui/InlineArrowLabel";

/**
 * "Rota" hero: başlığın söylediğini görsel gösterir — kayıttan ehliyete giden yol, adım adım.
 * Sağda (mobilde başlığın altında) şematik rota haritası, eğitim aracı adımları tek tek geçer (HeroRoute).
 * Fotoğraf yok: LCP öğesi başlık metnidir, ilk boyama hızlıdır. Fotoğraflar alt bölümlerde.
 *
 * Mobil: başlık → Ara/WhatsApp → rota → metin → bilgiler. CTA'lar ilk ekranda, çünkü sabit alt çubuk
 * (StickyCta) çerez onayı verilene kadar gizli (2026-11-10 denetimi K4).
 * Masaüstü (lg+): iki kolon. Başlık boyutu kolon genişliğine bağlı (13cqi): en uzun kelime
 * "BEYLİKDÜZÜ'NDE" her ekranda kolona tam sığar.
 * Altta akan yol şeridi (RoadStrip, araçlı). Alt boşluk ≥56px: araç şeridin üstüne taşar.
 */
export function Hero() {
  const h = home.hero;
  // "…giden yol, adım adım." → virgülden sonrası sarı vurgu
  const cut = h.h1.lastIndexOf(", ");
  const head = cut > 0 ? h.h1.slice(0, cut + 1) : h.h1;
  const tail = cut > 0 ? h.h1.slice(cut + 2) : "";

  const facts: { icon: IconName; k: string; v: string }[] = [
    { icon: "map-pin", k: "Konum", v: `${site.address.neighborhood}, ${site.address.district}` },
    { icon: "clock", k: "Açık", v: site.openingHoursLabel },
    { icon: "steering-wheel", k: "Sınıflar", v: "B · A1 · A2 · A" },
  ];

  return (
    <section aria-labelledby="hero-title" className="on-ink relative overflow-hidden bg-ink text-on-ink">
      <div className="container-site relative grid pt-10 pb-16 sm:pt-14 lg:grid-cols-12 lg:grid-rows-[auto_1fr] lg:gap-x-12 lg:pt-16 lg:pb-20 xl:gap-x-16">
        {/* 1 — Başlık */}
        <div className="@container lg:col-span-6 lg:row-start-1">
          <Eyebrow tone="dark">{h.eyebrow}</Eyebrow>
          <h1
            id="hero-title"
            className="mt-6 max-w-[14ch] font-display text-display max-lg:[font-size:min(var(--text-display),13.4cqi)]! sm:max-w-none lg:text-[13cqi] lg:leading-[0.88]"
          >
            {head} {tail && <span className="text-accent">{tail}</span>}
          </h1>

          {/* Mobil: ilk ekranda arama/WhatsApp. Sabit alt çubuk çerez onayına kadar gizli olduğu için gerekli. */}
          <div className="mt-7 grid gap-3 min-[22.5rem]:grid-cols-2 lg:hidden">
            <ButtonLink href={telHref()} size="lg" trackLocation="hero" icon="phone" className="w-full">
              {h.primaryCta}
            </ButtonLink>
            <ButtonLink href={whatsappHref()} variant="whatsapp" size="lg" trackLocation="hero" className="w-full">
              {h.whatsappCta}
            </ButtonLink>
          </div>
        </div>

        {/* 2 — Rota: mobilde başlığın altında, masaüstünde sağda iki satır boyunca, dikeyde ortalı */}
        <div className="mt-10 lg:col-span-6 lg:col-start-7 lg:row-span-2 lg:row-start-1 lg:mt-0 lg:self-center">
          <HeroRoute />
        </div>

        {/* 3 — Metin, CTA, bilgiler */}
        <div className="mt-8 flex flex-col lg:col-span-6 lg:row-start-2">
          <p className="max-w-md text-lead text-on-ink-muted">{h.lead}</p>

          {/* Masaüstü CTA'ları. Mobil karşılığı başlığın hemen altında. */}
          <div className="mt-7 hidden flex-wrap items-center gap-3 lg:flex">
            <ButtonLink href={telHref()} size="lg" trackLocation="hero" icon="phone" arrow>
              {h.primaryCta}
            </ButtonLink>
            <ButtonLink href={whatsappHref()} variant="whatsapp" size="lg" trackLocation="hero">
              {h.whatsappCta}
            </ButtonLink>
          </div>

          <dl className="mt-10 grid border-y border-on-ink-muted/25 sm:grid-cols-3 lg:mt-12">
            {facts.map((f, i) => (
              <div
                key={f.k}
                className={`flex items-start gap-3 py-4 sm:pr-4 ${i > 0 ? "border-t border-on-ink-muted/25 sm:border-t-0 sm:border-l sm:pl-4" : ""}`}
              >
                <Icon name={f.icon} className="mt-0.5 size-5 text-on-ink [--icon-accent:var(--color-accent)]" />
                <div>
                  <dt className="text-eyebrow text-on-ink-muted">{f.k}</dt>
                  <dd className="mt-1 text-small font-semibold leading-snug">
                    {/* Son kelime bölünmez: "09.00–18.00" ortadan kırılmasın */}
                    {f.v.slice(0, f.v.lastIndexOf(" ") + 1)}
                    <span className="whitespace-nowrap">{f.v.slice(f.v.lastIndexOf(" ") + 1)}</span>
                  </dd>
                </div>
              </div>
            ))}
          </dl>
          <a
            href="#surec"
            className="mt-5 inline-block self-start py-2.5 text-button leading-[1.9] text-on-ink hover:text-accent"
          >
            <InlineArrowLabel text={h.processCta} icon="arrow-down" lineClass="decoration-accent decoration-[3px]" />
          </a>
        </div>
      </div>

      <RoadStrip />
    </section>
  );
}
