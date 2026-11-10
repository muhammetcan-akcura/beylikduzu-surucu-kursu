/**
 * Kayıttan belgeye süreç. Sıra, ders saatleri ve sınav usulü MEB Özel Motorlu Taşıt Sürücüleri Kursu Yönetmeliği
 * md. 7, 15, 16 ve 28'den (2026-11-10). Mevzuat değişirse burası güncellenir.
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
      "Trafik ve çevre bilgisi, ilk yardım ve araç tekniği konularında teorik derslere katılırsınız. Teorik eğitim toplam 34 ders saatidir: trafik ve çevre 16, ilk yardım 8, araç tekniği 6, trafik adabı 4 saat. Günde en az 2, en fazla 6 saat ders yapılır. Toplam ders saatinin beşte birinden fazlasına katılmazsanız kaydınız silinir.",
      "Derslerde ezber yerine, sınav sorularının arkasındaki mantığı anlatmaya çalışıyoruz.",
    ],
    duration: "34 ders saati",
    youDo: "Derslere katılır, deneme sınavlarını çözersiniz.",
    weDo: "Konu anlatımı ve deneme sınavlarıyla sizi hazırlarız.",
  },
  {
    number: "03",
    title: "Teorik sınav (e-Sınav)",
    short: "MEB tarafından elektronik ortamda yapılan yazılı sınav.",
    detail: [
      "Teorik eğitimi tamamladıktan sonra MEB'in elektronik sınavına girersiniz. Sınav tarihi ve yeri resmi takvime göre belirlenir. Tüm teorik dersler için tek sınav yapılır; 100 üzerinden 70 ve üzeri puan alan başarılı sayılır. Kalırsanız derslere yeniden katılmadan üç kez daha sınava girebilirsiniz.",
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
      "Temel kontrol oturduğunda gerçek trafiğe çıkarız. Direksiyon eğitimine teorik sınavı geçtikten sonra başlanır ve günde en fazla 2 saat ders yapılır. Akan trafikteki asgari ders süresi B sınıfında 14, A1 ve A2 sınıflarında 12 saattir; bunun en az 2 saati gece yapılır.",
    ],
    duration: "B: en az 14 saat trafikte · A1/A2: en az 12 saat",
    youDo: "Planlanan saatlerde derse gelirsiniz.",
    weDo: "İlerlemenize göre ders planını birlikte güncelleriz.",
  },
  {
    number: "05",
    title: "Direksiyon sınavı",
    short: "Sınav görevlisi eşliğinde uygulamalı sınav.",
    detail: [
      "Direksiyon sınavı izinli bir güzergâhta MEB'in değerlendirme formuna göre yapılır ve en az 40 dakika sürer: araç bilgisi soruları, uygulama alanındaki manevralar ve akan trafikte sürüş. Formda kırmızıyla gösterilen bir hata ya da sarıyla gösterilen iki hata başarısız sayılmanıza yol açar. Sınavı geçenler sertifikalarını e-Devlet üzerinden alır.",
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
      "Sınavları geçtiğinizde sertifikanız sisteme işlenir. Ardından randevu alarak nüfus müdürlüğüne sürücü belgesi başvurusu yaparsınız. Harç ve belge bedeli her yıl yeniden belirlenir; güncel tutarı başvurudan önce birlikte kontrol ediyoruz.",
    ],
    youDo: "Randevu alıp belge başvurusunu yaparsınız.",
    weDo: "Hangi belgelerle nereye gideceğinizi anlatırız.",
  },
];
