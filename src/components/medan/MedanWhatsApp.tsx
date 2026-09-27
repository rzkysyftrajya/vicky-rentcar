import Image from "next/image";
import { cn } from "@/lib/utils";

const MEDAN_WHATSAPP_NUMBER = "6282363389893";

export type WhatsAppContext =
  | { type: "general" }
  | { type: "vehicle"; vehicle: string }
  | { type: "service"; service?: string }
  | { type: "airport" }
  | { type: "hiace" }
  | { type: "destination"; destination: string }
  | { type: "tour-package"; packageName: string };

function getMessage(context: WhatsAppContext): string {
  switch (context.type) {
    case "vehicle":
      return `Halo, saya ingin menanyakan ketersediaan ${context.vehicle}.`;
    case "service":
      return context.service
        ? `Halo, saya ingin menanyakan layanan ${context.service}.`
        : "Halo, saya ingin menanyakan layanan rental mobil di Medan.";
    case "airport":
      return "Halo, saya ingin menanyakan transfer bandara.";
    case "hiace":
      return "Halo, saya ingin menanyakan kebutuhan Hiace.";
    case "destination":
      return `Halo, saya ingin menanyakan perjalanan ke ${context.destination}.`;
    case "tour-package":
      return `Halo, saya ingin membahas itinerary ${context.packageName}.`;
    case "general":
      return "Halo, saya ingin menanyakan rental mobil di Medan.";
  }
}

export function createMedanWhatsAppUrl(context: WhatsAppContext): string {
  const params = new URLSearchParams({ text: getMessage(context) });
  return `https://wa.me/${MEDAN_WHATSAPP_NUMBER}?${params.toString()}`;
}

interface MedanWhatsAppButtonProps {
  label: string;
  context?: WhatsAppContext;
  className?: string;
  variant?: "solid" | "outline";
}

export function MedanWhatsAppButton({
  label,
  context = { type: "general" },
  className,
  variant = "solid",
}: MedanWhatsAppButtonProps) {
  return (
    <a
      className={cn(
        "medan-whatsapp-button",
        variant === "outline" && "medan-whatsapp-button-outline",
        className,
      )}
      href={createMedanWhatsAppUrl(context)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
    >
      <Image
        src="/icon/wa.png"
        alt=""
        aria-hidden="true"
        width={24}
        height={24}
        unoptimized
      />
      <span>{label}</span>
    </a>
  );
}
