import { processSteps } from "@/content/process";
import { BADGE_MARK_TRANSFORM, BADGE_PATH, BADGE_VIEWBOX, BRAND_HEX, MARK_PATH } from "@/components/brand/mark";

/**
 * Hero görseli: "ehliyete giden yol, adım adım" — kelimenin tam anlamıyla.
 * Yukarıdan bakılan şematik bir şehir ızgarası; kurs rozetinden başlayan sarı rota, süreçteki
 * altı adımdan (src/content/process.ts) geçip damalı bitişe ulaşır. Eğitim aracı rotayı izler,
 * arkasında sarı iz bırakır, geçtiği adımı yakar; bitişte kısa bekleyip baştan başlar.
 * 04'ün yanındaki park çizgili blok "önce eğitim alanı" adımıdır (home.value ile aynı bilgi).
 *
 * Gerçek harita DEĞİLDİR (ölçeksiz, şematik); altında bu yazar.
 * Hareket: SVG SMIL (viewBox ile ölçeklenir). prefers-reduced-motion'da hareketli katman gizlenir,
 * yerine rotanın tamamı çizili, araç başlangıçta park hâlinde statik katman görünür (globals.css `.route-*`).
 */

const W = 640;
const H = 560;
const ROAD = 40;
const RX = [80, 240, 400, 560];
const RY = [70, 210, 350, 490];

// Yol aralarındaki bloklar
const xs: [number, number][] = [[0, 60], [100, 220], [260, 380], [420, 540], [580, 640]];
const ys: [number, number][] = [[0, 50], [90, 190], [230, 330], [370, 470], [510, 560]];
const TRAINING = { x: 420, y: 370, w: 120, h: 100 };

/** Rota: köşeler 20 yarıçaplı. Uzunluk ≈ 1025.7 (adım konumları buna göre). */
const ROUTE = "M80 490H220Q240 490 240 470V370Q240 350 260 350H540Q560 350 560 330V90Q560 70 540 70H400";
const LEN = 1025.7;

const DUR = "11s";
const RUN = 0.86; // sürenin bu kadarı yolda, kalanı bitişte bekleme

type Stop = { n: string; x: number; y: number; at: number; label: string; lx: number; ly: number; align?: "end" };
// Etiketler süreç adımlarının kısa adları (01–06 sırası process.ts ile aynı)
const START = { x: 80, y: 490 };
const END = { x: 400, y: 70 };
const stops: Stop[] = [
  { n: "01", x: 80, y: 490, at: 0, label: "Kayıt", lx: 40, ly: 516 },
  { n: "02", x: 160, y: 490, at: 80, label: "Teorik eğitim", lx: 150, ly: 516 },
  { n: "03", x: 240, y: 420, at: 221.4, label: "e-Sınav", lx: 262, ly: 408 },
  { n: "04", x: 400, y: 350, at: 442.8, label: "Direksiyon", lx: 408, ly: 298 },
  { n: "05", x: 560, y: 210, at: 734.2, label: "Direksiyon sınavı", lx: 538, ly: 198, align: "end" },
  { n: "06", x: 400, y: 70, at: LEN, label: "Ehliyet", lx: 355, ly: 12 },
];

const C = {
  road: "#2A3038",
  block: "#1B1F25",
  dash: "rgba(244,245,246,0.28)",
  ink: BRAND_HEX.ink,
  accent: BRAND_HEX.accent,
  light: BRAND_HEX.surface,
  muted: BRAND_HEX.onInkMuted,
};

const font = { fontFamily: "var(--font-archivo), system-ui, sans-serif", fontStretch: "125%" as const, fontWeight: 700 };
const plateW = (s: string) => Math.round(s.length * 10.2 + 20);

function Car() {
  // Yukarıdan eğitim aracı: ön sağda (x+). Tavanda sarı "eğitim aracı" levhası.
  return (
    <g transform="scale(1.3)">
      <rect x="-16" y="-9" width="32" height="18" rx="5" fill={C.light} />
      <rect x="3" y="-7" width="6" height="14" rx="2" fill={C.ink} />
      <rect x="-12" y="-7" width="4" height="14" rx="1.5" fill={C.ink} />
      <rect x="-5" y="-5.5" width="6" height="11" rx="1" fill={C.accent} />
      <rect x="14" y="-7.5" width="2" height="3.5" fill={C.accent} />
      <rect x="14" y="4" width="2" height="3.5" fill={C.accent} />
    </g>
  );
}

function Badge({ x, y, size }: { x: number; y: number; size: number }) {
  return (
    <svg x={x - size / 2} y={y - size / 2} width={size} height={size} viewBox={BADGE_VIEWBOX}>
      <path d={BADGE_PATH} fill={C.accent} />
      <path d={MARK_PATH} fillRule="evenodd" fill={C.ink} transform={BADGE_MARK_TRANSFORM} />
    </svg>
  );
}

function Finish({ x, y }: { x: number; y: number }) {
  const s = 30;
  const c = s / 4;
  return (
    <g transform={`translate(${x - s / 2} ${y - s / 2})`}>
      <rect x="-3" y="-3" width={s + 6} height={s + 6} rx="4" fill={C.accent} />
      {Array.from({ length: 16 }, (_, i) => (
        <rect key={i} x={(i % 4) * c} y={Math.floor(i / 4) * c} width={c} height={c} fill={(i + Math.floor(i / 4)) % 2 ? C.ink : C.light} />
      ))}
    </g>
  );
}

