import { GUARD_MESSAGES } from "./constants";
import type {
  AuthSession,
  GuardResult,
} from "./types";

export function authorizeRole(
  session: AuthSession,
  roles: readonly string[],
): GuardResult {
  if (!session.authenticated) {
    return {
      success: false,
      message: GUARD_MESSAGES.AUTH_REQUIRED,
    };
  }

  if (!session.role) {
    return {
      success: false,
      message: GUARD_MESSAGES.ROLE_DENIED,
    };
  }

  if (!roles.includes(session.role)) {
    return {
      success: false,
      message: GUARD_MESSAGES.ROLE_DENIED,
    };
  }

  return {
    success: true,
    message: GUARD_MESSAGES.ROLE_SUCCESS,
  };
}