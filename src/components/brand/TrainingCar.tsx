import { MARK_BOWLS, MARK_DASHES, MARK_STROKE } from "./mark";

/**
 * Eğitim aracı: Hyundai i20 (3. nesil, 2020+) yan profil, sağa bakar, beyaz.
 * Oranlar gerçek ölçülerden: uzunluk 4040 mm, yükseklik 1450, aks mesafesi 2580,
 * ön/arka çıkıntı ≈ 800 / 660, lastik 195/55 R16 (Ø ≈ 620 mm). 1 birim ≈ 15 mm.
 * Modele özgü çizgiler: C direğinde şimşek ("Z") krom pencere hattı, siyah C direği (yüzen tavan),
 * arkaya doğru yükselen çapraz gövde kırımı, ince yana sarılan farlar ve stoplar, çift kollu jant.
 * Üretici amblemi/yazısı ve plaka bilerek çizilmedi (tescilli marka / sahte plaka olmasın).
 * Kapılarda sarı kurum şeridi + logo + "BEYLİK SÜRÜCÜ KURSU", tavanda "SÜRÜCÜ KURSU" levhası.
 * Dekoratiftir (aria-hidden). Tekerlek dönüşü `.car-wheel` (globals.css).
 *
 * viewBox 300 × 132 · zemin y = 124 · arka aks x ≈ 60, ön aks x ≈ 232.4.
 */

const GROUND = 124;
const WY = 103.3; // tekerlek merkezi
const TIRE = 20.7;
const REAR = 60;
const FRONT = 232.4;

/** Gövde dış hattı (arkadan başlar, saat yönünde) */
const BODY = [
  "M24 106",
  "Q17 104 16.5 96", // arka tampon alt köşe
  "L16 78",
  "Q16 66 19 60", // stop hizası
  "L32 42",
  "Q38 35.5 48 34", // arka spoyler
  "Q62 30 84 28",
  "Q118 25 150 27.5", // tavan
  "Q164 28.5 171 33",
  "L211 60.5", // ön cam
  "Q222 62 240 64",
  "Q262 66.5 277 71", // kaput
  "Q285 74 286.5 84", // burun
  "L286 97",
  "Q285.5 104.5 279 106",
  "L256.25 106",
  `A24 24 0 0 0 208.55 106`, // ön çamurluk kemeri
  "L83.85 106",
  `A24 24 0 0 0 36.15 106`, // arka kemer
  "Z",
].join(" ");

/** Yan camlar (DLO): kemer hattı arkaya doğru yükselir, C direğinde sivri biter */
const GLASS = "M205 61.5 L170 35.5 Q166 32 159 31.8 L76 32.8 Q64 33.4 58 39 L52 48 L66 51 L120 56.2 Z";

function Wheel({ cx }: { cx: number }) {
  const spokes = [0, 72, 144, 216, 288];
  return (
    <g>
      <circle cx={cx} cy={WY} r={TIRE} fill="#0d0f12" />
      <circle cx={cx} cy={WY} r={TIRE - 1.4} fill="none" stroke="#23272e" strokeWidth={1.2} />
      <g className="car-wheel">
        {/* Jant: koyu iç, parlak çift kollar */}
        <circle cx={cx} cy={WY} r={14.2} fill="#3a4049" />
        <circle cx={cx} cy={WY} r={14.2} fill="none" stroke="#d9dde2" strokeWidth={1.3} />
        {spokes.map((a) => (
          <g key={a} transform={`rotate(${a} ${cx} ${WY})`}>
            <path d={`M${cx - 1} ${WY - 3} L${cx - 3.6} ${WY - 13.4} L${cx - 1.4} ${WY - 13.6} L${cx + 0.2} ${WY - 3.2} Z`} fill="#e4e7ea" />
            <path d={`M${cx + 1} ${WY - 3} L${cx + 3.6} ${WY - 13.4} L${cx + 1.4} ${WY - 13.6} L${cx - 0.2} ${WY - 3.2} Z`} fill="#b9bfc6" />
          </g>
        ))}
        <circle cx={cx} cy={WY} r={3.6} fill="#c9ced4" />
        <circle cx={cx} cy={WY} r={1.6} fill="#2a2f37" />
      </g>
      {/* Fren diski izi (dönmez) */}
      <path d={`M${cx - 6} ${WY - 9} A11 11 0 0 1 ${cx + 6} ${WY - 9}`} stroke="#59606a" strokeWidth={1} fill="none" opacity={0.5} />
    </g>
  );
}

