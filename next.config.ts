import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // reactStrictMode: false, 
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
};

export default nextConfig;
