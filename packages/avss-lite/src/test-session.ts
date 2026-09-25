import {
  isSessionExpired,
  getRemainingTime,
} from "./auth";

const session = {
  user: {
    id: "1",
    email: "admin@gmail.com",
    name: "Admin",
    role: "ADMIN",
  },
  expiresAt: new Date(
    Date.now() + 60000
  ),
};

console.log("========== SESSION ==========\n");

console.log(
  "Expired:",
  isSessionExpired(session)
);

console.log(
  "Remaining:",
  getRemainingTime(session),
  "ms"
);

console.log("\n=============================");