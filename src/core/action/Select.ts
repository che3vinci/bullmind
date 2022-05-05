export interface ISelectable {
  select(event: MouseEvent, data?: any): void;
  get isSelected(): boolean;
}

export function Select<TBase extends Ctor>(Base: TBase) {
  return class extends Base implements ISelectable {
    private _isSelected = false;
    select(): void {
      this._isSelected = true;
    }
    get isSelected() {
      return this._isSelected;
    }
  };
}

export function isSelectable<T>(element: unknown): element is T {
  if (typeof element === 'object' && element !== null) {
    return (
      Reflect.has(element, 'select') && Reflect.has(element, 'isSelected')
    );
  }
  return false;
}
