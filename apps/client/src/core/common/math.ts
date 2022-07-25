import { rad2degree } from '@c3/utils';
import random from 'lodash.random';
import XBError from '../error/error';
import Point from '../point/point';

// export function rad2degree(rad: number) {
//   return rad * (180 / Math.PI);
// }
// export function degree2rad(degree: number) {
//   return degree * (Math.PI / 180);
// }

/**
 * 判断a是否约等于b.
 * @param round:误差值
 * @param a:待比较的值
 * @param b:待比较的值
 */
export function roundEqual(a: number, b: number, round = 2) {
  return Math.abs(a - b) <= round;
}

/**
 * 获得直线的斜率和度数
 * @param start
 * @param end
 * @return:
 * angle: 单位为degree
 */
export function slopeOfLine(
  start: Point,
  end: Point
): { angle: number; slope: number } {
  if (end.x === start.x) {
    return { angle: 90, slope: Number.POSITIVE_INFINITY };
  }
  const slope: number =
    Math.abs(end.y - start.y) / Math.abs(end.x - start.x);

  const angle: number = rad2degree(Math.atan(slope));
  return { angle, slope };
}

export function degree(start: Point, end: Point) {
  return rad2degree(
    Math.atan(Math.abs(end.y - start.y) / Math.abs(end.x - start.x))
  );
}

export function angleRelativeVerticleLine(
  startPoint: Point,
  endPoint: Point
): number {
  const tanAngle: number = slopeOfLine(startPoint, endPoint).angle;

  if (startPoint.x <= endPoint.x && startPoint.y <= endPoint.y) {
    // 起始点在左上角
    return 90 + tanAngle;
  }
  if (startPoint.x >= endPoint.x && startPoint.y <= endPoint.y) {
    // 起始点在右上角
    return 180 + (90 - tanAngle);
  }
  if (startPoint.x >= endPoint.x && startPoint.y >= endPoint.y) {
    // 起始点在右下角
    return 270 + tanAngle;
  }
  if (startPoint.x <= endPoint.x && startPoint.y >= endPoint.y) {
    // 起始点在左下角
    return 360 + (90 - tanAngle);
  }

  return 0;
  // throw new XBError('[angleRelative verticle Line]:impossible');
}

export function inRange(num: number, min: number, max: number): boolean {
  return num >= min && num <= max;
}

// /**四舍五入**/
export function round(num: number): number {
  return Math.round(num);
}

export function abs(num: number): number {
  return Math.abs(num);
}

export function absDist(x: number, y: number) {
  return Math.abs(x - y);
}

// 不是很精确，有一定误差.得到一个最近的偶数
export function roundEven(x: number): number {
  const round = Math.round(x);
  return round % 2 === 0 ? round : round + 1;
}
