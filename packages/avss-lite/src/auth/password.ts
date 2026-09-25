import argon2 from "argon2";
import { randomBytes } from "node:crypto";

const ARGON2_OPTIONS = {
  type: argon2.argon2id,
  memoryCost: 65536,
  timeCost: 3,
  parallelism: 1,
} as const;

/**
 * Hash a plain text password using Argon2id.
 */
export async function hashPassword(
  password: string
): Promise<string> {
  return await argon2.hash(password, ARGON2_OPTIONS);
}

/**
 * Verify a password against a stored hash.
 */
export async function verifyPassword(
  password: string,
  hash: string
): Promise<boolean> {
  return await argon2.verify(hash, password);
}

/**
 * Check if a password hash should be rehashed.
 */
export async function needsRehash(
  hash: string
): Promise<boolean> {
  return await argon2.needsRehash(hash, {
    memoryCost: ARGON2_OPTIONS.memoryCost,
    timeCost: ARGON2_OPTIONS.timeCost,
    parallelism: ARGON2_OPTIONS.parallelism,
  });
}

/**
 * Generate a secure random password.
 */
export function generatePassword(
  length = 16
): string {
  return randomBytes(length)
    .toString("base64")
    .replace(/[^a-zA-Z0-9]/g, "")
    .slice(0, length);
}