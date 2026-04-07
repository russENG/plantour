import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

/**
 * Redirect locale-less URLs (e.g. /plants/torenia) to the default ja locale.
 * The app's routes live under /[lang]/..., so any request whose first path
 * segment is a known app section but not a locale needs to be rewritten.
 *
 * Note: Next.js 16 renamed middleware → proxy.
 */
const APP_SECTIONS = new Set([
  "plants",
  "families",
  "taxonomy",
  "timeline",
  "quiz",
  "key",
]);

const LOCALES = new Set(["ja", "en"]);

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const seg = pathname.split("/")[1] ?? "";

  if (APP_SECTIONS.has(seg) && !LOCALES.has(seg)) {
    const url = request.nextUrl.clone();
    url.pathname = `/ja${pathname}`;
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/plants/:path*",
    "/families/:path*",
    "/taxonomy/:path*",
    "/timeline/:path*",
    "/quiz/:path*",
    "/key/:path*",
  ],
};
