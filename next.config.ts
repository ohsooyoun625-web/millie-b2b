import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
  basePath: "/millie-b2b",
  assetPrefix: "/millie-b2b",
};

export default nextConfig;
