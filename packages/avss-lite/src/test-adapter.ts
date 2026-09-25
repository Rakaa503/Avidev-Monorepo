import { PrismaClient } from "@prisma/client";
import { createAdapter } from "./auth";

const prisma = new PrismaClient();

const adapter = createAdapter(prisma);

console.log("Adapter Created :", adapter !== undefined);
console.log("Prisma Instance :", adapter.prisma instanceof PrismaClient);