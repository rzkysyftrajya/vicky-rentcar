// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // ✅ pastikan strict mode aktif (recommended by Next.js)
  reactStrictMode: true,

  // ✅ optimize untuk produksi
  swcMinify: true,

  typescript: {
    ignoreBuildErrors: true, // ⚠️ kalau bisa hindari di production
  },
  eslint: {
    ignoreDuringBuilds: true, // ⚠️ sama, sebaiknya fix error instead of ignore
  },

  images: {
    formats: ["image/avif", "image/webp"], // ✅ lebih optimal
    remotePatterns: [
      {
        protocol: "https",
        hostname: "placehold.co",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },

  // ✅ redirect/rewrites kalau lo mau bikin shortlink SEO
  async redirects() {
    return [
      {
        source: "/galeri",
        destination: "/gallery",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
