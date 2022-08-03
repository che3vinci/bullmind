export default class Distance {
  // x轴方向的距离
  private _x: number;
  // y轴方向的距离
  private _y: number;

  constructor(x: number, y: number) {
    this._x = x;
    this._y = y;
  }

  /*直线距离*/
  public stDistance_(): number {
    return Math.sqrt(this._x * this._x + this._y * this._y);
  }

  /**
   * 再x和y方向找出最小的距离
   */
  public minDistance_(): number {
    // return Math.min(Math.abs(this._x), Math.abs(this._y));
    if (this._x >= 0 && this._y >= 0) {
      return Math.min(this._x, this._y);
    }
    if (this._x < 0 && this._y < 0) {
      // 相交
      // return Math.min(this._x,this._y);//@todo:这里可能不太好。
      // return this.stDistance_();
      return -Infinity;
    }
    // 取正数
    return this._x >= 0 ? this._x : this._y;
  }
  get absX() {
    return Math.abs(this._x);
  }
  get absY() {
    return Math.abs(this._y);
  }

  get x() {
    return this._x;
  }

  set x(value: number) {
    this._x = value;
  }

  get y() {
    return this._y;
  }

  set y(value: number) {
    this._y = value;
  }
}
