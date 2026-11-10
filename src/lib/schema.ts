import { site, socialLinks } from "@/config/site";
import type { LicenseClass, Faq } from "@/content/license-classes";

const abs = (path: string) => `${site.url}${path === "/" ? "" : path}`;
const orgId = `${site.url}/#organization`;

/** Boş değerleri (undefined, "", []) nesneden temizler — boş alan schema'da görünmez. */
function clean<T extends Record<string, unknown>>(obj: T): T {
  return Object.fromEntries(
    Object.entries(obj).filter(([, v]) => v !== undefined && v !== "" && !(Array.isArray(v) && v.length === 0)),
  ) as T;
}

export function organizationSchema() {
  const sameAs = [
    ...socialLinks().map((s) => s.href),
    ...(site.googleBusinessProfile ? [site.googleBusinessProfile] : []),
  ];
  return clean({
    "@context": "https://schema.org",
    "@type": ["DrivingSchool", "LocalBusiness"],
    "@id": orgId,
    name: site.brandName,
    legalName: site.legalName,
    url: site.url,
    logo: abs("/marka/ikon-512.png"),
    image: abs("/opengraph-image"),
    telephone: site.phone.e164,
    email: site.email,
    foundingDate: String(site.foundingYear),
    address: {
      "@type": "PostalAddress",
      streetAddress: `${site.address.neighborhood}, ${site.address.street}`,
      addressLocality: site.address.district,
      addressRegion: site.address.city,
      postalCode: site.address.postalCode,
      addressCountry: site.address.country,
    },
    geo: site.geo ? { "@type": "GeoCoordinates", latitude: site.geo.lat, longitude: site.geo.lng } : undefined,
    hasMap: site.googleBusinessProfile || undefined,
    openingHoursSpecification: site.openingHours.map((h) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: h.days.map((d) => `https://schema.org/${dayName[d]}`),
      opens: h.opens,
      closes: h.closes,
    })),
    areaServed: { "@type": "City", name: `${site.serviceArea}, ${site.address.city}` },
    sameAs,
    description: `${site.address.district} ${site.address.neighborhood}'nde ${site.foundingYear} yılından beri B, A1, A2 ve A sınıfı ehliyet eğitimi veren sürücü kursu.`,
  });
}

const dayName = { Mo: "Monday", Tu: "Tuesday", We: "Wednesday", Th: "Thursday", Fr: "Friday", Sa: "Saturday", Su: "Sunday" } as const;

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${site.url}/#website`,
    url: site.url,
    name: site.brandName,
    inLanguage: "tr-TR",
    publisher: { "@id": orgId },
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: abs(it.path),
    })),
  };
}

/** [DOĞRULA] işaretli cevaplar schema'ya girmez: doğrulanmamış bilgi arama sonuçlarına taşınmaz. */
export function faqSchema(faqs: Faq[]) {
  const verified = faqs.filter((f) => !f.a.includes("[DOĞRULA"));
  if (verified.length === 0) return null;
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: verified.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export function courseSchema(c: LicenseClass) {
  return {
    "@context": "https://schema.org",
    "@type": "Course",
    name: `${c.name} Eğitimi`,
    description: c.summary,
    inLanguage: "tr-TR",
    url: abs(`/ehliyet-siniflari/${c.slug}`),
    provider: { "@id": orgId },
  };
}
