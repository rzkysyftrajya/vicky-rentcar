"use client";

import Script from "next/script";

const structuredData = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "VRN Rent Car Medan",
  url: "https://pt.vrnrentcarmedan.com",
  logo: "https://pt.vrnrentcarmedan.com/logoVRN.png",
  image: "https://pt.vrnrentcarmedan.com/medan/hero-section.webp",
  description:
    "Layanan rental mobil VIP & luxury di Medan. Menyediakan Alphard, Mercedes, Fortuner untuk wedding, korporat, dan perjalanan istimewa.",
  telephone: "+6282363389893",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Jl. Sempurna Gg. Mawar No.12 dusun II",
    addressLocality: "Medan Tembung",
    addressRegion: "Sumatera Utara",
    postalCode: "20371",
    addressCountry: "ID",
  },
  priceRange: "$$",
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
  acceptsReservations: "True",
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
      {/* Google Tag Manager (GTM) for Medan-specific tracking */}
      <Script
        id="google-tag-manager-medan"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function(w,d,s,l,i){
              w[l]=w[l]||[];w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});
              var f=d.getElementsByTagName(s)[0], j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
              j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
              f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-PL8H5WK');
          `,
        }}
      />

      {/* Google Ads Tag (AW-11495200677) for Medan */}
      <Script
        id="google-ads-tag-medan"
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=AW-11495200677"
      />
      <Script
        id="google-ads-config-medan"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            // GA4 Configuration for Medan
            gtag('config', 'G-XXXXXXXXXX');
            // Google Ads Conversion Tracking for Medan
            gtag('config', 'AW-11495200677', {
              'phone_conversion_number': '+6282363389893',
              'phone_conversion_label': 'PhoneCallConversion',
              'whatsapp_conversion_label': 'WhatsAppConversion'
            });
            // Enhanced conversions
            gtag('set', 'user_data', {
              'email': null,
              'phone_number': null
            });
          `,
        }}
      />

      {/* WhatsApp Click Conversion Tracking */}
      <Script
        id="whatsapp-tracking-medan"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            document.addEventListener('DOMContentLoaded', function() {
              var whatsappLinks = document.querySelectorAll('a[href*="wa.me"]');
              whatsappLinks.forEach(function(link) {
                link.addEventListener('click', function() {
                  if (typeof gtag !== 'undefined') {
                    gtag('event', 'conversion', {
                      'send_to': 'AW-11495200677/WhatsAppConversion',
                      'value': 1.0,
                      'currency': 'IDR',
                      'transaction_id': 'WA_' + Date.now()
                    });
                  }
                });
              });

              var phoneLinks = document.querySelectorAll('a[href^="tel:"]');
              phoneLinks.forEach(function(link) {
                link.addEventListener('click', function() {
                  if (typeof gtag !== 'undefined') {
                    gtag('event', 'conversion', {
                      'send_to': 'AW-11495200677/PhoneCallConversion',
                      'value': 1.0,
                      'currency': 'IDR',
                      'transaction_id': 'PHONE_' + Date.now()
                    });
                  }
                });
              });
            });
          `,
        }}
      />

      {/* Structured Data for SEO */}
      <Script
        id="structured-data-medan"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* Google Tag Manager Noscript */}
      <noscript>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-PL8H5WK"
          height="0"
          width="0"
          style={{ display: "none", visibility: "hidden" }}
        />
      </noscript>
    </>
  );
}
