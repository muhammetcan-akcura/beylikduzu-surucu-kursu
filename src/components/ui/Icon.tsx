import type { CSSProperties, ReactNode } from "react";

/**
 * İKON SETİ — "Levha"
 *
 * Kuruma özel çizildi (harici kütüphane yok). Kurallar, logo ile aynı dil:
 *  - 24 × 24 ızgara, 2px çizgi, 2px iç boşluk (canlı alan 20 × 20).
 *  - Köşeli uç (square cap) + sivri birleşim (miter): trafik levhası sertliği, yuvarlak "uygulama" hissi yok.
 *  - Nokta yerine kare (logodaki şerit karesi): uyarı noktası, pin merkezi.
 *  - Her ikonun bir "şerit" katmanı var. Varsayılan olarak metin rengini alır;
 *    `--icon-accent` verilirse o renge döner. Örn. `[--icon-accent:var(--color-accent)]`.
 *    Sarı vurgu yalnızca koyu zeminde veya ≥20px boyutta kullanılır.
 *
 * Kullanım: <Icon name="phone" className="size-5" />  — dekoratiftir (aria-hidden).
 * Tek başına anlam taşıyorsa (yalnız ikonlu buton) butona aria-label / sr-only metin verin.
 */

const A: CSSProperties = { stroke: "var(--icon-accent, currentColor)" };
const AF: CSSProperties = { fill: "var(--icon-accent, currentColor)", stroke: "none" };

