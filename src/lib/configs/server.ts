import 'server-only';

// Environment variables
export const NODE_ENV = process.env.NODE_ENV ?? 'production';

// Cache variables
const STATIC_CACHE_MIN_TTL_DAYS_RAW = Number(process.env.NEXT_PUBLIC_STATIC_CACHE_MIN_TTL_DAYS);
export const STATIC_CACHE_MIN_TTL_DAYS = !isNaN(STATIC_CACHE_MIN_TTL_DAYS_RAW) ? STATIC_CACHE_MIN_TTL_DAYS_RAW : 180;
export const STATIC_CACHE_MIN_TTL = STATIC_CACHE_MIN_TTL_DAYS * 60 * 60 * 24;
