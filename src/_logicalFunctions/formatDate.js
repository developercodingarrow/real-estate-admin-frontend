import { format } from "date-fns";

export const formatDate = (dateString) => {
  try {
    return format(new Date(dateString), "dd MMM, yyyy"); // Example: Dec 17, 2024
  } catch (error) {
    console.error("Invalid date string:", dateString);
    return ""; // Fallback for invalid dates
  }
};

// utils/formatDevice.js
export const formatDevice = (userAgent) => {
  if (!userAgent || typeof userAgent !== "string") return "unknown";

  const ua = userAgent.toLowerCase();

  // Check for common mobile keywords
  if (
    ua.includes("mobi") || // generic "Mobile"
    ua.includes("android") ||
    ua.includes("iphone") ||
    ua.includes("ipad") ||
    ua.includes("ipod")
  ) {
    return "mobile";
  }

  // Otherwise assume desktop
  return "desktop";
};
