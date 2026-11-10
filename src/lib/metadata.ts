import type { Metadata } from "next";
import { site } from "@/config/site";

type PageMetaInput = {
  /** Şablona girecek kısa başlık. `absoluteTitle` verilirse şablon uygulanmaz. */
  title?: string;
  absoluteTitle?: string;
  description: string;
  /** Başında slash, sonunda slash yok: "/iletisim". Ana sayfa için "/" */
  path: string;
  noindex?: boolean;
  ogImage?: string;
};

export const TITLE_TEMPLATE = `%s | ${site.brandName} ${site.address.district}`;

export function pageMetadata({ title, absoluteTitle, description, path, noindex, ogImage = "/opengraph-image" }: PageMetaInput): Metadata {
  const canonical = path === "/" ? "/" : path.replace(/\/$/, "");
  const resolvedTitle = absoluteTitle ?? TITLE_TEMPLATE.replace("%s", title ?? site.brandName);
  return {
    title: absoluteTitle ? { absolute: absoluteTitle } : title,
    description,
    alternates: { canonical },
    robots: noindex ? { index: false, follow: false } : { index: true, follow: true },
    openGraph: {
      type: "website",
      locale: "tr_TR",
      siteName: site.brandName,
      url: canonical,
      title: resolvedTitle,
      description,
      images: [{ url: ogImage, width: 1200, height: 630, alt: `${site.brandName}, Beylikdüzü` }],
    },
    twitter: {
      card: "summary_large_image",
      title: resolvedTitle,
      description,
      images: [ogImage],
    },
  };
}
