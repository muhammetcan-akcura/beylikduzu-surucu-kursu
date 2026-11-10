import { pageMetadata } from "@/lib/metadata";
import { site } from "@/config/site";
import { LegalPage } from "@/components/ui/LegalPage";
import { CookieSettingsButton } from "@/components/consent/CookieBanner";

export const metadata = pageMetadata({
  title: "Çerez Politikası",
  description:
    "Beylik Sürücü Kursu sitesinde kullanılan çerezler: zorunlu çerezler, onayınıza bağlı analitik ölçüm ve Google Haritalar. Tercihinizi dilediğiniz an değiştirin.",
  path: "/cerez-politikasi",
});

const rows = [
  { cat: "Zorunlu", what: "Çerez tercihinizin saklanması (tarayıcı yerel depolaması: bsk-consent-v1)", who: site.brandName, consent: "Gerekmez" },
  { cat: "Analitik", what: "Ziyaret istatistikleri, telefon / WhatsApp / form dönüşüm ölçümü (Google Analytics 4)", who: "Google", consent: "Onay gerekir" },
  { cat: "Harita", what: "Konum haritasının gösterilmesi (Google Haritalar gömülü harita)", who: "Google", consent: "Onay gerekir" },
];

export default function CookiePage() {
  return (
    <LegalPage title="Çerez Politikası" path="/cerez-politikasi" updated="10.11.2026">
      <p>
        Bu sayfa, {site.domain} adresinde hangi çerezlerin ve benzeri teknolojilerin kullanıldığını açıklar. Zorunlu olanlar
        dışındaki hiçbir üçüncü taraf içerik, siz onay vermeden yüklenmez.
      </p>

      <h2>Kullandığımız çerez kategorileri</h2>
      <div className="-mx-[var(--spacing-gutter)] overflow-x-auto px-[var(--spacing-gutter)]">
        <table className="w-full min-w-[34rem] border-t border-ink text-left text-small">
          <thead>
            <tr className="text-eyebrow uppercase text-muted">
              <th scope="col" className="py-3 pr-4">Kategori</th>
              <th scope="col" className="py-3 pr-4">Amaç</th>
              <th scope="col" className="py-3 pr-4">Sağlayıcı</th>
              <th scope="col" className="py-3">Onay</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r.cat} className="border-t border-line-strong/60 align-top">
                <th scope="row" className="py-4 pr-4 font-semibold">{r.cat}</th>
                <td className="py-4 pr-4 text-graphite">{r.what}</td>
                <td className="py-4 pr-4 text-graphite">{r.who}</td>
                <td className="py-4 text-graphite">{r.consent}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2>Tercihinizi değiştirme</h2>
      <p>Verdiğiniz onayı istediğiniz zaman geri alabilir ya da değiştirebilirsiniz.</p>
      <p>
        <CookieSettingsButton className="inline-flex min-h-11 items-center rounded-control border border-ink px-5 text-button text-ink hover:bg-ink hover:text-on-ink" />
      </p>

      <h2>Tarayıcı ayarları</h2>
      <p>
        Çerezleri tarayıcınızın ayarlarından da silebilir veya engelleyebilirsiniz. Bu durumda tercihiniz sıfırlanır ve
        çerez bildirimi yeniden gösterilir.
      </p>
    </LegalPage>
  );
}
