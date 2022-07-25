import { List } from '../List';

describe('test cases', () => {
  it('construct List ', () => {
    const l = new List(1, 2, 3);
    expect(l.length).toBe(3);
    expect(l instanceof List).toBe(true);
  });
  it('map', () => {
    const l = new List(1, 2, 3);
    const l1 = l.map(e => e + 1);
    expect(l1.length).toBe(3);
    // expect(l1.last()).toBe(3);
  });
});
