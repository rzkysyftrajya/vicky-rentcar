import {
  Car,
  Users,
  MapPin,
  Clock,
  Star,
  CheckCircle,
  Shield,
  Phone,
  Award,
  Heart,
} from "lucide-react";

export const heroStats = [
  { num: "4.9/5", label: "Rating Google" },
  { num: "2015", label: "Sejak Tahun" },
  { num: "24/7", label: "Layanan Aktif" },
];

export const whyUsPoints = [
  {
    icon: <Shield className="w-12 h-12" />,
    title: "Armada Lengkap & Terawat",
    desc: "Koleksi mobil modern dari city car hingga premium, semua dalam kondisi prima dengan maintenance rutin",
  },
  {
    icon: <Users className="w-12 h-12" />,
    title: "Driver Profesional & Ramah",
    desc: "Tim driver berpengalaman dengan pengetahuan mendalam tentang Surabaya dan sekitarnya",
  },
  {
    icon: <CheckCircle className="w-12 h-12" />,
    title: "Kenyamanan & Keamanan",
    desc: "Setiap perjalanan dijamin aman dengan mobil bersih, nyaman, dan driver bertanggung jawab",
  },
  {
    icon: <Clock className="w-12 h-12" />,
    title: "On Time & Reliable",
    desc: "Kami selalu tepat waktu dengan layanan yang bisa diandalkan untuk setiap kebutuhan Anda",
  },
  {
    icon: <MapPin className="w-12 h-12" />,
    title: "Free Konsultasi Rute",
    desc: "Bimbingan gratis untuk rute terbaik di Surabaya, dari Bandara Juanda hingga destinasi wisata",
  },
  {
    icon: <Phone className="w-12 h-12" />,
    title: "Customer Service Fast Response",
    desc: "Tim support kami siap membantu Anda 24/7 dengan respon cepat dan solusi tepat",
  },
  {
    icon: <Heart className="w-12 h-12" />,
    title: "Pelayanan Ramah & Personal",
    desc: "Pendekatan personal dengan sentuhan kehangatan khas Surabaya untuk pengalaman terbaik",
  },
  {
    icon: <Award className="w-12 h-12" />,
    title: "Pengalaman Terpercaya",
    desc: "Lebih dari 8 tahun melayani pelanggan di Surabaya dengan komitmen tinggi pada kepuasan",
  },
];

