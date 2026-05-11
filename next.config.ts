import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["cdn.dribbble.com", "lh3.googleusercontent.com"],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;