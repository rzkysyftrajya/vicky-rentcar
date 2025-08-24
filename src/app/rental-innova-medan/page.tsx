import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "Rental Innova Medan | Sewa Toyota Innova Reborn & Zenix Murah",
  description:
    "Pusat rental Innova di Medan dengan harga sewa murah. Tersedia Innova Reborn dan Innova Zenix untuk kebutuhan keluarga, perjalanan dinas, atau wisata. Layanan lepas kunci atau dengan sopir.",
  keywords: [
    "rental innova medan",
    "sewa innova medan",
    "sewa innova reborn medan",
    "sewa innova zenix medan",
    "harga sewa innova medan",
    "rental innova reborn lepas kunci medan",
  ],
  openGraph: {
    title: "Rental Innova Medan - Sewa Toyota Innova Reborn & Zenix",
    description:
      "Sewa Toyota Innova di Medan dengan pilihan lepas kunci dan sopir. Armada bersih, terawat, dan siap mengantar Anda keliling Medan.",
  },
};

export default function Page() {
  return (
    <main>
      <section className="py-12 md:py-24">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-center md:text-left">
            Sewa & Rental Toyota Innova di Medan
          </h1>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto md:mx-0">
            Toyota Innova adalah pilihan utama bagi banyak keluarga dan pebisnis
            yang membutuhkan kendaraan tangguh dan nyaman di Medan. PT. VRN
            menyediakan layanan{" "}
            <strong className="text-primary-600">rental Innova Medan</strong>{" "}
            dengan kondisi prima, baik untuk model Innova Reborn maupun Innova
            Zenix terbaru.
          </p>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-6 border rounded-lg shadow-sm">
              <h2 className="text-xl font-semibold mb-2 text-primary">
                Innova Reborn: Pilihan Paling Andal
              </h2>
              <p className="text-muted-foreground">
                Dikenal dengan kenyamanan dan ketangguhannya, Innova Reborn
                adalah mobil multiguna yang sempurna untuk perjalanan jarak
                jauh, wisata keluarga ke Danau Toba, atau sekadar menjelajahi
                kota Medan. Kami menjamin unit yang bersih, terawat, dan siap
                untuk semua medan.
              </p>
            </div>
            <div className="p-6 border rounded-lg shadow-sm">
              <h2 className="text-xl font-semibold mb-2 text-primary">
                Innova Zenix: Kombinasi Elegansi & Teknologi
              </h2>
              <p className="text-muted-foreground">
                Untuk Anda yang mencari kenyamanan lebih dan fitur modern, kami
                menyediakan{" "}
                <strong className="text-primary-600">
                  sewa Innova Zenix di Medan
                </strong>
                . Mobil ini menawarkan interior yang lebih mewah dan efisiensi
                bahan bakar yang lebih baik, menjadikannya pilihan ideal untuk
                perjalanan bisnis atau liburan berkelas.
              </p>
            </div>
          </div>

          <div className="mt-16 bg-gray-100 p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-4 text-center">
              Keunggulan Sewa Innova di Medan Bersama Kami
            </h2>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>
                <strong className="text-primary-600">
                  Kondisi Mobil Terjamin:
                </strong>{" "}
                Semua unit Innova kami rutin diservis untuk memastikan keamanan
                dan kenyamanan Anda.
              </li>
              <li>
                <strong className="text-primary-600">Harga Terjangkau:</strong>{" "}
                Kami menawarkan{" "}
                <strong className="text-primary-600">
                  harga sewa Innova Medan
                </strong>{" "}
                yang kompetitif, dengan pilihan paket harian, mingguan, hingga
                bulanan.
              </li>
              <li>
                <strong className="text-primary-600">
                  Sopir Profesional & Berpengalaman:
                </strong>{" "}
                Jika Anda memilih layanan dengan sopir, Anda akan ditemani oleh
                pengemudi yang ramah, sopan, dan menguasai area Medan.
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
                  Berapa harga sewa Innova Reborn di Medan?
                </h3>
                <p className="text-muted-foreground">
                  Harga sewa bervariasi tergantung durasi sewa (harian,
                  mingguan, bulanan) dan layanan (lepas kunci atau dengan
                  sopir). Silakan hubungi kami untuk penawaran terbaik.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-lg">
                  Apakah bisa sewa Innova lepas kunci di Medan?
                </h3>
                <p className="text-muted-foreground">
                  Ya, kami menyediakan layanan{" "}
                  <strong className="text-primary-600">
                    sewa Innova lepas kunci Medan
                  </strong>{" "}
                  dengan syarat dan ketentuan yang mudah. Proses verifikasi
                  dokumen akan dilakukan untuk memastikan keamanan mobil.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
