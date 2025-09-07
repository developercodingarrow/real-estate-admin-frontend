import { NextResponse } from "next/server";
import { cookies } from "next/headers"; // Import cookies function
import { v4 as uuidv4 } from "uuid";

function generateSessionId() {
  return `${uuidv4()}-${Date.now()}`; // Combines UUID and timestamp
}

export async function middleware(request) {
  const cookieStore = cookies(); // Access the cookies on the server

  // Check if session cookie already exists
  const sessionId = cookieStore.get("sessionId")?.value;

  // If no session ID in cookies, generate a new one
  if (!sessionId) {
    const newSessionId = generateSessionId();

    // Create response object and set the sessionId cookie
    const response = NextResponse.next();
    response.cookies.set("sessionId", newSessionId, {
      httpOnly: true, // To prevent client-side access to the cookie
      maxAge: 60 * 60 * 24 * 30, // Set cookie expiry (30 days)
      path: "/",
      secure: process.env.NODE_ENV === "production", // Secure cookies in production
    });

    // Return the modified response with the new cookie
    return response;
  }

  // Proceed without modifying cookies if session exists
  return NextResponse.next();
}

export const config = {
  matcher: ["/"], // Specify the routes this middleware should run on
};
