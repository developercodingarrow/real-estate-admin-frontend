"use server";

import { API_BASE_URL } from "@/config";

//1) Create City  API
export async function createCityAction(formData) {
  const url = `${API_BASE_URL}/city/createCity`;

  try {
    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify(formData),
    });

    const data = await res.json();

    console.log("Create Project API Response:", data);

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
export async function deleteCityAction(formData) {
  const url = `${API_BASE_URL}/city/deleteCity`;

  try {
    const res = await fetch(url, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify(formData),
    });

    const data = await res.json();

    console.log("delete Project API Response:", data);

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
