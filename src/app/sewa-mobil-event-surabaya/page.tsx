"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import {
  Calendar,
  Users,
  CheckCircle,
  Phone,
  Star,
  MapPin,
  Clock,
  ChevronLeft,
  Mic,
  Music,
  Trophy,
  Briefcase,
  Coffee,
  Headphones,
  Camera,
  Settings,
  ArrowRight,
  Target,
} from "lucide-react";
import { motion } from "framer-motion";

export default function SewaMobilEventSurabaya() {
  const whatsappNumber = "6282363389893";
  const whatsappMessage = encodeURIComponent(
    "Halo VRN, saya mau konsultasi sewa mobil untuk event"
  );

  const [selectedEventType, setSelectedEventType] = useState(0);
  const [selectedScale, setSelectedScale] = useState(0);

  const eventTypes = [
    {
      type: "Corporate Event",
      icon: <Briefcase className="w-6 h-6" />,
      description: "Seminar, workshop, conference, company gathering",
      vehicles: ["Sedan Executive", "MPV Premium", "Hiace Commuter"],
      capacity: "5-30 peserta",
      features: [
        "Fleet coordinator dedicated",
        "On-time arrival guarantee",
        "Professional driver uniform",
        "Emergency backup plan",
        "Real-time communication",
      ],
      price: "Corporate Rate",
      color: "blue",
    },
    {
      type: "Social Event",
      icon: <Coffee className="w-6 h-6" />,
      description: "Family gathering, community meeting, celebration",
      vehicles: ["City Car", "SUV", "MPV Family"],
      capacity: "3-20 peserta",
      features: [
        "Flexible pickup points",
        "Family-friendly service",
        "Multiple destination support",
        "Photo documentation ready",
        "Affordable package",
      ],
      price: "Social Rate",
      color: "green",
    },
    {
      type: "Entertainment",
      icon: <Music className="w-6 h-6" />,
      description: "Concert, festival, music event, show",
      vehicles: ["Premium Sedan", "Luxury SUV", "Multiple Unit"],
      capacity: "10-50 peserta",
      features: [
        "VIP transportation service",
        "Artist & crew support",
        "Equipment transportation",
        "Security coordination",
        "Media vehicle ready",
      ],
      price: "Premium Rate",
      color: "purple",
    },
    {
      type: "Sports Event",
      icon: <Trophy className="w-6 h-6" />,
      description: "Tournament, competition, sports gathering",
      vehicles: ["SUV", "Hiace", "Multiple Unit"],
      capacity: "15-40 peserta",
      features: [
        "Team transportation",
        "Equipment carrier",
        "Match day coordination",
        "Weather contingency",
        "Spectator shuttle",
      ],
      price: "Sports Rate",
      color: "orange",
    },
  ];

  const eventScales = [
    {
      scale: "Small Event",
      participants: "10-50 orang",
      vehicles: "1-3 unit",
      duration: "Half day",
      complexity: "Simple",
      description: "Intimate gathering dengan kebutuhan transportation dasar",
      requirements: [
        "Basic coordination",
        "Standard pickup points",
        "Single route planning",
        "Basic timeline",
      ],
    },
    {
      scale: "Medium Event",
      participants: "50-150 orang",
      vehicles: "3-8 unit",
      duration: "Full day",
      complexity: "Moderate",
      description: "Professional event dengan multiple lokasi dan jadwal ketat",
      requirements: [
        "Dedicated coordinator",
        "Multiple pickup zones",
        "Route optimization",
        "Real-time tracking",
        "Backup vehicles",
      ],
    },
    {
      scale: "Large Event",
      participants: "150-500+ orang",
      vehicles: "8-20+ unit",
      duration: "Multi-day",
      complexity: "Complex",
      description: "Major event dengan ratusan peserta dan logistics kompleks",
      requirements: [
        "Event management team",
        "Multiple staging areas",
        "Advanced coordination",
        "24/7 support",
        "Contingency planning",
      ],
    },
  ];

  const coordinationSystem = [
    {
      phase: "Pre-Event Planning",
      timeline: "7-14 hari sebelum",
      activities: [
        "Site visit & route planning",
        "Vehicle allocation & driver assignment",
        "Timeline coordination dengan EO",
        "Emergency protocol setup",
      ],
      icon: <Settings className="w-6 h-6" />,
    },
    {
      phase: "Event Day Execution",
      timeline: "H-0",
      activities: [
        "Early morning vehicle check",
        "Driver briefing & uniform check",
        "Real-time coordination center",
        "On-site problem solving",
      ],
      icon: <Target className="w-6 h-6" />,
    },
    {
      phase: "Post-Event",
      timeline: "H+1",
      activities: [
        "Event debriefing",
        "Feedback collection",
        "Vehicle condition report",
        "Billing & documentation",
      ],
      icon: <CheckCircle className="w-6 h-6" />,
    },
  ];

  const testimonials = [
    {
      name: "Event Organizer Surabaya",
      event: "IT Conference 2024",
      participants: "300 orang",
      text: "VRN handle 15 unit mobil untuk conference kami. Coordination-nya perfect, semua peserta tepat waktu, dan ada backup plan juga. Highly recommended untuk event besar!",
      rating: 5,
      vehicles: "15 unit mixed fleet",
      scale: "Large Event",
    },
    {
      name: "Corporate HR",
      event: "Company Gathering",
      participants: "80 orang",
      text: "Family gathering dengan 80 employee, VRN kasih solusi multiple pickup points sesuai kantor masing-masing. Driver-nya professional dan tau timing yang tepat.",
      rating: 5,
      vehicles: "8 unit MPV",
      scale: "Medium Event",
    },
    {
      name: "Music Festival Organizer",
      event: "Surabaya Music Fest",
      participants: "500+ orang",
      text: "Event musik dengan 500+ pengunjung, VRN handle transport untuk artist, crew, dan VIP. Service level international, tidak ada masalah sama sekali!",
      rating: 5,
      vehicles: "20+ unit premium",
      scale: "Large Event",
    },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <div className="flex flex-col">
      {/* Sticky Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Link
                href="/rental-mobil-surabaya"
                className="flex items-center gap-2"
              >
                <ChevronLeft className="w-5 h-5 text-blue-600" />
                <span className="text-xl font-bold text-blue-600">
                  VRN Surabaya
                </span>
              </Link>
            </div>

            <div className="hidden md:flex items-center space-x-6">
              <button
                onClick={() => scrollToSection("hero")}
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
              >
                Hero
              </button>
              <button
                onClick={() => scrollToSection("jenis-event")}
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
              >
                Jenis Event
              </button>
              <button
                onClick={() => scrollToSection("koordinasi")}
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
              >
                Koordinasi
              </button>
              <button
                onClick={() => scrollToSection("testimoni")}
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
              >
                Testimoni
              </button>
            </div>

            <Link
              href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-full font-medium transition-colors"
            >
              Chat WA
            </Link>
          </div>
        </div>
      </nav>

      {/* Floating WhatsApp Button */}
      <Link
        href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-50 group"
      >
        <div className="relative">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 2, type: "spring", stiffness: 200 }}
            whileHover={{ scale: 1.1 }}
            className="w-16 h-16 rounded-full shadow-2xl overflow-hidden"
          >
            <Image
              src="/icon/wa.png"
              alt="Hubungi kami di WhatsApp"
              width={64}
              height={64}
            />
          </motion.div>
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              delay: 2.5,
              type: "spring",
              stiffness: 300,
              damping: 15,
            }}
            className="absolute -top-2 -left-32 bg-white text-blue-600 text-sm font-bold px-3 py-1.5 rounded-full shadow-lg whitespace-nowrap"
          >
            Event Coordinator!
          </motion.div>
        </div>
      </Link>

      {/* HERO SECTION */}
      <section
        id="hero"
        className="relative h-screen w-full overflow-hidden pt-16"
      >
        <Image
          src="/destinasi-wisata/surabaya.jpg"
          alt="Sewa mobil untuk event di Surabaya"
          fill
          className="absolute inset-0 z-0 object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50 z-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60 z-10" />

        <div className="relative z-20 flex flex-col items-center justify-center h-full text-center px-6">
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-blue-600 text-white px-6 py-2 rounded-full font-bold text-sm mb-6 shadow-lg"
          >
            #1 Event Transportation Surabaya
          </motion.div>

          <motion.h1
            className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-white mb-6 drop-shadow-2xl"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <span className="block text-blue-400">Sewa Mobil untuk Event</span>
            <span className="block text-2xl sm:text-3xl md:text-5xl mt-2">
              Multiple Unit + Coordination Expert
            </span>
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-white max-w-3xl mb-8 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            Dari seminar 50 orang hingga festival 500+ peserta - kami handle
            transportation event dengan multiple unit, koordinasi professional,
            dan guarantee success untuk event organizer Surabaya!
          </motion.p>

          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link
              href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
              target="_blank"
            >
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 md:px-10 md:py-7 text-lg md:text-xl rounded-full shadow-2xl hover:scale-105 transition-all duration-300 flex items-center gap-3"
              >
                <Phone className="w-6 h-6" />
                Konsultasi Event via WhatsApp
              </Button>
            </Link>

            <Button
              size="lg"
              onClick={() => scrollToSection("jenis-event")}
              className="bg-white hover:bg-gray-100 text-blue-900 px-8 py-4 md:px-10 md:py-7 text-lg md:text-xl rounded-full shadow-2xl hover:scale-105 transition-all duration-300"
            >
              Lihat Jenis Event
            </Button>
          </motion.div>

          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="flex flex-wrap justify-center gap-8 mt-12"
          >
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-400">500+</div>
              <div className="text-white text-sm mt-1">Event Success</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-400">20+</div>
              <div className="text-white text-sm mt-1">Max Units</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-400">24/7</div>
              <div className="text-white text-sm mt-1">Event Support</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* JENIS EVENT */}
      <section
        id="jenis-event"
        className="py-20 bg-gradient-to-b from-blue-50 to-white"
      >
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              Jenis Event yang <span className="text-blue-600">VRN Handle</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600">
              4 kategori event dengan fleet dan layanan specialized untuk setiap
              kebutuhan
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {eventTypes.map((event, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -10 }}
                className={`bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all cursor-pointer border-2 ${
                  selectedEventType === i
                    ? "border-blue-500 scale-105"
                    : "border-transparent"
                }`}
                onClick={() => setSelectedEventType(i)}
              >
                <div className="text-center mb-6">
                  <div
                    className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center bg-${event.color}-100 text-${event.color}-600`}
                  >
                    {event.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    {event.type}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    {event.description}
                  </p>
                </div>

                <div className="space-y-3 mb-6">
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <span className="text-xs text-gray-500 block">
                      Capacity:
                    </span>
                    <span className="font-semibold text-gray-800">
                      {event.capacity}
                    </span>
                  </div>

                  <div className="space-y-2">
                    <span className="text-xs text-gray-500 block">
                      Vehicles:
                    </span>
                    {event.vehicles.map((vehicle, idx) => (
                      <div
                        key={idx}
                        className="bg-gray-50 p-2 rounded text-center"
                      >
                        <span className="text-gray-700 text-xs font-medium">
                          {vehicle}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mb-4">
                  <span className="text-xs text-gray-500 block mb-2">
                    Key Features:
                  </span>
                  <div className="space-y-1">
                    {event.features.slice(0, 2).map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <CheckCircle className="w-3 h-3 text-blue-500" />
                        <span className="text-gray-600 text-xs">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="text-center">
                  <div className="text-xs text-gray-500 mb-2">
                    {event.price}
                  </div>
                  <Link
                    href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                      `Halo VRN, saya mau konsultasi untuk ${event.type}`
                    )}`}
                    target="_blank"
                  >
                    <Button
                      className={`w-full bg-${event.color}-600 hover:bg-${event.color}-700 text-white py-2 rounded-lg text-sm font-semibold`}
                    >
                      Tanya Paket
                    </Button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SKALA EVENT */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              Skala Event yang{" "}
              <span className="text-blue-600">VRN Support</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600">
              3 level skala event dengan fleet dan coordination yang disesuaikan
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {eventScales.map((scale, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                whileHover={{ y: -10 }}
                className={`bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all border-2 cursor-pointer ${
                  selectedScale === i
                    ? "border-blue-500 scale-105"
                    : "border-gray-100"
                }`}
                onClick={() => setSelectedScale(i)}
              >
                <div className="text-center mb-6">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
                    <Users className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2 text-gray-800">
                    {scale.scale}
                  </h3>
                  <p className="text-gray-600 mb-4">{scale.description}</p>
                </div>

                <div className="space-y-3 mb-6">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 text-sm">Participants:</span>
                    <span className="font-semibold text-blue-600">
                      {scale.participants}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 text-sm">Vehicles:</span>
                    <span className="font-semibold text-gray-800">
                      {scale.vehicles}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 text-sm">Duration:</span>
                    <span className="font-semibold text-gray-800">
                      {scale.duration}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 text-sm">Complexity:</span>
                    <span
                      className={`font-semibold ${
                        scale.complexity === "Simple"
                          ? "text-green-600"
                          : scale.complexity === "Moderate"
                          ? "text-yellow-600"
                          : "text-red-600"
                      }`}
                    >
                      {scale.complexity}
                    </span>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-bold text-gray-800 mb-3">
                    Requirements:
                  </h4>
                  <div className="space-y-2">
                    {scale.requirements.map((req, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-600 text-sm">{req}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <Link
                  href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                    `Halo VRN, saya mau konsultasi untuk ${scale.scale} dengan ${scale.participants}`
                  )}`}
                  target="_blank"
                >
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold">
                    Tanya Skala Ini
                  </Button>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SISTEM KOORDINASI */}
      <section
        id="koordinasi"
        className="py-20 bg-gradient-to-b from-white to-blue-50"
      >
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              Sistem Koordinasi <span className="text-blue-600">Event VRN</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600">
              3 phase coordination dari planning hingga execution - professional
              dan terstruktur
            </p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-blue-200"></div>

            <div className="space-y-12">
              {coordinationSystem.map((phase, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2 }}
                  className="relative flex items-start gap-8"
                >
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white shadow-lg">
                      {phase.icon}
                    </div>
                  </div>

                  <div className="flex-1 bg-white p-8 rounded-2xl shadow-lg">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <h3 className="text-2xl font-bold text-gray-800 mb-2 md:mb-0">
                        {phase.phase}
                      </h3>
                      <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-bold">
                        {phase.timeline}
                      </span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {phase.activities.map((activity, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <ArrowRight className="w-4 h-4 text-blue-500 mt-1 flex-shrink-0" />
                          <span className="text-gray-600 text-sm">
                            {activity}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-4">
                Event Management Support
              </h3>
              <p className="text-lg mb-6">
                Tim VRN tidak hanya menyediakan kendaraan, tapi juga event
                management support untuk memastikan transportation berjalan
                sempurna sesuai timeline
              </p>
              <Link
                href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                  "Halo VRN, saya mau diskusi sistem koordinasi untuk event saya"
                )}`}
                target="_blank"
              >
                <Button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-full font-bold">
                  Tanya Koordinasi
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section id="testimoni" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              Testimoni Event <span className="text-blue-600">Organizer</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600">
              Pengalaman nyata dari EO dan perusahaan yang sudah merasakan
              layanan event VRN
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testi, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl border border-blue-100"
              >
                <div className="flex items-center gap-2 mb-4">
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-bold">
                    {testi.scale}
                  </span>
                  <span className="bg-green-600 text-white px-3 py-1 rounded-full text-xs font-bold">
                    {testi.vehicles}
                  </span>
                </div>

                <div className="flex gap-1 mb-4">
                  {[...Array(testi.rating)].map((_, j) => (
                    <Star
                      key={j}
                      className="w-4 h-4 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>

                <p className="italic mb-6 text-gray-700 leading-relaxed">
                  "{testi.text}"
                </p>

                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-indigo-500 flex items-center justify-center text-white font-bold text-xl">
                    <Trophy className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">{testi.name}</h4>
                    <p className="text-sm text-gray-500">{testi.event}</p>
                    <p className="text-sm text-gray-500">
                      {testi.participants}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-24 bg-gradient-to-r from-blue-900 via-blue-700 to-indigo-600 text-white relative overflow-hidden">
        <div className="relative max-w-5xl mx-auto px-6 text-center">
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            className="inline-block bg-white text-blue-900 px-6 py-2 rounded-full font-bold mb-6"
          >
            Multi-Unit Fleet + Event Coordination
          </motion.div>

          <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Event Besar atau Kecil, Kami Handle!
          </h2>

          <p className="text-xl md:text-2xl mb-10 text-blue-100">
            Dari intimate gathering hingga major festival - konsultasi gratis
            untuk determining fleet size, coordination system, dan timeline yang
            perfect!
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                target="_blank"
              >
                <Button className="bg-green-500 hover:bg-green-600 text-white px-12 py-7 text-xl rounded-full shadow-2xl flex items-center gap-3 font-bold">
                  <Phone className="w-6 h-6" />
                  Konsultasi Event via WhatsApp
                </Button>
              </Link>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link href="/rental-mobil-surabaya">
                <Button className="bg-white hover:bg-gray-100 text-blue-900 px-12 py-7 text-xl rounded-full shadow-2xl font-bold">
                  Lihat Layanan Lainnya
                </Button>
              </Link>
            </motion.div>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-blue-300" />
              <span>Multi-Unit Fleet</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-blue-300" />
              <span>Event Coordination</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-blue-300" />
              <span>Professional Timeline</span>
            </div>
          </div>
        </div>
      </section>

      {/* INTERNAL LINKING */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Layanan Lainnya di Surabaya
            </h3>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { title: "Sewa Harian", href: "/sewa-mobil-harian-surabaya" },
              { title: "Sewa Bulanan", href: "/sewa-mobil-bulanan-surabaya" },
              {
                title: "Dengan Sopir",
                href: "/sewa-mobil-dengan-sopir-surabaya",
              },
              { title: "Pernikahan", href: "/sewa-mobil-pernikahan-surabaya" },
            ].map((link, i) => (
              <Link
                key={i}
                href={link.href}
                className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition-all text-center"
              >
                <span className="text-blue-600 font-semibold hover:text-blue-700">
                  {link.title}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
