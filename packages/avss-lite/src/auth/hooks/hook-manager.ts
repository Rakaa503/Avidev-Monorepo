import type {
  HookHandler,
  HookName,
  HookPayload,
} from "./types";

export class HookManager {
  private readonly hooks = new Map<
    HookName,
    Set<HookHandler>
  >();

  on(
    name: HookName,
    handler: HookHandler,
  ): void {
    const handlers =
      this.hooks.get(name) ??
      new Set<HookHandler>();

    handlers.add(handler);

    this.hooks.set(name, handlers);
  }

  once(
    name: HookName,
    handler: HookHandler,
  ): void {
    const onceHandler: HookHandler = async (
      payload,
    ) => {
      await handler(payload);

      this.off(name, onceHandler);
    };

    this.on(name, onceHandler);
  }

  off(
    name: HookName,
    handler: HookHandler,
  ): void {
    const handlers = this.hooks.get(name);

    if (!handlers) {
      return;
    }

    handlers.delete(handler);

    if (handlers.size === 0) {
      this.hooks.delete(name);
    }
  }

  async emit(
    name: HookName,
    payload: HookPayload,
  ): Promise<void> {
    const handlers = this.hooks.get(name);

    if (!handlers) {
      return;
    }

    for (const handler of handlers) {
      await handler(payload);
    }
  }

  clear(
    name?: HookName,
  ): void {
    if (name) {
      this.hooks.delete(name);
      return;
    }

    this.hooks.clear();
  }

  count(
    name?: HookName,
  ): number {
    if (name) {
      return this.hooks.get(name)?.size ?? 0;
    }

    let total = 0;

    for (const handlers of this.hooks.values()) {
      total += handlers.size;
    }

    return total;
  }

  has(
    name: HookName,
  ): boolean {
    return (
      (this.hooks.get(name)?.size ?? 0) > 0
    );
  }

  events(): HookName[] {
    return [...this.hooks.keys()];
  }
}

export const hooks = new HookManager();