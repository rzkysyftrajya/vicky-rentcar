import { type Metadata } from "next";
import Image from "next/image";

const phoneNumber = "6282363389893";
const whatsappHref = `https://wa.me/${phoneNumber}?text=Halo%2C%20saya%20ingin%20bertanya%20tentang%20antar%20jemput%20bandara%20Jakarta.`;

const faqs = [
  {
    question: "Bagaimana prosedur penjemputan di Bandara Soekarno-Hatta?",
    answer:
      "Sampaikan nomor penerbangan, terminal, waktu kedatangan, dan tujuan saat memesan. Sopir akan memantau jadwal penerbangan dan mengarahkan titik temu di area kedatangan; Anda dapat menghubungi sopir melalui WhatsApp setelah mendarat.",
  },
  {
    question: "Apakah tersedia layanan lepas kunci?",
    answer:
      "Ya, lepas kunci tersedia sebagai pilihan tambahan. Layanan utama kami adalah antar jemput dan perjalanan dengan sopir.",
  },
  {
    question: "Bagaimana cara mengetahui biaya antar jemput bandara?",
    answer:
      "Hubungi kami melalui WhatsApp dengan menyertakan tanggal, jam kedatangan, terminal, tujuan, dan pilihan kendaraan. Tim kami akan mengonfirmasi rincian sesuai kebutuhan perjalanan Anda.",
  },
  {
    question: "Area mana saja yang dilayani dari Bandara Soekarno-Hatta?",
    answer:
      "Layanan mencakup Jakarta dan kawasan Jabodetabek, termasuk Tangerang, Bogor, Depok, dan Bekasi. Tujuan di luar area tersebut dapat dikonsultasikan saat pemesanan.",
  },
  {
    question: "Apakah penjemputan tersedia untuk penerbangan malam?",
    answer:
      "Ya, layanan antar jemput bandara tersedia 24 jam. Sampaikan jadwal penerbangan Anda agar kami dapat mengatur waktu penjemputan.",
  },
];

const vehicles = [
  {
    name: "Toyota Avanza",
    image: "/armada/toyota-all-new-avanza.webp",
    alt: "Toyota Avanza untuk antar jemput Bandara Soekarno-Hatta",
    description:
      "Nyaman untuk hingga 6 penumpang bersama sopir, dengan ruang bagasi yang pas untuk koper kabin atau beberapa koper berukuran sedang.",
  },
  {
    name: "Toyota Innova Reborn",
    image: "/armada/innova-reborn.webp",
    alt: "Toyota Innova Reborn untuk perjalanan dari Bandara Soekarno-Hatta",
    description:
      "Kabin lega untuk hingga 6 penumpang dan bagasi keluarga, cocok untuk perjalanan bandara yang mengutamakan ruang dan kenyamanan.",
  },
  {
    name: "Toyota Fortuner",
    image: "/armada/fortuner.webp",
    alt: "Toyota Fortuner untuk antar jemput bandara di Jakarta",
    description:
      "SUV untuk hingga 6 penumpang dengan ruang bagasi untuk beberapa koper; pilihan nyaman untuk perjalanan bisnis maupun keluarga.",
  },
];

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "CarRental",
      name: "Antar Jemput Bandara Soekarno-Hatta dengan Sopir",
      description:
        "Layanan antar jemput Bandara Soekarno-Hatta (CGK) dengan sopir berpengalaman, pemantauan penerbangan, dan pilihan armada untuk perjalanan Jakarta dan Jabodetabek.",
      telephone: `+${phoneNumber}`,
      address: {
        "@type": "PostalAddress",
        streetAddress: "Jl. Rawa Kepa VIII No.44, RT.8/RW.12, Tomang",
        addressLocality: "Kec. Grogol Petamburan, Kota Jakarta Barat",
        addressRegion: "Daerah Khusus Ibukota Jakarta",
        postalCode: "11440",
        addressCountry: "ID",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: -6.1725773,
        longitude: 106.8022731,
      },
      areaServed: [
        { "@type": "City", name: "Jakarta" },
        { "@type": "AdministrativeArea", name: "Jabodetabek" },
      ],
      provider: {
        "@type": "Organization",
        name: "PT. VRN",
      },
      makesOffer: vehicles.map((vehicle) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Car",
          name: vehicle.name,
          image: `https://vickyrentcarnusantara.com${vehicle.image}`,
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
  title: "Antar Jemput Bandara Soekarno-Hatta dengan Sopir | Rental Mobil CGK",
  description:
    "Pesan rental mobil Bandara Soekarno-Hatta (CGK) dengan sopir, pemantauan penerbangan, dan penjemputan 24 jam untuk Jakarta dan Jabodetabek. Tanyakan ketersediaan via WhatsApp.",
  keywords: [
    "rental mobil bandara soekarno hatta",
    "sewa mobil CGK",
    "antar jemput Bandara Soekarno-Hatta",
    "rental mobil bandara soekarno hatta dengan sopir",
    "sewa mobil bandara soekarno hatta lepas kunci",
    "jemput Bandara Soekarno-Hatta Jakarta",
  ],
  openGraph: {
    title: "Antar Jemput Bandara Soekarno-Hatta dengan Sopir",
    description:
      "Layanan penjemputan CGK dengan sopir, pemantauan penerbangan, dan armada Avanza, Innova Reborn, serta Fortuner untuk Jakarta dan Jabodetabek.",
  },
};

