import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // output: 'standalone',
  reactStrictMode: true,
  reactCompiler: true,
  cacheComponents: true,
  experimental: {
    authInterrupts: true,
  },
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
};

export default nextConfig;
