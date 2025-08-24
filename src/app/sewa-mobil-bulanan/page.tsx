import { type Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Sewa Mobil Bulanan se-Indonesia - Harga Murah untuk Korporat & Pribadi",
  description:
    "Sewa mobil bulanan di seluruh Indonesia (Medan, Jakarta, Surabaya, dll) dengan harga hemat. Solusi transportasi jangka panjang untuk kebutuhan perusahaan atau pribadi. Perawatan inklusif.",
  keywords: [
    "sewa mobil bulanan",
    "rental mobil bulanan",
    "sewa mobil perusahaan",
    "sewa mobil jangka panjang indonesia",
    "sewa mobil korporat",
    "sewa mobil kontrak",
  ],
  openGraph: {
    title:
      "Sewa Mobil Bulanan se-Indonesia - Harga Murah untuk Korporat & Pribadi",
    description:
      "Sewa mobil bulanan di seluruh Indonesia dengan harga hemat. Solusi transportasi jangka panjang untuk kebutuhan perusahaan atau pribadi.",
  },
};

export default function Page() {
  return (
    <main>
      <section className="py-16 md:py-24 bg-gray-900 text-white text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 drop-shadow">
            Sewa Mobil Bulanan se-Indonesia
          </h1>
          <p className="text-xl md:text-2xl max-w-2xl mx-auto font-light drop-shadow">
            Solusi Transportasi Jangka Panjang untuk Perusahaan & Pribadi
          </p>
          <a
            href="https://wa.me/6282363389893"
            className="mt-8 inline-block bg-primary-600 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:bg-primary-700 transition-colors"
          >
            Konsultasi Sekarang
          </a>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Keunggulan Sewa Mobil Bulanan
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-center">
            <div className="p-6 border rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-2 text-primary">
                Biaya Lebih Hemat
              </h3>
              <p className="text-muted-foreground">
                Harga sewa per hari jauh lebih murah dibandingkan sewa harian
                atau mingguan.
              </p>
            </div>
            <div className="p-6 border rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-2 text-primary">
                Perawatan Inklusif
              </h3>
              <p className="text-muted-foreground">
                Kami yang akan mengurus semua biaya perawatan, asuransi, dan
                pajak kendaraan.
              </p>
            </div>
            <div className="p-6 border rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-2 text-primary">
                Fleksibilitas Pilihan Armada
              </h3>
              <p className="text-muted-foreground">
                Tersedia berbagai jenis mobil, dari MPV, SUV, hingga kendaraan
                niaga untuk bisnis.
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
                src="https://d1g6w7sntckt92.cloudfront.net/public/images/color_option_images/Et2vNir4jDOI3x8AdWcas8vkuboHVoYagILs9ZfP.png"
                alt="Sewa Mobil untuk Korporat"
                className="rounded-xl shadow-lg w-full h-auto"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-4">
                Solusi Ideal untuk Korporat
              </h2>
              <p className="text-muted-foreground mb-4">
                Layanan sewa mobil bulanan untuk perusahaan** kami memberikan
                solusi efisien untuk kebutuhan operasional. Tanpa harus
                memikirkan biaya depresiasi, perawatan, atau asuransi, Anda bisa
                fokus pada bisnis inti.
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Manajemen armada yang lebih sederhana.</li>
                <li>Biaya operasional yang terukur.</li>
                <li>Mobil pengganti jika terjadi kendala.</li>
                <li>Laporan penggunaan kendaraan rutin.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row-reverse items-center gap-12">
            <div className="md:w-1/2">
              <img
                src="https://d1g6w7sntckt92.cloudfront.net/public/images/color_option_images/unVhEcDT9UUrXmtKqeluFgSeaWF8o7v8lkuDCFHM.png"
                alt="Sewa Mobil Bulanan Pribadi"
                className="rounded-xl shadow-lg w-full h-auto"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-4">
                Pilihan Nyaman untuk Pribadi
              </h2>
              <p className="text-muted-foreground mb-4">
                Bagi kebutuhan pribadi, sewa mobil bulanan adalah alternatif
                yang lebih fleksibel daripada membeli. Anda bisa berganti mobil
                sesuai kebutuhan atau mencoba berbagai model sebelum memutuskan
                membeli.
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Bebas dari biaya perawatan dan perbaikan.</li>
                <li>Fleksibilitas tanpa terikat kepemilikan.</li>
                <li>Proses administrasi yang mudah dan cepat.</li>
                <li>
                  Cocok untuk WFH (Work From Home) atau perjalanan pribadi
                  jangka panjang.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
