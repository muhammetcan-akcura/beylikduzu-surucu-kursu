"use server";

import { getLeadNotifier } from "@/lib/email";
import { classOptions, normalizePhone, type FormState } from "./form-schema";

const MIN_FILL_MS = 2500; // ilk etkileşimden bu yana bundan hızlı gönderimler "şüpheli" işaretlenir (atılmaz)

export async function submitApplication(_prev: FormState, formData: FormData): Promise<FormState> {
  const name = String(formData.get("name") ?? "").trim();
  const phoneRaw = String(formData.get("phone") ?? "").trim();
  const licenseClass = String(formData.get("licenseClass") ?? "");
  const message = String(formData.get("message") ?? "").trim();
  const kvkk = formData.get("kvkk") === "on";
  const honeypot = String(formData.get("website") ?? "");
  const startedAt = Number(formData.get("startedAt") ?? 0);
  const sourcePath = String(formData.get("sourcePath") ?? "").slice(0, 200);

  const values = { name, phone: phoneRaw, licenseClass, message };

  // Spam: yalnızca honeypot doluysa sessizce "başarılı" dön. İnsan bu alanı göremez.
  if (honeypot) {
    return { status: "success", message: "Teşekkürler. En kısa sürede sizi arayacağız." };
  }

  const errors: FormState["errors"] = {};
  if (name.length < 3 || name.length > 80 || !/\s/.test(name)) errors.name = "Lütfen adınızı ve soyadınızı yazın.";
  const phone = normalizePhone(phoneRaw);
  if (!phone) errors.phone = "Telefon numarasını 05XX XXX XX XX biçiminde yazın.";
  const option = classOptions.find((o) => o.value === licenseClass);
  if (!option) errors.licenseClass = "Lütfen bir ehliyet sınıfı seçin.";
  if (message.length > 1000) errors.message = "Mesaj en fazla 1000 karakter olabilir.";
  if (!kvkk) errors.kvkk = "Devam etmek için KVKK Aydınlatma Metni'ni onaylayın.";

  if (Object.keys(errors).length > 0) {
    return { status: "error", message: "Formda düzeltilmesi gereken alanlar var.", errors, values };
  }

  // Hızlı gönderim (otomatik doldurma olabilir) atılmaz; işletmeye "şüpheli" notuyla iletilir.
  const fast = startedAt > 0 && Date.now() - startedAt < MIN_FILL_MS;

  const result = await getLeadNotifier().send({
    name,
    phone: phone!,
    licenseClass: option!.label,
    message: message || undefined,
    submittedAt: new Date().toLocaleString("tr-TR", { timeZone: "Europe/Istanbul" }),
    sourcePath,
    suspect: fast ? "çok hızlı gönderildi (bot olabilir)" : undefined,
  });

  if (!result.ok) {
    console.error("[başvuru] gönderim hatası:", result.error);
    return {
      status: "error",
      message: "Başvurunuz şu anda iletilemedi. Lütfen bizi telefonla arayın ya da WhatsApp'tan yazın.",
      values,
    };
  }

  return { status: "success", message: "Teşekkürler, başvurunuz bize ulaştı. Çalışma saatleri içinde sizi arayacağız." };
}
