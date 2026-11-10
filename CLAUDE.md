# Beylik Sürücü Kursu — Proje Kuralları

Bu dosya her oturumda okunur. Tasarım ve içerik kararlarının tek özetidir.

## Durum (2026-11-10)
- Yayın adresi (geçici): https://beyliksurucukursu.netlify.app (`site.ts` `domain`). Kalıcı alan adı gelince orası ve `.env.example` değişir.
- Kullanıcı "sen karar ver, soru sorma, bitir" dedi. Aşama 1–5 tamamlandı: **demo site çalışıyor ve derleniyor.**
- Kararlar ve açık sorular: `docs/ACIK-SORULAR.md`. Yeni sorular da oraya yazılır.
- Diğer belgeler: `docs/01-marka-stratejisi.md`, `docs/03-bilgi-mimarisi.md`, `docs/fotograf-brifingi.md`, `README.md`.

## Çalışma kuralları
- Bilinmeyen işletme bilgisi **uydurulmaz**. Yer tutucu biçimi: `[DOĞRULA: ...]`. `RichText` bileşeni bunu sitede kesik çizgili sarı etiket olarak gösterir.
- Ehliyet mevzuatı (yaş, ders saati, sınav, ücret, belge) ezberden yazılmaz. 2026-11-10'da mevzuat.gov.tr metinlerinden dolduruldu; madde madde kaynak tablosu `docs/ACIK-SORULAR.md` C bölümünde. Yeni mevzuat bilgisi yalnızca resmî metinden ve madde numarasıyla eklenir; harç/ücret tutarı yazılmaz.
- Boş işletme alanları sitede ve schema'da hiç görünmez. Demo değerler `site.ts` içinde `isDemo` / `// DEMO` ile işaretli.
- `[DOĞRULA]` içeren SSS cevapları FAQPage schema'sına girmez.
- Mahalle sayfası (doorway) oluşturulmaz.
- Her yeni paketin gerekçesi README'ye yazılır.

## Tek doğruluk kaynakları
- İşletme: `src/config/site.ts` · Menü: `src/config/navigation.ts` (gruplu `mainNav` → header paneli/mobil akordeon; `pageNav` → footer). Ana sayfa bölüm linkleri `/#id`; id'ler bölüm bileşenlerinde (`yaklasim`, `siniflar`, `surec`, `neden-biz`, `kareler`, `konum`, `araclar`, `sss`, `basvuru`). Bölüm eklenince menüye de eklenir. `mainNav` header'a layout'tan prop olarak geçer (içerik istemci paketine girmesin).
- İçerik: `src/content/` (`license-classes`, `process`, `faq`, `home`, `media`)
- Token'lar: `src/app/globals.css` `@theme`

## Marka
- Kişilik: Sakin · Net · Köklü · Yol gösteren.
- Ton: "siz" diye hitap edilir, kısa cümleler, somut ve doğrulanabilir. Ünlem ve emoji yok. "%100", "en iyi", "lider" gibi ifadeler kullanılmaz.
- Konsept **"Şerit"** (2026-11-10, eski "Editoryal Rota"nın yerine; kullanıcı "çok sade, yapay zekâ işi gibi" dedi): yol işaretlemesi ve levhalardan gelen cesur, fiziksel dil. Ton aynı kaldı (sakin, net); görsel dil yüksek sesli.
- **Yapılmayacaklar (eski şablonun izleri):** ince serif başlık, krem/bej zemin, kılcal çizgili "katalog satırı" listeler, bol boş beyaz alan ve küçük gri etiketlerden ibaret bölümler.

## Logo
- Sembol: "B"; gövdesi üç sarı şerit çizgisi. Geometri tek kaynak: `src/components/brand/mark.ts` (React, OG, ikonlar ve indirilebilir dosyalar buradan üretilir; `src/app/icon.svg` elle eşlenir).
- Bileşenler: `<Logo variant="horizontal|stacked|wordmark|mark" tone="light|dark|mono" size="sm|md|lg" href />` (`href={null}` → link yok) ve `<LogoMark tone />`.
- Açık zeminde sembol **her zaman asfalt rozet içinde** (sarı beyazda ince şekil olarak okunmaz). Koyu zeminde rozetsiz. `mono` = currentColor.
- Dosyalar: `/marka/<dosya>` (SVG + PNG; liste `src/app/marka/[file]/route.tsx`). Rehber: `/styleguide#logo`.
- Schema `logo` = `/marka/ikon-512.png` (Google SVG kabul etmez).

