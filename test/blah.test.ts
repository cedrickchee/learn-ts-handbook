import { sum } from '../src';
import { pc } from '../src/everyday-types';
import { padLeft } from '../src/narrowing';
import { anotherGreeter, printToConsole } from '../src/more-functions';

describe('blah', () => {
  it('works', () => {
    expect(sum(1, 1)).toEqual(2);
  });
});

describe('everyday types', () => {
  it('union types', () => {
    expect(pc({ x: 5, y: 10 })).toBe(undefined);
  });
});

describe('narrowing', () => {
  it('padLeft', () => {
    expect(padLeft(3, 'foobar')).toBe('   foobar');
    expect(padLeft(' ', 'foo')).toBe(' foo');
  });
});

describe('more on function', () => {
  it('greeter console.log the text "Hello, world"', () => {
    console.log = jest.fn();
    anotherGreeter(printToConsole);
    expect(console.log).toHaveBeenCalledWith('Hello, world');
  });
});
