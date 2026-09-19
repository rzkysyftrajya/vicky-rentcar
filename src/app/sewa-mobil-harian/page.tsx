import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "Sewa Mobil Harian - Lepas Kunci 24 Jam & Dengan Sopir se-Indonesia",
  description:
    "Jasa sewa mobil harian di seluruh Indonesia (Medan, Jakarta, Bali, dll), tersedia lepas kunci 24 jam atau dengan sopir. Pilihan mobil lengkap dengan harga terbaik. Pesan online sekarang!",
  keywords: [
    "sewa mobil harian",
    "rental mobil harian",
    "sewa mobil 24 jam",
    "rental mobil lepas kunci harian",
    "sewa mobil harian medan",
    "sewa mobil harian jakarta",
    "sewa mobil harian bali",
  ],
  openGraph: {
    title: "Sewa Mobil Harian - Lepas Kunci 24 Jam & Dengan Sopir se-Indonesia",
    description:
      "Jasa sewa mobil harian di seluruh Indonesia, tersedia lepas kunci 24 jam atau dengan sopir. Pilihan mobil lengkap.",
  },
};

export default function Page() {
  return (
    <main>
      <section className="py-16 md:py-24 bg-primary-600 text-white bg-green-500 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 drop-shadow">
            Sewa Mobil Harian
          </h1>
          <p className="text-xl md:text-2xl max-w-2xl mx-auto font-light drop-shadow">
            Solusi Cepat & Fleksibel untuk Kebutuhan Transportasi Anda
          </p>
          <a
            href="https://wa.me/6282363389893"
            className="mt-8 inline-block bg-blue-500 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:bg-green-600 transition-colors"
          >
            Pesan Sekarang
          </a>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Pilihan Sewa Mobil Fleksibel
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="p-6 border rounded-lg shadow-sm">
              <h3 className="text-2xl font-semibold mb-2 text-primary">
                Sewa Lepas Kunci 24 Jam
              </h3>
              <p className="text-muted-foreground">
                Dapatkan kebebasan penuh untuk menjelajahi kota. Layanan **sewa
                mobil lepas kunci harian** kami tersedia 24 jam dengan proses
                yang mudah.
              </p>
            </div>
            <div className="p-6 border rounded-lg shadow-sm">
              <h3 className="text-2xl font-semibold mb-2 text-primary">
                Dengan Sopir Profesional
              </h3>
              <p className="text-muted-foreground">
                Nikmati perjalanan tanpa stres. Sopir kami berpengalaman dan
                siap melayani kebutuhan perjalanan Anda, baik untuk bisnis
                maupun wisata.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <img
                src="https://d1g6w7sntckt92.cloudfront.net/public/images/color_option_images/UC3d0ojsFr6ZPw2vCizzpIrsU4sZAuw1SYoMdCH2.png"
                alt="Sewa Mobil Harian Indonesia"
                className="rounded-xl shadow-lg w-full h-auto"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-4">
                Layanan Sewa Harian di Berbagai Kota
              </h2>
              <p className="text-muted-foreground mb-4">
                Kami hadir di kota-kota besar di seluruh Indonesia untuk
                memenuhi kebutuhan transportasi harian Anda. Layanan kami
                tersedia di:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>
                  <a
                    href="/sewa-mobil-medan"
                    className="text-primary-600 hover:underline"
                  >
                    Sewa Mobil Harian di Medan
                  </a>
                </li>
                <li>
                  <a
                    href="/sewa-mobil-jakarta"
                    className="text-primary-600 hover:underline"
                  >
                    Sewa Mobil Harian di Jakarta
                  </a>
                </li>
                <li>
                  <a
                    href="/sewa-mobil-bandung"
                    className="text-primary-600 hover:underline"
                  >
                    Sewa Mobil Harian di Bandung
                  </a>
                </li>
                <li>
                  <a
                    href="/sewa-mobil-bali"
                    className="text-primary-600 hover:underline"
                  >
                    Sewa Mobil Harian di Bali
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Pertanyaan Umum (FAQ)
          </h2>
          <div className="space-y-6 max-w-3xl mx-auto">
            <div className="p-6 border rounded-lg shadow-sm">
              <h3 className="font-semibold text-lg">
                Apakah ada batas kilometer untuk sewa harian lepas kunci?
              </h3>
              <p className="text-muted-foreground">
                Untuk layanan lepas kunci, kami biasanya tidak membatasi jarak
                tempuh di dalam kota. Namun, untuk perjalanan ke luar kota, ada
                ketentuan khusus yang akan kami informasikan saat pemesanan.
              </p>
            </div>
            <div className="p-6 border rounded-lg shadow-sm">
              <h3 className="font-semibold text-lg">
                Berapa lama durasi sewa harian?
              </h3>
              <p className="text-muted-foreground">
                Durasi sewa harian kami adalah 24 jam. Jika Anda melebihi waktu
                tersebut, akan ada biaya kelebihan jam yang kompetitif.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