export const carOptions = [
  {
    name: "Daihatsu Ayla",
    type: "City Car",
    capacity: "4 Orang",
    features: ["AC", "Power Steering", "Airbag"],
    sellingPoints: ["City Car", "Irit BBM", "Mudah Parkir"],
    popular: false,
    image: "/halaman-surabaya/armada-surabaya/AYLA.webp",
  },
  {
    name: "Toyota Avanza",
    type: "MPV",
    capacity: "6-7 Orang",
    features: ["AC Dingin", "Audio System", "Bagasi Luas"],
    sellingPoints: ["Paling Ekonomis", "Irit BBM", "Cocok Keluarga"],
    popular: true,
    image: "/halaman-surabaya/armada-surabaya/TOYOA-AVANZA.webp",
  },
  {
    name: "Toyota Calya",
    type: "MPV",
    capacity: "6-7 Orang",
    features: ["Low Cost", "Fitur Lengkap", "Stabil"],
    sellingPoints: ["Harga Terjangkau", "Keluarga Muda", "Value for Money"],
    popular: false,
image: "/halaman-surabaya/armada-surabaya/CALYA.webp",
  },
  {
    name: "Suzuki Ertiga",
    type: "MPV",
    capacity: "7 Orang",
    features: ["Spacious", "Comfortable", "Fuel Efficient"],
    sellingPoints: ["Nyaman", "Irit", "Fitur Modern"],
    popular: true,
image: "/halaman-surabaya/armada-surabaya/ERTIGA.webp",
  },
  {
    name: "Daihatsu Sigra",
    type: "MPV",
    capacity: "7 Orang",
    features: ["Compact MPV", "7 Seater", "ABS"],
    sellingPoints: ["Kecil Luas", "Parkir Mudah", "Budget"],
    popular: false,
    image: "/halaman-surabaya/armada-surabaya/SIGRA.webp",
  },
  {
    name: "Toyota Rush",
    type: "SUV",
    capacity: "7 Orang",
    features: ["SUV Styling", "High Ground Clearance", "VVT-i Engine"],
    sellingPoints: ["SUV Keluarga", "Tangguh", "Stylish"],
    popular: false,
image: "/halaman-surabaya/armada-surabaya/TOYOTA-RUSH.webp",
  },
  {
    name: "Suzuki XL7",
    type: "SUV",
    capacity: "7 Orang",
    features: ["Panorama Roof", "Moda Tech", "Hybrid Ready"],
    sellingPoints: ["Premium SUV", "Fitur Canggih", "Adventure Ready"],
    popular: false,
image: "/halaman-surabaya/armada-surabaya/SUZUKI-XL7.webp",
  },
  {
    name: "Toyota Fortuner",
    type: "SUV",
    capacity: "7 Orang",
    features: ["4x4 System", "Diesel Engine", "High Performance"],
    sellingPoints: ["Offroad King", "Power", "Prestige"],
    popular: true,
    image: "/halaman-surabaya/armada-surabaya/FORTUNER-GR-4X2.webp",
  },
  {
    name: "Toyota Agya",
    type: "City Car",
    capacity: "4 Orang",
    features: ["AC", "Power Steering", "Airbag"],
    sellingPoints: ["City Car", "Sangat Irit", "Mudah Parkir"],
    popular: false,
    image: "/halaman-surabaya/armada-surabaya/AGYA.webp",
  },
  {
    name: "Toyota Alphard Gen 3",
    type: "MPV Premium",
    capacity: "6-7 Orang",
    features: ["Captain Seat", "AC Dual Zone", "Power Door"],
    sellingPoints: ["Luxury MPV", "VIP Transfer", "Comfort Maksimal"],
    popular: true,
    image: "/halaman-surabaya/armada-surabaya/ALPHARD-GEN-3.webp",
  },
  {
    name: "Toyota Alphard Gen 4",
    type: "MPV Premium",
    capacity: "6-7 Orang",
    features: ["Hybrid Engine", "Panorama Roof", "ADAS"],
    sellingPoints: ["Future Luxury", "Eco Friendly", "Tech Advanced"],
    popular: true,
    image: "/halaman-surabaya/armada-surabaya/ALPHARD-GEN-4.webp",
  },
  {
    name: "Daihatsu Terios",
    type: "SUV",
    capacity: "7 Orang",
    features: ["High Ground Clearance", "Keyless Entry", "ABS"],
    sellingPoints: ["SUV Kompak", "Adventure Ready", "Family SUV"],
    popular: false,
    image: "/halaman-surabaya/armada-surabaya/DAIHATSU-TERIOS-DOUBLE-CABIN.webp",
  },
  {
    name: "Toyota Hilux Double Cabin",
    type: "Pickup",
    capacity: "5 Orang",
    features: ["4x4", "Diesel Turbo", "Payload Besar"],
    sellingPoints: ["Workhorse", "Towing Capacity", "Reliable"],
    popular: false,
    image: "/halaman-surabaya/armada-surabaya/HILUX-DOUBLE-CABIN.webp",
  },
  {
    name: "Toyota Hiace Commuter",
    type: "Minibus",
    capacity: "14 Orang",
    features: ["Spacious", "AC Dingin", "Comfortable Seat"],
    sellingPoints: ["Group Travel", "Shuttle Service", "Event Transport"],
    popular: true,
    image: "/halaman-surabaya/armada-surabaya/HIACE-COMMUTER.webp",
  },
  {
    name: "Toyota Hiace Premio",
    type: "Minibus Premium",
    capacity: "12 Orang",
    features: ["Luxury Interior", "TV Monitor", "Leather Seat"],
    sellingPoints: ["Premium Shuttle", "Business Group", "VIP Commuter"],
    popular: true,
    image: "/halaman-surabaya/armada-surabaya/HIACE-PREMIO.webp",
  },
  {
    name: "Honda Brio",
    type: "City Car",
    capacity: "4 Orang",
    features: ["RS Variant", "Sporty Design", "Turbo Engine"],
    sellingPoints: ["Young Driver", "Fun to Drive", "Stylish"],
    popular: false,
    image: "/halaman-surabaya/armada-surabaya/HONDA-BRIO.webp",
  },
  {
    name: "Toyota Innova Reborn",
    type: "MPV",
    capacity: "7-8 Orang",
    features: ["Captain Seat", "Touchscreen", "Safety Features"],
    sellingPoints: ["Trusted MPV", "Spacious", "Reliable Daily"],
    popular: true,
    image: "/halaman-surabaya/armada-surabaya/INNOVA-REBORN.webp",
  },
  {
    name: "Toyota Innova Zenix",
    type: "MPV Hybrid",
    capacity: "7 Orang",
    features: ["Hybrid Powertrain", "TNGA Platform", "Advanced Safety"],
    sellingPoints: ["Next Gen MPV", "Fuel Efficient", "Modern Design"],
    popular: true,
    image: "/halaman-surabaya/armada-surabaya/INNOVA-ZENIX.webp",
  },
  {
    name: "Isuzu Elf Minibus",
    type: "Minibus",
    capacity: "16 Orang",
    features: ["Diesel Engine", "Large Capacity", "Durable"],
    sellingPoints: ["Big Group", "Long Distance", "Heavy Duty"],
    popular: false,
    image: "/halaman-surabaya/armada-surabaya/ISUZU-ELF-MINIBUS.webp",
  },
  {
    name: "Toyota Land Cruiser",
    type: "SUV Premium",
    capacity: "7 Orang",
    features: ["Full Time 4WD", "V8 Engine", "Luxury Interior"],
    sellingPoints: ["Ultimate SUV", "Offroad Legend", "Prestige"],
    popular: true,
    image: "/halaman-surabaya/armada-surabaya/LAND-CRUISER.webp",
  },
  {
    name: "Mitsubishi Pajero",
    type: "SUV",
    capacity: "7 Orang",
    features: ["Super Select 4WD", "Monocoque Body", "High Tech"],
    sellingPoints: ["Japanese SUV", "Comfort Offroad", "Elegant"],
    popular: true,
    image: "/halaman-surabaya/armada-surabaya/PAJERO.webp",
  },
  {
    name: "Mitsubishi Xpander",
    type: "MPV",
    capacity: "7 Orang",
    features: ["Low Floor", "Wide Door", "Safety Pack"],
    sellingPoints: ["Practical MPV", "Spacious Cabin", "Value Leader"],
    popular: false,
    image: "/halaman-surabaya/armada-surabaya/XPANDER.webp",
  },
];

