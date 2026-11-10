"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useConsent } from "./ConsentProvider";

export function CookieBanner() {
  const { bannerOpen, ready, setConsent, consent } = useConsent();
  const [custom, setCustom] = useState(false);
  const [analytics, setAnalytics] = useState(consent.analytics);
  const [maps, setMaps] = useState(consent.maps);

  useEffect(() => {
    setAnalytics(consent.analytics);
    setMaps(consent.maps);
  }, [consent.analytics, consent.maps, bannerOpen]);

  if (!ready || !bannerOpen) return null;

  const primary =
    "inline-flex min-h-11 items-center rounded-control bg-accent px-5 text-button text-ink transition-colors hover:bg-accent-hover";
  const ghost =
    "inline-flex min-h-11 items-center rounded-control border border-on-ink-muted px-5 text-button text-on-ink transition-colors hover:border-on-ink";

  return (
    <section
      aria-labelledby="cookie-title"
      // Mobilde sabit Ara/WhatsApp çubuğunun (≈4.5rem) üstünde durur, onu kapatmaz.
      className="fixed inset-x-0 bottom-[calc(4.5rem+env(safe-area-inset-bottom))] z-[60] p-3 sm:p-4 lg:inset-x-auto lg:right-6 lg:bottom-6 lg:max-w-md lg:p-0"
    >
      <div className="on-ink rounded-hairline bg-ink p-5 text-on-ink shadow-[0_12px_40px_-12px_rgb(14_26_43/0.5)] sm:p-6">
        <h2 id="cookie-title" className="font-display text-h3">
          Çerez tercihleri
        </h2>
        <p className="mt-2 text-small text-on-ink-muted">
          Sitenin çalışması için gereken çerezler her zaman açık. Ziyaret istatistikleri ve Google Haritalar yalnızca
          onay verirseniz yüklenir.{" "}
          <Link href="/cerez-politikasi" className="text-on-ink underline underline-offset-4">
            Çerez Politikası
          </Link>
        </p>

        {custom && (
          <fieldset className="mt-4 space-y-1 border-t border-ink-2 pt-4">
            <legend className="sr-only">Çerez kategorileri</legend>
            <label className="flex min-h-11 items-center gap-3 text-small">
              <input type="checkbox" checked disabled className="size-5 accent-accent" />
              Zorunlu çerezler (her zaman açık)
            </label>
            <label className="flex min-h-11 cursor-pointer items-center gap-3 text-small">
              <input
                type="checkbox"
                checked={analytics}
                onChange={(e) => setAnalytics(e.target.checked)}
                className="size-5 accent-accent"
              />
              Analitik (Google Analytics)
            </label>
            <label className="flex min-h-11 cursor-pointer items-center gap-3 text-small">
              <input
                type="checkbox"
                checked={maps}
                onChange={(e) => setMaps(e.target.checked)}
                className="size-5 accent-accent"
              />
              Harita (Google Haritalar)
            </label>
          </fieldset>
        )}

        <div className="mt-5 flex flex-wrap gap-2">
          {custom ? (
            <button type="button" onClick={() => setConsent({ analytics, maps })} className={primary}>
              Seçimi kaydet
            </button>
          ) : (
            <>
              <button type="button" onClick={() => setConsent({ analytics: true, maps: true })} className={primary}>
                Tümünü kabul et
              </button>
              <button type="button" onClick={() => setConsent({ analytics: false, maps: false })} className={ghost}>
                Yalnızca gerekli
              </button>
              <button
                type="button"
                onClick={() => setCustom(true)}
                className="inline-flex min-h-11 items-center px-2 text-button text-on-ink-muted underline underline-offset-4 hover:text-on-ink"
              >
                Ayarla
              </button>
            </>
          )}
        </div>
      </div>
    </section>
  );
}

export function CookieSettingsButton({ className }: { className?: string }) {
  const { reopen } = useConsent();
  return (
    <button type="button" onClick={reopen} className={className}>
      Çerez tercihleri
    </button>
  );
}
