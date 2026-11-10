import { site } from "@/config/site";
import { Eyebrow } from "@/components/ui/Typography";
import { Photo } from "@/components/ui/Photo";

/** Eğitim ortamı ve araçlar: araç "ruhsat" satırları + kesik köşeli görsel mozaiği */
export function FleetSection({ number = "06" }: { number?: string }) {
  return (
    <section id="araclar" aria-labelledby="fleet-title" className="container-site py-section-md">
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-5">
          <Eyebrow number={number}>Eğitim ortamı ve araçlar</Eyebrow>
          <h2 id="fleet-title" className="mt-6 font-display text-h2">
            Alışacağınız araçla öğrenin.
          </h2>
          <p className="mt-5 text-graphite">
            Eğitimler Hyundai i10, i20 ve i30 araçlarla yapılıyor. Manuel ve otomatik vites seçeneği var. İlk dersler
            trafiğe kapalı eğitim alanında, sonrakiler Beylikdüzü trafiğinde.
          </p>

          <table className="mt-8 w-full border-separate border-spacing-y-2 text-left">
            <caption className="sr-only">Eğitim araçları</caption>
            <thead className="sr-only">
              <tr>
                <th scope="col">Araç</th>
                <th scope="col">Vites</th>
              </tr>
            </thead>
            <tbody>
              {site.vehicles.map((v) => (
                <tr key={v.model}>
                  {/* lang="en": büyük harfte "HYUNDAİ İ10" olmasın (tr kuralı i → İ) */}
                  <th scope="row" lang="en" className="rounded-l-card bg-ink py-4 pl-5 text-on-ink">
                    <span className="block text-eyebrow text-on-ink-muted">{v.make}</span>
                    <span className="font-display text-[2rem] leading-none text-accent normal-case">{v.model}</span>
                  </th>
                  <td className="rounded-r-card bg-ink py-4 pr-5 text-right">
                    <span className="inline-flex flex-wrap justify-end gap-1.5">
                      {v.transmission.map((t) => (
                        <span key={t} className="rounded-[3px] border border-on-ink-muted/40 px-2 py-1 text-eyebrow text-on-ink">
                          {t}
                        </span>
                      ))}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="mt-3 text-caption text-muted">Her modelde hem manuel hem otomatik vitesli eğitim aracımız var.</p>
        </div>

        <div className="grid gap-3 sm:grid-cols-5 lg:col-span-7">
          <div className="cut-tr relative aspect-[4/3] overflow-hidden rounded-hairline bg-ink sm:col-span-3 sm:aspect-auto sm:min-h-[28rem] [--cut:36px]">
            <Photo name="mirror" fill sizes="(min-width: 1024px) 34vw, (min-width: 640px) 60vw, 100vw" />
          </div>
          <div className="grid gap-3 sm:col-span-2">
            <div className="relative aspect-[4/3] overflow-hidden rounded-hairline bg-ink sm:aspect-auto">
              <Photo name="gear" fill sizes="(min-width: 1024px) 24vw, (min-width: 640px) 40vw, 100vw" />
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-hairline bg-ink sm:aspect-auto">
              <Photo name="classB" fill sizes="(min-width: 1024px) 24vw, (min-width: 640px) 40vw, 100vw" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
