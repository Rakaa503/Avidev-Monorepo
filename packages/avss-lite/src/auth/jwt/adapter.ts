import type { JwtEntry } from "./types";

export interface JwtAdapter {
  set(
    token: string,
    entry: JwtEntry,
    ttl?: number,
  ): void;

  get(
    token: string,
  ): JwtEntry | undefined;

  has(
    token: string,
  ): boolean;

  delete(
    token: string,
  ): boolean;

  clear(): void;

  keys(): string[];

  size(): number;
}