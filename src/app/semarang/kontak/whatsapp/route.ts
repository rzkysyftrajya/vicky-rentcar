import { NextRequest, NextResponse } from "next/server";

const phoneNumber = "6282363389893";

export async function POST(request: NextRequest) {
  const formData = await request.formData();
  const name = String(formData.get("name") || "").trim();
  const phone = String(formData.get("phone") || "").trim();
  const requestDetails = String(formData.get("message") || "").trim();
  const message = [
    "Halo, saya ingin bertanya tentang rental mobil Semarang.",
    `Nama: ${name}`,
    `Nomor telepon: ${phone}`,
    `Kebutuhan: ${requestDetails}`,
  ].join("\n");
  const whatsappUrl = new URL(`https://wa.me/${phoneNumber}`);

  whatsappUrl.searchParams.set("text", message);

  return NextResponse.redirect(whatsappUrl, 303);
}