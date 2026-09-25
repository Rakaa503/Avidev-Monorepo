import type { OAuthCallbackResult } from "./types";

export function createCallbackResult(
  provider: string,
  code?: string,
  state?: string,
  error?: string,
): OAuthCallbackResult {
  return {
    success: !error,
    provider,
    code,
    state,
    error,
  };
}