export const JWT_NAME = "AVSS JWT";

export const JWT_VERSION = "1.0.0";

export const DEFAULT_JWT_SECRET =
  "avss-lite-secret";

export const DEFAULT_JWT_EXPIRES =
  1000 * 60 * 60;

export const JWT_MESSAGES = {
  CREATED: "JWT created.",
  VERIFIED: "JWT verified.",
  INVALID: "Invalid token.",
  EXPIRED: "Token expired.",
  REVOKED: "Token revoked.",
} as const;