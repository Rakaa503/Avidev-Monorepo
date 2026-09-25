import { PrismaClient } from "@prisma/client";
import { getConfig, setConfig } from "./auth";

const prisma = new PrismaClient();

setConfig({
  prisma,
});

const config = getConfig();

console.log("========== CONFIG ==========\n");

console.log("Prisma :", config.prisma.constructor.name);

console.log(
  "Plugins :",
  config.plugins?.length ?? 0
);

console.log("\n============================");