const NOD_ENV = process.env.NODE_ENV ?? 'production';

const STATIC_CACHE_MIN_TTL_DAYS = Number(process.env.NEXT_PUBLIC_STATIC_CACHE_MIN_TTL_DAYS);
const STATIC_CACHE_MIN_TTL = 60 * 60 * 24 * (!isNaN(STATIC_CACHE_MIN_TTL_DAYS) ? STATIC_CACHE_MIN_TTL_DAYS : 180);

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'standalone',
  images: {
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: NOD_ENV === 'production' ? STATIC_CACHE_MIN_TTL : undefined,
  },
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
};

export default nextConfig;
