import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const url = req.nextUrl.clone();
  const { pathname } = url;

  // Redirect /en -> /
  if (pathname === "/en") {
    url.pathname = "/";
    return NextResponse.redirect(url);
  }

  // Redirect /en/... -> /...
  if (pathname.startsWith("/en/")) {
    url.pathname = pathname.replace(/^\/en/, "");
    return NextResponse.redirect(url);
  }

  // Redirect /id -> /
  if (pathname === "/id") {
    url.pathname = "/";
    return NextResponse.redirect(url);
  }

  // Redirect /id/... -> /...
  if (pathname.startsWith("/id/")) {
    url.pathname = pathname.replace(/^\/id/, "");
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next|api|.*\\..*).*)"],
};
