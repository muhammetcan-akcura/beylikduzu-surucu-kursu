import Image from "next/image";
import { media, type MediaKey } from "@/content/media";

type Props = {
  name: MediaKey;
  sizes: string;
  className?: string;
  /** LCP görseli için true */
  preload?: boolean;
  fill?: boolean;
};

/** Tüm görseller buradan geçer: tek renk düzeni, tek alt metin kaynağı (content/media.ts). */
export function Photo({ name, sizes, className = "", preload = false, fill = false }: Props) {
  const m = media[name];
  const isSvg = m.src.endsWith(".svg");
  const common = {
    src: m.src,
    alt: m.alt,
    sizes,
    preload,
    // SVG yer tutucular optimize edilmez; gerçek fotoğraflar AVIF/WebP'ye çevrilir.
    unoptimized: isSvg,
    className: `object-cover ${m.placeholder ? "object-left-top" : ""} ${className}`,
    ...(preload ? { fetchPriority: "high" as const } : {}),
  };
  return fill ? <Image {...common} fill /> : <Image {...common} width={m.width} height={m.height} />;
}
