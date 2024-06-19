/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    transpilePackages: ['three'],
    images: {
      domains: [
        "api.microlink.io", // Microlink Image Preview
      ],
    },
  }
  
  module.exports = nextConfig;
  