import {
  authMiddleware,
  guestMiddleware,
  roleMiddleware,
  Role,
} from "./auth";

console.log("========== MIDDLEWARE ==========\n");

const admin = {
  id: "1",
  role: Role.ADMIN,
};

const user = {
  id: "2",
  role: Role.USER,
};

console.log("Auth Admin");
console.log(authMiddleware(admin));

console.log();

console.log("Auth Guest");
console.log(authMiddleware(null));

console.log();

console.log("Role Admin");
console.log(
  roleMiddleware(admin, [
    Role.ADMIN,
    Role.SUPER_ADMIN,
  ])
);

console.log();

console.log("Role User");
console.log(
  roleMiddleware(user, [
    Role.ADMIN,
  ])
);

console.log();

console.log("Guest");
console.log(guestMiddleware(null));

console.log();

console.log("Guest Failed");
console.log(guestMiddleware(admin));

console.log("\n===============================");