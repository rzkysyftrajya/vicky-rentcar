const siteUrl = "https://www.vickyrentcar.com"; // Ganti dengan URL produksi Anda

module.exports = {
  siteUrl,
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      { userAgent: "*", allow: "/" },
      // Anda bisa menambahkan aturan disallow di sini jika perlu
      // { userAgent: 'Googlebot', disallow: ['/private'] },
    ],
    additionalSitemaps: [
      `${siteUrl}/server-sitemap.xml`, // Jika Anda menggunakan sitemap server-side
    ],
  },
  // Opsi untuk mengecualikan halaman tertentu
  exclude: [
    "/server-sitemap.xml", // Sitemap server-side dikecualikan agar tidak diduplikasi
    "/404",
    "/[city]", // Mengecualikan halaman dinamis generik jika tidak ingin diindeks
  ],
  // Fungsi untuk menghasilkan URL dinamis, contohnya dari folder 'pages'
  // Jika menggunakan App Router (Next.js 13+), konfigurasinya sedikit berbeda
  // dan mungkin perlu penyesuaian.
  // Untuk App Router, seringkali lebih baik mengandalkan generateStaticParams
  // dan sitemap server-side.

  // Contoh jika Anda masih ingin menambahkan URL secara manual:
  // pages: [
  //   '/about',
  //   '/contact',
  //   // ...halaman statis lainnya
  // ],

  // Jika Anda memiliki halaman dinamis yang TIDAK dibuat dengan getStaticPaths
  // Anda mungkin perlu menambahkannya secara manual atau menggunakan
  // sumber data eksternal.
};