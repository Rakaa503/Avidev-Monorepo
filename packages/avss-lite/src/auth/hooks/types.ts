export type HookName =
  | "before-signin"
  | "after-signin"
  | "before-signup"
  | "after-signup"
  | "before-signout"
  | "after-signout";

export interface HookPayload {
  userId?: string;
  email?: string;
  sessionId?: string;
  provider?: string;
  metadata?: Record<string, unknown>;
}

export type HookHandler = (
  payload: HookPayload,
) => void | Promise<void>;

export interface HookEvent {
  name: HookName;
  handler: HookHandler;
}

export interface HookResult {
  success: boolean;
  message: string;
}