import { createSecurity } from "./security";

const security = createSecurity();

console.log("========== SECURITY ==========");

console.table(
  security.headers
    .builder()
    .build()
);

console.log("========== CORS ==========");

console.table(
  security.cors.createHeaders({
    enabled: true,
    origin: "http://localhost:3000",
    methods: [
      "GET",
      "POST",
      "PUT",
      "PATCH",
      "DELETE",
      "OPTIONS",
    ],
    headers: [
      "Content-Type",
      "Authorization",
      "X-CSRF-Token",
    ],
    credentials: true,
    maxAge: 86400,
  })
);