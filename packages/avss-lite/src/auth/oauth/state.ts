import { randomBytes } from "node:crypto";
import { STATE_LENGTH } from "./constants";
import type { OAuthState } from "./types";

export function generateState(): OAuthState {
  return {
    value: randomBytes(STATE_LENGTH).toString("hex"),
    createdAt: new Date(),
  };
}

export function validateState(
  state: OAuthState,
  expected: string,
): boolean {
  return state.value === expected;
}