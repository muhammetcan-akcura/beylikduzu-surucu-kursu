/**
 * İŞLETME BİLGİLERİ — TEK DOĞRULUK KAYNAĞI
 *
 * Schema (JSON-LD), footer, iletişim sayfası ve metadata yalnızca buradan beslenir.
 * Kurallar:
 *  - Bilinmeyen alan `undefined` / boş string bırakılır → sitede ve schema'da HİÇ görünmez.
 *  - `// DEMO` ile işaretli değerler kullanıcı isteğiyle konmuş geçici değerlerdir.
 *    Yayından önce gerçek değerlerle değiştirilmelidir (bkz. docs/ACIK-SORULAR.md).
 */

export type DayCode = "Mo" | "Tu" | "We" | "Th" | "Fr" | "Sa" | "Su";

export type OpeningHours = {
  days: DayCode[];
  opens: string; // "09:00"
  closes: string; // "18:00"
};

export type SocialLinks = {
  instagram?: string;
  facebook?: string;
  youtube?: string;
  tiktok?: string;
  x?: string;
};

export type SiteConfig = {
  legalName: string;
  brandName: string;
  shortName: string;
  domain: string;
  url: string;
  foundingYear: number;
  /** Bu değerlerden biri DEMO ise true. Yayından önce false olmalı. */
  isDemo: boolean;
  address: {
    street: string;
    neighborhood: string;
    district: string;
    city: string;
    postalCode: string;
    country: string;
    isDemo: boolean;
  };
  geo?: { lat: number; lng: number; isDemo: boolean };
  phone: { display: string; e164: string };
  whatsapp: { e164: string; defaultMessage: string };
  email: string;
  openingHours: OpeningHours[];
  /** İnsan okunur kısa saat metni */
  openingHoursLabel: string;
  licenseClasses: string[];
  hasAutomaticTransmission: boolean;
  vehicles: { make: string; model: string; transmission: ("manuel" | "otomatik")[] }[];
  serviceArea: string;
  /** Google Business Profile linki. Boşken render edilmez. */
  googleBusinessProfile?: string;
  /** Sosyal medya. Boş string'ler render edilmez ve schema `sameAs`'e girmez. */
  social: SocialLinks;
};

// Geçici alan adı (Netlify). Kalıcı alan adı alınınca burayı ve .env.example’ı güncelleyin.
const domain = "beyliksurucukursu.netlify.app";

export const site: SiteConfig = {
  legalName: "Beylik Sürücü Kursu",
  brandName: "Beylik Sürücü Kursu",
  shortName: "Beylik",
  domain,
  url: (process.env.NEXT_PUBLIC_SITE_URL || `https://${domain}`).replace(/\/$/, ""),
  foundingYear: 2000,
  isDemo: true,
  address: {
    street: "Örnek Sokak No: 1", // DEMO — gerçek sokak/no ile değiştirin
    neighborhood: "Cumhuriyet Mahallesi",
    district: "Beylikdüzü",
    city: "İstanbul",
    postalCode: "34520",
    country: "TR",
    isDemo: true,
  },
  // DEMO — Cumhuriyet Mah. civarı yaklaşık değer. Google Haritalar'dan gerçek nokta alınmalı.
  geo: { lat: 41.0005, lng: 28.6385, isDemo: true },
  phone: { display: "0552 161 34 12", e164: "+905521613412" },
  whatsapp: {
    e164: "905521613412",
    defaultMessage: "Merhaba, ehliyet kursu hakkında bilgi almak istiyorum.",
  },
  email: "beyliksurucukursu@gmail.com",
  openingHours: [{ days: ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"], opens: "09:00", closes: "18:00" }],
  openingHoursLabel: "Her gün 09.00–18.00",
  licenseClasses: ["B", "A1", "A2", "A"],
  hasAutomaticTransmission: true,
  vehicles: [
    // Kullanıcı (2026-11-10): her modelin hem manuel hem otomatik aracı var.
    { make: "Hyundai", model: "i10", transmission: ["manuel", "otomatik"] },
    { make: "Hyundai", model: "i20", transmission: ["manuel", "otomatik"] },
    { make: "Hyundai", model: "i30", transmission: ["manuel", "otomatik"] },
  ],
  serviceArea: "Beylikdüzü",
  googleBusinessProfile: "", // örn: "https://maps.app.goo.gl/XXXXXXXX" (boşken görünmez)
  social: {
    instagram: "", // örn: "https://www.instagram.com/beyliksurucukursu"
    facebook: "", // örn: "https://www.facebook.com/beyliksurucukursu"
    youtube: "",
    tiktok: "",
    x: "",
  },
};

/* ---------- Türetilmiş yardımcılar ---------- */

export const fullAddress = () => {
  const a = site.address;
  return `${a.neighborhood}, ${a.street}, ${a.postalCode} ${a.district}/${a.city}`;
};

export const telHref = () => `tel:${site.phone.e164}`;

export const whatsappHref = (message: string = site.whatsapp.defaultMessage) =>
  `https://wa.me/${site.whatsapp.e164}?text=${encodeURIComponent(message)}`;

export const mapsDirectionsHref = () =>
  site.geo
    ? `https://www.google.com/maps/dir/?api=1&destination=${site.geo.lat},${site.geo.lng}`
    : `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(fullAddress())}`;

export const mapsEmbedSrc = () =>
  site.geo
    ? `https://www.google.com/maps?q=${site.geo.lat},${site.geo.lng}&z=16&output=embed`
    : `https://www.google.com/maps?q=${encodeURIComponent(fullAddress())}&z=16&output=embed`;

export const socialLinks = () =>
  Object.entries(site.social)
    .filter(([, v]) => typeof v === "string" && v.trim().length > 0)
    .map(([k, v]) => ({ network: k as keyof SocialLinks, href: v as string }));

export const yearsActive = (now = new Date()) => now.getFullYear() - site.foundingYear;
