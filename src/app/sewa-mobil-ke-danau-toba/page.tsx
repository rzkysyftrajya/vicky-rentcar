import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "Sewa Mobil dari Medan ke Danau Toba - Paket Wisata & Carter",
  description:
    "Rental mobil dari Medan ke Danau Toba dengan harga terbaik. Tersedia paket wisata, carter mobil, atau sewa lepas kunci untuk perjalanan Anda ke Parapat dan Samosir.",
  keywords: [
    "sewa mobil ke danau toba",
    "rental mobil medan danau toba",
    "paket wisata danau toba",
    "carter mobil ke parapat",
    "sewa mobil dari kualanamu ke danau toba",
    "rental mobil tour wisata medan",
  ],
  openGraph: {
    title: "Sewa Mobil dari Medan ke Danau Toba - Paket Wisata & Carter",
    description:
      "Rental mobil dari Medan ke Danau Toba dengan harga terbaik. Tersedia paket wisata, carter mobil, atau sewa lepas kunci.",
  },
};

export default function Page() {
  return (
    <main>
      <section className="relative h-[60vh] flex items-center justify-center text-center text-white">
        <img
          src="/armada/danau-toba-bg.webp"
          alt="Sewa Mobil ke Danau Toba"
          className="absolute inset-0 w-full h-full object-cover z-0 opacity-70"
        />
        <div className="relative z-10 p-6 bg-black/50 rounded-lg">
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-wide mb-4 drop-shadow-lg">
            Sewa Mobil ke Danau Toba
          </h1>
          <p className="text-xl md:text-2xl font-light max-w-2xl mx-auto drop-shadow-md">
            Petualangan Terbaik dari Medan ke Danau Toba & Samosir
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
            Paket Perjalanan Fleksibel
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="p-6 border rounded-lg shadow-sm">
              <h3 className="text-2xl font-semibold mb-2 text-primary">
                Carter Mobil dengan Sopir
              </h3>
              <p className="text-muted-foreground">
                Nikmati perjalanan tanpa perlu memikirkan rute dan kondisi
                jalan. Sopir kami berpengalaman dan menguasai jalur Medan -
                Danau Toba.
              </p>
            </div>
            <div className="p-6 border rounded-lg shadow-sm">
              <h3 className="text-2xl font-semibold mb-2 text-primary">
                Sewa Lepas Kunci
              </h3>
              <p className="text-muted-foreground">
                Dapatkan kebebasan penuh untuk menjelajahi setiap sudut Danau
                Toba. Mobil kami terawat dan siap untuk perjalanan jauh.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Mengapa Pilih Kami untuk Tour Danau Toba?
          </h2>
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <img
                src="https://omnispace.blob.core.windows.net/strapi-prod/2022-11-23/06_5_Tips_Nyaman_Menjelajahi_Danau_Toba_32115b8648.jpg"
                alt="Sewa Innova ke Danau Toba"
                className="rounded-xl shadow-lg w-full h-auto"
              />
            </div>
            <div className="md:w-1/2">
              <ul className="list-disc list-inside space-y-4 text-muted-foreground">
                <li>
                  <strong className="text-primary-600">
                    Armada Nyaman & Terawat:
                  </strong>{" "}
                  Kami menyediakan mobil seperti Innova, Avanza, dan Hiace yang
                  cocok untuk perjalanan jauh dan muat banyak barang.
                </li>
                <li>
                  <strong className="text-primary-600">
                    Sopir Profesional:
                  </strong>{" "}
                  Sopir kami adalah pemandu yang ramah, sopan, dan tahu
                  tempat-tempat wisata terbaik di sekitar Danau Toba.
                </li>
                <li>
                  <strong className="text-primary-600">Harga Terbaik:</strong>{" "}
                  Kami menawarkan paket all-in-one yang kompetitif, termasuk
                  mobil, bensin, dan sopir.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4">
            Siap untuk Petualangan Anda?
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto mb-8">
            Jadikan perjalanan Anda ke Danau Toba lebih mudah dan menyenangkan.
            Hubungi kami untuk pemesanan.
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
