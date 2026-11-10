import type { Metadata } from "next";
import { ButtonLink } from "@/components/ui/Button";
import { telHref } from "@/config/site";

export const metadata: Metadata = { title: "Sayfa bulunamadı", robots: { index: false } };

export default function NotFound() {
  return (
    <section className="container-site py-section-lg">
      <p className="font-display text-[clamp(5rem,3rem+10vw,10rem)] leading-none text-ink">404</p>
      <h1 className="mt-6 max-w-2xl font-display text-h1">Bu yol bir yere çıkmıyor.</h1>
      <p className="mt-5 max-w-md text-lead text-graphite">Aradığınız sayfa taşınmış ya da hiç var olmamış olabilir.</p>
      <div className="mt-8 flex flex-wrap gap-3">
        <ButtonLink href="/" arrow>Ana sayfaya dön</ButtonLink>
        <ButtonLink href={telHref()} variant="secondary" icon="phone" trackLocation="404">
          Bizi arayın
        </ButtonLink>
      </div>
    </section>
  );
}
