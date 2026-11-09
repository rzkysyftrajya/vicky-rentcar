"use client";

import { TestimonialGlobe } from "@/components/ui/testimonial-globe";
import type { GlobeTestimonial } from "@/components/ui/testimonial-globe";

const testimonials: GlobeTestimonial[] = [
  {
    id: "iffat-resources",
    quote:
      "Terbaik. I have great experience renting with Vicky Rental Nusantara. Mr Vicky is best in client care, very communicative, fast responsive. Very assurative. I booked car all the way from Malaysia for my Husband arriving in Indonesia. I told my requirement and within 30 minutes, i was given choices to choose. After my selection, the car was booked and confirmed for me. The next day, driver arrived before time with personalized arrival name plate with my husbands name at arrival gate. Perfect puntuality. The car was not only tip top condition physics wise but its performance was also excellent. Mr Vicky is very informative to supply Touch and Go, Dexlite QR and other essential advises for the renter. Great experience. I highly recommend rental with Vicky Rental Nusantara. And I will surely search for only this company fr my car rental in Indonesia in future. Vicky Rental Nusantara Forever, Terbaikkzz",
    name: "Iffat Resources",
    city: "Malaysia",
    country: "MY",
    lat: 3.139,
    lng: 101.6869,
    rating: 5,
  },
  {
    id: "binsar-jufri",
    quote:
      "Pertama kali rent...jujur kaget...saya rental 1 unit brio awalnya...akhirnya ditukar ke avanza matic krn unit brio belum ada kepastian kapan akan dikembalikan oleh konsumen sebelumnya …",
    name: "Binsar Jufri",
    city: "Jakarta",
    country: "ID",
    lat: -6.2088,
    lng: 106.8456,
    rating: 5,
  },
  {
    id: "kamarsjah-poh",
    quote:
      "Innova 2025, mobil masih baru, sehat, bersih Pemilik nya fast response, ramah, tidak banyak peraturan kaku, sopan, harga nya termasuk bagus, Saya bandingkan dengan rental lain yang pelayanan nya kaku dan tidak friendly, ini yang paling di rekomendasi kan, tetap pertahankan dan semoga makin berkembang.",
    name: "Kamarsjah Poh",
    city: "Surabaya",
    country: "ID",
    lat: -7.2575,
    lng: 112.7521,
    rating: 5,
  },
  {
    id: "arbanie-vinsmoke",
    quote:
      "Pelayanan ramah, unit mobil bersih dan terawat. Proses sewa juga gampang, admin fast respon. Cocok buat yang butuh kendaraan harian maupun perjalanan keluar kota. Recommended 👍 …",
    name: "Arbanie Vinsmoke",
    city: "Medan",
    country: "ID",
    lat: 3.5952,
    lng: 98.6722,
    rating: 5,
  },
  {
    id: "dandia-agung",
    quote:
      "Mobil tersedia banyak pilihan, harga cukup bersahabat. Proses ambil & pengembalian juga cepat, tanpa ribet. Overall puas, bakal repeat order kalau keperluan lagi.",
    name: "Dandia Agung",
    city: "Jakarta",
    country: "ID",
    lat: -6.25,
    lng: 106.87,
    rating: 5,
  },
  {
    id: "steven-dwi-putrawan",
    quote:
      "Excellent service! The pick-up and drop-off process was seamless and quick. The staff was professional and helpful. Highly recommended for anyone looking for a hassle-free rental experience.",
    name: "Steven Dwi Putrawan",
    city: "Singapura",
    country: "SG",
    lat: 1.3521,
    lng: 103.8198,
    rating: 5,
  },
  {
    id: "marisina-sihite",
    quote: "Bagus, ga repot harga bersaing banget",
    name: "Marisina Sihite",
    city: "Surabaya",
    country: "ID",
    lat: -7.29,
    lng: 112.78,
    rating: 5,
  },
  {
    id: "balqis-khanza",
    quote: "Rekomendasi lah pokok nya pelayanannya bagus mobil bersih wangi dan bagus mantap best lah pokoknya,,👍👍👍 …",
    name: "Balqis Khanza",
    city: "Medan",
    country: "ID",
    lat: 3.63,
    lng: 98.7,
    rating: 5,
  },
  {
    id: "alif-hayza",
    quote: "Mantap pelayanan nya bagus, mobil nya bagus bersih wangi mantap lah...",
    name: "Alif Hayza",
    city: "Jakarta",
    country: "ID",
    lat: -6.18,
    lng: 106.81,
    rating: 5,
  },
  {
    id: "edy-medan",
    quote: "Mantap👍👍👍 …",
    name: "edy medan",
    city: "Medan",
    country: "ID",
    lat: 3.56,
    lng: 98.65,
    rating: 5,
  },
  {
    id: "achmad-maulana",
    quote: "Bagus sekali",
    name: "Achmad Maulana",
    city: "Surabaya",
    country: "ID",
    lat: -7.23,
    lng: 112.71,
    rating: 5,
  },
  {
    id: "zetta",
    quote: "Memberi rating bintang 5 tanpa komentar.",
    name: "zetta",
    city: "Jakarta",
    country: "ID",
    lat: -6.24,
    lng: 106.82,
    rating: 5,
  },
  {
    id: "vkylie-hope",
    quote: "🙏🏻 …",
    name: "Vkylie Hope",
    city: "Malaysia",
    country: "MY",
    lat: 3.19,
    lng: 101.72,
    rating: 5,
  },
  {
    id: "chiraa-sleepy",
    quote: "Memberi rating bintang 5 tanpa komentar.",
    name: "chiraa sleepy",
    city: "Singapura",
    country: "SG",
    lat: 1.4,
    lng: 103.87,
    rating: 5,
  },
  {
    id: "ayu-ramadhani",
    quote: "Memberi rating bintang 5 tanpa komentar.",
    name: "Ayu Ramadhani",
    city: "Surabaya",
    country: "ID",
    lat: -7.28,
    lng: 112.72,
    rating: 5,
  },
];

const reviewUrl = "https://g.page/r/CeVXw4q2MI5pEAE/review";

export default function MedanTestimonialsCarousel() {
  return (
    <TestimonialGlobe
      className="bg-gray-50 py-20 md:py-24"
      items={testimonials}
      eyebrow="Rental Mobil Medan"
      heading="Kata pelanggan kami"
      caption="Pengalaman pelanggan VRN Rent Car Medan."
      autoplay
      interval={6000}
      labels={{
        previous: "Testimoni sebelumnya",
        next: "Testimoni berikutnya",
        pin: "Lihat testimoni dari",
        review: "ulasan",
        reviews: "ulasan",
        average: "rata-rata",
        country: "negara",
        countries: "negara",
      }}
      action={
        <a
          href={reviewUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex h-9 items-center rounded-full bg-primary px-4 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
        >
          Beri ulasan di Google
        </a>
      }
    />
  );
}
