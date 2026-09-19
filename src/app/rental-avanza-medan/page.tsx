import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "Sewa Mobil Avanza Medan - Harga Murah Lepas Kunci & Dengan Sopir",
  description:
    "Pusat sewa mobil Toyota Avanza di Medan dengan harga murah. Menyediakan layanan rental mobil Avanza lepas kunci 24 jam atau dengan sopir. Armada terawat untuk wisata dan bisnis.",
  keywords: [
    "sewa avanza medan",
    "rental avanza medan",
    "sewa mobil murah medan",
    "rental mobil lepas kunci medan",
    "sewa mobil medan avanza",
    "sewa mobil avanza medan lepas kunci",
  ],
  openGraph: {
    title: "Sewa Mobil Avanza Medan - Harga Murah Lepas Kunci & Dengan Sopir",
    description:
      "Pusat sewa mobil Toyota Avanza di Medan dengan harga murah. Menyediakan layanan rental mobil lepas kunci 24 jam atau dengan sopir profesional.",
  },
};

export default function Page() {
  return (
    <main className="bg-white">
      <section className="py-12 md:py-24">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-center">
            Sewa & Rental Toyota Avanza di Medan | Hemat & Andal
          </h1>

          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-center">
            Mencari mobil yang hemat, handal, dan muat banyak di Medan?{" "}
            <strong className="text-primary-600">
              Sewa Toyota Avanza Medan
            </strong>{" "}
            adalah pilihan yang tepat. Mobil ini dikenal sebagai "mobil sejuta
            umat" karena cocok untuk segala kebutuhan, mulai dari perjalanan
            wisata, bisnis, hingga kegiatan keluarga.
          </p>
        </div>
      </section>

      <section className="py-12 md:py-24 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <h2 className="text-2xl font-bold mb-4">
                Kenapa Pilih Avanza untuk di Medan?
              </h2>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>
                  <strong className="text-primary-600">
                    Irit Bahan Bakar:
                  </strong>{" "}
                  Biaya operasional lebih rendah, sangat cocok untuk perjalanan
                  jauh di Sumatera Utara.
                </li>
                <li>
                  <strong className="text-primary-600">Kabin Luas:</strong>{" "}
                  Kapasitas 7 penumpang, cukup untuk satu keluarga atau
                  rombongan kecil.
                </li>
                <li>
                  <strong className="text-primary-600">
                    Performa Tangguh:
                  </strong>{" "}
                  Cocok untuk berbagai kondisi jalan, baik di dalam kota maupun
                  jalur ke luar kota.
                </li>
                <li>
                  <strong className="text-primary-600">Fleksibel:</strong>{" "}
                  Tersedia pilihan{" "}
                  <strong className="text-primary-600">lepas kunci</strong>{" "}
                  untuk kebebasan Anda atau dengan sopir untuk kenyamanan
                  maksimal.
                </li>
              </ul>
            </div>
            <div className="md:w-1/2">
              <img
                src="https://d1g6w7sntckt92.cloudfront.net/public/images/feature_image/nc4xcCyEQw3HpaJXzIu8VrLOrC9CKD8ct71EuN6N.jpg"
                alt="Interior Toyota Avanza"
                className="rounded-xl shadow-lg w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row-reverse items-center gap-12">
            <div className="md:w-1/2">
              <h2 className="text-2xl font-bold mb-4">
                Layanan Lepas Kunci & dengan Sopir
              </h2>
              <p className="text-muted-foreground mb-4">
                Kami memberikan fleksibilitas penuh. Anda bisa memilih layanan{" "}
                <strong className="text-primary-600">
                  rental avanza lepas kunci Medan
                </strong>{" "}
                untuk pengalaman berkendara yang intim, atau menggunakan jasa
                sopir profesional kami yang menguasai rute-rute di Medan dan
                sekitarnya.
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Proses sewa cepat dan mudah.</li>
                <li>Syarat dokumen yang tidak ribet.</li>
                <li>Layanan sopir yang ramah dan berpengalaman.</li>
                <li>Mobil selalu dalam kondisi prima dan bersih.</li>
              </ul>
            </div>
            <div className="md:w-1/2">
              <img
                src="https://d1g6w7sntckt92.cloudfront.net/public/images/feature_image/eShZqgs6u1Pf1kAJQuo7X7dYSx6BWbADDKfgtwMi.jpg"
                alt="Layanan Sopir Avanza"
                className="rounded-xl shadow-lg w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-100 py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-4 text-center">
            Pertanyaan Umum (FAQ)
          </h2>
          <div className="space-y-4 max-w-3xl mx-auto">
            <div>
              <h3 className="font-semibold text-lg">
                Apakah harga sewa sudah termasuk bensin dan sopir?
              </h3>
              <p className="text-muted-foreground">
                Harga dasar yang tertera adalah harga sewa mobil saja. Jika Anda
                ingin layanan dengan sopir, ada biaya tambahan. Bensin
                ditanggung penyewa untuk layanan lepas kunci.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg">
                Bagaimana cara booking sewa Avanza di Medan?
              </h3>
              <p className="text-muted-foreground">
                Anda bisa menghubungi tim kami melalui WhatsApp, telepon, atau
                mengisi form pemesanan online. Kami akan konfirmasi ketersediaan
                mobil dan rinciannya.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
