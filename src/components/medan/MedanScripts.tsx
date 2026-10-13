"use client";

import Script from "next/script";

export default function MedanScripts() {
  return (
    <>
      {/* Google Tag Manager */}
      <Script
        id="google-tag-manager-medan"
        strategy="afterInteractive"
      >
        {`
          (function(w,d,s,l,i){
            w[l] = w[l] || [];
            w[l].push({
              'gtm.start': new Date().getTime(),
              event: 'gtm.js'
            });

            var f = d.getElementsByTagName(s)[0];
            var j = d.createElement(s);
            var dl = l !== 'dataLayer' ? '&l=' + l : '';

            j.async = true;
            j.src =
              'https://www.googletagmanager.com/gtm.js?id=' +
              i + dl;

            f.parentNode.insertBefore(j, f);
          })(window,document,'script','dataLayer','GTM-PL8H5WK');
        `}
      </Script>

      {/* Tracking seluruh link WhatsApp pada halaman Medan */}
      <Script
        id="whatsapp-tracking-medan"
        strategy="afterInteractive"
      >
        {`
          (function () {
            "use strict";

            if (window.__medanWhatsAppTrackingInstalled) {
              return;
            }

            window.__medanWhatsAppTrackingInstalled = true;

            var lastWhatsAppConversion = 0;

            function isWhatsAppLink(link) {
              try {
                var url = new URL(link.href, window.location.href);
                var hostname = url.hostname.toLowerCase();

                return (
                  url.protocol === "whatsapp:" ||
                  hostname === "wa.me" ||
                  hostname === "api.whatsapp.com" ||
                  hostname === "web.whatsapp.com" ||
                  hostname === "wa.link"
                );
              } catch (error) {
                return false;
              }
            }

            function handleWhatsAppClick(event) {
              var target =
                event.target instanceof Element
                  ? event.target
                  : null;

              if (!target) return;

              var link = target.closest("a[href]");

              if (!link || !isWhatsAppLink(link)) {
                return;
              }

              var now = Date.now();

              // Membatasi klik berulang dalam dua detik.
              if (now - lastWhatsAppConversion < 2000) {
                return;
              }

              try {
                window.dataLayer = window.dataLayer || [];

                // Antrekan event jika Google tag belum selesai dimuat.
                if (typeof window.gtag !== "function") {
                  window.gtag = function () {
                    window.dataLayer.push(arguments);
                  };
                }

                window.gtag("event", "conversion", {
                  send_to: "AW-11495200677/14zmCIOu0psdEKWvq-kq"
                });

                lastWhatsAppConversion = now;
              } catch (error) {
                console.error(
                  "Medan WhatsApp conversion tracking error:",
                  error
                );
              }
            }

            document.addEventListener(
              "click",
              handleWhatsAppClick,
              true
            );
          })();
        `}
      </Script>

      {/* GTM fallback */}
      <noscript>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-PL8H5WK"
          height="0"
          width="0"
          style={{
            display: "none",
            visibility: "hidden",
          }}
          title="Google Tag Manager"
        />
      </noscript>
    </>
  );
}
