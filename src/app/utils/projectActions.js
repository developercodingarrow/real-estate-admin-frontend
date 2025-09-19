"use server";
import { cookies } from "next/headers"; // Import the cookies function
import { API_BASE_URL } from "@/config";

//1) Create Project  API
export async function createProjectAction(formData) {
  const cookieStore = cookies();
  const authToken = cookieStore.get("jwt")?.value;
  const url = `${API_BASE_URL}/project/createProject`;

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

    if (data.status === "Fails") {
      return data;
    }

    console.log("Create Project API Response:", data);

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

//1) Update Project  API
export async function updateProjectAction(formData, slug) {
  const cookieStore = cookies();
  const authToken = cookieStore.get("jwt")?.value;
  const url = `${API_BASE_URL}/project/updateProjectFileds/${slug}`;

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

    console.log("Update Project API Response:", data);

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

// 3) Update Project Image  API
export async function updateProjectImage(formData, slug) {
  const cookieStore = cookies();
  const authToken = cookieStore.get("jwt")?.value;
  const url = `${API_BASE_URL}/cdn-imge-upload/update-project-image/${slug}`;

  try {
    const res = await fetch(url, {
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
      body: formData, // FormData should be sent as is
      credentials: "include",
    });

    const data = await res.json();
    console.log("Update Project Image API Response:", data);
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
// 4) Delete Project Images API
export async function deleteProjectImages(projectId) {
  const cookieStore = cookies();
  const authToken = cookieStore.get("jwt")?.value;
  const url = `${API_BASE_URL}/project/deleteProjectImage/${projectId}`;

  try {
    const res = await fetch(url, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${authToken}`,
        "Content-Type": "application/json",
      },
      credentials: "include",
    });

    const data = await res.json();

    if (res.ok && data.status === "success") {
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

// 5) Update Project Gallery API
export async function updateProjectGallery(formData, slug) {
  const cookieStore = cookies();
  const authToken = cookieStore.get("jwt")?.value;
  const url = `${API_BASE_URL}/cdn-imge-upload/add-gallery-image/${slug}`;

  try {
    const res = await fetch(url, {
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
      body: formData, // FormData should be sent directly
      credentials: "include",
    });

    const data = await res.json();
    console.log("Update Project Gallery API Response:", data);

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
// 6) Delete Gallery Image API
export async function deleteGalleryImgAction(imageUrl, slug) {
  const cookieStore = cookies();
  const authToken = cookieStore.get("jwt")?.value;
  const url = `${API_BASE_URL}/cdn-imge-upload/delete-gallery-image/${slug}`;

  try {
    const res = await fetch(url, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${authToken}`,
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({ imageUrl }),
    });

    const data = await res.json();

    console.log("Update Project API Response:", data);

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

//7) Update Project  Amnities API
export async function updateProjectAmnitiesAction(formData, slug) {
  const cookieStore = cookies();
  const authToken = cookieStore.get("jwt")?.value;
  const url = `${API_BASE_URL}/project/addAmenities/${slug}`;

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

//8) Update Project  SEO API
export async function updateProjectSeoAction(formData, slug) {
  const cookieStore = cookies();
  const authToken = cookieStore.get("jwt")?.value;
  const url = `${API_BASE_URL}/project/updateProjectSeo/${slug}`;

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

    console.log("Update Project API Response:", data);

    if (data.status === "Fails") {
      return data;
    }

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

//9) Add Keywords API
export async function addKeywordsAction(formData, slug) {
  const cookieStore = cookies();
  const authToken = cookieStore.get("jwt")?.value;
  const url = `${API_BASE_URL}/project/addKeywords/${slug}`;

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

export async function deleteProjectWithImagesAction(id) {
  const cookieStore = cookies();
  const authToken = cookieStore.get("jwt")?.value;
  const url = `${API_BASE_URL}/cdn-imge-upload/deletProjectwithAllImage/${id}`;

  try {
    const res = await fetch(url, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${authToken}`,
        "Content-Type": "application/json",
      },
      credentials: "include",
      // body: JSON.stringify(formData),
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

export async function isFeauredProjectAction(formData) {
  const cookieStore = cookies();
  const authToken = cookieStore.get("jwt")?.value;
  const url = `${API_BASE_URL}/project/isfeatured`;

  try {
    const res = await fetch(url, {
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${authToken}`,
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify(formData),
    });

    const data = await res.json();

    console.log("Update Project API Response:", data);

    if (data.status === "Fails") {
      return data;
    }

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

export async function isPublishedProjectAction(formData) {
  const cookieStore = cookies();
  const authToken = cookieStore.get("jwt")?.value;
  const url = `${API_BASE_URL}/project/isPublished`;

  try {
    const res = await fetch(url, {
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${authToken}`,
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify(formData),
    });

    const data = await res.json();

    console.log("Update Project API Response:", data);

    if (data.status === "Fails") {
      return data;
    }

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

export async function updateSlugAction(formData, slug) {
  const cookieStore = cookies();
  const authToken = cookieStore.get("jwt")?.value;
  const url = `${API_BASE_URL}/project/updateslug/${slug}`;

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

    console.log("Update Project API Response:", data);

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
