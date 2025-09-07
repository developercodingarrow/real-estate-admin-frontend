import { NextResponse } from "next/server";
import { getUserAuthantication } from "./app/lib/authentication";

export async function middleware(request) {
  const response = NextResponse.next();
  const jwtToken = request.cookies.get("jwt")?.value;
  const userData = jwtToken ? await getUserAuthantication() : null; // Get decrypted user data only if jwtToken exists
  const userRole = userData?.role;
  const url = request.nextUrl;
  const pathname = url.pathname;

  // ✅ Allow static files and Next.js assets to be loaded
  if (
    pathname.startsWith("/_next/") || // Next.js build assets
    pathname.startsWith("/static/") || // Static files
    /\.(.*)$/.test(pathname) // Files like .css, .js, .png, .jpg, etc.
  ) {
    return NextResponse.next();
  }

  // ✅ If user is NOT logged in, allow only /auth/* routes
  if (!jwtToken) {
    if (!pathname.startsWith("/auth")) {
      return NextResponse.redirect(new URL("/auth/login", request.url));
    }
    return NextResponse.next(); // Allow login/signup pages
  }

  // ✅ If user is logged in but NOT an admin or superAdmin, force logout and redirect
  if (!["superAdmin", "admin"].includes(userRole)) {
    response.cookies.delete("jwt");
    response.cookies.delete("user");
    return NextResponse.redirect(new URL("/auth/login", request.url));
  }

  // ✅ If user is already logged in, prevent access to login/signup pages
  if (pathname.startsWith("/auth")) {
    return NextResponse.redirect(new URL("/", request.url)); // Redirect to home or dashboard
  }

  return response;
}

// ✅ Apply middleware to all routes
export const config = {
  matcher: "/:path*",
};
