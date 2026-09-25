import type {
  CacheAdapter,
} from "./adapter";

interface CacheEntry<T = unknown> {
  value: T;
  expiresAt?: number;
}

export class MemoryCache implements CacheAdapter {
  private readonly storage = new Map<
    string,
    CacheEntry
  >();

  set<T>(
    key: string,
    value: T,
    ttl?: number,
  ): void {
    this.storage.set(key, {
      value,
      expiresAt: ttl
        ? Date.now() + ttl
        : undefined,
    });
  }

  get<T>(
    key: string,
  ): T | undefined {
    const entry = this.storage.get(key);

    if (!entry) {
      return undefined;
    }

    if (
      entry.expiresAt !== undefined &&
      Date.now() > entry.expiresAt
    ) {
      this.storage.delete(key);
      return undefined;
    }

    return entry.value as T;
  }

  has(
    key: string,
  ): boolean {
    return this.get(key) !== undefined;
  }

  delete(
    key: string,
  ): boolean {
    return this.storage.delete(key);
  }

  clear(): void {
    this.storage.clear();
  }

  keys(): string[] {
    this.cleanup();

    return [...this.storage.keys()];
  }

  size(): number {
    this.cleanup();

    return this.storage.size;
  }

  cleanup(): void {
    const now = Date.now();

    for (const [key, value] of this.storage) {
      if (
        value.expiresAt !== undefined &&
        now > value.expiresAt
      ) {
        this.storage.delete(key);
      }
    }
  }
}