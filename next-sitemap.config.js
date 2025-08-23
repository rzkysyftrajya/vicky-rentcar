/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || "https://vickyrentcarnusantara.com",
  generateRobotsTxt: true,
  sitemapSize: 5000,
  changefreq: "weekly",
  priority: 0.7,
  exclude: ["/_not-found", "/privacy", "/terms"],

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
      path === "/services"
    ) {
      priority = 0.6;
      changefreq = "monthly";
    }

    // Generate hreflang untuk ID & EN
    const hreflangs = [
      { hrefLang: "id", href: `https://vickyrentcarnusantara.com/id${path}` },
      { hrefLang: "en", href: `https://vickyrentcarnusantara.com/en${path}` },
    ];

    return {
      loc: path,
      changefreq,
      priority,
      lastmod: new Date().toISOString(),
      alternateRefs: hreflangs,
    };
  },

  robotsTxtOptions: {
    policies: [
      { userAgent: "*", allow: "/" },
      { userAgent: "*", disallow: ["/api/", "/admin/", "/_next/", "/404"] },
    ],
    additionalSitemaps: ["https://vickyrentcarnusantara.com/sitemap.xml"],
  },
};
