import { type Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Sewa Mobil Bandara Kualanamu (KNO) - Rental Lepas Kunci & Dengan Sopir",
  description:
    "Jasa rental & sewa mobil di Bandara Kualanamu Medan (KNO) harga murah. Layanan antar jemput, lepas kunci 24 jam, atau dengan sopir. Pesan sekarang untuk penjemputan tepat waktu.",
  keywords: [
    "sewa mobil bandara kualanamu",
    "rental mobil kualanamu",
    "sewa mobil dekat bandara kualanamu",
    "sewa mobil di bandara kualanamu",
    "sewa mobil lepas kunci bandara kualanamu",
    "sewa mobil kualanamu ke danau toba",
    "rental mobil kualanamu ke brastagi",
    "sewa mobil kualanamu ke medan",
    "sewa mobil kualanamu ke berastagi",
    "sewa mobil kualanamu terdekat",
    "rental mobil terdekat di kualanamu",
  ],
  openGraph: {
    title: "Sewa Mobil Bandara Kualanamu (KNO) - Rental & Antar Jemput 24 Jam",
    description:
      "Rental mobil di Bandara Kualanamu (KNO) dengan sopir atau lepas kunci. Pilihan Avanza, Innova, Hiace. Harga kompetitif.",
  },
};

export default function Page() {
  return (
    <main>
      <section className="relative h-[50vh] flex items-center justify-center text-center text-white">
        <div className="absolute inset-0 bg-[url('https://img.okezone.com/content/2023/05/10/337/2811349/ternyata-ini-asal-usul-nama-bandara-kualanamu-Elpn0h3JG1.jpg')] bg-cover bg-center opacity-60 z-0"></div>
        <div className="relative z-10 p-6">
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-wide mb-4 drop-shadow-md">
            Sewa Mobil Bandara Kualanamu (KNO)
          </h1>
          <p className="text-xl md:text-2xl font-light max-w-xl mx-auto drop-shadow-sm">
            Layanan Antar Jemput 24 Jam, Cepat & Terpercaya
          </p>
          <a
            href="https://wa.me/6282363389893"
            className="mt-8 inline-block bg-blue-500 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:bg-blue-600 transition-colors"
          >
            Pesan Sekarang
          </a>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Mengapa Sewa Mobil di Bandara Kualanamu dengan Kami?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white rounded-lg shadow-sm">
              <div className="flex justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12 text-primary-500"
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
                Penjemputan Tepat Waktu
              </h3>
              <p className="text-muted-foreground">
                Tim kami memantau jadwal penerbangan secara real-time untuk
                memastikan sopir sudah menunggu Anda saat tiba di Bandara
                Kualanamu, menghindari keterlambatan dan kebingungan.
              </p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-sm">
              <div className="flex justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12 text-primary-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 10h18M7 15h10M3 5h18"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Pilihan Lepas Kunci & Sopir
              </h3>
              <p className="text-muted-foreground">
                Tentukan sendiri gaya perjalanan Anda. Pilih layanan{" "}
                <a
                  href="/sewa-mobil-medan"
                  className="text-primary hover:underline"
                >
                  sewa mobil lepas kunci di Bandara Kualanamu
                </a>{" "}
                untuk fleksibilitas penuh atau dengan sopir berpengalaman untuk
                kenyamanan maksimal.
              </p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-sm">
              <div className="flex justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12 text-primary-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Fleksibilitas Rute</h3>
              <p className="text-muted-foreground">
                Dari bandara, Anda bisa langsung menuju{" "}
                <a
                  href="/sewa-mobil-ke-danau-toba"
                  className="text-primary hover:underline"
                >
                  Danau Toba
                </a>
                , Berastagi, atau destinasi lainnya dengan mobil yang nyaman.
                Kami melayani berbagai rute perjalanan dinas maupun wisata.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Armada Terbaik untuk Penjemputan Anda
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Kami menyediakan berbagai jenis mobil yang siap menjemput Anda di
              Bandara Kualanamu, disesuaikan dengan jumlah penumpang dan
              kebutuhan.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="border rounded-lg p-6 text-center">
              <img
                src="/armada/toyota-all-new-avanza.webp"
                alt="Sewa Toyota Avanza di Bandara Kualanamu"
                className="w-full h-auto mb-4"
              />
              <h3 className="text-2xl font-semibold mb-2">Toyota Avanza</h3>
              <p className="text-muted-foreground">
                Pilihan terpopuler untuk keluarga atau rombongan kecil.
              </p>
            </div>
            <div className="border rounded-lg p-6 text-center">
              <img
                src="/armada/innova-reborn.webp"
                alt="Sewa Toyota Innova Reborn di Bandara Kualanamu"
                className="w-full h-auto mb-4"
              />
              <h3 className="text-2xl font-semibold mb-2">Toyota Innova</h3>
              <p className="text-muted-foreground">
                Lebih nyaman dan luas, ideal untuk perjalanan bisnis atau
                keluarga.
              </p>
            </div>
            <div className="border rounded-lg p-6 text-center">
              <img
                src="/armada/hiace-premio-luxury.webp"
                alt="Sewa Toyota Hiace di Bandara Kualanamu untuk rombongan besar"
                className="w-full h-auto mb-4"
              />
              <h3 className="text-2xl font-semibold mb-2">Toyota Hiace</h3>
              <p className="text-muted-foreground">
                Kendaraan terbaik untuk rombongan besar hingga 16 orang.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-12 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center">
            Pertanyaan Umum (FAQ)
          </h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-lg">
                Bagaimana prosedur penjemputan di Bandara Kualanamu?
              </h3>
              <p className="text-muted-foreground">
                Setelah Anda keluar dari area pengambilan bagasi, sopir kami
                akan menunggu Anda di area lobi kedatangan dengan membawa papan
                nama yang bertuliskan nama Anda. Silakan hubungi kami setelah
                penerbangan Anda mendarat.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg">
                Apakah bisa sewa mobil di Bandara Kualanamu tanpa sopir?
              </h3>
              <p className="text-muted-foreground">
                Tentu. Kami menawarkan layanan{" "}
                <a
                  href="/rental-mobil-lepas-kunci-medan"
                  className="text-primary hover:underline"
                >
                  sewa mobil lepas kunci
                </a>{" "}
                dengan prosedur yang mudah. Anda dapat mengambil mobil langsung
                di area bandara setelah melengkapi semua dokumen yang
                diperlukan.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg">
                Berapa harga sewa mobil dari Bandara Kualanamu ke kota Medan?
              </h3>
              <p className="text-muted-foreground">
                Harga bervariasi tergantung jenis mobil dan layanan (dengan
                sopir atau lepas kunci). Untuk harga pasti dan ketersediaan,
                Anda dapat menghubungi kami langsung melalui WhatsApp atau
                telepon.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-100 py-12" id="booking">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Pesan Sekarang & Dapatkan Mobil Anda di Bandara
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto mb-8">
            Hubungi kami untuk pemesanan cepat. Tim kami siap membantu Anda 24
            jam.
          </p>
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
