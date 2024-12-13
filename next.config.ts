import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable images from any domain
  images: {
    dangerouslyAllowSVG: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: '*',
      }
    ]
  }
};

export default nextConfig;
