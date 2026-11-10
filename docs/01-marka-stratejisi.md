# Aşama 1 — Marka Stratejisi

> Durum: **Onay bekliyor.** Bu aşamada kod yok. Konsept seçimi ve açık sorular yanıtlandıktan sonra Aşama 2'ye (tasarım sistemi) geçilecek.

---

## 1. Sektör ve rakip analizi

Türkiye'deki sürücü kursu sitelerinin büyük çoğunluğu aynı birkaç kalıbı tekrarlıyor. Aşağıdaki tespitler belirli bir firmayı değil, sektördeki genel deseni anlatıyor.

### Tipik görsel kalıplar
| Kalıp | Neden başarısız |
|---|---|
| Kırmızı–sarı–mavi palet, trafik levhası ikonları, "L" plakası | Herkes aynı görünüyor; güven değil "ucuz ilan" hissi veriyor. |
| Otomatik dönen slider hero (3–5 slayt) | İlk 10 saniyede tek bir mesaj iletilemiyor; LCP ağır, mobilde yavaş. |
| Yabancı stok fotoğraf (gülümseyen model, Amerikan yolu, sol direksiyon) | Gerçeklik duygusunu yok ediyor; "burası neresi?" sorusu cevapsız kalıyor. |
| Hazır WordPress temaları, 5 farklı font, gölgeli kartlar | Hiyerarşi yok, her şey eşit bağırıyor. |
| Yüzen WhatsApp balonu + çerez bandı + kampanya pop-up'ı aynı anda | Mobilde içeriğin üçte birini kapatıyor. |

### Tipik içerik kalıpları
| Kalıp | Neden başarısız |
|---|---|
| "%100 başarı", "En iyi kurs", "Binlerce mezun" | Doğrulanamaz; kullanıcı inanmıyor, ayrıca reklam mevzuatı açısından riskli. |
| Adres yalnızca footer'da, küçük puntoyla | Yerel aramada en kritik soru ("Nerede?") gizleniyor. |
| Ehliyet sınıfları yalnızca tablo halinde | "Bu sınıf bana uygun mu?" sorusunu cevaplamıyor. |
| Süreç anlatımı yok | Kullanıcı kayıttan sonra ne olacağını, ne kadar süreceğini bilmiyor; bu en büyük kaygı. |
| 30 tane "Beylikdüzü X Mahallesi Sürücü Kursu" sayfası | Doorway page; Google'ın cezalandırdığı içerik. Kullanıcıya da hiçbir şey anlatmıyor. |
| Form: 10+ alan, TC kimlik no, doğum tarihi | Dönüşümü öldürüyor; KVKK açısından gereksiz veri toplama. |

### Nasıl ayrışacağız
1. **Tek mesajlı, tipografik hero.** Slider yok. Lokasyon H1'de, adres ve sınıflar ilk ekranda.
2. **Süreç merkezli anlatım.** "Kayıttan belgeye" adımları sitenin omurgası olacak; rakiplerin en zayıf olduğu yer burası.
3. **Yalnızca doğrulanabilir iddialar.** "2000'den beri" gibi kontrol edilebilir bilgiler; uydurma istatistik yok.
4. **Gerçek yerellik.** Adres, harita, ulaşım bilgisi; mahalle isimleri yalnızca doğal bağlamda.
5. **Editoryal disiplin.** Sınırlı palet, iki font, geniş boşluk, bilinçli hiyerarşi. Otomotiv markalarının sakinliği.
6. **Kısa form + doğrudan arama/WhatsApp.** 4 alan, KVKK onayı, o kadar.

---

## 2. Hedef kitle

### Profil 1 — Elif, 18, lise son / üniversite hazırlık
- **Durum:** İlk ehliyetini alacak. Kararı genelde ailesiyle birlikte veriyor; ödemeyi çoğu zaman aile yapıyor.
- **Kaygılar:** Sınavda kalmak, direksiyonda panik olmak, eğitmenin sert/sabırsız olması, okul/dershane programıyla çakışma.
- **Soruları:** "Kaç yaşında başvurabilirim?" `[DOĞRULA: MEB]` · "Ne kadar sürer?" · "Hafta sonu ders var mı?" · "Sınavda kalırsam ne olur?"
- **Karar kriterleri:** Yakınlık (yürüyerek / tek otobüs), arkadaş tavsiyesi, eğitmenin tavrı, ailenin güvenmesi.
- **Site için anlamı:** Süreç sayfası net ve korkutmayan bir dille yazılmalı. Ebeveynin de okuyacağı unutulmamalı.

