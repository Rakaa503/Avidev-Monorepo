import { GUARD_MESSAGES } from "./constants";
import type {
  AuthSession,
  GuardResult,
} from "./types";

export function authorizePermission(
  session: AuthSession,
  requiredPermissions: readonly string[],
): GuardResult {
  if (!session.authenticated) {
    return {
      success: false,
      message: GUARD_MESSAGES.AUTH_REQUIRED,
    };
  }

  const permissions = session.permissions ?? [];

  for (const permission of requiredPermissions) {
    if (!permissions.includes(permission)) {
      return {
        success: false,
        message: `${GUARD_MESSAGES.PERMISSION_DENIED} (${permission})`,
      };
    }
  }

  return {
    success: true,
    message: GUARD_MESSAGES.PERMISSION_SUCCESS,
  };
}

export function hasPermission(
  session: AuthSession,
  permission: string,
): boolean {
  return (
    session.authenticated &&
    (session.permissions ?? []).includes(permission)
  );
}

export function hasAnyPermission(
  session: AuthSession,
  permissions: readonly string[],
): boolean {
  if (!session.authenticated) {
    return false;
  }

  return permissions.some((permission) =>
    (session.permissions ?? []).includes(permission),
  );
}

export function hasAllPermissions(
  session: AuthSession,
  permissions: readonly string[],
): boolean {
  if (!session.authenticated) {
    return false;
  }

  return permissions.every((permission) =>
    (session.permissions ?? []).includes(permission),
  );
}