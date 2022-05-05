export const StrokeType_ = {
  SOLID: 'SOLID',
  DASHED: 'DASHED',
  NONE: 'NONE',
} as const;

type StrokeType = keyof typeof StrokeType_;

export default interface IStrokable {
  getStrokeColor(): string;
  setStrokeColor(color: string): void;

  getStrokeWidth(): number;
  setStrokeWidth(width: number): void;

  getStrokeType(): StrokeType;
  setStrokeType(value: StrokeType): void;

  getStrokeRadius(): number;
  setStrokeRadius(value: number): void;
}

export function Stroke<TBase extends Ctor>(Base: TBase) {
  return class extends Base implements IStrokable {
    private _strokeColor = '';
    private _strokeWidth = 1;
    private _strokeRadius = 0;
    private _strokeType: StrokeType = StrokeType_.NONE;
    getStrokeColor(): string {
      return this._strokeColor;
    }
    setStrokeColor(color: string): void {
      this._strokeColor = color;
    }

    getStrokeWidth(): number {
      return this._strokeWidth;
    }
    setStrokeWidth(width: number): void {
      this._strokeWidth = width;
    }

    getStrokeType(): StrokeType {
      return this._strokeType;
    }
    setStrokeType(value: StrokeType): void {
      this._strokeType = value;
    }

    getStrokeRadius(): number {
      return this._strokeRadius;
    }
    setStrokeRadius(value: number): void {
      this._strokeRadius = value;
    }
  };
}
