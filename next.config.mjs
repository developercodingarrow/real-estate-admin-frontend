/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: {
      bodySizeLimit: "10mb", // Increase the limit (adjust as needed)
    },
  },
  images: {
    domains: [
      "pub-5bfce6e3ebb54942a136b00643733395.r2.dev",
      "pub-9f2aa428a9484d4a9693c901716b18f6.r2.dev",
    ],
  },
};

export default nextConfig;
