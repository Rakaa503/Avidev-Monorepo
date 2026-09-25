import { JwtBuilder } from "./jwt-builder";
import { JwtParser } from "./jwt-parser";
import { JwtVerifier } from "./jwt-verifier";

import type {
  JwtPayload,
  JwtStats,
} from "./types";

export class JwtManager {

  private readonly builder =
    new JwtBuilder();

  private readonly parser =
    new JwtParser();

  private readonly verifier =
    new JwtVerifier();

  private tokens =
    new Set<string>();

  sign(
    payload: JwtPayload,
  ): string {

    const token =
      this.builder.build(
        payload,
      );

    this.tokens.add(token);

    return token;

  }

  verify(
    token: string,
  ): boolean {

    if (
      !this.tokens.has(token)
    ) {
      return false;
    }

    const payload =
      this.decode(token);

    return this.verifier.verify(
      payload,
    );

  }

  decode(
    token: string,
  ): JwtPayload | undefined {

    return this.parser.parse(
      token,
    );

  }

  revoke(
    token: string,
  ): boolean {

    return this.tokens.delete(
      token,
    );

  }

  clear(): void {

    this.tokens.clear();

  }

  count(): number {

    return this.tokens.size;

  }

  stats(): JwtStats {

    return {
      tokens: this.count(),
    };

  }

}

export function createJWT(): JwtManager {

  return new JwtManager();

}