import { licenseClasses } from "@/content/license-classes";
import { faqGroups } from "@/content/faq";

/**
 * Menü — tek kaynak. Header (masaüstü panel + mobil akordeon) ve footer buradan beslenir.
 * Ana sayfa bölüm linkleri `/#id` biçimindedir; id'ler bölüm bileşenlerinde tanımlıdır.
 * `mark`: panelde öğenin önündeki kare (ana sayfada bölüm numarası, sınıflarda sınıf kodu).
 */
export type NavLink = { label: string; href: string; desc?: string; mark?: string };
export type NavGroup = {
  label: string;
  href: string;
  /** Panelin sol kolonundaki kısa açıklama */
  intro: string;
  /** Panelin "tümü" linki */
  cta: string;
  links: NavLink[];
};

export const mainNav: NavGroup[] = [
  {
    label: "Ana sayfa",
    href: "/",
    intro: "Ana sayfadaki bölümlere doğrudan gidin.",
    cta: "Ana sayfanın başına dönün",
    links: [
      { mark: "01", label: "Yaklaşımımız", href: "/#yaklasim" },
      { mark: "02", label: "Ehliyet sınıfları", href: "/#siniflar" },
      { mark: "03", label: "Eğitim süreci", href: "/#surec" },
      { mark: "04", label: "Neden biz", href: "/#neden-biz" },
      { mark: "05", label: "Kurstan kareler", href: "/#kareler" },
      { mark: "06", label: "Konum ve ulaşım", href: "/#konum" },
      { mark: "07", label: "Eğitim araçları", href: "/#araclar" },
      { mark: "08", label: "Sık sorulanlar", href: "/#sss" },
      { mark: "09", label: "Başvuru", href: "/#basvuru" },
    ],
  },
  {
    label: "Ehliyet Sınıfları",
    href: "/ehliyet-siniflari",
    intro: "Otomobil ve motosiklet sınıflarını karşılaştırın, size uygun olanı seçin.",
    cta: "Tüm sınıfları karşılaştırın",
    links: licenseClasses.map((c) => ({ mark: c.code, label: c.name, href: `/ehliyet-siniflari/${c.slug}`, desc: c.vehicle })),
  },
  {
    label: "Eğitim",
    href: "/egitim-sureci",
    intro: "Kayıttan belgeye kadar her adım ve direksiyon derslerinin nasıl ilerlediği.",
    cta: "Eğitim sürecini okuyun",
    links: [
      { label: "Eğitim süreci", href: "/egitim-sureci", desc: "Kayıttan belgeye altı adım" },
      { label: "Direksiyon eğitimi", href: "/direksiyon-egitimi", desc: "Aşamalar ve ilk ders" },
      { label: "İlk direksiyon dersi", href: "/direksiyon-egitimi#ilk-ders", desc: "İlk gün sizi ne bekliyor" },
      { label: "Eğitim araçları", href: "/direksiyon-egitimi#araclar", desc: "Manuel ve otomatik vites" },
    ],
  },
  {
    label: "Kurumumuz",
    href: "/hakkimizda",
    intro: "Beylikdüzü'nde aynı işi yıllardır yapan bir kurum.",
    cta: "Hakkımızda sayfasına gidin",
    links: [
      { label: "Hakkımızda", href: "/hakkimizda", desc: "Hikâyemiz ve ilkelerimiz" },
      { label: "Eğitim ortamı", href: "/hakkimizda#ortam", desc: "Derslik, eğitim alanı, araçlar" },
      { label: "Konum ve ulaşım", href: "/iletisim#konum", desc: "Harita ve yol tarifi" },
      { label: "Kurstan kareler", href: "/#kareler", desc: "Fotoğraflar" },
    ],
  },
  {
    label: "SSS",
    href: "/sik-sorulan-sorular",
    intro: "Başlamadan önce en çok sorulanlar, konu konu.",
    cta: "Tüm sorulara bakın",
    links: faqGroups.map((g) => ({ label: g.title, href: `/sik-sorulan-sorular#${g.id}`, desc: `${g.items.length} soru` })),
  },
  {
    label: "İletişim",
    href: "/iletisim",
    intro: "Arayın, yazın ya da uğrayın.",
    cta: "İletişim sayfasına gidin",
    links: [
      { label: "İletişim bilgileri", href: "/iletisim", desc: "Telefon, e-posta, saatler" },
      { label: "Başvuru formu", href: "/iletisim#basvuru", desc: "Sizi arayalım" },
      { label: "Konum ve yol tarifi", href: "/iletisim#konum", desc: "Harita ve ulaşım" },
    ],
  },
];

/** Düz sayfa listesi (footer "Kurum" satırı). Sınıflar footer'da ayrı karolarla gösterilir. */
export const pageNav: NavLink[] = [
  { label: "Eğitim Süreci", href: "/egitim-sureci" },
  { label: "Direksiyon Eğitimi", href: "/direksiyon-egitimi" },
  { label: "Hakkımızda", href: "/hakkimizda" },
  { label: "SSS", href: "/sik-sorulan-sorular" },
  { label: "İletişim", href: "/iletisim" },
];

export const legalNav = [
  { label: "KVKK Aydınlatma Metni", href: "/kvkk-aydinlatma-metni" },
  { label: "Çerez Politikası", href: "/cerez-politikasi" },
] as const;

export const APPLY_HREF = "/iletisim#basvuru";
