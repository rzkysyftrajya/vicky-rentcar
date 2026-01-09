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
  // Domain handling for Medan domains rewrite
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
            value: "vrnrentcarmedan.com",
          },
        ],
        destination: "/medan/:path*",
      },
    ];
  },
};

export default nextConfig;
