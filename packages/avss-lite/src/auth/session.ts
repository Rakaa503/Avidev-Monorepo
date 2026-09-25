export interface SessionUser {
  id: string;
  email: string;
  name?: string;
  role?: string;
}

export interface Session {
  user: SessionUser;
  expiresAt: Date;
}

export function isSessionExpired(
  session: Session
): boolean {
  return new Date() >= session.expiresAt;
}

export function getRemainingTime(
  session: Session
): number {
  return Math.max(
    session.expiresAt.getTime() - Date.now(),
    0
  );
}