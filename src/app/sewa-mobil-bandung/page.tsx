import { type Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Sewa Mobil Bandung - Rental Murah Lepas Kunci & Dengan Sopir | PT.VRN",
  description:
    "Pusat sewa mobil di Bandung dengan harga murah. Menyediakan layanan rental mobil lepas kunci 24 jam atau dengan sopir. Armada lengkap dan terawat untuk wisata dan bisnis di Bandung.",
  keywords: [
    "sewa mobil bandung",
    "rental mobil bandung",
    "sewa mobil murah bandung",
    "rental mobil lepas kunci bandung",
    "sewa mobil dengan sopir bandung",
    "sewa mobil di bandung",
    "sewa pajero bandung",
    "sewa mobil bandara husein sastranegara",
  ],
  openGraph: {
    title: "Sewa Mobil Bandung - Rental Murah Lepas Kunci & Dengan Sopir",
    description:
      "Pusat sewa mobil di Bandung dengan harga murah. Menyediakan layanan rental mobil lepas kunci 24 jam atau dengan sopir profesional.",
  },
};

export default function Page() {
  return (
    <main>
      <section className="relative h-[60vh] flex items-center justify-center text-center bg-gray-800 text-white">
        <div className="absolute inset-0 bg-[url('/armada/bandung-bg.webp')] bg-cover bg-center opacity-30 z-0"></div>
        <div className="relative z-10 p-6">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-wide mb-4 drop-shadow-md">
            Sewa Mobil Bandung
          </h1>
          <p className="text-xl md:text-2xl font-light max-w-2xl mx-auto drop-shadow-sm">
            Partner Terpercaya untuk Jelajahi Kota Kembang
          </p>
          <a
            href="https://wa.me/6282363389893"
            className="mt-8 inline-block bg-primary-600 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:bg-primary-700 transition-colors"
          >
            Hubungi Kami
          </a>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Pilihan Terbaik untuk Liburan & Bisnis
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 border rounded-lg shadow-sm text-center">
              <h3 className="text-2xl font-semibold mb-2 text-primary">
                Untuk Wisata
              </h3>
              <p className="text-muted-foreground">
                Jelajahi keindahan Lembang, Ciwidey, atau Kawah Putih dengan
                nyaman. Armada kami siap untuk segala medan.
              </p>
            </div>
            <div className="p-6 border rounded-lg shadow-sm text-center">
              <h3 className="text-2xl font-semibold mb-2 text-primary">
                Untuk Bisnis
              </h3>
              <p className="text-muted-foreground">
                Hadiri pertemuan atau konferensi dengan mobil yang
                representatif. Kami menyediakan layanan dengan sopir
                profesional.
              </p>
            </div>
            <div className="p-6 border rounded-lg shadow-sm text-center">
              <h3 className="text-2xl font-semibold mb-2 text-primary">
                Antar Jemput Bandara
              </h3>
              <p className="text-muted-foreground">
                Kami siap menjemput Anda di Bandara Husein Sastranegara (BDO)
                atau stasiun kereta api.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row-reverse items-center gap-12">
            <div className="md:w-1/2">
              <img
                src="https://d1g6w7sntckt92.cloudfront.net/public/images/color_option_images/lORk6o1wzA2gjE0AET8Col2y7XwsqB55KlvyzaPr.png"
                alt="Sewa Avanza di Bandung"
                className="rounded-xl shadow-lg w-full h-auto"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-4">
                Rental Lepas Kunci & Dengan Sopir
              </h2>
              <p className="text-muted-foreground mb-4">
                Kami menawarkan fleksibilitas penuh. Pilih layanan **sewa mobil
                lepas kunci Bandung** untuk kebebasan Anda atau **sewa dengan
                sopir** untuk kenyamanan maksimal.
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Proses pemesanan mudah dan cepat.</li>
                <li>Mobil terawat dan bersih.</li>
                <li>Harga sewa kompetitif.</li>
                <li>Layanan pelanggan 24 jam.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Pesan Mobil Anda Sekarang
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto mb-8">
            Hubungi kami untuk konsultasi gratis dan penawaran harga terbaik.
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
