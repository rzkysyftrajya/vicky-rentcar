import { type Metadata } from "next";

const phoneNumber = "6282363389893";
const whatsappHref = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
  "Halo, saya ingin memesan antar jemput Bandara Ahmad Yani Semarang. Jadwal penerbangan dan tujuan saya:"
)}`;

const faqs = [
  {
    question: "Bagaimana prosedur penjemputan di Bandara Ahmad Yani?",
    answer:
      "Kirim nomor penerbangan, waktu kedatangan, jumlah penumpang, dan tujuan melalui WhatsApp. Setelah bagasi diambil, sopir akan bertemu Anda di titik penjemputan yang telah dikoordinasikan.",
  },
  {
    question: "Apakah layanan antar jemput Bandara Ahmad Yani menggunakan sopir?",
    answer:
      "Ya. Antar jemput bandara dilayani dengan sopir. Jika membutuhkan mobil untuk digunakan sendiri setelah tiba, tanyakan ketersediaan dan persyaratan sewa lepas kunci secara terpisah.",
  },
  {
    question: "Berapa biaya antar jemput Bandara Ahmad Yani ke pusat Semarang?",
    answer:
      "Biaya menyesuaikan tujuan, pilihan kendaraan, dan kebutuhan perjalanan. Kirim alamat tujuan, jadwal penerbangan, serta jumlah penumpang melalui WhatsApp untuk meminta penawaran sebelum memesan.",
  },
  {
    question: "Apakah bisa dijemput dari Bandara Ahmad Yani ke hotel atau Kota Lama?",
    answer:
      "Bisa. Perjalanan dari Bandara Ahmad Yani dapat diatur ke hotel, pusat kota, Kota Lama, Simpang Lima, Lawang Sewu, dan tujuan lain di Semarang. Sampaikan alamat tujuan saat meminta penawaran.",
  },
  {
    question: "Apakah tersedia layanan jemput bandara pada malam hari?",
    answer:
      "Ya, layanan tersedia 24 jam untuk membantu menyesuaikan penjemputan dengan jadwal kedatangan penerbangan, termasuk pada malam hari.",
  },
];

const vehicles = [
  {
    name: "Avanza",
    image: "/armada/toyota-all-new-avanza.webp",
    alt: "Toyota Avanza untuk antar jemput Bandara Ahmad Yani Semarang",
    description:
      "Pilihan praktis untuk perjalanan bandara bersama keluarga kecil atau beberapa rekan, dengan ruang untuk barang bawaan sesuai kebutuhan.",
  },
  {
    name: "Xpander",
    image: "/armada/xpander.webp",
    alt: "Mitsubishi Xpander untuk penjemputan penumpang di Bandara Ahmad Yani",
    description:
      "Kabin MPV yang nyaman untuk perjalanan dari terminal menuju hotel, kawasan Simpang Lima, atau tujuan lain di Semarang.",
  },
  {
    name: "Hiace Premio",
    image: "/armada/hiace-premio.webp",
    alt: "Hiace Premio dengan sopir untuk rombongan dari Bandara Ahmad Yani",
    description:
      "Kendaraan van untuk rombongan dan perjalanan bersama; layanan Hiace Premio disediakan dengan sopir.",
  },
];

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "CarRental",
      name: "Antar Jemput Bandara Ahmad Yani Semarang dengan Sopir",
      description:
        "Layanan antar jemput Bandara Ahmad Yani dengan sopir, pemantauan jadwal penerbangan, dan pilihan kendaraan untuk perjalanan di Semarang.",
      telephone: `+${phoneNumber}`,
      areaServed: [
        { "@type": "City", name: "Semarang" },
        { "@type": "Airport", name: "Bandara Internasional Jenderal Ahmad Yani" },
      ],
      provider: {
        "@type": "Organization",
        name: "PT. Vicky Rentcar Nusantara",
        telephone: `+${phoneNumber}`,
      },
      makesOffer: vehicles.map((vehicle) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Car",
          name: vehicle.name,
          image: `https://www.vickyrentcarnusantara.com${vehicle.image}`,
        },
      })),
    },
    {
      "@type": "FAQPage",
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
    },
  ],
};

export const metadata: Metadata = {
  title: "Antar Jemput Bandara Ahmad Yani Semarang 24 Jam",
  description:
    "Butuh jemput dari Bandara Ahmad Yani ke hotel, Kota Lama, atau pusat Semarang? Atur perjalanan dengan sopir, pilihan kendaraan, dan koordinasi jadwal penerbangan via WhatsApp.",
  alternates: {
    canonical: "/semarang",
  },
  openGraph: {
    title: "Antar Jemput Bandara Ahmad Yani Semarang 24 Jam",
    description:
      "Atur perjalanan dari Bandara Ahmad Yani ke hotel, Kota Lama, Simpang Lima, dan tujuan lain di Semarang. Tersedia dengan sopir dan koordinasi jadwal penerbangan.",
    url: "/semarang",
    siteName: "PT. Vicky Rentcar Nusantara",
    type: "website",
  },
};

