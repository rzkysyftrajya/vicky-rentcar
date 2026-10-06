import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "Sewa Mobil Bulanan untuk Perusahaan & Pribadi",
  description:
    "Cari sewa mobil bulanan untuk operasional perusahaan atau kebutuhan pribadi? Pilih armada dan kota layanan, lalu minta penawaran sesuai durasi serta kebutuhan Anda.",
  keywords: [
    "sewa mobil bulanan",
    "rental mobil bulanan",
    "harga sewa mobil bulanan",
    "sewa mobil bulanan untuk perusahaan",
    "rental mobil bulanan untuk operasional kantor",
    "sewa mobil jangka panjang",
    "sewa mobil korporat",
    "rental mobil kontrak bulanan",
    "sewa mobil bulanan dengan sopir",
    "sewa mobil bulanan tanpa sopir",
  ],
  alternates: {
    canonical: "/sewa-mobil-bulanan/",
  },
  openGraph: {
    title: "Sewa Mobil Bulanan untuk Perusahaan & Pribadi",
    description:
      "Solusi rental mobil bulanan untuk kebutuhan operasional perusahaan maupun pribadi. Konsultasikan kota, armada, durasi, dan kebutuhan layanan Anda.",
    url: "https://www.vickyrentcarnusantara.com/sewa-mobil-bulanan/",
    type: "website",
  },
};

