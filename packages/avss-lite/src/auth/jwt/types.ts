export interface JwtPayload {
  userId: string;
  email: string;
  iat?: number;
  exp?: number;
  iss?: string;
  aud?: string;
}

export interface JwtOptions {
  secret: string;
  expiresIn?: number;
  issuer?: string;
  audience?: string;
}

export interface JwtToken {
  token: string;
  expiresAt: number;
}

export interface JwtStats {
  tokens: number;
}

export interface JwtResult<T = unknown> {
  success: boolean;
  data?: T;
  message?: string;
}

export interface JwtEntry {
  token: string;
  payload: JwtPayload;
  expiresAt: number;
}