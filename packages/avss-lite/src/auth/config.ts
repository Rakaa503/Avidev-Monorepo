import type { PrismaClient } from "@prisma/client";
import type { AVSSPlugin } from "../plugins";

export interface AuthConfig {
  /**
   * Prisma Client
   */
  prisma: PrismaClient;

  /**
   * Optional plugins
   */
  plugins?: AVSSPlugin[];
}

let currentConfig: AuthConfig | null = null;

/**
 * Simpan konfigurasi auth
 */
export function setConfig(config: AuthConfig): void {
  currentConfig = config;
}

/**
 * Ambil konfigurasi auth
 */
export function getConfig(): AuthConfig {
  if (!currentConfig) {
    throw new Error(
      "Auth configuration has not been initialized."
    );
  }

  return currentConfig;
}