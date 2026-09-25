import { hooks } from "./hook-manager";
import { HOOK_NAMES } from "./constants";
import type {
  HookHandler,
  HookPayload,
} from "./types";

export function onAfterSignUp(
  handler: HookHandler,
): void {
  hooks.on(
    HOOK_NAMES.AFTER_SIGNUP,
    handler,
  );
}

export function onceAfterSignUp(
  handler: HookHandler,
): void {
  hooks.once(
    HOOK_NAMES.AFTER_SIGNUP,
    handler,
  );
}

export async function emitAfterSignUp(
  payload: HookPayload,
): Promise<void> {
  await hooks.emit(
    HOOK_NAMES.AFTER_SIGNUP,
    payload,
  );
}