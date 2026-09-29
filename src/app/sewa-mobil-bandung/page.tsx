import Image from "next/image";
import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "Rental & Sewa Mobil Bandung dengan Sopir Profesional | PT.VRN",
  description:
    "Sewa mobil Bandung dengan sopir lokal untuk wisata, perjalanan bisnis, dan acara rombongan. Armada terawat, layanan antar-jemput, serta pilihan lepas kunci untuk unit tertentu.",
  keywords: [
    "sewa mobil bandung dengan sopir",
    "rental mobil bandung dengan driver",
    "sewa mobil bandung",
    "sewa mobil lepas kunci bandung",
    "sewa Hiace Bandung dengan sopir",
  ],
  openGraph: {
    title: "Rental & Sewa Mobil Bandung dengan Sopir Profesional",
    description:
      "Jelajahi Bandung dengan nyaman bersama sopir lokal dan armada terawat. Tersedia untuk wisata, bisnis, antar-jemput, dan perjalanan rombongan.",
  },
};

const waLink = `https://wa.me/6282363389893?text=${encodeURIComponent(
  "Halo VRN Rent Car, saya ingin bertanya tentang sewa mobil dengan sopir di Bandung.",
)}`;

const cars = [
  {
    name: "Toyota Avanza",
    image: "/armada/toyota-all-new-avanza.webp",
    alt: "Toyota Avanza untuk sewa mobil di Bandung",
    type: "MPV, 7 penumpang",
    description:
      "Pilihan praktis untuk perjalanan keluarga, antar-jemput, dan mobilitas harian di dalam kota.",
  },
  {
    name: "Toyota Innova",
    image: "/armada/innova-reborn.webp",
    alt: "Toyota Innova untuk sewa mobil di Bandung",
    type: "MPV, 7 penumpang",
    description:
      "Kabin lega untuk perjalanan bisnis, keluarga, atau perjalanan antarkota dengan bagasi.",
  },
  {
    name: "Mitsubishi Xpander",
    image: "/armada/xpander.webp",
    alt: "Mitsubishi Xpander untuk sewa mobil di Bandung",
    type: "MPV, 7 penumpang",
    description:
      "Teman perjalanan yang nyaman untuk agenda wisata, kunjungan, maupun berkeliling Bandung bersama keluarga.",
  },
  {
    name: "Toyota Hiace",
    image: "/armada/hiace-premio.webp",
    alt: "Toyota Hiace untuk perjalanan rombongan di Bandung",
    type: "Van, 14-16 penumpang",
    description:
      "Kapasitas untuk rombongan wisata, acara keluarga, atau kegiatan kantor agar perjalanan bersama lebih praktis.",
    driverOnly: true,
  },
];

