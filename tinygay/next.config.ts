import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export",
  experimental: {
    agentFeedback: true,
  },
};

export default nextConfig;
