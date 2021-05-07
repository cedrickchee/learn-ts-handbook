import { sum } from '../src';
import { pc } from '../src/everyday-types';
import { padLeft } from '../src/narrowing';

describe('blah', () => {
  it('works', () => {
    expect(sum(1, 1)).toEqual(2);
  });
});

describe('everyday types', () => {
  it('union types', () => {
    expect(pc({x: 5, y: 10})).toBe(undefined);
  })
})

describe('narrowing', () => {
  it('padLeft', () => {
    expect(padLeft(3, "foobar")).toBe("   foobar");
    expect(padLeft(" ", "foo")).toBe(" foo");
  });
})
