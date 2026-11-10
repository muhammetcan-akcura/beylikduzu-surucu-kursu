/**
 * Görsel kayıtları. `mirror` dışındakiler AÇIKÇA PLACEHOLDER (SVG).
 * 2026-11-10 denetimi: eski .jpg kareler yabancı/üretilmiş görsellerdi (DRIVE İSTANBUL tabelası, İngiliz L plakası,
 * VW/Yamaha logoları); public/'ten silindi (git geçmişinde duruyor). `mirror` kurum iddiası taşımadığı için kaldı.
 * Gerçek çekim geldiğinde: dosyayı /public/images/ altına koyun, `src`, `width`, `height` güncelleyin,
 * `placeholder: false` yapın. Çekim listesi: docs/fotograf-brifingi.md
 */

export type MediaItem = {
  src: string;
  width: number;
  height: number;
  alt: string;
  placeholder: boolean;
  /** Placeholder'ın üzerinde yazan çekim notu */
  brief: string;
};

export const media = {
  hero: {
    src: "/images/placeholder-hero.svg",
    width: 1600,
    height: 900,
    alt: "Yer tutucu görsel: direksiyon başında eğitmen ve öğrenci (gerçek çekim bekleniyor)",
    placeholder: true,
    brief: "Kare 01 · Direksiyon başında eğitmen ve öğrenci, yandan, gün ışığı",
  },
  mirror: {
    src: "/images/mirror.jpg",
    width: 1200,
    height: 896,
    alt: "Yan aynada arkadan gelen trafik yansıması",
    placeholder: false,
    brief: "Kare 02 · Yan ayna detayı, sığ alan derinliği",
  },
  classB: {
    src: "/images/placeholder-car.svg",
    width: 1200,
    height: 800,
    alt: "Yer tutucu görsel: eğitim aracı (gerçek çekim bekleniyor)",
    placeholder: true,
    brief: "Kare 05 · Eğitim aracı, yandan, sade arka plan",
  },
  classMoto: {
    src: "/images/placeholder-moto.svg",
    width: 1200,
    height: 800,
    alt: "Yer tutucu görsel: eğitim alanında motosiklet (gerçek çekim bekleniyor)",
    placeholder: true,
    brief: "Kare 06 · Eğitim alanında motosiklet, slalom dubaları",
  },
  facade: {
    src: "/images/placeholder-facade.svg",
    width: 1200,
    height: 900,
    alt: "Yer tutucu görsel: kurum cephesi ve tabela (gerçek çekim bekleniyor)",
    placeholder: true,
    brief: "Kare 03 · Kurum cephesi ve tabela, karşıdan, öğleden sonra",
  },
  gear: {
    src: "/images/placeholder-gear.svg",
    width: 1200,
    height: 800,
    alt: "Yer tutucu görsel: vites kolu detayı (gerçek çekim bekleniyor)",
    placeholder: true,
    brief: "Kare 04 · Vites kolu detayı (manuel + otomatik ayrı kareler)",
  },
  classroom: {
    src: "/images/placeholder-classroom.svg",
    width: 1200,
    height: 800,
    alt: "Yer tutucu görsel: teorik derslik (gerçek çekim bekleniyor)",
    placeholder: true,
    brief: "Kare 07 · Teorik derslik, doğal ışık, arkadan geniş kadraj",
  },
} satisfies Record<string, MediaItem>;

export type MediaKey = keyof typeof media;
