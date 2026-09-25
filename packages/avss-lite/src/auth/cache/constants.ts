export const CACHE_NAME = "AVSS Cache";

export const CACHE_VERSION = "1.0.0";

export const DEFAULT_TTL = 1000 * 60 * 5;

export const CACHE_MESSAGES = {
  SET: "Cache stored.",
  GET: "Cache retrieved.",
  HIT: "Cache hit.",
  MISS: "Cache miss.",
  DELETE: "Cache deleted.",
  CLEAR: "Cache cleared.",
  EXPIRED: "Cache expired.",
} as const;

export const CACHE_DRIVERS = {
  MEMORY: "memory",
  REDIS: "redis",
} as const;