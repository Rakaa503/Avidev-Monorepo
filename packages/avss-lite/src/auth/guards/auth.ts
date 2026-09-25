import { GUARD_MESSAGES } from "./constants";
import type {
  AuthRequest,
  GuardResult,
} from "./types";

export function authenticate(
  request: AuthRequest,
): GuardResult {
  const session = request.session;

  if (!session) {
    return {
      success: false,
      message: GUARD_MESSAGES.AUTH_REQUIRED,
    };
  }

  if (!session.authenticated) {
    return {
      success: false,
      message: GUARD_MESSAGES.AUTH_REQUIRED,
    };
  }

  return {
    success: true,
    message: GUARD_MESSAGES.AUTH_SUCCESS,
  };
}