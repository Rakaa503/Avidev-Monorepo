import type { OAuthRedirectOptions } from "./types";

export function createRedirectUrl(
  options: OAuthRedirectOptions,
): string {
  const url = new URL(options.redirectUri);

  url.searchParams.set("provider", options.provider);
  url.searchParams.set("state", options.state);

  if (options.scope?.length) {
    url.searchParams.set(
      "scope",
      options.scope.join(" "),
    );
  }

  return url.toString();
}