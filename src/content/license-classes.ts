/**
 * Ehliyet sınıfları içeriği. Her sınıfın metni ÖZGÜNDÜR — şablon metinde sınıf adı değiştirilmez.
 * Mevzuata bağlı her bilgi (yaş, motor gücü, ders saati, belge) `[DOĞRULA: ...]` ile işaretlidir.
 */

import type { MediaKey } from "./media";

export type Faq = { q: string; a: string };

export type ContentSection = {
  id?: string;
  eyebrow?: string;
  title: string;
  paragraphs: string[];
  bullets?: string[];
};

export type LicenseClass = {
  slug: string;
  code: string;
  name: string;
  /** Kartlarda görünen tek satır */
  vehicle: string;
  /** Kartlarda görünen kısa açıklama */
  summary: string;
  primaryKeyword: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  lead: string;
  facts: { label: string; value: string }[];
  suitableFor: string[];
  sections: ContentSection[];
  documents: string[];
  faqs: Faq[];
  related: string[];
  image: MediaKey;
};

const commonDocuments = [
  "Nüfus cüzdanı / T.C. kimlik kartı",
  "Sürücü olur sağlık raporu [DOĞRULA: güncel rapor türü ve geçerlilik süresi]",
  "Biyometrik fotoğraf [DOĞRULA: adet]",
  "Öğrenim belgesi [DOĞRULA: asgari öğrenim şartı ve e-Devlet üzerinden sorgulanabilirlik]",
];

