import { PrismaClient } from "@prisma/client";
import { createAuth } from "./auth";

const prisma = new PrismaClient();

console.log("========== AUTH ==========\n");

const auth = createAuth({
  prisma,
});

console.log("Handler :", typeof auth.handler);

console.log("API :", Object.keys(auth.api).length);

console.log("\n==========================");