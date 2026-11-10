import Link from "next/link";
import { pageMetadata } from "@/lib/metadata";
import { site, fullAddress } from "@/config/site";
import { LegalPage } from "@/components/ui/LegalPage";
import { RichText } from "@/components/ui/RichText";

export const metadata = pageMetadata({
  title: "KVKK Aydınlatma Metni",
  description:
    "Beylik Sürücü Kursu KVKK aydınlatma metni: başvuru formu ve iletişim kanallarıyla paylaştığınız kişisel verilerin nasıl işlendiğini ve haklarınızı öğrenin.",
  path: "/kvkk-aydinlatma-metni",
});

export default function KvkkPage() {
  return (
    <LegalPage title="KVKK Aydınlatma Metni" path="/kvkk-aydinlatma-metni" updated="10.11.2026">
      <p>
        6698 sayılı Kişisel Verilerin Korunması Kanunu (“KVKK”) uyarınca, veri sorumlusu sıfatıyla {site.legalName} olarak
        kişisel verilerinizi aşağıda açıklanan kapsamda işliyoruz.
      </p>

      <h2>1. Veri sorumlusu</h2>
      <p>
        {site.legalName} — {fullAddress()} · {site.email} ·{" "}
        <RichText text="[DOĞRULA: ticari unvan, vergi dairesi / numarası, MERSİS no]" />
      </p>

      <h2>2. İşlenen kişisel veriler</h2>
      <ul>
        <li>Kimlik: ad soyad</li>
        <li>İletişim: telefon numarası</li>
        <li>Talep bilgisi: ilgilenilen ehliyet sınıfı, isteğe bağlı mesaj</li>
        <li>İşlem güvenliği: form gönderim zamanı, gönderilen sayfa</li>
      </ul>
      <p>Başvuru formu üzerinden T.C. kimlik numarası, sağlık bilgisi gibi veriler talep edilmez.</p>

      <h2>3. İşleme amaçları</h2>
      <ul>
        <li>Bilgi ve kayıt talebinize dönüş yapmak</li>
        <li>Eğitim süreci hakkında bilgilendirme yapmak</li>
        <li>Kötüye kullanım ve spam gönderimleri önlemek</li>
      </ul>

      <h2>4. Hukuki sebep</h2>
      <p>
        Verileriniz KVKK m.5/2-c (bir sözleşmenin kurulması için gerekli olması) ve m.5/2-f (meşru menfaat) hukuki sebeplerine
        dayanılarak işlenir. <RichText text="[DOĞRULA: hukukçu görüşü]" />
      </p>

      <h2>5. Aktarım</h2>
      <p>
        Form verileri, başvurunun kuruma e-posta ile iletilmesi amacıyla e-posta hizmet sağlayıcısına ve barındırma hizmeti
        sağlayıcısına aktarılabilir. Bu sağlayıcıların sunucuları yurt dışında olabilir.{" "}
        <RichText text="[DOĞRULA: kullanılan sağlayıcılar (ör. Resend, Vercel) ve yurt dışı aktarım dayanağı]" />
      </p>

      <h2>6. Saklama süresi</h2>
      <p>
        Kayıt olmayan başvurulara ait veriler, dönüş yapılmasından sonra makul bir süre içinde silinir.{" "}
        <RichText text="[DOĞRULA: saklama süresi]" />
      </p>

      <h2>7. Haklarınız (KVKK m.11)</h2>
      <ul>
        <li>Kişisel verilerinizin işlenip işlenmediğini öğrenme</li>
        <li>İşlenmişse buna ilişkin bilgi talep etme</li>
        <li>İşlenme amacını ve amacına uygun kullanılıp kullanılmadığını öğrenme</li>
        <li>Aktarıldığı üçüncü kişileri bilme</li>
        <li>Eksik veya yanlış işlenmişse düzeltilmesini isteme</li>
        <li>Silinmesini veya yok edilmesini isteme</li>
        <li>Kanuna aykırı işleme sebebiyle zarara uğramanız hâlinde zararın giderilmesini talep etme</li>
      </ul>
      <p>
        Taleplerinizi <a href={`mailto:${site.email}`}>{site.email}</a> adresine veya {fullAddress()} adresine yazılı olarak
        iletebilirsiniz.
      </p>

      <h2>8. Çerezler</h2>
      <p>
        Sitede kullanılan çerezler hakkında bilgi için <Link href="/cerez-politikasi">Çerez Politikası</Link>’nı inceleyin.
      </p>
    </LegalPage>
  );
}
