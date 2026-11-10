import { licenseClasses } from "@/content/license-classes";

export const classOptions = [
  ...licenseClasses.map((c) => ({ value: c.code, label: c.name })),
  { value: "B-otomatik", label: "B Sınıfı (otomatik vites)" },
  { value: "karar-vermedim", label: "Henüz karar vermedim" },
] as const;

export type FieldName = "name" | "phone" | "licenseClass" | "message" | "kvkk";

export type FormState = {
  status: "idle" | "success" | "error";
  message?: string;
  errors?: Partial<Record<FieldName, string>>;
  values?: { name?: string; phone?: string; licenseClass?: string; message?: string };
};

export const initialFormState: FormState = { status: "idle" };

/** TR cep / sabit hat: 0 ile veya +90 ile başlayan 10 haneli numara */
export function normalizePhone(raw: string) {
  let d = raw.replace(/\D/g, "");
  if (d.startsWith("90") && d.length === 12) d = d.slice(2);
  if (d.startsWith("0") && d.length === 11) d = d.slice(1);
  return d.length === 10 && /^[2-5]/.test(d) ? `0${d}` : null;
}

/* Form alanı stilleri (sunucu ve istemci bileşenlerinde ortak) */
export const fieldCls =
  "block w-full rounded-field border border-line-strong bg-raised px-4 text-body text-ink placeholder:text-muted " +
  "transition-[border-color,box-shadow] duration-150 hover:border-graphite " +
  "focus:border-ink focus:outline-none focus:ring-2 focus:ring-ink/15 " +
  "aria-[invalid=true]:border-danger aria-[invalid=true]:ring-danger/15";

export const labelCls = "mb-2 block text-small font-semibold text-ink";
