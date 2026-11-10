import { pageMetadata } from "@/lib/metadata";
import { ButtonLink, buttonClass } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Typography";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import { fieldCls, labelCls } from "@/components/forms/form-schema";
import { Logo } from "@/components/layout/Logo";
import { Icon, iconNames } from "@/components/ui/Icon";
import { LogoMark } from "@/components/brand/LogoMark";

export const metadata = pageMetadata({
  title: "Stil Rehberi",
  description: "Tasarım sistemi: renk, tipografi, spacing, radius, buton, kart ve form bileşenleri. Yalnızca dahili kullanım içindir ve arama motorlarına tamamen kapalıdır.",
  path: "/styleguide",
  noindex: true,
});

const colors = [
  { token: "ink", hex: "#14171C", role: "Ana metin, koyu yüzey" },
  { token: "ink-2", hex: "#1F242B", role: "Koyu bölüm ikinci katman" },
  { token: "surface", hex: "#FFFFFF", role: "Sayfa zemini" },
  { token: "surface-2", hex: "#EEF0F2", role: "Sakin bölüm zemini" },
  { token: "raised", hex: "#F7F8F9", role: "Kart / form yüzeyi" },
  { token: "graphite", hex: "#3D434B", role: "İkincil metin" },
  { token: "muted", hex: "#5A616A", role: "Yardımcı metin" },
  { token: "line", hex: "#DDE1E5", role: "Dekoratif ayraç" },
  { token: "line-strong", hex: "#80878F", role: "Form kenarlığı" },
  { token: "accent", hex: "#F2C230", role: "CTA zemini, rota çizgisi" },
  { token: "accent-ink", hex: "#6E5200", role: "Açık zeminde sarı aileden metin" },
  { token: "on-ink-muted", hex: "#A3ABB5", role: "Koyu zeminde ikincil metin" },
  { token: "whatsapp", hex: "#1D6E46", role: "WhatsApp butonu" },
  { token: "danger", hex: "#A3362A", role: "Hata" },
  { token: "success", hex: "#2C6A44", role: "Başarı" },
];

// scratchpad/contrast.js ile hesaplandı (WCAG 2.x göreli parlaklık formülü)
const contrast = [
  ["ink", "surface", "15.64", "AAA"],
  ["ink", "surface-2", "14.18", "AAA"],
  ["graphite", "surface", "9.48", "AAA"],
  ["muted", "surface", "5.48", "AA"],
  ["muted", "surface-2", "4.97", "AA"],
  ["accent-ink", "surface", "5.70", "AA"],
  ["ink", "accent", "6.12", "AA"],
  ["on-ink (surface)", "ink", "15.64", "AAA"],
  ["on-ink-muted", "ink", "8.25", "AAA"],
  ["on-ink-muted", "ink-2", "7.19", "AAA"],
  ["accent", "ink", "6.12", "AA"],
  ["white", "whatsapp", "6.23", "AA"],
  ["danger", "surface", "6.02", "AA"],
  ["success", "surface", "5.78", "AA"],
  ["line-strong (UI)", "surface", "3.16", "AA · UI ≥3:1"],
];

const type = [
  { cls: "text-display font-display", name: "Display", spec: "clamp(44→144px) · 0.9 · 800 · Archivo dar (wdth 75) · BÜYÜK HARF" },
  { cls: "text-h1 font-display", name: "H1", spec: "clamp(42→92px) · 0.9 · 800 · Archivo dar · BÜYÜK HARF" },
  { cls: "text-h2 font-display", name: "H2", spec: "clamp(34→64px) · 0.94 · 800 · Archivo dar · BÜYÜK HARF" },
  { cls: "text-h3", name: "H3", spec: "clamp(19→23px) · 1.2 · 700 · Archivo normal" },
  { cls: "text-lead", name: "Lead", spec: "clamp(18→21px) · 1.55 · 400" },
  { cls: "text-body", name: "Body", spec: "17px · 1.65 · 400 (16px altına inmez)" },
  { cls: "text-small", name: "Small", spec: "15px · 1.5 · 400 — yardımcı metin" },
  { cls: "text-caption", name: "Caption", spec: "13px · 1.4 · +0.01em · 500 — etiket" },
  { cls: "text-eyebrow uppercase", name: "Eyebrow", spec: "12px · 1.2 · +0.16em · 600 · BÜYÜK HARF" },
  { cls: "text-button", name: "Button", spec: "16px · 1 · +0.005em · 600" },
];

