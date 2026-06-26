import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  reactCompiler: true,
  basePath: "/ayaan-travels",
  assetPrefix: "/ayaan-travels",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
