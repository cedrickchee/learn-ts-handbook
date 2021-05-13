import { sum } from '../src';
import { pc } from '../src/everyday-types';
import { padLeft } from '../src/narrowing';
import {
  anotherGreeter,
  printToConsole,
  firstElement,
  myMap,
} from '../src/more-functions';

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

describe('more on function', () => {
  it('firstElement', () => {
    const s = firstElement(['a', 'b', 'c']);
    expect(typeof s).toBe('string');

    const n = firstElement([1, 2, 3]);
    expect(typeof n).toBe('number');
  });

  it('myMap', () => {
    // Parameter 'n' is of type 'string'
    // 'parsed' is of type 'number[]'
    const parsed = myMap(['1', '2', '3'], n => parseInt(n));
    expect(typeof parsed[0]).toBe('number');
  });
});
