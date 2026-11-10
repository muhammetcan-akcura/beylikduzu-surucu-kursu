"use client";

import Script from "next/script";
import { useEffect } from "react";
import { useConsent } from "./ConsentProvider";
import { track } from "@/lib/analytics";

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

/**
 * 1) GA4 yalnızca analitik onayı verilmişse ve NEXT_PUBLIC_GA_ID tanımlıysa yüklenir.
 * 2) Sayfadaki tüm tel: / wa.me / yol tarifi linkleri tek bir dinleyiciyle izlenir.
 *    Linke `data-track-location="hero"` gibi bir değer verilirse olaya eklenir.
 */
export function Analytics() {
  const { consent } = useConsent();

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const target = e.target instanceof Element ? e.target : null;
      const a = target?.closest("a");
      if (!a) return;
      const href = a.getAttribute("href") ?? "";
      const location = a.dataset.trackLocation ?? "unknown";
      if (href.startsWith("tel:")) track("phone_click", { location });
      else if (href.includes("wa.me/")) track("whatsapp_click", { location });
      else if (href.includes("google.com/maps/dir")) track("directions_click", { location });
    };
    document.addEventListener("click", onClick, { capture: true });
    return () => document.removeEventListener("click", onClick, { capture: true });
  }, []);

  if (!GA_ID || !consent.analytics) return null;

  return (
    <>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
      <Script id="ga4-init" strategy="afterInteractive">
        {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}window.gtag=gtag;gtag('js',new Date());gtag('config','${GA_ID}');`}
      </Script>
    </>
  );
}
