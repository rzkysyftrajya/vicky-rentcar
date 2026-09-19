import { MetadataRoute } from "next";
import cities from "@/data/cities.json";

export async function GET(): Promise<Response> {
  const baseUrl = "https://vickyrentcarnusantara.com";

  // Ambil semua path dari cities.json
  const cityUrls = cities.map((city) => ({
    loc: `${baseUrl}/${city.slug}`,
    lastmod: new Date().toISOString(),
    changefreq: "weekly",
    priority: 0.9,
  }));

  // Bisa tambahin juga static pages utama
  const staticUrls = [
    {
      loc: `${baseUrl}/`,
      lastmod: new Date().toISOString(),
      changefreq: "daily",
      priority: 1.0,
    },
    {
      loc: `${baseUrl}/about`,
      lastmod: new Date().toISOString(),
      changefreq: "monthly",
      priority: 0.6,
    },
    {
      loc: `${baseUrl}/contact`,
      lastmod: new Date().toISOString(),
      changefreq: "monthly",
      priority: 0.6,
    },
  ];

  const urls = [...staticUrls, ...cityUrls];

  // Bangun XML response
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (url) => `<url>
  <loc>${url.loc}</loc>
  <lastmod>${url.lastmod}</lastmod>
  <changefreq>${url.changefreq}</changefreq>
  <priority>${url.priority}</priority>
</url>`
  )
  .join("\n")}
</urlset>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