const turkishTest = "İŞĞÜÇÖı — Işık, ışıl ışıl İstanbul; Beylikdüzü'nde güvenle çıkış.";

function Block({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} aria-labelledby={`${id}-t`} className="border-t border-ink py-section-sm">
      <h2 id={`${id}-t`} className="mb-10 font-display text-h2">
        {title}
      </h2>
      {children}
    </section>
  );
}

export default function StyleguidePage() {
  return (
    <div className="container-site py-section-sm">
      <Eyebrow>Dahili · noindex</Eyebrow>
      <h1 className="mt-5 font-display text-h1">Stil rehberi</h1>
      <p className="mt-4 max-w-prose text-lead text-graphite">
        Konsept “Şerit”: asfalt + beton + yol çizgisi sarısı, Archivo dar/geniş. Token kaynağı: <code>src/app/globals.css</code> (<code>@theme</code>). Kurallar: <code>CLAUDE.md</code>.
      </p>

      <Block id="logo" title="Logo">
        <p className="max-w-prose text-body text-graphite">
          Sembol, sağ üst köşesi kesik sarı bir levhanın içinde dolu, dar ve kalın bir “B”. B’nin iki iç boşluğu aynı eksende iki şerit çizgisidir: harfin içinden kesik yol orta çizgisi geçer. Kurumun adı ile işi tek işarette.
          Bileşen: <code>&lt;Logo variant tone size href /&gt;</code> ve <code>&lt;LogoMark tone /&gt;</code>. Geometri tek kaynak:{" "}
          <code>src/components/brand/mark.ts</code>.
        </p>

        <h3 className="mt-12 mb-4 text-h3">Varyantlar</h3>
        <ul className="grid gap-px bg-line md:grid-cols-2">
          {(
            [
              ["horizontal", "Yatay — header, belge başlığı, e-posta imzası"],
              ["stacked", "Dikey — footer, afiş, araç kapı stickerı, sosyal medya"],
              ["wordmark", "Yalnızca yazı — sembolün yakında tekrarlandığı yerler"],
              ["mark", "Yalnızca sembol — favicon, profil fotoğrafı, filigran"],
            ] as const
          ).map(([v, role]) => (
            <li key={v} className="grid gap-px bg-line">
              <div className="flex min-h-44 items-center justify-center bg-surface p-8">
                <Logo variant={v} href={null} />
              </div>
              <div className="on-ink flex min-h-44 items-center justify-center bg-ink p-8">
                <Logo variant={v} tone="dark" href={null} />
              </div>
              <p className="bg-surface px-4 py-3 text-caption text-muted">
                <code>{v}</code> · {role}
              </p>
            </li>
          ))}
        </ul>

        <h3 className="mt-12 mb-4 text-h3">Tonlar ve zemin</h3>
        <div className="grid gap-px bg-line sm:grid-cols-2 lg:grid-cols-4">
          <figure className="flex flex-col items-center gap-4 bg-surface p-8">
            <LogoMark className="h-16 w-auto" />
            <figcaption className="text-center text-caption text-muted"><code>light</code> · açık zemin, sarı levha</figcaption>
          </figure>
          <figure className="flex flex-col items-center gap-4 bg-ink p-8">
            <LogoMark tone="dark" className="h-16 w-auto" />
            <figcaption className="text-center text-caption text-on-ink-muted"><code>dark</code> · koyu zemin, aynı levha</figcaption>
          </figure>
          <figure className="flex flex-col items-center gap-4 bg-surface-2 p-8 text-ink">
            <LogoMark tone="mono" className="h-14 w-auto" />
            <figcaption className="text-center text-caption text-muted"><code>mono</code> · tek renk baskı, kaşe</figcaption>
          </figure>
          <figure className="flex flex-col items-center gap-4 bg-accent p-8 text-ink">
            <LogoMark tone="mono" className="h-14 w-auto" />
            <figcaption className="text-center text-caption text-ink"><code>mono</code> · sarı zeminde ink</figcaption>
          </figure>
        </div>

        <h3 className="mt-12 mb-4 text-h3">Kurallar</h3>
        <ul className="grid max-w-prose gap-2 text-small text-graphite">
          <li>
            <Icon name="check" className="mr-2 inline size-4 text-success"/>
            Renkli kullanımda B her zaman sarı levhanın içinde ve ink renktedir; sarı B ya da beyaz B kullanılmaz. Levhasız B yalnızca tek renk (mono) baskıdadır.
          </li>
          <li>
            <Icon name="check" className="mr-2 inline size-4 text-success"/>
            Boşluk: logonun çevresinde en az sembol genişliğinin yarısı kadar boş alan.
          </li>
          <li>
            <Icon name="check" className="mr-2 inline size-4 text-success"/>
            En küçük boyut: yatay kilit 120px genişlik, sembol 16px.
          </li>
          <li>
            <Icon name="check" className="mr-2 inline size-4 text-success"/>
            Fotoğraf üzerinde: levha olduğu gibi kullanılır; yazı için koyu, sakin bir alan seçilir (<code>dark</code> ton).
          </li>
          <li>Yapılmaz: şekli germek, döndürmek, gölge/degrade eklemek, levhanın kesik köşesini başka köşeye almak, iç boşlukları doldurmak ya da renklerini değiştirmek, yazıyı başka fontla dizmek.</li>
        </ul>

        <h3 className="mt-12 mb-4 text-h3">Dosyalar</h3>
        <ul className="flex flex-wrap gap-2">
          {[
            ["rozet.svg", "Rozet · SVG"],
            ["sembol-siyah.svg", "Sembol siyah · SVG"],
            ["sembol-beyaz.svg", "Sembol beyaz · SVG"],
            ["logo-yatay.png", "Yatay · PNG"],
            ["logo-yatay-koyu-zemin.png", "Yatay koyu zemin · PNG"],
            ["logo-dikey.png", "Dikey · PNG"],
            ["logo-dikey-koyu-zemin.png", "Dikey koyu zemin · PNG"],
            ["ikon-512.png", "Profil ikonu 512 · PNG"],
            ["rozet-512.png", "Rozet 512 · PNG"],
          ].map(([f, l]) => (
            <li key={f}>
              <a href={`/marka/${f}`} download={`beylik-${f}`} className={buttonClass("secondary", "md")}>
                {l}
              </a>
            </li>
          ))}
        </ul>
      </Block>

      <Block id="renk" title="Renk">
        <ul className="grid grid-cols-2 gap-px bg-line sm:grid-cols-3 lg:grid-cols-5">
          {colors.map((c) => (
            <li key={c.token} className="bg-surface p-4">
              <span className="block h-16 rounded-hairline border border-line" style={{ background: c.hex }} />
              <p className="mt-3 text-small font-semibold">--color-{c.token}</p>
              <p className="text-caption text-muted">
                {c.hex} · {c.role}
              </p>
            </li>
          ))}
        </ul>

        <h3 className="mt-12 mb-4 text-h3">Kontrast (WCAG 2.2 AA)</h3>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[32rem] text-left text-small">
            <thead>
              <tr className="border-b border-ink text-eyebrow uppercase text-muted">
                <th className="py-3">Metin</th>
                <th className="py-3">Zemin</th>
                <th className="py-3">Oran</th>
                <th className="py-3">Seviye</th>
              </tr>
            </thead>
            <tbody>
              {contrast.map(([fg, bg, r, l]) => (
                <tr key={`${fg}-${bg}`} className="border-b border-line">
                  <td className="py-2.5">{fg}</td>
                  <td className="py-2.5">{bg}</td>
                  <td className="py-2.5 tabular-nums">{r}:1</td>
                  <td className="py-2.5">{l}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-3 text-caption text-muted">Sarı (#F2C230) açık zeminde METİN ya da ince çizgi olarak kullanılmaz (1.68:1). Metin için accent-ink.</p>
      </Block>

      <Block id="tipografi" title="Tipografi">
        <div className="space-y-8">
          {type.map((t) => (
            <div key={t.name} className="grid gap-2 border-b border-line pb-6 lg:grid-cols-[12rem_1fr]">
              <div>
                <p className="text-small font-semibold">{t.name}</p>
                <p className="text-caption text-muted">{t.spec}</p>
              </div>
              <p className={t.cls}>{turkishTest}</p>
            </div>
          ))}
        </div>
        <h3 className="mt-12 mb-4 text-h3">Türkçe karakter testi — tüm ağırlıklar</h3>
        <div className="grid gap-4 md:grid-cols-2">
          {[400, 500, 600].map((w) => (
            <p key={`d${w}`} className="font-display text-h2" style={{ fontWeight: w }}>
              İŞĞÜÇÖı {w}
            </p>
          ))}
          {[400, 500, 600].map((w) => (
            <p key={`s${w}`} className="text-h2" style={{ fontWeight: w }}>
              İŞĞÜÇÖı iıIİ {w}
            </p>
          ))}
        </div>
      </Block>

      <Block id="spacing" title="Spacing ve radius">
        <div className="flex flex-wrap items-end gap-4">
          {[2, 4, 6, 8, 12, 16, 24, 32].map((s) => (
            <div key={s} className="text-center">
              <span className="block bg-accent" style={{ width: s * 4, height: s * 4 }} />
              <span className="mt-2 block text-caption text-muted">{s * 4}px</span>
            </div>
          ))}
        </div>
        <p className="mt-6 text-small text-graphite">
          Bölüm ritmi: <code>py-section-sm</code> 48→80px · <code>py-section-md</code> 64→112px · <code>py-section-lg</code> 80→160px · gutter 16→40px.
        </p>
        <div className="mt-8 flex flex-wrap gap-6">
          {[
            ["none · 0", "rounded-none"],
            ["hairline · 4px — görsel", "rounded-hairline"],
            ["field · 6px — input", "rounded-field"],
            ["control · 8px — buton", "rounded-control"],
            ["card · 14px — kart, karo", "rounded-card"],
            ["cut — kesik köşe (görsel, harita)", "cut [--cut:20px]"],
          ].map(([l, c]) => (
            <div key={l}>
              <span className={`block size-20 border border-ink bg-raised ${c}`} />
              <span className="mt-2 block max-w-32 text-caption text-muted">{l}</span>
            </div>
          ))}
        </div>
      </Block>

      <Block id="butonlar" title="Butonlar">
        <div className="flex flex-wrap items-center gap-3">
          <ButtonLink href="#butonlar">Primary</ButtonLink>
          <ButtonLink href="#butonlar" variant="secondary">
            Secondary
          </ButtonLink>
          <ButtonLink href="#butonlar" variant="dark">
            Dark
          </ButtonLink>
          <ButtonLink href="#butonlar" variant="whatsapp">
            WhatsApp
          </ButtonLink>
          <ButtonLink href="#butonlar" variant="text">
            Metin link
          </ButtonLink>
          <button type="button" disabled className={buttonClass("primary")}>
            Disabled
          </button>
          <ButtonLink href="#butonlar" size="lg" icon="phone">
            Büyük · 56px
          </ButtonLink>
        </div>
        <div className="on-ink mt-6 flex flex-wrap gap-3 bg-ink p-6">
          <ButtonLink href="#butonlar">Primary (koyu zemin)</ButtonLink>
          <ButtonLink href="#butonlar" variant="inverse">
            Inverse
          </ButtonLink>
        </div>
        <h3 className="mt-10 mb-4 text-h3">Plaka ve akan ok</h3>
        <div className="flex flex-wrap items-center gap-3">
          <ButtonLink href="#butonlar" icon="phone" arrow>Hemen ara</ButtonLink>
          <ButtonLink href="#butonlar" variant="secondary" icon="directions" arrow>Yol tarifi</ButtonLink>
          <ButtonLink href="#butonlar" variant="dark" icon="document" arrow>Başvuru yap</ButtonLink>
          <ButtonLink href="#butonlar" variant="whatsapp" arrow>WhatsApp</ButtonLink>
          <ButtonLink href="#butonlar" variant="text" arrow>Süreci inceleyin</ButtonLink>
        </div>
        <div className="on-ink mt-3 flex flex-wrap items-center gap-3 bg-ink p-6">
          <ButtonLink href="#butonlar" size="lg" icon="phone" arrow>Hemen ara</ButtonLink>
          <ButtonLink href="#butonlar" variant="inverse" size="lg" icon="map-pin">Konum</ButtonLink>
          <ButtonLink href="#butonlar" variant="text" arrow>Metin link</ButtonLink>
        </div>
        <p className="mt-4 text-small text-graphite">
          md 48px · lg 56px yükseklik · hover: zemin koyulaşır · focus-visible: 2px ink (koyu zeminde amber) dış çizgi, 3px boşluk ·
          active: 1px aşağı · disabled: %45 opaklık.
        </p>
        <h3 className="mt-10 mb-4 text-h3">Mobil sabit CTA</h3>
        <div className="grid max-w-sm grid-cols-2 gap-2 border border-line bg-surface p-2.5">
          <span className="inline-flex min-h-12 items-center justify-center gap-2 rounded-control bg-ink text-button text-on-ink">
            <Icon name="phone" className="size-5"/> Hemen ara
          </span>
          <span className="inline-flex min-h-12 items-center justify-center gap-2 rounded-control bg-whatsapp text-button text-white">
            <WhatsAppIcon className="size-5" /> WhatsApp
          </span>
        </div>
      </Block>

      <Block id="kartlar" title="Kartlar">
        <div className="grid gap-8 lg:grid-cols-2">
          <div>
            <p className="mb-3 text-caption text-muted">Eğitim (katalog satırı)</p>
            <div className="grid grid-cols-[5rem_1fr_auto] items-center gap-4 border-y border-ink py-6">
              <span className="font-display text-[3.5rem] leading-none">A2</span>
              <span>
                <span className="block text-h3">A2 Sınıfı</span>
                <span className="text-small text-muted">Orta güçte motosiklet</span>
              </span>
              <Icon name="arrow-up-right" className="size-6"/>
            </div>
          </div>
          <div>
            <p className="mb-3 text-caption text-muted">Bilgi (madde listesi)</p>
            <div className="flex gap-4 border-y border-line-strong/60 py-5">
              <Icon name="check" className="mt-1 size-5 text-accent-ink"/>
              <span className="text-graphite">Manuel ve otomatik vitesli eğitim araçları.</span>
            </div>
          </div>
          <div>
            <p className="mb-3 text-caption text-muted">Süreç (rota durağı)</p>
            <div className="on-ink relative bg-ink p-6 pl-16 text-on-ink">
              <span className="absolute top-6 left-6 grid size-6 place-items-center rounded-full border-2 border-accent">
                <span className="size-2 rounded-full bg-accent" />
              </span>
              <span className="font-display text-caption text-accent">04</span>
              <p className="mt-1 text-h3">Direksiyon eğitimi</p>
            </div>
          </div>
          <div>
            <p className="mb-3 text-caption text-muted">İletişim (yükseltilmiş yüzey)</p>
            <div className="rounded-hairline border border-line bg-raised p-6">
              <p className="font-display text-h3">Sizi arayalım</p>
              <p className="mt-1 text-small text-muted">Dört alan, yarım dakika.</p>
            </div>
          </div>
        </div>
      </Block>

      <Block id="form" title="Form">
        <div className="grid max-w-3xl gap-6 sm:grid-cols-2">
          <div>
            <label htmlFor="sg-1" className={labelCls}>
              Varsayılan
            </label>
            <input id="sg-1" className={`${fieldCls} h-13`} placeholder="Ad soyad" />
          </div>
          <div>
            <label htmlFor="sg-2" className={labelCls}>
              Hata
            </label>
            <input id="sg-2" aria-invalid="true" aria-describedby="sg-2-e" className={`${fieldCls} h-13`} defaultValue="0555" />
            <p id="sg-2-e" className="mt-2 text-small text-danger">
              Telefon numarasını 05XX XXX XX XX biçiminde yazın.
            </p>
          </div>
          <div>
            <label htmlFor="sg-3" className={labelCls}>
              Select
            </label>
            <select id="sg-3" className={`${fieldCls} h-13`}>
              <option>B Sınıfı Ehliyet</option>
            </select>
          </div>
          <div>
            <label htmlFor="sg-4" className={labelCls}>
              Textarea
            </label>
            <textarea id="sg-4" rows={2} className={`${fieldCls} py-3`} />
          </div>
          <p role="status" className="rounded-field bg-success-surface px-4 py-3 text-small text-success sm:col-span-2">
            Başarı: Teşekkürler, başvurunuz bize ulaştı.
          </p>
          <p className="rounded-field bg-danger-surface px-4 py-3 text-small text-danger sm:col-span-2">
            Hata: Formda düzeltilmesi gereken alanlar var.
          </p>
        </div>
      </Block>

      <Block id="ikon" title="İkonlar ve işaretler">
        <p className="max-w-prose text-graphite">
          Kuruma özel “Levha” seti (<code>src/components/ui/Icon.tsx</code>), harici kütüphane yok. 24px ızgara, 2px çizgi, köşeli uç ve sivri
          birleşim; nokta yerine kare. Her ikonun bir “şerit” katmanı var: <code>[--icon-accent:var(--color-accent)]</code> ile sarıya döner
          (yalnızca koyu zeminde). WhatsApp marka simgesi ayrı ve dolu. Doğrulanmamış bilgiler: <span className="verify">DOĞRULA: örnek</span>
        </p>
        <ul className="mt-8 grid grid-cols-3 gap-px bg-line sm:grid-cols-4 lg:grid-cols-8">
          {iconNames.map((n) => (
            <li key={n} className="flex flex-col items-center gap-3 bg-surface px-2 py-6 text-ink">
              <Icon name={n} className="size-6" />
              <span className="text-caption text-muted">{n}</span>
            </li>
          ))}
        </ul>
        <h3 className="mt-10 mb-4 text-h3">Koyu zeminde iki renk · plakada</h3>
        <ul className="flex flex-wrap gap-3">
          {iconNames.map((n) => (
            <li key={n} className="grid size-12 place-items-center rounded-control bg-ink text-on-ink [--icon-accent:var(--color-accent)]">
              <Icon name={n} className="size-6" />
            </li>
          ))}
        </ul>
        <h3 className="mt-10 mb-4 text-h3">Boyutlar</h3>
        <div className="flex items-end gap-6 text-ink">
          {["size-4", "size-5", "size-6", "size-8", "size-12"].map((c) => (
            <span key={c} className="flex flex-col items-center gap-2">
              <Icon name="phone" className={c} />
              <span className="text-caption text-muted">{c}</span>
            </span>
          ))}
        </div>
      </Block>

      <Block id="breakpoint" title="Breakpoint'ler">
        <ul className="space-y-2 text-graphite">
          <li><strong>Mobil (&lt;640px):</strong> tek kolon, tam genişlik görsel, alt sabit CTA çubuğu, tam ekran menü.</li>
          <li><strong>Tablet (640–1023px):</strong> 2 kolon ızgaralar, CTA çubuğu sürer, header'da telefon numarası görünür.</li>
          <li><strong>Masaüstü (≥1024px):</strong> 12 kolon asimetrik grid, yatay rota, header'da tam menü + başvuru butonu, sabit çubuk yok.</li>
        </ul>
      </Block>
    </div>
  );
}
