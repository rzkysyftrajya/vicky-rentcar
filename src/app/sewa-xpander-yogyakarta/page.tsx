import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "Sewa Mobil Xpander Yogyakarta - Rental MPV Nyaman Keliling Jogja",
  description:
    "Jasa rental mobil Mitsubishi Xpander di Yogyakarta dengan harga terbaik. MPV nyaman dan stylish untuk keliling Jogja, Candi Borobudur, dan Prambanan. Lepas kunci atau dengan sopir.",
  keywords: [
    "sewa xpander yogyakarta",
    "rental xpander jogja",
    "sewa mobil di yogyakarta",
    "rental mobil jogja",
    "sewa mobil murah yogyakarta",
    "sewa mobil keluarga jogja",
  ],
  openGraph: {
    title: "Sewa Mobil Xpander Yogyakarta - Rental MPV Nyaman Keliling Jogja",
    description:
      "Jasa rental mobil Mitsubishi Xpander di Yogyakarta dengan harga terbaik. Nyaman dan stylish untuk keliling Jogja dan sekitarnya.",
  },
};

export default function Page() {
  return (
    <main>
      <section className="relative h-[60vh] flex items-center justify-center text-center text-white">
        <img
          src="https://asset.kompas.com/crops/tp7dCEi1zgzGJG-ZhoFOZwi2TGs=/0x0:972x648/1200x800/data/photo/2021/12/26/61c813b14760e.png"
          alt="Sewa Xpander Yogyakarta"
          className="absolute inset-0 w-full h-full object-cover z-0 opacity-80"
        />
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        <div className="relative z-20 p-6">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-wide mb-4 drop-shadow-md">
            Sewa Xpander Yogyakarta
          </h1>
          <p className="text-xl md:text-2xl font-light max-w-2xl mx-auto drop-shadow-sm">
            MPV Nyaman untuk Jelajahi Jogja dan Sekitarnya
          </p>
          <a
            href="https://wa.me/6282363389893"
            className="mt-8 inline-block bg-primary-600 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:bg-primary-700 transition-colors"
          >
            Pesan Sekarang
          </a>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Mengapa Mitsubishi Xpander Ideal untuk Wisata Jogja?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://storage.googleapis.com/gcmkscsp001/public/media-assets/dce2f6e9-be1d-4791-aa83-f9c1149c85a2/conversions/26my-xp-exterior-front-left-rhd-w81-f-optimized-optimized.webp?GoogleAccessId=bsidevops%40gp-prod-mmksi-web-01.iam.gserviceaccount.com&Expires=1756625944&Signature=i8cJkvp9%2F%2ByqAb9bUXj5V%2FT4FO81pvJwpix9UzBWArLa1a%2F2W%2BI41V%2Fpss1DQQhSVE%2BwUjblJFrufKRRe0tWFGR7t992w7XeWh4jjjQZa9t0vISGirgDrQdlIdrpLEZ0%2FLeGJqGRTzl2q28NEhgDOOtBaeevesNaeU5fWHOxY4Syuj2O2hPQSb%2BGwoRsDZFuY4zspoR%2FSIUuAe5Ado4brv3dExqajE6zd9EAF08LrrpgNAQefL%2FrbV%2Bi4ny8lLUfv0zEqvW34BeSQWCDgMlJwRmqp52aDj8l%2B6RUh2u3UZ4CPCx6ZzUQT4z3FYk8QqsxUZlAEFRfEXt52%2Fxb%2BrEygA%3D%3D"
                alt="Interior Mitsubishi Xpander"
                className="rounded-xl shadow-lg w-full h-auto"
              />
            </div>
            <div>
              <ul className="list-disc list-inside space-y-4 text-muted-foreground">
                <li>
                  <strong className="text-primary-600">
                    Kabin Luas & Nyaman:
                  </strong>{" "}
                  Muat hingga 7 penumpang dengan ruang bagasi yang cukup untuk
                  barang bawaan Anda.
                </li>
                <li>
                  <strong className="text-primary-600">Handling Lincah:</strong>{" "}
                  Suspensi stabil dan lincah untuk melewati jalanan kota maupun
                  pedesaan.
                </li>
                <li>
                  <strong className="text-primary-600">Desain Modern:</strong>{" "}
                  Tampilan stylish dan futuristik, cocok untuk perjalanan bisnis
                  maupun liburan.
                </li>
                <li>
                  <strong className="text-primary-600">
                    Efisiensi Bahan Bakar:
                  </strong>{" "}
                  Mesin irit yang membuat perjalanan Anda lebih hemat.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Layanan Terbaik untuk Perjalanan Anda
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Kami menyediakan layanan sewa Xpander di Yogyakarta dengan pilihan
            yang fleksibel, sesuai kebutuhan Anda.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-center">
            <div className="p-6 bg-white rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-2 text-primary">
                Sewa Lepas Kunci
              </h3>
              <p className="text-muted-foreground">
                Rasakan kebebasan menjelajahi Jogja dengan persyaratan yang
                mudah.
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-2 text-primary">
                Dengan Sopir
              </h3>
              <p className="text-muted-foreground">
                Nikmati wisata tanpa stres, biarkan sopir lokal kami yang
                mengurus semua rute.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Pesan Xpander untuk Liburan Anda Sekarang
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto mb-8">
            Hubungi kami untuk konsultasi gratis dan penawaran harga terbaik.
          </p>
          <a
            href="https://wa.me/6282363389893"
            className="inline-block bg-green-500 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:bg-green-600 transition-colors"
          >
            Pesan via WhatsApp
          </a>
        </div>
      </section>
    </main>
  );
}
