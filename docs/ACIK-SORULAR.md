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
| 10 | SSS schema | Cevabında `[DOĞRULA]` bulunan sorular **FAQPage schema'sına girmez**. Doğrulanmamış bilgi arama sonuçlarına taşınmasın diye. Mevzuat cevapları doldurulduğu için (2026-11-10) artık sınıf sayfalarındaki çoğu soru schema'ya giriyor; yalnızca işletme bilgisi bekleyenler dışarıda. | `src/lib/schema.ts` → `faqSchema` |
| 11 | Form e-postası | `RESEND_API_KEY` + `LEAD_FROM_EMAIL` yoksa: geliştirmede başvuru loga yazılır; **production'da form hata verir** ve kullanıcıyı telefona/WhatsApp'a yönlendirir (2026-11-10 denetimi; eskiden sahte başarı gösteriyordu). Hızlı gönderim artık atılmıyor, e-postada "[Şüpheli]" diye işaretleniyor. Yayından önce anahtar girilmeli. **2026-11-10, kullanıcı:** form şimdilik böyle kalacak; iletim sonra Netlify tarafında ayarlanacak (Netlify Forms veya Resend). O zamana kadar canlıda form başvuru almaz, ziyaretçiyi telefona/WhatsApp'a yönlendirir. | `.env.local`, `src/lib/email.ts` |
| 12 | Harita | Onay verilene kadar Google iframe'i yüklenmez; yerine çerezsiz bir çizim, "Haritayı yükle" ve "Yol tarifi al" gösterilir. | `src/components/consent/MapEmbed.tsx` |
| 13 | SSS akordeonu | Yerel `<details>/<summary>`: JavaScript'siz, klavye ve ekran okuyucu desteği yerleşik. Brifte "client bileşen" deniyordu; bu daha hafif. | `src/components/sections/FaqList.tsx` |
| 14 | Klasör yapısı | Sayfalar `(site)` grubu yerine doğrudan `src/app/` altında; tek layout olduğu için grup gereksizdi. | — |
| 15 | Arama motoru indeksleme | Site **indekslenebilir** (kullanıcı 2026-11-11: "Google'da kalsın"). Yalnızca `/styleguide` noindex. Demo sokak adı ve koordinat schema'ya girmez (yalnızca mahalle); `isDemo: false` olunca tam adres girer. | `src/lib/metadata.ts`, `src/lib/schema.ts` |
| 16 | Alan adı (geçici) | Site adresi `https://beyliksurucukursu.netlify.app`. Canonical, sitemap, robots ve schema buradan üretilir. Kalıcı alan adı alınınca `site.ts` `domain` ve Netlify ortam değişkeni `NEXT_PUBLIC_SITE_URL` güncellenir. | `src/config/site.ts` |
| 17 | Hareket ve "hareketi azalt" ayarı | Kayan bant, yol, araç, hero rotası, fotoğraf şeridi ve scroll belirmeleri cihazın "hareketi azalt" ayarından **bağımsız** oynar. Birçok telefon pil tasarrufunda bu ayarı kendiliğinden açtığı için site mobilde tamamen duruyordu. Erişilebilirlik bedeli: hareket hassasiyeti olan ziyaretçiler de animasyonu görür; fotoğraf şeridinde durdurma düğmesi var. İstenirse geri alınabilir. | `src/app/globals.css` |

## B. Sizin vermeniz gereken bilgiler

2026-11-10'da tek tek soruldu.

**Cevaplananlar (siteye işlendi):**
- **Araçlar:** i10, i20 ve i30'un her birinin hem manuel hem otomatik aracı var.
- **Ders saatleri:** Direksiyon dersleri hafta içi 09.00–18.00. Ofis her gün 09.00–18.00 açık. Hafta sonu ve 18.00 sonrası ders yok; tek istisna zorunlu gece dersi (saati esnek ayarlanıyor).
- **Ekipman:** Kask, eldiven gibi koruyucu ekipmanı kurum sağlıyor.
- **Motosiklet:** Marka/model bilinmiyor. Kullanıcı "en çok kullanılanları ekle" dedi, ama kuruma ait olmayan bir model yazmak yanlış iddia olacağı için marka yazılmadı. Sitede "sınıfa uygun eğitim motosikleti" yazıyor; SSS'de "marka ve model bilgisini telefonda veriyoruz" diyor.
- **KVKK saklama süresi:** Kayıt olmayan başvurular 6 ay içinde silinir. Bu seçim hukukçu onayına tabidir.
- **Barındırma:** Netlify.
- **Sosyal medya:** Yok.
- **Altyapı:** Resend ve GA4 yok. Form başvuruları sunucu kaydına düşer, analitik yüklenmez.

**Bilinmiyor (sitede `[DOĞRULA]` olarak kalıyor):**
1. **Açık adres** (sokak, no, kat) → `site.ts`, sonra `isDemo: false`.
2. **Koordinat ve Google İşletme Profili linki.**
3. **Hakkımızda:** Kurucu/yönetici adı, kuruluş hikâyesi, eğitmen sayısı, MEB kurum izin bilgisi.
4. **Ulaşım:** Metrobüs durağı ve yürüme süresi, otobüs hatları, otopark.
5. **Yasal:** Ticari unvan, vergi dairesi/no, MERSİS no.
6. **KVKK:** Hukuki sebep ve yurt dışı aktarım dayanağı için hukukçu görüşü.

