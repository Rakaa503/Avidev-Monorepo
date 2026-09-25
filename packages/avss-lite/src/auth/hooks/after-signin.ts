import { hooks } from "./hook-manager";
import { HOOK_NAMES } from "./constants";
import type {
  HookHandler,
  HookPayload,
} from "./types";

export function onAfterSignIn(
  handler: HookHandler,
): void {
  hooks.on(
    HOOK_NAMES.AFTER_SIGNIN,
    handler,
  );
}

export function onceAfterSignIn(
  handler: HookHandler,
): void {
  hooks.once(
    HOOK_NAMES.AFTER_SIGNIN,
    handler,
  );
}

export async function emitAfterSignIn(
  payload: HookPayload,
): Promise<void> {
  await hooks.emit(
    HOOK_NAMES.AFTER_SIGNIN,
    payload,
  );
}