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

  const btn = "inline-flex min-h-12 w-full items-center justify-center rounded-control px-5 text-button transition-colors";
  const primary = `${btn} bg-accent text-ink hover:bg-accent-hover`;
  const secondary = `${btn} border-2 border-ink text-ink hover:bg-ink hover:text-on-ink`;

  /*
   * Mobil: ekranın altına oturan beyaz panel (alttan kayarak gelir). Ara/WhatsApp çubuğu bu sırada gizli,
   * onay verilince onun yerine gelir (globals.css `.sticky-cta`). Arkadaki hafif karartma panelin sayfanın
   * parçası değil, üstte açılan bir pencere olduğunu belli eder; tıklamayı engellemez (çerez duvarı değil).
   * Masaüstü: sağ altta kart.
   */
  return (
    <>
      <div aria-hidden="true" className="cookie-sheet pointer-events-none fixed inset-0 z-[59] bg-ink/45 lg:hidden" />
      <section
        aria-labelledby="cookie-title"
        className="fixed inset-x-0 bottom-0 z-[60] lg:inset-x-auto lg:right-6 lg:bottom-6 lg:w-[26rem]"
      >
        <div
          className="cookie-sheet max-h-[85svh] overflow-y-auto rounded-t-card border-t-4 border-ink bg-surface px-5 pt-5 text-ink shadow-[0_-18px_40px_-14px_rgb(20_23_28/0.5)] sm:px-6 lg:rounded-card lg:border-4 lg:pb-6 lg:shadow-float"
          style={{ paddingBottom: "max(1.25rem, calc(0.75rem + env(safe-area-inset-bottom)))" }}
        >
          <div className="flex items-center gap-3">
            <span aria-hidden="true" className="grid size-9 shrink-0 place-items-center rounded-control bg-ink text-accent">
              <CookieGlyph />
            </span>
            <h2 id="cookie-title" className="font-display text-h3 leading-none">
              Çerez tercihleri
            </h2>
          </div>
          <p className="mt-3 text-small text-graphite">
            Sitenin çalışması için gereken çerezler her zaman açık. Ziyaret istatistikleri ve Google Haritalar yalnızca
            onay verirseniz yüklenir.{" "}
            <Link href="/cerez-politikasi" className="font-semibold text-ink underline underline-offset-4">
              Çerez Politikası
            </Link>
          </p>

          {custom && (
            <fieldset className="mt-4 space-y-1 border-t border-line pt-3">
              <legend className="sr-only">Çerez kategorileri</legend>
              <label className="flex min-h-11 items-center gap-3 text-small text-graphite">
                <input type="checkbox" checked disabled className="size-5 accent-ink" />
                Zorunlu çerezler (her zaman açık)
              </label>
              <label className="flex min-h-11 cursor-pointer items-center gap-3 text-small">
                <input
                  type="checkbox"
                  checked={analytics}
                  onChange={(e) => setAnalytics(e.target.checked)}
                  className="size-5 accent-ink"
                />
                Analitik (Google Analytics)
              </label>
              <label className="flex min-h-11 cursor-pointer items-center gap-3 text-small">
                <input
                  type="checkbox"
                  checked={maps}
                  onChange={(e) => setMaps(e.target.checked)}
                  className="size-5 accent-ink"
                />
                Harita (Google Haritalar)
              </label>
            </fieldset>
          )}

          <div className="mt-4 grid gap-2">
            {custom ? (
              <button type="button" onClick={() => setConsent({ analytics, maps })} className={primary}>
                Seçimi kaydet
              </button>
            ) : (
              <>
                <button type="button" onClick={() => setConsent({ analytics: true, maps: true })} className={primary}>
                  Tümünü kabul et
                </button>
                <button type="button" onClick={() => setConsent({ analytics: false, maps: false })} className={secondary}>
                  Yalnızca gerekli
                </button>
                <button
                  type="button"
                  onClick={() => setCustom(true)}
                  className="inline-flex min-h-11 items-center justify-center text-button text-graphite underline underline-offset-4 hover:text-ink"
                >
                  Ayarla
                </button>
              </>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

/** Çerez simgesi: ikon setinin diliyle (2px çizgi, kare "kırıntılar"). Dekoratif. */
function CookieGlyph() {
  return (
    <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="miter">
      <path d="M20.5 12A8.5 8.5 0 1 1 12 3.5a3 3 0 0 0 3.5 3.5 3 3 0 0 0 5 5Z" />
      <rect x="8" y="9" width="2.5" height="2.5" fill="currentColor" stroke="none" />
      <rect x="13" y="14" width="2.5" height="2.5" fill="currentColor" stroke="none" />
      <rect x="8.5" y="15" width="2" height="2" fill="currentColor" stroke="none" />
    </svg>
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
