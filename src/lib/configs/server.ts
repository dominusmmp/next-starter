import 'server-only';

// Server Environment variables
export const NODE_ENV = ['development', 'production', 'test'].includes(process.env.NODE_ENV)
  ? process.env.NODE_ENV
  : 'production';
