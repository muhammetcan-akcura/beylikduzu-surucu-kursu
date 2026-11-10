# Beylik Sürücü Kursu — Web Sitesi

Next.js 16 (App Router, SSG) · TypeScript strict · Tailwind CSS 4.

## Çalıştırma

```bash
npm install
cp .env.example .env.local   # değerleri doldurun (hepsi isteğe bağlı)
npm run dev                  # http://localhost:3000
npm run build && npm start   # üretim
```

**Node:** ≥ 22.10. Tailwind `4.3.3` sürümüne **sabitlendi**. 4.3.4 ve sonrası ESM-only bir bağımlılık (`magic-string@1`) getiriyor ve Node 22.12'den eski sürümlerde derleme kırılıyor. Node 22.12+ kullanıyorsanız sürümü yükseltebilirsiniz.

## Nerede ne var

| Ne | Nerede |
|---|---|
| İşletme bilgileri (tek kaynak) | `src/config/site.ts` |
| Menü | `src/config/navigation.ts` |
| İçerik (sınıflar, süreç, SSS, ana sayfa metinleri, görseller) | `src/content/*.ts` |
| Tasarım token'ları | `src/app/globals.css` (`@theme`) |
| Stil rehberi | `/styleguide` (noindex) |
| Metadata üretici | `src/lib/metadata.ts` |
| JSON-LD üreticileri | `src/lib/schema.ts` |
| Form (Server Action, doğrulama, honeypot) | `src/components/forms/` |
| E-posta servisi (Resend, fetch ile) | `src/lib/email.ts` |
| Çerez onayı, GA4, harita | `src/components/consent/` |
| Kararlar ve açık sorular | `docs/ACIK-SORULAR.md` |
| Bilgi mimarisi ve anahtar kelimeler | `docs/03-bilgi-mimarisi.md` |
| Fotoğraf çekim brifingi | `docs/fotograf-brifingi.md` |

## Bağımlılıklar ve gerekçeleri

| Paket | Neden |
|---|---|
| `next`, `react`, `react-dom` | Çatı |
| `tailwindcss`, `@tailwindcss/postcss` | Stil (dev) |
| `typescript`, `@types/*` | Tip denetimi (dev) |

Bilerek **eklenmeyenler:**
- **İkon kütüphanesi (lucide vb.):** Hazır setler sitenin şablon gibi görünmesine yol açıyordu. Kuruma özel çizgisel set `src/components/ui/Icon.tsx` içinde (logo ile aynı geometri dili). Yeni ikon gerekirse oraya aynı kurallarla eklenir.
- **Animasyon kütüphanesi:** CSS `animation-timeline: view()` yeterli; `prefers-reduced-motion`'a uyar.
- **Resend SDK:** `fetch` yeterli.
- **Form ve doğrulama kütüphanesi:** Dört alan için gereksiz.
- **Akordeon kütüphanesi:** Yerel `<details>` kullanılıyor.

## SEO

- Her sayfada `metadata` / `generateMetadata`, `alternates.canonical`, Open Graph ve Twitter kartı var. `<html lang="tr">`, `metadataBase` ise `NEXT_PUBLIC_SITE_URL`'den geliyor.
- Başlıklar 60 karakterin altında, açıklamalar 150–160 karakter (otomatik kontrol edildi).
- OG görseli `src/app/opengraph-image.tsx` ile üretiliyor. Türkçe karakterler için fontlar `src/app/fonts/` altından yükleniyor (OFL lisanslı).
- JSON-LD:
  - Tüm sayfalarda: `DrivingSchool + LocalBusiness`, `WebSite`
  - İç sayfalarda: `BreadcrumbList`
  - Sınıf sayfalarında: `Course`
  - SSS içeren sayfalarda: `FAQPage` (yalnızca doğrulanmış cevaplar)
- Boş alanlar (`geo`, `sameAs`, `hasMap`) schema'dan otomatik düşüyor.
- `sitemap.xml` ve `robots.txt` otomatik üretiliyor.
- URL'ler küçük harf ve ASCII; sonda slash yok (`trailingSlash: false`).

## Yayın öncesi kontrol listesi

- [ ] `site.ts` → `isDemo: false`, gerçek adres ve koordinat
- [ ] `grep -rn "DOĞRULA" src` → hepsi çözüldü
- [ ] KVKK ve çerez metinleri hukukçu onayından geçti
- [ ] `.env.local`: `RESEND_API_KEY`, `LEAD_FROM_EMAIL`, `NEXT_PUBLIC_GA_ID`
- [ ] Gerçek fotoğraflar `media.ts`'e işlendi
- [ ] Google Search Console ve Google İşletme Profili bağlandı
