import { site } from "@/config/site";

export type Lead = {
  name: string;
  phone: string;
  licenseClass: string;
  message?: string;
  submittedAt: string;
  sourcePath?: string;
};

/** Soyut e-posta servisi: sağlayıcı değiştirmek için yalnızca yeni bir uygulama yazılır. */
export interface LeadNotifier {
  send(lead: Lead): Promise<{ ok: true } | { ok: false; error: string }>;
}

const escapeHtml = (s: string) =>
  s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c] as string);

function renderLead(lead: Lead) {
  const rows: [string, string][] = [
    ["Ad soyad", lead.name],
    ["Telefon", lead.phone],
    ["Ehliyet sınıfı", lead.licenseClass],
    ["Mesaj", lead.message || "—"],
    ["Tarih", lead.submittedAt],
    ["Sayfa", lead.sourcePath || "—"],
  ];
  const text = rows.map(([k, v]) => `${k}: ${v}`).join("\n");
  const html = `<table cellpadding="6" style="font-family:Arial,sans-serif;font-size:15px">${rows
    .map(([k, v]) => `<tr><td style="color:#5a616a">${k}</td><td><strong>${escapeHtml(v)}</strong></td></tr>`)
    .join("")}</table>`;
  return { text, html };
}

/** Resend HTTP API — SDK yerine fetch: ek bağımlılık yok. */
class ResendNotifier implements LeadNotifier {
  constructor(
    private apiKey: string,
    private from: string,
    private to: string,
  ) {}
  async send(lead: Lead) {
    const { text, html } = renderLead(lead);
    try {
      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: { Authorization: `Bearer ${this.apiKey}`, "Content-Type": "application/json" },
        body: JSON.stringify({
          from: this.from,
          to: [this.to],
          subject: `Yeni başvuru: ${lead.name} (${lead.licenseClass})`,
          text,
          html,
        }),
        cache: "no-store",
      });
      if (!res.ok) return { ok: false as const, error: `Resend ${res.status}` };
      return { ok: true as const };
    } catch (e) {
      return { ok: false as const, error: e instanceof Error ? e.message : "bilinmeyen hata" };
    }
  }
}

/** Anahtar yoksa (geliştirme / demo): başvuruyu sunucu loguna yazar. */
class ConsoleNotifier implements LeadNotifier {
  async send(lead: Lead) {
    console.info("[başvuru] RESEND_API_KEY tanımlı değil, e-posta gönderilmedi:\n" + renderLead(lead).text);
    return { ok: true as const };
  }
}

export function getLeadNotifier(): LeadNotifier {
  const key = process.env.RESEND_API_KEY;
  const from = process.env.LEAD_FROM_EMAIL;
  const to = process.env.LEAD_TO_EMAIL || site.email;
  if (key && from) return new ResendNotifier(key, from, to);
  return new ConsoleNotifier();
}