const faqs = [
  {
    question: "Apakah bisa sewa mobil lepas kunci di Bandung?",
    answer:
      "Bisa untuk unit tertentu setelah persyaratan dan ketersediaan dikonfirmasi. Layanan utama kami adalah mobil dengan sopir. Toyota Hiace hanya tersedia dengan sopir dan tidak disewakan lepas kunci.",
  },
  {
    question: "Berapa harga sewa mobil di Bandung?",
    answer:
      "Biaya sewa dapat berbeda menurut jenis armada, durasi, tujuan, dan kebutuhan perjalanan. Hubungi kami melalui WhatsApp untuk menanyakan biaya sesuai rencana Anda; kami tidak mencantumkan tarif tetap di halaman ini.",
  },
  {
    question: "Apakah sopir melayani perjalanan ke Lembang dan Ciwidey?",
    answer:
      "Ya, perjalanan wisata maupun perjalanan sesuai agenda ke Lembang dan Ciwidey dapat dibicarakan dengan tim kami. Sampaikan rute dan kebutuhan perjalanan melalui WhatsApp.",
  },
  {
    question: "Apakah tersedia antar-jemput bandara?",
    answer:
      "Kami melayani perjalanan antar-jemput dari dan menuju Bandara Husein Sastranegara serta Bandara Kertajati. Berikan detail jadwal dan titik jemput saat menghubungi kami.",
  },
  {
    question: "Bagaimana cara menanyakan ketersediaan armada?",
    answer:
      "Kirim pesan WhatsApp berisi tanggal perjalanan, jumlah penumpang, titik jemput, dan tujuan. Tim kami akan membantu mengecek pilihan armada yang sesuai.",
  },
];

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "CarRental",
      name: "Sewa Mobil Bandung dengan Sopir - PT. VRN",
      description:
        "Layanan sewa mobil Bandung dengan sopir untuk wisata, bisnis, antar-jemput, dan perjalanan rombongan.",
      areaServed: {
        "@type": "City",
        name: "Bandung",
      },
      provider: {
        "@type": "Organization",
        name: "PT. VRN",
        telephone: "+6282363389893",
      },
      makesOffer: cars.map((car) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Car",
          name: car.name,
          bodyType: car.type,
          image: car.image,
          description: car.description,
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

export default function Page() {
  return (
    <main className="bg-white text-slate-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <section className="bg-slate-950 px-6 py-20 text-white sm:py-28">
        <div className="mx-auto max-w-6xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-emerald-300">
            Rental mobil Bandung · Sopir lokal
          </p>
          <h1 className="max-w-4xl text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
            Rental &amp; Sewa Mobil Bandung dengan Sopir Profesional
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-300">
            Jelajahi Bandung dengan lebih nyaman bersama sopir yang mengenal
            area setempat. Tersedia armada untuk wisata, perjalanan bisnis,
            antar-jemput, dan kebutuhan keluarga.
          </p>
          <a
            href={waLink}
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex min-h-12 items-center justify-center rounded-lg bg-emerald-500 px-6 py-3 font-bold text-white transition hover:bg-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-300 focus:ring-offset-2 focus:ring-offset-slate-950"
          >
            Tanya sewa mobil Bandung via WhatsApp
          </a>
        </div>
      </section>

      <section className="px-6 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-emerald-700">
            Perjalanan lebih tenang
          </p>
          <h2 className="mt-2 text-3xl font-bold sm:text-4xl">
            Kenapa Pilih Kami di Bandung
          </h2>
          <p className="mt-4 max-w-3xl leading-relaxed text-slate-600">
            Layanan dengan sopir menjadi pilihan utama untuk membantu Anda
            fokus menikmati perjalanan, sementara kebutuhan rute dan kendaraan
            dibicarakan bersama tim kami.
          </p>
          <div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Sopir lokal mengenal rute",
                text: "Perjalanan di Bandung, Lembang, dan Ciwidey dapat disesuaikan dengan agenda Anda.",
              },
              {
                title: "Armada bersih dan terawat",
                text: "Pilih jenis kendaraan sesuai kebutuhan perjalanan dan jumlah penumpang.",
              },
              {
                title: "Siap untuk berbagai agenda",
                text: "Gunakan layanan untuk wisata, bisnis, antar-jemput, maupun acara keluarga.",
              },
              {
                title: "Koordinasi perjalanan yang jelas",
                text: "Sampaikan titik jemput, tujuan, jadwal, dan kebutuhan Anda sebelum perjalanan.",
              },
              {
                title: "Layanan sepanjang hari",
                text: "Hubungi tim untuk mengatur perjalanan dan konfirmasi waktu layanan yang tersedia.",
              },
              {
                title: "Opsi lepas kunci untuk unit tertentu",
                text: "Jika membutuhkan fleksibilitas, tanyakan ketersediaan dan persyaratan lepas kunci. Hiace tetap khusus dengan sopir.",
              },
            ].map((point) => (
              <article
                key={point.title}
                className="rounded-xl border border-slate-200 p-5"
              >
                <h3 className="text-lg font-bold">{point.title}</h3>
                <p className="mt-2 leading-relaxed text-slate-600">
                  {point.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 px-6 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-emerald-700">
            Pilihan kendaraan
          </p>
          <h2 className="mt-2 text-3xl font-bold sm:text-4xl">
            Armada Sewa Mobil Bandung
          </h2>
          <p className="mt-4 max-w-3xl leading-relaxed text-slate-600">
            Sampaikan jumlah penumpang dan rencana perjalanan agar tim kami
            dapat membantu mencocokkan pilihan kendaraan.
          </p>
          <div className="mt-9 grid gap-6 sm:grid-cols-2">
            {cars.map((car) => (
              <article
                key={car.name}
                className="overflow-hidden rounded-xl border border-slate-200 bg-white"
              >
                <div className="relative h-56 bg-white">
                  <Image
                    src={car.image}
                    alt={car.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, 50vw"
                    className="object-contain p-4"
                  />
                </div>
                <div className="p-5">
                  <p className="text-sm font-semibold text-emerald-700">
                    {car.type}
                  </p>
                  <h3 className="mt-1 text-xl font-bold">{car.name}</h3>
                  <p className="mt-2 leading-relaxed text-slate-600">
                    {car.description}
                  </p>
                  {car.driverOnly && (
                    <p className="mt-4 rounded-lg bg-amber-50 p-3 font-semibold text-amber-950">
                      Toyota Hiace tersedia dengan sopir saja — tidak tersedia
                      lepas kunci.
                    </p>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-16 sm:py-20">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-emerald-700">
              Untuk berbagai perjalanan
            </p>
            <h2 className="mt-2 text-3xl font-bold sm:text-4xl">
              Layanan dan Destinasi Bandung
            </h2>
            <p className="mt-4 leading-relaxed text-slate-600">
              Atur perjalanan bersama sopir untuk wisata ke Lembang atau
              Ciwidey, antar-jemput Bandara Husein Sastranegara dan Bandara
              Kertajati, serta kebutuhan bisnis, acara keluarga, dan perjalanan
              rombongan. Rute dan titik penjemputan dapat dibicarakan saat
              menghubungi tim.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              ["Wisata", "Perjalanan ke Lembang, Ciwidey, dan tujuan pilihan Anda."],
              ["Antar-jemput", "Bandara Husein Sastranegara dan Bandara Kertajati."],
              ["Bisnis", "Mobilitas untuk pertemuan, kunjungan, dan perjalanan dinas."],
              ["Acara & rombongan", "Kendaraan untuk agenda keluarga maupun perjalanan bersama."],
            ].map(([title, text]) => (
              <article
                key={title}
                className="rounded-xl border border-slate-200 p-5"
              >
                <h3 className="font-bold">{title}</h3>
                <p className="mt-2 leading-relaxed text-slate-600">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 px-6 py-16 sm:py-20">
        <div className="mx-auto max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-emerald-700">
            Informasi pemesanan
          </p>
          <h2 className="mt-2 text-3xl font-bold sm:text-4xl">
            Pertanyaan tentang Sewa Mobil Bandung
          </h2>
          <div className="mt-8 divide-y divide-slate-200">
            {faqs.map((faq) => (
              <article key={faq.question} className="py-5">
                <h3 className="text-lg font-bold">{faq.question}</h3>
                <p className="mt-2 leading-relaxed text-slate-600">
                  {faq.answer}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-950 px-6 py-16 text-center text-white sm:py-20">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold sm:text-4xl">
            Rencanakan Perjalanan Anda di Bandung
          </h2>
          <p className="mt-4 leading-relaxed text-slate-300">
            Hubungi kami untuk menanyakan armada dengan sopir yang sesuai
            kebutuhan. Sertakan tanggal perjalanan, jumlah penumpang, titik
            jemput, dan tujuan agar tim dapat membantu.
          </p>
          <a
            href={waLink}
            target="_blank"
            rel="noreferrer"
            className="mt-7 inline-flex min-h-12 items-center justify-center rounded-lg bg-emerald-500 px-6 py-3 font-bold text-white transition hover:bg-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-300 focus:ring-offset-2 focus:ring-offset-slate-950"
          >
            Hubungi VRN Rent Car via WhatsApp
          </a>
        </div>
      </section>
    </main>
  );
}
