import type { PrismaClient } from "@prisma/client";

export interface AuthAdapter {
  prisma: PrismaClient;
}

export function createAdapter(
  prisma: PrismaClient
): AuthAdapter {
  return {
    prisma,
  };
}