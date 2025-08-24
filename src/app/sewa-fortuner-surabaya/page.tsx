import { type Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Sewa Mobil Fortuner Surabaya - Rental SUV Gagah untuk Bisnis & Wisata",
  description:
    "Jasa rental mobil Toyota Fortuner di Surabaya. Pilihan SUV premium untuk perjalanan bisnis yang representatif atau wisata dengan keluarga. Layanan profesional dengan sopir.",
  keywords: [
    "sewa fortuner surabaya",
    "rental fortuner surabaya",
    "sewa suv surabaya",
    "rental mobil mewah surabaya",
    "sewa mobil di surabaya",
    "rental mobil 4x4 surabaya",
  ],
  openGraph: {
    title:
      "Sewa Mobil Fortuner Surabaya - Rental SUV Gagah untuk Bisnis & Wisata",
    description:
      "Jasa rental mobil Toyota Fortuner di Surabaya. Pilihan SUV premium untuk perjalanan bisnis atau wisata dengan keluarga.",
  },
};

export default function Page() {
  return (
    <main className="bg-gray-900 text-white">
      <section className="relative h-[60vh] md:h-[70vh] flex items-center justify-center text-center overflow-hidden">
        <img
          src="/armada/fortuner-surabaya-bg.webp"
          alt="Sewa Toyota Fortuner di Surabaya"
          className="absolute inset-0 w-full h-full object-cover object-center z-0 opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent z-10"></div>
        <div className="relative z-20 p-6">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-wide mb-4 drop-shadow-md">
            Sewa Toyota Fortuner Surabaya
          </h1>
          <p className="text-xl md:text-2xl font-light max-w-3xl mx-auto drop-shadow-sm">
            SUV Gagah untuk Petualangan & Perjalanan Bisnis Anda
          </p>
          <a
            href="#contact"
            className="mt-8 inline-block bg-primary-600 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:bg-primary-700 transition-colors"
          >
            Pesan Fortuner Sekarang
          </a>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://d1g6w7sntckt92.cloudfront.net/public/images/color_option_images/RKx0K110Q3HERHNKXqJ0BcW0W0sTwSSgEasYXbGj.png"
                alt="Eksterior Toyota Fortuner"
                className="rounded-xl shadow-lg w-full h-auto"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-4 text-primary">
                Keunggulan Fortuner untuk Jalanan Surabaya & Luar Kota
              </h2>
              <p className="text-muted-foreground mb-4">
                Toyota Fortuner adalah simbol kekuatan dan ketangguhan. Dengan
                desain eksterior yang gagah, mobil ini memberikan kesan
                profesional dan berwibawa, sangat cocok untuk menjemput klien
                penting atau menghadiri pertemuan bisnis.
              </p>
              <ul className="space-y-4 text-muted-foreground text-lg">
                <li className="flex items-center gap-2">
                  <span className="text-primary-400">✓</span>
                  <span>
                    <strong>Desain Gagah:</strong> Meningkatkan citra
                    profesional Anda di setiap perjalanan.
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-primary-400">✓</span>
                  <span>
                    <strong>Kenyamanan Maksimal:</strong> Kabin luas dan
                    suspensi yang stabil untuk perjalanan jauh.
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-primary-400">✓</span>
                  <span>
                    <strong>Performa Mesin Tangguh:</strong> Mampu melewati
                    segala medan, dari jalan perkotaan hingga perbukitan.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gray-800">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Layanan Fortuner dengan Sopir Profesional
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Kami menawarkan layanan sewa Fortuner di Surabaya dengan sopir yang
            berpengalaman. Anda bisa fokus pada perjalanan, sementara sopir kami
            yang mengurus navigasi dan keamanan.
          </p>
          <div className="flex flex-col md:flex-row justify-center items-center gap-8">
            <div className="p-6 bg-gray-700 rounded-lg">
              <h3 className="text-xl font-semibold mb-2 text-primary">
                Untuk Bisnis
              </h3>
              <p className="text-sm text-muted-foreground">
                Antar jemput klien, perjalanan dinas, dan urusan penting
                lainnya.
              </p>
            </div>
            <div className="p-6 bg-gray-700 rounded-lg">
              <h3 className="text-xl font-semibold mb-2 text-primary">
                Untuk Keluarga
              </h3>
              <p className="text-sm text-muted-foreground">
                Berlibur ke destinasi populer di Jawa Timur seperti Malang atau
                Bromo.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-900 py-12" id="contact">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Pesan Fortuner Terbaik di Surabaya
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto mb-8">
            Jadikan setiap perjalanan Anda berkesan dengan Toyota Fortuner.
            Hubungi tim kami sekarang.
          </p>
          <a
            href="https://wa.me/6282363389893"
            className="inline-block bg-primary-600 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:bg-primary-700 transition-colors"
          >
            Hubungi Kami
          </a>
        </div>
      </section>
    </main>
  );
}
