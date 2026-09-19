import { NextRequest, NextResponse } from "next/server";

const MEDAN_DOMAINS = ["pt.vrnrentcarmedan.com", "www.pt.vrnrentcarmedan.com"];

export function middleware(req: NextRequest) {
  const hostname = req.headers.get("host") || "";
  const pathname = req.nextUrl.pathname;

  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.includes(".")
  ) {
    return NextResponse.next();
  }

  if (MEDAN_DOMAINS.includes(hostname)) {
    if (!pathname.startsWith("/medan")) {
      const url = new URL(`/medan${pathname}`, req.url);
      return NextResponse.rewrite(url);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next|api|.*\\..*).*)"],
};