### Profil 2 — Murat, 34, Beylikdüzü'nde oturan beyaz yaka çalışan
- **Durum:** Yıllardır erteledi; artık işi veya çocukları için araca ihtiyacı var. Otomatik vites düşünüyor.
- **Kaygılar:** Zaman (mesai saatleri), yaşına göre "geç kaldım" utancı, gizli ücretler, belirsiz takvim.
- **Soruları:** "Mesai dışı / hafta sonu direksiyon dersi var mı?" · "Otomatik vites ehliyeti neyi kısıtlar?" `[DOĞRULA: mevzuat]` · "Toplam kaç hafta sürer?" · "Kaç kez kuruma gelmem gerekir?"
- **Karar kriterleri:** Esneklik, şeffaflık, hızlı geri dönüş. Telefonda ilk konuşmanın kalitesi belirleyici.
- **Site için anlamı:** Çalışma saatleri ve iletişim her zaman görünür. WhatsApp hazır mesajı "Mesai sonrası ders saatleri hakkında bilgi almak istiyorum" gibi seçenekler sunmalı.

### Profil 3 — Kerem, 26, kurye / motosiklet tutkunu
- **Durum:** A2 veya A sınıfı istiyor. Belki B ehliyeti zaten var.
- **Kaygılar:** Hangi sınıfın kendine uygun olduğu (motor gücü / yaş sınırları), mevcut ehliyetinin sağladığı muafiyetler, pratik eğitimin nerede yapılacağı.
- **Soruları:** "A1, A2, A farkı ne?" · "B ehliyetim varsa ne değişir?" `[DOĞRULA: mevzuat]` · "Eğitim motoru ne?" `[DOĞRULA: kurum]`
- **Karar kriterleri:** Net teknik bilgi, karşılaştırma, hızlı süreç.
- **Site için anlamı:** Sınıf sayfalarında karşılaştırma bloğu ve "hangi sınıf bana uygun?" yönlendirmesi.

