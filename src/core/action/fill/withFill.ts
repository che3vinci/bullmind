import { IFillable } from './fillable';

export function withFill<TBase extends Ctor>(Base: TBase) {
  return class extends Base implements IFillable {
    private _fillColor = '#000000';
    getFillColor() {
      return this._fillColor;
    }
    setFillColor(color: string) {
      return (this._fillColor = color);
    }
    fromValue(value: this): void {
      this._fillColor = value._fillColor;
    }
  };
}
