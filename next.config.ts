import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  // Optimize framer-motion for Turbopack - fixed configuration
  experimental: {
    optimizePackageImports: ["framer-motion", "@radix-ui/react-*"],
  },
  // Ensure proper module resolution for framer-motion
  transpilePackages: ["framer-motion"],
  // Domain handling for vrnrentcarmedan.com rewrite
  async rewrites() {
    return [
      {
        source: "/(.*)",
        has: [
          {
            type: "host",
            value: "vrnrentcarmedan.com",
          },
        ],
        destination: "/medan",
      },
    ];
  },
};

export default nextConfig;
