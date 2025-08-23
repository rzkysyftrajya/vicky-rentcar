// middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const url = req.nextUrl.clone();

  // Detect path
  const { pathname } = url;

  // Kalau buka /en → redirect ke /
  if (pathname === "/en") {
    url.pathname = "/";
    return NextResponse.redirect(url);
  }

  // Kalau buka /en/anything → redirect ke /anything
  if (pathname.startsWith("/en/")) {
    url.pathname = pathname.replace(/^\/en/, "");
    return NextResponse.redirect(url);
  }

  // Kalau buka /id → redirect ke /
  if (pathname === "/id") {
    url.pathname = "/";
    return NextResponse.redirect(url);
  }

  // Kalau buka /id/anything → redirect ke /anything
  if (pathname.startsWith("/id/")) {
    url.pathname = pathname.replace(/^\/id/, "");
    return NextResponse.redirect(url);
  }

  // Default → lanjutkan request biasa
  return NextResponse.next();
}

// Aktifkan middleware hanya di route tertentu
export const config = {
  matcher: ["/en/:path*", "/id/:path*"], // hanya jalan di /en dan /id
};
