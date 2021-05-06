import { sum } from '../src';
import { pc } from '../src/everyday-types';

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