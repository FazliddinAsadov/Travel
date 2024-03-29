/** @type {import('next').NextConfig} */

/** @type {import('next').NextConfig} */
const withPWA = require("next-pwa")({
  dest: "public",
  disable: process.env.NODE_ENV === "development",
  register: true,
});

const nextConfig = withPWA({
  reactStrictMode: false,
  swcMinify: true,
});

module.exports = nextConfig;
// const nextConfig = {
//   reactStrictMode: true,
//   swcMinify: true,
// };

// module.exports = nextConfig;
