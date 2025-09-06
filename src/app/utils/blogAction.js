"use server";

import { API_BASE_URL } from "@/config";
//8) Update Project  SEO API
export async function updateBlogContentAction(formData, slug) {
  const url = `${API_BASE_URL}/blog/updateBlogContnet/${slug}`;

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

// 3) Update Project Image  API
export async function updateBlogImage(formData, slug) {
  const url = `${API_BASE_URL}/cdn-imge-upload/update-blog-image/${slug}`;

  try {
    const res = await fetch(url, {
      method: "PATCH",
      headers: {
        // "Content-Type": "multipart/form-data",
        // Authorization: `Bearer ${authToken}`,
      },
      body: formData, // FormData should be sent as is
      credentials: "include",
    });

    const data = await res.json();
    console.log("Update Project Image API Response:", data);
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

//9) Add Keywords API
export async function addBlogKeywordsAction(formData, slug) {
  const url = `${API_BASE_URL}/blog/addKeywords/${slug}`;

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

    console.log("add keywords API Response:", data);

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

export async function updateBlogSlugAction(formData, slug) {
  const url = `${API_BASE_URL}/blog/updateSlug/${slug}`;

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
