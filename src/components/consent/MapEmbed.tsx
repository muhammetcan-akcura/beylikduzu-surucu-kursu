"use client";

import { buttonClass, ButtonInner } from "@/components/ui/Button";
import { useConsent } from "./ConsentProvider";

type Props = { src: string; title: string; address: string; directionsHref: string };

/**
 * Google Haritalar çerez bırakır → onaydan önce yalnızca statik bir yüzey gösterilir.
 * Yüzey sitenin yol diliyle çizilir: asfalt yollar, kesik orta çizgi, sarı güzergâh ve rozet içinde pin.
 * "Haritayı yükle" butonu harita iznini verir ve iframe'i yükler.
 */
export function MapEmbed({ src, title, address, directionsHref }: Props) {
  const { consent, ready, allowMaps } = useConsent();
  const allowed = ready && consent.maps;

  return (
    <div className="cut relative aspect-[4/3] w-full overflow-hidden bg-ink-2 [--cut:36px] sm:aspect-[16/10]">
      {allowed ? (
        <iframe
          src={src}
          title={title}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="absolute inset-0 size-full border-0"
          allowFullScreen
        />
      ) : (
        <div className="on-ink absolute inset-0 flex flex-col justify-between p-5 text-on-ink sm:p-8">
          {/* Statik, çerezsiz "harita": yollar + güzergâh */}
          <svg aria-hidden="true" viewBox="0 0 400 250" preserveAspectRatio="xMidYMid slice" className="absolute inset-0 size-full">
            <g fill="none" stroke="#14171C" strokeWidth="18">
              <path d="M-20 70 L420 40" />
              <path d="M90 -20 L130 270" />
              <path d="M300 -20 L270 270" />
              <path d="M-20 200 L420 175" />
            </g>
            <g fill="none" stroke="#A3ABB5" strokeOpacity=".45" strokeWidth="1.5" strokeDasharray="10 10">
              <path d="M-20 70 L420 40" />
              <path d="M90 -20 L130 270" />
              <path d="M300 -20 L270 270" />
              <path d="M-20 200 L420 175" />
            </g>
            <path d="M-20 200 L118 190 L104 62 L286 50 L281 128" fill="none" stroke="#F2C230" strokeWidth="6" />
            {/* Varış: asfalt rozet içinde sarı kare (logo/ikon dilindeki pin merkezi) */}
            <rect x="265" y="102" width="32" height="32" rx="5" fill="#14171C" stroke="#F2C230" strokeWidth="4" />
            <rect x="275" y="112" width="12" height="12" fill="#F2C230" />
          </svg>

          <p className="relative max-w-xs self-start rounded-control bg-ink/90 px-4 py-3 text-small font-medium">{address}</p>

          <div className="relative">
            <div className="flex flex-wrap gap-2">
              <button type="button" onClick={allowMaps} className={buttonClass("primary", "md", "")}>
                <ButtonInner variant="primary" icon="map-pin">
                  Haritayı yükle
                </ButtonInner>
              </button>
              <a
                href={directionsHref}
                target="_blank"
                rel="noopener noreferrer"
                data-track-location="map-placeholder"
                className={buttonClass("inverse", "md", "bg-ink/80")}
              >
                <ButtonInner variant="inverse">Yol tarifi al</ButtonInner>
              </a>
            </div>
            <p className="mt-3 max-w-sm text-caption text-on-ink-muted">
              Harita Google tarafından sunulur ve yüklendiğinde çerez bırakabilir.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
