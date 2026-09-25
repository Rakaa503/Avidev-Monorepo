import type { JwtAdapter } from "./adapter";
import type { JwtEntry } from "./types";

export class MemoryJwt
  implements JwtAdapter {

  private readonly storage =
    new Map<string, JwtEntry>();

  set(
    token: string,
    entry: JwtEntry,
  ): void {

    this.storage.set(token, entry);

  }

  get(
    token: string,
  ): JwtEntry | undefined {

    return this.storage.get(token);

  }

  has(
    token: string,
  ): boolean {

    return this.storage.has(token);

  }

  delete(
    token: string,
  ): boolean {

    return this.storage.delete(token);

  }

  clear(): void {

    this.storage.clear();

  }

  keys(): string[] {

    return [...this.storage.keys()];

  }

  size(): number {

    return this.storage.size;

  }

}