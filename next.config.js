/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["www.nicepng.com", "m.media-amazon.com"],
  },
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = nextConfig;
