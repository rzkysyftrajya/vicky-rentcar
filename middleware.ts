import { NextRequest, NextResponse } from "next/server";

// Domain Medan yang ingin di-handle
const MEDAN_DOMAINS = ["pt.vrnrentcarmedan.com", "www.pt.vrnrentcarmedan.com"];

/**
 * Cek apakah hostname termasuk domain Medan
 */
function isMedanDomain(hostname: string) {
  return (
    MEDAN_DOMAINS.includes(hostname) ||
    MEDAN_DOMAINS.includes(`www.${hostname}`)
  );
}

export function middleware(req: NextRequest) {
  const hostname = req.headers.get("host") || "";
  const pathname = req.nextUrl.pathname;

  // Skip internal Next.js paths & static assets
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/static") ||
    pathname.startsWith("/favicon.ico") ||
    pathname.includes(".")
  ) {
    return NextResponse.next();
  }

  // Hanya handle domain Medan
  if (isMedanDomain(hostname)) {
    // Redirect root "/" ke "/medan"
    if (pathname === "/") {
      const redirectUrl = new URL("/medan", req.url);
      const res = NextResponse.redirect(redirectUrl);
      res.headers.set("cache-control", "no-cache, no-store, must-revalidate");
      return res;
    }

    // Sudah di /medan, biarkan
    if (pathname.startsWith("/medan")) {
      const res = NextResponse.next();
      res.headers.set("cache-control", "no-cache, no-store, must-revalidate");
      return res;
    }

    // Rewrite path lain ke /medan/...
    const rewriteUrl = new URL(`/medan${pathname}`, req.url);
    rewriteUrl.search = req.nextUrl.search;
    const res = NextResponse.rewrite(rewriteUrl);
    res.headers.set("cache-control", "no-cache, no-store, must-revalidate");
    return res;
  }

  // Semua domain lain tetap normal
  return NextResponse.next();
}

// Konfigurasi matcher: semua path kecuali internal / static / favicon / file eksternal
export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|public|.*\\..*).*)"],
};
