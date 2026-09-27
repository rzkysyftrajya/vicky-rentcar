"use client";

import Script from "next/script";

export default function BatamConversionTracking() {
  return (
    <Script
      id="batam-whatsapp-conversion"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: `
          (function () {
            if (window.__batamWhatsAppTrackingInstalled) return;
            window.__batamWhatsAppTrackingInstalled = true;

            var lastConversionTime = 0;

            document.addEventListener(
              "click",
              function (event) {
                var target =
                  event.target instanceof Element ? event.target : null;

                if (!target) return;

                var link = target.closest(
                  'a[href*="wa.me/"],' +
                  'a[href*="api.whatsapp.com/"],' +
                  'a[href*="web.whatsapp.com/"],' +
                  'a[href*="wa.link/"],' +
                  'a[href^="whatsapp://"]'
                );

                if (!link) return;

                var currentTime = Date.now();

                // Mencegah satu klik tercatat dua kali
                if (currentTime - lastConversionTime < 2000) return;
                lastConversionTime = currentTime;

                if (typeof window.gtag === "function") {
                  window.gtag("event", "conversion", {
                    send_to: "AW-17357105664/c6ZTCP-6iYcdEIDUwdRA",
                    value: 1,
                    currency: "IDR"
                  });
                }
              },
              true
            );
          })();
        `,
      }}
    />
  );
}
