"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { createMedanWhatsAppUrl } from "@/components/medan/MedanWhatsApp";

const faqSections = [
  {
    id: "pemesanan",
    title: "Pemesanan",
    description: "Mulai dari rencana perjalanan sampai konfirmasi kendaraan.",
    questions: [
      {
        question: "Bagaimana cara mulai memesan?",
        answer:
          "Kirim rencana perjalanan melalui WhatsApp: tanggal dan waktu, titik jemput, tujuan, serta jumlah penumpang. Kami akan mengecek pilihan kendaraan dan ketersediaannya sebelum pemesanan dikonfirmasi.",
      },
      {
        question: "Informasi apa yang perlu disiapkan?",
        answer:
          "Cukup siapkan tanggal, perkiraan waktu, lokasi jemput dan tujuan, jumlah penumpang, serta lama pemakaian. Jika sudah tahu jenis kendaraan atau perlu sopir, sampaikan juga agar pembahasannya lebih tepat.",
      },
      {
        question: "Bagaimana mengetahui harga dan apa saja yang termasuk?",
        answer:
          "Harga mengikuti kendaraan, lama sewa, rute, dan kebutuhan perjalanan. Sebelum menyetujui pemesanan, tanyakan rincian biaya serta apakah sopir, BBM, tol, parkir, atau biaya lain sudah termasuk.",
      },
    ],
  },
  {
    id: "perjalanan",
    title: "Rute & layanan",
    description: "Antar-jemput bandara, perjalanan Medan, dan luar kota.",
    questions: [
      {
        question: "Apakah melayani antar-jemput Bandara Kualanamu?",
        answer:
          "Ya, kami melayani perjalanan dari dan menuju Bandara Kualanamu. Sertakan nomor penerbangan, waktu kedatangan atau keberangkatan, jumlah penumpang, dan alamat tujuan saat menghubungi kami.",
      },
      {
        question: "Bisakah berangkat dari Medan ke luar kota?",
        answer:
          "Kami melayani perjalanan dari Medan ke sejumlah tujuan di Sumatera Utara, termasuk Berastagi, Parapat, dan kawasan Danau Toba. Kirim tujuan serta rencana waktunya untuk membahas kendaraan dan pengaturan perjalanan.",
      },
      {
        question: "Apakah tersedia mobil dengan sopir dan lepas kunci?",
        answer:
          "Pilihan layanan dan syaratnya bergantung pada kendaraan yang dipilih. Sebutkan kendaraan yang dicari dan rencana pemakaian; kami akan mengonfirmasi opsi yang tersedia sebelum Anda memesan.",
      },
    ],
  },
  {
    id: "ketentuan",
    title: "Sebelum berangkat",
    description: "Perubahan jadwal dan kebutuhan khusus.",
    questions: [
      {
        question: "Apa yang harus dilakukan jika jadwal berubah?",
        answer:
          "Kabari kami sesegera mungkin melalui WhatsApp dengan menyebutkan nama pemesan dan jadwal yang berubah. Kami akan mengecek kembali pengaturan perjalanan dan mengonfirmasi bila ada penyesuaian biaya atau ketersediaan.",
      },
      {
        question: "Bisa memesan untuk beberapa hari atau kebutuhan perusahaan?",
        answer:
          "Bisa ditanyakan. Sertakan lama sewa, jumlah kendaraan, lokasi penggunaan, dan perkiraan rute agar kami dapat membahas pilihan yang sesuai.",
      },
      {
        question: "Apakah bisa meminta kursi anak?",
        answer:
          "Tanyakan ketersediaan saat memesan, lalu informasikan usia anak dan jumlah kursi yang dibutuhkan. Kami akan mengonfirmasi sebelum perjalanan.",
      },
    ],
  },
];

