import type {
  JwtPayload,
} from "./types";

export class JwtParser {

  parse(
    token: string,
  ): JwtPayload | undefined {

    try {

      const payload =
        JSON.parse(
          Buffer
            .from(
              token,
              "base64url",
            )
            .toString(),
        );

      return payload;

    } catch {

      return undefined;

    }

  }

  decode(
    token: string,
  ): JwtPayload | undefined {

    return this.parse(token);

  }

}