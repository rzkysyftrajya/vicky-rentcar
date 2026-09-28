import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { PhoneCall, ArrowRight } from 'lucide-react';
import { createMedanWhatsAppUrl } from '@/components/medan/MedanWhatsApp';
import MedanTestimonialsCarousel from '@/components/medan/MedanTestimonialsCarousel';
import { cars } from '@/data/fleet-data';
import { topTourPackages } from '@/data/medan-tour-packages';

export const metadata: Metadata = {
  title: 'Rental Mobil Medan | Vicky Rent Car Nusantara',
  description: 'Layanan rental mobil terpercaya di Medan. Melayani antar jemput bandara Kualanamu, perjalanan bisnis, dan wisata di Sumatera Utara.',
};

export default function MedanPage() {
  const showcaseCars = cars.filter(car => 
    ['Toyota Avanza', 'Innova Reborn', 'Innova Zenix', 'Fortuner', 'Toyota Rush', 'Hiace Premio'].includes(car.name)
  ).slice(0, 6);
  
  const featuredCar = showcaseCars.find(car => car.name === 'Innova Zenix') || showcaseCars[0];
  const gridCars = showcaseCars.filter(car => car.name !== featuredCar.name);
  
  return (
    <div className="flex flex-col w-full bg-white text-slate-800">
      {/* SECTION 1: CINEMATIC HERO */}
      <section className="relative min-h-[85vh] lg:min-h-[100vh] flex items-end pb-16 lg:pb-32">
        <div className="absolute inset-0 z-0">
          <Image
            src="/medan/hero-section.webp"
            alt="Rental Mobil Medan"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#102a4c]/90 via-[#102a4c]/70 to-transparent" />
        </div>
        
        <div className="medan-container relative z-10 w-full text-white">
          <div className="max-w-2xl">
            <p className="medan-eyebrow mb-4">Rental Mobil Medan</p>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
              Perjalanan Anda di Medan, dimulai dari sini.
            </h1>
            <p className="text-lg text-white/90 mb-8 max-w-xl leading-relaxed">
              Vicky Rent Car Nusantara membantu kebutuhan perjalanan dari dan di Medan. Temukan pilihan kendaraan untuk agenda harian, jemputan Kualanamu, perjalanan keluarga, bisnis, maupun wisata Sumatera Utara.
            </p>
            <div className="flex flex-wrap gap-4">
              <a 
                href={createMedanWhatsAppUrl({ type: 'general' })}
                target="_blank"
                rel="noopener noreferrer"
                className="medan-button bg-white text-[#102a4c] hover:bg-gray-100 flex items-center gap-2"
              >
                <PhoneCall className="w-5 h-5" />
                Hubungi via WhatsApp
              </a>
              <Link 
                href="#fleet"
                className="medan-button border border-white text-white hover:bg-white/10"
              >
                Lihat armada
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: INTRODUCTION */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="medan-container grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="medan-eyebrow">Rental mobil di Medan</p>
            <h2 className="medan-heading-2 mt-3">Kendaraan yang mengikuti rencana perjalanan Anda.</h2>
            <p className="medan-body-muted mt-5">
              Dari mobilitas dalam kota hingga perjalanan menuju berbagai tujuan di Sumatera Utara, halaman ini membantu Anda mengenal pilihan layanan dan armada VRN Rent Car Medan.
            </p>
            <p className="medan-body-muted mt-4">
              Pertimbangkan tujuan, jadwal, dan jumlah penumpang saat memilih kendaraan. Dengan begitu, Anda dapat menghubungi tim kami dengan gambaran kebutuhan yang lebih jelas.
            </p>
            <ul className="mt-6 grid gap-3 text-sm font-medium text-[var(--medan-text)] sm:grid-cols-2">
              <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-[var(--medan-accent)]" />Perjalanan dalam kota</li>
              <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-[var(--medan-accent)]" />Antar jemput Kualanamu</li>
              <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-[var(--medan-accent)]" />Agenda keluarga dan bisnis</li>
              <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-[var(--medan-accent)]" />Perjalanan wisata Sumatera Utara</li>
            </ul>
            <Link href="#fleet" className="mt-7 inline-flex items-center gap-2 font-semibold text-[var(--medan-primary)] hover:underline">
              Bandingkan pilihan armada <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="relative aspect-[16/9] overflow-hidden rounded-2xl bg-gray-100">
            <Image
              src="/medan/layanan/hero-section-layanan.webp"
              alt="Pilihan kendaraan untuk perjalanan dari Medan"
              fill
              sizes="(max-width: 1023px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>
        </div>
      </section>

      {/* SECTION 3: SERVICES */}
      <section className="py-24 bg-white">
        <div className="medan-container">
          <div className="mb-12">
            <p className="medan-eyebrow">Layanan</p>
            <h2 className="medan-heading-2">Satu tujuan, satu kendaraan.</h2>
            <p className="medan-body-muted mt-4 max-w-2xl">
              Pilih layanan berdasarkan agenda perjalanan. Sampaikan rute dan jadwal Anda untuk membahas kendaraan yang paling sesuai.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
            {/* Block 1: Full width on mobile, spans 2 columns on desktop */}
            <Link 
              href="/medan/airport"
              className="group block relative overflow-hidden rounded-2xl md:col-span-2 aspect-video"
            >
              <Image 
                src="/medan/layanan/layanan-antar-jemput-bandara.webp"
                alt="Antar jemput Bandara Kualanamu"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
              <div className="absolute bottom-0 left-0 p-6 md:p-10 w-full flex justify-between items-end">
                <div className="text-white">
                  <h3 className="text-2xl md:text-3xl font-bold mb-2">Antar jemput Bandara Kualanamu</h3>
                  <p className="max-w-2xl text-sm leading-relaxed text-white/85 md:text-base">Atur perjalanan dari Kualanamu ke rumah, hotel, atau kantor di Medan. Sertakan jadwal penerbangan dan titik tujuan saat menghubungi kami.</p>
                </div>
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm group-hover:bg-white/40 transition-colors shrink-0">
                  <ArrowRight className="w-5 h-5 text-white" />
                </div>
              </div>
            </Link>
            
            {/* Block 2 */}
            <Link 
              href="/medan/fleet"
              className="group block relative overflow-hidden rounded-2xl aspect-video"
            >
              <Image 
                src="/medan/layanan/layanan-mobilitas-harian.webp"
                alt="Rental mobil harian"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
              <div className="absolute bottom-0 left-0 p-6 md:p-8 w-full flex justify-between items-end">
                <div className="text-white">
                  <h3 className="text-2xl font-bold mb-2">Rental mobil harian</h3>
                  <p className="max-w-md text-sm leading-relaxed text-white/85">Untuk agenda kerja, keperluan keluarga, atau beberapa tujuan dalam sehari. Pilih kendaraan dengan mempertimbangkan rute dan jumlah penumpang.</p>
                </div>
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm group-hover:bg-white/40 transition-colors shrink-0">
                  <ArrowRight className="w-5 h-5 text-white" />
                </div>
              </div>
            </Link>

            {/* Block 3 */}
            <Link 
              href="/medan/tourism"
              className="group block relative overflow-hidden rounded-2xl aspect-video"
            >
              <Image 
                src="/medan/layanan/layanan-medan-dan-sumatera-utara.webp"
                alt="Wisata Sumatera Utara"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
              <div className="absolute bottom-0 left-0 p-6 md:p-8 w-full flex justify-between items-end">
                <div className="text-white">
                  <h3 className="text-2xl font-bold mb-2">Wisata Sumatera Utara</h3>
                  <p className="max-w-md text-sm leading-relaxed text-white/85">Berangkat dari Medan menuju Berastagi, Parapat, atau kawasan Danau Toba. Sampaikan rute dan rencana singgah untuk membicarakan perjalanan Anda.</p>
                </div>
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm group-hover:bg-white/40 transition-colors shrink-0">
                  <ArrowRight className="w-5 h-5 text-white" />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 4: FEATURED VEHICLE */}
      <section id="fleet" className="py-24 bg-[var(--medan-primary-dark)] text-white">
        <div className="medan-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="relative mx-auto w-full max-w-md aspect-[4/5] rounded-2xl overflow-hidden bg-white/5 p-4 flex items-center justify-center border border-white/10">
              <div className="absolute bottom-0 left-10 right-10 h-1/3 bg-white/10 blur-3xl rounded-full" />
              <Image
                src={featuredCar.image}
                alt={featuredCar.name}
                fill
                className="object-contain relative z-10"
              />
            </div>
            
            <div>
              <p className="medan-eyebrow !text-white/70">Armada unggulan</p>
              <h2 className="medan-heading-2 text-white mt-2 mb-4">{featuredCar.name}</h2>
              <p className="mb-6 max-w-xl leading-relaxed text-white/80">
                Sebagai {featuredCar.category} dengan kapasitas {featuredCar.specs[0].toLowerCase()}, {featuredCar.name} dapat dipertimbangkan untuk perjalanan keluarga maupun agenda bisnis. Lihat konfigurasi dan fitur unit sebelum menyesuaikannya dengan rencana perjalanan.
              </p>
              <span className="inline-block px-3 py-1 bg-[var(--medan-accent)] text-[var(--medan-primary-dark)] text-sm font-semibold rounded-full mb-8">
                {featuredCar.category}
              </span>
              
              <div className="flex flex-wrap gap-2 mb-8">
                {featuredCar.specs.map((spec, i) => (
                  <span key={i} className="px-4 py-2 rounded-full border border-white/20 text-sm text-white/90">
                    {spec}
                  </span>
                ))}
              </div>
              
              <ul className="space-y-3 mb-10 text-white/80">
                {featuredCar.highlights.map((highlight, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-[var(--medan-accent)] mt-2 shrink-0" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
              
              <a 
                href={createMedanWhatsAppUrl({ type: 'vehicle', vehicle: featuredCar.name })}
                target="_blank"
                rel="noopener noreferrer"
                className="medan-button bg-[var(--medan-accent)] text-[var(--medan-primary-dark)] hover:bg-[var(--medan-accent)]/90 inline-flex items-center gap-2"
              >
                <PhoneCall className="w-5 h-5" />
                Pesan {featuredCar.name}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: FLEET GRID */}
      <section className="py-24 bg-gray-50">
        <div className="medan-container">
          <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <p className="medan-eyebrow">Pilihan armada</p>
              <h2 className="medan-heading-2">Kendaraan untuk setiap kebutuhan.</h2>
              <p className="medan-body-muted mt-3 max-w-2xl">
                Bandingkan kategori, kapasitas, dan karakter tiap kendaraan. Gunakan informasi ini sebagai titik awal untuk menentukan unit yang sesuai dengan jumlah penumpang dan agenda Anda.
              </p>
            </div>
            <Link 
              href="/medan/fleet"
              className="text-[var(--medan-primary)] font-medium flex items-center gap-2 hover:underline"
            >
              Lihat semua armada
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {gridCars.map((car, idx) => (
              <div 
                key={idx} 
                className="group bg-white rounded-2xl overflow-hidden border border-gray-200 hover:border-[var(--medan-primary)]/30 transition-colors shadow-sm"
              >
                <div className="relative aspect-[4/5] bg-gray-100 p-4 overflow-hidden">
                  <Image 
                    src={car.image} 
                    alt={car.name} 
                    fill 
                    className="object-contain transition-transform duration-700 group-hover:scale-105" 
                  />
                </div>
                <div className="p-6">
                  <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-1">{car.category}</p>
                  <h3 className="text-xl font-bold mb-4">{car.name}</h3>
                  <p className="mb-4 text-sm leading-6 text-gray-600">{car.highlights.slice(0, 2).join(" · ")}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {car.specs.slice(0, 2).map((spec, i) => (
                      <span key={i} className="px-3 py-1 bg-gray-100 rounded-md text-xs font-medium text-gray-600">
                        {spec}
                      </span>
                    ))}
                  </div>
                  <a 
                    href={createMedanWhatsAppUrl({ type: 'vehicle', vehicle: car.name })}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex justify-center items-center gap-2 py-3 border border-gray-300 rounded-xl text-sm font-medium hover:bg-gray-50 transition-colors"
                  >
                    <PhoneCall className="w-4 h-4" />
                    Tanya via WhatsApp
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6: MEDAN AND DESTINATIONS */}
      <section className="py-24 bg-white">
        <div className="medan-container">
          <div className="mb-12">
            <p className="medan-eyebrow">Tujuan wisata</p>
            <h2 className="medan-heading-2">Jelajahi Sumatera Utara.</h2>
            <p className="text-gray-600 mt-4 max-w-2xl text-base leading-7">Dari perjalanan luar kota menuju Danau Toba hingga wisata alam di Bukit Lawang dan kawasan Berastagi, setiap tujuan memiliki rute dan kebutuhan perjalanan yang berbeda. Ceritakan rencana Anda untuk membahas kendaraan yang tepat.</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-6">
            {/* Danau Toba - Large */}
            <a 
              href={createMedanWhatsAppUrl({ type: 'destination', destination: 'Danau Toba' })}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden rounded-2xl lg:col-span-8 lg:row-span-2 aspect-[4/3] lg:aspect-auto"
            >
              <Image
                src="/medan/destinasi-wisata/danau-toba.webp"
                alt="Danau Toba"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 p-8 w-full">
                <p className="text-white font-semibold text-2xl mb-2">Danau Toba</p>
                <p className="mb-3 max-w-lg text-sm leading-relaxed text-white/85">Rencanakan perjalanan dari Medan menuju kawasan danau dan Pulau Samosir.</p>
                <div className="flex items-center gap-2 text-white/90 transition-transform duration-300 group-hover:translate-x-1">
                  <span className="text-sm">Rencanakan perjalanan</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </a>
            
            {/* Bukit Lawang - Medium */}
            <a 
              href={createMedanWhatsAppUrl({ type: 'destination', destination: 'Bukit Lawang' })}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden rounded-2xl lg:col-span-4 aspect-[4/3]"
            >
              <Image
                src="/medan/destinasi-wisata/bukit-lawang.webp"
                alt="Bukit Lawang"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 p-6 w-full">
                <p className="text-white font-semibold text-xl mb-2">Bukit Lawang</p>
                <p className="mb-3 text-sm leading-relaxed text-white/85">Wisata alam dan trekking di kawasan Gunung Leuser.</p>
                <div className="flex items-center gap-2 text-white/90 transition-transform duration-300 group-hover:translate-x-1">
                  <span className="text-sm">Rencanakan perjalanan</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </a>
            
            {/* Sibayak - Medium */}
            <a 
              href={createMedanWhatsAppUrl({ type: 'destination', destination: 'Gunung Sibayak' })}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden rounded-2xl lg:col-span-4 aspect-[4/3]"
            >
              <Image
                src="/medan/destinasi-wisata/sibayak.webp"
                alt="Gunung Sibayak"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 p-6 w-full">
                <p className="text-white font-semibold text-xl mb-2">Gunung Sibayak</p>
                <p className="mb-3 text-sm leading-relaxed text-white/85">Tujuan wisata pegunungan di kawasan Berastagi dan dataran tinggi Karo.</p>
                <div className="flex items-center gap-2 text-white/90 transition-transform duration-300 group-hover:translate-x-1">
                  <span className="text-sm">Rencanakan perjalanan</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* SECTION 7: AIRPORT TRANSFER */}
      <section className="bg-[var(--medan-primary-dark)] text-white overflow-hidden">
        <div className="flex flex-col lg:flex-row">
          <div className="lg:w-1/2 relative aspect-[4/3] lg:aspect-auto bg-[var(--medan-primary-dark)]">
            <Image
              src="/medan/layanan/layanan-antar-jemput-bandara.webp"
              alt="Transfer Bandara Kualanamu"
              fill
              className="object-contain"
            />
          </div>
          <div className="lg:w-1/2 p-12 lg:p-24 flex items-center">
            <div>
              <p className="medan-eyebrow !text-white/70">Transfer bandara</p>
              <h2 className="medan-heading-2 text-white mt-2 mb-6">Kualanamu — Medan</h2>
              <p className="text-white/80 text-lg mb-10 max-w-md">
                Atur perjalanan dari dan menuju Bandara Internasional Kualanamu. Saat menghubungi kami, sertakan jadwal penerbangan, titik jemput atau tujuan, serta jumlah penumpang.
              </p>
              <div className="flex flex-wrap gap-4">
                <a 
                  href={createMedanWhatsAppUrl({ type: 'airport' })}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="medan-button bg-white text-[var(--medan-primary-dark)] hover:bg-gray-100 inline-flex items-center gap-2"
                >
                  <PhoneCall className="w-5 h-5" />
                  Pesan penjemputan
                </a>
                <Link 
                  href="/medan/airport"
                  className="medan-button border border-white/30 text-white hover:bg-white/10 flex items-center justify-center"
                >
                  Pelajari lebih lanjut
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 8: TESTIMONIAL */}
      <MedanTestimonialsCarousel />

      {/* SECTION 9: FINAL CTA */}
      <section className="relative min-h-[400px] flex items-center justify-center py-24">
        <div className="absolute inset-0 z-0">
          <Image
            src="/medan/destinasi-wisata/danau-toba.webp"
            alt="Danau Toba"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/70" />
        </div>
        
        <div className="medan-container relative z-10 text-center text-white max-w-3xl">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Siap menentukan kendaraan untuk perjalanan Anda?</h2>
          <p className="text-lg text-white/80 mb-10">
            Ceritakan tujuan, jadwal, dan jumlah penumpang Anda. Tim kami siap membantu membahas pilihan kendaraan untuk perjalanan dari Medan.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href={createMedanWhatsAppUrl({ type: 'general' })}
              target="_blank"
              rel="noopener noreferrer"
              className="medan-button bg-white text-[var(--medan-primary-dark)] hover:bg-gray-100 flex items-center justify-center gap-2"
            >
              <PhoneCall className="w-5 h-5" />
              Hubungi via WhatsApp
            </a>
            <Link 
              href="/medan/fleet"
              className="medan-button border border-white text-white hover:bg-white/10 flex items-center justify-center"
            >
              Lihat pilihan armada
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
