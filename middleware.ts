import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  // Get host from headers - try x-forwarded-host first for proper domain detection
  const xForwardedHost = req.headers.get("x-forwarded-host");
  const host = req.headers.get("host");

  // Use x-forwarded-host if available (more reliable for custom domains in Vercel)
  let detectedHost = xForwardedHost || host || "";
  detectedHost = detectedHost.split(":")[0]; // Remove port

  const url = req.nextUrl.clone();
  const pathname = url.pathname;

  // Debug log (remove in production)
  console.log(`[Middleware] Host: ${detectedHost}, Path: ${pathname}`);

  // Domain Medan: pt.vrnrentcarmedan.com dan vrnrentcarmedan.com
  const isMedanDomain =
    detectedHost === "pt.vrnrentcarmedan.com" ||
    detectedHost === "vrnrentcarmedan.com" ||
    detectedHost.endsWith(".pt.vrnrentcarmedan.com") ||
    detectedHost.endsWith(".vrnrentcarmedan.com");

  console.log(`[Middleware] isMedanDomain: ${isMedanDomain}`);

  if (isMedanDomain) {
    // Jika path sudah dimulai dengan /medan, biarkan
    if (pathname.startsWith("/medan")) {
      console.log(`[Middleware] Path already /medan, continuing...`);
      return NextResponse.next();
    }

    // Jika root, redirect ke /medan (pakai redirect agar browser URL berubah)
    if (pathname === "/") {
      console.log(`[Middleware] Redirecting / to /medan`);
      return NextResponse.redirect(new URL("/medan", req.url));
    }

    // Jika path lain, redirect dengan /medan di depan
    console.log(`[Middleware] Redirecting ${pathname} to /medan${pathname}`);
    return NextResponse.redirect(new URL(`/medan${pathname}`, req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!_next|api|favicon.ico|robots.txt|sitemap.xml|site.webmanifest|android-chrome-|apple-touch-icon).*)",
  ],
};
