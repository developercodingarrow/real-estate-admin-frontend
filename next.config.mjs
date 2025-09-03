/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: {
      bodySizeLimit: "10mb", // Increase the limit (adjust as needed)
    },
  },
  images: {
    domains: ["pub-5bfce6e3ebb54942a136b00643733395.r2.dev"],
  },
};

export default nextConfig;
