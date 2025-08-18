
"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

export default function HomeSearchForm() {
    const router = useRouter();
    const [lokasi, setLokasi] = useState("");
    const [layanan, setLayanan] = useState("");
    const [tipeMobil, setTipeMobil] = useState("");

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const params = new URLSearchParams();
        if (lokasi) params.append("lokasi", lokasi);
        if (layanan) params.append("layanan", layanan);
        if (tipeMobil) params.append("tipe", tipeMobil);
        
        router.push(`/fleet?${params.toString()}`);
    }

  return (
    <section className="py-12 md:py-16 bg-background -mt-20 relative z-20">
      <div className="container mx-auto px-4">
        <Card className="p-6 md:p-8 shadow-2xl border-2 border-primary/20 max-w-4xl mx-auto bg-secondary">
          <form onSubmit={handleSubmit}>
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-2 text-gradient">
              Mau Sewa Mobil Apa?
            </h2>
            <p className="text-center text-muted-foreground mb-8">
                Cari di Seluruh Nusantara
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                 <Select name="lokasi" onValueChange={setLokasi}>
                    <SelectTrigger className="h-12 text-base" aria-label="Pilih Lokasi">
                        <SelectValue placeholder="Pilih Lokasi" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="medan">Medan</SelectItem>
                        <SelectItem value="bali">Bali</SelectItem>
                        <SelectItem value="jakarta">Jakarta</SelectItem>
                         <SelectItem value="surabaya">Surabaya</SelectItem>
                        <SelectItem value="lainnya">Kota Lainnya</SelectItem>
                    </SelectContent>
                </Select>
                 <Select name="layanan" onValueChange={setLayanan}>
                    <SelectTrigger className="h-12 text-base" aria-label="Jenis Layanan">
                        <SelectValue placeholder="Jenis Layanan" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="lepas-kunci">Lepas Kunci</SelectItem>
                        <SelectItem value="dengan-sopir">Dengan Sopir</SelectItem>
                    </SelectContent>
                </Select>
                 <Select name="tipe-mobil" onValueChange={setTipeMobil}>
                    <SelectTrigger className="h-12 text-base" aria-label="Tipe Mobil">
                        <SelectValue placeholder="Tipe Mobil" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="mpv">MPV</SelectItem>
                        <SelectItem value="suv">SUV</SelectItem>
                        <SelectItem value="city-car">City Car</SelectItem>
                        <SelectItem value="van">Van</SelectItem>
                        <SelectItem value="luxury">Luxury</SelectItem>
                    </SelectContent>
                </Select>
            </div>
            <Button type="submit" size="lg" className="w-full h-14 text-xl font-bold bg-gradient-to-r from-primary to-blue-500 hover:scale-105 transition-transform duration-300 shadow-lg">
              <Search className="w-6 h-6 mr-3"/>
              Cari Mobil
            </Button>
          </form>
        </Card>
      </div>
    </section>
  );
}
