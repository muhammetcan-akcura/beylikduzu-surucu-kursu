# Fotoğraf çekim brifingi

Sitedeki tüm görseller şu an açıkça **yer tutucu** (`/public/images/placeholder-*.svg`). Bu liste, gerçek çekimin tek seferde yapılabilmesi için hazırlandı.

## Genel ilkeler
- **Gerçek kişiler, gerçek araçlar, gerçek mekân.** Stok fotoğraf, yapay zekâ üretimi görsel ya da başka bir şehirde çekilmiş kare kullanılmaz.
- **Işık:** Doğal gün ışığı. En iyi zaman sabah 09–11 ya da öğleden sonra 15–17. Sert öğle güneşi ve flaş kullanılmaz.
- **Renk düzenlemesi (tüm kareler için aynı):** Nötr beyaz dengesi (~5500K), doygunluk −10, gölgeler nötr-soğuk (asfalt #14171C yönüne), vurgular temiz beyaz. Sarı tonlar (yol çizgisi, levha) bastırılmaz. Kontrast orta düzeyde, "HDR" görünüm yok.
- **Kadraj:** Yatay ağırlıklı ve bol boşluklu kareler. Başlık ya da bilgi paneli binebileceği için kenarlarda %15 güvenli alan bırakın.
- **İnsanlar:** Poz verdirmeyin; ders sırasında, doğal anlar. Görünen herkesten **yazılı görsel kullanım izni (KVKK açık rıza)** alın.
- **Plaka ve kişisel bilgi:** Öğrencilere ait araç plakaları ve ekranlar görünmesin.
- **Teslim:** En az 2400px genişlikte JPG, sRGB. Dosya adları aşağıdaki "Dosya" sütunundaki gibi.

## Kare listesi

| Kare | Dosya | Kullanıldığı yer | Konu | Kadraj ve not |
|---|---|---|---|---|
| 01 | `hero.jpg` | Ana sayfa hero (LCP), Direksiyon Eğitimi | Direksiyon başında eğitmen ve öğrenci | Yolcu tarafı arka koltuktan ya da açık yan camdan, **21:9** kırpmaya uygun. Ön camdan Beylikdüzü'nde tanınabilir ama sakin bir cadde. Yüzler profilden, rahat ve konuşur halde. Sağ alt köşe bilgi paneli için sade kalsın. |
| 02 | `mirror.jpg` | Ana sayfa "Eğitim ortamı" | Yan ayna detayı | Aynada arkadan gelen trafik yansıması, sığ alan derinliği (f/2–2.8). Dikey kırpmaya da uygun olsun. |
| 03 | `facade.jpg` | Neden biz, Hakkımızda | Kurum cephesi ve tabela | Karşı kaldırımdan, göz hizasında, **4:5 dikey** ve **4:3 yatay** iki versiyon. Öğleden sonra ışığı. Kapı açık, içerisi aydınlık. |
| 04a | `gear-manual.jpg` | Eğitim ortamı, B sınıfı | Manuel vites kolu, sürücü eli üzerinde | Orta konsol, yakın plan. |
| 04b | `gear-auto.jpg` | B sınıfı → Otomatik vites bölümü | Otomatik vites kolu (P-R-N-D) | 04a ile aynı ışık ve açı; ikisi yan yana kullanılabilmeli. |
| 05 | `car.jpg` | B sınıfı sayfası, ana sayfa | Hyundai eğitim aracı, yandan | Sade arka plan (eğitim alanı). Kurum logosu/çıkartması varsa görünsün. i10, i20, i30 için ayrı kareler. |
| 06 | `moto.jpg` | A1, A2, A sınıfı sayfaları | Eğitim alanında motosiklet, slalom dubaları | Koruyucu ekipmanla (kask, eldiven, mont). Hareket anı; 1/500 enstantane, alçak açı. |
| 07 | `classroom.jpg` | Hakkımızda | Teorik derslik | Arka köşeden geniş kadraj, eğitmen tahtada. Öğrencilerin yüzü net olmak zorunda değil. |
| 08 | `instructor.jpg` | (İleride) Hakkımızda / ekip | Eğitmen portresi | Araç yanında, yarım boy, doğal gülümseme. Eğitmen sayısı kadar. |
| 09 | `training-area.jpg` | Direksiyon Eğitimi | Eğitim alanının genel görünümü | Yüksek bir noktadan ya da drone ile (izin alınarak). Park ve manevra çizgileri görünsün. |

## Yerleştirme
1. Dosyaları `public/images/` altına koyun.
2. `src/content/media.ts` içinde ilgili kaydın `src`, `width`, `height` değerlerini güncelleyin ve `placeholder: false` yapın.
3. Alt metinler `media.ts` içinde hazır. Kare içeriği farklıysa metni de güncelleyin.
