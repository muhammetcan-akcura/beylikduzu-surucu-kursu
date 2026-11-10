/**
 * Dönüşüm olayları (GA4 uyumlu). gtag yalnızca çerez onayından sonra yüklenir;
 * onay yoksa `track` hiçbir şey göndermez.
 */

export type TrackEvent = "phone_click" | "whatsapp_click" | "generate_lead" | "directions_click";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

export function track(event: TrackEvent, params: Record<string, string | number> = {}) {
  if (typeof window === "undefined") return;
  // Geliştirme sırasında doğrulama için: window.addEventListener("bsk:track", console.log)
  window.dispatchEvent(new CustomEvent("bsk:track", { detail: { event, params } }));
  if (typeof window.gtag === "function") {
    window.gtag("event", event, params);
  }
}
