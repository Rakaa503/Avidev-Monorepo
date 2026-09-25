import {
  hashPassword,
  verifyPassword,
  needsRehash,
  generatePassword,
} from "./auth/password";

async function test() {
  const password = "AvidevSecure121zone";

  const hash = await hashPassword(password);

  console.log("========== AVSS Lite Test ==========");
  console.log("Password      :", password);
  console.log("Hash          :", hash);

  const verified = await verifyPassword(password, hash);
  console.log("Verify        :", verified);

  const rehash = await needsRehash(hash);
  console.log("Needs Rehash  :", rehash);
console.log(
  "Generated Password:",
  generatePassword()
);
  console.log("====================================");
}
test().catch(console.error);