export default function FAQPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const normalizedQuery = searchQuery.trim().toLocaleLowerCase("id");

  const filteredSections = useMemo(
    () =>
      faqSections
        .map((section) => ({
          ...section,
          questions: section.questions.filter(
            ({ question, answer }) =>
              !normalizedQuery ||
              question.toLocaleLowerCase("id").includes(normalizedQuery) ||
              answer.toLocaleLowerCase("id").includes(normalizedQuery),
          ),
        }))
        .filter((section) => section.questions.length > 0),
    [normalizedQuery],
  );

  return (
    <main className="bg-[var(--medan-background)] text-[var(--medan-text)]">
      <div className="medan-container py-4">
        <nav className="text-sm text-[var(--medan-muted)]" aria-label="Breadcrumb">
          <Link href="/medan" className="hover:text-[var(--medan-primary)]">
            Medan
          </Link>
          <span className="px-2">/</span>
          <span>Tanya jawab</span>
        </nav>
      </div>

      <section className="border-y border-[#e8e2d6] bg-[#f0ede6]">
        <div className="medan-container grid gap-8 py-10 sm:py-14 lg:grid-cols-[1fr_0.7fr] lg:items-end lg:gap-16 lg:py-16">
          <div>
            <p className="medan-eyebrow">Informasi sebelum berangkat</p>
            <h1 className="mt-4 max-w-2xl text-4xl font-semibold leading-[1.06] tracking-[-0.04em] text-[var(--medan-primary-dark)] sm:text-5xl">
              Ada yang ingin dipastikan?
            </h1>
            <p className="mt-5 max-w-xl text-base leading-7 text-[#4f5965] sm:text-lg">
              Beberapa hal yang sering ditanyakan sebelum memesan mobil di
              Medan. Untuk harga dan ketersediaan, kami konfirmasi berdasarkan
              rencana perjalanan Anda.
            </p>
          </div>
          <div>
            <label
              htmlFor="faq-search"
              className="mb-2 block text-sm font-semibold text-[var(--medan-primary-dark)]"
            >
              Cari pertanyaan
            </label>
            <input
              id="faq-search"
              type="search"
              placeholder="Contoh: Kualanamu, sopir, harga"
              value={searchQuery}
              onChange={(event) => setSearchQuery(event.target.value)}
              className="min-h-12 w-full border border-[#c8c4bb] bg-white px-4 text-sm text-[var(--medan-text)] outline-none placeholder:text-[#85837e] focus:border-[var(--medan-primary)] focus:ring-2 focus:ring-[var(--medan-primary)]/15"
            />
          </div>
        </div>
      </section>

      <section className="medan-container grid gap-10 py-12 sm:py-16 lg:grid-cols-[220px_minmax(0,1fr)] lg:gap-16">
        <aside className="h-fit border-b border-[var(--medan-border)] pb-6 lg:sticky lg:top-8 lg:border-b-0">
          <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[var(--medan-muted)]">
            Topik
          </p>
          <nav
            aria-label="Topik pertanyaan"
            className="mt-3 flex flex-wrap gap-x-5 gap-y-2 lg:flex-col lg:gap-0"
          >
            {filteredSections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className="py-2 text-sm font-medium text-[var(--medan-primary-dark)] hover:text-[var(--medan-primary)] hover:underline"
              >
                {section.title}
              </a>
            ))}
          </nav>
          <div className="mt-6 hidden border-t border-[var(--medan-border)] pt-5 lg:block">
            <p className="text-sm leading-6 text-[var(--medan-muted)]">
              Belum menemukan jawabannya?
            </p>
            <a
              href={createMedanWhatsAppUrl({ type: "general" })}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex text-sm font-semibold text-[var(--medan-primary)] hover:underline"
            >
              Tanyakan langsung
              <span aria-hidden="true" className="ml-1">&rarr;</span>
            </a>
          </div>
        </aside>

        <div className="min-w-0">
          {filteredSections.length > 0 ? (
            filteredSections.map((section) => (
              <section
                key={section.id}
                id={section.id}
                className="mb-10 scroll-mt-8 last:mb-0"
              >
                <div className="mb-3 border-b-2 border-[var(--medan-primary-dark)] pb-3">
                  <h2 className="text-xl font-semibold tracking-[-0.02em] text-[var(--medan-primary-dark)]">
                    {section.title}
                  </h2>
                  <p className="mt-1 text-sm text-[var(--medan-muted)]">
                    {section.description}
                  </p>
                </div>
                {section.questions.map(({ question, answer }) => (
                  <details
                    key={question}
                    className="group border-b border-[var(--medan-border)]"
                  >
                    <summary className="flex cursor-pointer list-none items-start justify-between gap-5 py-5 text-left font-medium text-[var(--medan-text)] marker:hidden [&::-webkit-details-marker]:hidden">
                      <span>{question}</span>
                      <span
                        aria-hidden="true"
                        className="shrink-0 text-xl leading-5 text-[var(--medan-primary)] transition-transform group-open:rotate-45"
                      >
                        +
                      </span>
                    </summary>
                    <p className="max-w-3xl pb-5 pr-8 text-sm leading-7 text-[var(--medan-muted)]">
                      {answer}
                    </p>
                  </details>
                ))}
              </section>
            ))
          ) : (
            <div className="border-y border-[var(--medan-border)] py-8">
              <h2 className="text-lg font-semibold text-[var(--medan-primary-dark)]">
                Belum ada jawaban yang cocok
              </h2>
              <p className="mt-2 text-sm leading-6 text-[var(--medan-muted)]">
                Coba kata lain, atau tanyakan kebutuhan perjalanan Anda
                langsung kepada kami.
              </p>
              <a
                href={createMedanWhatsAppUrl({ type: "general" })}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex text-sm font-semibold text-[var(--medan-primary)] hover:underline"
              >
                Hubungi lewat WhatsApp
                <span aria-hidden="true" className="ml-1">&rarr;</span>
              </a>
            </div>
          )}
        </div>
      </section>

      <section className="bg-[var(--medan-primary-dark)] py-9 text-white sm:py-11">
        <div className="medan-container flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-xl font-semibold">Perjalanan Anda punya detail sendiri.</h2>
            <p className="mt-1 text-sm leading-6 text-white/75">
              Kirim rute dan jadwalnya, kami bantu cek pilihan yang tersedia.
            </p>
          </div>
          <a
            href={createMedanWhatsAppUrl({ type: "general" })}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-11 items-center self-start border-b border-[#f2c14e] text-sm font-semibold text-white hover:text-[#f2c14e] sm:self-auto"
          >
            Tanya lewat WhatsApp
            <span aria-hidden="true" className="ml-2">&rarr;</span>
          </a>
        </div>
      </section>
    </main>
  );
}
