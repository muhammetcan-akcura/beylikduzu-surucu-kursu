import type { MetadataRoute } from "next";
import { site } from "@/config/site";
import { licenseClasses } from "@/content/license-classes";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const staticPaths: { path: string; priority: number }[] = [
    { path: "", priority: 1 },
    { path: "/ehliyet-siniflari", priority: 0.9 },
    { path: "/egitim-sureci", priority: 0.8 },
    { path: "/direksiyon-egitimi", priority: 0.8 },
    { path: "/iletisim", priority: 0.8 },
    { path: "/hakkimizda", priority: 0.6 },
    { path: "/sik-sorulan-sorular", priority: 0.6 },
    { path: "/kvkk-aydinlatma-metni", priority: 0.2 },
    { path: "/cerez-politikasi", priority: 0.2 },
  ];
  return [
    ...staticPaths.map((p) => ({ url: `${site.url}${p.path}`, lastModified: now, priority: p.priority })),
    ...licenseClasses.map((c) => ({ url: `${site.url}/ehliyet-siniflari/${c.slug}`, lastModified: now, priority: 0.9 })),
  ];
}
