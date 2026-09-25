import {
  authenticate,
  authorizeRole,
  authorizePermission,
  guardMiddleware,
} from "./index";

console.clear();

console.log("========================================");
console.log("        AVSS GUARDS FRAMEWORK");
console.log("========================================\n");

const session = {
  userId: "1",
  email: "admin@avss.dev",
  authenticated: true,
  role: "admin",
  permissions: [
    "user:create",
    "user:update",
    "course:create",
  ],
};

const request = {
  session,
};

console.log("========== AUTH ==========\n");

console.log(authenticate(request));

console.log("\n========== ROLE ==========\n");

console.log(
  authorizeRole(session, [
    "admin",
    "owner",
  ]),
);

console.log(
  authorizeRole(session, [
    "guest",
  ]),
);

console.log("\n========== PERMISSION ==========\n");

console.log(
  authorizePermission(session, [
    "user:create",
    "course:create",
  ]),
);

console.log(
  authorizePermission(session, [
    "course:delete",
  ]),
);

console.log("\n========== MIDDLEWARE ==========\n");

console.log(
  guardMiddleware(request, {
    auth: true,
    roles: ["admin"],
    permissions: [
      "user:create",
    ],
  }),
);

console.log(
  guardMiddleware(request, {
    auth: true,
    roles: ["guest"],
  }),
);

console.log("\n========================================");
console.log("      GUARDS TEST COMPLETED");
console.log("========================================");