import { NextRequest, NextResponse } from "next/server";

// Medan domain configuration
const MEDAN_DOMAINS = ["pt.vrnrentcarmedan.com", "www.pt.vrnrentcarmedan.com"];

/**
 * Check if the request hostname is a Medan domain
 */
function isMedanDomain(hostname: string): boolean {
  return MEDAN_DOMAINS.some(
    (domain) => hostname === domain || hostname === `www.${domain}`
  );
}

/**
 * Get the canonical hostname for Medan domain
 */
function getMedanCanonicalHost(hostname: string): string {
  // Always use the primary Medan domain (without www)
  if (hostname.startsWith("www.")) {
    return hostname.replace("www.", "");
  }
  return hostname;
}

export function middleware(req: NextRequest) {
  const hostname = req.headers.get("host") || "";

  // Skip middleware for internal Next.js paths and static assets
  const pathname = req.nextUrl.pathname;
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/static") ||
    pathname === "/favicon.ico" ||
    pathname.includes(".") // Files with extensions
  ) {
    return NextResponse.next();
  }

  // Check if this is a Medan domain request
  if (isMedanDomain(hostname)) {
    // Get the path the user requested
    const requestedPath = req.nextUrl.pathname;

    // If already on /medan route, let it pass
    if (requestedPath.startsWith("/medan")) {
      return NextResponse.next();
    }

    // Rewrite to /medan prefix
    const rewriteUrl = new URL(`/medan${requestedPath}`, req.url);

    // Preserve query parameters
    rewriteUrl.search = req.nextUrl.search;

    // Rewrite the request (URL stays the same in browser)
    return NextResponse.rewrite(rewriteUrl);
  }

  // All other domains (main domain) - normal routing
  return NextResponse.next();
}

export const config = {
  /**
   * Match all paths EXCEPT:
   * - _next (Next.js internals)
   * - favicon.ico
   - Files with extensions (static assets)
   */
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public folder files
     */
    "/((?!api|_next/static|_next/image|favicon.ico|public|.*\\..*).*)",
  ],
};