export const licenseClasses: LicenseClass[] = [
  {
    slug: "b-sinifi",
    code: "B",
    name: "B Sınıfı Ehliyet",
    vehicle: "Otomobil ve kamyonet",
    summary:
      "En çok tercih edilen sınıf. Günlük kullanım için otomobil ehliyeti; manuel veya otomatik vites seçeneğiyle.",
    primaryKeyword: "beylikdüzü b sınıfı ehliyet",
    metaTitle: "B Sınıfı Ehliyet Kursu",
    metaDescription:
      "Beylikdüzü'nde B sınıfı ehliyet: manuel ve otomatik vitesli Hyundai araçlarla direksiyon eğitimi, teorik dersler ve sınav süreci. Bilgi için hemen arayın.",
    h1: "Beylikdüzü'nde B Sınıfı Ehliyet Eğitimi",
    lead:
      "Otomobil kullanmayı öğrenmek isteyen herkes için. Teorik derslerden direksiyon sınavına kadar süreci adım adım planlıyor, manuel ya da otomatik vites seçmenize yardımcı oluyoruz.",
    facts: [
      { label: "Araç", value: "Otomobil, kamyonet" },
      { label: "Asgari yaş", value: "[DOĞRULA: MEB]" },
      { label: "Vites", value: "Manuel veya otomatik" },
      { label: "Eğitim aracı", value: "Hyundai i10 · i20 · i30" },
    ],
    suitableFor: [
      "İlk ehliyetini alacak gençler",
      "Yıllardır erteleyip artık başlamak isteyen yetişkinler",
      "İşi ya da ailesi için günlük araç kullanacak olanlar",
      "Yalnızca otomatik vitesli araç kullanmayı planlayanlar",
    ],
    sections: [
      {
        eyebrow: "Eğitim",
        title: "Önce kurallar, sonra direksiyon",
        paragraphs: [
          "B sınıfı eğitimi iki ayaktan oluşur: trafik ve çevre bilgisi, ilk yardım ve araç tekniği konularını kapsayan teorik dersler ile direksiyon eğitimi. Ders saatleri ve konu dağılımı mevzuatla belirlenir. [DOĞRULA: MEB ders saatleri]",
          "Direksiyon eğitimine trafiğin olmadığı eğitim alanında başlıyoruz. Kalkış, durma, park ve manevra rahatladığında Beylikdüzü'nün gerçek trafiğine geçiyoruz: E-5 bağlantı yolları, okul önleri, kavşaklar ve site içi yollar.",
        ],
      },
      {
        id: "otomatik-vites",
        eyebrow: "Otomatik vites",
        title: "Otomatik vites ehliyeti: kimler için mantıklı?",
        paragraphs: [
          "Otomatik vitesli araçla eğitim alıp sınava girdiğinizde ehliyetiniz otomatik vites kısıtlamasıyla düzenlenir. Bu durumda manuel vitesli araç kullanamazsınız. [DOĞRULA: kısıtlama kodu ve sonradan kaldırma koşulları]",
          "Yalnızca otomatik araç kullanacaksanız, şehir içi trafikte debriyaj kaygısı yaşamak istemiyorsanız ya da eğitimi daha kısa sürede tamamlamayı hedefliyorsanız otomatik vites iyi bir seçenek olabilir. Uzun vadede manuel araç kullanma ihtimaliniz varsa manuel eğitimi öneriyoruz.",
          "Kararsızsanız sizi telefonda dinleyip kullanım alışkanlığınıza göre birlikte karar veriyoruz.",
        ],
        bullets: [
          "Manuel: tüm B sınıfı araçları kullanma imkânı",
          "Otomatik: yalnızca otomatik vitesli araçlar [DOĞRULA: mevzuat]",
          "Her iki seçenek için de Hyundai eğitim araçlarımız var",
        ],
      },
      {
        eyebrow: "Sınav",
        title: "Direksiyon sınavında neye bakılır?",
        paragraphs: [
          "Sınavda yalnızca aracı hareket ettirmeniz değil; ayna kontrolü, sinyal kullanımı, şerit takibi, yaya önceliği ve park gibi temel davranışlar değerlendirilir. [DOĞRULA: güncel sınav değerlendirme kriterleri]",
          "Son derslerde sınav güzergâhına benzer koşullarda prova yapıyoruz. Amaç sınavı geçmek kadar, sınavdan sonra tek başınıza güvenle yola çıkabilmek.",
        ],
      },
    ],
    documents: commonDocuments,
    faqs: [
      {
        q: "B sınıfı ehliyet kaç yaşında alınır?",
        a: "Asgari yaş sınırı mevzuatla belirlenir. [DOĞRULA: MEB / Karayolları Trafik Yönetmeliği] Kayıt tarihinizin uygun olup olmadığını telefonda birlikte kontrol edebiliriz.",
      },
      {
        q: "Otomatik vites ehliyeti alırsam manuel araç kullanabilir miyim?",
        a: "Hayır. Otomatik vitesli araçla sınava girdiğinizde ehliyetiniz yalnızca otomatik araçlar için geçerli olur. [DOĞRULA: kısıtlamanın kaldırılma koşulları]",
      },
      {
        q: "Direksiyon dersleri hangi saatlerde yapılıyor?",
        a: "Kurumumuz her gün 09.00–18.00 arasında açık. Ders saatlerini programınıza göre birlikte planlıyoruz. [DOĞRULA: hafta sonu ve mesai sonrası ders imkânı]",
      },
      {
        q: "Sınavda kalırsam ne olur?",
        a: "Sınav tekrar hakları ve ücretleri mevzuatla belirlenir. [DOĞRULA: tekrar hakkı sayısı] Böyle bir durumda eksik kalan konulara göre ek ders planı çıkarıyoruz.",
      },
    ],
    related: ["a1-sinifi", "a2-sinifi"],
    image: "classB",
  },
  {
    slug: "a1-sinifi",
    code: "A1",
    name: "A1 Sınıfı Ehliyet",
    vehicle: "Hafif motosiklet",
    summary:
      "Motosiklete ilk adım. Düşük silindir hacimli hafif motosikletler için; şehir içi kısa mesafeler ve ilk deneyim için.",
    primaryKeyword: "beylikdüzü a1 ehliyet",
    metaTitle: "A1 Sınıfı Ehliyet Kursu",
    metaDescription:
      "Beylikdüzü'nde A1 sınıfı ehliyet: hafif motosikletle denge, fren ve trafik eğitimi. Yaş şartı, belgeler ve süreç hakkında bilgi almak için bizi arayın.",
    h1: "Beylikdüzü'nde A1 Sınıfı Motosiklet Ehliyeti",
    lead:
      "Motosiklet kullanmaya hafif bir araçla başlamak isteyenler için. Dengeyi, düşük hızda kontrolü ve trafikte görünür olmayı ilk dersten itibaren çalışıyoruz.",
    facts: [
      { label: "Araç", value: "Hafif motosiklet" },
      { label: "Motor sınırı", value: "[DOĞRULA: cc / kW sınırı]" },
      { label: "Asgari yaş", value: "[DOĞRULA: MEB]" },
      { label: "Eğitim aracı", value: "[DOĞRULA: kurum motosikleti]" },
    ],
    suitableFor: [
      "Henüz B ehliyet yaşına gelmemiş ama motosiklet kullanmak isteyen gençler [DOĞRULA: yaş sınırı]",
      "Şehir içinde kısa mesafe ulaşım için scooter düşünenler",
      "Daha güçlü motosiklete geçmeden önce temeli sağlam atmak isteyenler",
    ],
    sections: [
      {
        eyebrow: "Eğitim",
        title: "İki tekerlekte ilk hedef: düşük hızda kontrol",
        paragraphs: [
          "Motosiklette en zor kısım hız değil, yavaşlık. Bu yüzden eğitimin ilk bölümünü kapalı alanda; yürüme hızında denge, dar dönüş, slalom ve kontrollü durma üzerine kuruyoruz.",
          "Ardından ön–arka fren dengesi, bakış yönü ve vücut pozisyonu gibi konulara geçiyoruz. Trafikte görünür olmak, kör noktalardan uzak durmak ve araçlar arasında güvenli mesafe bırakmak bu sınıfın en kritik başlıkları.",
        ],
      },
      {
        eyebrow: "Ekipman",
        title: "Koruyucu ekipman eğitimin parçası",
        paragraphs: [
          "Kask, eldiven ve uygun ayakkabı olmadan pratik derse başlamıyoruz. Hangi ekipmanın kurum tarafından sağlandığını kayıtta netleştiriyoruz. [DOĞRULA: kurum tarafından sağlanan ekipman]",
        ],
      },
    ],
    documents: commonDocuments,
    faqs: [
      {
        q: "A1 ehliyetle hangi motosikletleri kullanabilirim?",
        a: "A1 sınıfı, silindir hacmi ve motor gücü belirli bir sınırın altındaki hafif motosikletleri kapsar. [DOĞRULA: güncel cc / kW sınırı]",
      },
      {
        q: "B ehliyetim varsa A1 almam gerekir mi?",
        a: "B ehliyetin hangi motosikletleri kapsadığı mevzuatla belirlenir ve zaman içinde değişmiştir. [DOĞRULA: B sınıfının motosiklet kapsamı] Kullanacağınız aracı söyleyin, size uygun sınıfı birlikte belirleyelim.",
      },
      {
        q: "Daha önce hiç motosiklete binmedim, sorun olur mu?",
        a: "Olmaz. Eğitimin ilk aşaması kapalı alanda ve düşük hızda yapılıyor. Trafiğe ancak temel kontrol oturduğunda çıkıyoruz.",
      },
    ],
    related: ["a2-sinifi", "a-sinifi"],
    image: "classMoto",
  },
  {
    slug: "a2-sinifi",
    code: "A2",
    name: "A2 Sınıfı Ehliyet",
    vehicle: "Orta güçte motosiklet",
    summary:
      "Şehir içi ve şehirlerarası kullanım için orta güçte motosikletler. Kurye ve günlük motosiklet kullanıcılarının sık tercihi.",
    primaryKeyword: "beylikdüzü a2 ehliyet",
    metaTitle: "A2 Sınıfı Ehliyet Kursu",
    metaDescription:
      "Beylikdüzü'nde A2 sınıfı motosiklet ehliyeti: orta güçte motosikletle kapalı alan ve trafik eğitimi. Kurye ve günlük kullanıcılar için süreci öğrenin.",
    h1: "Beylikdüzü'nde A2 Sınıfı Motosiklet Ehliyeti",
    lead:
      "Motosikleti her gün kullanacaklar için. Yoğun trafikte şerit seçimi, ani fren ve yağmurlu zeminde sürüş gibi gerçek hayat koşullarına odaklanan bir eğitim.",
    facts: [
      { label: "Araç", value: "Orta güçte motosiklet" },
      { label: "Motor sınırı", value: "[DOĞRULA: kW sınırı]" },
      { label: "Asgari yaş", value: "[DOĞRULA: MEB]" },
      { label: "Eğitim aracı", value: "[DOĞRULA: kurum motosikleti]" },
    ],
    suitableFor: [
      "Kurye, teslimat ve saha işlerinde çalışanlar",
      "Trafiği motosikletle aşmak isteyen günlük kullanıcılar",
      "İleride A sınıfına geçmeyi planlayanlar [DOĞRULA: kademeli geçiş koşulları]",
    ],
    sections: [
      {
        eyebrow: "Eğitim",
        title: "Her gün sürenler için gerçekçi senaryolar",
        paragraphs: [
          "A2 eğitimini, motosikleti iş ya da günlük ulaşım için kullanacak kişilerin karşılaşacağı durumlara göre kuruyoruz: duran trafikte kontrollü ilerleme, kavşakta dönüş yapan araçları öngörme, ani fren ve kaçış manevrası.",
          "Kapalı alanda temel beceriler oturduktan sonra trafik eğitimine geçiyoruz. Beylikdüzü'nün geniş bulvarları ile dar mahalle sokakları arasındaki geçişler bu eğitim için iyi bir alan sunuyor.",
        ],
      },
      {
        eyebrow: "Karşılaştırma",
        title: "A1 mi, A2 mi, A mı?",
        paragraphs: [
          "Üç sınıf arasındaki fark motor gücü ve yaş şartıdır. [DOĞRULA: güncel sınırlar] Kullanmak istediğiniz motosikletin ruhsatındaki güç değerini bize iletirseniz hangi sınıfın gerektiğini birlikte netleştiririz.",
        ],
        bullets: [
          "A1: hafif motosiklet, en düşük güç sınırı",
          "A2: orta güç, günlük ve iş kullanımı",
          "A: güç sınırı olmayan motosikletler [DOĞRULA: yaş / deneyim şartı]",
        ],
      },
    ],
    documents: commonDocuments,
    faqs: [
      {
        q: "A2 ehliyetle kaç kW'lık motosiklet kullanabilirim?",
        a: "A2 sınıfının motor gücü sınırı ve güç/ağırlık oranı mevzuatla belirlenir. [DOĞRULA: kW ve kW/kg sınırı]",
      },
      {
        q: "A1 ehliyetim var, A2'ye geçebilir miyim?",
        a: "Kademeli geçişin şartları ve eğitim gereklilikleri mevzuatla belirlenir. [DOĞRULA: A1 → A2 geçiş koşulları] Mevcut ehliyetinizle bizi arayın, durumunuza göre yol haritası çıkaralım.",
      },
      {
        q: "Kurye olarak çalışıyorum, eğitim saatleri işime uyar mı?",
        a: "Kurum her gün 09.00–18.00 arasında açık. Pratik ders saatlerini vardiyanıza göre planlamaya çalışıyoruz.",
      },
    ],
    related: ["a1-sinifi", "a-sinifi"],
    image: "classMoto",
  },
  {
    slug: "a-sinifi",
    code: "A",
    name: "A Sınıfı Ehliyet",
    vehicle: "Tüm motosikletler",
    summary:
      "Güç sınırı olmayan motosikletler için. Yaş ya da önceki ehliyet deneyimi şartı bulunan, en kapsamlı motosiklet sınıfı.",
    primaryKeyword: "beylikdüzü a sınıfı ehliyet",
    metaTitle: "A Sınıfı Ehliyet Kursu",
    metaDescription:
      "Beylikdüzü'nde A sınıfı ehliyet: güç sınırı olmayan motosikletler için kapsamlı eğitim. Yaş ve deneyim şartlarını, belgeleri ve süreci birlikte planlayalım.",
    h1: "Beylikdüzü'nde A Sınıfı Motosiklet Ehliyeti",
    lead:
      "Yüksek güçlü motosiklet kullanmak isteyenler için en kapsamlı sınıf. Güç arttıkça hata payı azalır; bu yüzden eğitimde kontrol ve öngörü önce gelir.",
    facts: [
      { label: "Araç", value: "Tüm motosikletler" },
      { label: "Motor sınırı", value: "Yok" },
      { label: "Şart", value: "[DOĞRULA: asgari yaş veya A2 deneyimi]" },
      { label: "Eğitim aracı", value: "[DOĞRULA: kurum motosikleti]" },
    ],
    suitableFor: [
      "Yüksek güçlü motosiklet ya da uzun yol motosikleti kullanmak isteyenler",
      "Belirli süre A2 ehliyeti kullanmış ve bir üst sınıfa geçmek isteyenler [DOĞRULA: süre]",
      "Motosiklet tutkusunu güvenli sürüş tekniğiyle desteklemek isteyenler",
    ],
    sections: [
      {
        eyebrow: "Eğitim",
        title: "Güç arttıkça teknik daha önemli",
        paragraphs: [
          "A sınıfı eğitiminde gaz kontrolü, viraj öncesi hız ayarı, bakış çizgisi ve fren mesafesi konularına daha fazla zaman ayırıyoruz. Güçlü bir motosiklette küçük bir el hareketi bile büyük bir tepki doğurur.",
          "Trafik eğitiminde ise hızın değil öngörünün sürücüyü koruduğunu gösteren senaryolar üzerinden çalışıyoruz: kör noktalar, şerit değiştiren araçlar, zemin değişimleri.",
        ],
      },
      {
        eyebrow: "Şartlar",
        title: "Doğrudan mı, kademeli mi?",
        paragraphs: [
          "A sınıfına doğrudan başvuru için yaş şartı, kademeli geçiş için ise belirli süre A2 ehliyeti kullanmış olma şartı bulunabilir. [DOĞRULA: MEB / Karayolları Trafik Yönetmeliği] Hangi yoldan ilerleyeceğinizi kayıt öncesinde birlikte netleştiriyoruz.",
        ],
      },
    ],
    documents: [...commonDocuments, "Varsa mevcut sürücü belgesi (kademeli geçişte) [DOĞRULA]"],
    faqs: [
      {
        q: "A sınıfı ehliyet için kaç yaşında olmak gerekir?",
        a: "Doğrudan başvuru ve kademeli geçiş için farklı şartlar uygulanabilir. [DOĞRULA: MEB / güncel yaş ve deneyim şartı]",
      },
      {
        q: "A sınıfı ehliyetle her motosikleti kullanabilir miyim?",
        a: "A sınıfı, motor gücü sınırı olmayan motosikletleri kapsar. [DOĞRULA: sepetli motosiklet ve üç tekerlekli araç kapsamı]",
      },
      {
        q: "Eğitimde kullanılan motosiklet ne?",
        a: "Eğitim motosikletimiz hakkında güncel bilgiyi telefonda veriyoruz. [DOĞRULA: kurum motosikleti marka/model]",
      },
    ],
    related: ["a2-sinifi", "b-sinifi"],
    image: "classMoto",
  },
];

export const getLicenseClass = (slug: string) => licenseClasses.find((c) => c.slug === slug);
