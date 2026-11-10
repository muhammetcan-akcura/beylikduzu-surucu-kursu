/**
 * Görsel kayıtları. Şu an tümü AÇIKÇA PLACEHOLDER (SVG).
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
    src: "/images/hero.jpg",
    width: 1376,
    height: 768,
    alt: "Eğitim aracının direksiyonunda eğitmen ve öğrenci, ön camdan Beylikdüzü'nde bir cadde görünüyor",
    placeholder: false,
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
    src: "/images/car.jpg",
    width: 1200,
    height: 896,
    alt: "Kursun Hyundai eğitim aracı, yandan görünüm",
    placeholder: false,
    brief: "Kare 05 · Eğitim aracı, yandan, sade arka plan",
  },
  classMoto: {
    src: "/images/moto.jpg",
    width: 1200,
    height: 896,
    alt: "Eğitim alanında koruyucu ekipmanlı öğrenci motosikletle slalom yapıyor",
    placeholder: false,
    brief: "Kare 06 · Eğitim alanında motosiklet, slalom dubaları",
  },
  facade: {
    src: "/images/facade.jpg",
    width: 1200,
    height: 896,
    alt: "Beylik Sürücü Kursu'nun Cumhuriyet Mahallesi'ndeki giriş cephesi",
    placeholder: false,
    brief: "Kare 03 · Kurum cephesi ve tabela, karşıdan, öğleden sonra",
  },
  gear: {
    src: "/images/gear.jpg",
    width: 1200,
    height: 896,
    alt: "Otomatik vites kolu ve orta konsol detayı",
    placeholder: false,
    brief: "Kare 04 · Vites kolu detayı (manuel + otomatik ayrı kareler)",
  },
  classroom: {
    src: "/images/classroom.jpg",
    width: 1200,
    height: 896,
    alt: "Teorik ders sınıfı, öğrenciler eğitmeni dinliyor",
    placeholder: false,
    brief: "Kare 07 · Teorik derslik, doğal ışık, arkadan geniş kadraj",
  },
} satisfies Record<string, MediaItem>;

export type MediaKey = keyof typeof media;
