import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";
import { Icon, type IconName } from "./Icon";
import { WhatsAppIcon } from "./WhatsAppIcon";

/**
 * Buton sistemi — "Levha"
 *
 * Anatomi:  [ikon]  ETİKET  [akan ok]
 *  - İkon etiketin solunda, buton metniyle aynı renkte, zeminsiz durur (plaka denendi, ağır durdu).
 *  - Akan ok (`arrow`): hover'da ok sağdan çıkar, soldan yenisi girer; yol akışı.
 *  - Basılı tuş: dolu butonlar hover'da 2px yükselir, altında sert bir gölge çizgisi belirir;
 *    tıklayınca yerine oturur. Yumuşak bulanık gölge yok.
 *  - text: düz alt çizgi; hover'da kesik ve akan şerit çizgisine döner (globals.css `.btn-lane`).
 *
 * Varyantlar:
 *  primary    — sarı zemin, asfalt metin (10.7:1). Sayfa başına tek ana aksiyon.
 *  secondary  — asfalt çerçeve (2px). İkincil aksiyon.
 *  dark       — asfalt zemin; açık zeminlerde ve sarı bölümlerde güçlü CTA.
 *  inverse    — koyu bölümlerde ikincil (açık çerçeve).
 *  text       — şerit alt çizgili; gezinme.
 *  whatsapp   — marka yeşili (beyaz metinle 6.23:1). WhatsApp simgesi otomatik gelir.
 * Boyutlar: md = 48px, lg = 56px. Hepsi ≥44×44 dokunma alanı. Hareketler reduced-motion'da kapalı.
 */
export type ButtonVariant = "primary" | "secondary" | "dark" | "inverse" | "text" | "whatsapp";
export type ButtonSize = "md" | "lg";

const base =
  "group/btn relative inline-flex items-center justify-center gap-3 text-button whitespace-nowrap select-none " +
  "motion-safe:transition-[background-color,border-color,color,transform,box-shadow] motion-safe:duration-200 ease-out-soft " +
  "disabled:pointer-events-none disabled:opacity-45 aria-disabled:pointer-events-none aria-disabled:opacity-45";

const press = "motion-safe:hover:-translate-y-0.5 active:translate-y-0 active:shadow-none";

const sizes: Record<ButtonSize, { box: string; icon: string }> = {
  md: { box: "min-h-12 px-5", icon: "size-[1.125rem]" },
  lg: { box: "min-h-14 px-6", icon: "size-5" },
};

const variants: Record<ButtonVariant, string> = {
  primary: `rounded-control bg-accent text-ink hover:bg-accent-hover hover:shadow-[0_4px_0_0_var(--color-ink)] ${press}`,
  secondary: "rounded-control border-2 border-ink text-ink hover:bg-ink hover:text-on-ink",
  dark: `rounded-control bg-ink text-on-ink hover:bg-ink-2 hover:shadow-[0_4px_0_0_var(--color-accent)] ${press}`,
  inverse: "rounded-control border-2 border-on-ink-muted/60 text-on-ink hover:border-accent hover:text-accent",
  text: "btn-lane min-h-11 text-ink",
  whatsapp: `rounded-control bg-whatsapp text-white hover:bg-whatsapp-hover hover:shadow-[0_4px_0_0_var(--color-ink)] ${press}`,
};

/** Native <button> / özel <a> için sınıf. İçerik için <ButtonInner> kullanın. */
export function buttonClass(variant: ButtonVariant = "primary", size: ButtonSize = "md", extra = "") {
  return [base, variant === "text" ? "" : sizes[size].box, variants[variant], extra].filter(Boolean).join(" ");
}

type IconProp = IconName | ReactNode;

/** Butonun içi: ikon + etiket + ok. Native butonlarda da kullanılabilir (hook içermez). */
export function ButtonInner({
  variant = "primary",
  size = "md",
  icon,
  arrow = false,
  children,
}: {
  variant?: ButtonVariant;
  size?: ButtonSize;
  icon?: IconProp;
  arrow?: boolean;
  children: ReactNode;
}) {
  const s = sizes[size];
  const glyph =
    typeof icon === "string" ? (
      <Icon name={icon as IconName} className={s.icon} />
    ) : icon ? (
      icon
    ) : variant === "whatsapp" ? (
      <WhatsAppIcon className={s.icon} />
    ) : null;

  return (
    <>
      {glyph}
      <span>{children}</span>
      {arrow && (
        <span aria-hidden="true" className="relative -mr-1 size-4 shrink-0 overflow-hidden">
          <Icon
            name="arrow-right"
            className="absolute inset-0 size-4 motion-safe:transition-transform motion-safe:duration-300 motion-safe:group-hover/btn:translate-x-full"
          />
          <Icon
            name="arrow-right"
            className="absolute inset-0 size-4 -translate-x-full motion-safe:transition-transform motion-safe:duration-300 motion-safe:group-hover/btn:translate-x-0 motion-reduce:hidden"
          />
        </span>
      )}
    </>
  );
}

type LinkProps = Omit<ComponentProps<typeof Link>, "className"> & {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  /** İkon adı (Icon setinden) ya da özel bir öğe */
  icon?: IconProp;
  /** Sağda akan ok */
  arrow?: boolean;
  trackLocation?: string;
};

/** Site içi ve harici linkler için buton görünümlü link */
export function ButtonLink({ variant = "primary", size = "md", className, icon, arrow, trackLocation, children, href, ...rest }: LinkProps) {
  const isExternal = typeof href === "string" && /^(https?:|tel:|mailto:)/.test(href);
  const cls = buttonClass(variant, size, className);
  const content = (
    <ButtonInner variant={variant} size={size} icon={icon} arrow={arrow}>
      {children}
    </ButtonInner>
  );
  if (isExternal) {
    const h = href as string;
    const newTab = h.startsWith("http");
    return (
      <a href={h} className={cls} data-track-location={trackLocation} {...(newTab ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
        {content}
      </a>
    );
  }
  return (
    <Link href={href} className={cls} data-track-location={trackLocation} {...rest}>
      {content}
    </Link>
  );
}
