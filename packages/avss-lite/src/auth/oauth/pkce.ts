import { createHash, randomBytes } from "node:crypto";
import {
  PKCE_METHOD,
  PKCE_VERIFIER_LENGTH,
} from "./constants";
import type { OAuthPkce } from "./types";

function toBase64Url(buffer: Buffer): string {
  return buffer
    .toString("base64")
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=/g, "");
}

export function generatePkce(): OAuthPkce {
  const verifier = toBase64Url(
    randomBytes(PKCE_VERIFIER_LENGTH),
  );

  const challenge = toBase64Url(
    createHash("sha256")
      .update(verifier)
      .digest(),
  );

  return {
    verifier,
    challenge,
    method: PKCE_METHOD,
  };
}