export const popularCars = [
  carOptions.find(c => c.name === "Toyota Avanza")!,
  carOptions.find(c => c.name === "Toyota Innova Reborn")!,
  carOptions.find(c => c.name === "Toyota Innova Zenix")!,
  carOptions.find(c => c.name === "Toyota Alphard Gen 3")!,
  carOptions.find(c => c.name === "Toyota Hiace Premio")!,
  carOptions.find(c => c.name === "Honda Brio")!,
];



export const destinations = [
  {
    name: "Tugu Pahlawan & Museum",
    category: "Sejarah",
    desc: "Ikon Surabaya yang wajib dikunjungi, simbol perjuangan arek-arek Suroboyo",
    image: "/halaman-surabaya/tugu-pahlawan.jpeg",
  },
  {
    name: "House of Sampoerna",
    category: "Budaya",
    desc: "Museum heritage dengan arsitektur kolonial yang instagramable",
    image: "/halaman-surabaya/house-of-sampoerna.jpeg",
  },
  {
    name: "Jembatan Suramadu",
    category: "Landmark",
    desc: "Jembatan terpanjang di Indonesia, spot foto sunset terbaik",
    image: "/halaman-surabaya/jembatan-suramadu.jpg",
  },
  {
    name: "Kebun Binatang Surabaya",
    category: "Wisata Keluarga",
    desc: "Salah satu kebun binatang tertua di Asia Tenggara",
    image: "/halaman-surabaya/kebun-binatang-surabaya.jpg",
  },
  {
    name: "Pantai Kenjeran & Pagoda",
    category: "Pantai",
    desc: "Sunrise spektakuler & kuliner seafood segar",
    image: "/halaman-surabaya/Pantai-Kenjeran-Pagoda.jpg",
  },
  {
    name: "Ciputra Waterpark",
    category: "Hiburan",
    desc: "Waterpark terbesar di Surabaya dengan berbagai wahana seru untuk keluarga",
    image: "/halaman-surabaya/Ciputra-Waterpark.webp",
  },
];

export const culinarySpots = [
  { name: "Rawon Setan", icon: "🍲", loc: "Jl. Embong Malang" },
  { name: "Rujak Cingur", icon: "🥗", loc: "Jl. Ahmad Jaiz" },
  { name: "Sate Klopo", icon: "🍢", loc: "Jl. Walikota Mustajab" },
  { name: "Tahu Tek", icon: "🍳", loc: "Jl. Dinoyo" },
  { name: "Lontong Balap", icon: "🍜", loc: "Jl. Kranggan" },
  { name: "Semanggi Suroboyo", icon: "☘️", loc: "Taman Bungkul" },
];

