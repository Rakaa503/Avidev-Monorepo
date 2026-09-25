import {
  createOAuth,
  createRedirectUrl,
  createCallbackResult,
} from "./index";

function main(): void {
  console.clear();

  console.log("========================================");
  console.log("         AVSS OAUTH FRAMEWORK");
  console.log("========================================\n");

  const oauth = createOAuth();

  console.log("========== STATE ==========\n");

  const state = oauth.state();

  console.log(state);

  console.log("\n========== NONCE ==========\n");

  const nonce = oauth.nonce();

  console.log(nonce);

  console.log("\n========== PKCE ==========\n");

  const pkce = oauth.pkce();

  console.log(pkce);

  console.log("\n========== REDIRECT ==========\n");

  console.log(
    createRedirectUrl({
      provider: "google",
      redirectUri: "http://localhost:3000/api/auth/callback",
      state: state.value,
      scope: ["openid", "email", "profile"],
    }),
  );

  console.log("\n========== CALLBACK ==========\n");

  console.log(
    createCallbackResult(
      "google",
      "authorization-code",
      state.value,
    ),
  );

  console.log("\n========================================");
  console.log("      OAUTH TEST COMPLETED");
  console.log("========================================");
}

main();