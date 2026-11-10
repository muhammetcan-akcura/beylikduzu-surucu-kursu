"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState, type FocusEvent } from "react";
import { Icon } from "@/components/ui/Icon";
import { Logo } from "./Logo";
import type { NavGroup } from "@/config/navigation";
import { site, telHref, whatsappHref } from "@/config/site";
import { buttonClass, ButtonInner } from "@/components/ui/Button";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";

const APPLY_HREF = "/iletisim#basvuru";

/**
 * Header — beyaz çubuk (site çok koyulaşmasın diye; asfalt bölümler ve footer kontrastı taşır).
 * Sarı yalnızca zemin olarak: aktif menü öğesi ve panel karolarının hover hâli.
 * Masaüstü (xl+): her grup bir panel açar; panelde bölüm/sayfa karoları + grubun ana sayfasına link.
 *   Fareyle üzerine gelince, tıklayınca ya da klavyeyle (Enter/Space) açılır; Esc ve dışarı tıklama kapatır.
 * Mobil: tam ekran beyaz menü; gruplar <details> akordeon.
 * Menü verisi layout'tan prop olarak gelir (içerik dosyaları istemci paketine girmesin diye).
 */
export function SiteHeader({ nav }: { nav: NavGroup[] }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [panel, setPanel] = useState<string | null>(null);
  const pathname = usePathname();
  const closeRef = useRef<HTMLButtonElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const hoverTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const triggerRefs = useRef<Record<string, HTMLButtonElement | null>>({});

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Sayfa değişince menüleri kapat
  useEffect(() => {
    setOpen(false);
    setPanel(null);
  }, [pathname]);

  // Masaüstü panel: Esc kapatır ve odağı tetikleyiciye döndürür
  useEffect(() => {
    if (!panel) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== "Escape") return;
      triggerRefs.current[panel]?.focus();
      setPanel(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [panel]);

  // Mobil menü: kaydırmayı kilitle, odağı yönet
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
      toggleRef.current?.focus({ preventScroll: true });
    };
  }, [open]);

  const groupActive = (g: NavGroup) => {
    if (g.href === "/") return pathname === "/";
    const paths = [g.href, ...g.links.map((l) => l.href.split("#")[0])].filter((p) => p !== "/");
    return paths.some((p) => pathname === p || pathname.startsWith(`${p}/`));
  };

  const clearTimer = () => {
    if (hoverTimer.current) clearTimeout(hoverTimer.current);
    hoverTimer.current = null;
  };
  /**
   * Fareyle açma gecikmeli: imleç menünün üzerinden geçerken panel "şak" diye açılmasın.
   * Bir panel zaten açıksa diğerine geçiş daha hızlı (gruplar arasında gezinmek akıcı kalsın).
   */
  const OPEN_DELAY = 400;
  const SWITCH_DELAY = 160;
  const CLOSE_DELAY = 320;
  const hoverOpen = (label: string, type: string) => {
    if (type !== "mouse") return;
    clearTimer();
    if (panel === label) return;
    hoverTimer.current = setTimeout(() => setPanel(label), panel ? SWITCH_DELAY : OPEN_DELAY);
  };
  const hoverClose = (type: string) => {
    if (type !== "mouse") return;
    clearTimer();
    hoverTimer.current = setTimeout(() => setPanel(null), CLOSE_DELAY);
  };
  const onBlurGroup = (e: FocusEvent<HTMLLIElement>) => {
    if (!e.currentTarget.contains(e.relatedTarget as Node | null)) setPanel(null);
  };
  const closeAll = () => {
    clearTimer();
    setPanel(null);
    setOpen(false);
  };

  return (
    <>
      <a
        href="#icerik"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[80] focus:rounded-control focus:bg-accent focus:px-4 focus:py-3 focus:text-ink"
      >
        İçeriğe geç
      </a>

      {/* Üst bilgi çubuğu (yalnızca md+; kaydırınca yukarıda kalır) */}
      <div className="hidden bg-surface-2 text-graphite md:block">
        <div className="container-site flex h-10 items-center justify-between gap-6 text-caption">
          <p className="flex items-center gap-5">
            <span className="flex items-center gap-2">
              <Icon name="map-pin" className="size-3.5 text-accent-ink" />
              {site.address.neighborhood}, {site.address.district}
            </span>
            <span className="flex items-center gap-2">
              <Icon name="clock" className="size-3.5 text-accent-ink" />
              {site.openingHoursLabel}
            </span>
          </p>
          <a
            href={whatsappHref()}
            target="_blank"
            rel="noopener noreferrer"
            data-track-location="topbar"
            className="inline-flex min-h-10 items-center gap-2 font-semibold text-ink hover:underline"
          >
            <WhatsAppIcon className="size-4 text-whatsapp" />
            WhatsApp&apos;tan yazın
          </a>
        </div>
      </div>

      {/* Panel açıkken sayfayı karart; tıklayınca kapanır */}
      <div
        aria-hidden="true"
        onClick={() => setPanel(null)}
        className={`fixed inset-0 z-40 hidden bg-ink/40 transition-opacity duration-500 motion-reduce:transition-none xl:block ${
          panel ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />

      <header className={`sticky top-0 z-50 bg-surface text-ink transition-shadow duration-300 ${scrolled || panel ? "shadow-header" : ""}`}>
        <div
          className={`container-site flex items-center justify-between gap-4 transition-[height] duration-300 ${
            scrolled ? "h-16" : "h-[4.5rem] lg:h-20"
          }`}
        >
          <Logo />

          <nav aria-label="Ana menü" className="hidden h-full xl:block">
            <ul className="flex h-full items-stretch">
              {nav.map((g) => {
                const isOpen = panel === g.label;
                const active = groupActive(g);
                const id = `panel-${g.href.replace(/\W+/g, "") || "ana"}`;
                return (
                  <li
                    key={g.label}
                    className="flex items-center"
                    onPointerEnter={(e) => hoverOpen(g.label, e.pointerType)}
                    onPointerLeave={(e) => hoverClose(e.pointerType)}
                    onBlur={onBlurGroup}
                  >
                    <button
                      ref={(el) => {
                        triggerRefs.current[g.label] = el;
                      }}
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={id}
                      onClick={() => setPanel(isOpen ? null : g.label)}
                      className={`relative inline-flex min-h-11 items-center gap-1.5 rounded-control px-3 text-[0.8125rem] font-bold tracking-[0.04em] whitespace-nowrap uppercase transition-[background-color,transform] duration-150 active:scale-[0.96] motion-reduce:active:scale-100 ${
                        isOpen ? "bg-surface-2" : active ? "bg-accent" : "hover:bg-surface-2"
                      }`}
                    >
                      {g.label}
                      <Icon name="chevron-right" className={`size-3.5 transition-transform ${isOpen ? "-rotate-90" : "rotate-90"}`} />
                      {active && <span className="sr-only"> (bulunduğunuz bölüm)</span>}
                    </button>

                    {/* Panel */}
                    <div
                      id={id}
                      className={`absolute inset-x-0 top-full origin-top border-t border-line bg-surface shadow-float transition-[opacity,transform,visibility] duration-500 ease-out-soft motion-reduce:transition-none ${
                        isOpen ? "visible translate-y-0 opacity-100" : "invisible -translate-y-5 opacity-0"
                      }`}
                    >
                      <div className="container-site grid gap-10 py-10 lg:grid-cols-12">
                        <div className="flex flex-col lg:col-span-4">
                          <p className="font-display text-[2.5rem] leading-[0.9]">{g.label}</p>
                          <p className="mt-4 max-w-xs text-graphite">{g.intro}</p>
                          <Link
                            href={g.href}
                            onClick={closeAll}
                            className={buttonClass("dark", "md", "mt-8 self-start")}
                          >
                            <ButtonInner variant="dark" arrow>{g.cta}</ButtonInner>
                          </Link>
                        </div>
                        <ul className={`grid content-start gap-2 lg:col-span-8 ${g.links.length > 6 ? "grid-cols-3" : "grid-cols-2"}`}>
                          {g.links.map((l, i) => (
                            <li
                              key={l.href}
                              // Karolar sırayla belirir (açılışta); kapanışta gecikme yok
                              style={{ transitionDelay: isOpen ? `${180 + i * 70}ms` : "0ms" }}
                              className={`transition-[opacity,transform] duration-500 ease-out-soft motion-reduce:transition-none ${
                                isOpen ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
                              }`}
                            >
                              <Link
                                href={l.href}
                                onClick={closeAll}
                                className="group/item flex h-full items-center gap-4 rounded-card bg-surface-2 p-4 transition-[background-color,transform,box-shadow] duration-200 hover:-translate-y-0.5 hover:bg-accent hover:shadow-[0_4px_0_0_var(--color-ink)] active:translate-y-0 active:shadow-none motion-reduce:hover:translate-y-0"
                              >
                                <span
                                  aria-hidden="true"
                                  className="grid h-10 min-w-10 shrink-0 place-items-center rounded-[3px] bg-ink px-1.5 font-display text-[1.125rem] leading-none tabular-nums text-accent"
                                >
                                  {l.mark ?? <Icon name="arrow-right" className="size-4" />}
                                </span>
                                <span className="min-w-0">
                                  <span className="block font-semibold">{l.label}</span>
                                  {l.desc && (
                                    <span className="mt-0.5 block text-caption text-graphite group-hover/item:text-ink">{l.desc}</span>
                                  )}
                                </span>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="flex items-center gap-2">
            <a
              href={telHref()}
              data-track-location="header"
              className="hidden min-h-11 items-center gap-2 px-2 font-display text-[1.375rem] leading-none whitespace-nowrap tabular-nums text-ink hover:underline md:inline-flex xl:hidden min-[1440px]:inline-flex"
            >
              <span aria-hidden="true" className="grid size-9 place-items-center rounded-control bg-accent text-ink">
                <Icon name="phone" className="size-4" />
              </span>
              {site.phone.display}
            </a>
            <span className="hidden lg:block">
              <Link href={APPLY_HREF} className={buttonClass("primary", "md", "!min-h-11")}>
                Başvuru yap
              </Link>
            </span>
            <button
              ref={toggleRef}
              type="button"
              onClick={() => setOpen(true)}
              aria-expanded={open}
              aria-controls="mobil-menu"
              className="inline-flex size-11 items-center justify-center rounded-control bg-ink text-on-ink hover:bg-ink-2 xl:hidden"
            >
              <Icon name="menu" className="size-5" />
              <span className="sr-only">Menüyü aç</span>
            </button>
          </div>
        </div>
      </header>

      {/* Mobil menü: tam ekran, iletişim en üstte, gruplar akordeon */}
      <div
        id="mobil-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Menü"
        hidden={!open}
        className="fixed inset-0 z-[70] flex flex-col overflow-y-auto bg-surface text-ink xl:hidden"
      >
        <div className="container-site flex h-[4.5rem] shrink-0 items-center justify-between">
          <Logo />
          <button
            ref={closeRef}
            type="button"
            onClick={() => setOpen(false)}
            className="inline-flex size-11 items-center justify-center rounded-control bg-ink text-on-ink hover:bg-ink-2"
          >
            <Icon name="close" className="size-5" />
            <span className="sr-only">Menüyü kapat</span>
          </button>
        </div>
        <div aria-hidden="true" className="lane-ink shrink-0" />

        <div className="container-site grid grid-cols-2 gap-2 pt-6">
          <a href={telHref()} data-track-location="mobile-menu" className={buttonClass("primary", "lg", "")}>
            <ButtonInner size="lg" icon="phone">
              Ara
            </ButtonInner>
          </a>
          <a
            href={whatsappHref()}
            target="_blank"
            rel="noopener noreferrer"
            data-track-location="mobile-menu"
            className={buttonClass("whatsapp", "lg", "")}
          >
            <ButtonInner variant="whatsapp" size="lg">
              WhatsApp
            </ButtonInner>
          </a>
        </div>

        <nav aria-label="Mobil menü" className="container-site mt-6 flex-1">
          <ul className="space-y-2">
            {nav.map((g, i) => {
              const active = groupActive(g);
              return (
                <li key={g.label}>
                  <details className="group/acc rounded-card bg-surface-2">
                    <summary className="flex min-h-16 cursor-pointer list-none items-center gap-4 rounded-card px-4 transition-colors active:bg-line [&::-webkit-details-marker]:hidden">
                      <span
                        aria-hidden="true"
                        className={`grid size-8 shrink-0 place-items-center rounded-[3px] font-cond text-[0.8125rem] font-extrabold tabular-nums ${
                          active ? "bg-accent text-ink" : "bg-ink text-accent"
                        }`}
                      >
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className={`flex-1 font-display text-[1.875rem] leading-none ${active ? "text-accent-ink" : ""}`}>{g.label}</span>
                      <Icon name="plus" className="size-5 shrink-0 transition-transform group-open/acc:rotate-45" />
                    </summary>
                    <div className="px-4 pb-4">
                      <ul className="grid gap-1 border-t border-line pt-3">
                        {g.links.map((l) => (
                          <li key={l.href}>
                            <Link
                              href={l.href}
                              onClick={closeAll}
                              aria-current={pathname === l.href ? "page" : undefined}
                              className="flex min-h-12 items-center gap-3 rounded-control px-2 transition-colors hover:bg-surface active:bg-accent aria-[current=page]:bg-accent"
                            >
                              <span aria-hidden="true" className="grid h-7 min-w-7 shrink-0 place-items-center rounded-[3px] bg-ink px-1 font-cond text-[0.8125rem] font-extrabold tabular-nums text-accent">
                                {l.mark ?? <Icon name="arrow-right" className="size-3.5" />}
                              </span>
                              <span className="font-medium">{l.label}</span>
                            </Link>
                          </li>
                        ))}
                      </ul>
                      <Link
                        href={g.href}
                        onClick={closeAll}
                        className="mt-3 inline-flex min-h-11 items-center gap-2 px-2 text-button text-ink underline decoration-ink decoration-2 underline-offset-[7px] hover:decoration-[3px]"
                      >
                        {g.cta}
                        <Icon name="arrow-right" className="size-4" />
                      </Link>
                    </div>
                  </details>
                </li>
              );
            })}
          </ul>
        </nav>

        <div
          className="container-site mt-8 space-y-2 pb-8 text-small text-graphite"
          style={{ paddingBottom: "calc(2rem + env(safe-area-inset-bottom))" }}
        >
          <p className="flex items-center gap-2">
            <Icon name="map-pin" className="size-4 text-accent-ink" />
            {site.address.neighborhood}, {site.address.district}
          </p>
          <p className="flex items-center gap-2">
            <Icon name="clock" className="size-4 text-accent-ink" />
            {site.openingHoursLabel}
          </p>
        </div>
      </div>
    </>
  );
}
