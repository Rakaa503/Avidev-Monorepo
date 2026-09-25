import {
  createSession,
} from "./index";

async function main(): Promise<void> {

  console.clear();

  console.log("========================================");
  console.log("       AVSS SESSION FRAMEWORK");
  console.log("========================================\n");

  const session =
    createSession();

  const user =
    session.create({
      userId: "1",
      email: "admin@avss.dev",
    });

  console.log(
    "✔ Create Session   :",
    user.id,
  );

  console.log(
    "✔ Get Session      :",
    session.get(user.id),
  );

  console.log(
    "✔ Exists Session   :",
    session.exists(user.id),
  );

  console.log(
    "✔ Refresh Session  :",
    session.refresh(user.id),
  );

  console.log(
    "✔ Session Stats    :",
    session.stats(),
  );

  console.log(
    "✔ Session Keys     :",
    session.keys(),
  );

  console.log(
    "✔ Total Sessions   :",
    session.count(),
  );

  console.log(
    "✔ Destroy Session  :",
    session.destroy(user.id),
  );

  console.log(
    "✔ Exists Session   :",
    session.exists(user.id),
  );

  session.clear();

  console.log(
    "✔ Clear Sessions   :",
    session.count() === 0,
  );

  console.log("\n----------------------------------------");

  console.log(
    "Total Sessions :",
    session.count(),
  );

  console.log(
    "Stats :",
    session.stats(),
  );

  console.log("\n========================================");
  console.log("     SESSION TEST COMPLETED");
  console.log("========================================");

}

main().catch(console.error);