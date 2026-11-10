/**
 * Kayıttan belgeye süreç. Sıra ve süreler mevzuata bağlıdır → [DOĞRULA] işaretli.
 */

export type ProcessStep = {
  number: string;
  title: string;
  short: string;
  detail: string[];
  duration?: string;
  youDo: string;
  weDo: string;
};

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Ön görüşme ve kayıt",
    short: "Arayın ya da uğrayın. Sınıfı ve takvimi birlikte belirleyelim.",
    detail: [
      "İlk görüşmede hangi sınıfın size uygun olduğunu, manuel mi otomatik mi tercih edeceğinizi ve programınızı konuşuyoruz.",
      "Kayıt için gereken belgeleri bir liste halinde veriyoruz. Eksik belge varsa nereden, nasıl alınacağını anlatıyoruz.",
    ],
    youDo: "Kimlik ve gerekli belgeleri getirirsiniz.",
    weDo: "Dosyanızı açar, ders takviminizi planlarız.",
  },
  {
    number: "02",
    title: "Teorik eğitim",
    short: "Trafik, ilk yardım ve araç tekniği dersleri.",
    detail: [
      "Trafik ve çevre bilgisi, ilk yardım ve araç tekniği konularında teorik derslere katılırsınız. Ders saatleri ve devam şartı mevzuatla belirlenir. [DOĞRULA: MEB ders saati ve devam şartı]",
      "Derslerde ezber yerine, sınav sorularının arkasındaki mantığı anlatmaya çalışıyoruz.",
    ],
    duration: "[DOĞRULA: süre]",
    youDo: "Derslere katılır, deneme sınavlarını çözersiniz.",
    weDo: "Konu anlatımı ve deneme sınavlarıyla sizi hazırlarız.",
  },
  {
    number: "03",
    title: "Teorik sınav (e-Sınav)",
    short: "MEB tarafından elektronik ortamda yapılan yazılı sınav.",
    detail: [
      "Teorik eğitimi tamamladıktan sonra MEB'in elektronik sınavına girersiniz. Sınav tarihi ve yeri resmi takvime göre belirlenir. [DOĞRULA: MEB e-Sınav usulü]",
    ],
    youDo: "Sınav günü kimliğinizle sınav merkezine gidersiniz.",
    weDo: "Sınav başvurunuzu ve tarih takibini yaparız.",
  },
  {
    number: "04",
    title: "Direksiyon eğitimi",
    short: "Önce eğitim alanında, sonra Beylikdüzü trafiğinde.",
    detail: [
      "İlk dersler trafiğe kapalı eğitim alanında yapılır: kalkış, durma, vites, park ve manevra.",
      "Temel kontrol oturduğunda gerçek trafiğe çıkarız. Ders saati sayısı mevzuatla belirlenir. [DOĞRULA: asgari direksiyon ders saati] [DOĞRULA: direksiyon eğitiminin teorik sınavdan önce/sonra başlama sırası]",
    ],
    duration: "[DOĞRULA: ders saati]",
    youDo: "Planlanan saatlerde derse gelirsiniz.",
    weDo: "İlerlemenize göre ders planını birlikte güncelleriz.",
  },
  {
    number: "05",
    title: "Direksiyon sınavı",
    short: "Sınav görevlisi eşliğinde uygulamalı sınav.",
    detail: [
      "Direksiyon sınavında temel sürüş becerileriniz ve trafik kurallarına uyumunuz değerlendirilir. [DOĞRULA: sınav usulü ve değerlendirme]",
      "Sınavdan önceki derslerde sınav koşullarına benzer bir prova yapıyoruz.",
    ],
    youDo: "Sınav gününde hazır olursunuz.",
    weDo: "Sınav randevusunu alır, son provayı yaparız.",
  },
  {
    number: "06",
    title: "Sürücü belgesi",
    short: "Başarılı olduktan sonra belge başvurusu.",
    detail: [
      "Sınavları geçtikten sonra sürücü belgesi için ilgili kuruma başvurursunuz. [DOĞRULA: başvuru yeri (Nüfus Müdürlüğü / e-Devlet randevu), harç ve gereken belgeler]",
    ],
    youDo: "Randevu alıp belge başvurusunu yaparsınız.",
    weDo: "Hangi belgelerle nereye gideceğinizi anlatırız.",
  },
];
