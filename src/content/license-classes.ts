/**
 * Ehliyet sınıfları içeriği. Her sınıfın metni ÖZGÜNDÜR — şablon metinde sınıf adı değiştirilmez.
 * Mevzuat bilgileri (2026-11-10'da mevzuat.gov.tr'deki güncel metinlerden):
 *  - KTY = Karayolları Trafik Yönetmeliği: md. 75 (sınıflar ve motor sınırları), md. 76 (yaş, deneyim, öğrenim),
 *    md. 85 (bir sınıfla sürülebilen diğer sınıflar; 10/2/2024 eki: B ile A1 motosiklet).
 *  - MTSKY = MEB Özel Motorlu Taşıt Sürücüleri Kursu Yönetmeliği: md. 6/2 (otomatik kısıtlaması), md. 7 (ders saatleri),
 *    md. 11 (kayıt belgeleri), md. 15 (sınav hakları), md. 16 (sıra, günlük sınır), md. 28 (sınav usulü), md. 39 (fark eğitimi).
 * Mevzuat değişirse burası güncellenir. İşletmeye ait bilgiler (motosiklet modeli, ekipman, ders saatleri) hâlâ `[DOĞRULA: ...]`.
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
  "Sürücü olur raporu (sağlık raporu)",
  "Son altı ayda çekilmiş 2 adet biyometrik fotoğraf",
  "Diploma veya öğrenim belgesi (en az ilkokul)",
  "18 yaşını doldurmamış adaylar için veli/vasi muvafakatnamesi",
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
      { label: "Asgari yaş", value: "18" },
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
          "B sınıfı eğitimi iki ayaktan oluşur: trafik ve çevre bilgisi, ilk yardım ve araç tekniği konularını kapsayan teorik dersler ile direksiyon eğitimi. Teorik eğitim toplam 34 ders saatidir: trafik ve çevre 16, ilk yardım 8, araç tekniği 6, trafik adabı 4 saat. Direksiyon eğitimine teorik sınavı geçtikten sonra başlanır. B sınıfında eğitim alanındaki derslerden sonra akan trafikte en az 14 saat ders alırsınız; bunun en az 2 saati gece yapılır.",
          "Direksiyon eğitimine trafiğin olmadığı eğitim alanında başlıyoruz. Kalkış, durma, park ve manevra rahatladığında Beylikdüzü'nün gerçek trafiğine geçiyoruz: ana caddeler, kavşaklar, okul önleri ve dar sokaklar.",
        ],
      },
      {
        id: "otomatik-vites",
        eyebrow: "Otomatik vites",
        title: "Otomatik vites ehliyeti: kimler için mantıklı?",
        paragraphs: [
          "Otomatik vitesli araçla eğitim alıp sınava girdiğinizde ehliyetiniz otomatik vites kısıtlamasıyla düzenlenir. Bu durumda manuel vitesli araç kullanamazsınız. Kısıtlamayı sonradan kaldırmak isterseniz direksiyon eğitiminin yarısını manuel araçla tamamlayıp yeniden direksiyon sınavına girersiniz.",
          "Yalnızca otomatik araç kullanacaksanız, şehir içi trafikte debriyaj kaygısı yaşamak istemiyorsanız ya da vitese ayırdığınız dikkati yola vermek istiyorsanız otomatik vites iyi bir seçenek olabilir. Uzun vadede manuel araç kullanma ihtimaliniz varsa manuel eğitimi öneriyoruz.",
          "Kararsızsanız sizi telefonda dinleyip kullanım alışkanlığınıza göre birlikte karar veriyoruz.",
        ],
        bullets: [
          "Manuel: tüm B sınıfı araçları kullanma imkânı",
          "Otomatik: yalnızca otomatik vitesli araçlar; ders saati aynıdır",
          "Her iki seçenek için de Hyundai eğitim araçlarımız var",
        ],
      },
      {
        eyebrow: "Sınav",
        title: "Direksiyon sınavında neye bakılır?",
        paragraphs: [
          "Sınavda yalnızca aracı hareket ettirmeniz değil; ayna kontrolü, sinyal kullanımı, şerit takibi, yaya önceliği ve park gibi temel davranışlar değerlendirilir. Sınav, izinli bir güzergâhta MEB'in değerlendirme formuna göre yapılır ve en az 40 dakika sürer: araç bilgisi soruları, uygulama alanındaki manevralar ve akan trafikte sürüş. Formda kırmızıyla gösterilen bir hata ya da sarıyla gösterilen iki hata başarısız sayılmanıza yol açar.",
          "Son derslerde sınav güzergâhına benzer koşullarda prova yapıyoruz. Amaç sınavı geçmek kadar, sınavdan sonra tek başınıza güvenle yola çıkabilmek.",
        ],
      },
    ],
    documents: commonDocuments,
    faqs: [
      {
        q: "B sınıfı ehliyet kaç yaşında alınır?",
        a: "B sınıfı ehliyet için 18 yaşını doldurmuş olmanız gerekir. 18 yaşından küçükseniz kayıtta veli veya vasi muvafakatnamesi istenir. Kayıt tarihinizin uygun olup olmadığını telefonda birlikte kontrol edebiliriz.",
      },
      {
        q: "Otomatik vites ehliyeti alırsam manuel araç kullanabilir miyim?",
        a: "Hayır. Otomatik vitesli araçla sınava girdiğinizde ehliyetiniz yalnızca otomatik araçlar için geçerli olur. Sonradan manuel araç kullanmak isterseniz direksiyon eğitiminin yarısını manuel araçla alıp direksiyon sınavına yeniden girmeniz gerekir; teorik eğitim ve sınav tekrarlanmaz.",
      },
      {
        q: "Direksiyon dersleri hangi saatlerde yapılıyor?",
        a: "Direksiyon dersleri hafta içi 09.00–18.00 arasında yapılır; ders saatlerini bu aralıkta programınıza göre birlikte planlıyoruz. Zorunlu gece dersinin saati ayrıca, esnek olarak ayarlanır. Ofisimiz her gün açık.",
      },
      {
        q: "Sınavda kalırsam ne olur?",
        a: "Teorik sınavda kalırsanız derslere yeniden katılmadan, yalnızca sınav ücretini ödeyerek üç kez daha girebilirsiniz. Direksiyon sınavında kalırsanız en az 2 saat ek ders alıp sonraki sınav dönemlerinde üç kez daha girersiniz. Dört hakkın sonunda da geçemezseniz 60 gün içinde dersleri yeniden alarak dört hak daha kazanırsınız. Böyle bir durumda eksik kalan konulara göre ek ders planı çıkarıyoruz.",
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
      { label: "Motor sınırı", value: "125 cc, 11 kW, 0,1 kW/kg" },
      { label: "Asgari yaş", value: "16" },
      { label: "Eğitim aracı", value: "A1 sınıfına uygun eğitim motosikleti" },
    ],
    suitableFor: [
      "16 yaşını doldurmuş, henüz B ehliyet yaşına (18) gelmemiş ama motosiklet kullanmak isteyen gençler",
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
          "Kask, eldiven gibi koruyucu ekipmanı derslerde kurum olarak biz sağlıyoruz. Koruyucu ekipman olmadan pratik derse başlamıyoruz.",
        ],
      },
    ],
    documents: commonDocuments,
    faqs: [
      {
        q: "A1 ehliyetle hangi motosikletleri kullanabilirim?",
        a: "A1 sınıfı; silindir hacmi 125 cm³, gücü 11 kW ve güç/ağırlık oranı 0,1 kW/kg değerini geçmeyen motosikletleri (sepetli veya sepetsiz) ve gücü 15 kW’ı geçmeyen üç tekerlekli motosikletleri kapsar.",
      },
      {
        q: "B ehliyetim varsa A1 almam gerekir mi?",
        a: "B ehliyet tek başına motosiklet kullanma hakkı vermez; yalnızca moped (M sınıfı) kullanılabilir. Ancak en az 2 yıllık B ehliyetiniz varsa, son 5 yılda ehliyetiniz geri alınmadıysa ve iki tekerlekli araç sağlık şartlarını taşıyorsanız, A1 direksiyon eğitiminin yarısını alıp uygulama sınavını geçerek A1 sınıfı motosikletleri kullanabilirsiniz (ticari kullanım hariç). Kullanacağınız aracı söyleyin, size uygun yolu birlikte belirleyelim.",
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
      { label: "Motor sınırı", value: "35 kW, 0,2 kW/kg" },
      { label: "Asgari yaş", value: "18" },
      { label: "Eğitim aracı", value: "A2 sınıfına uygun eğitim motosikleti" },
    ],
    suitableFor: [
      "Kurye, teslimat ve saha işlerinde çalışanlar",
      "Trafiği motosikletle aşmak isteyen günlük kullanıcılar",
      "İleride A sınıfına geçmeyi planlayanlar (2 yıllık A2 ile 20 yaşında A alınabilir)",
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
          "Üç sınıf arasındaki fark motor gücü ve yaş şartıdır. Kullanmak istediğiniz motosikletin ruhsatındaki güç değerini bize iletirseniz hangi sınıfın gerektiğini birlikte netleştiririz.",
        ],
        bullets: [
          "A1: 125 cc, 11 kW ve 0,1 kW/kg’a kadar; 16 yaş",
          "A2: 35 kW ve 0,2 kW/kg’a kadar; 18 yaş",
          "A: güç sınırı yok; 2 yıllık A2 ile 20 yaş, A2 olmadan 24 yaş",
        ],
      },
    ],
    documents: commonDocuments,
    faqs: [
      {
        q: "A2 ehliyetle kaç kW'lık motosiklet kullanabilirim?",
        a: "A2 sınıfı; gücü 35 kW ve güç/ağırlık oranı 0,2 kW/kg değerini geçmeyen motosikletleri (sepetli veya sepetsiz) ve gücü 15 kW’ı geçmeyen üç tekerlekli motosikletleri kapsar. A2 ehliyetle A1 ve M sınıfı araçlar da kullanılabilir.",
      },
      {
        q: "A1 ehliyetim var, A2'ye geçebilir miyim?",
        a: "A1’den A2’ye geçiş için ayrıca deneyim şartı aranmaz; 18 yaşını doldurmuş olmanız ve A2 direksiyon eğitimini alıp sınavı geçmeniz gerekir. Mevcut ehliyetinizle bizi arayın, durumunuza göre yol haritası çıkaralım.",
      },
      {
        q: "Kurye olarak çalışıyorum, eğitim saatleri işime uyar mı?",
        a: "Direksiyon dersleri hafta içi 09.00–18.00 arasında yapılıyor; bu aralıkta saatleri vardiyanıza göre planlamaya çalışıyoruz. Zorunlu gece dersinin saati ayrıca, esnek olarak ayarlanıyor.",
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
      { label: "Şart", value: "2 yıllık A2 ile 20 yaş veya A2 olmadan 24 yaş" },
      { label: "Eğitim aracı", value: "A sınıfına uygun eğitim motosikleti" },
    ],
    suitableFor: [
      "Yüksek güçlü motosiklet ya da uzun yol motosikleti kullanmak isteyenler",
      "En az 2 yıldır A2 ehliyeti olan ve bir üst sınıfa geçmek isteyenler",
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
          "İki yol var. En az 2 yıllık A2 ehliyetiniz varsa 20 yaşında A sınıfına geçebilirsiniz; bu durumda akan trafikte en az 6 saat direksiyon dersi alırsınız. A2 ehliyetiniz yoksa 24 yaşını doldurduğunuzda doğrudan başvurabilirsiniz; bu yolda en az 12 saat ders alırsınız ve bunun en az 2 saati gece yapılır. Hangi yoldan ilerleyeceğinizi kayıt öncesinde birlikte netleştiriyoruz.",
        ],
      },
    ],
    documents: [...commonDocuments, "Mevcut sürücü belgesinin fotokopisi (A2 ile geçişte)"],
    faqs: [
      {
        q: "A sınıfı ehliyet için kaç yaşında olmak gerekir?",
        a: "En az 2 yıllık A2 ehliyetiniz varsa 20 yaşında, A2 ehliyetiniz yoksa 24 yaşında A sınıfı ehliyet alabilirsiniz. Gücü 15 kW’ı aşan üç tekerlekli motosikletler için yaş sınırı 21’dir.",
      },
      {
        q: "A sınıfı ehliyetle her motosikleti kullanabilir miyim?",
        a: "A sınıfı, güç sınırı olmadan tüm iki tekerlekli motosikletleri (sepetli veya sepetsiz) ve gücü 15 kW’ı geçen üç tekerlekli motosikletleri kapsar. A ehliyetle A2, A1 ve M sınıfı araçlar da kullanılabilir.",
      },
      {
        q: "Eğitimde kullanılan motosiklet ne?",
        a: "Eğitimde, sınıfın mevzuattaki şartlarına uygun kurum motosikleti kullanılır. Marka ve model bilgisini telefonda veriyoruz.",
      },
    ],
    related: ["a2-sinifi", "b-sinifi"],
    image: "classMoto",
  },
];

export const getLicenseClass = (slug: string) => licenseClasses.find((c) => c.slug === slug);
