/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: false,
  env: {
    BASE_API: "http://www.aleng.mrblocx.my.id/api",
    BASE_STORAGE: "http://www.aleng.mrblocx.my.id/storage/",
    MOCK_API: "https://raw.githubusercontent.com/afifcodes/sample-api/main/sample",
    JWT_SECRET:
      "QwGJkFcp3bzNz242mtmy4zrgROBTGE0A6GuApawpAxI1XsHMO6wVIKq9MT26G5vT",
  },
  images: {
    domains: ["http://www.aleng.mrblocx.my.id", "http://www.aleng.mrblocx.my.id/storage/", "www.aleng.mrblocx.my.id"]
  },
};

module.exports = nextConfig;
