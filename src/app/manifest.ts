import type { MetadataRoute } from "next";
import { site } from "@/config/site";
import { BRAND_HEX } from "@/components/brand/mark";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: site.brandName,
    short_name: site.shortName,
    start_url: "/",
    display: "browser",
    lang: "tr",
    background_color: "#FFFFFF",
    theme_color: BRAND_HEX.ink,
    icons: [
      { src: "/icon.svg", type: "image/svg+xml", sizes: "any" },
      { src: "/marka/ikon-512.png", type: "image/png", sizes: "512x512", purpose: "any" },
    ],
  };
}
