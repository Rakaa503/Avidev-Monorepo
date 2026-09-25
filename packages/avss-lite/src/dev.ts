import { PrismaClient } from "@prisma/client";

import { createAuth } from "./auth";
import { loggerPlugin, auditPlugin } from "./plugins";

const prisma = new PrismaClient();

const auth = createAuth({
  prisma,
  plugins: [
    loggerPlugin(),
    auditPlugin(),
  ],
});

console.log(auth);