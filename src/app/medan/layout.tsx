import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/layout/ThemeProvider";
import Header from "@/components/medan/Header";
import Footer from "@/components/medan/Footer";
import { AppContextProvider } from "../context/AppContext";
import Script from "next/script";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

/**
 * Get the canonical hostname for Medan domain
 * This ensures proper SEO canonical URLs regardless of how users access the site
 */
function getMedanCanonicalHost(hostname: string): string {
  // Normalize hostname: remove www. prefix for consistency
  if (hostname.startsWith("www.")) {
    return hostname.replace("www.", "");
  }
  return hostname;
}

/**
 * Get the base URL for the current request
 */
function getBaseUrl(hostname: string): string {
  const canonicalHost = getMedanCanonicalHost(hostname);
  return `https://${canonicalHost}`;
}

interface MetadataProps {
  children: React.ReactNode;
  params: {
    hostname?: string;
  };
}

export async function generateMetadata({
  params,
}: {
  params: { hostname?: string };
}): Promise<Metadata> {
  // Get hostname from params or use default
  const hostname = params?.hostname || "pt.vrnrentcarmedan.com";
  const baseUrl = getBaseUrl(hostname);

  return {
    metadataBase: new URL(baseUrl),
    title: {
      default:
        "VRN Rent Car Medan - Rental Mobil VIP & Luxury | Antar Jemput Bandara Kualanamu",
      template: "%s | VRN Rent Car Medan",
    },
    description:
      "VRN Rent Car Medan - Rental mobil terpercaya dengan layanan VIP & luxury. Alphard, Mercedes, Fortuner. Antar jemput Bandara Kualanamu, sopir profesional, armada terawat. Bagian dari Vicky Rent Car Nusantara.",
    keywords: [
      "rental mobil medan",
      "sewa mobil medan",
      "vrn rent car medan",
      "rental mobil vip medan",
      "sewa alphard medan",
      "rental mercedes medan",
      "rental mobil luxury medan",
      "antar jemput bandara kualanamu",
      "sewa mobil harian medan",
      "rental mobil bulanan medan",
    ],
    verification: {
      google: "0e7tdpsZeFHt20H7FDiaoWypuVlVHKnJ7PGYqalg-6c",
    },
    alternates: {
      canonical: baseUrl,
    },
    openGraph: {
      title:
        "VRN Rent Car Medan - Rental Mobil VIP & Luxury | Antar Jemput Bandara",
      description:
        "VRN Rent Car Medan - Sewa mobil VIP & luxury untuk bisnis, wedding, dan perjalanan eksklusif. Layanan premium dengan armada Alphard, Mercedes, dan kendaraan mewah lainnya.",
      type: "website",
      url: baseUrl,
      locale: "id_ID",
      siteName: "VRN Rent Car Medan",
      images: [
        {
          url: `${baseUrl}/medan/hero-section.webp`,
          width: 1200,
          height: 630,
          alt: "VRN Rent Car Medan - Rental Mobil VIP & Luxury",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "VRN Rent Car Medan - Rental Mobil VIP & Luxury",
      description:
        "VRN Rent Car Medan - Sewa mobil VIP & luxury terpercaya di Medan dengan layanan premium.",
      images: [`${baseUrl}/medan/hero-section.webp`],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}

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

interface MedanLayoutProps {
  children: React.ReactNode;
}

export default function MedanLayout({ children }: MedanLayoutProps) {
  return (
    <html lang="id" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" type="image/png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#2563eb" />

        {/* Script to remove browser extension injected attributes BEFORE React hydrates */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                var observer = new MutationObserver(function(mutations) {
                  mutations.forEach(function(mutation) {
                    if (mutation.type === 'attributes' && mutation.attributeName) {
                      var attr = mutation.attributeName;
                      if (attr.includes('bis_') || attr.includes('skin_checked')) {
                        mutation.target.removeAttribute(attr);
                      }
                    }
                  });
                });

                function cleanElement(el) {
                  try {
                    var attrs = el.attributes;
                    for (var i = attrs.length - 1; i >= 0; i--) {
                      var attr = attrs[i];
                      if (attr.name.includes('bis_') || attr.name.includes('skin_checked')) {
                        el.removeAttribute(attr.name);
                      }
                    }
                  } catch(e) {}
                }

                function scanAndClean() {
                  try {
                    var all = document.querySelectorAll('*');
                    for (var i = 0; i < all.length; i++) {
                      cleanElement(all[i]);
                    }
                  } catch(e) {}
                }

                scanAndClean();

                if (document.body) {
                  observer.observe(document.body, {
                    childList: true,
                    subtree: true,
                    attributes: true,
                    attributeFilter: ['bis_skin_checked', 'data-bis-', 'bis-']
                  });
                }

                if (document.readyState === 'loading') {
                  document.addEventListener('DOMContentLoaded', function() {
                    scanAndClean();
                  });
                }
              })();
            `,
          }}
        />
      </head>
      <body
        suppressHydrationWarning
        className={cn(
          "min-h-screen bg-background font-sans antialiased overflow-x-hidden",
          inter.variable
        )}
        data-bis-skin-checked-ignore="true"
        data-extension-injected-ignore="true"
      >
        <AppContextProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <div className="flex flex-col w-full">
              {/* Medan-specific Header (replaces global Navbar) */}
              <Header />

              {/* Main content */}
              <main className="flex-grow">{children}</main>

              {/* Medan-specific Footer (replaces global Footer) */}
              <Footer />
            </div>
          </ThemeProvider>
        </AppContextProvider>

        {/* Service Worker registration */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if ('serviceWorker' in navigator) {
                window.addEventListener('load', function() {
                  navigator.serviceWorker.register('/service-worker.js')
                    .then(function(reg) {
                      console.log('Service Worker registered with scope:', reg.scope);
                    })
                    .catch(function(err) {
                      console.log('Service Worker registration failed:', err);
                    });
                });
              }
            `,
          }}
        />

        {/* Google Ads Tag (AW-11495200677) */}
        <Script
          id="google-ads-tag"
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=AW-11495200677"
        />
        <Script
          id="google-ads-config"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-11495200677');
          `,
          }}
        />

        {/* Structured Data for SEO */}
        <Script
          id="structured-data"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </body>
    </html>
  );
}
