import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "Sewa Mobil Innova Bali - Rental MPV Terbaik untuk Liburan Keluarga",
  description:
    "Rental mobil Toyota Innova Reborn di Bali dengan harga terjangkau. Pilihan ideal untuk liburan keluarga, tersedia lepas kunci atau dengan sopir. Jelajahi Bali dengan nyaman.",
  keywords: [
    "sewa innova bali",
    "rental innova bali",
    "sewa mobil keluarga bali",
    "rental mobil di bali",
    "sewa mobil innova reborn bali",
    "rental mobil innova zenix bali",
  ],
  openGraph: {
    title: "Sewa Mobil Innova Bali - Rental MPV Terbaik untuk Liburan Keluarga",
    description:
      "Rental mobil Toyota Innova Reborn di Bali dengan harga terjangkau. Pilihan ideal untuk liburan keluarga, tersedia lepas kunci atau dengan sopir.",
  },
};

export default function Page() {
  return (
    <main>
      <section className="py-12 md:py-24">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-center md:text-left">
            Sewa Toyota Innova di Bali | Solusi Terbaik untuk Liburan Keluarga
          </h1>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto md:mx-0">
            Liburan di Bali bersama keluarga atau teman butuh kendaraan yang
            andal dan nyaman.{" "}
            <strong className="text-primary-600">Sewa mobil Innova Bali</strong>{" "}
            adalah pilihan paling populer karena kapasitasnya yang luas dan
            performa mesin yang tangguh. Kami menyediakan Innova Reborn dan
            Innova Zenix dengan harga terjangkau, baik untuk layanan lepas kunci
            maupun dengan sopir.
          </p>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-6 border rounded-lg shadow-sm">
              <h2 className="text-xl font-semibold mb-2 text-primary">
                Innova Reborn: Kenyamanan Optimal
              </h2>
              <p className="text-muted-foreground">
                Dikenal sebagai MPV terbaik di kelasnya, Innova Reborn
                menawarkan kabin yang luas dan nyaman untuk menampung hingga 7
                penumpang. Mobil ini sangat ideal untuk perjalanan jauh, seperti
                menjelajahi wilayah utara Bali atau menuju Pura Besakih, dengan
                suspensi yang lembut di berbagai kondisi jalan.
              </p>
            </div>
            <div className="p-6 border rounded-lg shadow-sm">
              <h2 className="text-xl font-semibold mb-2 text-primary">
                Innova Zenix: Kombinasi Modern & Efisien
              </h2>
              <p className="text-muted-foreground">
                Jika Anda mencari kendaraan yang lebih modern, layanan{" "}
                <strong className="text-primary-600">
                  sewa Innova Zenix di Bali
                </strong>{" "}
                adalah jawabannya. Dengan teknologi terbaru dan desain elegan,
                Zenix memberikan pengalaman berkendara yang lebih premium, cocok
                untuk momen-momen istimewa selama liburan Anda.
              </p>
            </div>
          </div>

          <div className="mt-16 bg-gray-100 p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-4 text-center">
              Mengapa Innova Pilihan Tepat untuk di Bali?
            </h2>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>
                <strong className="text-primary-600">Kapasitas Luas:</strong>{" "}
                Muat untuk 7 penumpang dan barang bawaan, cocok untuk keluarga
                atau rombongan kecil.
              </li>
              <li>
                <strong className="text-primary-600">Performa Andal:</strong>{" "}
                Mampu melewati tanjakan dan turunan di area pegunungan Bali
                dengan mudah dan aman.
              </li>
              <li>
                <strong className="text-primary-600">Irit Bahan Bakar:</strong>{" "}
                Innova dikenal efisien, yang membantu menghemat biaya selama
                liburan Anda.
              </li>
            </ul>
          </div>

          <div className="mt-16 bg-gray-100 p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-4 text-center">
              Pertanyaan Umum (FAQ)
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-lg">
                  Berapa harga sewa Innova di Bali?
                </h3>
                <p className="text-muted-foreground">
                  Harga sewa Innova sangat kompetitif, tergantung pada model
                  (Reborn/Zenix) dan durasi sewa. Hubungi kami untuk penawaran
                  terbaik.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-lg">
                  Apakah Innova di Bali tersedia dengan transmisi matic?
                </h3>
                <p className="text-muted-foreground">
                  Ya, kami menyediakan layanan{" "}
                  <strong className="text-primary-600">
                    rental Innova Bali matic
                  </strong>{" "}
                  yang sangat cocok untuk kemudahan berkendara di lalu lintas
                  dan jalanan Bali.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
