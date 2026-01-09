import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  let host =
    req.headers.get("x-forwarded-host") || req.headers.get("host") || "";

  host = host.split(":")[0]; // penting: buang :443

  const url = req.nextUrl.clone();
  const pathname = url.pathname;

  // Domain Medan: pt.vrnrentcarmedan.com dan vrnrentcarmedan.com
  const isMedanDomain =
    host === "pt.vrnrentcarmedan.com" ||
    host === "vrnrentcarmedan.com" ||
    host.endsWith(".pt.vrnrentcarmedan.com") ||
    host.endsWith(".vrnrentcarmedan.com");

  if (isMedanDomain) {
    // Jika path sudah dimulai dengan /medan, biarkan 그대로
    if (pathname.startsWith("/medan")) {
      return NextResponse.next();
    }

    // Jika root, redirect/rewrite ke /medan
    if (pathname === "/") {
      url.pathname = "/medan";
      return NextResponse.rewrite(url);
    }

    // Jika path lain, tambahkan /medan di depan
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
