/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || "https://vickyrentcarnusantara.com",
  generateRobotsTxt: true,
  sitemapSize: 5000,
  changefreq: "weekly",
  priority: 0.7,
  exclude: [
    "/_not-found",
    "/privacy",
    "/terms",
    "/server-sitemap.xml", // kalau lo generate dynamic sitemap
  ],

  transform: async (config, path) => {
    let priority = 0.7;
    let changefreq = "weekly";

    if (path === "/") {
      priority = 1.0;
      changefreq = "daily";
    }

    if (path.startsWith("/blog")) {
      priority = 0.8;
      changefreq = "daily";
    }

    if (
      path.startsWith("/fleet") ||
      path.startsWith("/rental") ||
      path.startsWith("/sewa")
    ) {
      priority = 0.9;
      changefreq = "daily";
    }

    if (
      path === "/about" ||
      path === "/contact" ||
      path === "/faq" ||
      path === "/services" ||
      path === "/gallery" ||
      path === "/testimonials"
    ) {
      priority = 0.6;
      changefreq = "monthly";
    }

    return {
      loc: path,
      changefreq,
      priority,
      lastmod: new Date().toISOString(),
    };
  },

  robotsTxtOptions: {
    policies: [
      { userAgent: "*", allow: "/" },
      {
        userAgent: "*",
        disallow: [
          "/api/",
          "/admin/",
          "/_next/",
          "/404",
          "/cdn-cgi/",
          "/*.json$",
          "/*.txt$",
        ],
      },
    ],
    additionalSitemaps: [
      "https://vickyrentcarnusantara.com/sitemap.xml",
      "https://vickyrentcarnusantara.com/server-sitemap.xml", // kalau lo generate SSR sitemap
    ],
  },
};
