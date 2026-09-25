export interface SessionAdapter<T = unknown> {
  create(
    id: string,
    session: T,
    ttl?: number,
  ): void;

  get(
    id: string,
  ): T | undefined;

  has(
    id: string,
  ): boolean;

  delete(
    id: string,
  ): boolean;

  clear(): void;

  keys(): string[];

  size(): number;
}