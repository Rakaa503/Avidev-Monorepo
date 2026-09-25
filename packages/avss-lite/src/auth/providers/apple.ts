export interface AppleProviderConfig {
  clientId: string;
  clientSecret: string;
}

export interface AppleProvider {
  id: "apple";
  name: "Apple";
  config: AppleProviderConfig;
}

export function createAppleProvider(
  config: AppleProviderConfig,
): AppleProvider {
  return {
    id: "apple",
    name: "Apple",
    config,
  };
}