export function TrainingCar({ className = "" }: { className?: string }) {
  const text = { fontFamily: "var(--font-display)", fontStretch: "75%", fontWeight: 800 } as const;
  return (
    <svg viewBox="0 0 300 132" className={className} aria-hidden="true" focusable="false">
      <defs>
        <linearGradient id="i20-paint" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#ffffff" />
          <stop offset="0.5" stopColor="#f1f3f5" />
          <stop offset="1" stopColor="#cdd2d8" />
        </linearGradient>
        <linearGradient id="i20-lower" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#dfe3e7" />
          <stop offset="1" stopColor="#b8bec6" />
        </linearGradient>
        <linearGradient id="i20-glass" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#46515f" />
          <stop offset="0.6" stopColor="#1b2129" />
          <stop offset="1" stopColor="#0f1318" />
        </linearGradient>
        <linearGradient id="i20-light" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#7d1a14" />
          <stop offset="1" stopColor="#d23a2b" />
        </linearGradient>
        <clipPath id="i20-body">
          <path d={BODY} />
        </clipPath>
      </defs>

      {/* Zemin gölgesi */}
      <ellipse cx={151} cy={GROUND + 1} rx={132} ry={4} fill="#000" opacity={0.5} />

      {/* Tavan levhası (ayaklar + levha) */}
      <rect x={100} y={21} width={3} height={6} fill="#2a2f37" />
      <rect x={136} y={21} width={3} height={6.5} fill="#2a2f37" />
      <rect x={86} y={8} width={67} height={14} rx={2.5} fill="var(--color-accent)" stroke="#14171c" strokeWidth={1.3} />
      <text x={119.5} y={18.4} textAnchor="middle" fontSize={8.6} fill="#14171c" style={text}>
        SÜRÜCÜ KURSU
      </text>

      {/* Tekerlek yuvaları (kemer içi karanlık) */}
      <path d="M208.55 106 A24 24 0 0 1 256.25 106 Z" fill="#0a0c0f" />
      <path d="M36.15 106 A24 24 0 0 1 83.85 106 Z" fill="#0a0c0f" />

      {/* Gövde */}
      <path d={BODY} fill="url(#i20-paint)" />

      <g clipPath="url(#i20-body)">
        {/* Çapraz kırımın altı: hafif gölgeli alt gövde (i20'nin "Z" yan yüzeyi) */}
        <path d="M300 92 L205 98 L36 74 L0 72 L0 132 L300 132 Z" fill="url(#i20-lower)" opacity={0.75} />
        {/* Kırım çizgisi + ışık */}
        <path d="M205 98 L36 74" stroke="#9aa1aa" strokeWidth={0.9} />
        <path d="M205 96.8 L36 72.8" stroke="#ffffff" strokeWidth={0.8} opacity={0.9} />
        {/* Omuz çizgisi (kaputtan stoplara) */}
        <path d="M266 70 Q170 66.5 30 61" stroke="#b3b9c1" strokeWidth={0.7} fill="none" />
        {/* Marşpiyel ve tampon altları: siyah plastik */}
        <rect x={0} y={101.5} width={300} height={6} fill="#22262c" />
        <path d="M16 92 L34 92 L37 101.5 L16 101.5 Z" fill="#22262c" />
        <path d="M262 98 L287 96 L287 106 L262 106 Z" fill="#22262c" />
        {/* Kemer dudakları */}
        <path d="M208.55 106 A24 24 0 0 1 256.25 106" stroke="#2a2f37" strokeWidth={2.4} fill="none" />
        <path d="M36.15 106 A24 24 0 0 1 83.85 106" stroke="#2a2f37" strokeWidth={2.4} fill="none" />
      </g>
      <path d={BODY} fill="none" stroke="#8f969f" strokeWidth={0.7} />

      {/* Camlar + siyah direkler */}
      <path d={GLASS} fill="url(#i20-glass)" />
      <rect x={128} y={32} width={5.5} height={25} fill="#15191e" />
      {/* C direği: parlak siyah (yüzen tavan) */}
      <path d="M80 32.7 Q60 33 49.5 35 L35 47 L52 48.5 L66 51 L82 36.5 Z" fill="#101317" />
      <rect x={91} y={32.4} width={3} height={22} fill="#15191e" />
      {/* Cam yansıması */}
      <path d="M182 45 L168 35 L154 35 L166 57 L182 58.5 Z" fill="#ffffff" opacity={0.08} />
      <path d="M118 34 L108 34 L100 55 L110 55.5 Z" fill="#ffffff" opacity={0.06} />

      {/* Şimşek ("Z") krom pencere hattı: tavan boyunca, C direğinde aşağı kıvrılıp geri kırılır */}
      <path
        d="M169 33.6 Q164 30.6 157 30.6 L78 31.6 Q60 32 49 34.2 L34 46.6 L66 51.6"
        fill="none"
        stroke="#e6e9ec"
        strokeWidth={1.5}
        strokeLinejoin="miter"
      />
      {/* Kemer hattı krom */}
      <path d="M205 62 L120 56.8 L66 51.6" fill="none" stroke="#c7ccd2" strokeWidth={1} />

      {/* Kapı aralıkları */}
      <path d="M131 57 L130 101.5" stroke="#9aa1aa" strokeWidth={0.8} />
      <path d="M203.5 62 Q206.5 82 204.5 101.5" stroke="#9aa1aa" strokeWidth={0.8} fill="none" />
      <path d="M82 53 Q88 64 86 84 Q85 92 88 101.5" stroke="#9aa1aa" strokeWidth={0.8} fill="none" />
      {/* Kapı kolları */}
      <rect x={164} y={66.5} width={11} height={2.6} rx={1.3} fill="#a3aab2" />
      <rect x={105} y={63.5} width={11} height={2.6} rx={1.3} fill="#a3aab2" />

      {/* Ayna (siyah kapak) */}
      <path d="M197 55 L208 53.5 Q212.5 54.5 211.5 59.5 L200 61.5 Q196 60 197 55 Z" fill="#14171c" />
      <rect x={203} y={58.5} width={7} height={1.2} fill="#f2a516" opacity={0.85} />

      {/* Ön: ince yana sarılan far + gündüz farı, alt ızgara */}
      <path d="M258 66.5 L280 72.5 Q283.5 74 283 77 L262 72.5 Z" fill="#20262d" />
      <path d="M262 69 L280 74" stroke="#f4f8ff" strokeWidth={1.3} strokeLinecap="round" />
      <path d="M270 88 L286.5 87 L286.5 94 L272 94.5 Z" fill="#1a1e23" />
      {/* Arka: yana sarılan stop */}
      <path d="M18.5 56.5 L50 53 Q53 54 51 56.5 L30 59.5 L28 62.5 L17.5 64 Z" fill="url(#i20-light)" />
      <path d="M20 58.6 L48 55.2" stroke="#ff8a7a" strokeWidth={0.7} opacity={0.85} />
      {/* Yakıt kapağı */}
      <path d="M48 66 L58 64.8 L58.6 72 L48.6 73.2 Z" fill="none" stroke="#a3aab2" strokeWidth={0.6} />

      {/* Kurum şeridi (kapılar boyunca) + logo + ad */}
      <g clipPath="url(#i20-body)">
        <rect x={0} y={75} width={300} height={11.5} fill="var(--color-accent)" />
        <rect x={0} y={86.5} width={300} height={1.2} fill="#14171c" />
      </g>
      <g transform="translate(96 76.6) scale(0.2)">
        {MARK_DASHES.map((d) => (
          <rect key={d.y} {...d} fill="#14171c" />
        ))}
        <path d={MARK_BOWLS} fill="none" stroke="#14171c" strokeWidth={MARK_STROKE} />
      </g>
      <text x={104.5} y={84.4} fontSize={8.6} letterSpacing={0.2} fill="#14171c" style={text}>
        BEYLİK SÜRÜCÜ KURSU
      </text>

      <Wheel cx={REAR} />
      <Wheel cx={FRONT} />
    </svg>
  );
}
