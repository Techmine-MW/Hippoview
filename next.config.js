const path = require("path");
const config = require("./src/config/config.json");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  basePath: config.base_path !== "/" ? config.base_path : "",
  trailingSlash: config.site.trailing_slash,
  output: "standalone",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "kwhkgdtbuzixujazmjgb.supabase.co",
        port: "",
      },
    ],
  },
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      "@": path.resolve(__dirname, "src"),
      "../layouts/components": path.resolve(__dirname, "src/layouts/components"),
      "@/shortcodes": path.resolve(__dirname, "src/layouts/shortcodes"),
      "../layouts/partials": path.resolve(__dirname, "src/layouts/partials"),
      "../layouts/helpers": path.resolve(__dirname, "src/layouts/helpers"),
      "../lib": path.resolve(__dirname, "src/lib"),
    };
    return config;
  },  
};

module.exports = nextConfig;
