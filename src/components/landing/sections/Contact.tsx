
import { Button } from "@/components/ui/button";
import { Clock, MapPin, Phone, MessageCircle } from "lucide-react";

interface ContactProps {
  whatsapp: string;
  phone: string;
  hours: string;
  area: string;
}

export default function Contact({ whatsapp, phone, hours, area }: ContactProps) {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">Hubungi Kami Sekarang</h2>
        <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
          Dapatkan penawaran terbaik untuk sewa mobil di {area}. Tim kami siap melayani Anda 24 jam.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12 text-left">
          <div className="flex items-center gap-4">
            <MessageCircle className="w-8 h-8 text-blue-600" />
            <div>
              <h3 className="font-semibold">WhatsApp</h3>
              <a href={`https://wa.me/62${whatsapp.substring(1)}`} className="text-gray-600 hover:text-blue-600">
                {whatsapp}
              </a>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Phone className="w-8 h-8 text-blue-600" />
            <div>
              <h3 className="font-semibold">Telepon</h3>
              <a href={`tel:${phone}`} className="text-gray-600 hover:text-blue-600">
                {phone}
              </a>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Clock className="w-8 h-8 text-blue-600" />
            <div>
              <h3 className="font-semibold">Jam Operasional</h3>
              <p className="text-gray-600">{hours}</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <MapPin className="w-8 h-8 text-blue-600" />
            <div>
              <h3 className="font-semibold">Area Layanan</h3>
              <p className="text-gray-600">{area}</p>
            </div>
          </div>
        </div>
        <Button size="lg" asChild>
          <a href={`https://wa.me/62${whatsapp.substring(1)}`} target="_blank" rel="noopener noreferrer">
            Chat WhatsApp Sekarang
          </a>
        </Button>
      </div>
    </section>
  );
}
