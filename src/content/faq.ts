import type { Faq } from "./license-classes";

export type FaqGroup = { id: string; title: string; items: (Faq & { featured?: boolean })[] };

export const faqGroups: FaqGroup[] = [
  {
    id: "kayit",
    title: "Kayıt ve belgeler",
    items: [
      {
        featured: true,
        q: "Kayıt için hangi belgeler gerekiyor?",
        a: "Genel olarak kimlik, sürücü olur sağlık raporu, biyometrik fotoğraf ve öğrenim belgesi istenir. [DOĞRULA: güncel belge listesi] Kayıttan önce size eksiksiz bir liste veriyoruz.",
      },
      {
        q: "Kayıt için kuruma gelmem gerekiyor mu?",
        a: "Ön görüşmeyi telefon veya WhatsApp üzerinden yapabiliriz. Kayıt ve belge teslimi için kuruma gelmeniz gerekir. [DOĞRULA: e-imza / uzaktan kayıt imkânı]",
      },
      {
        q: "Ücretler sitede neden yazmıyor?",
        a: "Ücretler sınıfa, vites tipine ve resmi harçlara göre değişiyor. Güncel olmayan bir rakam paylaşmak yerine sizi arayıp net bilgi veriyoruz.",
      },
    ],
  },
  {
    id: "egitim",
    title: "Eğitim ve süre",
    items: [
      {
        featured: true,
        q: "Ehliyet almak toplam ne kadar sürer?",
        a: "Süre; ders saatlerine, resmi sınav takvimine ve sizin programınıza bağlıdır. [DOĞRULA: ortalama süre] Kayıtta size tahmini bir takvim çıkarıyoruz.",
      },
      {
        featured: true,
        q: "Manuel mi otomatik mi seçmeliyim?",
        a: "Yalnızca otomatik araç kullanacaksanız otomatik vites mantıklı olabilir; ancak bu durumda ehliyetiniz otomatik vites kısıtlamalı olur. [DOĞRULA: mevzuat] İleride manuel araç kullanma ihtimaliniz varsa manuel eğitimi öneriyoruz.",
      },
      {
        q: "Direksiyon dersleri nerede yapılıyor?",
        a: "İlk dersler trafiğe kapalı eğitim alanında, sonraki dersler Beylikdüzü trafiğinde yapılıyor.",
      },
      {
        q: "Hafta sonu ders var mı?",
        a: "Kurumumuz haftanın 7 günü 09.00–18.00 arasında açık. Ders saatlerini birlikte planlıyoruz.",
      },
    ],
  },
  {
    id: "sinav",
    title: "Sınavlar",
    items: [
      {
        featured: true,
        q: "Sınavda kalırsam ne olur?",
        a: "Teorik ve direksiyon sınavları için tekrar hakları mevzuatla belirlenir. [DOĞRULA: tekrar hakkı ve ücreti] Böyle bir durumda eksik konulara göre ek çalışma planı çıkarıyoruz.",
      },
      {
        q: "Teorik sınav nerede yapılıyor?",
        a: "Teorik sınav MEB tarafından elektronik sınav merkezlerinde yapılır. Sınav yeri ve tarihi resmi takvime göre belirlenir. [DOĞRULA: MEB e-Sınav]",
      },
    ],
  },
  {
    id: "ulasim",
    title: "Konum ve iletişim",
    items: [
      {
        featured: true,
        q: "Kurum tam olarak nerede?",
        a: "Beylikdüzü Cumhuriyet Mahallesi'ndeyiz. Açık adres ve yol tarifi iletişim sayfasında. Gelmeden önce aramanız yeterli.",
      },
      {
        q: "Hangi mahallelerden öğrenci kabul ediyorsunuz?",
        a: "Beylikdüzü'nün tüm mahallelerinden öğrencimiz var. Ders saatlerini ulaşımınızı da düşünerek planlıyoruz.",
      },
    ],
  },
];

export const allFaqs = faqGroups.flatMap((g) => g.items);
export const featuredFaqs = allFaqs.filter((f) => f.featured).slice(0, 5);
