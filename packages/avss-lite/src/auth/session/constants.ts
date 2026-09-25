export const SESSION_NAME = "AVSS Session";

export const SESSION_VERSION = "1.0.0";

export const DEFAULT_SESSION_TTL =
  1000 * 60 * 60 * 24 * 7; // 7 Days

export const SESSION_PREFIX =
  "avss_session";

export const SESSION_MESSAGES = {
  CREATED: "Session created.",
  FOUND: "Session found.",
  UPDATED: "Session updated.",
  REFRESHED: "Session refreshed.",
  DELETED: "Session deleted.",
  CLEARED: "All sessions cleared.",
  EXPIRED: "Session expired.",
  NOT_FOUND: "Session not found.",
} as const;