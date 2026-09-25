import { z } from "zod";
import {
  validate,
  validateOrThrow,
} from "./validation";

const loginSchema = z.object({
  email: z.email(),
  password: z.string().min(8),
});

console.log("========== AVSS Lite Validation ==========");

const success = validate(loginSchema, {
  email: "admin@gmail.com",
  password: "AvidevSecure121zone",
});

console.log("\n✅ VALID DATA");
console.table(success);

const failed = validate(loginSchema, {
  email: "admin",
  password: "123",
});

console.log("\n❌ INVALID DATA");
console.table(failed);

try {
  console.log("\n🚀 validateOrThrow");

  const data = validateOrThrow(loginSchema, {
    email: "admin@gmail.com",
    password: "admin123",
  });

  console.table(data);
} catch (error) {
  console.error(error);
}

console.log("==========================================");
