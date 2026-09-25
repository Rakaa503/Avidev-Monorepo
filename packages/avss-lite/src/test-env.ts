import { validateEnv } from "./env";

try {
  const env = validateEnv();

  console.log("✅ ENV VALID");
  console.log(env);
} catch (error) {
  console.error("❌ ENV INVALID");
  console.error(error);
}