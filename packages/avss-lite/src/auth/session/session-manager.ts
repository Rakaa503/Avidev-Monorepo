import { randomUUID } from "node:crypto";

import { sessionStore } from "./session-store";

import {
  DEFAULT_SESSION_TTL,
} from "./constants";

import type {
  Session,
  SessionOptions,
  SessionStats,
} from "./types";

export class SessionManager {

  create(
    payload: Omit<
      Session,
      "id" | "createdAt" | "expiresAt"
    >,
    options: SessionOptions = {},
  ): Session {

    const ttl =
      options.ttl ??
      DEFAULT_SESSION_TTL;

    const session: Session = {
      id: randomUUID(),
      userId: payload.userId,
      email: payload.email,
      createdAt: Date.now(),
      expiresAt: Date.now() + ttl,
    };

    sessionStore.create(
      session.id,
      session,
      ttl,
    );

    return session;
  }

  get(
    id: string,
  ): Session | undefined {

    return sessionStore.get(id);

  }

  exists(
    id: string,
  ): boolean {

    return sessionStore.has(id);

  }

  destroy(
    id: string,
  ): boolean {

    return sessionStore.delete(id);

  }

  clear(): void {

    sessionStore.clear();

  }

  refresh(
    id: string,
    ttl: number = DEFAULT_SESSION_TTL,
  ): Session | undefined {

    const session =
      sessionStore.get(id);

    if (!session) {
      return undefined;
    }

    const refreshed: Session = {
      ...session,
      expiresAt: Date.now() + ttl,
    };

    sessionStore.create(
      id,
      refreshed,
      ttl,
    );

    return refreshed;
  }

  count(): number {

    return sessionStore.size();

  }

  keys(): string[] {

    return sessionStore.keys();

  }

  stats(): SessionStats {

    return {
      sessions: this.count(),
    };

  }

}

export function createSession() {

  return new SessionManager();

}