"use server";
import { cookies } from "next/headers"; // Import the cookies function
import { API_BASE_URL } from "@/config";

// JSON DATA

export async function jsonBackupAction(apiRoute) {
  const cookieStore = cookies();
  const authToken = cookieStore.get("jwt")?.value;

  try {
    const res = await fetch(`${API_BASE_URL}/backup/${apiRoute}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
      credentials: "include",
    });

    if (!res.ok) throw new Error(`Failed to export: ${res.statusText}`);

    const buffer = await res.arrayBuffer();

    // ✅ Convert ArrayBuffer → Base64
    const base64 = Buffer.from(buffer).toString("base64");

    return { success: true, base64 }; // 👈 return string, not buffer
  } catch (error) {
    console.error("Export error:", error);
    return { success: false, error: error.message };
  }
}

export async function exportsEnquireAction() {
  const cookieStore = cookies();
  const authToken = cookieStore.get("jwt")?.value;
  try {
    const res = await fetch(`${API_BASE_URL}/excel/export-enquire`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${authToken}`,
        "Content-Type": "application/json",
      },
      credentials: "include",
    });

    if (!res.ok) {
      throw new Error(`Failed to export: ${res.statusText}`);
    }

    // Get file as Blob

    // Return blob to client
    // Get file as Blob
    const blob = await res.blob();

    return { success: true, blob };
  } catch (error) {
    console.error("Export error:", error);
    return { success: false, error: error.message };
  }
}
