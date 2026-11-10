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
        a: "T.C. kimlik kartı, sürücü olur raporu (sağlık raporu), son altı ayda çekilmiş 2 biyometrik fotoğraf ve en az ilkokul düzeyinde öğrenim belgesi istenir. 18 yaşından küçükseniz veli/vasi muvafakatnamesi de gerekir. Adli sicil kaydınızı MEB sistem üzerinden kendisi kontrol eder. Kayıttan önce size eksiksiz bir liste veriyoruz.",
      },
      {
        q: "Kayıt için kuruma gelmem gerekiyor mu?",
        a: "Ön görüşmeyi telefon veya WhatsApp üzerinden yapabiliriz. Kayıtta belgelerinizin aslı görülür ve fotoğrafınız kurumda çekilir; bu yüzden kayıt günü kuruma gelmeniz gerekir.",
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
        a: "Süre; ders saatlerine, resmi sınav takvimine ve sizin programınıza bağlıdır. Mevzuata göre teorik sınav hakları kayıt döneminin başlangıcından itibaren 90 gün içinde, direksiyon eğitimi de teorik sınavı geçtikten sonra 90 gün içinde tamamlanacak şekilde planlanır. Kayıtta size tahmini bir takvim çıkarıyoruz.",
      },
      {
        featured: true,
        q: "Manuel mi otomatik mi seçmeliyim?",
        a: "Yalnızca otomatik araç kullanacaksanız otomatik vites mantıklı olabilir; ancak bu durumda ehliyetiniz yalnızca otomatik araçlar için geçerli olur. Kısıtlamayı sonradan kaldırmak için direksiyon eğitiminin yarısını manuel araçla alıp sınava yeniden girmeniz gerekir. İleride manuel araç kullanma ihtimaliniz varsa manuel eğitimi öneriyoruz.",
      },
      {
        q: "Direksiyon dersleri nerede yapılıyor?",
        a: "İlk dersler trafiğe kapalı eğitim alanında, sonraki dersler Beylikdüzü trafiğinde yapılıyor.",
      },
      {
        q: "Hafta sonu ders var mı?",
        a: "Hafta sonu direksiyon dersi yok; dersler hafta içi 09.00–18.00 arasında yapılıyor. Zorunlu gece dersinin saatini ayrıca, esnek olarak ayarlıyoruz. Ofisimiz her gün 09.00–18.00 açık.",
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
        a: "Teorik sınavda kalırsanız derslere yeniden katılmadan, yalnızca sınav ücretini ödeyerek üç kez daha girebilirsiniz. Direksiyon sınavında kalırsanız en az 2 saat ek ders alıp üç sınav dönemi daha girersiniz. Dört hakkın sonunda da geçemezseniz 60 gün içinde dersleri yeniden alarak dört hak daha kazanırsınız. Böyle bir durumda eksik konulara göre ek çalışma planı çıkarıyoruz.",
      },
      {
        q: "Teorik sınav nerede yapılıyor?",
        a: "Teorik sınav MEB tarafından elektronik ortamda (e-Sınav) yapılır. Sınav yeri ve tarihi resmi takvime göre belirlenir. Tüm teorik dersler için tek sınav yapılır; 100 üzerinden 70 ve üzeri puan alan başarılı sayılır.",
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
        a: "Beylikdüzü'nün tüm mahallelerinden başvuru alıyoruz. Ders saatlerini ulaşımınızı da düşünerek planlıyoruz.",
      },
    ],
  },
];

export const allFaqs = faqGroups.flatMap((g) => g.items);
export const featuredFaqs = allFaqs.filter((f) => f.featured).slice(0, 5);
