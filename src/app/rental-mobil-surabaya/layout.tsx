import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import { ThemeProvider } from "@/components/layout/ThemeProvider";
import Navbar from "@/components/surabaya/Navbar";
import { AppContextProvider } from "../context/AppContext";
import Script from "next/script";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Rental Mobil Surabaya - Sewa Mobil Harian & Bulanan | VRN",
  description:
    "Sewa mobil Surabaya terpercaya. Armada terawat, driver profesional, harga transparan.",
};

export default function RentalMobilSurabayaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* 1. Master Google Tag Baru (AW-17510183879) */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=AW-17510183879"
        strategy="afterInteractive"
      />
      <Script id="google-analytics-surabaya" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'AW-17510183879');
        `}
      </Script>

      {/* 2. Event Snippet Fungsi tracking konversi Kontak dari Google Ads */}
      <Script id="google-ads-conversion-contact" strategy="afterInteractive">
        {`
          function gtag_report_conversion(url) {
            var callback = function () {
              if (typeof(url) != 'undefined') {
                window.location = url;
              }
            };
            if (typeof gtag === 'function') {
              gtag('event', 'conversion', {
                'send_to': 'AW-17510183879/ywTVCJjzp44bEMfnwJ1B',
                'event_callback': callback
              });
            } else {
              callback();
            }
            return false;
          }
          window.gtag_report_conversion = gtag_report_conversion;
        `}
      </Script>

      {/* Konversi klik WhatsApp khusus halaman Surabaya — AW-17510183879/wj1kCPmgo4gdEMfnwJ1B */}
      <Script id="google-ads-wa-click-surabaya" strategy="afterInteractive">
        {`
          (function () {
            // Guard: pastikan listener hanya dipasang sekali
            if (window.__vrnSbyWaListenerAttached) return;
            window.__vrnSbyWaListenerAttached = true;

            function trackSurabayaWhatsAppConversion() {
              if (typeof gtag === 'function') {
                gtag('event', 'conversion', {
                  send_to: 'AW-17510183879/wj1kCPmgo4gdEMfnwJ1B'
                });
              }
            }

            function createWhatsAppEventId() {
              if (window.crypto && typeof window.crypto.randomUUID === 'function') {
                return window.crypto.randomUUID();
              }
              var bytes = new Uint8Array(16);
              if (window.crypto && typeof window.crypto.getRandomValues === 'function') {
                window.crypto.getRandomValues(bytes);
              } else {
                for (var i = 0; i < bytes.length; i++) {
                  bytes[i] = Math.floor(Math.random() * 256);
                }
              }
              bytes[6] = (bytes[6] & 15) | 64;
              bytes[8] = (bytes[8] & 63) | 128;
              var hex = Array.prototype.map.call(bytes, function (byte) {
                return ('0' + byte.toString(16)).slice(-2);
              }).join('');
              return hex.slice(0, 8) + '-' + hex.slice(8, 12) + '-' +
                hex.slice(12, 16) + '-' + hex.slice(16, 20) + '-' + hex.slice(20);
            }

            function captureSurabayaWhatsAppClick(el) {
              var params = new URLSearchParams(window.location.search);
              var data = {
                eventType: 'WHATSAPP_CLICK',
                eventId: createWhatsAppEventId(),
                timestamp: new Date().toISOString(),
                page: window.location.pathname
              };
              ['gclid', 'gbraid', 'wbraid'].forEach(function (key) {
                var value = params.get(key);
                if (value) data[key] = value;
              });

              var utm = {};
              params.forEach(function (value, key) {
                if (key.indexOf('utm_') === 0 && Object.keys(utm).length < 10) {
                  utm[key] = value.slice(0, 200);
                }
              });
              if (Object.keys(utm).length) data.utm = utm;

              var carCard = el.closest('[data-car-name], [data-vehicle], article');
              if (carCard) {
                var carName = carCard.getAttribute('data-car-name') ||
                  carCard.getAttribute('data-vehicle');
                if (!carName) {
                  var heading = carCard.querySelector('h2, h3, h4');
                  if (heading) carName = heading.textContent;
                }
                if (carName && carName.trim()) data.car = carName.trim().slice(0, 200);
              }

              var payload = JSON.stringify(data);
              var queued = false;
              if (navigator.sendBeacon) {
                try {
                  queued = navigator.sendBeacon(
                    '/api/vrn-lead/',
                    new Blob([payload], { type: 'application/json' })
                  );
                } catch (_) {}
              }
              if (!queued) {
                fetch('/api/vrn-lead/', {
                  method: 'POST',
                  headers: { 'Content-Type': 'application/json' },
                  body: payload,
                  keepalive: true
                }).catch(function () {});
              }
            }

            document.addEventListener('click', function (e) {
              var el = e.target && e.target.closest('a[href*="wa.me"]');
              if (!el) return;

              try {
                captureSurabayaWhatsAppClick(el);
              } catch (error) {
                console.error('VRN WhatsApp click capture could not be queued.', error);
              }

              // Guard: satu klik hanya kirim satu konversi (debounce 1 detik)
              if (el.__vrnSbyWaFired) return;
              el.__vrnSbyWaFired = true;
              setTimeout(function () { el.__vrnSbyWaFired = false; }, 1000);
              trackSurabayaWhatsAppConversion();
            }, true);
          })();
        `}
      </Script>

      <AppContextProvider>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {/* Menerapkan class font Inter agar sinkron dengan globals.css */}
          <div className={`${inter.variable} font-sans`}>
            <Navbar />
            <main>{children}</main>
          </div>
        </ThemeProvider>
      </AppContextProvider>
    </>
  );
}
