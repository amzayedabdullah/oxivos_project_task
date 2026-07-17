import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.lerevecraze.com',
      },
    ],
  },
};

export default nextConfig;
