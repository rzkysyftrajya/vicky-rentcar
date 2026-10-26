import type { Metadata } from "next";

const canonicalUrl =
  "https://www.vickyrentcarnusantara.com/kebijakan-privasi/";

export const metadata: Metadata = {
  title: {
    absolute: "Kebijakan Privasi | Vicky Rentcar Nusantara",
  },
  description:
    "Informasi tentang data, analitik, tracking, dan layanan pihak ketiga pada layanan rental mobil Vicky Rentcar Nusantara di Surabaya, Medan, dan Batam.",
  alternates: {
    canonical: canonicalUrl,
  },
  openGraph: {
    title: "Kebijakan Privasi | Vicky Rentcar Nusantara",
    description:
      "Ketahui bagaimana informasi diproses saat menggunakan layanan rental mobil Vicky Rentcar Nusantara di Surabaya, Medan, dan Batam.",
    url: canonicalUrl,
    type: "website",
    siteName: "Vicky Rentcar Nusantara",
    locale: "id_ID",
  },
};

export default function KebijakanPrivasiPage() {
  return (
    <main className="container mx-auto px-4 py-16 md:py-24">
      <article className="prose mx-auto max-w-4xl dark:prose-invert">
        <h1 className="text-center text-4xl font-extrabold tracking-tight text-gradient">
          Kebijakan Privasi
        </h1>
        <p>
          Kebijakan ini menjelaskan informasi yang dapat diproses ketika Anda
          menggunakan situs dan menghubungi layanan Vicky Rentcar Nusantara
          (VRN). Kami berupaya menjelaskan praktik yang tercermin pada
          implementasi website, termasuk perbedaan tracking pada setiap layanan.
        </p>
        <p>
          <strong>Terakhir diperbarui:</strong> 26 Oktober 2026
        </p>

        <h2>Pengelola dan ruang lingkup</h2>
        <p>
          Layanan pada website ini menggunakan nama Vicky Rentcar Nusantara.
          Informasi website juga menyebut PT. Vicky Rentcar Nusantara. Kebijakan
          ini berlaku untuk layanan rental mobil Surabaya di{" "}
          <a href="https://www.vickyrentcarnusantara.com/rental-mobil-surabaya/">
            vickyrentcarnusantara.com/rental-mobil-surabaya
          </a>
          , Medan di{" "}
          <a href="https://www.vickyrentcarnusantara.com/medan/">
            vickyrentcarnusantara.com/medan
          </a>
          , dan Batam di{" "}
          <a href="https://www.vickyrentcarnusantara.com/batam/">
            vickyrentcarnusantara.com/batam
          </a>
          .
        </p>
        <p>
          Untuk pertanyaan atau permintaan terkait privasi, Anda dapat
          menghubungi kami melalui{" "}
          <a
            href="https://wa.me/6282363389893"
            target="_blank"
            rel="noopener noreferrer"
          >
            WhatsApp pada nomor yang tercantum di website
          </a>
          . Kami tidak mencantumkan alamat atau email karena informasi tersebut
          tidak dapat dipastikan dari kanal resmi yang ditampilkan pada
          implementasi website yang diperiksa.
        </p>

        <h2>Informasi yang dapat diproses</h2>
        <ul>
          <li>
            <strong>Data penggunaan dan teknis.</strong> Layanan analitik dan
            tag yang dipasang pada website dapat memproses informasi penggunaan
            halaman atau interaksi teknis yang diperlukan untuk analitik dan
            pengukuran iklan. Rincian data yang diproses dapat bergantung pada
            konfigurasi layanan terkait.
          </li>
          <li>
            <strong>Informasi atribusi kampanye.</strong> Pada halaman Surabaya,
            implementasi membaca parameter kampanye UTM serta identifier iklan
            seperti GCLID, GBRAID, atau WBRAID apabila tersedia pada URL.
          </li>
          <li>
            <strong>Metadata klik WhatsApp Surabaya.</strong> Saat tautan
            WhatsApp diklik pada layanan Surabaya, website menyiapkan metadata
            berupa jenis dan ID event, waktu, path halaman, parameter kampanye
            yang tersedia, serta nama kendaraan jika dapat dikenali dari kartu
            kendaraan. Metadata ini dikirim ke endpoint website untuk
            pencatatan klik; endpoint dapat meneruskan data ke layanan
            penerima pihak ketiga apabila konfigurasi server terkait tersedia.
            Mekanisme klik ini tidak dengan sendirinya mengirim isi percakapan
            WhatsApp.
          </li>
          <li>
            <strong>Informasi yang Anda sampaikan melalui WhatsApp.</strong>{" "}
            Jika Anda melanjutkan ke WhatsApp dan mengirim pesan, informasi
            dalam pesan tersebut diberikan oleh Anda dan diproses melalui
            layanan WhatsApp serta oleh kami untuk menanggapi pertanyaan atau
            permintaan layanan. Tautan dapat menyertakan teks awal sesuai
            layanan yang dipilih.
          </li>
        </ul>
        <p>
          Pada halaman layanan Surabaya, Medan, dan Batam yang menjadi cakupan
          kebijakan ini, tidak ditemukan formulir aktif yang mengirim data
          pengunjung melalui halaman tersebut. Karena itu, kebijakan ini tidak
          menyatakan bahwa halaman-halaman tersebut mengumpulkan nama, email,
          nomor telepon, atau dokumen identitas melalui formulir. Endpoint
          server Surabaya memiliki jalur pemrosesan pencocokan yang mencakup
          nomor telepon dan persetujuan, tetapi formulir aktif yang
          menggunakannya tidak ditemukan pada halaman yang diperiksa.
        </p>

        <h2>Tracking dan layanan pihak ketiga</h2>
        <ul>
          <li>
            <strong>Surabaya:</strong> website memuat Google Ads dan
            mengirimkan event konversi terkait klik WhatsApp. Metadata klik
            tertentu juga dapat diproses melalui endpoint Surabaya sebagaimana
            dijelaskan di atas.
          </li>
          <li>
            <strong>Medan:</strong> website memuat Google Ads dan Google Tag
            Manager, serta mengirim event konversi ketika tautan WhatsApp
            diklik. Tag tambahan yang mungkin dikonfigurasi di dalam Google
            Tag Manager tidak dapat dipastikan hanya dari kode halaman.
          </li>
          <li>
            <strong>Batam:</strong> website memuat Google Ads dan mengirim
            event konversi untuk klik tautan WhatsApp.
          </li>
          <li>
            <strong>Layanan lintas halaman:</strong> root website memuat Vercel
            Analytics dan Ahrefs Analytics.
          </li>
          <li>
            <strong>WhatsApp:</strong> Anda dapat memilih untuk melanjutkan
            komunikasi melalui WhatsApp, yang dioperasikan oleh pihak ketiga.
          </li>
        </ul>
        <p>
          Penyedia pihak ketiga dapat memproses informasi sesuai konfigurasi
          integrasi dan ketentuan privasi mereka masing-masing. Kebijakan ini
          tidak mengasumsikan konfigurasi rinci tag pihak ketiga atau bahwa
          setiap penyedia menerima jenis data yang sama pada setiap kunjungan.
        </p>

        <h2>Cookies dan penyimpanan pada browser</h2>
        <p>
          Modal promo Batam menggunakan <code>sessionStorage</code> untuk
          mengingat bahwa modal telah ditampilkan selama sesi browser. Website
          juga mendaftarkan service worker dan menggunakan Cache Storage untuk
          kebutuhan cache teknis. Penyimpanan cache teknis tersebut tidak
          otomatis sama dengan cookie iklan.
        </p>
        <p>
          Skrip analitik, iklan, atau layanan pihak ketiga dapat memiliki
          perilaku penyimpanan browser sendiri. Rincian perilaku cookie dari
          seluruh penyedia belum diverifikasi dalam kebijakan ini; karena itu,
          kami tidak menyatakan bahwa website sama sekali tidak menggunakan
          cookies.
        </p>

        <h2>Penggunaan, pembagian, dan masa penyimpanan</h2>
        <p>
          Informasi di atas digunakan sejauh diperlukan untuk menjalankan
          fungsi website, memahami penggunaan layanan, mengukur interaksi iklan,
          mencatat klik WhatsApp Surabaya apabila mekanismenya aktif, dan
          menanggapi pesan yang Anda kirimkan. Informasi dapat diproses oleh
          penyedia analitik, iklan, hosting, endpoint penerima yang digunakan
          oleh integrasi Surabaya, atau WhatsApp sesuai fungsi masing-masing.
        </p>
        <p>
          Masa penyimpanan, lokasi pemrosesan, dan prosedur penghapusan untuk
          setiap penyedia atau sistem belum dapat dipastikan dari implementasi
          website yang diperiksa. Kami tidak menetapkan jangka waktu atau
          jaminan penghapusan yang belum terverifikasi.
        </p>

        <h2>Permintaan dan pertanyaan privasi</h2>
        <p>
          Anda dapat menyampaikan pertanyaan atau permintaan terkait informasi
          yang telah Anda kirimkan kepada kami melalui{" "}
          <a
            href="https://wa.me/6282363389893"
            target="_blank"
            rel="noopener noreferrer"
          >
            WhatsApp resmi yang tercantum pada website
          </a>
          . Sertakan informasi yang cukup agar kami dapat memahami permintaan
          Anda. Permintaan yang berkaitan dengan data yang dikelola langsung
          oleh penyedia pihak ketiga mungkin perlu diajukan kepada penyedia
          tersebut.
        </p>

        <h2>Perubahan kebijakan</h2>
        <p>
          Kebijakan ini dapat diperbarui apabila praktik website atau layanan
          berubah. Tanggal pembaruan terakhir ditampilkan pada halaman ini.
        </p>
      </article>
    </main>
  );
}
