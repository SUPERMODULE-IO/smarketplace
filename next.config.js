const isProd = process.env.NODE_ENV === 'production'

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  basePath : isProd ? '/' : '',
  assetPrefix : isProd ? '/' : ''
}

module.exports = nextConfig
