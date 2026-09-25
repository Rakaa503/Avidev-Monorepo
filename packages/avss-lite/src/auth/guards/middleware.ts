import { authenticate } from "./auth";
import { authorizeRole } from "./role";
import { authorizePermission } from "./permission";

import type {
  AuthRequest,
  GuardResult,
} from "./types";

export interface GuardMiddlewareOptions {
  auth?: boolean;
  roles?: readonly string[];
  permissions?: readonly string[];
}

export function guardMiddleware(
  request: AuthRequest,
  options: GuardMiddlewareOptions = {},
): GuardResult {
  const session = request.session;

  if (options.auth) {
    const auth = authenticate(request);

    if (!auth.success) {
      return auth;
    }
  }

  if (!session) {
    return {
      success: false,
      message: "Session not found.",
    };
  }

  if (options.roles?.length) {
    const role = authorizeRole(
      session,
      options.roles,
    );

    if (!role.success) {
      return role;
    }
  }

  if (options.permissions?.length) {
    const permission = authorizePermission(
      session,
      options.permissions,
    );

    if (!permission.success) {
      return permission;
    }
  }

  return {
    success: true,
    message: "Guard passed.",
  };
}