export default function JakartaAirportTransferPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <section className="relative flex min-h-[420px] items-center justify-center overflow-hidden bg-slate-950 px-4 py-20 text-center text-white md:min-h-[500px]">
        <Image
          src="/armada/fortuner.webp"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-25"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/75 to-slate-950/45" />
        <div className="relative z-10 mx-auto max-w-3xl">
          <p className="mb-4 font-semibold uppercase tracking-widest text-emerald-300">
            Bandara Soekarno-Hatta (CGK) · Jakarta
          </p>
          <h1 className="mb-5 text-3xl font-bold md:text-5xl">
            Antar Jemput Bandara Soekarno-Hatta dengan Sopir
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-slate-100 md:text-xl">
            Tiba di CGK tanpa repot mengatur perjalanan lanjutan. Sopir kami
            memantau penerbangan dan mengantar Anda ke tujuan di Jakarta maupun
            Jabodetabek.
          </p>
          <a
            href={whatsappHref}
            className="mt-8 inline-flex min-h-12 items-center justify-center rounded-md bg-emerald-500 px-7 py-3 font-bold text-white transition-colors hover:bg-emerald-600"
          >
            Pesan antar jemput via WhatsApp
          </a>
        </div>
      </section>

      <section className="bg-slate-50 px-4 py-16 md:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 max-w-2xl">
            <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">
              Perjalanan dari bandara yang lebih terencana
            </h2>
            <p className="mt-3 text-slate-600">
              Kami membantu Anda melanjutkan perjalanan dengan nyaman sejak
              tiba di Soekarno-Hatta.
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <article className="border-t-2 border-emerald-500 pt-4">
              <h3 className="font-semibold text-slate-900">
                Tepat waktu dan pantau penerbangan
              </h3>
              <p className="mt-2 text-slate-600">
                Jadwal kedatangan dipantau agar penjemputan dapat menyesuaikan
                perubahan waktu penerbangan.
              </p>
            </article>
            <article className="border-t-2 border-emerald-500 pt-4">
              <h3 className="font-semibold text-slate-900">
                Bantuan titik temu
              </h3>
              <p className="mt-2 text-slate-600">
                Sopir mengoordinasikan titik temu di area kedatangan dan siap
                membantu proses bertemu setelah Anda mengambil bagasi.
              </p>
            </article>
            <article className="border-t-2 border-emerald-500 pt-4">
              <h3 className="font-semibold text-slate-900">
                Sopir mengenal Jabodetabek
              </h3>
              <p className="mt-2 text-slate-600">
                Pengemudi berpengalaman memahami pilihan rute menuju pusat
                Jakarta dan berbagai tujuan di sekitarnya.
              </p>
            </article>
            <article className="border-t-2 border-emerald-500 pt-4">
              <h3 className="font-semibold text-slate-900">
                Siap melayani 24 jam
              </h3>
              <p className="mt-2 text-slate-600">
                Atur penjemputan untuk kedatangan pagi, malam, maupun jadwal
                penerbangan di luar jam sibuk.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="px-4 py-16 md:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 max-w-2xl">
            <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">
              Pilihan kendaraan untuk jemputan CGK
            </h2>
            <p className="mt-3 text-slate-600">
              Pilih kendaraan berdasarkan jumlah penumpang dan barang bawaan.
              Semua pilihan berikut tersedia untuk layanan dengan sopir.
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
            Perlu mengemudi sendiri? Layanan lepas kunci juga tersedia sebagai
            pilihan fleksibel; untuk perjalanan bandara, layanan utama kami
            tetap antar jemput dengan sopir.
          </p>
          <p className="mt-4 max-w-3xl text-slate-600">
            Butuh kendaraan untuk kebutuhan lain di Jakarta selain antar jemput
            bandara? Lihat pilihan kendaraan{" "}
            <a
              className="font-semibold text-emerald-700 underline"
              href="/rental-alphard-jakarta/"
            >
              Alphard
            </a>
            ,{" "}
            <a
              className="font-semibold text-emerald-700 underline"
              href="/rental-hiace-jakarta/"
            >
              Hiace
            </a>
            , atau{" "}
            <a
              className="font-semibold text-emerald-700 underline"
              href="/sewa-mobil-jakarta/"
            >
              sewa harian
            </a>
            .
          </p>
        </div>
      </section>

      <section className="bg-slate-50 px-4 py-16 md:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-8 max-w-3xl">
            <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">
              Lokasi &amp; Area Layanan
            </h2>
            <h3 className="mt-5 text-lg font-semibold text-slate-900">
              VICKY RENTCAR JAKARTA
            </h3>
            <p className="mt-2 text-slate-600">
              Jl. Rawa Kepa VIII No.44, RT.8/RW.12, Tomang, Kec. Grogol
              Petamburan, Kota Jakarta Barat, Daerah Khusus Ibukota Jakarta
              11440
            </p>
          </div>
          <iframe
            src="https://www.google.com/maps?q=-6.1725773,106.8022731&output=embed"
            title="Peta lokasi VICKY RENTCAR JAKARTA di Tomang, Jakarta Barat"
            width="100%"
            height="350"
            loading="lazy"
            className="w-full border-0"
          />
          <div className="mt-8">
            <h3 className="font-semibold text-slate-900">Area layanan</h3>
            <ul className="mt-3 flex flex-wrap gap-2" aria-label="Area layanan">
              {[
                "Jakarta Barat",
                "Tangerang",
                "BSD",
                "Cengkareng",
                "Bogor",
                "Depok",
                "Bekasi",
              ].map((area) => (
                <li
                  key={area}
                  className="border border-slate-300 bg-white px-3 py-1.5 text-sm text-slate-700"
                >
                  {area}
                </li>
                ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="px-4 py-16 md:py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-8 text-2xl font-bold text-slate-900 md:text-3xl">
            Cara Pemesanan
          </h2>
          <ol className="grid gap-x-8 gap-y-7 sm:grid-cols-2">
            <li>
              <h3 className="font-semibold text-slate-900">
                01 Hubungi via WhatsApp
              </h3>
              <p className="mt-2 text-slate-600">
                Kirim jadwal penerbangan Anda, termasuk waktu kedatangan dan
                nomor penerbangan.
              </p>
            </li>
            <li>
              <h3 className="font-semibold text-slate-900">
                02 Konfirmasi titik jemput dan kendaraan
              </h3>
              <p className="mt-2 text-slate-600">
                Sampaikan tujuan serta pilihan kendaraan agar titik jemput dan
                kebutuhan perjalanan dapat dikoordinasikan.
              </p>
            </li>
            <li>
              <h3 className="font-semibold text-slate-900">
                03 Sopir memantau penerbangan Anda
              </h3>
              <p className="mt-2 text-slate-600">
                Sopir mengikuti jadwal penerbangan untuk menyesuaikan waktu
                penjemputan jika ada perubahan.
              </p>
            </li>
            <li>
              <h3 className="font-semibold text-slate-900">
                04 Penjemputan di titik temu yang disepakati
              </h3>
              <p className="mt-2 text-slate-600">
                Setelah tiba dan mengambil bagasi, temui sopir di lokasi yang
                telah dikoordinasikan.
              </p>
            </li>
          </ol>
        </div>
      </section>

      <section className="bg-slate-50 px-4 py-16 md:py-20">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-bold text-slate-900 md:text-3xl">
            Pertanyaan tentang antar jemput Bandara Soekarno-Hatta
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
            Rencanakan penjemputan Anda dari CGK
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-slate-200">
            Kirim jadwal penerbangan, terminal, tujuan, dan kendaraan pilihan
            Anda. Tim kami siap membantu mengatur antar jemput di Jakarta.
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
