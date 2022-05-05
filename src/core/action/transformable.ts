import Transform from '../transform/transform';

export interface ITransformable {
  translate(dx: number, dy: number): void;
  scale(dx: number, dy: number, originX?: number, originY?: number): void;
  rotate(deg: number, centerX: number, centerY: number): void;
  toTransformString(): string;
}

export default function transform<TBase extends Ctor>(Base: TBase) {
  return class extends Base implements ITransformable {
    private _transform: Transform = new Transform();
    public translate(dx: number, dy: number): void {
      this._transform.translate(dx, dy);
    }
    scale(
      dx: number,
      dy: number,
      originX?: number,
      originY?: number
    ): void {
      this._transform.scale(dx, dy, originX, originY);
    }
    rotate(deg: number, centerX: number, centerY: number): void {
      this._transform.rotate(deg, centerX, centerY);
    }
    public toTransformString() {
      if (__DEV__) {
        return this._transform.toReadableString();
      }
      return this._transform.toString();
    }
  };
}
