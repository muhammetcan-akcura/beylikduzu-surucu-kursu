import { Fragment } from "react";

const VERIFY = /(\[DOĞRULA[^\]]*\])/g;

/**
 * Düz metni render eder; içindeki `[DOĞRULA: ...]` işaretlerini görünür bir etikete çevirir.
 * Demo süresince doğrulanmamış bilgiler sitede açıkça fark edilir.
 */
export function RichText({ text }: { text: string }) {
  const parts = text.split(VERIFY);
  return (
    <>
      {parts.map((part, i) =>
        part.startsWith("[DOĞRULA") ? (
          <span key={i} className="verify" title="Bu bilgi yayından önce doğrulanmalı">
            {part.slice(1, -1)}
          </span>
        ) : (
          <Fragment key={i}>{part}</Fragment>
        ),
      )}
    </>
  );
}

/** Schema / meta gibi düz metin alanları için işaretleri temizler */
export const stripVerify = (text: string) => text.replace(VERIFY, "").replace(/\s{2,}/g, " ").trim();
