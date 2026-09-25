import { PrismaClient } from "@prisma/client";
import { createAuth } from "./auth";

const prisma = new PrismaClient();

const auth = createAuth({
  prisma,
});

console.log("========== BETTER AUTH ==========\n");

console.log(auth);

console.log("\n=================================");