import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "standalone",
  images: {
    domains: ["teckzilla.net"],
    qualities: [25, 50, 75, 80],
  },
};

export default nextConfig;
