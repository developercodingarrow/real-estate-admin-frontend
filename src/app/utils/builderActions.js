"use server";
import { cookies } from "next/headers"; // Import the cookies function
// builderActions.js
import { API_BASE_URL } from "@/config";

//1) Create Builder  API
export async function createBuilderAction(formData) {
  const cookieStore = cookies();
  const authToken = cookieStore.get("jwt")?.value;
  const url = `${API_BASE_URL}/builder/createBuilder`;

  try {
    const res = await fetch(url, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${authToken}`,
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify(formData),
    });

    const data = await res.json();

    console.log("Create Project API Response:", data);
    if (data.status === "Fails") {
      return data;
    }
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

//2) Delete Builder  API
export async function deleteBuilderAction(formData) {
  const cookieStore = cookies();
  const authToken = cookieStore.get("jwt")?.value;
  const url = `${API_BASE_URL}/builder/deleteBuilder`;

  try {
    const res = await fetch(url, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${authToken}`,
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify(formData),
    });

    const data = await res.json();

    console.log("delete Project API Response:", data);

    if (data.status === "success") {
      return data;
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

// 3) GET ALL BUILDERS
export async function allbuildersAction() {
  const cookieStore = cookies();
  const authToken = cookieStore.get("jwt")?.value;
  const url = `${API_BASE_URL}/builder/allBuilder`;

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
      return { data: data.data }; // return builder array directly
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
