import { randomBytes } from "node:crypto";
import { NONCE_LENGTH } from "./constants";
import type { OAuthNonce } from "./types";

export function generateNonce(): OAuthNonce {
  return {
    value: randomBytes(NONCE_LENGTH).toString("hex"),
    createdAt: new Date(),
  };
}

export function validateNonce(
  nonce: OAuthNonce,
  expected: string,
): boolean {
  return nonce.value === expected;
}