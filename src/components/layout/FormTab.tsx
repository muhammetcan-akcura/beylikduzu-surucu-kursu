import { APPLY_HREF } from "@/config/navigation";
import { Icon } from "@/components/ui/Icon";

/**
 * Form kulakçığı — ekranın sağ kenarına yapışık, dikey yazılı sarı sekme. Yalnızca masaüstünde (lg+);
 * mobilde alttaki StickyCta zaten var.
 *
 * JS yok: sayfada başvuru formu (#basvuru) varsa yerel çapaya, yoksa iletişim sayfasındaki forma gider.
 * Seçim CSS :has() ile yapılır (globals.css `.form-tab-*`). Dekoratif değil; klavyeyle erişilebilir.
 * Header'ın mega menü örtüsünün (z-40) altında kalır.
 */
export function FormTab() {
  const cls =
    "group fixed top-1/2 right-0 z-30 hidden -translate-y-1/2 lg:flex " +
    "flex-col items-center gap-3 rounded-l-control bg-accent px-2.5 py-4 text-ink shadow-float " +
    "motion-safe:transition-[padding,background-color] motion-safe:duration-200 hover:bg-accent-hover hover:pr-4 focus-visible:pr-4 print:hidden";
  const inner = (
    <>
      <span aria-hidden="true" className="grid size-8 place-items-center rounded-[5px] bg-ink text-on-ink [--icon-accent:var(--color-accent)]">
        <Icon name="phone" className="size-4" />
      </span>
      <span className="text-button [writing-mode:vertical-rl] rotate-180">Sizi arayalım</span>
    </>
  );
  return (
    <>
      <a href="#basvuru" data-track-location="form-tab" className={`form-tab-local ${cls}`}>
        {inner}
      </a>
      <a href={APPLY_HREF} data-track-location="form-tab" className={`form-tab-global ${cls}`}>
        {inner}
      </a>
    </>
  );
}
