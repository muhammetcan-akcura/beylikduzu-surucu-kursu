"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState, type FocusEvent } from "react";
import { Icon } from "@/components/ui/Icon";
import { Logo } from "./Logo";
import type { NavGroup, NavLink } from "@/config/navigation";
import { site, telHref, whatsappHref } from "@/config/site";
import { buttonClass, ButtonInner } from "@/components/ui/Button";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";

const APPLY_HREF = "/iletisim#basvuru";

/**
 * Header — "Şerit" (2026-11-10 yeniden yazıldı; eski mega panel ağır ve şablon gibiydi).
 * - Sabit yükseklikte beyaz çubuk, altında kesik ink şerit (yol çizgisi). Kaydırma dinleyicisi yok.
 * - Masaüstü (xl+): grup adı doğrudan sayfasına gider; yanındaki ok düğmesi küçük asfalt
 *   açılır listeyi açar (fareyle hızlı, klavyede Enter/Space; Esc ve odak dışı kapatır).
 *   Arka plan karartması ve sıralı karo animasyonu yok: yalnızca opacity + kısa kayma.
 * - Mobil: beyaz tam ekran; büyük grup adları + "+" ile açılan alt link çipleri; altta sabit Ara/WhatsApp.
 * Menü verisi layout'tan prop olarak gelir (içerik dosyaları istemci paketine girmesin diye).
 */
