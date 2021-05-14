import { sum } from '../src';
import { pc } from '../src/everyday-types';
import { padLeft } from '../src/narrowing';
import {
  anotherGreeter,
  printToConsole,
  firstElement,
  myMap,
} from '../src/more-functions';
import { greet, paintShape, getShape } from '../src/objects';
import { myIdentity } from '../src/types-from-types';

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

describe('object types', () => {
  it('greet', () => {
    expect(greet({ name: 'Alina', age: 23 })).toBe('Hello Alina');
  });

  it('paintShape', () => {
    console.log = jest.fn();
    const shape = getShape();
    paintShape({ shape, xPos: 100 });
    expect(console.log).toHaveBeenCalledWith({ shape: { name: 'circle' }, xPos: 100 });
  });
});

describe('types from types', () => {
  it('generics', () => {
    expect(myIdentity("hello, generics")).toBe('hello, generics');
  });
});
