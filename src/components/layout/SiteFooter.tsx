import Link from "next/link";
import type { ReactNode } from "react";
import { Logo } from "./Logo";
import { FormTab } from "./FormTab";
import { LogoMark } from "@/components/brand/LogoMark";
import { pageNav, legalNav } from "@/config/navigation";
import { site, fullAddress, telHref, whatsappHref, socialLinks, mapsDirectionsHref } from "@/config/site";
import { licenseClasses } from "@/content/license-classes";
import { CookieSettingsButton } from "@/components/consent/CookieBanner";
import { Eyebrow } from "@/components/ui/Typography";
import { ButtonLink } from "@/components/ui/Button";
import { Icon, type IconName } from "@/components/ui/Icon";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";

const socialLabel: Record<string, string> = {
  instagram: "Instagram",
  facebook: "Facebook",
  youtube: "YouTube",
  tiktok: "TikTok",
  x: "X",
};

/**
 * Footer — "Yolun sonu"
 * Üstte sarı kenar çizgisi (konum bölümü zaten yol şeridiyle bitiyor; çift şerit olmasın). Liste sütunları yerine levha karoları:
 * iletişim karoları ve sınıf plakaları hover'da sarıya döner (trafik levhası). Dev dekoratif yazı yok.
 */

const tile =
  "group relative flex h-full flex-col rounded-card bg-ink-2 p-5 text-on-ink " +
  "motion-safe:transition-colors motion-safe:duration-200 hover:bg-accent hover:text-ink";

function Arrow({ className = "text-on-ink-muted group-hover:text-ink" }: { className?: string }) {
  return (
    <Icon
      name="arrow-right"
      className={`size-5 motion-safe:transition-transform motion-safe:duration-200 group-hover:translate-x-1 ${className}`}
    />
  );
}

/** WhatsApp karosu marka yeşilinde (beyaz metinle 6.23:1); hover'da koyulaşır, sarıya dönmez. */
const whatsappTile =
  "group relative flex h-full flex-col rounded-card bg-whatsapp p-5 text-white " +
  "motion-safe:transition-[background-color,box-shadow] motion-safe:duration-200 hover:bg-whatsapp-hover hover:shadow-[0_4px_0_0_var(--color-accent)]";

function ContactTile({
  href,
  label,
  icon,
  children,
  meta,
  external,
  whatsapp = false,
}: {
  href: string;
  label: string;
  icon: ReactNode;
  children: ReactNode;
  meta?: ReactNode;
  external?: boolean;
  whatsapp?: boolean;
}) {
  const plate = whatsapp
    ? "bg-white text-whatsapp"
    : "bg-accent text-ink group-hover:bg-ink group-hover:text-accent";
  const soft = whatsapp ? "text-white/85" : "text-on-ink-muted group-hover:text-ink";
  return (
    <a
      href={href}
      data-track-location="footer"
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={`${whatsapp ? whatsappTile : tile} gap-5`}
    >
      <span className="flex items-center justify-between">
        <span aria-hidden="true" className={`grid size-10 place-items-center rounded-[5px] motion-safe:transition-colors ${plate}`}>
          {icon}
        </span>
        <Arrow className={whatsapp ? "text-white" : undefined} />
      </span>
      <span className="mt-auto">
        <span className={`block text-eyebrow ${soft}`}>{label}</span>
        <span className="mt-2 block">{children}</span>
        {meta && <span className={`mt-2 block text-caption ${soft}`}>{meta}</span>}
      </span>
    </a>
  );
}

