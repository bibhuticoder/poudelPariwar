/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: false,
  images: { unoptimized: true },
  webpack: (config) => {
    config.resolve.alias.canvas = false;
    return config;
  }
}

module.exports = nextConfig
