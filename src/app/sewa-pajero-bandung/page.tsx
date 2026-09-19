import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "Sewa Mobil Pajero Bandung - Rental SUV Tangguh untuk Petualangan",
  description:
    "Rental mobil Mitsubishi Pajero Sport di Bandung. SUV tangguh untuk menjelajahi Lembang, Ciwidey, dan destinasi petualangan lainnya. Tersedia dengan sopir berpengalaman.",
  keywords: [
    "sewa pajero bandung",
    "rental pajero bandung",
    "sewa suv bandung",
    "rental mobil petualangan bandung",
    "sewa mobil di bandung",
    "rental mobil 4x4 bandung",
  ],
  openGraph: {
    title: "Sewa Mobil Pajero Bandung - Rental SUV Tangguh untuk Petualangan",
    description:
      "Rental mobil Mitsubishi Pajero Sport di Bandung. SUV tangguh untuk menjelajahi Lembang, Ciwidey, dan destinasi petualangan lainnya.",
  },
};

export default function Page() {
  return (
    <main className="bg-gray-900 text-white">
      <section className="relative h-[60vh] md:h-[70vh] flex items-center justify-center text-center overflow-hidden">
        <img
          src="https://cdn.tatlerasia.com/tatlerasia/i/2025/06/04161905-abdul-ridwan-eqzy3ewwyla-unsplash_cover_1600x1067.jpeg"
          alt="Sewa Pajero Bandung"
          className="absolute inset-0 w-full h-full object-cover object-center z-0 opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent z-10"></div>
        <div className="relative z-20 p-6">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-wide mb-4 drop-shadow-md">
            Sewa Pajero Bandung
          </h1>
          <p className="text-xl md:text-2xl font-light max-w-3xl mx-auto drop-shadow-sm">
            SUV Tangguh untuk Petualangan di Dataran Tinggi Bandung
          </p>
          <a
            href="https://wa.me/6282363389893"
            className="mt-8 inline-block bg-primary-600 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:bg-primary-700 transition-colors"
          >
            Pesan Sekarang
          </a>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://storage.googleapis.com/gcmkscsp001/public/media-assets/9190c1c8-cfd0-4ea0-9d70-cd01eb29b395/conversions/zl2ttcugyhcvnoghemhllfb4unzuv4gevvxwsmdy-optimized.webp?GoogleAccessId=bsidevops%40gp-prod-mmksi-web-01.iam.gserviceaccount.com&Expires=1756625946&Signature=dUJ%2BPRlwFY7f0MmbXqkfAQmY42%2BPFV0ujm5JC%2BlunOGmlZPO1rW51I4K4UC5WSQKWf%2BetOJm1L56v78JY0DjaW8mzlF4Gb8TZCZPEEemgHK%2BZEcnAwhOXSOhJt6qdU0VmaCbPDmEsvf1JjSuq2S6EO%2BWStjmzlQnDo2pVuXHdAKZ2PEC1hZoJ0TZT4Y6Bb30YNUAa6e3TInoi%2BFELRZ8eDzSwkTc1S32%2Bps6ppgc52JFlCTtE%2B3rx%2Fhq4LfuYbg1O2SUrn1aQGvG5A%2BWBa90RN8ETEF1dSOVXZ7f29Vl%2FE2kahYxvKDPHbQqgT392wXdKC5GHFExguEfkbiPd9v5xQ%3D%3D"
                alt="Eksterior Mitsubishi Pajero Sport"
                className="rounded-xl shadow-lg w-full h-auto"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-4 text-primary-400">
                Tangguh di Segala Medan
              </h2>
              <p className="text-muted-foreground mb-4">
                Mitsubishi Pajero Sport adalah pilihan ideal untuk Anda yang
                ingin menjelajahi Bandung dan sekitarnya, termasuk area
                perbukitan seperti Lembang dan Ciwidey.
              </p>
              <ul className="space-y-4 text-muted-foreground text-lg">
                <li className="flex items-center gap-2">
                  <span className="text-primary-400">✓</span>
                  <span>
                    <strong>Performa Mesin Kuat:</strong> Mampu melewati
                    tanjakan dan jalanan menantang dengan mudah.
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-primary-400">✓</span>
                  <span>
                    <strong>Kabin Nyaman:</strong> Interior premium untuk
                    memastikan kenyamanan selama perjalanan panjang.
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-primary-400">✓</span>
                  <span>
                    <strong>Desain Sporty & Elegan:</strong> Cocok untuk
                    perjalanan bisnis maupun liburan keluarga.
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
            Layanan dengan Sopir Profesional
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Layanan sewa Pajero kami hadir dengan sopir yang berpengalaman dan
            menguasai rute wisata di Bandung. Anda bisa fokus menikmati
            perjalanan tanpa perlu khawatir.
          </p>
          <div className="flex flex-col md:flex-row justify-center items-center gap-8">
            <div className="p-6 bg-blue-700 rounded-lg">
              <h3 className="text-xl font-semibold mb-2 text-primary-400">
                Tour Ciwidey
              </h3>
              <p className="text-sm text-muted-foreground">
                Jelajahi Kawah Putih, Glamping, dan kebun teh dengan nyaman.
              </p>
            </div>
            <div className="p-6 bg-blue-700 rounded-lg">
              <h3 className="text-xl font-semibold mb-2 text-primary-400">
                Trip Lembang
              </h3>
              <p className="text-sm text-muted-foreground">
                Kunjungi Tangkuban Perahu, Farmhouse, dan The Great Asia Africa.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-900 py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Pesan Pajero Terbaik di Bandung
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto mb-8">
            Jadikan petualangan Anda di Bandung lebih berkesan dengan Pajero
            Sport. Hubungi tim kami sekarang.
          </p>
          <a
            href="https://wa.me/6282363389893"
            className="inline-block bg-primary-600 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:bg-primary-700 transition-colors bg-blue-600"
          >
            Hubungi Kami
          </a>
        </div>
      </section>
    </main>
  );
}
