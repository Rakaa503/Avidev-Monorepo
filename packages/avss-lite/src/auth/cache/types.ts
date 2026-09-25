export interface CacheEntry<T = unknown> {
  value: T;
  expiresAt?: number;
}

export interface CacheOptions {
  ttl?: number;
}

export interface CacheStats {
  keys: number;
}

export interface CacheResult<T = unknown> {
  success: boolean;
  value?: T;
}

export interface CacheDriver {
  name: string;
  version: string;
}