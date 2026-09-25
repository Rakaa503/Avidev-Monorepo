import type {
  CacheAdapter,
} from "./adapter";

export class RedisCache
  implements CacheAdapter
{
  get<T>(): T | undefined {
    throw new Error(
      "Redis adapter not implemented.",
    );
  }

  set<T>(): void {
    throw new Error(
      "Redis adapter not implemented.",
    );
  }

  has(): boolean {
    throw new Error(
      "Redis adapter not implemented.",
    );
  }

  delete(): boolean {
    throw new Error(
      "Redis adapter not implemented.",
    );
  }

  clear(): void {
    throw new Error(
      "Redis adapter not implemented.",
    );
  }

  keys(): string[] {
    throw new Error(
      "Redis adapter not implemented.",
    );
  }

  size(): number {
    throw new Error(
      "Redis adapter not implemented.",
    );
  }
}