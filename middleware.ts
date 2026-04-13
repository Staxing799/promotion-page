import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import {
  localeCookieName,
  locales,
  pickPreferredLocale,
} from "./lib/i18n";

function hasLocalePrefix(pathname: string) {
  return locales.some(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`),
  );
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (hasLocalePrefix(pathname)) {
    const response = NextResponse.next();
    const activeLocale = pathname.split("/")[1];

    response.cookies.set(localeCookieName, activeLocale, {
      path: "/",
      maxAge: 60 * 60 * 24 * 365,
      sameSite: "lax",
    });

    return response;
  }

  const preferredLocale = pickPreferredLocale(
    request.cookies.get(localeCookieName)?.value,
    request.headers.get("accept-language"),
  );

  const redirectUrl = request.nextUrl.clone();
  redirectUrl.pathname =
    pathname === "/" ? `/${preferredLocale}` : `/${preferredLocale}${pathname}`;

  return NextResponse.redirect(redirectUrl);
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|.*\\..*).*)"],
};
