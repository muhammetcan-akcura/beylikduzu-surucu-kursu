import { home } from "@/content/home";
import { site, telHref, whatsappHref } from "@/config/site";
import { Eyebrow } from "@/components/ui/Typography";
import { ButtonLink } from "@/components/ui/Button";
import { ApplicationForm } from "@/components/forms/ApplicationForm";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";

/** Kapanış: sarı zemin, dev telefon numarası + beyaz form kartı. Üstte bariyer şeridi. */
export function ClosingCta({
  number = "08",
  title = home.closing.title,
  body = home.closing.body,
  defaultClass,
  id = "basvuru",
}: {
  number?: string;
  title?: string;
  body?: string;
  defaultClass?: string;
  id?: string;
}) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className="on-accent relative bg-accent text-ink">
      <div aria-hidden="true" className="hatch h-3" />
      <div className="container-site grid gap-12 py-section-md lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-7">
          <Eyebrow number={number || undefined} tone="accent">
            {home.closing.eyebrow}
          </Eyebrow>
          <h2 id={`${id}-title`} className="mt-6 font-display text-h1">
            {title}
          </h2>
          <p className="mt-6 max-w-lg text-lead">{body}</p>
          <a
            href={telHref()}
            data-track-location="closing"
            className="mt-10 block font-display text-[clamp(3rem,1.8rem+6vw,7rem)] leading-[0.85] tabular-nums text-ink decoration-ink decoration-4 underline-offset-[10px] hover:underline"
          >
            {site.phone.display}
          </a>
          <p className="mt-4 text-eyebrow">{site.openingHoursLabel}</p>
          <ButtonLink href={whatsappHref()} variant="dark" size="lg" className="mt-8" trackLocation="closing" icon={<WhatsAppIcon className="size-5 text-whatsapp-bright" />}>
            WhatsApp&apos;tan yazın
          </ButtonLink>
        </div>
        <div className="lg:col-span-5">
          <div className="rounded-card bg-surface p-6 shadow-float sm:p-8">
            <h3 className="font-display text-[2rem] leading-none">Sizi arayalım</h3>
            <p className="mt-2 mb-6 text-small text-muted">Dört alan, yarım dakika.</p>
            <ApplicationForm compact defaultClass={defaultClass} />
          </div>
        </div>
      </div>
    </section>
  );
}
