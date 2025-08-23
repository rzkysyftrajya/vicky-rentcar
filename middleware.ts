import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  if (pathname === "/en" || pathname.startsWith("/en/")) {
    return NextResponse.redirect(
      new URL(pathname.replace(/^\/en/, ""), req.url)
    );
  }

  if (pathname === "/id" || pathname.startsWith("/id/")) {
    return NextResponse.redirect(
      new URL(pathname.replace(/^\/id/, ""), req.url)
    );
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next|.*\\..*).*)"],
};
