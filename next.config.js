/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // Enable static exports
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
  basePath: '',
  trailingSlash: true,
};

module.exports = nextConfig;