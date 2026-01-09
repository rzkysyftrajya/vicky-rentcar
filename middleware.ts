import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  const host =
    req.headers.get("x-forwarded-host") || req.headers.get("host") || "";

  const url = req.nextUrl.clone();

  const isMedanDomain = host.includes("pt.vrnrentcarmedan.com");

  if (isMedanDomain) {
    if (url.pathname === "/") {
      url.pathname = "/medan";
      return NextResponse.rewrite(url);
    }

    if (!url.pathname.startsWith("/medan")) {
      url.pathname = `/medan${url.pathname}`;
      return NextResponse.rewrite(url);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next|api|favicon.ico|robots.txt|sitemap.xml).*)"],
};
