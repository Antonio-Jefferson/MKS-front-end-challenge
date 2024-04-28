/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: false,
  },
  images: {
    domains: ['mks-sistemas.nyc3.digitaloceanspaces.com'],
  },
  experimental: {
    babelPlugin: true,
  },
};

export default nextConfig;
