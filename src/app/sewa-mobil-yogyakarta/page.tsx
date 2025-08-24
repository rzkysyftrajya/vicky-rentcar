import { type Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Sewa Mobil Yogyakarta - Rental Murah Lepas Kunci & Dengan Sopir | PT.VRN",
  description:
    "Pusat sewa mobil di Yogyakarta (Jogja) dengan harga murah. Menyediakan layanan rental mobil lepas kunci 24 jam atau dengan sopir. Armada lengkap untuk wisata dan bisnis.",
  keywords: [
    "sewa mobil yogyakarta",
    "rental mobil yogyakarta",
    "sewa mobil murah jogja",
    "rental mobil lepas kunci yogyakarta",
    "sewa mobil dengan sopir yogyakarta",
    "sewa mobil di yogyakarta",
    "rental mobil jogja",
    "sewa xpander yogyakarta",
    "sewa mobil bandara yogyakarta",
  ],
  openGraph: {
    title: "Sewa Mobil Yogyakarta - Rental Murah Lepas Kunci & Dengan Sopir",
    description:
      "Pusat sewa mobil di Yogyakarta dengan harga murah. Menyediakan layanan rental mobil lepas kunci 24 jam atau dengan sopir profesional.",
  },
};

export default function Page() {
  return (
    <main>
      <section className="relative h-[60vh] flex items-center justify-center text-center text-white">
        <img
          src="https://www.gotravelaindonesia.com/wp-content/uploads/Kota-Yogyakarta.jpg.webp"
          alt="Sewa Mobil Yogyakarta"
          className="absolute inset-0 w-full h-full object-cover z-0 opacity-80"
        />
        <div className="absolute inset-0 bg-black/60 z-10"></div>
        <div className="relative z-20 p-6">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-wide mb-4 drop-shadow-md">
            Sewa Mobil Yogyakarta
          </h1>
          <p className="text-xl md:text-2xl font-light max-w-2xl mx-auto drop-shadow-sm">
            Partner Terbaik untuk Jelajahi Keindahan Kota Pelajar
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
            Mengapa Memilih Kami untuk Sewa Mobil di Jogja?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-center">
            <div className="p-6 border rounded-lg shadow-sm">
              <h3 className="text-2xl font-semibold mb-2 text-primary">
                Wisata & Kuliner
              </h3>
              <p className="text-muted-foreground">
                Jelajahi Candi Borobudur, Prambanan, Malioboro, atau wisata
                kuliner tanpa batas.
              </p>
            </div>
            <div className="p-6 border rounded-lg shadow-sm">
              <h3 className="text-2xl font-semibold mb-2 text-primary">
                Pilihan Armada Lengkap
              </h3>
              <p className="text-muted-foreground">
                Tersedia Avanza, Innova, Hiace, dan banyak lagi, siap untuk
                segala jenis perjalanan.
              </p>
            </div>
            <div className="p-6 border rounded-lg shadow-sm">
              <h3 className="text-2xl font-semibold mb-2 text-primary">
                Harga Terjangkau
              </h3>
              <p className="text-muted-foreground">
                Kami menawarkan tarif sewa mobil murah dengan kualitas terbaik,
                cocok untuk traveler hemat.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row-reverse items-center gap-12">
            <div className="md:w-1/2">
              <img
                src="https://d1g6w7sntckt92.cloudfront.net/public/images/color_option_images/lORk6o1wzA2gjE0AET8Col2y7XwsqB55KlvyzaPr.png"
                alt="Sewa Avanza di Yogyakarta"
                className="rounded-xl shadow-lg w-full h-auto"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-4">
                Lepas Kunci atau dengan Sopir? Pilihan di Tangan Anda
              </h2>
              <p className="text-muted-foreground mb-4">
                Nikmati kebebasan dengan layanan sewa mobil lepas kunci
                Yogyakarta atau biarkan sopir profesional kami yang mengurus
                semua rute perjalanan Anda.
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>
                  <strong className="text-primary-600">Lepas Kunci:</strong>{" "}
                  Privasi dan fleksibilitas penuh.
                </li>
                <li>
                  <strong className="text-primary-600">Dengan Sopir:</strong>{" "}
                  Tanpa stres, lebih nyaman, dan waktu lebih efisien.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Siap untuk Berpetualang di Yogyakarta?
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto mb-8">
            Hubungi kami untuk mendapatkan penawaran terbaik dan konsultasi
            gratis untuk perjalanan Anda.
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
