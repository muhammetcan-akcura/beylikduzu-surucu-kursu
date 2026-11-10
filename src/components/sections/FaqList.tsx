import { Icon } from "@/components/ui/Icon";
import type { Faq } from "@/content/license-classes";
import { RichText } from "@/components/ui/RichText";

/**
 * SSS akordeonu: yerel <details>/<summary> — JS gerektirmez, klavye ve ekran okuyucu desteği yerleşik.
 * Her soru ayrı karo; açıkken çerçeve asfalt, ikon sarıya döner.
 */
export function FaqList({ items, headingLevel = "h3" }: { items: Faq[]; headingLevel?: "h2" | "h3" }) {
  const H = headingLevel;
  return (
    <div className="space-y-3">
      {items.map((f) => (
        <details key={f.q} className="group rounded-card border-2 border-surface-2 bg-surface transition-colors open:border-ink">
          <summary className="flex min-h-16 cursor-pointer items-center justify-between gap-6 px-5 py-4 sm:px-6">
            <H className="text-h3">{f.q}</H>
            <span
              aria-hidden="true"
              className="grid size-10 shrink-0 place-items-center rounded-control bg-ink text-on-ink transition-colors group-open:bg-accent group-open:text-ink"
            >
              <Icon name="plus" className="faq-icon size-5" strokeWidth={2.5}/>
            </span>
          </summary>
          <p className="max-w-prose px-5 pb-6 text-graphite sm:px-6 sm:pr-20">
            <RichText text={f.a} />
          </p>
        </details>
      ))}
    </div>
  );
}
