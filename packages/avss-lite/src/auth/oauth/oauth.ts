import { generateState } from "./state";
import { generateNonce } from "./nonce";
import { generatePkce } from "./pkce";

export class OAuthFramework {
  readonly state = generateState;
  readonly nonce = generateNonce;
  readonly pkce = generatePkce;
}

export function createOAuth(): OAuthFramework {
  return new OAuthFramework();
}