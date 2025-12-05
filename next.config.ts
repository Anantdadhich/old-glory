import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: [
      'images.unsplash.com',
    ],
  },
  serverExternalPackages: ["@xenova/transformers"],
};

export default nextConfig;
