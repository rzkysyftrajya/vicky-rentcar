"use client";

import { usePathname } from "next/navigation";
import { IconBrandWhatsapp, IconPhone } from "@tabler/icons-react";
import { FloatingDock } from "@/components/ui/floating-dock";

const dockItems = [
  {
    icon: <IconBrandWhatsapp className="w-5 h-5 text-green-500" />,
    href: "https://wa.me/6282363389893",
    title: "WhatsApp",
  },
  {
    icon: <IconPhone className="w-5 h-5 text-primary" />,
    href: "tel:+6282363389893",
    title: "Telepon",
  },
];

export default function RouteContactDock() {
  const pathname = usePathname();
  const isSemarangRoute = pathname === "/semarang" || pathname?.startsWith("/semarang/");
  const isSurabayaLanding =
    pathname?.replace(/\/+$/, "") === "/rental-mobil-surabaya";
  const items = isSurabayaLanding
    ? dockItems.filter((item) => item.title !== "WhatsApp")
    : dockItems;

  if (isSemarangRoute) return null;

  return (
    <div id="global-route-contact-dock" className="fixed bottom-4 left-4 z-50">
      <FloatingDock items={items} />
    </div>
  );
}
