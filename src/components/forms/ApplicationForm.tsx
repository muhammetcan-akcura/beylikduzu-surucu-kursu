"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useActionState, useEffect, useRef, useState } from "react";
import { Icon } from "@/components/ui/Icon";
import { submitApplication } from "./actions";
import { classOptions, initialFormState, fieldCls, labelCls, type FieldName } from "./form-schema";
import { track } from "@/lib/analytics";
import { buttonClass, ButtonInner } from "@/components/ui/Button";

function FieldError({ id, message }: { id: string; message?: string }) {
  if (!message) return null;
  return (
    <p id={id} className="mt-2 flex items-start gap-1.5 text-small text-danger">
      <Icon name="alert" className="mt-0.5 size-4 shrink-0"/>
      {message}
    </p>
  );
}

export function ApplicationForm({ defaultClass, compact = false }: { defaultClass?: string; compact?: boolean }) {
  const [state, action, pending] = useActionState(submitApplication, initialFormState);
  const pathname = usePathname();
  const [startedAt, setStartedAt] = useState(0);
  const statusRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => setStartedAt(Date.now()), []);

  useEffect(() => {
    if (state.status === "success") {
      track("generate_lead", { form: "basvuru", location: pathname });
      formRef.current?.reset();
      statusRef.current?.focus();
    } else if (state.status === "error") {
      const firstInvalid = formRef.current?.querySelector<HTMLElement>("[aria-invalid=true]");
      (firstInvalid ?? statusRef.current)?.focus();
    }
  }, [state, pathname]);

  const err = (f: FieldName) => state.errors?.[f];
  const a11y = (f: FieldName) =>
    err(f) ? { "aria-invalid": true as const, "aria-describedby": `${f}-error` } : { "aria-invalid": false as const };

  if (state.status === "success") {
    return (
      <div
        ref={statusRef}
        tabIndex={-1}
        role="status"
        className="rounded-hairline border border-success/30 bg-success-surface p-6 text-ink outline-none sm:p-8"
      >
        <Icon name="check-circle" className="size-7 text-success"/>
        <p className="mt-4 font-display text-h3">Başvurunuz alındı</p>
        <p className="mt-2 text-graphite">{state.message}</p>
      </div>
    );
  }

  return (
    <form ref={formRef} action={action} noValidate className="space-y-5" aria-describedby="form-note">
      <div ref={statusRef} tabIndex={-1} aria-live="polite" className="outline-none">
        {state.status === "error" && state.message && (
          <p role="alert" className="flex items-start gap-2 rounded-field bg-danger-surface px-4 py-3 text-small text-danger">
            <Icon name="alert" className="mt-0.5 size-4 shrink-0"/>
            {state.message}
          </p>
        )}
      </div>

      <div className={compact ? "space-y-5" : "grid gap-5 sm:grid-cols-2"}>
        <div>
          <label htmlFor="name" className={labelCls}>
            Ad soyad
          </label>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            required
            maxLength={80}
            defaultValue={state.values?.name}
            className={`${fieldCls} h-13`}
            {...a11y("name")}
          />
          <FieldError id="name-error" message={err("name")} />
        </div>

        <div>
          <label htmlFor="phone" className={labelCls}>
            Telefon
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            inputMode="tel"
            autoComplete="tel-national"
            placeholder="05XX XXX XX XX"
            required
            maxLength={20}
            defaultValue={state.values?.phone}
            className={`${fieldCls} h-13 tabular-nums`}
            {...a11y("phone")}
          />
          <FieldError id="phone-error" message={err("phone")} />
        </div>
      </div>

      <div>
        <label htmlFor="licenseClass" className={labelCls}>
          İlgilendiğiniz ehliyet sınıfı
        </label>
        <div className="relative">
          <select
            id="licenseClass"
            name="licenseClass"
            required
            defaultValue={state.values?.licenseClass ?? defaultClass ?? ""}
            className={`${fieldCls} h-13 cursor-pointer appearance-none pr-10`}
            {...a11y("licenseClass")}
          >
            <option value="" disabled>
              Seçin
            </option>
            {classOptions.map((o) => (
              <option key={o.value} value={o.value}>
                {o.label}
              </option>
            ))}
          </select>
          <svg aria-hidden="true" viewBox="0 0 20 20" className="pointer-events-none absolute top-1/2 right-4 size-4 -translate-y-1/2 text-graphite">
            <path d="M5 7.5l5 5 5-5" fill="none" stroke="currentColor" strokeWidth="1.75" />
          </svg>
        </div>
        <FieldError id="licenseClass-error" message={err("licenseClass")} />
      </div>

      <div>
        <label htmlFor="message" className={labelCls}>
          Mesajınız <span className="font-normal text-muted">(isteğe bağlı)</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={compact ? 3 : 4}
          maxLength={1000}
          defaultValue={state.values?.message}
          placeholder="Örn. hafta sonu ders saatleri, otomatik vites…"
          className={`${fieldCls} resize-y py-3`}
          {...a11y("message")}
        />
        <FieldError id="message-error" message={err("message")} />
      </div>

      {/* Honeypot: insanlar görmez, botlar doldurur */}
      <div aria-hidden="true" className="absolute -left-[9999px] h-px w-px overflow-hidden">
        <label htmlFor="website">Web siteniz</label>
        <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>
      <input type="hidden" name="startedAt" value={startedAt} />
      <input type="hidden" name="sourcePath" value={pathname} />

      <div>
        <label className="flex cursor-pointer items-start gap-3">
          <input
            type="checkbox"
            name="kvkk"
            required
            className="mt-0.5 size-5 shrink-0 cursor-pointer rounded-[3px] accent-ink"
            {...a11y("kvkk")}
          />
          <span className="text-small text-graphite">
            <Link href="/kvkk-aydinlatma-metni" target="_blank" className="font-semibold text-ink underline underline-offset-4">
              KVKK Aydınlatma Metni
            </Link>
            &apos;ni okudum.
          </span>
        </label>
        <FieldError id="kvkk-error" message={err("kvkk")} />
      </div>

      <div className="flex flex-col gap-3 pt-1 sm:flex-row sm:items-center sm:justify-between">
        <button type="submit" disabled={pending} className={buttonClass("primary", "lg", "w-full sm:w-auto")}>
          <ButtonInner size="lg" icon={pending ? <Icon name="loader" className="size-5 icon-spin" /> : "phone"} arrow={!pending}>
            {pending ? "Gönderiliyor" : "Beni arayın"}
          </ButtonInner>
        </button>
        <p id="form-note" className="text-caption text-muted">
          Yalnızca sizi aramak için kullanılır.
        </p>
      </div>
    </form>
  );
}
