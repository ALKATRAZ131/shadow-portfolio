import type { NextConfig } from "next";

const link = `/shadow-portfolio`;

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: "export",
  basePath: isProd ? "/shadow-portfolio" : ""

};

export default nextConfig;