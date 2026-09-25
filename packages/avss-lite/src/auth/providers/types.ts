export interface OAuthProviderConfig {
  clientId: string;
  clientSecret: string;
}

export interface BaseProvider {
  id: string;
  name: string;
}