export default function Page() {
  const inquiryUrl =
    "https://wa.me/6282363389893?text=Halo%20VRN%2C%20saya%20ingin%20menanyakan%20paket%20sewa%20mobil%20bulanan.%20Kota%3A%20____.%20Durasi%3A%20____.%20Jenis%20mobil%2Fkebutuhan%3A%20____.";

  return (
    <main>
      <section className="py-16 md:py-24 bg-gray-900 text-white text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 drop-shadow">
            Sewa Mobil Bulanan untuk Perusahaan & Pribadi
          </h1>
          <p className="text-xl md:text-2xl max-w-2xl mx-auto font-light drop-shadow">
            Rental mobil bulanan untuk kebutuhan operasional dan mobilitas
            pribadi. Konsultasikan kota layanan, pilihan armada, durasi sewa,
            serta opsi pengemudi untuk mendapatkan penawaran yang sesuai.
          </p>
          <a
            href={inquiryUrl}
            className="mt-8 inline-block bg-primary-600 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:bg-primary-700 transition-colors"
          >
            Minta Penawaran Sewa Bulanan
          </a>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Keuntungan Rental Mobil Bulanan
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-center">
            <div className="p-6 border rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-2 text-primary">
                Biaya Lebih Terencana
              </h3>
              <p className="text-muted-foreground">
                Sewa jangka bulanan membantu perusahaan dan pengguna pribadi
                merencanakan anggaran transportasi berdasarkan durasi kontrak.
              </p>
            </div>
            <div className="p-6 border rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-2 text-primary">
                Dukungan Perawatan
              </h3>
              <p className="text-muted-foreground">
                Tanyakan cakupan servis, perawatan, asuransi, dan pajak pada
                penawaran agar ketentuan setiap paket jelas sejak awal.
              </p>
            </div>
            <div className="p-6 border rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-2 text-primary">
                Pilihan Armada Fleksibel
              </h3>
              <p className="text-muted-foreground">
                Konsultasikan ketersediaan MPV, SUV, atau kendaraan niaga
                berdasarkan kota dan kebutuhan penggunaan Anda.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gray-100">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-6">
            Sewa Mobil Bulanan untuk Kebutuhan yang Berbeda
          </h2>
          <p className="text-muted-foreground text-center mb-10">
            Paket rental mobil bulanan dapat disesuaikan untuk kebutuhan
            operasional perusahaan, penugasan proyek, maupun penggunaan
            pribadi. Ketersediaan unit, wilayah layanan, dan opsi dengan atau
            tanpa sopir dikonfirmasi saat konsultasi.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-6 bg-white rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3 text-primary">
                Rental Mobil Bulanan untuk Perusahaan
              </h3>
              <p className="text-muted-foreground">
                Sewa mobil kontrak bulanan dapat menjadi pilihan bagi kantor
                yang membutuhkan kendaraan operasional tanpa mengelola
                kepemilikan armada sendiri. Diskusikan jumlah unit, periode
                sewa, kebutuhan pengemudi, dan administrasi tagihan perusahaan.
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3 text-primary">
                Sewa Mobil Bulanan untuk Pribadi
              </h3>
              <p className="text-muted-foreground">
                Untuk tinggal sementara, perjalanan panjang, atau mobilitas
                harian, tanyakan pilihan rental mobil bulanan sesuai kota dan
                jenis kendaraan yang dibutuhkan. Ketentuan pemakaian dan biaya
                tambahan dijelaskan sebelum pemesanan.
              </p>
            </div>
          </div>
          <p className="text-muted-foreground text-center mt-8">
            Layanan tersedia di sejumlah kota di Indonesia.{" "}
            <a
              href="/sewa-mobil-bulanan-surabaya/"
              className="text-primary font-semibold underline underline-offset-4"
            >
              Lihat informasi sewa mobil bulanan Surabaya
            </a>{" "}
            atau tanyakan ketersediaan untuk kota tujuan Anda.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <img
                src="https://d1g6w7sntckt92.cloudfront.net/public/images/color_option_images/Et2vNir4jDOI3x8AdWcas8vkuboHVoYagILs9ZfP.png"
                alt="Sewa Mobil untuk Korporat"
                className="rounded-xl shadow-lg w-full h-auto"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-4">
                Solusi Ideal untuk Korporat
              </h2>
              <p className="text-muted-foreground mb-4">
                Sewa mobil bulanan untuk perusahaan membantu menyediakan
                kendaraan operasional dengan biaya kontrak yang dapat
                direncanakan. Rincian tanggung jawab perawatan, asuransi, pajak,
                dan layanan pengganti mengikuti ketentuan penawaran.
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Pengelolaan kebutuhan kendaraan operasional lebih praktis.</li>
                <li>Rincian biaya dan masa kontrak dikonsultasikan di awal.</li>
                <li>
                  Tanyakan ketentuan dukungan atau kendaraan pengganti di
                  dalam kontrak.
                </li>
                <li>
                  Sesuaikan kebutuhan unit dengan jumlah dan aktivitas tim.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row-reverse items-center gap-12">
            <div className="md:w-1/2">
              <img
                src="https://d1g6w7sntckt92.cloudfront.net/public/images/color_option_images/unVhEcDT9UUrXmtKqeluFgSeaWF8o7v8lkuDCFHM.png"
                alt="Sewa Mobil Bulanan Pribadi"
                className="rounded-xl shadow-lg w-full h-auto"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-4">
                Pilihan Nyaman untuk Pribadi
              </h2>
              <p className="text-muted-foreground mb-4">
                Sewa mobil bulanan untuk pribadi bisa menjadi alternatif saat
                membutuhkan kendaraan dalam periode tertentu tanpa membeli
                mobil. Pilih kebutuhan kendaraan dan kota layanan, lalu
                konfirmasikan syarat penggunaan serta biaya dalam penawaran.
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Tidak perlu berkomitmen pada kepemilikan kendaraan.</li>
                <li>Durasi sewa dibicarakan sesuai kebutuhan perjalanan.</li>
                <li>Persyaratan administrasi dijelaskan sebelum pemesanan.</li>
                <li>
                  Cocok untuk kebutuhan tinggal sementara atau mobilitas
                  jangka panjang.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-10">
            Cara Meminta Penawaran Rental Mobil Bulanan
          </h2>
          <ol className="list-decimal list-inside space-y-4 text-muted-foreground max-w-2xl mx-auto">
            <li>
              Sampaikan kota penggunaan, tanggal mulai, dan lama sewa yang
              direncanakan.
            </li>
            <li>
              Jelaskan jenis mobil, jumlah unit, serta kebutuhan dengan sopir
              atau tanpa sopir.
            </li>
            <li>
              Tinjau penawaran, termasuk biaya, cakupan layanan, persyaratan,
              dan ketentuan kontrak.
            </li>
          </ol>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gray-100">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-10">
            FAQ Sewa Mobil Bulanan
          </h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-2">
                Berapa harga sewa mobil bulanan?
              </h3>
              <p className="text-muted-foreground">
                Harga rental mobil bulanan bergantung pada kota, jenis mobil,
                durasi, jumlah unit, dan pilihan layanan. Hubungi tim kami untuk
                meminta rincian penawaran sesuai kebutuhan.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">
                Apakah tersedia sewa mobil bulanan dengan sopir atau lepas
                kunci?
              </h3>
              <p className="text-muted-foreground">
                Pilihan dengan sopir atau tanpa sopir dapat ditanyakan saat
                konsultasi. Ketersediaannya mengikuti kota, jenis kendaraan,
                dan persyaratan yang berlaku.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">
                Apakah biaya perawatan, asuransi, dan pajak sudah termasuk?
              </h3>
              <p className="text-muted-foreground">
                Cakupan setiap paket dapat berbeda. Pastikan biaya perawatan,
                asuransi, pajak, dan komponen lain tercantum dengan jelas pada
                penawaran atau kontrak sebelum menyetujui sewa.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">
                Informasi apa yang perlu disiapkan untuk meminta penawaran?
              </h3>
              <p className="text-muted-foreground">
                Siapkan kota layanan, tanggal mulai, lama sewa, jenis dan
                jumlah mobil, serta kebutuhan pengemudi. Informasi tersebut
                membantu tim memeriksa ketersediaan dan menghitung penawaran
                yang relevan.
              </p>
            </div>
          </div>
          <div className="text-center mt-10">
            <a
              href={inquiryUrl}
              className="inline-block bg-primary-600 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:bg-primary-700 transition-colors"
            >
              Konsultasikan Kebutuhan Bulanan
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
