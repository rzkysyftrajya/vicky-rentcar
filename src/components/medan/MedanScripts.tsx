"use client";

import Script from "next/script";

const structuredData = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "VRN Rent Car Medan",
  url: "https://www.vickyrentcarnusantara.com/medan/",
  logo: "https://www.vickyrentcarnusantara.com/logoVRN.png",
  image:
    "https://www.vickyrentcarnusantara.com/medan/hero-section.webp",
  description:
    "Layanan rental mobil dan antar jemput di Medan untuk kebutuhan harian, keluarga, bisnis, dan perjalanan antar kota.",
  telephone: "+6282363389893",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Jl. Sempurna Gg. Mawar No.12 Dusun II",
    addressLocality: "Medan Tembung",
    addressRegion: "Sumatera Utara",
    postalCode: "20371",
    addressCountry: "ID",
  },
  hasMap: "https://maps.app.goo.gl/bXqcSpsHzM4TH6iHA",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "00:00",
      closes: "23:59",
    },
  ],
  acceptsReservations: true,
  serviceType: [
    "Car Rental",
    "Airport Transfer",
    "Luxury Car Rental",
    "Wedding Car Service",
  ],
  areaServed: {
    "@type": "City",
    name: "Medan",
  },
};

export default function MedanScripts() {
  return (
    <>
      {/* Google Tag Manager */}
      <Script
        id="google-tag-manager-medan"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function(w,d,s,l,i){
              w[l]=w[l]||[];
              w[l].push({
                'gtm.start': new Date().getTime(),
                event:'gtm.js'
              });

              var f=d.getElementsByTagName(s)[0],
                  j=d.createElement(s),
                  dl=l!='dataLayer'?'&l='+l:'';

              j.async=true;
              j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
              f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-PL8H5WK');
          `,
        }}
      />

      {/* Konversi klik WhatsApp Medan */}
      <Script
        id="whatsapp-tracking-medan"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function () {
              "use strict";

              if (window.__medanWhatsAppTrackingInstalled) {
                return;
              }

              window.__medanWhatsAppTrackingInstalled = true;

              var lastWhatsAppConversion = 0;

              function handleWhatsAppClick(event) {
                var target =
                  event.target instanceof Element
                    ? event.target
                    : null;

                if (!target) return;

                var link = target.closest(
                  'a[href*="wa.me/"],' +
                  'a[href*="api.whatsapp.com/"],' +
                  'a[href*="web.whatsapp.com/"],' +
                  'a[href*="wa.link/"],' +
                  'a[href^="whatsapp://"]'
                );

                if (!link) return;

                var now = Date.now();

                // Mencegah satu klik terkirim dua kali
                if (now - lastWhatsAppConversion < 2000) {
                  return;
                }

                lastWhatsAppConversion = now;

                if (typeof window.gtag === "function") {
                  window.gtag("event", "conversion", {
                    send_to:
                      "AW-11495200677/KgboCNuQ_IYdEKWvq-kq",
                    value: 1.0,
                    currency: "IDR"
                  });
                }
              }

              document.addEventListener(
                "click",
                handleWhatsAppClick,
                true
              );
            })();
          `,
        }}
      />

      {/* Structured Data SEO */}
      <Script
        id="structured-data-medan"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />

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
