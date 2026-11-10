import type { Metadata, Viewport } from "next";
import { Archivo } from "next/font/google";
import "./globals.css";
import { site } from "@/config/site";
import { TITLE_TEMPLATE } from "@/lib/metadata";
import { organizationSchema, websiteSchema } from "@/lib/schema";
import { JsonLd } from "@/components/seo/JsonLd";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { mainNav } from "@/config/navigation";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { StickyCta } from "@/components/layout/StickyCta";
import { ConsentProvider } from "@/components/consent/ConsentProvider";
import { CONSENT_STORAGE_KEY } from "@/components/consent/consent-key";
import { CookieBanner } from "@/components/consent/CookieBanner";
import { Analytics } from "@/components/consent/Analytics";

// Archivo değişken font: genişlik (wdth 62–125) ve ağırlık (100–900) eksenleri tek dosyada.
// Başlıklar dar (75), etiketler geniş (125). latin-ext zorunlu: ğ Ğ ş Ş ı İ bu alt kümede.
const archivo = Archivo({
  subsets: ["latin", "latin-ext"],
  display: "swap",
  variable: "--font-archivo",
  axes: ["wdth"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: `${site.brandName} | ${site.address.district} Ehliyet Kursu`, template: TITLE_TEMPLATE },
  description:
    "Beylikdüzü Cumhuriyet Mahallesi'nde 2000'den beri B, A1, A2 ve A sınıfı ehliyet eğitimi. Manuel ve otomatik vitesli araçlar, her gün 09.00–18.00 açık.",
  applicationName: site.brandName,
  formatDetection: { telephone: false, email: false, address: false },
  openGraph: { locale: "tr_TR", type: "website", siteName: site.brandName },
  twitter: { card: "summary_large_image" },
  verification: {
    google: "R-HIoyT2EbNTzCYo5RXrHDhqUi-n9Z1Bv7RuVTk4y-Q",
  },
  // Demo süresince arama motorlarına kapalı tutmak için: robots: { index: false }
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr" className={archivo.variable} suppressHydrationWarning>
      <head>
        {/* Boyamadan önce: çerez tercihi yoksa <html data-consent="pending">. CSS bununla mobil Ara/WhatsApp
            çubuğunu onay verilene kadar gizler (önce görünüp sonra kaybolmasın). Anahtar ConsentProvider ile aynı. */}
        <script
          dangerouslySetInnerHTML={{
            __html: `try{if(!localStorage.getItem("${CONSENT_STORAGE_KEY}"))document.documentElement.dataset.consent="pending"}catch(e){document.documentElement.dataset.consent="pending"}`,
          }}
        />
      </head>
      <body className="pb-sticky-safe">
        <ConsentProvider>
          <SiteHeader nav={mainNav} />
          <main id="icerik">{children}</main>
          <SiteFooter />
          <StickyCta />
          <CookieBanner />
          <Analytics />
        </ConsentProvider>
        <JsonLd data={[organizationSchema(), websiteSchema()]} />
      </body>
    </html>
  );
}
