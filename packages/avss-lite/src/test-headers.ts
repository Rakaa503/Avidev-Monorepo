import { createSecurity } from "./security";

const security = createSecurity();

console.log("========== SECURITY HEADERS ==========");

console.table(
  security.headers
    .builder()
    .build()
);