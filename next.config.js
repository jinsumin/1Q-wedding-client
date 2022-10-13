/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "www.gravatar.com",
      "localhost",
      "ec2-43-200-8-24.ap-northeast-2.compute.amazonaws.com",
      "static.toss.im",
    ],
  },
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = nextConfig;

const withVideos = require("next-videos");

module.exports = withVideos();
