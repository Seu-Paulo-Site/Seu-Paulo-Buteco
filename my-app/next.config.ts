import path from "path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Tira a bolinha do Next que fica sobre a página em desenvolvimento.
  devIndicators: false,

  webpack(config) {
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      "@": path.resolve(__dirname, "src"),
    };
    return config;
  },
};

export default nextConfig;