const icons = {
  // İletişim
  phone: (
    <>
      <path d="M8.5 3.5H5a1.5 1.5 0 0 0-1.5 1.6A15.5 15.5 0 0 0 18.9 20.5a1.5 1.5 0 0 0 1.6-1.5v-3.5l-4.5-2-2.2 2.2a12 12 0 0 1-5.5-5.5l2.2-2.2Z" />
      <path style={A} d="M15 3.5a5.5 5.5 0 0 1 5.5 5.5" />
    </>
  ),
  mail: (
    <>
      <path d="M3 5h18v14H3Z" />
      <path style={A} d="m3 6 9 7 9-7" />
    </>
  ),
  // Konum ve zaman
  "map-pin": (
    <>
      <path d="M12 21.5S4.5 15 4.5 9.5a7.5 7.5 0 0 1 15 0c0 5.5-7.5 12-7.5 12Z" />
      <rect style={AF} x="10" y="7.5" width="4" height="4" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path style={A} d="M12 7v5l3.5 2.5" />
    </>
  ),
  /** Yol tarifi: yön levhası (eşkenar dörtgen) + dönüş oku */
  directions: (
    <>
      <path d="m12 2.5 9.5 9.5-9.5 9.5L2.5 12Z" />
      <path style={A} d="M9 15.5v-4h6m-2.5-2.5L15 11.5 12.5 14" />
    </>
  ),
  // Ulaşım
  /** Metrobüs: araç + altında kendi kesik şeridi */
  metrobus: (
    <>
      <path d="M5.5 3.5h13v13h-13ZM5.5 10h13M8 13.5h1.5M14.5 13.5H16" />
      <path style={A} d="M3 20.5h4M10 20.5h4M17 20.5h4" />
    </>
  ),
  bus: (
    <>
      <path d="M5 3.5h14v14H5ZM5 11h14M7.5 17.5v3M16.5 17.5v3" />
      <path style={A} d="M8 14.5h1.5M14.5 14.5H16" />
    </>
  ),
  /** Otopark: kare levha + P */
  parking: (
    <>
      <path d="M3.5 3.5h17v17h-17Z" />
      <path style={A} d="M9.5 17V7h3.5a3 3 0 0 1 0 6H9.5" />
    </>
  ),
  // Oklar
  "arrow-right": <path d="M4 12h15m-6-6 6 6-6 6" />,
  "arrow-down": <path d="M12 4v15m-6-6 6 6 6-6" />,
  "arrow-up-right": <path d="M7 17 17 7M9 7h8v8" />,
  "chevron-right": <path d="m9.5 5.5 6.5 6.5-6.5 6.5" />,
  // Durum
  check: <path d="m4.5 12.5 5 5 10-11" />,
  "check-circle": (
    <>
      <circle cx="12" cy="12" r="9" />
      <path style={A} d="m8 12.5 3 3 5-6" />
    </>
  ),
  alert: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path style={A} d="M12 7v6" />
      <rect style={AF} x="11" y="15.5" width="2" height="2" />
    </>
  ),
  /** Yükleniyor: soluk iz + dönen şerit yayı */
  loader: (
    <>
      <circle cx="12" cy="12" r="9" opacity="0.25" />
      <path style={A} d="M12 3a9 9 0 0 1 9 9" />
    </>
  ),
  // Arayüz
  /** Menü: alt çizgi kesik, yol şeridi gibi */
  menu: (
    <>
      <path d="M3 7h18M3 12h18M3 17h11" />
      <path style={A} d="M17.5 17H21" />
    </>
  ),
  close: <path d="m5 5 14 14M19 5 5 19" />,
  plus: <path d="M12 4v16M4 12h16" />,
  // Alan ikonları (ehliyet / eğitim)
  "steering-wheel": (
    <>
      <circle cx="12" cy="12" r="9" />
      <circle style={A} cx="12" cy="12" r="2.5" />
      <path d="M3.5 10.5 9.5 11.5M14.5 11.5l6-1M12 14.5V21" />
    </>
  ),
  car: (
    <>
      <path d="M3 16.5V12l2.2-5.5h13.6L21 12v4.5Z" />
      <path d="M3 12h18M5 16.5V19M19 16.5V19" />
      <rect style={AF} x="6" y="13.5" width="3" height="1.5" />
      <rect style={AF} x="15" y="13.5" width="3" height="1.5" />
    </>
  ),
  /** 2000'den beri / deneyim: geri dönen saat */
  history: (
    <>
      <path d="M4 12a8 8 0 1 0 2.4-5.7L4 8.5" />
      <path d="M4 4v4.5h4.5" />
      <path style={A} d="M12 8v4.5l3 2" />
    </>
  ),
  "traffic-cone": (
    <>
      <path d="M3 20.5h18M8.5 20.5 11 3.5h2l2.5 17" />
      <path style={A} d="M10.2 9h3.6M9.4 14.5h5.2" />
    </>
  ),
  /** Vites şeması (H): manuel / otomatik vites */
  gearbox: (
    <>
      <path d="M6 4v16M12 4v16M18 4v8" />
      <path style={A} d="M6 12h12" />
    </>
  ),
  calendar: (
    <>
      <path d="M3.5 5.5h17v15h-17ZM3.5 10h17M8 3v4.5M16 3v4.5" />
      <rect style={AF} x="13.5" y="13.5" width="3.5" height="3.5" />
    </>
  ),
  document: (
    <>
      <path d="M5 2.5h9.5l4.5 4.5v14.5H5Z" />
      <path d="M14.5 2.5V7H19" />
      <path style={A} d="M8.5 12h7M8.5 16h5" />
    </>
  ),
} satisfies Record<string, ReactNode>;

export type IconName = keyof typeof icons;
export const iconNames = Object.keys(icons) as IconName[];

export function Icon({
  name,
  className = "size-5",
  style,
  strokeWidth = 2,
}: {
  name: IconName;
  className?: string;
  style?: CSSProperties;
  /** Varsayılan 2. Yalnızca çok küçük (≤16px) ya da çok büyük kullanımda değiştirin. */
  strokeWidth?: number;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="square"
      strokeLinejoin="miter"
      strokeMiterlimit={10}
      aria-hidden="true"
      focusable="false"
      className={`shrink-0 ${className}`}
      style={style}
    >
      {icons[name]}
    </svg>
  );
}