export function SiteHeader({ nav }: { nav: NavGroup[] }) {
  const [open, setOpen] = useState(false);
  const [panel, setPanel] = useState<string | null>(null);
  const [expanded, setExpanded] = useState<string | null>(null);
  const pathname = usePathname();
  const closeRef = useRef<HTMLButtonElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const hoverTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const triggerRefs = useRef<Record<string, HTMLButtonElement | null>>({});

  // Sayfa değişince menüleri kapat
  useEffect(() => {
    setOpen(false);
    setPanel(null);
  }, [pathname]);

  // Açılır liste: Esc kapatır ve odağı tetikleyiciye döndürür
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
    // Yalnızca grubun kendi sayfaları: "#" ile başka sayfanın bölümüne giden bağlantılar (örn. Kurumumuz →
    // /iletisim#konum) sayılmaz, yoksa o sayfada iki grup birden aktif görünür.
    const paths = [g.href, ...g.links.filter((l) => !l.href.includes("#")).map((l) => l.href)].filter((p) => p !== "/");
    return paths.some((p) => pathname === p || pathname.startsWith(`${p}/`));
  };

  const clearTimer = () => {
    if (hoverTimer.current) clearTimeout(hoverTimer.current);
    hoverTimer.current = null;
  };
  // Kısa gecikmeler: imleç üzerinden geçerken liste fırlamasın, ama beklemek de hissedilmesin
  const hoverOpen = (label: string, type: string) => {
    if (type !== "mouse") return;
    clearTimer();
    if (panel === label) return;
    hoverTimer.current = setTimeout(() => setPanel(label), panel ? 0 : 110);
  };
  const hoverClose = (type: string) => {
    if (type !== "mouse") return;
    clearTimer();
    hoverTimer.current = setTimeout(() => setPanel(null), 180);
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

      {/* Yüzen çubuk: üstten boşluklu, sayfanın ilk bölümünün üzerine biner (globals.css `--header-space`).
          Geniş ekranda en az %75; menü sığmazsa içeriğe göre genişler, asla taşmaz. */}
      <header className="pointer-events-none sticky top-0 z-50 -mb-[var(--header-space)] px-3 pt-3 text-ink">
        <div className="pointer-events-auto mx-auto flex h-16 w-full max-w-full min-w-0 items-center justify-between gap-2 rounded-card sm:gap-4 border-2 border-ink bg-surface pr-2 pl-4 shadow-float lg:h-[4.5rem] lg:pl-6 xl:w-max xl:min-w-[75%] xl:gap-10">
          {/* <360px: logo ve menü düğmesi yan yana sığsın diye logo biraz küçülür */}
          <span className="min-w-0 max-[22.5rem]:[zoom:0.88]">
            <Logo />
          </span>

          <nav aria-label="Ana menü" className="hidden h-full xl:block">
            <ul className="flex h-full items-stretch gap-1">
              {nav.map((g) => {
                const isOpen = panel === g.label;
                const active = groupActive(g);
                const id = `menu-${g.href.replace(/\W+/g, "") || "ana"}`;
                return (
                  <li
                    key={g.label}
                    className="relative flex items-center"
                    onPointerEnter={(e) => hoverOpen(g.label, e.pointerType)}
                    onPointerLeave={(e) => hoverClose(e.pointerType)}
                    onBlur={onBlurGroup}
                  >
                    <Link
                      href={g.href}
                      onClick={closeAll}
                      aria-current={active ? "page" : undefined}
                      className="flex h-full items-center pl-3 text-[0.8125rem] font-bold tracking-[0.05em] whitespace-nowrap uppercase"
                    >
                      {g.label}
                    </Link>
                    <button
                      ref={(el) => {
                        triggerRefs.current[g.label] = el;
                      }}
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={id}
                      onClick={() => setPanel(isOpen ? null : g.label)}
                      className="inline-flex size-8 items-center justify-center rounded-control text-graphite hover:text-ink"
                    >
                      <Icon name="chevron-right" className={`size-3.5 transition-transform duration-150 ${isOpen ? "-rotate-90" : "rotate-90"}`} />
                      <span className="sr-only">{g.label} alt menüsü</span>
                    </button>

                    {/* Gösterge: header'ın alt çizgisinin üstüne oturur. Aktifte sarı blok, açıkken ink. */}
                    <span
                      aria-hidden="true"
                      className={`pointer-events-none absolute inset-x-1 bottom-0 h-1 origin-left transition-transform duration-200 ease-out-soft ${
                        active ? "scale-x-100 bg-accent" : `bg-ink ${isOpen ? "scale-x-100" : "scale-x-0"}`
                      }`}
                    />

                    <Dropdown id={id} group={g} isOpen={isOpen} onNavigate={closeAll} />
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="flex items-center gap-2">
            <a
              href={telHref()}
              data-track-location="header"
              className="hidden min-h-11 items-center gap-2 px-2 font-display text-[1.25rem] leading-none whitespace-nowrap tabular-nums hover:underline md:inline-flex xl:hidden min-[1440px]:inline-flex"
            >
              <Icon name="phone" className="size-4" />
              {site.phone.display}
            </a>
            <a
              href={whatsappHref()}
              target="_blank"
              rel="noopener noreferrer"
              data-track-location="header"
              className="hidden size-11 items-center justify-center rounded-control bg-whatsapp text-white hover:bg-whatsapp-hover md:inline-flex"
            >
              <WhatsAppIcon className="size-5" />
              <span className="sr-only">WhatsApp&apos;tan yazın</span>
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
              className="inline-flex h-11 min-w-11 shrink-0 items-center justify-center gap-2.5 rounded-control bg-ink px-3 text-button text-on-ink hover:bg-ink-2 sm:px-4 xl:hidden"
            >
              <span aria-hidden="true" className="grid w-4 gap-[5px]">
                <span className="h-0.5 bg-current" />
                <span className="h-0.5 w-2.5 bg-accent" />
              </span>
              {/* Dar ekranda (<400px) yalnızca ikon: yazı header'ı taşırıyordu */}
              <span className="max-[25rem]:sr-only">Menü</span>
            </button>
          </div>
        </div>
      </header>

      {/* Mobil menü */}
      <div
        id="mobil-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Menü"
        hidden={!open}
        className="fixed inset-0 z-[70] flex flex-col overflow-y-auto bg-surface text-ink transition-[opacity,translate] duration-200 ease-out-soft starting:translate-y-2 starting:opacity-0 xl:hidden"
      >
        <div className="container-site flex h-16 shrink-0 items-center justify-between">
          <Logo />
          <button
            ref={closeRef}
            type="button"
            onClick={() => setOpen(false)}
            className="inline-flex h-11 items-center gap-2 rounded-control bg-surface-2 px-4 text-button hover:bg-line"
          >
            <Icon name="close" className="size-4" />
            Kapat
          </button>
        </div>
        <div aria-hidden="true" className="h-0.5 shrink-0 bg-ink" />

        <nav aria-label="Mobil menü" className="container-site flex-1 py-4">
          <ul>
            {nav.map((g, i) => {
              const active = groupActive(g);
              const isExp = expanded === g.label;
              const subId = `alt-${i}`;
              return (
                <li key={g.label} className="py-1.5">
                  <div className="flex items-center gap-3">
                    <span
                      aria-hidden="true"
                      className={`h-9 w-1.5 shrink-0 rounded-[2px] ${active ? "bg-accent" : "bg-surface-2"}`}
                    />
                    <Link
                      href={g.href}
                      onClick={closeAll}
                      aria-current={active ? "page" : undefined}
                      className="flex min-h-12 flex-1 items-center font-display text-[2rem] leading-none"
                    >
                      {g.label}
                    </Link>
                    <button
                      type="button"
                      aria-expanded={isExp}
                      aria-controls={subId}
                      onClick={() => setExpanded(isExp ? null : g.label)}
                      className={`inline-flex size-11 shrink-0 items-center justify-center rounded-control transition-colors ${
                        isExp ? "bg-ink text-on-ink" : "bg-surface-2"
                      }`}
                    >
                      <Icon name="plus" className={`size-5 transition-transform duration-200 ${isExp ? "rotate-45" : ""}`} />
                      <span className="sr-only">{g.label} alt bağlantıları</span>
                    </button>
                  </div>
                  <ul id={subId} hidden={!isExp} className="flex flex-wrap gap-2 pt-3 pb-2 pl-[1.125rem]">
                    {g.links.map((l) => (
                      <li key={l.href}>
                        <Link
                          href={l.href}
                          onClick={closeAll}
                          aria-current={pathname === l.href ? "page" : undefined}
                          className="inline-flex min-h-11 items-center gap-2 rounded-control bg-surface-2 py-1.5 pr-3.5 pl-1.5 text-small font-semibold active:bg-accent aria-[current=page]:bg-accent"
                        >
                          <Mark link={l} small />
                          {l.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
              );
            })}
          </ul>

          <div className="mt-6 space-y-2 text-small text-graphite">
            <p className="flex items-center gap-2">
              <Icon name="map-pin" className="size-4 text-accent-ink" />
              {site.address.neighborhood}, {site.address.district}
            </p>
            <p className="flex items-center gap-2">
              <Icon name="clock" className="size-4 text-accent-ink" />
              {site.openingHoursLabel}
            </p>
          </div>
        </nav>

        <div
          className="on-ink sticky bottom-0 grid shrink-0 grid-cols-2 gap-2 border-t-4 border-accent bg-ink px-3 pt-2.5"
          style={{ paddingBottom: "calc(0.625rem + env(safe-area-inset-bottom))" }}
        >
          <a href={telHref()} data-track-location="mobile-menu" className={buttonClass("primary", "md", "")}>
            <ButtonInner icon="phone">Ara</ButtonInner>
          </a>
          <a
            href={whatsappHref()}
            target="_blank"
            rel="noopener noreferrer"
            data-track-location="mobile-menu"
            className={buttonClass("whatsapp", "md", "")}
          >
            <ButtonInner variant="whatsapp">WhatsApp</ButtonInner>
          </a>
        </div>
      </div>
    </>
  );
}

/** Masaüstü açılır liste: asfalt kart, üstte sarı şerit. 6'dan fazla linkte iki kolon. */
function Dropdown({ id, group, isOpen, onNavigate }: { id: string; group: NavGroup; isOpen: boolean; onNavigate: () => void }) {
  const wide = group.links.length > 6;
  return (
    <div
      id={id}
      className={`on-ink absolute top-full left-0 pt-2.5 transition-[opacity,translate,visibility] duration-150 ease-out-soft ${
        isOpen ? "visible translate-y-0 opacity-100" : "invisible -translate-y-1 opacity-0"
      }`}
    >
      <div className={`overflow-hidden rounded-b-card border-t-4 border-accent bg-ink text-on-ink shadow-float ${wide ? "w-[36rem]" : "w-[23rem]"}`}>
        <ul className={`grid gap-0.5 p-2 ${wide ? "grid-cols-2" : ""}`}>
          {group.links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                onClick={onNavigate}
                className="flex items-center gap-3 rounded-control p-2.5 transition-colors duration-100 hover:bg-ink-2"
              >
                <Mark link={l} />
                <span className="min-w-0">
                  <span className="block font-semibold">{l.label}</span>
                  {l.desc && <span className="mt-0.5 block text-caption text-on-ink-muted">{l.desc}</span>}
                </span>
              </Link>
            </li>
          ))}
        </ul>
        <Link
          href={group.href}
          onClick={onNavigate}
          className="flex items-center justify-between gap-4 bg-ink-2 px-5 py-3.5 text-button text-accent hover:underline"
        >
          {group.cta}
          <Icon name="arrow-right" className="size-4 shrink-0" />
        </Link>
      </div>
    </div>
  );
}

/** Link önündeki levha karesi: sınıf kodu / bölüm numarası; yoksa ok. */
function Mark({ link, small }: { link: NavLink; small?: boolean }) {
  return (
    <span
      aria-hidden="true"
      className={`grid shrink-0 place-items-center rounded-[3px] bg-accent font-cond font-extrabold leading-none tabular-nums text-ink ${
        small ? "h-8 min-w-8 px-1 text-[0.8125rem]" : "h-9 min-w-9 px-1.5 text-[0.9375rem]"
      }`}
    >
      {link.mark ?? <Icon name="arrow-right" className="size-3.5" />}
    </span>
  );
}
