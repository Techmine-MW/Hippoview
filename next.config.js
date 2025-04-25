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
      {
        protocol: "https",
        hostname: "kwhkgdtbuzixujazmjgb.supabase.co",
        port: "",
      },
    ],
  },
};

module.exports = nextConfig;
