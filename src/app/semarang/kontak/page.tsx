import { createSemarangMetadata } from "@/lib/semarang-site/seo";
import { ContactWhatsAppForm } from "@/components/semarang-site/contact-whatsapp-form";
import { PageHeader } from "@/components/semarang-site/common/page-header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/semarang-site/ui/card";
import { MapPin, Phone, Mail, Share2, Globe } from "lucide-react";

export const metadata = createSemarangMetadata({
  title: "Kontak dan Reservasi Rental Mobil Semarang",
  description:
    "Hubungi PT.VRN Semarang untuk cek ketersediaan mobil, minta penawaran sewa dengan sopir atau lepas kunci, dan atur jemput Bandara Ahmad Yani.",
  path: "/semarang/kontak",
});

export default function KontakPage() {
  const primaryPhoneNumber = "6282363389893";
  const message =
    "Halo, saya mengunjungi halaman kontak Anda dan tertarik untuk menyewa mobil dari PT.VRN SEMARANG. Bisa berikan info lebih lanjut?";

  const whatsappUrl = `https://wa.me/${primaryPhoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <>
      <PageHeader
        title="Kontak Rental Mobil Semarang"
        breadcrumb="Beranda / Kontak"
        imageUrl="/semarang/hero-section.webp"
        imageHint="contact us concept"
      />
      <section className="py-16 lg:py-24 bg-secondary/30">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
            <div>
              <h2 className="text-3xl font-bold text-foreground">
                Tetap Terhubung Dengan Kami
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Kami senang mendengar dari Anda! Apakah Anda memiliki
                pertanyaan, butuh penawaran, atau ingin memesan mobil, tim kami
                siap membantu 24/7.
              </p>
              <div className="mt-8 space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="h-8 w-8 text-primary mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold text-foreground">
                      Alamat Kantor
                    </h3>
                    <p className="text-muted-foreground">
                      Jl. Tandang, Kec. Tembalang, Kota Semarang, Jawa Tengah
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone className="h-8 w-8 text-primary mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold text-foreground">
                      Telepon & WhatsApp
                    </h3>
                    <p className="text-muted-foreground">
                      Hubungi kami untuk respon cepat.
                    </p>
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      className="text-primary font-semibold hover:underline text-lg"
                    >
                      +62 823-6338-9893
                    </a>
                  </div>
                </div>
<div className="flex items-start gap-4">
  <Mail className="h-8 w-8 text-primary mt-1" />
  <div>
    <h3 className="text-xl font-semibold text-foreground">
      Alamat Email
    </h3>
    <p className="text-muted-foreground">
      Kirimkan pertanyaan Anda melalui email.
    </p>
    <a
      href="mailto:ptvrnsemarang@gmail.com"
      className="text-primary font-semibold hover:underline text-lg"
    >
      ptvrnsemarang@gmail.com
    </a>
  </div>
</div>
<div className="flex items-start gap-4">
  <Share2 className="h-8 w-8 text-primary mt-1" />
  <div>
    <h3 className="text-xl font-semibold text-foreground">
      Social Media
    </h3>
    <p className="text-muted-foreground">
      Ikuti kami untuk update terbaru.
    </p>
    <a
href="https://www.tiktok.com/@wijayarentcarsemarang?_t=ZS-8wnCs0wRzFq&_r=1"
      target="_blank"
      rel="noopener noreferrer"
      className="text-primary font-semibold hover:underline text-lg"
    >
      @ptvickyrentalnusantara
    </a>
  </div>
</div>
                <div className="flex items-start gap-4">
                  <Globe className="h-8 w-8 text-primary mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold text-foreground">
                      Area Layanan
                    </h3>
                    <p className="text-muted-foreground">
                      Kami melayani seluruh area Semarang, termasuk Semarang Barat, Semarang Tengah, Semarang Selatan, Semarang Timur, Tembalang, dan Banyumanik.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <Card className="bg-card">
                <CardHeader>
                  <CardTitle className="text-2xl">Kirim Pesan Cepat</CardTitle>
                </CardHeader>
                <CardContent>
                  <ContactWhatsAppForm phoneNumber={primaryPhoneNumber} />
                </CardContent>
              </Card>
            </div>
          </div>
          <div className="mt-16 rounded-lg overflow-hidden h-96 shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15839.60605291769!2d110.449066!3d-7.020862!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e708c674e49fd99%3A0x5027a76e356db60!2sTandang%2C%20Kec.%20Tembalang%2C%20Kota%20Semarang%2C%20Jawa%20Tengah!5e0!3m2!1sid!2sid!4v1776340345896!5m2!1sid!2sid"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="dark:grayscale dark:invert"
            ></iframe>
          </div>
        </div>
      </section>
    </>
  );
}
