export interface MicrosoftProviderConfig {
  clientId: string;
  clientSecret: string;
}

export interface MicrosoftProvider {
  id: "microsoft";
  name: "Microsoft";
  config: MicrosoftProviderConfig;
}

export function createMicrosoftProvider(
  config: MicrosoftProviderConfig,
): MicrosoftProvider {
  return {
    id: "microsoft",
    name: "Microsoft",
    config,
  };
}