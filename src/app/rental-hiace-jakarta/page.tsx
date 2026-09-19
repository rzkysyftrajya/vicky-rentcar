import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "Sewa Mobil Hiace Jakarta - Rental Mini Bus untuk Rombongan & Wisata",
  description:
    "Sewa mobil Toyota Hiace di Jakarta untuk rombongan wisata, perjalanan bisnis, atau acara keluarga. Kapasitas hingga 15 orang, nyaman, dengan sopir berpengalaman. Harga rental Hiace terbaik.",
  keywords: [
    "sewa hiace jakarta",
    "rental hiace jakarta",
    "sewa mobil rombongan jakarta",
    "rental minibus jakarta",
    "sewa hiace premio jakarta",
    "sewa elf jakarta",
  ],
  openGraph: {
    title:
      "Sewa Mobil Hiace Jakarta - Rental Mini Bus untuk Rombongan & Wisata",
    description:
      "Sewa mobil Toyota Hiace di Jakarta untuk rombongan wisata, bisnis, atau keluarga. Kapasitas hingga 15 orang.",
  },
};

export default function Page() {
  return (
    <main className="bg-white">
      <section className="py-12 md:py-24">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-center">
            Sewa Toyota Hiace di Jakarta | Pilihan Utama untuk Rombongan
          </h1>

          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-center">
            Anda merencanakan perjalanan rombongan di Jakarta?{" "}
            <strong className="text-primary-600">
              Sewa Toyota Hiace Jakarta
            </strong>{" "}
            adalah jawaban yang tepat. Dengan kapasitas besar dan kenyamanan
            optimal, Hiace ideal untuk perjalanan bisnis, antar jemput bandara,
            atau tur wisata keliling kota. Kami menyediakan armada Hiace
            Commuter dan Hiace Premio dalam kondisi prima dengan sopir yang
            andal.
          </p>
        </div>
      </section>

      <section className="py-12 md:py-24 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <img
                src="https://d1g6w7sntckt92.cloudfront.net/public/images/car_gallery_images/QEcRaIEQmTSZR4ia3D4CwA3vTyowGw987zAfQHq9.jpg"
                alt="Interior Toyota Hiace"
                className="rounded-xl shadow-lg w-full h-auto"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-2xl font-bold mb-4">
                Kenyamanan Perjalanan Bisnis & Wisata
              </h2>
              <p className="text-muted-foreground mb-4">
                Lupakan pusingnya mencari transportasi untuk rombongan di
                Jakarta. Hiace kami menawarkan ruang kabin yang luas dan sejuk.
                Anda dan rombongan bisa berdiskusi bisnis atau menikmati
                pemandangan kota tanpa terganggu.
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Kapasitas hingga 15 penumpang.</li>
                <li>AC dual blower yang sejuk merata.</li>
                <li>Kursi yang nyaman untuk perjalanan jauh.</li>
                <li>Bagasi yang cukup untuk barang bawaan.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row-reverse items-center gap-12">
            <div className="md:w-1/2">
              <img
                src="https://media.istockphoto.com/id/1216596937/id/foto/potret-pengemudi-tersenyum.jpg?s=612x612&w=0&k=20&c=Fi-1gulED29nP7gONbhMsbWDtzoG2yi6dOqfTg8h-uw="
                alt="Sopir Profesional Hiace"
                className="rounded-xl shadow-lg w-full h-auto"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-2xl font-bold mb-4">
                Sopir Profesional yang Mengenal Jakarta
              </h2>
              <p className="text-muted-foreground mb-4">
                Sopir kami bukan sekadar pengemudi, tetapi juga partner
                perjalanan Anda. Mereka menguasai rute-rute terbaik, tahu cara
                menghindari kemacetan, dan siap mengantar Anda dengan aman dan
                tepat waktu. Layanan{" "}
                <strong className="text-primary-600">
                  sewa Hiace dengan sopir di Jakarta
                </strong>{" "}
                akan memastikan Anda bisa berfokus pada tujuan tanpa khawatir
                soal navigasi.
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>
                  Berpengalaman di wilayah Jakarta, Bogor, Puncak, dan
                  sekitarnya.
                </li>
                <li>Ramah, sopan, dan profesional.</li>
                <li>Siap melayani perjalanan dinas atau wisata.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-100 py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-4 text-center">
            Pertanyaan Umum (FAQ)
          </h2>
          <div className="space-y-4 max-w-3xl mx-auto">
            <div>
              <h3 className="font-semibold text-lg">
                Berapa harga sewa Hiace di Jakarta?
              </h3>
              <p className="text-muted-foreground">
                Harga kami sangat kompetitif dan sudah termasuk mobil, bensin,
                dan jasa sopir. Tarif akan disesuaikan dengan durasi sewa dan
                rute perjalanan Anda. Hubungi kami untuk penawaran terbaik.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg">
                Apakah bisa sewa Hiace untuk ke luar kota dari Jakarta?
              </h3>
              <p className="text-muted-foreground">
                Tentu. Kami melayani perjalanan ke luar kota, seperti ke Puncak,
                Bandung, atau destinasi lain. Informasikan rute Anda, dan kami
                akan siapkan paket perjalanan terbaik.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
