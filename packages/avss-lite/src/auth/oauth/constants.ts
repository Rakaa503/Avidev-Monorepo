export const OAUTH_VERSION = "1.0.0";

export const PKCE_METHOD = "S256";

export const DEFAULT_SCOPES = [
  "openid",
  "email",
  "profile",
] as const;

export const STATE_LENGTH = 32;

export const NONCE_LENGTH = 32;

export const PKCE_VERIFIER_LENGTH = 64;