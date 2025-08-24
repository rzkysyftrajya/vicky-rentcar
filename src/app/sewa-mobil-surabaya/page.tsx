import { type Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Sewa Mobil Surabaya - Rental Murah Lepas Kunci & Dengan Sopir | PT.VRN",
  description:
    "Pusat sewa mobil di Surabaya dengan harga murah. Menyediakan layanan rental mobil lepas kunci 24 jam atau dengan sopir. Armada lengkap, terawat untuk wisata dan bisnis di Surabaya.",
  keywords: [
    "sewa mobil surabaya",
    "rental mobil surabaya",
    "sewa mobil murah surabaya",
    "rental mobil lepas kunci surabaya",
    "sewa mobil dengan sopir surabaya",
    "sewa mobil di surabaya",
    "sewa fortuner surabaya",
    "sewa mobil bandara juanda",
  ],
  openGraph: {
    title: "Sewa Mobil Surabaya - Rental Murah Lepas Kunci & Dengan Sopir",
    description:
      "Pusat sewa mobil di Surabaya dengan harga murah. Menyediakan layanan rental mobil lepas kunci 24 jam atau dengan sopir profesional.",
  },
};

export default function Page() {
  return (
    <main>
      <section className="relative h-[60vh] flex items-center justify-center text-center bg-white text-gray-900">
        <img
          src="https://images.tokopedia.net/blog-tokopedia-com/uploads/2018/04/wisata-surabaya.jpg"
          alt="Sewa Mobil Surabaya"
          className="absolute inset-0 w-full h-full object-cover z-0 opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent z-10"></div>
        <div className="relative z-20 p-6">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-wide mb-4 drop-shadow-md">
            Sewa Mobil Surabaya
          </h1>
          <p className="text-xl md:text-2xl font-light max-w-2xl mx-auto drop-shadow-sm">
            Layanan Terpercaya untuk Perjalanan Bisnis & Wisata
          </p>
          <a
            href="https://wa.me/6282363389893"
            className="mt-8 inline-block bg-primary-600 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:bg-primary-700 transition-colors bg-blue-700"
          >
            Pesan Sekarang
          </a>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">
              Mengapa Sewa Mobil di Surabaya dengan Kami?
            </h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              Kami menyediakan berbagai pilihan mobil yang terawat dengan harga
              kompetitif untuk segala kebutuhan Anda di Surabaya.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6 bg-white rounded-lg shadow-sm">
              <h3 className="text-2xl font-semibold mb-2 text-primary">
                Antar Jemput Bandara
              </h3>
              <p className="text-muted-foreground">
                Layanan profesional dari dan ke Bandara Juanda (SUB). Sopir kami
                siap siaga menjemput Anda tepat waktu.
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-sm">
              <h3 className="text-2xl font-semibold mb-2 text-primary">
                Lepas Kunci 24 Jam
              </h3>
              <p className="text-muted-foreground">
                Dapatkan kebebasan penuh menjelajahi kota. Syarat mudah dan
                proses cepat untuk layanan **sewa mobil lepas kunci Surabaya**.
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-sm">
              <h3 className="text-2xl font-semibold mb-2 text-primary">
                Tour Wisata
              </h3>
              <p className="text-muted-foreground">
                Jelajahi destinasi wisata populer di Jawa Timur seperti Malang,
                Bromo, atau Jember dengan sopir berpengalaman.
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
                alt="Sewa Innova Surabaya"
                className="rounded-xl shadow-lg w-full h-auto"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-4">
                Armada Lengkap untuk Semua Kebutuhan
              </h2>
              <p className="text-muted-foreground mb-4">
                Kami menyediakan berbagai jenis mobil yang sesuai dengan
                kebutuhan Anda, dari sedan hingga bus untuk rombongan besar.
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>
                  <strong className="text-primary-600">Avanza:</strong> Ekonomis
                  untuk keluarga atau perjalanan singkat.
                </li>
                <li>
                  <strong className="text-primary-600">Innova:</strong> Lebih
                  nyaman dan luas untuk perjalanan bisnis.
                </li>
                <li>
                  <strong className="text-primary-600">Hiace:</strong> Pilihan
                  ideal untuk rombongan wisata atau tour.
                </li>
                <li>
                  <strong className="text-primary-600">
                    Alphard/Fortuner:
                  </strong>{" "}
                  Kendaraan premium untuk kebutuhan VIP.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-100 py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Hubungi Kami untuk Penawaran Terbaik
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto mb-8">
            Jadikan perjalanan Anda di Surabaya lebih mudah dan nyaman.
            Konsultasikan kebutuhan Anda kepada kami.
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
