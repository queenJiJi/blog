// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
//   images: {
//     domains: ["images.unsplash.com"],
//   },
//   experimental: {
//     appDir: true, // App Router를 활성화!
//   },
// };

// export default nextConfig;
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["images.unsplash.com"],
  },
  experimental: {
    appDir: true,
  },
};

export default nextConfig;
