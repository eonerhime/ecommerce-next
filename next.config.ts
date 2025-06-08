import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "next-ecommerce-app.oneentry.cloud/",
      },
      { protocol: "https", hostname: "assets.entrepreneur.com" },
    ],
  },
};

export default nextConfig;
