import Transform from '../transform';

describe('test cases', () => {
  it('translate ', () => {
    const transform = new Transform();
    expect(transform.matrix).toEqual({
      a: 1,
      b: 0,
      c: 0,
      d: 1,
      e: 0,
      f: 0,
    });
    const res = transform.translate(2, 2);
    expect(res.matrix).toEqual({
      a: 1,
      b: 0,
      c: 0,
      d: 1,
      e: 2,
      f: 2,
    });

    console.log(res.toReadableString())

    // console.log(SVG.)
  });
  it('rotate',()=>{
    const transform = new Transform();
    console.log(transform.toReadableString())
    const res = transform.rotate(90, 90);
    console.log(res.toReadableString())

  })
});
