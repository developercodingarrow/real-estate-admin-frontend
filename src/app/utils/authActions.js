"use server";
// (2) Admin Login API

import { API_BASE_URL } from "@/config";
import { cookies } from "next/headers"; // Import the cookies function
import CryptoJS from "crypto-js";

const encryptionKey = process.env.NEXT_PUBLIC_ENCRYPTION_KEY;

//1) OTP Login  API
export async function otpLoginAction(formData) {
  const url = `${API_BASE_URL}/auth/superAdminlogin`;

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

    if (data.error) {
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

//1) OTP Login  API
export async function otpAdminLoginAction(formData) {
  const url = `${API_BASE_URL}/auth/adminLogin`;
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

    if (data.error) {
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

//1) OTP Login  API
export async function otpEditorLoginAction(formData) {
  const url = `${API_BASE_URL}/auth/editorLogin`;
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

    if (data.error) {
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

// (3) Admin Login OTP Verification API
export async function loginotpVerfication(formData, slug) {
  const url = `${API_BASE_URL}/auth/login-otp/${slug}`;
  try {
    const res = await fetch(url, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const data = await res.json();
    if (data.status === "Fails") {
      return data;
    }

    if (data.status === "success") {
      const token = data.token;
      const userDetail = data.user;
      cookies().set("jwt", token);
      const userData = JSON.stringify(userDetail);
      const encryptedData = CryptoJS.AES.encrypt(
        userData,
        encryptionKey
      ).toString();

      // Store the encrypted data in cookies
      cookies().set("user", encryptedData, {
        httpOnly: false,
      });

      return data;
    }
  } catch (error) {
    return {
      error: error.message || "Request failed",
      statusCode: 500,
    };
  }
}

// (4) Admin Logout API
export async function LogOutAction() {
  const url = `${API_BASE_URL}/auth/logout`;
  try {
    const res = await fetch(url, {
      method: "POST",
      credentials: "include",
    });

    const data = await res.json();

    // Remove cookies
    const cookieStore = cookies();
    cookieStore.set("jwt", "", { expires: new Date(0) });
    cookieStore.set("user", "", { expires: new Date(0) });

    return { status: "success", data };
  } catch (error) {
    return {
      error: error.message || "Request failed",
      statusCode: 500,
    };
  }
}
