import type { NextConfig } from "next";

const baseUrl = 'https://alkatraz131.github.io';
const link = `/shadow-portfolio`;



const nextConfig: NextConfig = {
  output: "export",
  basePath: link
};

export default nextConfig;