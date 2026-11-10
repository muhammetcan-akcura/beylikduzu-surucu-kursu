import { Icon } from "@/components/ui/Icon";
import { telHref, whatsappHref } from "@/config/site";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";

/**
 * Mobil/tablet sabit iletişim çubuğu. Masaüstünde gizli.
 * Body'deki `pb-sticky-safe` sayesinde sayfa sonu içeriği kapatılmaz; safe-area'ya uyar.
 */
export function StickyCta() {
  return (
    <div
      className="on-ink fixed inset-x-0 bottom-0 z-40 border-t-4 border-accent bg-ink shadow-sticky lg:hidden"
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      <div className="grid grid-cols-2 gap-2 px-3 py-2.5">
        <a
          href={telHref()}
          data-track-location="sticky"
          className="inline-flex min-h-12 items-center justify-center gap-2 rounded-control bg-accent text-button text-ink active:bg-accent-hover"
        >
          <Icon name="phone" className="size-5"/>
          Hemen ara
        </a>
        <a
          href={whatsappHref()}
          target="_blank"
          rel="noopener noreferrer"
          data-track-location="sticky"
          className="inline-flex min-h-12 items-center justify-center gap-2 rounded-control bg-whatsapp text-button text-white active:bg-whatsapp-hover"
        >
          <WhatsAppIcon className="size-5" />
          WhatsApp
        </a>
      </div>
    </div>
  );
}
