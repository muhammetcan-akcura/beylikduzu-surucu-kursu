import { Icon } from "@/components/ui/Icon";

/**
 * Alt çizgili metin + ok (satır içi link etiketleri: mobil menü, hero).
 * Son kelime ile ok birlikte kırılır, ok tek başına alt satıra düşmez.
 * Linkin kendisi `inline-block` ve geniş satır yüksekliği (`leading-[1.9]`) almalı:
 * yoksa metin iki satıra düşünce üst satırın alt çizgisi alt satırın üstüne biner.
 */
export function InlineArrowLabel({
  text,
  lineClass,
  icon = "arrow-right",
}: {
  text: string;
  lineClass: string;
  icon?: "arrow-right" | "arrow-down";
}) {
  const words = text.split(" ");
  const last = words.pop();
  const u = `underline underline-offset-[5px] ${lineClass}`;
  // Tek alt çizgili kutu (kelimeler arasında ek yeri olmasın); ok inline-block olduğu için çizgi almaz.
  return (
    <span className={u}>
      {words.length > 0 && `${words.join(" ")} `}
      <span className="whitespace-nowrap">
        {last}
        <Icon name={icon} className="ml-2 inline-block size-4 align-[-3px]" />
      </span>
    </span>
  );
}
