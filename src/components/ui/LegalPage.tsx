import type { ReactNode } from "react";
import { PageIntro } from "./Typography";

export function LegalPage({
  title,
  path,
  updated,
  children,
}: {
  title: string;
  path: string;
  updated: string;
  children: ReactNode;
}) {
  return (
    <>
      <PageIntro
        eyebrow="Yasal"
        title={title}
        breadcrumbs={[
          { name: "Ana sayfa", path: "/" },
          { name: title, path },
        ]}
      />
      <div className="container-site pt-section-sm pb-section-md">
        <div className="max-w-prose">
          <p role="note" className="rounded-field border border-dashed border-accent-ink bg-accent/10 px-4 py-3 text-small text-accent-ink">
            <strong>Taslak metin:</strong> Bu metin hukukçu tarafından kontrol edilmelidir. Yayından önce veri sorumlusu
            bilgileri, saklama süreleri ve aktarım tarafları işletmeye göre güncellenmelidir.
          </p>
          <p className="mt-6 text-caption text-muted">Son güncelleme: {updated}</p>
          <div className="prose-legal mt-2">{children}</div>
        </div>
      </div>
    </>
  );
}
