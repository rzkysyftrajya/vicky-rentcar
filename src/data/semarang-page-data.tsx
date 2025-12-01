import {
  Car,
  Users,
  MapPin,
  Clock,
  Star,
  CheckCircle,
  Phone,
  Calendar,
  Check,
} from "lucide-react";

export const heroStats = [
  { num: "500+", label: "Pelanggan Puas" },
  { num: "50+", label: "Armada Siap" },
  { num: "24/7", label: "Layanan Aktif" },
];

export const whyUsPoints = [
  {
    icon: <Car className="w-12 h-12 text-navy-600" />,
    title: "Armada Lengkap & Terawat",
    desc: "Dari city car hingga premium SUV, semua rutin servis & diasuransikan.",
  },
  {
    icon: <Users className="w-12 h-12 text-navy-600" />,
    title: "Sopir Berpengalaman",
    desc: "Driver lokal yang paham rute Semarang dan destinasi wisata setempat.",
  },
  {
    icon: <CheckCircle className="w-12 h-12 text-navy-600" />,
    title: "Harga Transparan & Tanpa Biaya Tersembunyi",
    desc: "Semua paket tertera jelas, tanpa biaya tambahan yang tidak terduga.",
  },
  {
    icon: <Clock className="w-12 h-12 text-navy-600" />,
    title: "Layanan 24/7",
    desc: "Booking kapan pun, layanan antar-jemput bandara tersedia.",
  },
  {
    icon: <MapPin className="w-12 h-12 text-navy-600" />,
    title: "Bisa Lepas Kunci / With Driver",
    desc: "Pilih opsi sewa lepas kunci atau dengan driver profesional.",
  },
  {
    icon: <Star className="w-12 h-12 text-navy-600" />,
    title: "Free Pickup Bandara Semarang",
    desc: "Gratis antar jemput di Bandara Ahmad Yani untuk booking tertentu.",
  },
];

export const carOptions = [
  {
    name: "Toyota Avanza",
    type: "MPV",
    capacity: "6-7 Orang",
    price: "Mulai 450rb/hari",
    features: ["AC Dingin", "Audio System", "Bagasi Luas"],
    popular: false,
    image: "/armada/toyota-all-new-avanza.webp",
  },
  {
    name: "Daihatsu Xenia",
    type: "MPV",
    capacity: "6-7 Orang",
    price: "Mulai 400rb/hari",
    features: ["Irit BBM", "Nyaman", "Cocok Keluarga"],
    popular: false,
    image: "/armada/daihatsu-sigra.webp",
  },
  {
    name: "Innova Reborn",
    type: "Family MPV",
    capacity: "6-7 Orang",
    price: "Mulai 650rb/hari",
    features: ["Extra Comfort", "Premium Audio", "Kamera Parkir"],
    popular: true,
    image: "/armada/innova-reborn.webp",
  },
  {
    name: "Innova Zenix",
    type: "Modern MPV",
    capacity: "6-7 Orang",
    price: "Mulai 700rb/hari",
    features: ["Sunroof", "Hybrid Engine", "Captain Seat"],
    popular: false,
    image: "/armada/innova-zenix .webp",
  },
  {
    name: "Fortuner",
    type: "SUV",
    capacity: "7 Orang",
    price: "Mulai 1.3jt/hari",
    features: ["Gagah & Tangguh", "Mesin Diesel", "4x4 Ready"],
    popular: false,
    image: "/armada/fortuner.webp",
  },
  {
    name: "Pajero",
    type: "SUV",
    capacity: "7 Orang",
    price: "Mulai 1.2jt/hari",
    features: ["Desain Sporty", "Sunroof", "Performa Handal"],
    popular: false,
    image: "/armada/pajero.webp",
  },
  {
    name: "Hiace Premio",
    type: "Minibus",
    capacity: "14 Orang",
    price: "Mulai 1.2jt/hari",
    features: ["Kabin Luas", "AC Plafon", "Cocok Rombongan"],
    popular: false,
    image: "/armada/hiace-premio.webp",
  },
  {
    name: "Alphard",
    type: "Luxury MPV",
    capacity: "6-7 Orang",
    price: "Mulai 1.8jt/hari",
    features: ["Captain Seat", "Entertainment", "Premium Leather"],
    popular: false,
    image: "/armada/alphard-new.webp",
  },
];

export const bookingSteps = [
  {
    icon: <Phone className="w-12 h-12 text-green-600" />,
    title: "Pilih Mobil",
    desc: "Hubungi via WhatsApp, pilih mobil & tanggal yang diinginkan.",
  },
  {
    icon: <Calendar className="w-12 h-12 text-green-600" />,
    title: "Hubungi WhatsApp",
    desc: "Tim kami konfirmasi ketersediaan & detail booking.",
  },
  {
    icon: <Check className="w-12 h-12 text-green-600" />,
    title: "Mobil Diantar",
    desc: "Driver antar mobil ke lokasi Anda, siap berangkat.",
  },
];

export const destinations = [
  {
    name: "Lawang Sewu",
    category: "Sejarah",
    desc: "Gedung bersejarah ikonik Semarang dengan arsitektur kolonial Belanda.",
    image: "/destinasi/lorong-lawang-sewu.jpg",
  },
  {
    name: "Kota Lama Semarang",
    category: "Landmark",
    desc: "Area heritage dengan bangunan tua, kafe, dan spot foto klasik.",
    image: "/destinasi/kota-lama-semarang.jpg",
  },
  {
    name: "Brown Canyon",
    category: "Alam",
    desc: "Panorama tebing eksotis populer untuk foto & sunset.",
    image: "/destinasi/brown-canyon.jpg",
  },
  {
    name: "Klenteng Sam Poo Kong",
    category: "Religi & Budaya",
    desc: "Kuil bersejarah dan kompleks religi yang indah dan fotogenik.",
    image: "/destinasi/sam-poo-kong.jpg",
  },
  {
    name: "Kampung Pelangi",
    category: "Foto Spot",
    desc: "Kampung warna-warni yang instagramable di kawasan Semarang.",
    image: "/destinasi/kampung-pelangi.jpg",
  },
  {
    name: "Simpang Lima",
    category: "Citylife",
    desc: "Pusat kota yang ramai — cocok untuk kuliner & jalan-jalan malam.",
    image: "/destinasi/simpang-lima.jpg",
  },
];

