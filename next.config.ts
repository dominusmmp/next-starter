import type { NextConfig } from 'next';

// Ensure that the environment variable is accessible in the build process
const NODE_ENV = process.env.NODE_ENV ?? 'production';
const STATIC_CACHE_MIN_TTL_DAYS_RAW = Number(process.env.NEXT_PUBLIC_STATIC_CACHE_MIN_TTL_DAYS);
const STATIC_CACHE_MIN_TTL_DAYS = !isNaN(STATIC_CACHE_MIN_TTL_DAYS_RAW) ? STATIC_CACHE_MIN_TTL_DAYS_RAW : 180;
const STATIC_CACHE_MIN_TTL = STATIC_CACHE_MIN_TTL_DAYS * 60 * 60 * 24;

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
    minimumCacheTTL: NODE_ENV === 'production' ? STATIC_CACHE_MIN_TTL : undefined,
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
