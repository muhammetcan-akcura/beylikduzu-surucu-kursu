# Açık sorular, verdiğim kararlar ve doğrulanacaklar

Siz yokken sormam gereken her şeyi buraya yazdım ve makul bir varsayımla ilerledim. Her maddeyi onaylayabilir ya da değiştirebilirsiniz.

---

## A. Sizin yerinize verdiğim kararlar

| # | Konu | Karar | Değiştirmek için |
|---|---|---|---|
| 1 | Görsel konsept | **"Şerit"** (2026-11-10'da yenilendi): Archivo dar/geniş font; asfalt, beton, yol çizgisi sarısı; akan yol şeridi, kayan sınıf bandı, kesik köşeli görseller, kilometre taşı süreç adımları. İlk konsept "Editoryal Rota" (serif + krem) "çok sade" bulunduğu için bırakıldı. | `src/app/globals.css` → `@theme` |
| 2 | Hero başlığı (H1) | **"Beylikdüzü'nde ehliyete giden yol, adım adım."** Brifteki öneri yerine bunu seçtim: hem lokasyonu hem "ehliyet" anahtar kelimesini içeriyor, sitenin süreç odaklı omurgasını anlatıyor. | `src/content/home.ts` |
| 3 | Demo adres | `Cumhuriyet Mahallesi, Örnek Sokak No: 1, 34520 Beylikdüzü/İstanbul`. Gerçek bir adresle karışmasın diye bilerek "Örnek Sokak" yazdım. Sitede yanında **DEMO adres** etiketi görünür. | `src/config/site.ts` → `address` |
| 4 | Demo koordinat | `41.0005, 28.6385` (Beylikdüzü Cumhuriyet Mah. civarı, yaklaşık). Haritanın altında **DEMO konum** notu görünür. | `site.ts` → `geo` |
| 5 | Google İşletme ve sosyal medya | Alanlar `site.ts` içinde, **linkler boş**. Boşken footer'da ve schema'da (`sameAs`) görünmezler. | `site.ts` → `social`, `googleBusinessProfile` |
| 6 | B otomatik | Ayrı sayfa yok; **B sınıfı sayfasında `#otomatik-vites` bölümü**. Ana sayfa sınıf listesinde ve footer'da bu bölüme link var. Formda ayrı seçenek: "B Sınıfı (otomatik vites)". | `src/content/license-classes.ts` |
| 7 | Ücretler | Sitede **yok**. SSS'te "neden yazmıyor" sorusu ve cevabı var. | `src/content/faq.ts` |
| 8 | Başlık şablonu | `%s \| Beylik Sürücü Kursu Beylikdüzü`. Ana sayfa: "Beylikdüzü Sürücü Kursu ve Ehliyet Eğitimi \| Beylik". Hepsi 60 karakterin altında. | `src/lib/metadata.ts` |
| 9 | Mahalle adları | Yalnızca İletişim → "Hizmet bölgesi" paragrafında tek bir doğal cümle (Beylikdüzü'nün 10 mahallesi). **Mahalle sayfası yok.** | `src/app/iletisim/page.tsx` |
| 10 | SSS schema | Cevabında `[DOĞRULA]` bulunan sorular **FAQPage schema'sına girmez**. Doğrulanmamış bilgi arama sonuçlarına taşınmasın diye. B ve A sınıfı sayfalarında bu yüzden şimdilik FAQ schema'sı yok. | `src/lib/schema.ts` → `faqSchema` |
| 11 | Form e-postası | `RESEND_API_KEY` yoksa başvuru **sunucu loguna** yazılır, kullanıcıya yine başarı mesajı gösterilir. Yayından önce anahtar girilmeli. | `.env.local` |
| 12 | Harita | Onay verilene kadar Google iframe'i yüklenmez; yerine çerezsiz bir çizim, "Haritayı yükle" ve "Yol tarifi al" gösterilir. | `src/components/consent/MapEmbed.tsx` |
| 13 | SSS akordeonu | Yerel `<details>/<summary>`: JavaScript'siz, klavye ve ekran okuyucu desteği yerleşik. Brifte "client bileşen" deniyordu; bu daha hafif. | `src/components/sections/FaqList.tsx` |
| 14 | Klasör yapısı | Sayfalar `(site)` grubu yerine doğrudan `src/app/` altında; tek layout olduğu için grup gereksizdi. | — |
| 15 | Arama motoru indeksleme | Site **indekslenebilir** durumda. Demo yayına alınacaksa `layout.tsx` içindeki `robots: { index: false }` satırını açın. | `src/app/layout.tsx` |

## B. Sizin vermeniz gereken bilgiler

1. **Gerçek açık adres** (sokak, no, varsa kat). `site.ts` içinde `isDemo: false` yapın.
2. **Gerçek koordinat:** Google Haritalar'da kurumun üzerine sağ tıklayın, ilk satırdaki iki sayıyı kopyalayın.
3. **Google İşletme Profili linki** ve varsa sosyal medya hesapları.
4. **Araçlar:** i10, i20, i30'dan hangisi manuel, hangisi otomatik? Şu an üçü de "manuel / otomatik" görünüyor.
5. **Motosiklet eğitimi:** Hangi motosiklet (marka/model)? Kask, eldiven gibi ekipmanı kurum mu veriyor?
6. **Hakkımızda:** Kurucu/yönetici adı, kısa kuruluş hikâyesi, eğitmen sayısı, MEB kurum izin bilgisi.
7. **Ulaşım:** En yakın metrobüs durağı, kuruma yakın geçen otobüs hatları, otopark durumu.
8. **Ders saatleri:** Hafta sonu ve 18.00 sonrası direksiyon dersi var mı?
9. **Yasal:** Ticari unvan, vergi dairesi/no, MERSİS no (KVKK metni için).
10. **Altyapı:** Resend hesabı ve doğrulanmış gönderici adresi, GA4 ölçüm kimliği, barındırma (ör. Vercel).
11. **Brifin kesilen kısmı:** "8. Teknik SEO" bölümü "Open Graph ve Twitter kartları," satırında bitiyordu. Devamını standart iyi uygulamalarla tamamladım (bkz. README "SEO"). Ek isteğiniz varsa iletin.

## C. Mevzuat: resmi kaynaktan doğrulanacaklar (`[DOĞRULA]`)

Bunları ezberden yazmadım. Sitede kesik çizgili amber etiketlerle görünüyorlar. Kaynak: MEB Özel Öğretim Kurumları Genel Müdürlüğü, Karayolları Trafik Yönetmeliği, e-Devlet.

**Yaş ve sınıf kapsamı**
- B, A1, A2, A için asgari yaş
- A1 (cc / kW), A2 (kW, kW/kg) motor sınırları
- A sınıfına doğrudan geçiş için yaş, kademeli geçiş için A2 deneyim süresi
- A1 → A2 geçiş koşulları
- B ehliyetin motosiklet kapsamı
- A sınıfının sepetli ve üç tekerlekli araç kapsamı

**Otomatik vites**
- Kısıtlama kodu ve kısıtlamanın sonradan kaldırılma koşulları

**Eğitim**
- Teorik ders saatleri ve devam şartı
- Asgari direksiyon ders saati
- Direksiyon eğitiminin teorik sınavdan önce mi sonra mı başladığı
- Ortalama toplam süre

**Sınav**
- e-Sınav usulü
- Direksiyon sınavı değerlendirme kriterleri ve sınav güzergâhı/alanı
- Sınav tekrar hakkı sayısı ve ücreti

**Belgeler**
- Güncel belge listesi
- Sağlık raporu türü ve geçerlilik süresi
- Fotoğraf adedi
- Asgari öğrenim şartı
- Uzaktan kayıt / e-imza imkânı

**Belge teslimi**
- Başvuru yeri (Nüfus Müdürlüğü / e-Devlet randevusu), harç ve gerekli belgeler

**KVKK**
- Hukuki sebep
- Saklama süresi
- Kullanılan sağlayıcılar ve yurt dışı aktarım dayanağı

> Hepsini bulmak için: `grep -rn "DOĞRULA" src`
