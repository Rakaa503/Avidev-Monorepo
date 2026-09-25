export const HOOKS_VERSION = "1.0.0";

export const HOOK_NAMES = {
  BEFORE_SIGNIN: "before-signin",
  AFTER_SIGNIN: "after-signin",

  BEFORE_SIGNUP: "before-signup",
  AFTER_SIGNUP: "after-signup",

  BEFORE_SIGNOUT: "before-signout",
  AFTER_SIGNOUT: "after-signout",
} as const;

export const HOOK_MESSAGES = {
  REGISTERED: "Hook registered.",
  EMITTED: "Hook executed.",
  REMOVED: "Hook removed.",
  CLEARED: "Hooks cleared.",
} as const;