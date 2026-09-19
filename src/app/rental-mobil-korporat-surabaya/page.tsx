import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "Rental Mobil Korporat Surabaya - Sewa Mobil Perusahaan | PT.VRN",
  description:
    "Layanan rental mobil korporat di Surabaya untuk kebutuhan perusahaan. Menyediakan armada terpercaya dengan sopir profesional untuk meeting, event, dan operasional bisnis.",
  keywords: [
    "rental mobil korporat surabaya",
    "sewa mobil perusahaan surabaya",
    "rental mobil bisnis surabaya",
    "sewa mobil untuk kantor surabaya",
    "rental mobil profesional surabaya",
    "sewa mobil executive surabaya",
  ],
  openGraph: {
    title: "Rental Mobil Korporat Surabaya - Sewa Mobil Perusahaan",
    description:
      "Solusi rental mobil terpercaya untuk kebutuhan korporat dan bisnis di Surabaya. Armada premium dengan layanan profesional.",
  },
};

export default function Page() {
  return (
    <main>
      <section className="relative h-[60vh] flex items-center justify-center text-center bg-white text-gray-900">
        <img
          src="https://images.tokopedia.net/blog-tokopedia-com/uploads/2018/04/wisata-surabaya.jpg"
          alt="Rental Mobil Korporat Surabaya"
          className="absolute inset-0 w-full h-full object-cover z-0 opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent z-10"></div>
        <div className="relative z-20 p-6">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-wide mb-4 drop-shadow-md">
            Rental Mobil Korporat Surabaya
          </h1>
          <p className="text-xl md:text-2xl font-light max-w-2xl mx-auto drop-shadow-sm">
            Solusi Premium untuk Kebutuhan Bisnis & Perusahaan
          </p>
          <a
            href="https://wa.me/6282363389893"
            className="mt-8 inline-block bg-primary-600 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:bg-primary-700 transition-colors bg-blue-700"
          >
            Konsultasi Sekarang
          </a>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">
              Mengapa Memilih Layanan Rental Korporat Kami?
            </h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              Kami memahami kebutuhan khusus perusahaan untuk layanan
              transportasi yang handal, profesional, dan dapat diandalkan untuk
              berbagai aktivitas bisnis.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6 bg-white rounded-lg shadow-sm">
              <h3 className="text-2xl font-semibold mb-2 text-primary">
                Sopir Profesional
              </h3>
              <p className="text-muted-foreground">
                Driver berpengalaman dengan seragam rapi dan perilaku
                profesional untuk menggambarkan citra positif perusahaan Anda.
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-sm">
              <h3 className="text-2xl font-semibold mb-2 text-primary">
                Armada Premium
              </h3>
              <p className="text-muted-foreground">
                Kendaraan terawat dengan kondisi prima, mulai dari sedan
                executive hingga kendaraan mewah untuk kebutuhan VIP.
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-sm">
              <h3 className="text-2xl font-semibold mb-2 text-primary">
                Layanan Fleksibel
              </h3>
              <p className="text-muted-foreground">
                Dapat disesuaikan dengan jadwal dan kebutuhan spesifik
                perusahaan, mulai dari harian hingga kontrak jangka panjang.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <img
                src="https://d1g6w7sntckt92.cloudfront.net/public/images/color_option_images/UC3d0ojsFr6ZPw2vCizzpIrsU4sZAuw1SYoMdCH2.png"
                alt="Rental Mobil Executive Surabaya"
                className="rounded-xl shadow-lg w-full h-auto"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-4">
                Armada Executive untuk Kebutuhan Korporat
              </h2>
              <p className="text-muted-foreground mb-4">
                Kami menyediakan kendaraan premium yang cocok untuk berbagai
                acara perusahaan, meeting eksekutif, dan operasional bisnis.
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>
                  <strong className="text-primary-600">Sedan Executive:</strong>{" "}
                  Untuk meeting bisnis dan perjalanan dinas.
                </li>
                <li>
                  <strong className="text-primary-600">SUV Premium:</strong>{" "}
                  Kendaraan nyaman untuk perjalanan jarak jauh atau tamuVIP.
                </li>
                <li>
                  <strong className="text-primary-600">
                    Alphard/Vellfire:
                  </strong>{" "}
                  Kendaraan mewah untuk tamu penting dan acara khusus.
                </li>
                <li>
                  <strong className="text-primary-600">Hiace/ELF:</strong> Untuk
                  angkutan karyawan atau tamu dalam jumlah besar.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">Layanan Korporat Kami</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3 text-primary">
                Airport Transfer executivos
              </h3>
              <p className="text-muted-foreground">
                Layanan antar jemput tamu atau karyawan dari/ke Bandara Juanda
                dengan kendaraan premium dan sopir berpenampilan profesional.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3 text-primary">
                Meeting & Conference Support
              </h3>
              <p className="text-muted-foreground">
                Dukungan transportasi untuk acara meeting, conference, atau
                seminar perusahaan dengan fleet yang dapat diandalkan.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3 text-primary">
                Operational Mobility
              </h3>
              <p className="text-muted-foreground">
                Solusi transportasi untuk kebutuhan operasional harian
                perusahaan, termasuk kunjungan klien dan aktivitas lapangan.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3 text-primary">
                Event & Corporate Gathering
              </h3>
              <p className="text-muted-foreground">
                Layanan transportasi untuk acara perusahaan, gathering, atau
                even khusus dengan armada yang dapat disesuaikan dengan
                kebutuhan.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-blue-900 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Bergabunglah dengan Perusahaan Terpercaya
          </h2>
          <p className="text-blue-100 max-w-xl mx-auto mb-8">
            Numerous perusahaan di Surabaya telah mempercayai layanan rental
            mobil korporat kami. Nikmati layanan premium dengan harga yang
            kompetitif.
          </p>
          <a
            href="https://wa.me/6282363389893"
            className="inline-block bg-green-500 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:bg-green-600 transition-colors"
          >
            Hubungi Tim Korporat
          </a>
        </div>
      </section>
    </main>
  );
}
