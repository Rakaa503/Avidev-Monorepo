export interface DiscordProviderConfig {
  clientId: string;
  clientSecret: string;
}

export interface DiscordProvider {
  id: "discord";
  name: "Discord";
  config: DiscordProviderConfig;
}

export function createDiscordProvider(
  config: DiscordProviderConfig,
): DiscordProvider {
  return {
    id: "discord",
    name: "Discord",
    config,
  };
}