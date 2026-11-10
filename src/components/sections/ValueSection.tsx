import { Icon, type IconName } from "@/components/ui/Icon";
import { home } from "@/content/home";
import { Eyebrow } from "@/components/ui/Typography";

const icons: IconName[] = ["history", "traffic-cone", "gearbox", "calendar"];

/** Değer önerisi: dev büyük harf ifade + 4 "levha" karo (asfalt kare içinde sarı ikon) */
export function ValueSection() {
  const v = home.value;
  return (
    <section id="yaklasim" aria-labelledby="value-title" className="container-site py-section-md">
      <div className="grid gap-8 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-8">
          <Eyebrow number="01">{v.eyebrow}</Eyebrow>
          <h2 id="value-title" className="mt-6 font-display text-h2 text-ink">
            {v.title}
          </h2>
        </div>
        <p className="text-lead text-graphite lg:col-span-4 lg:self-end">{v.body}</p>
      </div>

      <ol className="mt-section-sm grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {v.points.map((p, i) => {
          return (
            <li key={p.title} className="reveal relative rounded-card bg-surface-2 p-6 lg:p-7">
              <div className="flex items-start justify-between">
                <span aria-hidden="true" className="grid size-12 place-items-center rounded-control bg-ink text-on-ink [--icon-accent:var(--color-accent)]">
                  <Icon name={icons[i] ?? "history"} className="size-6" />
                </span>
                <span aria-hidden="true" className="text-outline font-display text-[3.5rem] leading-[0.8]">
                  0{i + 1}
                </span>
              </div>
              <h3 className="mt-8 text-h3 text-ink">{p.title}</h3>
              <p className="mt-2 text-small text-graphite">{p.text}</p>
            </li>
          );
        })}
      </ol>
    </section>
  );
}
