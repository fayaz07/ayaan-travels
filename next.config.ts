import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  reactCompiler: true,
  // When deploying to https://<user>.github.io/<repo>, set basePath to "/<repo>"
  // e.g. basePath: "/ayaan-travels"
  // Leave empty if using a custom domain (e.g. ayaantravels.in)
};

export default nextConfig;
