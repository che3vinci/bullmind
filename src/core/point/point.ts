// import { Direction, FourDirection } from "../../common/const";
// import { getSvgElement } from "../../common/svgroot";
// import XBError from "../../common/error/error";
// import IValuable from "../jsonable/valuable";
// import Distance from "../distance";
// import Transform from "../transform/transform";
// import { roundEqual } from '../../common/math';

import { closeEnough } from '@c3/utils';
import { Direction, FourDirection } from '../common/constants/consts';
import Distance from '../distance';
import XBError from '../error/error';
import { IValuable } from '../jsonable/valuable';
import Transform from '../transform/transform';

export default class Point implements IValuable {
  static readonly cname = 'Class_Point';
  constructor(private _x = 0, private _y = 0) {
    this._x = _x;
    this._y = _y;
  }

  static page2client(point: Point) {
    const p = point.clone();
    p.x -= window.scrollX;
    p.y -= window.scrollY;
    return p;
  }
  page2client_N() {
    const p = this.clone();
    p.x -= window.scrollX;
    p.y -= window.scrollY;
    return p;
  }

  /**
   * point距离当前点的直线距离
   * @param point
   * @return :非负数
   */
  stDistance_(point: Point): number {
    return Math.sqrt(
      Math.pow(this._x - point.x, 2) + Math.pow(this._y - point.y, 2)
    );
  }

  distance_(endPoint: Point): Distance {
    return new Distance(endPoint.x - this.x, endPoint.y - this.y);
  }

  diff(point: Point): Distance {
    return this.distance_(point);
  }

  /**
   * 只要在半径为2的圈圈内,就算touch.
   */
  touchMe_(point: Point, radius = 2): boolean {
    return this.stDistance_(point) <= radius;
  }

  /**
   * 位移dx/dy
   */
  move(dx: number, dy: number): Point {
    this.x += dx;
    this.y += dy;
    return this;
  }

  /**
   * 移动当前Point到指定的位置
   */
  public moveTo(x: number, y: number): Point {
    this.x = x;
    this.y = y;
    return this;
  }

  isRoundEqual(point: Point, round: number): boolean {
    return (
      closeEnough(point.x, this.x, round) &&
      closeEnough(point.y, this.y, round)
    );
  }
  valueOf() {
    return {
      x: this._x,
      y: this._y,
    };
  }
  toString() {
    return `x:${this.x},y:${this.y}`;
  }
  [Symbol.toPrimitive](hint: string) {
    if (hint === 'string' || hint === 'default') {
      return `${this.x},${this.y}`;
    }
    throw new XBError('not support for this type convert');
  }

  transform_N(transform: Transform): Point {
    const matrix = transform.matrix;
    const x = matrix.a * this.x + matrix.c * this.y + matrix.e;
    const y = matrix.b * this.x + matrix.d * this.y + matrix.f;
    return new Point(x, y);
  }

  /**
   * 1. 修改原始的点
   * 2. 返回修改之后的点
   */
  public transformMe(transform: Transform): Point {
    return this.assign(this.transform_N(transform));
  }

  public fromValue(data: any): Point {
    this._x = data.x;
    this._y = data.y;
    return this;
  }

  clone(): Point {
    return new Point(this.x, this.y);
  }

  assign(point: Point): Point {
    this._x = point.x;
    this._y = point.y;
    return this;
  }

  setPoint(point: Point): void {
    this._x = point.x;
    this._y = point.y;
  }

  isValueEqual(point: Point): boolean {
    return this.x === point.x && this.y === point.y;
  }

  /**
   * 在X和Y轴上的值都不相等
   */
  isDiffenceAtXY(point: Point): boolean {
    return this._x !== point.x && this._y != point.y;
  }

  /**
   * 只返回上下左右四个方向。取45度角交叉线作为参考
   */
  roughDirection_(point: Point): FourDirection {
    if (
      point.y < this.y &&
      Math.abs(point.y - this.y) >= Math.abs(point.x - this.x)
    ) {
      return FourDirection.Up;
    }
    if (
      point.x > this.x &&
      Math.abs(point.x - this.x) >= Math.abs(point.y - this.y)
    ) {
      return FourDirection.Right;
    }
    if (
      point.y > this.y &&
      Math.abs(point.y - this.y) >= Math.abs(point.x - this.x)
    ) {
      return FourDirection.Down;
    }
    if (
      point.x < this.x &&
      Math.abs(point.x - this.x) >= Math.abs(point.y - this.y)
    ) {
      return FourDirection.Left;
    }
    throw new XBError('impossiblel');
  }

  // point点相对于当前点的位置
  public direction_(point: Point): Direction {
    if (point.x === this.x && point.y < this.y) {
      return Direction.Up;
    }
    if (point.x > this.x && point.y < this.y) {
      return Direction.RightUp;
    }
    if (point.y === this.y && point.x > this.x) {
      return Direction.Right;
    }
    if (point.x > this.x && point.y > this.y) {
      return Direction.RightDown;
    }
    if (point.x === this.x && point.y > this.y) {
      return Direction.Down;
    }
    if (point.x < this.x && point.y > this.y) {
      return Direction.LeftDown;
    }
    if (point.x < this.x && point.y === this.y) {
      return Direction.Left;
    }
    if (point.x < this.x && point.y < this.y) {
      return Direction.LeftUp;
    }
    return Direction.Same;
  }

  public empty(): boolean {
    return this._x === 0 && this._y === 0;
  }

  /**
   * getter/setter
   */
  get x() {
    return this._x;
  }

  set x(x: number) {
    this._x = x;
  }

  get y() {
    return this._y;
  }

  set y(y: number) {
    this._y = y;
  }

  get cname() {
    return Point.cname;
  }
}

export const SVGPoint2Point = (svgPoint: SVGPoint) => {
  return new Point(svgPoint.x, svgPoint.y);
};

export const createFromSVGPoint = (point: SVGPoint) => {
  return new Point(point.x, point.y);
};
