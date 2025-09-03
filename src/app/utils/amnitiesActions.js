"use server";

import { API_BASE_URL } from "@/config";

export async function allAmnitiesAction() {
  const url = `${API_BASE_URL}/amenity/allAmnities`;

  try {
    const res = await fetch(url, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
    });

    const data = await res.json();
    console.log("Update Project API Response:", data);

    if (data.status === "success") {
      return { data };
    }

    return {
      error: data.message || "Unknown error",
      statusCode: res.status || 500,
    };
  } catch (error) {
    return {
      error: error.message || "Request failed",
      statusCode: 500,
    };
  }
}
