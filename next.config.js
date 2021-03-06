/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['media.graphassets.com', 'tailwindui.com'],
  },
  experimental: {images: {layoutRaw: true}},
}

module.exports = nextConfig
