import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  const host = req.headers.get("host");
  const url = req.nextUrl.clone();

  // Domain khusus Medan (Ads landing)
  if (host === "pt.vrnrentcarmedan.com") {
    // Root → /medan
    if (url.pathname === "/") {
      url.pathname = "/medan";
      return NextResponse.rewrite(url);
    }

    // Subpaths → /medan/*
    if (!url.pathname.startsWith("/medan")) {
      url.pathname = `/medan${url.pathname}`;
      return NextResponse.rewrite(url);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next|favicon.ico).*)"],
};
