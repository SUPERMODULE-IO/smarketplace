const isProd = process.env.NODE_ENV === 'production'

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  basePath : isProd ? '/app' : '',
  assetPrefix : isProd ? '/app' : ''
}

module.exports = nextConfig
