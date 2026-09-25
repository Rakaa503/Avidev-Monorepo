export interface GoogleProviderConfig {
  clientId: string;
  clientSecret: string;
}

export interface GoogleProvider {
  id: "google";
  name: "Google";
  config: GoogleProviderConfig;
}

export function createGoogleProvider(
  config: GoogleProviderConfig,
): GoogleProvider {
  return {
    id: "google",
    name: "Google",
    config,
  };
}