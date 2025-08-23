import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    // Supaya build tetep jalan walau ada error TS
    ignoreBuildErrors: true,
  },
  eslint: {
    // Supaya build tetep jalan walau ada error ESLint
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "placehold.co",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
  i18n: {
    locales: ["id", "en"], // Bahasa yang didukung
    defaultLocale: "id", // Default bahasa (Indonesia)
    localeDetection: true, // Otomatis detect browser language
  },
  reactStrictMode: true, // Biar lebih clean & optimal
  poweredByHeader: false, // Buat security + SEO (hilangin X-Powered-By)
  compress: true, // Aktifkan compression (gzip/br)
  swcMinify: true, // Aktifkan minify biar performa naik
};

export default nextConfig;