export const culinarySpots = [
  {
    name: "Lumpia Semarang",
    icon: "🥟",
    loc: "Jl. Gang Lombok / Semarang Kota",
  },
  {
    name: "Tahu Gimbal",
    icon: "🍲",
    loc: "Pasar Semawis / Semarang Lama",
  },
  {
    name: "Wingko Babat",
    icon: "🫓",
    loc: "Sekitar Simpang Lima",
  },
];

export const testimonials = [
  {
    name: "Dewi Prasetya",
    city: "Semarang",
    text: "Pelayanan cepat dan sopirnya ramah. Mobil bersih dan nyaman. Recommended!",
    rating: 5,
  },
  {
    name: "Rian H.",
    city: "Semarang",
    text: "Booking via WhatsApp gampang, mobil datang on-time. Mantap lah.",
    rating: 5,
  },
  {
    name: "Alya",
    city: "Jakarta",
    text: "We did a one-day tour to Brown Canyon & Sam Poo Kong — driver helpful and punctual.",
    rating: 5,
  },
  {
    name: "Budi Santoso",
    city: "Yogyakarta",
    text: "Armada lengkap, harga transparan. Sudah 3x pakai VRN, selalu puas.",
    rating: 5,
  },
];

export const promo = {
  title: "Promo Pengunjung Halaman Semarang",
  benefits: [
    "Tanpa DP",
    "Bisa COD",
    "Free Air Mineral",
    "Free Pickup Bandara A. Yani",
  ],
};

export const faqs = [
  {
    q: "Apakah bisa sewa mobil lepas kunci?",
    a: "Ya, tersedia opsi lepas kunci dengan syarat KTP & deposit. Hubungi kami untuk detail.",
  },
  {
    q: "Persyaratan sewa mobil di Semarang?",
    a: "KTP asli, SIM A aktif, dan deposit sesuai jenis mobil. Untuk wisatawan, paspor & visa.",
  },
  {
    q: "Apakah bisa antar jemput hotel / bandara?",
    a: "Ya, kami melayani pickup di hotel, bandara Ahmad Yani, dan lokasi lainnya di Semarang.",
  },
  {
    q: "Metode pembayaran apa saja?",
    a: "Transfer bank (BCA, BNI, BRI, Mandiri), e-wallet, atau tunai saat pengembalian.",
  },
  {
    q: "Jam operasional?",
    a: "Layanan 24/7, booking via WhatsApp kapan saja.",
  },
  {
    q: "Service area Semarang?",
    a: "Semarang kota, Ungaran, Salatiga, Ambarawa, Demak, dan sekitarnya.",
  },
  {
    q: "Bisa drop luar kota (Jogja, Solo, Kudus)?",
    a: "Ya, tersedia dengan biaya tambahan sesuai jarak & durasi.",
  },
  {
    q: "Bagaimana jika ada komplain layanan?",
    a: "Hubungi kami langsung via WhatsApp, kami prioritaskan penyelesaian cepat & memuaskan.",
  },
];

export const travelTips = [
  {
    title: "Tips Berkendara di Semarang",
    tips: [
      "Gunakan aplikasi navigasi seperti Google Maps untuk menghindari kemacetan di jam sibuk.",
      "Perhatikan rambu lalu lintas dan patuhi batas kecepatan, terutama di area wisata.",
      "Bawa uang tunai untuk tol dan parkir, meskipun banyak tempat menerima e-money.",
      "Jika hujan, hindari genangan air di jalan-jalan utama seperti Jl. Pandanaran.",
    ],
  },
  {
    title: "Rekomendasi Waktu Terbaik Berkunjung",
    tips: [
      "Musim kemarau (April-September) cocok untuk wisata outdoor seperti Brown Canyon.",
      "Hari kerja lebih sepi di destinasi wisata, sedangkan weekend ramai pengunjung.",
      "Festival budaya seperti Imlek di Kota Lama sering diadakan pada bulan Februari.",
      "Cuaca Semarang cukup panas, bawa topi dan sunscreen saat beraktivitas di luar ruangan.",
    ],
  },
  {
    title: "Kuliner Khas yang Wajib Dicoba",
    tips: [
      "Lumpia Semarang: Coba yang asli di Gang Lombok, tekstur kulitnya renyah dan isiannya gurih.",
      "Tahu Gimbal: Paduan tahu goreng dengan sayuran segar, cocok sebagai lauk atau camilan.",
      "Wingko Babat: Kue tradisional dari kelapa parut, manis dan legit. Beli di toko-toko di sekitar Simpang Lima.",
      "Jangan lupa mencoba nasi ayam Semarang yang gurih dan pedas.",
    ],
  },
  {
    title: "Transportasi dan Aksesibilitas",
    tips: [
      "Bandara Ahmad Yani mudah diakses dari pusat kota, sekitar 20-30 menit perjalanan.",
      "Gunakan Trans Semarang untuk transportasi umum yang murah dan nyaman.",
      "Banyak hotel di Semarang menyediakan shuttle service ke bandara.",
      "Untuk perjalanan antar kota, kereta api dari Stasiun Tawang sangat recommended.",
    ],
  },
];
