import { Button } from "@/components/semarang-site/ui/button";
import { Input } from "@/components/semarang-site/ui/input";
import { Label } from "@/components/semarang-site/ui/label";
import { Textarea } from "@/components/semarang-site/ui/textarea";

export function ContactWhatsAppForm({
  phoneNumber,
}: {
  phoneNumber: string;
}) {
  return (
    <form
      action="/semarang/kontak/whatsapp"
      method="post"
      target="_blank"
      rel="noopener noreferrer"
      className="space-y-4"
    >
      <div className="space-y-2">
        <Label htmlFor="contact-name">Nama Lengkap</Label>
        <Input id="contact-name" name="name" placeholder="Nama Anda" required />
      </div>
      <div className="space-y-2">
        <Label htmlFor="contact-phone">Nomor Telepon</Label>
        <Input
          id="contact-phone"
          name="phone"
          type="tel"
          placeholder="Nomor telepon aktif"
          required
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="contact-message">Pesan Anda</Label>
        <Textarea
          id="contact-message"
          name="message"
          placeholder="Contoh: Saya ingin sewa Avanza dengan sopir untuk besok."
          rows={5}
          required
        />
      </div>
      <Button type="submit" className="w-full" size="lg">
        Kirim via WhatsApp
      </Button>
      <p className="text-center text-xs text-muted-foreground">
        Pesan akan dibuka di WhatsApp untuk Anda tinjau sebelum dikirim.
      </p>
    </form>
  );
}