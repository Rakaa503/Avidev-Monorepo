import { Role, hasAnyRole } from "./roles";

export interface MiddlewareUser {
  id: string;
  role: Role;
}

export interface MiddlewareResult {
  success: boolean;
  message: string;
}

export function authMiddleware(
  user: MiddlewareUser | null
): MiddlewareResult {
  if (!user) {
    return {
      success: false,
      message: "Unauthorized",
    };
  }

  return {
    success: true,
    message: "Authorized",
  };
}

export function roleMiddleware(
  user: MiddlewareUser | null,
  roles: Role[]
): MiddlewareResult {
  if (!user) {
    return {
      success: false,
      message: "Unauthorized",
    };
  }

  if (!hasAnyRole(user.role, roles)) {
    return {
      success: false,
      message: "Forbidden",
    };
  }

  return {
    success: true,
    message: "Authorized",
  };
}

export function guestMiddleware(
  user: MiddlewareUser | null
): MiddlewareResult {
  if (user) {
    return {
      success: false,
      message: "Already Authenticated",
    };
  }

  return {
    success: true,
    message: "Guest Allowed",
  };
}