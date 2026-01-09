import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  const host = req.headers.get("host") || "";
  const url = req.nextUrl.clone();

  const isMedanDomain =
    host === "pt.vrnrentcarmedan.com" ||
    host === "www.pt.vrnrentcarmedan.com" ||
    host.startsWith("pt.vrnrentcarmedan.com:");

  if (isMedanDomain) {
    // ROOT → /medan
    if (url.pathname === "/") {
      url.pathname = "/medan";
      return NextResponse.rewrite(url);
    }

    // SUBPATH → /medan/*
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
