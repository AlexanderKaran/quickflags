class QuickFlagsStore {
  store: Map<string, any>;

  constructor() {
    this.store = new Map();
  }

  getFlag(id: string) {
    return this.store.get(id);
  }

  setFlag(id: string, value: unknown) {
    return this.store.set(id, value);
  }
}

export function createQuickFlagStore() {
  return new QuickFlagsStore();
}
