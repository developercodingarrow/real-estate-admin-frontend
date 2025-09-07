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

// (3) Admin Login OTP Verification API
export async function loginotpVerfication(formData, slug) {
  console.log("triger");
  console.log("formData--", formData);
  console.log("slug--", slug);
  const url = `${API_BASE_URL}/auth/login-otp/${slug}`;
  console.log("url--", url);
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
    console.log("data--", data);
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
    console.log("error---", error);
    return {
      error: error.message || "Request failed",
      statusCode: 500,
    };
  }
}
