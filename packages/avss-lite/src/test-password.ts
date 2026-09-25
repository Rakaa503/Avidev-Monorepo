import {
  hashPassword,
  verifyPassword,
  needsRehash,
  generatePassword,
} from "./auth";

async function main() {
  const password = "AvssLite123!";

  console.log("========== AVSS Lite Password ==========\n");

  console.log("Password:");
  console.log(password);

  const hash = await hashPassword(password);

  console.log("\nHash:");
  console.log(hash);

  const verified = await verifyPassword(
    password,
    hash
  );

  console.log("\nVerify:");
  console.log(verified);

  const rehash = await needsRehash(hash);

  console.log("\nNeeds Rehash:");
  console.log(rehash);

  console.log("\nGenerated Password:");
  console.log(generatePassword());

  console.log("\n========================================");
}

main().catch(console.error);