import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
} from "@/components/ui/card";
import { Facebook, Instagram, Twitter } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function SocialMediaCard() {
  const socialLinks = [
    { name: "Facebook", icon: <Facebook className="w-6 h-6" />, href: "#" },
    { name: "Instagram", icon: <Instagram className="w-6 h-6" />, href: "#" },
    { name: "Twitter", icon: <Twitter className="w-6 h-6" />, href: "#" },
    {
      name: "TikTok",
      icon: (
        <Image
          src="/socmedicon/tiktok.png"
          alt="Logo TikTok"
          data-ai-hint="tiktok logo"
          width={24}
          height={24}
        />
      ),
      href: "#",
    },
  ];

  return (
    <Card className="shadow-lg border-primary/20 group-hover:animate-shimmer">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl text-gradient">
          Tetap Terhubung dengan Kami
        </CardTitle>
        <CardDescription>
          Ikuti kami di media sosial untuk penawaran eksklusif, berita terbaru,
          dan inspirasi perjalanan di seluruh Nusantara.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex justify-center gap-4">
          {socialLinks.map((social) => (
            <Button
              key={social.name}
              asChild
              variant="outline"
              size="icon"
              className="w-14 h-14 rounded-full border-2 hover:border-primary hover:bg-primary/10 hover:text-primary transition-all duration-300"
            >
              <Link
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
              >
                {social.icon}
              </Link>
            </Button>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