function Labels() {
  return (
    <g className="route-label">
      {stops.map((s) => {
        const text = s.label.toLocaleUpperCase("tr-TR");
        const w = plateW(text);
        const x = s.align === "end" ? s.lx - w : s.lx;
        return (
          <g key={s.n}>
            <rect x={x} y={s.ly} width={w} height="24" rx="3" fill={C.ink} />
            <text x={x + 10} y={s.ly + 16.5} fontSize="12" letterSpacing="1" fill={C.light} style={font}>
              {text}
            </text>
          </g>
        );
      })}
    </g>
  );
}

/** Ara adım işaretleri (02–05). `lit`: animasyonlu katmanda aracın geçtiği an yanar. */
function StepMarkers({ animated }: { animated: boolean }) {
  return (
    <g>
      {stops.slice(1, 5).map((s) => {
        const t = ((s.at / LEN) * RUN).toFixed(3);
        return (
          <g key={s.n}>
            <rect x={s.x - 14} y={s.y - 14} width="28" height="28" rx="4" fill={C.ink} stroke={C.accent} strokeWidth="3">
              {animated && (
                <animate attributeName="fill" calcMode="discrete" values={`${C.ink};${C.accent}`} keyTimes={`0;${t}`} dur={DUR} repeatCount="indefinite" />
              )}
            </rect>
            <text x={s.x} y={s.y + 4.5} textAnchor="middle" fontSize="12.5" fill={C.light} style={font}>
              {animated && (
                <animate attributeName="fill" calcMode="discrete" values={`${C.light};${C.ink}`} keyTimes={`0;${t}`} dur={DUR} repeatCount="indefinite" />
              )}
              {s.n}
            </text>
          </g>
        );
      })}
    </g>
  );
}

export function HeroRoute() {
  const label = `Şematik rota: ${processSteps.map((s) => s.title).join(", ")}.`;

  return (
    <figure className="relative">
      <div className="cut overflow-hidden bg-ink-2 [--cut:28px]">
        <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label={label} className="block h-auto w-full">
          {/* Zemin: yollar */}
          <rect width={W} height={H} fill={C.road} />

          {/* Bloklar */}
          {xs.flatMap(([x0, x1]) =>
            ys.map(([y0, y1]) => {
              const isTraining = x0 === TRAINING.x && y0 === TRAINING.y;
              return <rect key={`${x0}-${y0}`} x={x0} y={y0} width={x1 - x0} height={y1 - y0} rx="6" fill={isTraining ? "#20252C" : C.block} />;
            }),
          )}

          {/* Orta şerit çizgileri */}
          <g stroke={C.dash} strokeWidth="2" strokeDasharray="10 12">
            {RX.map((x) => (
              <path key={`v${x}`} d={`M${x} 0V${H}`} />
            ))}
            {RY.map((y) => (
              <path key={`h${y}`} d={`M0 ${y}H${W}`} />
            ))}
          </g>

          {/* Eğitim alanı: park cepleri + etiket */}
          <g stroke="rgba(244,245,246,0.32)" strokeWidth="2">
            {[440, 460, 480, 500, 520].map((x) => (
              <path key={x} d={`M${x} ${TRAINING.y}v26M${x} ${TRAINING.y + TRAINING.h}v-26`} />
            ))}
          </g>
          <text x={TRAINING.x + TRAINING.w / 2} y={TRAINING.y + TRAINING.h / 2 + 4} textAnchor="middle" fontSize="10" letterSpacing="1.5" fill={C.muted} style={font}>
            EĞİTİM ALANI
          </text>

          {/* Kuzey */}
          <g transform="translate(28 30)" fill={C.muted}>
            <path d="M0-14 6 2 0-2-6 2Z" />
            <text y="16" textAnchor="middle" fontSize="10" style={font}>
              K
            </text>
          </g>

          {/* Gidilecek yol: soluk kesik */}
          <path d={ROUTE} fill="none" stroke="rgba(242,194,48,0.35)" strokeWidth="5" strokeDasharray="2 9" strokeLinecap="round" />

          {/* HAREKETLİ katman */}
          <g className="route-moving">
            <path d={ROUTE} fill="none" stroke={C.accent} strokeWidth="6" strokeLinejoin="round" pathLength={1} strokeDasharray="1 1">
              <animate attributeName="stroke-dashoffset" values="1;0;0" keyTimes={`0;${RUN};1`} dur={DUR} repeatCount="indefinite" />
            </path>
            <StepMarkers animated />
            <g>
              <Car />
              <animateMotion dur={DUR} repeatCount="indefinite" rotate="auto" keyPoints="0;1;1" keyTimes={`0;${RUN};1`} calcMode="linear" path={ROUTE} />
            </g>
          </g>

          {/* STATİK katman (reduced-motion) */}
          <g className="route-static">
            <path d={ROUTE} fill="none" stroke={C.accent} strokeWidth="6" strokeLinejoin="round" />
            <StepMarkers animated={false} />
            <g transform="translate(118 490)">
              <Car />
            </g>
          </g>

          {/* Başlangıç ve bitiş her zaman üstte */}
          <Badge x={START.x} y={START.y} size={36} />
          <Finish x={END.x} y={END.y} />
          <Labels />
        </svg>
      </div>
      <figcaption className="mt-3 flex items-center justify-between gap-4 text-caption text-on-ink-muted">
        <span>Kayıttan ehliyete altı adım</span>
        <span>Şematik, ölçeksiz</span>
      </figcaption>
    </figure>
  );
}
