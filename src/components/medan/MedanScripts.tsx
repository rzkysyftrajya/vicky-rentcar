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
      {/* Google Tag Manager (GTM) - Primary tracking container */}
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

      {/* Google Ads Conversion Tracking for Medan - AW-11495200677 */}
      {/* Note: AW-17510183879 is loaded globally in layout.tsx */}
      <Script
        id="google-ads-medan-conversion"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            
            // Medan-specific conversion tracking (AW-11495200677)
            // Uses conversion_label for proper Tag Assistant identification
            gtag('js', new Date());
            gtag('config', 'AW-11495200677', {
              'phone_conversion_number': '+6282363389893',
              'phone_conversion_label': 'PhoneCallConversion'
            });
          `,
        }}
      />

      {/* WhatsApp & Phone Click Conversion Tracking with event_callback */}
      <Script
        id="whatsapp-tracking-medan"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function() {
              'use strict';
              
              // WhatsApp click handler with event_callback for guaranteed delivery
              function handleWhatsAppClick(e) {
                var link = e.target.closest('a[href*="wa.me"]');
                if (!link) return;
                
                e.preventDefault();
                e.stopPropagation();
                
                var waUrl = link.href;
                var timestamp = Date.now();
                
                if (typeof gtag === 'function') {
                  gtag('event', 'conversion', {
                    'send_to': 'AW-11495200677/WhatsAppConversion',
                    'value': 1.0,
                    'currency': 'IDR',
                    'transaction_id': 'WA_' + timestamp,
                    'event_callback': function() {
                      // Guaranteed callback after conversion confirmed
                      window.open(waUrl, '_blank');
                    }
                  });
                }
                
                // Fallback: if gtag fails to callback within 500ms, still open WhatsApp
                setTimeout(function() {
                  if (document.hidden === false && !e.defaultPrevented) {
                    window.open(waUrl, '_blank');
                  }
                }, 500);
              }
              
              // Phone click handler (immediate call, conversion fires async)
              function handlePhoneClick(e) {
                var link = e.target.closest('a[href^="tel:"]');
                if (!link) return;
                
                if (typeof gtag === 'function') {
                  gtag('event', 'conversion', {
                    'send_to': 'AW-11495200677/PhoneCallConversion',
                    'value': 1.0,
                    'currency': 'IDR',
                    'transaction_id': 'PHONE_' + Date.now()
                  });
                }
                // Allow immediate phone call navigation
              }
              
              // Capture phase intercepts BEFORE default navigation
              document.addEventListener('click', handleWhatsAppClick, { capture: true });
              document.addEventListener('click', handlePhoneClick, { capture: true });
            })();
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