export const testimonials = [
  {
    name: "Budi Santoso",
    city: "Surabaya",
    text: "Sudah 3 tahun pakai Vicky Rentcar untuk keperluan bisnis. Driver-nya selalu on time, mobil selalu bersih dan terawat. Customer service-nya juga sangat responsif. Recommended untuk rental mobil terpercaya Surabaya!",
    rating: 5,
  },
  {
    name: "Maria & Doni",
    city: "Malang",
    text: "Pakai Alphard untuk acara resepsi pernikahan. Semuanya sempurna! Driver-nya sopan, mobil mewah dan nyaman. Timnya juga bantu koordinasi dengan WO. Terima kasih Vicky Rentcar, jasa sewa mobil Surabaya terbaik!",
    rating: 5,
  },
  {
    name: "David Liem",
    city: "Jakarta",
    text: "Sewa mobil untuk operasional perusahaan di Surabaya. Armada lengkap dari city car sampai minibus. Driver professional dan bisa bahasa Inggris. Harga kompetitif dengan pelayanan premium. Partner bisnis yang reliable!",
    rating: 5,
  },
  {
    name: "Emily Chen",
    city: "Singapore",
    text: "Antar jemput Bandara Juanda sangat memuaskan. Driver nunggu dengan rambu nama, mobil bersih dan nyaman. Perfect untuk turis seperti saya. Vicky Rentcar benar-benar rental mobil dengan sopir terbaik di Surabaya!",
    rating: 5,
  },
  {
    name: "Keluarga Wijaya",
    city: "Sidoarjo",
    text: "Liburan keluarga ke Batu naik Innova Zenix. Driver-nya sabar banget anter anak-anak, mobilnya luas dan nyaman. Ada entertainment system juga. Vicky Rentcar memang jasa sewa mobil Surabaya yang bisa dipercaya!",
    rating: 5,
  },
  {
    name: "Fadli Rahman",
    city: "Surabaya",
    text: "Customer service-nya fast response banget! Butuh mobil urgent untuk meeting, langsung dihandle dengan baik. Driver datang tepat waktu, mobil siap pakai. Vicky Rentcar memang rental mobil harian Surabaya yang professional!",
    rating: 5,
  },
];

export const faqs = [
  {
    q: "Apakah harga sudah termasuk supir & BBM?",
    a: "Ya! Semua paket VRN Surabaya sudah termasuk driver profesional. BBM untuk dalam kota Surabaya sudah termasuk, untuk luar kota disesuaikan dengan jarak tempuh.",
  },
  {
    q: "Berapa minimal waktu sewa?",
    a: "Minimal sewa 12 jam untuk paket harian. Tersedia juga paket half-day (6 jam) dan paket airport transfer mulai dari 3 jam.",
  },
  {
    q: "Apakah bisa sewa mobil untuk ke luar kota?",
    a: "Tentu bisa! Kami melayani perjalanan ke Malang, Bromo, Batu, Banyuwangi, hingga Bali. Driver kami berpengalaman untuk perjalanan jarak jauh.",
  },
  {
    q: "Bagaimana cara booking?",
    a: "Sangat mudah! Cukup klik tombol WhatsApp, pilih mobil & tanggal, lalu tim kami akan konfirmasi ketersediaan. Tanpa ribet, tanpa DP!",
  },
  {
    q: "Apakah ada driver yang bisa bahasa Inggris?",
    a: "Ya, kami punya driver yang fasih berbahasa Inggris, cocok untuk tamu internasional. Tinggal request saat booking.",
  },
  {
    q: "Apakah bisa cancel booking?",
    a: "Bisa! Cancel gratis hingga H-1 sebelum pemakaian. Untuk cancel mendadak, akan dikenakan biaya admin sesuai kebijakan.",
  },
  {
    q: "Apakah mobil terawat dan aman?",
    a: "Semua armada VRN dipastikan kondisi prima, service rutin, dan dilengkapi asuransi all-risk untuk keamanan perjalanan Anda.",
  },
  {
    q: "Apakah melayani antar jemput bandara?",
    a: "Ya! Kami melayani airport transfer dari/ke Bandara Juanda 24/7. Driver sudah standby sesuai jadwal penerbangan Anda.",
  },
];

export const googleReviews = [
  {
    name: "Agung",
    avatar: "/testimoni/rian-hidayat.jpg",
    rating: 5,
    text: "Pelayanannya sangat memuaskan, drivernya ramah dan sangat membantu. Mobilnya juga bersih dan nyaman. Recommended banget buat yang mau sewa mobil di Surabaya!",
    link: "https://maps.app.goo.gl/p7AAgNyAcjcg94gSA",
  },
  {
    name: "Mhd Bilal",
    avatar: "/testimoni/siti-aisyah.jpg",
    rating: 5,
    text: "Baru pengalaman saya rental mobil di vicky rental sangat senang respon cepat mobil bagus dn supir ramah, tq next order",
    link: "https://maps.app.goo.gl/JW7mWApCTiMkccc59",
  },
  {
    name: "Balqis Khanza",
    avatar: "/testimoni/budi-santoso.jpg",
    rating: 5,
    text: "Rekomendasi lah pokoknya pelayanannya bagus mobil bersih wangi dan bagus mantap best lah pokoknya",
    link: "https://maps.app.goo.gl/SaFbm6s5gPMX5TuN7",
  },
];

