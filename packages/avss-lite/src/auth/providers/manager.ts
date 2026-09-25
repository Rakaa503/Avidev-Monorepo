export interface AuthProvider {
  id: string;
  name: string;
}

export class ProviderManager {
  private readonly providers = new Map<string, AuthProvider>();

  register<T extends AuthProvider>(provider: T): T {
    this.providers.set(provider.id, provider);
    return provider;
  }

  get(id: string): AuthProvider | undefined {
    return this.providers.get(id);
  }

  has(id: string): boolean {
    return this.providers.has(id);
  }

  all(): AuthProvider[] {
    return [...this.providers.values()];
  }

  count(): number {
    return this.providers.size;
  }

  clear(): void {
    this.providers.clear();
  }
}

export const providerManager = new ProviderManager();