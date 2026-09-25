export interface CacheAdapter {
  get<T>(key: string): T | undefined;

  set<T>(
    key: string,
    value: T,
    ttl?: number,
  ): void;

  has(key: string): boolean;

  delete(key: string): boolean;

  clear(): void;

  keys(): string[];

  size(): number;
}