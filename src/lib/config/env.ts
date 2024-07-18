export const NOD_ENV = process.env.NODE_ENV ?? 'production';

export const STATIC_CACHE_MIN_TTL_DAYS = Number(process.env.NEXT_PUBLIC_STATIC_CACHE_MIN_TTL_DAYS);
export const STATIC_CACHE_MIN_TTL =
  60 * 60 * 24 * (!isNaN(STATIC_CACHE_MIN_TTL_DAYS) ? STATIC_CACHE_MIN_TTL_DAYS : 180);
