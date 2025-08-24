import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "Sewa Mobil Alphard Jakarta - Rental Mewah dengan Sopir VIP",
  description:
    "Rental mobil Toyota Alphard di Jakarta untuk kebutuhan VIP, bisnis, atau pernikahan. Layanan premium dengan sopir profesional. Harga sewa Alphard terbaik di Jakarta.",
  keywords: [
    "sewa alphard jakarta",
    "rental alphard jakarta",
    "sewa mobil mewah jakarta",
    "rental mobil vip jakarta",
    "sewa mobil pengantin jakarta",
    "sewa mobil premium jakarta",
  ],
  openGraph: {
    title: "Sewa Mobil Alphard Jakarta - Rental Mewah dengan Sopir VIP",
    description:
      "Rental mobil Toyota Alphard di Jakarta untuk kebutuhan VIP, bisnis, atau pernikahan dengan layanan premium.",
  },
};

export default function Page() {
  return (
    <main className="bg-white">
      <section className="relative h-[60vh] md:h-[70vh] flex items-center justify-center text-center">
        <img
          src="/armada/alphard-new.webp"
          alt="Toyota Alphard Mewah di Jakarta"
          className="absolute inset-0 w-full h-full object-cover z-0 opacity-80"
        />
        <div className="absolute inset-0 bg-black/60 z-10"></div>
        <div className="relative z-20 text-white p-6">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-wide mb-4 drop-shadow-md">
            Sewa Toyota Alphard di Jakarta
          </h1>
          <p className="text-xl md:text-2xl font-light max-w-2xl mx-auto drop-shadow-sm">
            Layanan Premium untuk Perjalanan Bisnis & Acara Khusus
          </p>
          <a
            href="#contact"
            className="mt-8 inline-block bg-primary-600 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:bg-primary-700 transition-colors"
          >
            Pesan Sekarang
          </a>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Mengapa Alphard Pilihan VIP di Jakarta?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 border rounded-lg shadow-sm">
              <div className="flex justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12 text-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Kenyamanan & Privasi
              </h3>
              <p className="text-muted-foreground">
                Interior mewah dengan captain seat, memastikan kenyamanan
                maksimal untuk setiap perjalanan Anda.
              </p>
            </div>
            <div className="text-center p-6 border rounded-lg shadow-sm">
              <div className="flex justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12 text-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 9v2m0 0v2m0-2h2m-2 0H7m-2 0H3m6 0V5m0 4h2m0-4h2m-2 4v2m-2-2h2m-2 0H3m6 0V5"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Perjalanan Tepat Waktu
              </h3>
              <p className="text-muted-foreground">
                Sopir profesional kami tahu cara terbaik menavigasi lalu lintas
                Jakarta, memastikan Anda selalu tepat waktu.
              </p>
            </div>
            <div className="text-center p-6 border rounded-lg shadow-sm">
              <div className="flex justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12 text-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 11c0 3.313-2.687 6-6 6-3.313 0-6-2.687-6-6s2.687-6 6-6 6 2.687 6 6z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Layanan Sopir VIP</h3>
              <p className="text-muted-foreground">
                Sopir kami tidak hanya mengemudi, mereka adalah asisten pribadi
                yang ramah, sopan, dan menjaga privasi Anda.
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
                src="https://d1g6w7sntckt92.cloudfront.net/public/images/feature_image/7XXmrillq5UYkTE3iIaSx2pHikYLrVnkF4s5DetZ.jpg"
                alt="Interior VIP Toyota Alphard"
                className="rounded-xl shadow-lg w-full h-auto"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-4">
                Fasilitas Mewah untuk Perjalanan Anda
              </h2>
              <ul className="space-y-4 text-muted-foreground text-lg">
                <li className="flex items-start gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-primary flex-shrink-0 mt-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>
                    <strong>Kursi Captain Seat:</strong> Nikmati kenyamanan
                    seperti di pesawat kelas satu dengan fitur pijat dan
                    reclining.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-primary flex-shrink-0 mt-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>
                    <strong>Sistem Hiburan Premium:</strong> Layar monitor besar
                    dan audio berkualitas tinggi untuk relaksasi.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-primary flex-shrink-0 mt-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>
                    <strong>Kabin Kedap Suara:</strong> Jauh dari kebisingan
                    lalu lintas, cocok untuk fokus atau beristirahat.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-12" id="contact">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Pesan Alphard Mewah Anda Sekarang
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto mb-8">
            Hubungi tim kami untuk mendapatkan penawaran eksklusif dan
            konsultasi gratis untuk kebutuhan transportasi Anda.
          </p>
          {/* Di sini Anda bisa tambahkan form kontak atau tombol WhatsApp */}
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
