import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  let host =
    req.headers.get("x-forwarded-host") || req.headers.get("host") || "";

  host = host.split(":")[0]; // penting: buang :443

  const url = req.nextUrl.clone();
  const pathname = url.pathname;

  const isMedanDomain =
    host === "pt.vrnrentcarmedan.com" ||
    host.endsWith(".pt.vrnrentcarmedan.com");

  if (isMedanDomain) {
    if (!pathname.startsWith("/medan")) {
      url.pathname = pathname === "/" ? "/medan" : `/medan${pathname}`;
      return NextResponse.rewrite(url);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next|api|favicon.ico|robots.txt|sitemap.xml).*)"],
};
