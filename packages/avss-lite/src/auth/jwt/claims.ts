export interface RegisteredClaims {
  sub?: string;
  iss?: string;
  aud?: string;
  exp?: number;
  nbf?: number;
  iat?: number;
  jti?: string;
}

export interface CustomClaims {
  userId: string;
  email: string;
  role?: string;
  permissions?: string[];
}

export type JwtClaims =
  RegisteredClaims &
  CustomClaims;