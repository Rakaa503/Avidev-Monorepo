import type { CacheAdapter } from "./adapter";
import type { CacheStats } from "./types";

export class CacheManager {
  constructor(
    private readonly adapter: CacheAdapter,
  ) {}

  set<T>(
    key: string,
    value: T,
    ttl?: number,
  ): void {
    this.adapter.set(key, value, ttl);
  }

  get<T>(
    key: string,
  ): T | undefined {
    return this.adapter.get<T>(key);
  }

  has(
    key: string,
  ): boolean {
    return this.adapter.has(key);
  }

  delete(
    key: string,
  ): boolean {
    return this.adapter.delete(key);
  }

  clear(): void {
    this.adapter.clear();
  }

  keys(): string[] {
    return this.adapter.keys();
  }

  size(): number {
    return this.adapter.size();
  }

  stats(): CacheStats {
    return {
      keys: this.size(),
    };
  }

  cleanup(): void {
    for (const key of this.keys()) {
      this.get(key);
    }
  }
}

export function createCache(
  adapter: CacheAdapter,
): CacheManager {
  return new CacheManager(adapter);
}