import type { SessionAdapter } from "./adapter";
import type { Session } from "./types";

interface SessionEntry {
  session: Session;
  expiresAt?: number;
}

export class MemorySession
  implements SessionAdapter<Session>
{
  private readonly storage = new Map<
    string,
    SessionEntry
  >();

  create(
    id: string,
    session: Session,
    ttl?: number,
  ): void {
    this.storage.set(id, {
      session,
      expiresAt: ttl
        ? Date.now() + ttl
        : undefined,
    });
  }

  get(
    id: string,
  ): Session | undefined {
    const entry = this.storage.get(id);

    if (!entry) {
      return undefined;
    }

    if (
      entry.expiresAt &&
      Date.now() > entry.expiresAt
    ) {
      this.storage.delete(id);
      return undefined;
    }

    return entry.session;
  }

  has(
    id: string,
  ): boolean {
    return this.get(id) !== undefined;
  }

  delete(
    id: string,
  ): boolean {
    return this.storage.delete(id);
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