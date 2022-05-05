import * as Svg from '@svgdotjs/svg.js';
import { degree2rad } from '@c3/utils';
import { Matrix, defaultMatrix } from './matrix';
import { immerable } from 'immer';
import { Hydratable } from '../jsonable';

/**
 * 关于矩阵运算：
 * 如果 A*B = C,那么A= C*B^-1 (其中B^-1是B的逆矩阵,也就是B * B^-1 = E.(其中E为单元矩阵))
 *
 * 容器一定不能选中或者放大。目前没有处理这种情况
 */

export default class Transform implements Hydratable {
  [immerable] = true;

  constructor(private _matrix = defaultMatrix) {
    this._matrix = _matrix;
  }

  translate(dx: number, dy: number): Transform {
    this._matrix.e += dx;
    this._matrix.f += dy;
    return this;
  }

  scale(dx: number, dy: number, cx = 0, cy = 0) {
    const { a, b, c, d, e, f } = this._matrix;
    console.log('dx', dx);
    console.log('dy', dy);
    this._matrix.a = a * dx;
    this._matrix.b = b * dy;
    this._matrix.c = c * dx;
    this._matrix.d = d * dy;
    this._matrix.e = e * dx - cx * dx + cx;
    this._matrix.f = f * dy - cy * dy + cy;
    console.log(this.toString());
    return this;
  }

  rotate(deg: number, cx = 0, cy = 0): Transform {
    const r = degree2rad(deg);
    const cos = Math.cos(r);
    const sin = Math.sin(r);

    const { a, b, c, d, e, f } = this.matrix;
    this.matrix.a = a * cos - b * sin;
    this.matrix.b = b * cos + a * sin;
    this.matrix.c = c * cos - d * sin;
    this.matrix.d = d * cos + c * sin;
    this.matrix.e = e * cos - f * sin + cy * sin - cx * cos + cx;
    this.matrix.f = f * cos + e * sin - cx * sin - cy * cos + cy;

    return this;
  }

  toString(): string {
    // eslint-disable-next-line max-len
    return `matrix(${this._matrix.a},${this._matrix.b},${this._matrix.c},${this._matrix.d},${this._matrix.e},${this._matrix.f})`;
  }
  toReadableString(): string {
    const split = new Svg.Matrix(this._matrix).decompose();
    // eslint-disable-next-line max-len
    return `transform:translate(${split.translateX},${split.translateY}) scale(${split.scaleX},${split.scaleY}) rotate(${split.rotate}),
      transformOrigin:${split.originX},${split.originY}
    `;
  }

  clear(): Transform {
    this._matrix = defaultMatrix;
    return this;
  }

  hydrate(data: IObject) {
    this._matrix.a = data.a;
    this._matrix.b = data.b;
    this._matrix.c = data.c;
    this._matrix.d = data.d;
    this._matrix.e = data.e;
    this._matrix.f = data.f;
  }

  get matrix() {
    return this._matrix;
  }
}
