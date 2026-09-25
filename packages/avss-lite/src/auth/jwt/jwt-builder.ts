import { randomUUID } from "node:crypto";

import type { JwtPayload } from "./types";

import { DEFAULT_JWT_EXPIRES } from "./constants";

export class JwtBuilder {

  build(
    payload: JwtPayload,
    expiresIn: number = DEFAULT_JWT_EXPIRES,
  ): string {

    const now = Date.now();

    return Buffer.from(
      JSON.stringify({
        ...payload,
        iat: now,
        exp: now + expiresIn,
        jti: randomUUID(),
      }),
    ).toString("base64url");

  }

}