## Tasarım token'ları
**Renkler (WCAG AA kontrol edildi, tablo /styleguide'da):**

| Token | Hex | Kullanım |
|---|---|---|
| `ink` | `#14171C` | Ana metin |
| `ink-2` | `#1F242B` | Koyu bölüm ikinci katman |
| `surface` | `#FFFFFF` | Sayfa zemini |
| `surface-2` | `#EEF0F2` | Sakin bölüm zemini |
| `raised` | `#F7F8F9` | Kart / form yüzeyi |
| `graphite` | `#3D434B` | İkincil metin (9.99:1) |
| `muted` | `#5A616A` | Yardımcı metin (6.26:1) |
| `line` | `#DDE1E5` | Dekoratif ayraç |
| `line-strong` | `#80878F` | Form kenarlığı (UI, 3.63:1) |
| `accent` | `#F2C230` | Yalnızca zemin ve çizgi. Açık zeminde metin olarak ve ince çizgi olarak **yasak** (1.68:1); ink metinle 10.72:1 |
| `accent-ink` | `#6E5200` | Açık zeminde sarı aileden metin (7.32:1) |
| `on-ink` / `on-ink-muted` | `#F4F5F6` / `#A3ABB5` | Koyu zeminde metin |
| `whatsapp` | `#1D6E46` | WhatsApp butonu (beyaz metinle 6.23:1) |
| `danger` / `success` | `#A3362A` / `#2C6A44` | Durum renkleri |

**Font:** Archivo (değişken; `wdth` 62–125, `wght` 100–900), `latin` + `latin-ext`. Tek aile, iki uç:
- `font-display` → dar (wdth 75), 800, **BÜYÜK HARF** (globals.css base katmanı; `normal-case` ile ezilebilir). `lang="tr"` sayesinde i → İ doğru.
- `text-eyebrow`, `text-button`, `font-wide` → geniş (wdth 125), büyük harf. `font-cond` → yalnızca dar.
- OG görselleri: `src/app/fonts/archivo-cond-800.ttf` ("Display") ve `archivo-500.ttf` ("Sans").

**Tipografi ölçeği:** `text-display` (44→144px), `text-h1`, `text-h2`, `text-h3`, `text-lead`, `text-body` (17px), `text-small` (15px), `text-caption`, `text-eyebrow`, `text-button`.
- Display, H1, H2: `font-display` ile, 800. H3: normal genişlik, 700, büyük harf değil.

**Spacing:** 8px tabanlı. Bölüm ritmi `py-section-sm`, `py-section-md`, `py-section-lg`. Yanlarda `container-site` (max 84rem, gutter 16→40px).

**Radius:**

| Token | Değer | Kullanım |
|---|---|---|
| `rounded-hairline` | 4px | Görsel, küçük yüzey |
| `rounded-field` | 6px | Input |
| `rounded-control` | 8px | Buton, ikon kutusu |
| `rounded-card` | 14px | Kart, karo, SSS öğesi |
| `cut` / `cut-tr` | `--cut` (vars. 28px) | Kesik köşe: yalnızca görsel ve harita kutusu. **Odaklanabilir öğeye uygulanmaz** (outline kırpılır). |

Gölge yalnızca yüzen öğelerde (`shadow-float`, `shadow-sticky`) ve butonların sert alt çizgisinde.

**İmza öğeleri (globals.css):**
- `RoadStrip` (Typography.tsx): sarı kenarlı asfalt bant + akan kesik çizgi + yolda giden eğitim aracı (`TrainingCar`, `car={false}` ile kapatılır). Hero ve iç sayfa başlıklarının altında. Araç: beyaz hatchback, kapıda logo + "BEYLİK SÜRÜCÜ KURSU", tavanda "SÜRÜCÜ KURSU" levhası; üretici amblemi yok (tescilli marka). `.road` yatayda kırpar (`overflow-x: clip`), sayfa yana taşmaz.
- `.lane` / `.lane-ink`: kesik şerit bandı. `.hatch`: bariyer şeridi (yalnızca kapanış).
- `text-outline`: içi boş dev harf/rakam (dekoratif, `aria-hidden`). Koyu zeminde sarı çizgi.
- `ClassTicker`: sarı kayan sınıf bandı (dekoratif, `aria-hidden`).
- Kilometre taşı: asfalt kare içinde sarı numara (süreç adımları).

**Bölüm zeminleri:** Ritim: asfalt (`on-ink bg-ink`) → sarı (`on-accent bg-accent`) → beyaz → beton (`bg-surface-2`). Sarı zeminde metin ink; `.on-accent .verify` ink renkte.

**Buton varyantları:** `primary` (sarı), `secondary`, `dark`, `inverse`, `text`, `whatsapp`. Boyutlar md (48px) ve lg (56px). `ButtonLink` / `buttonClass` ile kullanılır.

**Header:** beyaz zemin (kullanıcı "site çok siyah oldu" dedi). 2026-11-10 yeniden yazıldı (eski mega panel "AI kokuyor, kasıyor" bulundu): üst bilgi çubuğu, arka plan karartması, sıralı karo animasyonu ve kaydırmada yükseklik değişimi **yok**. Sabit yükseklikte çubuk + altında 2px düz ink çizgi (kesik şerit denendi, tam genişlikte bozuk göründü). Grup adı doğrudan sayfasına gider; yanındaki ok düğmesi küçük asfalt açılır listeyi açar (üstte sarı şerit, sarı levha kareleri). Aktif öğe: altında sarı blok. Mobil menü beyaz: büyük grup adları + "+" ile açılan link çipleri, altta asfalt Ara/WhatsApp çubuğu.

**Çerez paneli:** Mobilde ekranın altına oturan beyaz panel + hafif karartma (tıklamayı engellemez). Onay verilene kadar mobil Ara/WhatsApp çubuğu gizli (`html[data-consent="pending"] .sticky-cta`; bayrağı `layout.tsx` içindeki erken betik koyar, `ConsentProvider` kaldırır). Onaydan sonra çubuk alttan kayarak gelir. Masaüstünde sağ altta kart.

**Koyu bölümler:** `on-ink` sınıfı eklenir; focus çizgisi sarı olur. İç sayfa başlıkları (`PageIntro`) asfalt zeminlidir.

**Bölüm etiketleri (`Eyebrow`):** iki kısa şerit + geniş büyük harf. Ana sayfada numaralı kare (01–09; 05 = PhotoReel fotoğraf şeridi); iç sayfalarda numarasız (`number=""`). `tone`: light / dark / accent.

**Hareket:** Yalnızca CSS/SMIL: `.reveal` (scroll-driven), kayan bant, akan yol çizgisi, araç, hero rotası, fotoğraf şeridi. Bu marka hareketleri `prefers-reduced-motion`'dan **bağımsız** oynar (2026-11-10: telefonlar pil tasarrufunda bu ayarı açıyor, site mobilde tamamen duruyordu). Hover/geçiş efektleri ve yumuşak kaydırma ayara uyar. Fotoğraf şeridinde durdurma düğmesi var; kayan bant yalnızca gerçek fare hover'ında duraklar.

## Teknik
- Next.js 16.4, Turbopack, tüm sayfalar statik.
- `"use client"` yalnızca şu bileşenlerde: SiteHeader, ApplicationForm, consent/*.
- "use client" dosyalarından bileşen dışında değer export edilmez; ortak sabitler `form-schema.ts`'te.
- Tailwind 4.3.3'e sabit (Node 22.10 uyumluluğu, bkz. README).
- Analitik: tel/wa.me/yol tarifi tıklamaları `Analytics.tsx` içinde global olarak dinlenir. Linklere `data-track-location` verilir.
- Görseller `Photo` bileşeninden geçer. Şu an SVG yer tutucu (`unoptimized`). LCP görseli hero, `preload` ile yüklenir.
