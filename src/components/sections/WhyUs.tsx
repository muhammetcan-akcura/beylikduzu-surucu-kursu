import { Icon } from "@/components/ui/Icon";
import { site } from "@/config/site";
import { Eyebrow } from "@/components/ui/Typography";
import { Photo } from "@/components/ui/Photo";

/** Neden biz: yalnızca doğrulanabilir iddialar. Dev, içi boş "2000" + arkasında sarı blok olan kesik köşeli fotoğraf. */
export function WhyUs() {
  const claims = [
    `${site.foundingYear} yılından beri ${site.address.district}'nde aynı işi yapıyoruz.`,
    "Direksiyon eğitimine trafiğe kapalı eğitim alanında başlıyoruz.",
    "Manuel ve otomatik vitesli Hyundai eğitim araçlarımız var.",
    "Kurumumuz haftanın 7 günü 09.00–18.00 arasında açık.",
    "Ücret ve süre bilgisini telefonda net veriyoruz; sitede güncelliğini yitirmiş rakam yok.",
  ];
  return (
    <section id="neden-biz" aria-labelledby="why-title" className="relative overflow-hidden py-section-md">
      <span
        aria-hidden="true"
        className="text-outline pointer-events-none absolute -right-[0.04em] bottom-0 font-display text-[clamp(9rem,6rem+18vw,24rem)] leading-[0.8] opacity-15 select-none"
      >
        {site.foundingYear}
      </span>

      <div className="container-site relative grid items-center gap-12 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-6">
          <Eyebrow number="04">Neden biz</Eyebrow>
          <h2 id="why-title" className="mt-6 font-display text-h2">
            Yeni değiliz.
            <br />
            <span className="mt-2 inline-block bg-accent px-3 pt-1 pb-0.5">Acelemiz de yok.</span>
          </h2>
          <ul className="mt-10 space-y-3">
            {claims.map((c) => (
              <li key={c} className="flex items-start gap-4 rounded-card border-2 border-surface-2 bg-surface px-5 py-4">
                <span aria-hidden="true" className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-[3px] bg-ink text-accent">
                  <Icon name="check" className="size-4" strokeWidth={3}/>
                </span>
                <span className="font-medium text-ink">{c}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="relative lg:col-span-5 lg:col-start-8">
          <span aria-hidden="true" className="cut absolute inset-0 translate-x-4 translate-y-4 bg-accent [--cut:40px]" />
          <div className="cut relative aspect-[4/5] overflow-hidden bg-ink [--cut:40px]">
            <Photo name="facade" fill sizes="(min-width: 1024px) 40vw, 100vw" />
          </div>
        </div>
      </div>
    </section>
  );
}