export default function SemarangAirportTransferPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <section className="relative flex min-h-[420px] items-center justify-center overflow-hidden bg-slate-950 px-4 py-20 text-center text-white md:min-h-[500px]">
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[url('/armada/hiace-premio.webp')] bg-cover bg-center opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/75 to-slate-950/45" />
        <div className="relative z-10 mx-auto max-w-3xl">
          <p className="mb-4 font-semibold uppercase tracking-widest text-emerald-300">
            Bandara Ahmad Yani (SRG) · Semarang
          </p>
          <h1 className="mb-5 text-3xl font-bold md:text-5xl">
            Antar Jemput Bandara Ahmad Yani Semarang dengan Sopir
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-slate-100 md:text-xl">
            Atur perjalanan dari Bandara Ahmad Yani ke hotel, pusat kota, atau
            tujuan lain di Semarang. Sampaikan jadwal penerbangan dan tujuan
            Anda agar penjemputan dapat dikoordinasikan lebih awal.
          </p>
          <a
            href={whatsappHref}
            className="mt-8 inline-flex min-h-12 items-center justify-center rounded-md bg-emerald-500 px-7 py-3 font-bold text-white transition-colors hover:bg-emerald-600"
          >
            Atur penjemputan via WhatsApp
          </a>
        </div>
      </section>

      <section className="bg-slate-50 px-4 py-16 md:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 max-w-2xl">
            <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">
              Penjemputan bandara yang terkoordinasi
            </h2>
            <p className="mt-3 text-slate-600">
              Untuk memesan mobil dari Bandara Ahmad Yani, kirim nomor
              penerbangan, waktu tiba, jumlah penumpang, dan alamat tujuan.
              Informasi ini membantu kami menyiapkan kendaraan dan menyepakati
              titik temu sebelum Anda mendarat.
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <article className="border-t-2 border-emerald-500 pt-4">
              <h3 className="font-semibold text-slate-900">
                Memantau jadwal penerbangan
              </h3>
              <p className="mt-2 text-slate-600">
                Informasikan nomor penerbangan agar sopir dapat memantau jadwal
                kedatangan dan menyesuaikan koordinasi penjemputan.
              </p>
            </article>
            <article className="border-t-2 border-emerald-500 pt-4">
              <h3 className="font-semibold text-slate-900">
                Sambutan dan titik temu
              </h3>
              <p className="mt-2 text-slate-600">
                Titik bertemu dikonfirmasi sebelumnya, sehingga Anda tahu ke
                mana harus menuju setelah mengambil bagasi.
              </p>
            </article>
            <article className="border-t-2 border-emerald-500 pt-4">
              <h3 className="font-semibold text-slate-900">
                Mengenal rute Semarang
              </h3>
              <p className="mt-2 text-slate-600">
                Perjalanan dilanjutkan bersama sopir yang memahami rute lokal
                menuju pusat kota dan kawasan tujuan Anda.
              </p>
            </article>
            <article className="border-t-2 border-emerald-500 pt-4">
              <h3 className="font-semibold text-slate-900">
                Tersedia sepanjang hari
              </h3>
              <p className="mt-2 text-slate-600">
                Layanan 24 jam dapat membantu mengatur penjemputan untuk jadwal
                kedatangan pagi, malam, maupun dini hari.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="px-4 py-16 md:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 max-w-2xl">
            <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">
              Kendaraan untuk antar jemput Bandara Ahmad Yani
            </h2>
            <p className="mt-3 text-slate-600">
              Pilih armada sesuai jumlah penumpang dan barang bawaan. Semua
              kendaraan pada layanan antar jemput ini digunakan bersama sopir.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {vehicles.map((vehicle) => (
              <article key={vehicle.name} className="overflow-hidden border">
                <img
                  src={vehicle.image}
                  alt={vehicle.alt}
                  className="h-56 w-full bg-slate-100 object-contain"
                  loading="lazy"
                />
                <div className="p-5">
                  <h3 className="text-xl font-semibold text-slate-900">
                    {vehicle.name}
                  </h3>
                  <p className="mt-2 text-slate-600">{vehicle.description}</p>
                </div>
              </article>
            ))}
          </div>
          <p className="mt-8 max-w-3xl text-slate-600">
            Jika Anda ingin mengemudi sendiri, pilihan lepas kunci juga
            tersedia sebagai opsi tambahan yang fleksibel; antar jemput
            bandara tetap berfokus pada layanan dengan sopir.
          </p>
          <p className="mt-4 max-w-3xl text-slate-600">
            Layanan antar jemput Bandara Ahmad Yani dapat dipesan untuk tujuan
            seperti hotel di pusat kota, Kota Lama, Simpang Lima, dan Lawang
            Sewu. Biaya perjalanan dikonfirmasi berdasarkan alamat tujuan dan
            kendaraan yang dipilih.
          </p>
        </div>
      </section>

      <section className="bg-slate-50 px-4 py-16 md:py-20">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-bold text-slate-900 md:text-3xl">
            Pertanyaan tentang antar jemput Bandara Ahmad Yani
          </h2>
          <div className="divide-y divide-slate-200">
            {faqs.map((faq) => (
              <article key={faq.question} className="py-5">
                <h3 className="font-semibold text-slate-900">
                  {faq.question}
                </h3>
                <p className="mt-2 text-slate-600">{faq.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-950 px-4 py-14 text-center text-white">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-bold md:text-3xl">
            Siapkan penjemputan dari Bandara Ahmad Yani
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-slate-200">
            Kirim jadwal penerbangan, tujuan, jumlah penumpang, dan kendaraan
            pilihan Anda. Kami siap membantu mengoordinasikan antar jemput
            bandara di Semarang.
          </p>
          <a
            href={whatsappHref}
            className="mt-7 inline-flex min-h-12 items-center justify-center rounded-md bg-emerald-500 px-7 py-3 font-bold text-white transition-colors hover:bg-emerald-600"
          >
            Hubungi via WhatsApp
          </a>
        </div>
      </section>
    </main>
  );
}
