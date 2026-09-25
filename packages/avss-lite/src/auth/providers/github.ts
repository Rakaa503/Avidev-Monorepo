export interface GithubProviderConfig {
  clientId: string;
  clientSecret: string;
}

export interface GithubProvider {
  id: "github";
  name: "GitHub";
  config: GithubProviderConfig;
}

export function createGithubProvider(
  config: GithubProviderConfig,
): GithubProvider {
  return {
    id: "github",
    name: "GitHub",
    config,
  };
}