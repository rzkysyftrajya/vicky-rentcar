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

    // Jika root, rewrite ke /medan
    if (pathname === "/") {
      console.log(`[Middleware] Rewriting / to /medan`);
      url.pathname = "/medan";
      return NextResponse.rewrite(url);
    }

    // Jika path lain, tambahkan /medan di depan
    console.log(`[Middleware] Rewriting ${pathname} to /medan${pathname}`);
    url.pathname = `/medan${pathname}`;
    return NextResponse.rewrite(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!_next|api|favicon.ico|robots.txt|sitemap.xml|site.webmanifest|android-chrome-|apple-touch-icon).*)",
  ],
};
