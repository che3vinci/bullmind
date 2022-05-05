import { IsEqual, isEqual } from '@c3/utils';
import Point from '../point';

describe('test cases', () => {
  it('should work ', () => {
    type x = typeof Point;
    type k = x['page2client'];
    type y = Point;
    type k1 = Point['clone'];

    type x1 = IsEqual<x, y>;
    type instanceType = InstanceType<typeof Point>;
    type x2 = IsEqual<instanceType, Point>; // true
    expect(0).toBe(0);
  });
  it('xx', () => {
    const p = new Point(1, 2);
  });
  it('valueable', () => {
    class Living {
      constructor(public age = 100) {}
    }
    class Animal extends Living {
      private _point = new Point(3, 4);
      constructor(public name = 'cat') {
        super();
      }
    }
    const p = new Animal();

    console.log(JSON.stringify(p));
  });
});
