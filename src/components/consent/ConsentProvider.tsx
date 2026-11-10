"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { CONSENT_STORAGE_KEY as STORAGE_KEY } from "./consent-key";

export type ConsentState = { analytics: boolean; maps: boolean; decided: boolean };

const defaultState: ConsentState = { analytics: false, maps: false, decided: false };

type Ctx = {
  consent: ConsentState;
  ready: boolean;
  bannerOpen: boolean;
  setConsent: (next: Omit<ConsentState, "decided">) => void;
  allowMaps: () => void;
  reopen: () => void;
};

const ConsentContext = createContext<Ctx | null>(null);

export function ConsentProvider({ children }: { children: React.ReactNode }) {
  const [consent, setState] = useState<ConsentState>(defaultState);
  const [ready, setReady] = useState(false);
  const [bannerOpen, setBannerOpen] = useState(false);

  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw) as Partial<ConsentState>;
        setState({ analytics: !!parsed.analytics, maps: !!parsed.maps, decided: true });
      } else {
        setBannerOpen(true);
      }
    } catch {
      setBannerOpen(true);
    }
    setReady(true);
  }, []);

  const setConsent = useCallback((next: Omit<ConsentState, "decided">) => {
    setState({ ...next, decided: true });
    setBannerOpen(false);
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify({ ...next, ts: Date.now() }));
    } catch {
      /* depolama kapalıysa tercih yalnızca bu oturumda geçerli */
    }
  }, []);

  /** "Haritayı yükle" butonu: yalnızca harita iznini açar, analitik tercihine dokunmaz. */
  const allowMaps = useCallback(() => {
    setConsent({ analytics: consent.analytics, maps: true });
  }, [consent.analytics, setConsent]);

  const reopen = useCallback(() => setBannerOpen(true), []);

  // Banner açıkken mobil Ara/WhatsApp çubuğu gizli (globals.css `.sticky-cta`); kapanınca kayarak gelir.
  useEffect(() => {
    if (!ready) return;
    const el = document.documentElement;
    if (bannerOpen) el.dataset.consent = "pending";
    else delete el.dataset.consent;
  }, [ready, bannerOpen]);

  const value = useMemo(
    () => ({ consent, ready, bannerOpen, setConsent, allowMaps, reopen }),
    [consent, ready, bannerOpen, setConsent, allowMaps, reopen],
  );

  return <ConsentContext.Provider value={value}>{children}</ConsentContext.Provider>;
}

export function useConsent() {
  const ctx = useContext(ConsentContext);
  if (!ctx) throw new Error("useConsent, ConsentProvider içinde kullanılmalı");
  return ctx;
}
