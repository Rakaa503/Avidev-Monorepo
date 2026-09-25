import { hooks } from "./hook-manager";
import { HOOK_NAMES } from "./constants";
import type {
  HookHandler,
  HookPayload,
} from "./types";

export function onAfterSignOut(
  handler: HookHandler,
): void {
  hooks.on(
    HOOK_NAMES.AFTER_SIGNOUT,
    handler,
  );
}

export function onceAfterSignOut(
  handler: HookHandler,
): void {
  hooks.once(
    HOOK_NAMES.AFTER_SIGNOUT,
    handler,
  );
}

export async function emitAfterSignOut(
  payload: HookPayload,
): Promise<void> {
  await hooks.emit(
    HOOK_NAMES.AFTER_SIGNOUT,
    payload,
  );
}