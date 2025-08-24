import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "Sewa Toyota Hiace Medan - Armada Terbaik untuk Rombongan",
  description:
    "Rental Toyota Hiace di Medan untuk perjalanan rombongan, wisata, dan acara kantor. Tersedia Hiace Commuter dan Hiace Premio dengan kapasitas besar dan kenyamanan maksimal. Layanan dengan sopir profesional.",
  keywords: [
    "sewa hiace medan",
    "rental hiace medan",
    "sewa hiace commuter medan",
    "rental hiace premio medan",
    "sewa mobil rombongan medan",
  ],
  openGraph: {
    title: "Sewa Toyota Hiace Medan - Armada Terbaik untuk Rombongan",
    description:
      "Rental Toyota Hiace di Medan dengan kapasitas 14-16 penumpang. Layanan profesional dengan sopir untuk kenyamanan dan keamanan rombongan Anda.",
  },
};

export default function Page() {
  return (
    <main>
      <section className="py-12 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-center md:text-left">
            Sewa Toyota Hiace di Medan | Nyaman untuk Rombongan Anda
          </h1>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto md:mx-0">
            Toyota Hiace adalah solusi transportasi terbaik untuk perjalanan
            grup di Medan. Dengan kapasitas hingga 16 penumpang, mobil ini
            sangat ideal untuk wisata keluarga, acara kantor, atau antar jemput
            rombongan dari Bandara Kualanamu. Kami menawarkan unit Hiace
            Commuter dan Hiace Premio dengan kondisi prima dan sopir yang
            berpengalaman.
          </p>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 items-center">
            <div className="p-6 bg-white rounded-lg shadow-sm">
              <h2 className="text-xl font-semibold mb-2 text-primary">
                Kapasitas Maksimal, Kenyamanan Optimal
              </h2>
              <p className="text-muted-foreground">
                Jangan khawatir tentang ruang. Hiace kami dirancang untuk
                memberikan kenyamanan maksimal bagi setiap penumpang. Ruang kaki
                yang lega, kursi yang empuk, dan sistem pendingin udara yang
                sejuk akan membuat perjalanan panjang Anda terasa menyenangkan.
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-sm">
              <h2 className="text-xl font-semibold mb-2 text-primary">
                Sopir Profesional yang Menguasai Medan
              </h2>
              <p className="text-muted-foreground">
                Layanan{" "}
                <strong className="text-primary-600">
                  sewa Hiace di Medan dengan sopir
                </strong>{" "}
                kami akan memberikan ketenangan. Sopir kami adalah ahli dalam
                menavigasi rute-rute terbaik, menghemat waktu Anda, dan
                memastikan perjalanan yang aman.
              </p>
            </div>
          </div>

          <div className="mt-16 bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">
              Mengapa Memilih Hiace untuk Rombongan di Medan?
            </h2>
            <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
              <div className="text-center">
                <div className="bg-primary-500 text-white rounded-full h-16 w-16 flex items-center justify-center mx-auto mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <h3 className="font-semibold text-lg mb-1">
                  Kapasitas Penumpang Besar
                </h3>
                <p className="text-sm text-muted-foreground">
                  Angkut hingga 16 orang dengan nyaman.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-primary-500 text-white rounded-full h-16 w-16 flex items-center justify-center mx-auto mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9.75 17L9.25 10m0 0a1 1 0 011-1h4a1 1 0 011 1V17m0 0a1 1 0 01-1 1H10a1 1 0 01-1-1v-6a1 1 0 011-1h4a1 1 0 011 1v6zM9 20h6a1 1 0 001-1v-4H8v4a1 1 0 001 1z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 21a9 9 0 100-18 9 9 0 000 18z"
                    />
                  </svg>
                </div>
                <h3 className="font-semibold text-lg mb-1">
                  Perjalanan Nyaman
                </h3>
                <p className="text-sm text-muted-foreground">
                  Kursi ergonomis dan AC yang dingin.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-primary-500 text-white rounded-full h-16 w-16 flex items-center justify-center mx-auto mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <h3 className="font-semibold text-lg mb-1">
                  Sopir Profesional
                </h3>
                <p className="text-sm text-muted-foreground">
                  Aman, tepat waktu, dan menguasai rute.
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
                  Berapa harga sewa Hiace di Medan?
                </h3>
                <p className="text-muted-foreground">
                  Harga sewa Hiace bervariasi tergantung durasi dan rute
                  perjalanan. Harga yang kami tawarkan sudah termasuk mobil,
                  bensin, dan sopir.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-lg">
                  Apakah bisa sewa Hiace untuk perjalanan ke luar kota?
                </h3>
                <p className="text-muted-foreground">
                  Tentu. Kami melayani perjalanan ke luar kota, seperti ke Danau
                  Toba, Berastagi, atau destinasi wisata lainnya. Silakan
                  hubungi kami untuk paket tur khusus.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
