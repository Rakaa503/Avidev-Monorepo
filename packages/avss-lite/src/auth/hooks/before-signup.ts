import { hooks } from "./hook-manager";
import { HOOK_NAMES } from "./constants";
import type {
  HookHandler,
  HookPayload,
} from "./types";

export function onBeforeSignUp(
  handler: HookHandler,
): void {
  hooks.on(
    HOOK_NAMES.BEFORE_SIGNUP,
    handler,
  );
}

export function onceBeforeSignUp(
  handler: HookHandler,
): void {
  hooks.once(
    HOOK_NAMES.BEFORE_SIGNUP,
    handler,
  );
}

export async function emitBeforeSignUp(
  payload: HookPayload,
): Promise<void> {
  await hooks.emit(
    HOOK_NAMES.BEFORE_SIGNUP,
    payload,
  );
}