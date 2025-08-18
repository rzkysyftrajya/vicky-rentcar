
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { CheckCircle } from "lucide-react";
import { type Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sewa Mobil Jangka Panjang - Rental Bulanan & Korporat se-Indonesia',
  description: 'Solusi rental mobil jangka panjang, bulanan, dan untuk perusahaan di seluruh Indonesia. Nikmati tarif hemat, perawatan penuh, dan fleksibilitas armada dari PT.VICKY RENTCAR NUSANTARA.',
  keywords: ['sewa mobil jangka panjang', 'rental mobil bulanan indonesia', 'sewa mobil perusahaan', 'rental mobil korporat nasional'],
  openGraph: {
    title: 'Sewa Mobil Jangka Panjang - Rental Bulanan & Korporat se-Indonesia',
    description: 'Solusi rental mobil jangka panjang, bulanan, dan untuk perusahaan di seluruh kota besar di Indonesia.',
  },
}


export default function LongTermRentalPage() {
    const benefits = [
        "Tarif Hemat & Fleksibel",
        "Perawatan & Servis Inklusif",
        "Opsi Penukaran Kendaraan",
        "Dukungan Bantuan Darurat 24/7",
        "Bebas dari Biaya Depresiasi",
        "Akses ke Seluruh Armada Kami",
    ];
  return (
    <div className="bg-background">
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="text-center mb-16">
            <h1 className="text-4xl font-extrabold tracking-tight mb-4 text-gradient">Sewa Mobil Jangka Panjang & Korporat</h1>
            <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
                Solusi rental mobil bulanan yang efisien untuk perusahaan, profesional, atau pribadi di seluruh Indonesia. Nikmati kenyamanan berkendara tanpa beban kepemilikan.
            </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="space-y-8">
                 <h2 className="text-3xl font-bold text-primary">Keuntungan Eksklusif Rental Jangka Panjang Nasional</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {benefits.map((benefit, index) => (
                        <div key={index} className="flex items-start p-4 bg-secondary rounded-lg shadow-sm hover:shadow-md transition-shadow">
                            <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                            <span className="text-base font-semibold text-secondary-foreground">{benefit}</span>
                        </div>
                    ))}
                </div>
            </div>
            <Card className="p-8 shadow-lg sticky top-24">
                <CardHeader className="p-0 mb-6">
                    <CardTitle className="text-2xl text-center text-primary">Minta Penawaran Khusus</CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                    <form className="space-y-6">
                        <Input placeholder="Nama Anda" aria-label="Nama Anda"/>
                        <Input type="email" placeholder="Email Anda" aria-label="Email Anda"/>
                        <Input type="tel" placeholder="Nomor Telepon Anda" aria-label="Nomor Telepon"/>
                        <Textarea placeholder="Detail kebutuhan sewa Anda (durasi, jenis kendaraan, kota, dll.)" rows={5} aria-label="Kebutuhan sewa Anda"/>
                        <Button type="submit" className="w-full bg-gradient-to-r from-primary to-blue-400 text-white shadow-lg hover:scale-105 transition-transform">Dapatkan Penawaran Terbaik</Button>
                    </form>
                </CardContent>
            </Card>
        </div>
      </section>
    </div>
  );
}

    