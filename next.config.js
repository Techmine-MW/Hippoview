const config = require("./src/config/config.json");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  basePath: config.base_path !== "/" ? config.base_path : "",
  trailingSlash: config.site.trailing_slash,
  output: "export", // <- Required for static[ export, standalone]
  images: {
    unoptimized: true, // Required for next/image to work without optimization server
    remotePatterns: [
      {
        protocol: "https",
        hostname: "gspqgpzyhdhinyvtyugx.supabase.co",
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