export const galleryPhotos = [
  "/galeri/galeri1.webp",
  "/galeri/galeri2.webp",
  "/galeri/galeri3.webp",
  "/galeri/galeri4.webp",
  "/galeri/galeri5.webp",
  "/galeri/galeri6.webp",
  "/galeri/galeri7.webp",
  "/galeri/galeri8.webp",
];

export const serviceAreas = [
  "Surabaya Pusat",
  "Surabaya Utara",
  "Surabaya Timur",
  "Surabaya Selatan",
  "Surabaya Barat",
  "Sidoarjo",
  "Gresik",
  "Bandara Juanda",
  "Malang",
  "Batu",
  "Probolinggo",
  "Bromo",
  "Bali (drop off)",
];

export const services = [
  {
    name: "Rental Mobil Harian Surabaya",
    desc: "Layanan sewa mobil harian dengan sopir profesional untuk kebutuhan sehari-hari, meeting bisnis, atau wisata keluarga di Surabaya",
    features: [
      "Sopir berpengalaman",
      "Mobil terawat",
      "Konsultasi rute gratis",
      "CS 24/7",
    ],
    icon: "🚗",
  },
  {
    name: "Sewa Mobil dengan Sopir",
    desc: "Paket lengkap dengan sopir berpengalaman yang familiar dengan jalur terbaik di Surabaya dan sekitarnya",
    features: [
      "Driver profesional",
      "Driver bilingue tersedia",
      "Armada premium",
      "Pelayanan personal",
    ],
    icon: "👨‍💼",
  },
  {
    name: "Rental Mobil Bandara Juanda",
    desc: "Layanan antar jemput dari dan ke Bandara Juanda dengan driver yang standby sesuai jadwal penerbangan Anda",
    features: [
      "Pickup dari hotel",
      "Drop off ke terminal",
      "Monitoring jadwal",
      "Driver standby",
    ],
    icon: "✈️",
  },
  {
    name: "Perjalanan Luar Kota",
    desc: "Trip jarak jauh ke Malang, Bromo, Batu, dan sekitarnya dengan armada yang nyaman untuk perjalanan panjang",
    features: [
      "Armada handal",
      "Driver ahli jalan",
      "Konsumsi perjalanan",
      "Trip aman",
    ],
    icon: "🗺️",
  },
  {
    name: "Mobil Operasional Perusahaan",
    desc: "Solusi transportasi untuk kebutuhan operasional bisnis dengan layanan B2B yang professional dan reliable",
    features: [
      "Konsolidasi tagihan",
      "Driver full-time",
      "Armada beragam",
      "Support bisnis",
    ],
    icon: "🏢",
  },
  {
    name: "Trip Wisata Keluarga",
    desc: "Paket wisata keluarga dengan armada nyaman untuk menjelajahi destinasi wisata terbaik di Surabaya dan sekitarnya",
    features: [
      "Itinerary custom",
      "Armada keluarga",
      "Driver tour guide",
      "Booking mudah",
    ],
    icon: "👨‍👩‍👧‍👦",
  },
];

export const hotelRecommendations = [
  {
    name: "Hotel Majapahit Surabaya",
    stars: 5,
    area: "Tunjungan",
    desc: "Hotel heritage dengan arsitektur kolonial megah & layanan bintang lima.",
    features: ["Pool", "Spa", "Restaurant"],
    image: "/halaman-surabaya/Hotel-Majapahit-Surabaya.jpeg",
  },
  {
    name: "JW Marriott Surabaya",
    stars: 5,
    area: "Embong Malang",
    desc: "Kemewahan modern di pusat kota dengan fasilitas business center lengkap.",
    features: ["Ballroom", "Gym", "Lounge"],
    image: "/halaman-surabaya/JW-Marriott-Surabaya.jpg",
  },
  {
    name: "Shangri-La Surabaya",
    stars: 5,
    area: "Darmo",
    desc: "Resort city dengan nuansa tropis & kuliner internasional kelas dunia.",
    features: ["Garden", "Bar", "Executive Floor"],
    image: "/halaman-surabaya/Shangri-La-Surabaya.png",
  },
];

