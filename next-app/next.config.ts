import type { NextConfig } from "next";
import path from "path";
import dotenv from "dotenv"

dotenv.config({ path: path.resolve(__dirname, "../.env") });

const nextConfig: NextConfig = {
  env: {
    API_URL: process.env.API_URL || "https://localhost",
    API_PORT: process.env.API_PORT || "7064",
  }
};

export default nextConfig;
