export interface CredentialsProviderConfig {
  emailVerification?: boolean;
  passwordReset?: boolean;
}

export interface CredentialsProvider {
  id: "credentials";
  name: "Credentials";
  config: CredentialsProviderConfig;
}

export function createCredentialsProvider(
  config: CredentialsProviderConfig = {},
): CredentialsProvider {
  return {
    id: "credentials",
    name: "Credentials",
    config,
  };
}