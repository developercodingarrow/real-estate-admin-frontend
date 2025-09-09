"use server";
import { cookies } from "next/headers"; // Import the cookies function
import { API_BASE_URL } from "@/config";

// 3) GET ALL BUILDERS
export async function projectStatsAction() {
  const cookieStore = cookies();
  const authToken = cookieStore.get("jwt")?.value;
  const url = `${API_BASE_URL}/stats/projectstats`;

  try {
    const res = await fetch(url, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${authToken}`,
        "Content-Type": "application/json",
      },
      credentials: "include",
    });

    const data = await res.json();

    if (data.status === "success") {
      return data; // return builder array directly
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

export async function enquireStatsAction() {
  const cookieStore = cookies();
  const authToken = cookieStore.get("jwt")?.value;
  const url = `${API_BASE_URL}/stats/enquirestats`;

  try {
    const res = await fetch(url, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${authToken}`,
        "Content-Type": "application/json",
      },
      credentials: "include",
    });

    const data = await res.json();

    if (data.status === "success") {
      return data; // return builder array directly
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

export async function amnitiesStatsAction() {
  const cookieStore = cookies();
  const authToken = cookieStore.get("jwt")?.value;
  const url = `${API_BASE_URL}/stats/amenityStats`;

  try {
    const res = await fetch(url, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${authToken}`,
        "Content-Type": "application/json",
      },
      credentials: "include",
    });

    const data = await res.json();

    if (data.status === "success") {
      return data; // return builder array directly
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

export async function overallStatsAction() {
  const cookieStore = cookies();
  const authToken = cookieStore.get("jwt")?.value;
  const url = `${API_BASE_URL}/stats/overallStats`;

  try {
    const res = await fetch(url, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${authToken}`,
        "Content-Type": "application/json",
      },
      credentials: "include",
    });

    const data = await res.json();

    if (data.status === "success") {
      return data; // return builder array directly
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

export async function projectPublishStatsAction() {
  const cookieStore = cookies();
  const authToken = cookieStore.get("jwt")?.value;
  const url = `${API_BASE_URL}/stats/ProjectPublishStats`;

  try {
    const res = await fetch(url, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${authToken}`,
        "Content-Type": "application/json",
      },
      credentials: "include",
    });

    const data = await res.json();

    if (data.status === "success") {
      return data; // return builder array directly
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
