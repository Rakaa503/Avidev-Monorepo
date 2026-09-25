import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";

import type { AuthConfig } from "./config";
import { setConfig } from "./config";

export function createAuth(config: AuthConfig) {
  // Simpan config
  setConfig(config);

  // Jalankan plugin
  config.plugins?.forEach((plugin) => {
    plugin.setup();
  });

  return betterAuth({
    database: prismaAdapter(config.prisma, {
      provider: "postgresql",
    }),
  });
}