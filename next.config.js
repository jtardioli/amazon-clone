/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "www.nicepng.com",
      "m.media-amazon.com",
      "upload.wikimedia.org",
      "images-na.ssl-images-amazon.com",
    ],
  },
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = nextConfig;
