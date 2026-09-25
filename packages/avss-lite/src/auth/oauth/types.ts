export interface OAuthProviderConfig {
  clientId: string;
  clientSecret: string;
  redirectUri: string;
}

export interface OAuthState {
  value: string;
  createdAt: Date;
}

export interface OAuthNonce {
  value: string;
  createdAt: Date;
}

export interface OAuthPkce {
  verifier: string;
  challenge: string;
  method: "S256";
}

export interface OAuthRedirectOptions {
  provider: string;
  redirectUri: string;
  state: string;
  scope?: string[];
}

export interface OAuthCallbackResult {
  success: boolean;
  provider: string;
  code?: string;
  state?: string;
  error?: string;
}