import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "Sewa Mobil Bali - Rental Murah Lepas Kunci & Dengan Sopir | PT.VRN",
  description:
    "Pusat sewa mobil di Bali dengan harga murah. Menyediakan rental mobil lepas kunci 24 jam atau dengan sopir di area Kuta, Seminyak, Ubud. Armada lengkap, Avanza, Innova, matic.",
  keywords: [
    "sewa mobil bali",
    "rental mobil bali",
    "sewa mobil murah bali",
    "rental mobil lepas kunci bali",
    "sewa mobil dengan sopir bali",
    "sewa mobil di bali",
    "sewa mobil matic bali",
    "rental innova bali",
    "sewa mobil bandara gusti ngurah rai",
  ],
  openGraph: {
    title: "Sewa Mobil Bali - Rental Murah Lepas Kunci & Dengan Sopir",
    description:
      "Pusat sewa mobil di Bali dengan harga murah. Menyediakan layanan rental mobil lepas kunci 24 jam atau dengan sopir profesional.",
  },
};

export default function Page() {
  return (
    <main>
      <section className="py-12 md:py-24">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-center md:text-left">
            Sewa Mobil Bali | Partner Liburan Tanpa Batas
          </h1>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto md:mx-0">
            Jelajahi keindahan Pulau Dewata dengan leluasa menggunakan layanan{" "}
            <strong className="text-primary-600">sewa mobil di Bali</strong>{" "}
            dari PT. VICKY RENTCAR NUSANTARA. Kami menyediakan berbagai pilihan
            armada yang terawat, mulai dari mobil matic yang lincah hingga MPV
            luas untuk rombongan. Baik Anda ingin berpetualang sendiri dengan
            layanan lepas kunci atau bersantai dengan sopir berpengalaman, kami
            memastikan setiap momen liburan Anda di Bali menjadi tak terlupakan.
          </p>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 border rounded-lg shadow-sm hover:shadow-lg transition-all duration-300">
              <h2 className="text-xl font-semibold mb-2 text-primary">
                Sewa Lepas Kunci, Bebas Berpetualang
              </h2>
              <p className="text-muted-foreground">
                Dapatkan kebebasan untuk mengatur jadwal perjalanan Anda
                sendiri. Kunjungi pantai tersembunyi, nikmati matahari terbenam
                di Pura Uluwatu, atau jelajahi desa-desa seniman di Ubud. Kami
                menawarkan opsi{" "}
                <strong className="text-primary-600">
                  rental mobil lepas kunci Bali
                </strong>{" "}
                dengan prosedur yang mudah.
              </p>
              <p className="text-muted-foreground mt-2">
                Dengan layanan ini, Anda bisa menyusun rute sesuai keinginan,
                mulai dari penjemputan di{" "}
                <a
                  href="/sewa-mobil-bandara-kualanamu"
                  className="text-primary hover:underline"
                >
                  bandara
                </a>{" "}
                hingga berkeliling dari Kuta ke Ubud atau ke area utara Bali
                yang sejuk.
              </p>
            </div>
            <div className="p-6 border rounded-lg shadow-sm hover:shadow-lg transition-all duration-300">
              <h2 className="text-xl font-semibold mb-2 text-primary">
                Sopir Sekaligus Pemandu Wisata
              </h2>
              <p className="text-muted-foreground">
                Dengan layanan{" "}
                <strong className="text-primary-600">
                  sewa mobil dengan sopir Bali
                </strong>
                , Anda tidak hanya mendapatkan pengemudi, tetapi juga pemandu
                lokal yang siap berbagi cerita dan membawa Anda ke tempat-tempat
                ikonik, menghindari kemacetan, dan menemukan kuliner terbaik.
              </p>
            </div>
            <div className="p-6 border rounded-lg shadow-sm hover:shadow-lg transition-all duration-300">
              <h2 className="text-xl font-semibold mb-2 text-primary">
                Antar Jemput Bandara I Gusti Ngurah Rai (DPS)
              </h2>
              <p className="text-muted-foreground">
                Kami menyediakan layanan penjemputan dan pengantaran di Bandara
                Internasional I Gusti Ngurah Rai. Staf kami akan menunggu Anda
                di lobi kedatangan, memastikan transisi yang mulus dari bandara
                ke hotel atau villa Anda.
              </p>
            </div>
          </div>

          <div className="mt-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center md:text-left">
              Armada Unggulan Kami di Bali
            </h2>
            <p className="text-muted-foreground text-center md:text-left mb-8">
              Pilihan mobil yang paling banyak diminati oleh para wisatawan di
              Bali, cocok untuk segala jenis perjalanan.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              <div className="border rounded-lg p-4 text-center">
                <img
                  src="/armada/ertiga-hybrid.webp"
                  alt="Sewa Suzuki Ertiga matic di Bali untuk jalanan perkotaan"
                  className="w-full h-auto mb-2"
                />
                <h3 className="text-lg font-semibold">Suzuki Ertiga Matic</h3>
                <p className="text-sm text-muted-foreground">
                  MPV, 7 Penumpang
                </p>
              </div>
              <div className="border rounded-lg p-4 text-center">
                <img
                  src="/armada/innova-reborn.webp"
                  alt="Rental Toyota Innova Reborn di Bali, mobil keluarga tangguh"
                  className="w-full h-auto mb-2"
                />
                <h3 className="text-lg font-semibold">Toyota Innova</h3>
                <p className="text-sm text-muted-foreground">
                  MPV, 7 Penumpang
                </p>
              </div>
              <div className="border rounded-lg p-4 text-center">
                <img
                  src="/armada/toyota-all-new-avanza.webp"
                  alt="Sewa Toyota Avanza di Bali, pilihan terfavorit wisatawan"
                  className="w-full h-auto mb-2"
                />
                <h3 className="text-lg font-semibold">Toyota Avanza</h3>
                <p className="text-sm text-muted-foreground">
                  MPV, 7 Penumpang
                </p>
              </div>
              <div className="border rounded-lg p-4 text-center">
                <img
                  src="/armada/hiace-premio-luxury.webp"
                  alt="Sewa Toyota Hiace Luxury di Bali untuk perjalanan rombongan"
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
                  Apakah bisa sewa mobil matic di Bali?
                </h3>
                <p className="text-muted-foreground">
                  Tentu, kami menyediakan beragam pilihan mobil matic yang
                  sangat cocok untuk menjelajahi jalanan Bali yang bervariasi.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-lg">
                  Bagaimana dengan jangkauan layanan sewa mobil di Bali?
                </h3>
                <p className="text-muted-foreground">
                  Kami melayani seluruh area populer di Bali, termasuk Kuta,
                  Seminyak, Denpasar, Ubud, dan sekitarnya. Anda bisa menjemput
                  atau dijemput di lokasi yang disepakati.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-lg">
                  Bagaimana cara memesan layanan sewa mobil di Bali?
                </h3>
                <p className="text-muted-foreground">
                  Proses pemesanan sangat mudah. Anda bisa menghubungi tim
                  layanan pelanggan kami melalui WhatsApp atau telepon. Berikan
                  tanggal, durasi, dan jenis mobil yang Anda inginkan. Tim kami
                  akan membantu Anda dengan cepat.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-lg">
                  Apa saja persyaratan untuk sewa mobil lepas kunci?
                </h3>
                <p className="text-muted-foreground">
                  Kami memerlukan salinan KTP dan SIM untuk verifikasi. Syarat
                  dan ketentuan lengkap dapat Anda lihat di{" "}
                  <a href="/terms" className="text-primary hover:underline">
                    halaman persyaratan
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
