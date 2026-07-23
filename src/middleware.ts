import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const adminToken = request.cookies.get("trichova_admin_session")?.value;
  const isAuthenticated = adminToken === "authenticated_admin_token_2026";

  // Check if request is from Next.js internal static build prerenderer
  const isBuildPrerender = request.headers.get("x-prerender-revalidate") !== null;

  // 1. If trying to access protected /admin routes (except /admin/login) without auth
  if (pathname.startsWith("/admin") && pathname !== "/admin/login") {
    if (!isAuthenticated && !isBuildPrerender) {
      const loginUrl = new URL("/admin/login", request.url);
      loginUrl.searchParams.set("from", pathname);
      return NextResponse.redirect(loginUrl);
    }
  }

  // 2. If logged in and visiting /admin/login, redirect to dashboard
  if (pathname === "/admin/login" && isAuthenticated && !isBuildPrerender) {
    return NextResponse.redirect(new URL("/admin/blogs", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"],
};
