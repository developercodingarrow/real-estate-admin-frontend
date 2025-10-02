import { NextResponse } from "next/server";

export async function GET(req) {
  try {
    // forward cookies from the incoming request
    const cookie = req.headers.get("cookie") || "";

    const response = await fetch(
      "http://localhost:2202/api/v1/real-estate/admin/backup/downloadUsersBackup",
      {
        method: "GET",
        headers: {
          Cookie: cookie, // pass user session cookies
        },
      }
    );

    if (!response.ok) {
      const text = await response.text();
      return NextResponse.json(
        { error: "Express API failed", details: text },
        { status: response.status }
      );
    }

    const text = await response.text();

    return new NextResponse(text, {
      status: 200,
      headers: {
        "Content-Disposition": "attachment; filename=cities-backup.json",
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.error("❌ Error in Next.js API route:", error);
    return NextResponse.json(
      { error: "Internal Server Error", details: error.message },
      { status: 500 }
    );
  }
}
