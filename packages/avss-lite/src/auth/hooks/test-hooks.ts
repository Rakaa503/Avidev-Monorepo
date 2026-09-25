import {
  hooks,
  onBeforeSignIn,
  onAfterSignIn,
  onBeforeSignUp,
  onAfterSignUp,
  onBeforeSignOut,
  onAfterSignOut,
  emitBeforeSignIn,
  emitAfterSignIn,
  emitBeforeSignUp,
  emitAfterSignUp,
  emitBeforeSignOut,
  emitAfterSignOut,
} from "./index";

async function main(): Promise<void> {
  console.clear();

  console.log("========================================");
  console.log("         AVSS HOOKS FRAMEWORK");
  console.log("========================================\n");

  hooks.clear();

  onBeforeSignIn(() => {
    console.log("✔ Before Sign In");
  });

  onAfterSignIn(() => {
    console.log("✔ After Sign In");
  });

  onBeforeSignUp(() => {
    console.log("✔ Before Sign Up");
  });

  onAfterSignUp(() => {
    console.log("✔ After Sign Up");
  });

  onBeforeSignOut(() => {
    console.log("✔ Before Sign Out");
  });

  onAfterSignOut(() => {
    console.log("✔ After Sign Out");
  });

  console.log("Registered Hooks :", hooks.count());

  console.log("\n----------------------------------------\n");

  await emitBeforeSignIn({
    userId: "1",
    email: "admin@avss.dev",
  });

  await emitAfterSignIn({
    userId: "1",
    email: "admin@avss.dev",
  });

  await emitBeforeSignUp({
    userId: "2",
    email: "new@avss.dev",
  });

  await emitAfterSignUp({
    userId: "2",
    email: "new@avss.dev",
  });

  await emitBeforeSignOut({
    userId: "1",
  });

  await emitAfterSignOut({
    userId: "1",
  });

  console.log("\n========================================");
  console.log("      HOOKS TEST COMPLETED");
  console.log("========================================");
}

main().catch(console.error);