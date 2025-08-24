import { type Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Sewa Mobil Jakarta - Rental Murah Lepas Kunci & Dengan Sopir | PT.VRN",
  description:
    "Pusat sewa mobil di Jakarta harga murah. Menyediakan rental mobil lepas kunci 24 jam atau dengan sopir di Jakarta Pusat, Selatan, Utara, Timur, Barat. Armada lengkap, Avanza, Innova, Alphard.",
  keywords: [
    "sewa mobil jakarta",
    "rental mobil jakarta",
    "sewa mobil murah jakarta",
    "rental mobil lepas kunci jakarta",
    "sewa mobil dengan sopir jakarta",
    "sewa mobil di jakarta",
    "sewa mobil bandara soekarno hatta",
    "rental alphard jakarta",
    "sewa hiace jakarta",
  ],
  openGraph: {
    title: "Sewa Mobil Jakarta - Rental Murah Lepas Kunci & Dengan Sopir",
    description:
      "Pusat sewa mobil di Jakarta dengan harga murah. Menyediakan layanan rental mobil lepas kunci 24 jam atau dengan sopir profesional.",
  },
};

export default function Page() {
  return (
    <main>
      <section className="py-12 md:py-24">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-center md:text-left">
            Sewa Mobil Jakarta | Solusi Mobilitas untuk Bisnis & Wisata
          </h1>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto md:mx-0">
            Dapatkan pengalaman berkendara terbaik di ibukota dengan layanan{" "}
            <strong className="text-primary-600">sewa mobil di Jakarta</strong>{" "}
            dari PT. VICKY RENTCAR NUSANTARA. Kami memahami tantangan lalu
            lintas Jakarta, itulah sebabnya kami menawarkan armada terbaru dan
            layanan fleksibel, baik untuk perjalanan bisnis penting, liburan
            keluarga, maupun acara khusus. Layanan kami mencakup seluruh wilayah
            Jakarta, dari Pusat hingga Selatan, Timur, Barat, dan Utara.
          </p>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 border rounded-lg shadow-sm hover:shadow-lg transition-all duration-300">
              <h2 className="text-xl font-semibold mb-2 text-primary">
                Cocok untuk Perjalanan Bisnis
              </h2>
              <p className="text-muted-foreground">
                Untuk Anda yang memiliki jadwal padat, kami menyediakan mobil
                eksekutif seperti Alphard atau Fortuner yang dilengkapi dengan
                sopir profesional. Fokus pada pekerjaan Anda, dan biarkan kami
                yang mengurus perjalanan.
              </p>
            </div>
            <div className="p-6 border rounded-lg shadow-sm hover:shadow-lg transition-all duration-300">
              <h2 className="text-xl font-semibold mb-2 text-primary">
                Antar Jemput Bandara Soekarno-Hatta (CGK)
              </h2>
              <p className="text-muted-foreground">
                Layanan antar jemput bandara kami siap menyambut Anda tepat
                waktu. Kami memantau jadwal penerbangan secara real-time untuk
                memastikan Anda tidak perlu menunggu lama, baik saat kedatangan
                maupun keberangkatan.
              </p>
            </div>
            <div className="p-6 border rounded-lg shadow-sm hover:shadow-lg transition-all duration-300">
              <h2 className="text-xl font-semibold mb-2 text-primary">
                Pilihan Lepas Kunci Fleksibel
              </h2>
              <p className="text-muted-foreground">
                Dengan opsi{" "}
                <strong className="text-primary-600">
                  rental mobil lepas kunci di Jakarta
                </strong>
                , Anda bebas berkeliling kota, mengunjungi pusat perbelanjaan,
                atau menemui kerabat tanpa terikat jadwal. Kami menawarkan
                berbagai tipe mobil, termasuk yang irit bahan bakar dan mudah
                bermanuver.
              </p>
            </div>
          </div>

          <div className="mt-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center md:text-left">
              Armada Unggulan Kami di Jakarta
            </h2>
            <p className="text-muted-foreground text-center md:text-left mb-8">
              Pilihan mobil yang paling banyak diminati oleh pelanggan kami di
              Jakarta, cocok untuk berbagai kebutuhan.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              <div className="border rounded-lg p-4 text-center">
                <img
                  src="/armada/innova-zenix .webp"
                  alt="Sewa Toyota Innova Jakarta"
                  className="w-full h-auto mb-2"
                />
                <h3 className="text-lg font-semibold">Toyota Innova Zenix</h3>
                <p className="text-sm text-muted-foreground">
                  MPV, 7 Penumpang
                </p>
              </div>
              <div className="border rounded-lg p-4 text-center">
                <img
                  src="/armada/alphard-new.webp"
                  alt="Sewa Toyota Alphard Jakarta"
                  className="w-full h-auto mb-2"
                />
                <h3 className="text-lg font-semibold">Toyota Alphard</h3>
                <p className="text-sm text-muted-foreground">
                  Mobil Mewah, 7 Penumpang
                </p>
              </div>
              <div className="border rounded-lg p-4 text-center">
                <img
                  src="/armada/honda-brio.webp"
                  alt="Sewa Honda Brio Jakarta"
                  className="w-full h-auto mb-2"
                />
                <h3 className="text-lg font-semibold">Honda Brio</h3>
                <p className="text-sm text-muted-foreground">
                  City Car, 5 Penumpang
                </p>
              </div>
              <div className="border rounded-lg p-4 text-center">
                <img
                  src="/armada/hiace-premio.webp"
                  alt="Sewa Toyota Hiace Jakarta"
                  className="w-full h-auto mb-2"
                />
                <h3 className="text-lg font-semibold">Toyota Hiace</h3>
                <p className="text-sm text-muted-foreground">
                  Van, 14-16 Penumpang
                </p>
              </div>
            </div>
          </div>

          <div className="mt-16 bg-gray-100 p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-4 text-center">
              Pertanyaan Umum (FAQ)
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-lg">
                  Apakah layanan sewa mobil di Jakarta tersedia 24 jam?
                </h3>
                <p className="text-muted-foreground">
                  Ya, kami siap melayani kebutuhan transportasi Anda 24 jam
                  setiap hari, termasuk layanan antar jemput di Bandara
                  Soekarno-Hatta kapan pun Anda butuhkan.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-lg">
                  Bagaimana dengan syarat sewa mobil lepas kunci di Jakarta?
                </h3>
                <p className="text-muted-foreground">
                  Syarat umum mencakup KTP, SIM, dan beberapa dokumen tambahan
                  untuk verifikasi. Prosedur kami dirancang agar cepat dan aman
                  untuk kedua belah pihak. Hubungi kami untuk detail lebih
                  lanjut.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