**Gece eğitimi (2026-11-10 cevaplandı):** MEB yönetmeliği (md. 7/3) en az 2 saat gece dersi istiyor. Kullanıcı: gece dersi için saat esnek ayarlanıyor. Sitede "zorunlu gece dersinin saati ayrıca, esnek olarak ayarlanır" diye geçiyor; belirli saat yazılmadı.

**Brifin kesilen kısmı:** "8. Teknik SEO" bölümü "Open Graph ve Twitter kartları," satırında bitiyordu. Devamı standart iyi uygulamalarla tamamlandı (bkz. README "SEO").

## C. Mevzuat (2026-11-10'da dolduruldu)

Mevzuat bilgileri, mevzuat.gov.tr'deki güncel metinlerden okunup siteye yazıldı. Ezberden ya da blog/haber sitelerinden alınmadı.
- **KTY:** Karayolları Trafik Yönetmeliği
- **MTSKY:** MEB Özel Motorlu Taşıt Sürücüleri Kursu Yönetmeliği (son değişiklik: RG 9/7/2024-32597)

| Bilgi | Sitede yazan | Kaynak |
|---|---|---|
| Asgari yaş | M, A1: 16 · A2, B: 18 · A: 20 (2 yıllık A2 ile) veya 24 (A2 olmadan) · 15 kW üstü üç tekerlekli: 21 | KTY md. 76 |
| A1 sınırı | 125 cm³, 11 kW, 0,1 kW/kg; üç tekerlekli 15 kW'a kadar | KTY md. 75/b |
| A2 sınırı | 35 kW, 0,2 kW/kg; üç tekerlekli 15 kW'a kadar | KTY md. 75/c |
| A kapsamı | Tüm iki tekerlekli motosikletler, sepetli dahil; 15 kW üstü üç tekerlekli | KTY md. 75/ç |
| Bir sınıfla sürülebilenler | B → M, B1, F · A2 → M, A1 · A → M, A1, A2 | KTY md. 85 |
| B ile A1 motosiklet | 2 yıllık B + son 5 yılda geri alınmamış + sağlık şartı; A1 direksiyon eğitiminin yarısı + uygulama sınavı; ticari kullanım hariç | KTY md. 85 (ek fıkra, RG 10/2/2024) · MTSKY md. 39/5 |
| Öğrenim | En az ilkokul | KTY md. 76/c |
| Teorik ders | 34 saat (trafik ve çevre 16, ilk yardım 8, araç tekniği 6, trafik adabı 4); günde 2–6 saat | MTSKY md. 7, 16/4 |
| Devam | Teorik ders saatinin 1/5'inden fazlasına katılmayanın kaydı silinir | MTSKY md. 14 |
| Direksiyon | Alanda en az 2 saat; akan trafikte B 14, A1/A2 12, A (2 yıllık A2 ile) 6 saat; en az 2 saati gece; günde en fazla 2 saat | MTSKY md. 7, 16/4 |
| Sıra | Direksiyon eğitimi teorik sınavı geçtikten sonra başlar | MTSKY md. 16/1 |
| Planlama süresi | Teorik sınav hakları kayıt döneminden itibaren 90 gün; direksiyon eğitimi teorik sınavı geçtikten sonra 90 gün | MTSKY md. 15/1 |
| e-Sınav | Tek sınav, 100 üzerinden 70 ve üzeri başarılı | MTSKY md. 28/1 |
| Direksiyon sınavı | İzinli güzergâh, rota sabah kurayla, en az 40 dakika; kırmızı 1 hata veya sarı 2 hata = başarısız; sertifika e-Devlet'ten | MTSKY md. 28/2-3 |
| Sınav hakkı | Teorik: ilk + 3 (yalnızca sınav ücreti). Direksiyon: ilk + 3 (her biri öncesi en az 2 saat ders), sonra 60 gün içinde ders alınarak 4 hak daha | MTSKY md. 15/1, 15/3 |
| Otomatik vites | Sertifikada "yalnızca otomatik" yazılır; kaldırmak için direksiyon eğitiminin yarısı + sınav | MTSKY md. 6/2, 39/2 |
| Kayıt belgeleri | Kimlik, öğrenim belgesi, 2 biyometrik fotoğraf (son 6 ay), sürücü olur raporu, 18 yaş altına veli/vasi muvafakatnamesi; sabıka kaydını MEB kendisi teyit eder | MTSKY md. 11 |
| Uzaktan kayıt | Belgelerin aslı görülür, fotoğraf kurumda çekilir → kayıt için kuruma gelinir | MTSKY md. 12 |

**Bilerek yazılmayanlar:**
- **Harç ve ücret tutarları:** Her yıl değişiyor; sitede "her yıl yeniden belirlenir" diye geçiyor.
- **e-Sınav soru sayısı ve süresi:** Yönetmelikte yok ("Bakanlıkça belirlenecek esaslar"). Haber sitelerinde 50 soru / 45 dakika deniyor ama resmî metinde görmediğim için yazmadım.
- **Sağlık raporunun geçerlilik süresi:** Ayrı bir yönetmelikte; kontrol edilmedi.

**Hâlâ `[DOĞRULA]` olanlar** (işletmeye ait, B bölümündeki sorular):
- Motosiklet marka/model
- Kurumun sağladığı ekipman
- Hafta sonu / akşam dersi
- Araç bazında vites tipi
- Ulaşım: durak, hatlar, otopark
- Hakkımızda bilgileri
- KVKK: unvan, MERSİS, saklama süresi, sağlayıcılar, hukukçu görüşü

> Hepsini bulmak için: `grep -rn "DOĞRULA" src`