### Profil 4 — Ayşe, 47, ebeveyn / karar verici
- **Durum:** Çocuğu için araştırıyor ya da kendisi uzun aradan sonra başlamak istiyor.
- **Kaygılar:** Kurumun resmi ve güvenilir olması, ödeme koşulları, eğitmenlerin profesyonelliği.
- **Soruları:** "Kurum ne zamandan beri var?" · "Yeri tam olarak nerede?" · "Ödeme nasıl yapılıyor?" `[DOĞRULA: kurum]`
- **Karar kriterleri:** Köklülük (2000'den beri), fiziksel adresin netliği, telefonda insanla konuşabilmek.
- **Site için anlamı:** Hakkımızda sayfası somut olmalı; adres + harita + cephe fotoğrafı güveni taşır.

---

## 3. Marka karakteri

**Kişilik:** Sakin · Net · Köklü · Yol gösteren

Bir eğitmenin direksiyon başında yanınızdaki tavrı: sesini yükseltmeyen, ne yapacağınızı önceden söyleyen, panik anında sakinleştiren biri.

### Ses tonu rehberi
| İlke | Böyle yazarız | Böyle yazmayız |
|---|---|---|
| **Somut ol** | "Kayıttan sonra teorik derslerle başlıyorsunuz. Direksiyon eğitimi teorik sınavdan sonra planlanıyor." `[DOĞRULA: sıra]` | "Profesyonel kadromuzla eşsiz bir eğitim deneyimi sunuyoruz!" |
| **Sakin ol** | "Sınavda kalırsanız tekrar hakkınız var; süreci birlikte planlarız." | "Asla kalmazsınız! %100 başarı garantisi!" |
| **Doğrulanabilir ol** | "2000 yılından beri Beylikdüzü'ndeyiz." | "Sektörün lideri, binlerce mutlu mezun." |
| **"Siz" de, ama mesafeli olma** | "Hangi sınıfın size uygun olduğunu birlikte belirleyelim." | "Sayın müşterimiz, kurumumuz tarafından…" |
| **Kısa cümle** | "Bizi arayın. Ders saatlerini telefonda planlayalım." | "Detaylı bilgi almak ve kayıt işlemlerinizi gerçekleştirmek için lütfen iletişim kanallarımız aracılığıyla bizlere ulaşınız." |
| **Kaygıyı adlandır** | "İlk direksiyon dersinde heyecanlanmak normal. Trafiğe çıkmadan önce sakin bir alanda başlıyoruz." `[DOĞRULA: kurum uygulaması]` | "Korkmayın!" |

**Ünlem işareti:** Neredeyse hiç. **Büyük harfle yazı:** Yalnızca küçük etiketlerde (eyebrow). **Emoji:** Yok.

---

## 4. Görsel yön — 2 konsept

Başlangıç paleti (deep navy, warm off-white, amber, graphite, soft gray) her iki konseptte de temel alındı ama farklı rollerle. Gerekçe:
- **Deep navy:** Mavi, kurumsal güvenin evrensel rengi; ama klişe "parlak sürücü kursu mavisi" yerine siyaha yakın lacivert, otomotiv kataloglarının ve gece yolunun tonu.
- **Warm off-white:** Saf beyaz yerine kâğıt hissi; editoryal, sıcak, ekranda yorucu değil.
- **Amber:** Trafik dünyasından gelen tek renk (sinyal, şerit, uyarı ışığı) ama **kontrollü**: yalnızca vurgu ve aksiyon. Kırmızı (tehlike/yasak) ve sarı (ucuz kampanya) çağrışımından uzak.
- **Graphite / soft gray:** Asfalt, lastik, kokpit. Yapıyı taşıyan nötr katman.

> Not: Amber, off-white üzerinde **metin rengi olarak** AA kontrastı sağlamaz. Amber yüzeyde lacivert metin ya da koyulaştırılmış bir amber tonu kullanılacak. Kesin oranlar Aşama 2'de tablo olarak verilecek.

### Konsept A — "Editoryal Rota"
**Fikir:** Bir otomotiv dergisinin ya da premium bir araç kataloğunun sakinliği. Büyük, iyi ayarlanmış tipografi; bol boşluk; numaralı bölümler (01, 02…); yatay, sinematik fotoğraf kesitleri.

| Rol | Renk | Hex (öneri) |
|---|---|---|
| Ink (ana metin, koyu yüzey) | Deep navy | `#0E1A2B` |
| Surface (sayfa zemini) | Warm off-white | `#F5F2EB` |
| Accent (CTA, vurgu) | Amber | `#D08A2E` |
| Accent-ink (metin olarak amber) | Koyu amber | `#8A5212` |
| Graphite (ikincil metin) | Graphite | `#3A3F47` |
| Line / muted surface | Soft gray | `#DAD6CC` |

**Fontlar:** **Fraunces** (başlıklar; optik boyutlu serif, düşük "softness" ayarıyla keskin ve otoriter) + **Hanken Grotesk** (gövde, arayüz; sade, okunaklı, sıcak grotesk).

**Hero yaklaşımı:** Görselsiz başlayan tipografik açılış. Solda büyük serif H1, altında kısa alt metin ve iki CTA. Sağda ya da altta **yatay, panoramik bir fotoğraf şeridi** (ör. dikiz aynasında yol yansıması, ellerin direksiyonda detay çekimi). H1'in hemen altında ince çizgilerle ayrılmış bir **bilgi satırı**: `Cumhuriyet Mah., Beylikdüzü · B · A1 · A2 · A · Otomatik · 09.00–18.00`. Bu, istatistik şeridi değil, gerçek bilgi şeridi.

**Radius:** Fotoğraflar ve kartlar keskin (0–2px); yalnızca butonlar ve form alanları hafif yuvarlak (6px). Disiplin hissi.

**Riski:** Fazla "sakin" kalırsa 18 yaş grubuna mesafeli gelebilir. Çözüm: fotoğraflarda gerçek insanlar ve sıcak ışık.

### Konsept B — "Sinyal"
**Fikir:** Yol yönlendirme sistemleri (wayfinding), havaalanı/otoyol levha tipografisi ve gösterge paneli. Bilgi odaklı, grid'e bağlı, sistematik. Süreç, bir **rota çizgisi** olarak bütün sitede görsel motif olur (kayıt → teori → sınav → direksiyon → belge).

| Rol | Renk | Hex (öneri) |
|---|---|---|
| Ink | Graphite (siyaha yakın) | `#16191E` |
| Surface | Off-white (daha nötr) | `#F2F1ED` |
| Brand / koyu bölümler | Deep navy | `#13233D` |
| Accent (rota çizgisi, CTA) | Amber | `#E09A35` |
| Accent-ink | Koyu amber | `#8A5212` |
| Line | Soft gray | `#D4D3CD` |

**Fontlar:** **Schibsted Grotesk** (başlıklar; sıkı, editoryal grotesk) + **IBM Plex Sans** (gövde) + **IBM Plex Mono** (etiketler, adım numaraları, saat/adres verileri — gösterge paneli hissi).

**Hero yaklaşımı:** Ekranı ikiye bölen grid. Üstte H1, altta yatayda akan **rota diyagramı**: 5 durak, amber çizgiyle bağlı, her durakta mono fontla kısa etiket. Fotoğraf hero'da ikincil; navy zeminli sağ blokta tek bir detay karesi (vites / ayna). Mobilde rota dikey akar.

**Radius:** Neredeyse sıfır (0–2px), butonlar dahil. Levha disiplini.

**Riski:** Fazla "teknik/kurumsal" algılanabilir; sıcaklığı fotoğraf ve metin tonu taşımalı.

### Önerim
**Konsept A**, temel tercih olarak. Hedef kitlenin baskın kaygısı "güvenebilir miyim, panik olur muyum?"; A'nın sakin, editoryal karakteri buna daha iyi cevap veriyor ve ebeveyn profiline de hitap ediyor. B'nin **rota motifini** yalnızca Eğitim Süreci bölümünde ve sayfasında ödünç almayı öneririm. Böylece sitenin omurgası olan süreç anlatımı görsel olarak da ayrışır.

---

## 5. Font doğrulaması

Google Fonts CSS API'si 2026-11-10 tarihinde sorgulandı. Türkçe karakterlerin kod noktaları:
- `ü ö ç Ü Ö Ç` → `latin` alt kümesinde (U+00C0–00FF)
- `ğ Ğ ş Ş ı İ` → `latin-ext` alt kümesinde (U+011E–011F, U+0130–0131, U+015E–015F; latin-ext aralığı U+0100–02BA)

| Font | Kullanım | Sunulan alt kümeler | Türkçe |
|---|---|---|---|
| Fraunces | A — başlık | latin, latin-ext, vietnamese | ✓ |
| Hanken Grotesk | A — gövde | latin, latin-ext, cyrillic-ext, vietnamese | ✓ |
| Schibsted Grotesk | B — başlık | latin, latin-ext | ✓ |
| IBM Plex Sans | B — gövde | latin, latin-ext, cyrillic, greek, … | ✓ |
| IBM Plex Mono | B — etiket | latin, latin-ext, cyrillic, … | ✓ |

**Kalan doğrulama:** Alt küme listesi glif varlığını güçlü biçimde gösterir, ama görsel kalite (özellikle `İ` noktasının büyük punto serif'te ve `ı`/`i` ayrımının küçük puntoda) Aşama 2'de `/styleguide` sayfasında `İŞĞÜÇÖı — Işık, ışıl, İstanbul, Beylikdüzü, Güvenle` test dizisiyle her ağırlıkta render edilerek kontrol edilecek. `next/font/google` içinde `subsets: ['latin', 'latin-ext']` zorunlu.

---

## 6. Açık sorular / doğrulanacak bilgiler

`site.ts` yazılmadan önce netleşmesi gerekenler:

1. **Posta kodu:** Verilen `35420` bir İzmir posta kodu. Beylikdüzü kodları `345xx` ile başlar. Doğru kod nedir? `[DOĞRULA]`
2. **Açık adres:** "Cumhuriyet Mahallesi" var; cadde/sokak, bina no ve varsa kat bilgisi gerekli.
3. **Koordinatlar:** Uyduramam. Google Haritalar'da kurumun üzerine sağ tıklayıp ilk satırdaki sayıları (örn. `41.0xx, 28.6xx`) gönderin. Gelene kadar harita adres aramasıyla çalışır, schema'da `geo` alanı boş kalır.
4. **"B otomatik":** Mevzuatta ayrı bir sınıf mı, yoksa otomatik vites kısıtlamalı B mi olarak geçiyor? `[DOĞRULA: MEB]` Sitede ayrı sayfa (`/ehliyet-siniflari/b-otomatik`) mi, yoksa B sınıfı sayfasında bölüm mü olsun? Önerim: B sayfası içinde ayrıntılı bölüm + ayrı sayfa yalnızca yeterli özgün içerik varsa.
5. **Araçlar:** Hyundai i10, i20, i30. Hangileri otomatik vites? A1/A2/A eğitimi için hangi motosikletler kullanılıyor?
6. **Çalışma günleri:** 09.00–18.00 hangi günler? Cumartesi/Pazar durumu?
7. **Google Business Profile ve sosyal medya:** "Örnek ekle" dediniz; ancak sahte link sitede görünmemeli. Önerim: `site.ts` içinde bu alanları **isteğe bağlı** tanımlayıp yorum satırında örnek format vermek. Değer girilene kadar footer'da ve schema'da (`sameAs`) hiç görünmezler. Uygun mu?
8. **Direksiyon eğitim alanı / pist:** Kurumun kendi alanı var mı, yoksa trafikte mi başlıyor? (Ses tonu örneğindeki iddia buna bağlı.)
9. **Eğitmen bilgisi ve fiyatlar:** Sitede ücret yayınlanacak mı? (Önerim: hayır, "bilgi için arayın"; mevzuat ve kampanya değişikliklerinde güncel olmayan fiyat güven kaybettirir.)
10. **Brif kesildi:** Mesajınız "8. Teknik SEO → Metadata → Open Graph ve Twitter kartları," satırında bitiyor. Devamını (schema, sitemap, performans, kabul kriterleri vb.) gönderebilir misiniz?

---

### Yanıtlar (2026-11-10)
1. Posta kodu: **34520**
2. Adres: demo değer kullanılacak, sonra güncellenecek
3. Koordinat: demo değer, sonra güncellenecek
4. B otomatik: **B sınıfı sayfasında ayrı bölüm**
5. Araçlar: manuel ve otomatik vites ikisi de var
6. Çalışma: **7 gün açık**, 09.00–18.00
7. GBP / sosyal: alanlar eklenecek, linkler boş kalacak (render edilmez)
8. Eğitim alanı: hem pist/alan hem trafik
9. Fiyat: şimdilik yayınlanmayacak
10. Brif devamı: bekleniyor

## Onay için

- [ ] Konsept A mı, B mi (ya da önerdiğim A + B'nin rota motifi)?
- [ ] Marka karakteri ve ses tonu uygun mu?
- [ ] Yukarıdaki 10 soruya yanıtlar

## Palet güncellemesi (2026-11-10)

Kullanıcı geri bildirimi: krem zemin + lacivert + amber üçlüsü "her sitede aynı, yapay zekâ işi gibi" duruyordu. Yeni palet sürücü kursunun kendi dünyasından geliyor: **asfalt, beton, yol çizgisi.**

| Rol | Eski | Yeni |
|---|---|---|
| Ink (metin, koyu bölüm) | Deep navy `#0E1A2B` | Asfalt `#14171C` |
| Surface (sayfa zemini) | Warm off-white `#F5F2EB` | Beyaz `#FFFFFF` |
| Surface-2 (sakin bölüm) | `#ECE7DC` | Beton grisi `#EEF0F2` |
| Accent (CTA, rota) | Amber `#D08A2E` | Yol çizgisi sarısı `#F2C230` |
| Accent-ink (açık zeminde metin) | `#8A5212` | `#6E5200` |

Kural: sarı yalnızca **zemin** (butonlar) ya da **koyu zemin üzerinde** (rota çizgisi, numaralar) kullanılır. Açık zeminde metin ya da ince çizgi olarak kullanılmaz (1.68:1). Açık zemindeki rota çizgisi bu yüzden ink renginde, durak noktaları sarı.

## Görsel dil yenilemesi: "Şerit" (2026-11-10)

Kullanıcı geri bildirimi: palet değişikliğinden sonra da site "çok sade, her sitede aynı" duruyordu. Sorun renkte değil iskeletteydi. İnce serif başlık, 01–08 numaralı küçük etiketler, kılcal çizgiler ve bol boşluk son dönemin "editoryal premium" şablonu. Bu belgedeki Konsept A tipografisi (Fraunces + Hanken Grotesk) ve hero yaklaşımı artık geçerli değil.

**Yeni dil** sürücü kursunun kendi nesnelerinden geliyor: yol çizgisi, asfalt, levha, kilometre taşı.
- **Tipografi:** Archivo. Başlıklar dar, kalın ve büyük harfle yazılıyor; yol levhası yazısı gibi okunuyor. Etiketler ve butonlar geniş büyük harf. Tek ailenin iki ucu kullanılıyor.
- **Zemin ritmi:** Asfalt hero, sarı kayan sınıf bandı, beyaz, asfalt sınıf karoları, sarı süreç yolu, beyaz, beton, sarı kapanış, asfalt footer.
- **İmzalar:**
  - Hero ve iç sayfa başlıklarında akan yol şeridi.
  - Kesik köşeli görseller (levha/plaka kesimi).
  - İçi boş dev rakamlar ("2000", sınıf kodları).
  - Kilometre taşı numaralı süreç adımları.
  - İkon plakalı butonlar.
- **Ton değişmedi:** Metinler yine sakin, net ve doğrulanabilir. Görsel ses yükseldi, söylenen şey aynı kaldı.
