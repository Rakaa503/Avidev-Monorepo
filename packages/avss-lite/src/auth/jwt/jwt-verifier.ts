import type { JwtPayload } from "./types";

export class JwtVerifier {

  verify(
    payload: JwtPayload | undefined,
  ): boolean {

    if (!payload) {
      return false;
    }

    if (
      payload.exp &&
      Date.now() > payload.exp
    ) {
      return false;
    }

    return true;

  }

}