import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const url = request.nextUrl;
  const pathname = url.pathname;

  if (pathname.includes("/and_admin/")) {
    const segments = pathname.split("/");

    const dateSlug = segments[2];

    const now = new Date();
    const day = now.getDate();
    const month = now.getMonth() + 1;
    const year = now.getFullYear();

    const formattedDate = `${day < 10 ? `0${day}` : day}${month < 10 ? `0${month}` : month}${year}_and`;

    if (dateSlug !== formattedDate) {
      return NextResponse.redirect(new URL("/", request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/and_admin/:path*"],
};
