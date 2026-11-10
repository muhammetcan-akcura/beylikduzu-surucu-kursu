import { ImageResponse } from "next/og";
import { BRAND_HEX } from "@/components/brand/mark";
import { OgMark } from "@/components/brand/og";

/** iOS ana ekran ikonu. iOS köşeleri kendisi yuvarlar → tam dolu asfalt zemin + ortada sarı levha. */
export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", background: BRAND_HEX.ink }}>
        <OgMark height={116} />
      </div>
    ),
    size,
  );
}
