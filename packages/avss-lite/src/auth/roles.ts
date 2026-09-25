export enum Role {
  USER = "USER",
  MODERATOR = "MODERATOR",
  ADMIN = "ADMIN",
  SUPER_ADMIN = "SUPER_ADMIN",
}

export const DEFAULT_ROLE = Role.USER;

export function hasRole(
  userRole: Role,
  requiredRole: Role
): boolean {
  return userRole === requiredRole;
}

export function hasAnyRole(
  userRole: Role,
  roles: Role[]
): boolean {
  return roles.includes(userRole);
}

export function isUser(role: Role): boolean {
  return role === Role.USER;
}

export function isModerator(role: Role): boolean {
  return role === Role.MODERATOR;
}

export function isAdmin(role: Role): boolean {
  return role === Role.ADMIN;
}

export function isSuperAdmin(role: Role): boolean {
  return role === Role.SUPER_ADMIN;
}