import {
  createAppleProvider,
  createCredentialsProvider,
  createDiscordProvider,
  createGithubProvider,
  createGitlabProvider,
  createGoogleProvider,
  createMicrosoftProvider,
  providerManager,
} from "./index";

function main(): void {
  console.clear();

  console.log("========================================");
  console.log("      AVSS PROVIDERS FRAMEWORK TEST");
  console.log("========================================\n");

  providerManager.clear();

  providerManager.register(
    createGoogleProvider({
      clientId: "google-client-id",
      clientSecret: "google-client-secret",
    }),
  );

  providerManager.register(
    createGithubProvider({
      clientId: "github-client-id",
      clientSecret: "github-client-secret",
    }),
  );

  providerManager.register(
    createDiscordProvider({
      clientId: "discord-client-id",
      clientSecret: "discord-client-secret",
    }),
  );

  providerManager.register(
    createMicrosoftProvider({
      clientId: "microsoft-client-id",
      clientSecret: "microsoft-client-secret",
    }),
  );

  providerManager.register(
    createAppleProvider({
      clientId: "apple-client-id",
      clientSecret: "apple-client-secret",
    }),
  );

  providerManager.register(
    createGitlabProvider({
      clientId: "gitlab-client-id",
      clientSecret: "gitlab-client-secret",
    }),
  );

  providerManager.register(
    createCredentialsProvider({
      emailVerification: true,
      passwordReset: true,
    }),
  );

  console.log("Registered Providers\n");

  for (const provider of providerManager.all()) {
    console.log(`✔ ${provider.name}`);
  }

  console.log("\n----------------------------------------");

  console.log(`Total Providers : ${providerManager.count()}`);

  console.log("\n========================================");
  console.log("    PROVIDERS TEST COMPLETED");
  console.log("========================================");
}

main();