import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  distDir: process.env.NODE_ENV === "development" ? ".next-dev" : ".next",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "vickyrentcarnusantara.com",
      },
      {
        protocol: "https",
        hostname: "pt.vrnrentcarmedan.com",
      },
      {
        protocol: "https",
        hostname: "www.pt.vrnrentcarmedan.com",
      },
      {
        protocol: "https",
        hostname: "www.vickyrentcarnusantara.com",
      },
      {
        protocol: "https",
        hostname: "localhost",
      },
    ],
    // Optimize images for performance
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  // Optimize framer-motion for Turbopack - fixed configuration
  experimental: {
    optimizePackageImports: ["framer-motion", "@radix-ui/react-*"],
  },
  // Ensure proper module resolution for framer-motion
  transpilePackages: ["framer-motion"],
  // Enable compression
  compress: true,
  // Power telemetry
  poweredByHeader: false,
  // trailingSlash for cleaner URLs
  trailingSlash: true,
  // Redirects (use sparingly, prefer rewrites)
  async redirects() {
    return [
      {
        source: "/bandung",
        destination: "/sewa-mobil-bandung",
        permanent: true,
      },
    ];
  },

  // Host-based rewrites for multi-domain routing
  // pt.vrnrentcarmedan.com → /medan/*
  async rewrites() {
    return [
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "pt.vrnrentcarmedan.com",
          },
        ],
        destination: "/medan/:path*",
      },
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "www.pt.vrnrentcarmedan.com",
          },
        ],
        destination: "/medan/:path*",
      },
    ];
  },
  // Note: Host-based rewrites are handled in middleware.ts
  // for better performance and cleaner architecture
};

export default nextConfig;
