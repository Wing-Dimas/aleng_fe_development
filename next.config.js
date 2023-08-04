/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  env: {
    BASE_API: "http://api.lenjelenanmadura.id/api",
    GOOGLE_CLIENT_ID:
      "281996152491-vvhjselprkkeehk4u39rmmh92emjckkr.apps.googleusercontent.com",
    GOOGLE_CLIENT_SECRET: "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",
    NEXTAUTH_URL: "http://localhost:3000",
  },
  images: {
    domains: [
      "source.unsplash.com",
      "www.amithyahotels.com",
      "assets.ayobandung.com",
    ],
  },
};

module.exports = nextConfig;
