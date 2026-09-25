import fs from "node:fs";
import path from "node:path";
import dotenv from "dotenv";

const envPath = path.resolve(process.cwd(), ".env");

console.log("CWD:", process.cwd());
console.log("ENV PATH:", envPath);
console.log("ENV EXISTS:", fs.existsSync(envPath));

const result = dotenv.config({
  path: envPath,
});

console.log("DOTENV RESULT:", result);

console.log({
  DATABASE_URL: process.env.DATABASE_URL,
  BETTER_AUTH_SECRET: process.env.BETTER_AUTH_SECRET,
  BETTER_AUTH_URL: process.env.BETTER_AUTH_URL,
  NODE_ENV: process.env.NODE_ENV,
});