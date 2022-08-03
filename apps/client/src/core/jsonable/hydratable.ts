export type Hydratable<T = IObject> = {
  hydrate(data: T): void;
};
