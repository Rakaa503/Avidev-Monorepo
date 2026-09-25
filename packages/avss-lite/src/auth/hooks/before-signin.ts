import { hooks } from "./hook-manager";
import { HOOK_NAMES } from "./constants";
import type {
  HookHandler,
  HookPayload,
} from "./types";

export function onBeforeSignIn(
  handler: HookHandler,
): void {
  hooks.on(
    HOOK_NAMES.BEFORE_SIGNIN,
    handler,
  );
}

export function onceBeforeSignIn(
  handler: HookHandler,
): void {
  hooks.once(
    HOOK_NAMES.BEFORE_SIGNIN,
    handler,
  );
}

export async function emitBeforeSignIn(
  payload: HookPayload,
): Promise<void> {
  await hooks.emit(
    HOOK_NAMES.BEFORE_SIGNIN,
    payload,
  );
}