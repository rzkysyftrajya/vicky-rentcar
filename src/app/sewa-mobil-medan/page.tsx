import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "Sewa Mobil Medan - Rental Murah Lepas Kunci & Dengan Sopir | PT.VRN",
  description:
    "Pusat sewa mobil di Medan dengan harga murah. Menyediakan layanan rental mobil lepas kunci 24 jam atau dengan sopir. Armada lengkap dan terawat untuk wisata, bisnis, atau perjalanan dinas.",
  keywords: [
    "sewa mobil medan",
    "rental mobil medan",
    "sewa mobil murah medan",
    "rental mobil lepas kunci medan",
    "sewa mobil medan dengan supir",
    "sewa mobil harian medan",
    "sewa mobil bulanan medan",
    "rentcar medan",
    "sewa kereta medan",
    "sewa mobil perjalanan dinas medan",
    "sewa mobil medan 24 jam",
  ],
  openGraph: {
    title: "Sewa Mobil Medan - Rental Murah Lepas Kunci & Dengan Sopir",
    description:
      "Pusat sewa mobil di Medan dengan harga murah. Menyediakan layanan rental mobil lepas kunci 24 jam atau dengan sopir profesional.",
  },
};

export default function Page() {
  return (
    <main>
      <section className="py-12 md:py-24">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-center md:text-left">
            Sewa Mobil Medan: Lepas Kunci & Dengan Sopir Profesional
          </h1>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto md:mx-0">
            Selamat datang di PT. VICKY RENTCAR NUSANTARA, solusi terbaik untuk
            kebutuhan{" "}
            <strong className="text-primary-600">sewa mobil di Medan</strong>.
            Kami menyediakan armada lengkap mulai dari MPV keluarga, SUV
            tangguh, hingga mobil mewah untuk perjalanan bisnis Anda. Dengan
            pilihan lepas kunci atau layanan sopir profesional, kami memastikan
            setiap perjalanan Anda di ibukota Sumatera Utara ini berjalan
            lancar, aman, dan nyaman.
          </p>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 border rounded-lg shadow-sm hover:shadow-lg transition-all duration-300">
              <h2 className="text-xl font-semibold mb-2 text-primary">
                Kebebasan Penuh dengan Lepas Kunci
              </h2>
              <p className="text-muted-foreground">
                Jelajahi setiap sudut kota Medan dan destinasi sekitarnya
                seperti Berastagi atau Danau Toba dengan leluasa. Kami
                menawarkan{" "}
                <strong className="text-primary-600">
                  rental mobil lepas kunci Medan
                </strong>{" "}
                dengan proses yang mudah dan cepat. Cukup siapkan dokumen
                seperti KTP dan SIM, dan mobil impian Anda siap dibawa pulang.
              </p>
              <p className="text-muted-foreground mt-2">
                Dengan mobil sewaan, Anda bisa dengan mudah memulai perjalanan
                dari kota dan langsung menuju keindahan alam seperti Berastagi
                untuk melihat Gunung Sibayak dan Gundaling, atau melanjutkan
                perjalanan hingga ke Danau Toba yang memesona.
              </p>
            </div>
            <div className="p-6 border rounded-lg shadow-sm hover:shadow-lg transition-all duration-300">
              <h2 className="text-xl font-semibold mb-2 text-primary">
                Perjalanan Nyaman dengan Sopir
              </h2>
              <p className="text-muted-foreground">
                Khusus untuk Anda yang ingin bersantai atau fokus pada urusan
                bisnis, layanan{" "}
                <strong className="text-primary-600">
                  sewa mobil dengan sopir di Medan
                </strong>{" "}
                adalah pilihan tepat. Sopir kami adalah penduduk lokal yang
                berpengalaman, ramah, dan menguasai rute-rute terbaik, termasuk
                saat menghindari kemacetan. Kami juga melayani permintaan{" "}
                <a href="/tour-guide" className="text-primary hover:underline">
                  tour guide profesional
                </a>{" "}
                untuk menemani perjalanan Anda.
              </p>
            </div>
            <div className="p-6 border rounded-lg shadow-sm hover:shadow-lg transition-all duration-300">
              <h2 className="text-xl font-semibold mb-2 text-primary">
                Antar Jemput Bandara Kualanamu (KNO)
              </h2>
              <p className="text-muted-foreground">
                Kami menyediakan layanan jemputan dari{" "}
                <a
                  href="/sewa-mobil-bandara-kualanamu"
                  className="text-primary hover:underline"
                >
                  Bandara Kualanamu
                </a>{" "}
                langsung menuju hotel atau lokasi tujuan Anda. Hindari antrean
                panjang dan nikmati kenyamanan begitu tiba. Layanan ini juga
                tersedia untuk perjalanan kembali ke bandara.
              </p>
            </div>
          </div>

          <div className="mt-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center md:text-left">
              Armada Unggulan Kami di Medan
            </h2>
            <p className="text-muted-foreground text-center md:text-left mb-8">
              Pilihan mobil yang paling banyak diminati oleh pelanggan kami di
              Medan, cocok untuk berbagai kebutuhan.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              <div className="border rounded-lg p-4 text-center">
                <img
                  src="/armada/toyota-all-new-avanza.webp"
                  alt="Sewa Toyota Avanza terbaru, cocok untuk keluarga di Medan"
                  className="w-full h-auto mb-2"
                />
                <h3 className="text-lg font-semibold">Toyota Avanza</h3>
                <p className="text-sm text-muted-foreground">
                  MPV, 7 Penumpang
                </p>
              </div>
              <div className="border rounded-lg p-4 text-center">
                <img
                  src="/armada/innova-reborn.webp"
                  alt="Rental Toyota Innova Reborn untuk perjalanan bisnis di Medan"
                  className="w-full h-auto mb-2"
                />
                <h3 className="text-lg font-semibold">Toyota Innova</h3>
                <p className="text-sm text-muted-foreground">
                  MPV, 7 Penumpang
                </p>
              </div>
              <div className="border rounded-lg p-4 text-center">
                <img
                  src="/armada/xpander.webp"
                  alt="Sewa Mitsubishi Xpander di Medan, mobil tangguh dan nyaman"
                  className="w-full h-auto mb-2"
                />
                <h3 className="text-lg font-semibold">Mitsubishi Xpander</h3>
                <p className="text-sm text-muted-foreground">
                  MPV, 7 Penumpang
                </p>
              </div>
              <div className="border rounded-lg p-4 text-center">
                <img
                  src="/armada/hiace-premio.webp"
                  alt="Sewa Toyota Hiace Premio di Medan, cocok untuk rombongan"
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
                  Bagaimana cara sewa mobil di Medan di PT. VRN?
                </h3>
                <p className="text-muted-foreground">
                  Prosesnya sangat mudah. Anda bisa menghubungi kami melalui
                  WhatsApp, telepon, atau mengisi formulir pemesanan di website.
                  Tim kami akan segera membantu Anda.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-lg">
                  Apakah bisa sewa mobil di Medan untuk ke luar kota?
                </h3>
                <p className="text-muted-foreground">
                  Tentu. Kami melayani perjalanan ke luar kota, termasuk ke
                  destinasi populer seperti{" "}
                  <a
                    href="/sewa-mobil-ke-danau-toba"
                    className="text-primary hover:underline"
                  >
                    Danau Toba
                  </a>
                  , Berastagi, dan kota-kota lain di Sumatera Utara. Silakan
                  konsultasikan rute Anda dengan tim kami.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-lg">
                  Berapa harga sewa mobil per hari?
                </h3>
                <p className="text-muted-foreground">
                  Harga sewa bervariasi tergantung jenis mobil, durasi, dan
                  layanan (lepas kunci atau dengan sopir). Untuk informasi harga
                  terbaru, silakan hubungi kontak kami.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-lg">
                  Apa saja persyaratan untuk sewa mobil lepas kunci?
                </h3>
                <p className="text-muted-foreground">
                  Untuk keamanan dan kenyamanan bersama, kami memerlukan salinan
                  dokumen pribadi yang valid seperti KTP, SIM, dan KK. Untuk
                  syarat dan ketentuan lengkap, silakan kunjungi{" "}
                  <a href="/terms" className="text-primary hover:underline">
                    halaman ini
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
