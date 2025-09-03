// config.js
export const APP_NAME = process.env.NEXT_PUBLIC_APP_NAME;
export const API_BASE_URL =
  process.env.NEXT_PUBLIC_PRODUCTION === "false"
    ? process.env.NEXT_PUBLIC_API_DEVELOPMENT
    : process.env.NEXT_PUBLIC_API_PRODUCTION;
