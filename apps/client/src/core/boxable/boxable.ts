import { round } from '../common/math';
import Point from '../point/point';
import Box from './box';
import { immerable } from 'immer';
export interface Boxable {
  set bbox(box: Box);
  get bbox(): Box;
  get cbox(): Box;
  get mbox(): Box;
}

export default function boxMixin<TBase extends Ctor>(Base: TBase) {
  return class extends Base implements Boxable {
    // [immerable] = true; // Option 3

    private _bbox: Box = new Box(10, 20, 30, 40);
    // constructor(left: number, top: number, width: number, height: number) {
    //   super();
    //   // super(generateBBoxJoint);

    //   this._bbox.left = round(left);
    //   this._bbox.top = round(top);
    //   this._bbox.width = round(width);
    //   this._bbox.height = round(height);

    //   // this._moveFun = moveByTranslate;
    //   // this._resizeFun = resizeBox;
    //   // this._outlineBoxWhenSelectedFun = emptyOutlineBoxFun;
    // }

    // public isPointRoundInStroke(point: Point) {
    //   return this.mbox.isPointRoundInStroke_(point);
    // }

    // public isPointInFill(point: Point): boolean {
    //   return this.mbox.isPointInFill_(point);
    // }

    // public getMPathString(): string {
    //   return Shape2Path.rect2path(this.mbox);
    // }

    // public setStrokeRadius(value: number) {
    //   super.setStrokeRadius(Math.min(value, this.height / 2));
    // }

    /**
     * 除了foreignObject外的BoxModel都不需要读取dom来刷新bbox。
     * 所以屏蔽掉此函数
     * @override
     */
    // public refreshBBox() {}

    public assignLeftTop(point: Point): void {
      this._bbox.assignLeftTop(point);
    }
    public get cbox(): Box {
      return this._bbox;
    }
    public get mbox(): Box {
      return this._bbox;
    }

    // // @override
    // get curBox_N(): Box {
    //   return this.getRelativeBox_N(this.parent);
    // }

    // // @override
    // set curBox_N(box: Box) {
    //   if (!this.isOnlyTranslate()) {
    //     throw new Error('[curBox_N]:error');
    //   }

    //   const curBox = this.curBox_N;
    //   this.transform.translate(
    //     box.left - curBox.left,
    //     box.top - curBox.top
    //   );

    //   // @attention： 这里容易导致死循环
    //   this._bbox.width = box.width;
    //   this._bbox.height = box.height;
    // }

    get bbox(): Box {
      return this._bbox;
    }

    set bbox(box: Box) {
      // @attention： 这里容易导致死循环
      this._bbox.assign(box);
    }

    // public getBasePathString(): string {
    //   return Shape2Path.rect2path(this._bbox);
    // }

    // get isRadiusable() {
    //   return true;
    // }

    /**
     *  getter/setter
     */
    get left(): number {
      return this._bbox.left;
    }

    set left(value: number) {
      this._bbox.left = round(value);
    }

    get x(): number {
      return this._bbox.left;
    }

    set x(value: number) {
      this._bbox.left = round(value);
    }

    get top(): number {
      return this._bbox.top;
    }

    set top(value: number) {
      this._bbox.top = round(value);
    }

    get y(): number {
      return this._bbox.top;
    }

    set y(value: number) {
      this._bbox.top = round(value);
    }
    move(dx: number, dy: number): void {
      this._bbox.left += dx;
      this._bbox.top += dy;
    }
    get width(): number {
      return this._bbox.width;
    }

    set width(value: number) {
      this._bbox.width = round(value);
    }

    get height(): number {
      return this._bbox.height;
    }

    set height(value: number) {
      this._bbox.height = round(value);
    }

    get bottom(): number {
      return this.top + this.height;
    }

    get right(): number {
      return this.left + this.width;
    }

    get leftTop_N(): Point {
      return this._bbox.leftTop_N;
    }

    get box() {
      return this._bbox;
    }

    set box(value: Box) {
      // const roundBox = value.round_N();
      this.left = value.left;
      this.top = value.top;
      this.width = value.width;
      this.height = value.height;
    }

    // get showCornerResizer() {
    //   return this._resizeFun !== resizeNothing;
    // }
  };
}
