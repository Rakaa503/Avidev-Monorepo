import {
  DEFAULT_ROLE,
  Role,
  hasRole,
  hasAnyRole,
  isAdmin,
  isModerator,
  isSuperAdmin,
  isUser,
} from "./auth";

console.log("========== ROLES ==========\n");

console.log("Default Role :", DEFAULT_ROLE);

console.log();

console.log("USER");
console.log(isUser(Role.USER));

console.log();

console.log("ADMIN");
console.log(isAdmin(Role.ADMIN));

console.log();

console.log("MODERATOR");
console.log(isModerator(Role.MODERATOR));

console.log();

console.log("SUPER ADMIN");
console.log(isSuperAdmin(Role.SUPER_ADMIN));

console.log();

console.log(
  "Has Role ADMIN:",
  hasRole(Role.ADMIN, Role.ADMIN)
);

console.log();

console.log(
  "Has Any Role:",
  hasAnyRole(Role.MODERATOR, [
    Role.ADMIN,
    Role.MODERATOR,
  ])
);

console.log("\n===========================");