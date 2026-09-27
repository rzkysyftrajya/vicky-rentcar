import Link from "next/link";
import { createMedanWhatsAppUrl } from "@/components/medan/MedanWhatsApp";

const testimonials = [
  {
    name: "Iffat Resources",
    location: "Malaysia",
    service: "Rental mobil",
    date: "2024-01-15",
    comment:
      "Terbaik! I have great experience renting with Vicky Rental Nusantara. Mr Vicky is best in client care, very communicative, fast responsive. I booked car all the way from Malaysia for my Husband arriving in Indonesia. Within 30 minutes, i was given choices to choose. Driver arrived before time with personalized arrival name plate. Perfect punctuality. The car was tip top condition. Highly recommend!",
  },
  {
    name: "Dandia Agung",
    location: "Jakarta",
    service: "Rental mobil harian",
    date: "2024-01-20",
    comment:
      "Mobil tersedia banyak pilihan. Proses ambil & pengembalian juga cepat, tanpa ribet. Overall puas, bakal repeat order kalau keperluan lagi.",
  },
  {
    name: "Arbanie Vinsmoke",
    location: "Surabaya",
    service: "Perjalanan wisata",
    date: "2024-01-25",
    comment:
      "Pelayanan ramah, unit mobil bersih dan terawat. Proses sewa juga gampang, admin fast respon. Cocok buat yang butuh kendaraan harian maupun perjalanan keluar kota. Recommended 👍",
  },
  {
    name: "Balqis Khanza",
    location: "Bandung",
    service: "Wedding car",
    date: "2024-01-30",
    comment:
      "Rekomendasi lah pokoknya pelayanannya bagus mobil bersih wangi dan bagus mantap best lah pokoknya,,👍👍👍",
  },
  {
    name: "Alif Hayza",
    location: "Yogyakarta",
    service: "Rental mobil harian",
    date: "2024-02-05",
    comment: "Mantap pelayanan nya bagus, mobil nya bagus bersih wangi mantap lah...",
  },
];

function formatReviewDate(date: string): string {
  return new Intl.DateTimeFormat("id-ID", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(`${date}T12:00:00Z`));
}

export default function TestimonialsPage() {
  const [featuredTestimonial, ...otherTestimonials] = testimonials;

  return (
    <main className="bg-white text-[var(--medan-text)]">
      <section className="overflow-hidden bg-[#f0ede6]">
        <div className="medan-container py-5">
          <nav className="text-sm text-[var(--medan-muted)]" aria-label="Breadcrumb">
            <Link href="/medan" className="hover:text-[var(--medan-primary)]">
              Medan
            </Link>
            <span className="px-2">/</span>
            Ulasan pelanggan
          </nav>
        </div>
        <div className="medan-container grid gap-10 pb-12 pt-6 sm:pb-16 lg:grid-cols-[1fr_0.8fr] lg:items-center lg:gap-20 lg:pb-20">
          <div>
            <p className="medan-eyebrow">Ulasan pelanggan</p>
            <h1 className="mt-4 max-w-2xl text-4xl font-semibold leading-[1.06] tracking-[-0.045em] text-[var(--medan-primary-dark)] sm:text-5xl lg:text-[3.75rem]">
              Perjalanan yang baik, diceritakan sendiri.
            </h1>
            <p className="mt-5 max-w-lg text-base leading-7 text-[#4f5965] sm:text-lg sm:leading-8">
              Beberapa catatan dari pelanggan yang pernah menggunakan layanan
              VRN Rent Car Medan.
            </p>
          </div>

          <figure className="relative border-l-2 border-[#c18b37] py-2 pl-6 sm:pl-8">
            <blockquote className="text-xl leading-8 tracking-[-0.02em] text-[var(--medan-primary-dark)] sm:text-2xl sm:leading-9">
              “{featuredTestimonial.comment}”
            </blockquote>
            <figcaption className="mt-6 flex flex-wrap items-baseline gap-x-3 gap-y-1">
              <span className="font-semibold text-[var(--medan-primary-dark)]">
                {featuredTestimonial.name}
              </span>
              <span className="text-sm text-[var(--medan-muted)]">
                {featuredTestimonial.location}
              </span>
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="medan-container py-12 sm:py-16">
        <div className="grid gap-8 border-b border-[var(--medan-border)] pb-5 sm:grid-cols-[1fr_auto] sm:items-end">
          <div>
            <p className="medan-eyebrow">Dari pelanggan kami</p>
            <h2 className="mt-2 text-2xl font-semibold tracking-[-0.03em] text-[var(--medan-primary-dark)] sm:text-3xl">
              Catatan perjalanan
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-6 text-[var(--medan-muted)]">
            Ulasan ditampilkan sesuai kata-kata pelanggan.
          </p>
        </div>

        <div>
          {otherTestimonials.map((testimonial) => (
            <article
              key={testimonial.name}
              className="grid gap-4 border-b border-[var(--medan-border)] py-7 sm:grid-cols-[minmax(10rem,0.42fr)_1fr] sm:gap-10 sm:py-9"
            >
              <div>
                <h3 className="font-semibold text-[var(--medan-primary-dark)]">
                  {testimonial.name}
                </h3>
                <p className="mt-1 text-sm text-[var(--medan-muted)]">
                  {testimonial.location}
                </p>
                <p className="mt-3 text-xs font-semibold uppercase tracking-[0.1em] text-[var(--medan-primary)]">
                  {testimonial.service}
                </p>
                <time
                  className="mt-2 block text-xs text-[var(--medan-muted)]"
                  dateTime={testimonial.date}
                >
                  {formatReviewDate(testimonial.date)}
                </time>
              </div>
              <div className="flex gap-4">
                <span
                  aria-hidden="true"
                  className="select-none font-serif text-4xl leading-none text-[#c18b37]"
                >
                  “
                </span>
                <blockquote className="max-w-3xl pt-1 text-base leading-7 text-[#3f4852]">
                  {testimonial.comment}
                </blockquote>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-[var(--medan-primary-dark)] py-9 text-white sm:py-11">
        <div className="medan-container flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-xl font-semibold">Sedang merencanakan perjalanan?</h2>
            <p className="mt-1 text-sm leading-6 text-white/75">
              Ceritakan jadwal dan tujuan Anda; kami bantu cek pilihan yang tersedia.
            </p>
          </div>
          <a
            href={createMedanWhatsAppUrl({ type: "general" })}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-11 items-center self-start border-b border-[#f2c14e] text-sm font-semibold text-white hover:text-[#f2c14e] sm:self-auto"
          >
            Hubungi kami lewat WhatsApp
            <span aria-hidden="true" className="ml-2">&rarr;</span>
          </a>
        </div>
      </section>
    </main>
  );
}
