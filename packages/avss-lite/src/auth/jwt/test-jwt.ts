import { createJWT } from "./index";

async function main(): Promise<void> {

  console.clear();

  console.log("========================================");
  console.log("         AVSS JWT FRAMEWORK");
  console.log("========================================\n");

  const jwt = createJWT();

  const token = jwt.sign({
    userId: "1",
    email: "admin@avss.dev",
  });

  console.log(
    "✔ Sign Token      :",
    token,
  );

  console.log(
    "✔ Verify Token    :",
    jwt.verify(token),
  );

  console.log(
    "✔ Decode Token    :",
    jwt.decode(token),
  );

  console.log(
    "✔ Total Tokens    :",
    jwt.count(),
  );

  console.log(
    "✔ JWT Stats       :",
    jwt.stats(),
  );

  console.log(
    "✔ Revoke Token    :",
    jwt.revoke(token),
  );

  console.log(
    "✔ Verify Revoked  :",
    jwt.verify(token),
  );

  jwt.clear();

  console.log(
    "✔ Clear Tokens    :",
    jwt.count() === 0,
  );

  console.log("\n----------------------------------------");

  console.log(
    "Total Tokens :",
    jwt.count(),
  );

  console.log(
    "Stats :",
    jwt.stats(),
  );

  console.log("\n========================================");
  console.log("       JWT TEST COMPLETED");
  console.log("========================================");

}

main().catch(console.error);