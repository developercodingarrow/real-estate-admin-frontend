// src/lib/fonts.js
import { Inter, Roboto, Poppins, Montserrat } from "next/font/google";

// Inter font (Sans-serif)
export const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"], // Light to Bold weights
  variable: "--font-inter", // Optional: CSS variable for Inter
});

// Roboto font (Sans-serif)
export const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"], // Regular to Bold weights
  variable: "--font-roboto", // Optional: CSS variable for Roboto
});

// Poppins font (Sans-serif)
export const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"], // Light to Bold weights
  variable: "--font-poppins", // Optional: CSS variable for Poppins
});

// Montserrat font (Sans-serif)
export const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"], // Light to Bold weights
  variable: "--font-montserrat", // Optional: CSS variable for Montserrat
});

// System font stack: Arial, sans-serif
export const systemFonts = {
  fontFamily: "Arial, sans-serif", // Fallback to sans-serif
  weight: "400", // Regular weight
};
