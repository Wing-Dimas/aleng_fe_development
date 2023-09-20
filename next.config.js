/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  env: {
    BASE_API: "http://api.lenjelenanmadura.id/api",
    MOCK_API: "http://localhost:8000/api",
    JWT_SECRET:
      "QwGJkFcp3bzNz242mtmy4zrgROBTGE0A6GuApawpAxI1XsHMO6wVIKq9MT26G5vT",
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
}

module.exports = nextConfig