export function SiteFooter() {
  const socials = socialLinks();
  const iconCls = "size-5";
  const kurum = pageNav;
  const classTiles: { href: string; code?: string; icon?: IconName; title: string; sub: string }[] = [
    ...licenseClasses.map((c) => ({ href: `/ehliyet-siniflari/${c.slug}`, code: c.code, title: c.name, sub: c.vehicle })),
    { href: "/ehliyet-siniflari/b-sinifi#otomatik-vites", icon: "gearbox", title: "Otomatik vites", sub: "B sınıfı, otomatik araçla" },
  ];

  return (
    <footer className="on-ink relative bg-ink text-on-ink">
      {/* Sabit konumlu; footer'dan bağlanır ama ekranın sağ kenarında durur (yalnızca lg+). */}
      <FormTab />
      <div aria-hidden="true" className="h-1 bg-accent" />

      <div className="container-site py-section-sm">
        {/* 1 — Kimlik + iletişim */}
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-4">
            <Logo tone="dark" size="lg" />
            <p className="mt-8 font-display text-[clamp(2rem,1.2rem+2vw,2.75rem)] leading-[0.95]">
              {site.foundingYear}&apos;den beri
              <br />
              <span className="text-accent">{site.address.district}</span>&apos;nde.
            </p>
            <address className="mt-6 max-w-xs not-italic text-small leading-relaxed text-on-ink-muted">
              {fullAddress()}
              {site.address.isDemo && <span className="verify ml-1">DEMO adres</span>}
            </address>
            <ButtonLink href={mapsDirectionsHref()} variant="inverse" icon="directions" trackLocation="footer" className="mt-6">
              Yol tarifi al
            </ButtonLink>
          </div>

          <div className="lg:col-span-8">
            <Eyebrow tone="dark" number="">
              İletişim
            </Eyebrow>
            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              <ContactTile href={telHref()} label="Arayın" icon={<Icon name="phone" className={iconCls} />} meta={site.openingHoursLabel}>
                <span className="font-display text-[1.75rem] leading-none tabular-nums">{site.phone.display}</span>
              </ContactTile>
              <ContactTile href={whatsappHref()} label="WhatsApp" icon={<WhatsAppIcon className={iconCls} />} external whatsapp>
                <span className="font-display text-[1.75rem] leading-none">Yazın</span>
              </ContactTile>
              <ContactTile href={`mailto:${site.email}`} label="E-posta" icon={<Icon name="mail" className={iconCls} />}>
                <span className="text-small font-semibold break-all">{site.email}</span>
              </ContactTile>
            </div>
          </div>
        </div>

        {/* 2 — Sınıf plakaları */}
        <nav aria-label="Ehliyet sınıfları" className="mt-14 lg:mt-16">
          <Eyebrow tone="dark" number="">
            Ehliyet sınıfları
          </Eyebrow>
          <ul className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
            {classTiles.map((c) => (
              <li key={c.href}>
                <Link href={c.href} className={`${tile} min-h-36 justify-between gap-4`}>
                  <span className="flex items-start justify-between">
                    {c.code ? (
                      <span aria-hidden="true" className="font-display text-[3.25rem] leading-[0.8] text-accent group-hover:text-ink">
                        {c.code}
                      </span>
                    ) : (
                      <Icon name={c.icon!} className="size-11 text-accent [--icon-accent:var(--color-on-ink)] group-hover:text-ink group-hover:[--icon-accent:var(--color-ink)]" />
                    )}
                    <Arrow />
                  </span>
                  <span>
                    <span className="block text-small font-bold">{c.title}</span>
                    <span className="block text-caption text-on-ink-muted group-hover:text-ink">{c.sub}</span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* 3 — Kurum menüsü: tek satır, şerit ayraçlı */}
        <nav aria-label="Kurum" className="mt-12 rounded-card bg-ink-2 px-3 py-2 sm:px-5 lg:mt-14">
          <ul className="grid grid-cols-1 sm:flex sm:flex-wrap sm:items-center sm:gap-x-2">
            {kurum.map((n, i) => (
              <li key={n.href} className="flex items-center gap-2">
                {i > 0 && <span aria-hidden="true" className="hidden h-1 w-4 bg-accent sm:block" />}
                <Link href={n.href} className="inline-flex min-h-11 items-center px-2 text-button text-on-ink hover:text-accent">
                  {n.label}
                </Link>
              </li>
            ))}
            {socials.map((s) => (
              <li key={s.network} className="flex items-center gap-2">
                <span aria-hidden="true" className="hidden h-1 w-4 bg-accent sm:block" />
                <a href={s.href} target="_blank" rel="noopener noreferrer me" className="inline-flex min-h-11 items-center px-2 text-button text-on-ink hover:text-accent">
                  {socialLabel[s.network]}
                </a>
              </li>
            ))}
            {site.googleBusinessProfile && (
              <li className="flex items-center gap-2">
                <span aria-hidden="true" className="hidden h-1 w-4 bg-accent sm:block" />
                <a href={site.googleBusinessProfile} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center px-2 text-button text-on-ink hover:text-accent">
                  Google İşletme Profili
                </a>
              </li>
            )}
          </ul>
        </nav>
      </div>

      {/* 4 — Alt bant */}
      <div aria-hidden="true" className="lane" />
      <div className="container-site flex flex-col gap-2 py-5 text-caption text-on-ink-muted md:flex-row md:items-center md:justify-between">
        <p className="flex items-center gap-2.5">
          <LogoMark tone="mono" className="h-4 w-auto text-on-ink-muted" />
          © {new Date().getFullYear()} {site.legalName}
        </p>
        <ul className="flex flex-wrap items-center gap-x-5">
          {legalNav.map((n) => (
            <li key={n.href}>
              <Link href={n.href} className="inline-flex min-h-11 items-center hover:text-on-ink">
                {n.label}
              </Link>
            </li>
          ))}
          <li>
            <CookieSettingsButton className="inline-flex min-h-11 items-center hover:text-on-ink" />
          </li>
        </ul>
      </div>
    </footer>
  );
}
