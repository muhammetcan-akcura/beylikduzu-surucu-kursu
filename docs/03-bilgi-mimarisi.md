# Bilgi mimarisi, anahtar kelimeler ve dönüşüm yolları

## Sayfa tablosu

| URL | Birincil anahtar kelime | Arama niyeti | Sayfa amacı | Ana CTA |
|---|---|---|---|---|
| `/` | beylikdüzü sürücü kursu | Yerel / ticari | İlk 10 saniyede konum, sınıflar, süreç ve iletişim | Hemen ara / WhatsApp |
| `/ehliyet-siniflari` | ehliyet sınıfları beylikdüzü | Bilgi → karşılaştırma | Doğru sınıfı seçtirmek | Sınıf sayfasına geçiş, form |
| `/ehliyet-siniflari/b-sinifi` | beylikdüzü b sınıfı ehliyet | Ticari | B ve otomatik vites seçeneğini netleştirmek | Ara / WhatsApp (hazır mesajlı), form (B seçili) |
| `/ehliyet-siniflari/a1-sinifi` | beylikdüzü a1 ehliyet | Ticari | Hafif motosiklet adayını ikna etmek | Ara / WhatsApp, form (A1 seçili) |
| `/ehliyet-siniflari/a2-sinifi` | beylikdüzü a2 ehliyet | Ticari | Kurye ve günlük kullanıcı | Ara / WhatsApp, form (A2 seçili) |
| `/ehliyet-siniflari/a-sinifi` | beylikdüzü a sınıfı ehliyet | Ticari | Şartları netleştirmek | Ara / WhatsApp, form (A seçili) |
| `/egitim-sureci` | ehliyet alma süreci | Bilgi | Belirsizlik kaygısını gidermek | Form, ara |
| `/direksiyon-egitimi` | beylikdüzü direksiyon eğitimi | Bilgi / ticari | Direksiyon kaygısını gidermek | Form, ara |
| `/hakkimizda` | beylik sürücü kursu | Marka / güven | Köklülük ve fiziksel varlık | Yol tarifi, form |
| `/sik-sorulan-sorular` | ehliyet kursu sık sorulan sorular | Bilgi | İtirazları karşılamak | Form |
| `/iletisim` | beylik sürücü kursu iletişim / adres | Navigasyon | Adres, harita, form | Ara / WhatsApp / form / yol tarifi |
| `/kvkk-aydinlatma-metni` | — | Yasal | Yasal yükümlülük | — |
| `/cerez-politikasi` | — | Yasal | Yasal yükümlülük, tercihleri değiştirme | Çerez tercihleri |
| `/styleguide` | — (noindex) | Dahili | Tasarım sistemi | — |

## Dönüşüm noktaları

Her sayfada sürekli görünenler:
- **Header:** Telefon numarası (tablet ve üstü), mobilde telefon ikonu, masaüstünde "Başvuru yap" butonu (`/iletisim#basvuru`).
- **Mobil sabit çubuk:** Hemen ara ve WhatsApp.
- **Footer:** Telefon, WhatsApp, e-posta, yol tarifi.

```
Google (yerel arama)
  ├─► /  ─┬─► Hero: Ara · WhatsApp ───────────────────────────► DÖNÜŞÜM
  │       ├─► #surec ─► /egitim-sureci ─► Kapanış formu ──────► DÖNÜŞÜM
  │       ├─► Sınıf satırı ─► /ehliyet-siniflari/[slug]
  │       └─► Kapanış: dev telefon numarası + form ───────────► DÖNÜŞÜM
  ├─► /ehliyet-siniflari/[slug] ─┬─► Ara / WhatsApp (sınıfa özel hazır mesaj) ─► DÖNÜŞÜM
  │                              ├─► İlgili sınıflar (iç link)
  │                              └─► Form (sınıf ön seçili) ──► DÖNÜŞÜM
  └─► /iletisim ─► Form · Ara · Yol tarifi ───────────────────► DÖNÜŞÜM
```

## Ölçülen olaylar (GA4, yalnızca çerez onayından sonra)

| Olay | Tetikleyici | Parametre |
|---|---|---|
| `phone_click` | Herhangi bir `tel:` link | `location` (hero, header, sticky, closing, class-b-sinifi…) |
| `whatsapp_click` | Herhangi bir `wa.me` link | `location` |
| `directions_click` | Yol tarifi linki | `location` |
| `generate_lead` | Form başarıyla gönderildiğinde | `form`, `location` (sayfa yolu) |

GA4'te `generate_lead`, `phone_click` ve `whatsapp_click` olaylarını **Anahtar etkinlik** olarak işaretleyin.
