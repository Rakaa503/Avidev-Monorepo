export interface AuthSession {
  userId: string;
  email: string;
  role?: string;
  permissions?: string[];
  authenticated: boolean;
}

export interface AuthRequest {
  session?: AuthSession;
}

export interface GuardResult {
  success: boolean;
  message: string;
}

export interface AuthGuardOptions {
  requireAuth?: boolean;
}

export interface RoleGuardOptions {
  roles: readonly string[];
}

export interface PermissionGuardOptions {
  permissions: readonly string[];
}