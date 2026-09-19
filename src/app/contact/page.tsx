import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail } from "lucide-react";
import { type Metadata } from "next";
import SocialMediaCard from "@/components/layout/SocialMediaCard";

export const metadata: Metadata = {
  title: "Hubungi Kami - Rental Mobil 24 Jam di Seluruh Indonesia",
  description:
    "Hubungi PT.VICKY RENTCAR NUSANTARA untuk pemesanan sewa mobil di seluruh Indonesia. Kami siap melayani 24 jam untuk kebutuhan rental mobil Anda, baik melalui telepon, WhatsApp, atau email.",
  keywords: [
    "kontak rental mobil indonesia",
    "nomor telepon sewa mobil",
    "alamat rental mobil",
    "pesan sewa mobil nasional",
  ],
  openGraph: {
    title: "Hubungi Kami - Rental Mobil 24 Jam di Seluruh Indonesia",
    description:
      "Hubungi PT.VICKY RENTCAR NUSANTARA untuk pemesanan sewa mobil di seluruh kota besar di Indonesia.",
  },
};

export default function ContactPage() {
  return (
    <div className="bg-background">
      <section className="container mx-auto px-4 py-16 md:py-24">
        {/* Judul */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold tracking-tight mb-4 text-gradient">
            Hubungi Kami
          </h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
            Kami siap membantu Anda 24 jam di seluruh Indonesia. Kirim pesan,
            telepon, atau tanyakan tentang layanan kami di kota Anda untuk
            merencanakan rental mobil berikutnya.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Informasi Kontak & Maps */}
          <div className="space-y-8">
            <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300 hover:border-primary/50 border">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">
                  Informasi Kontak Pusat
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6 text-lg">
                <p className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <span>
                    Jl. Sempurna Gg. Mawar No.12 dusun II, sambirejo timur, Kec.
                    Medan Tembung, Kabupaten Deli Serdang, Sumatera Utara 20371
                  </span>
                </p>
                <a
                  href="tel:082363389893"
                  className="flex items-center gap-4 hover:text-primary transition-colors duration-300"
                >
                  <Phone className="w-6 h-6 text-primary" /> 0823-6338-9893
                </a>
                <a
                  href="mailto:vickeycky@gmail.com"
                  className="flex items-center gap-4 hover:text-primary transition-colors duration-300"
                >
                  <Mail className="w-6 h-6 text-primary" /> vickeycky@gmail.com
                </a>
              </CardContent>
            </Card>

            {/* Social Media */}
            <SocialMediaCard />

            {/* Google Maps Embed dengan pin merah */}
            <div className="h-96 w-full bg-muted rounded-lg overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3981.9722727809753!2d98.77453057416143!3d3.593831696380299!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x303137a8ded38db1%3A0x698e30b68ac357e5!2sPT.VICKY%20RENTAL%20NUSANTARA!5e0!3m2!1sid!2sid!4v1768310361303!5m2!1sid!2sid"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Peta Lokasi PT.VICKY RENTAL NUSANTARA"
              ></iframe>
            </div>
          </div>

          {/* Form Kirim Pesan */}
          <Card className="p-8 shadow-lg sticky top-24">
            <h2 className="text-2xl font-bold mb-6 text-primary">
              Kirim Pesan Cepat
            </h2>
            <form className="space-y-6">
              <Input placeholder="Nama Anda" aria-label="Nama Anda" />
              <Input
                type="email"
                placeholder="Email Anda"
                aria-label="Email Anda"
              />
              <Input placeholder="Subjek Pesan" aria-label="Subjek Pesan" />
              <Textarea
                placeholder="Tuliskan pesan Anda di sini... (Contoh: Ketersediaan Avanza di Jakarta)"
                rows={5}
                aria-label="Pesan Anda"
              />
              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-primary to-blue-400 text-white shadow-lg hover:scale-105 transition-transform"
              >
                Kirim Pesan
              </Button>
            </form>
          </Card>
        </div>
      </section>
    </div>
  );
}
