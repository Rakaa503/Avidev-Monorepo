export interface GitlabProviderConfig {
  clientId: string;
  clientSecret: string;
}

export interface GitlabProvider {
  id: "gitlab";
  name: "GitLab";
  config: GitlabProviderConfig;
}

export function createGitlabProvider(
  config: GitlabProviderConfig,
): GitlabProvider {
  return {
    id: "gitlab",
    name: "GitLab",
    config,
  };
}