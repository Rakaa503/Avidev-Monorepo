export interface Session {
  id: string;
  userId: string;
  email: string;
  createdAt: number;
  expiresAt: number;
}

export interface SessionOptions {
  ttl?: number;
}

export interface SessionStats {
  sessions: number;
}

export interface SessionResult<T = Session> {
  success: boolean;
  data?: T;
  message?: string;
}

export interface SessionPayload {
  userId: string;
  email: string;
}

export interface SessionEntry {
  session: Session;
  expiresAt?: number;
}

export interface SessionDriver {
  name: string;
  version: string;
}