/**
 * Other Types
 */

// void
function noop() {
  return;
}
// `void` is not the same as `undefined`.

// object
// The special type `object` refers to any value that isn’t a primitive
// `object` is not `Object`. **Always** use `object`!
//
// Note that in JavaScript, function values are objects.

// unknown
// The `unknown` type represents any value.
// This is similar to the `any` type, but is safer because it’s not legal to do
// anything with an `unknown` value:
function f1(a: any) {
  a.b(); // OK
}
function f2(a: unknown) {
  // a.b();
  // ^ Error: Object is of type 'unknown'.
  console.log(a);
}
// This is useful when describing function types because you can describe
// functions that accept any value without having any values in your
// function body.

const someRandomString = `{ "hello": "world" }`;
// ---cut---

// you can describe a function that returns a value of unknown type:
function safeParse(s: string): unknown {
  return JSON.parse(s);
}

// Need to be careful with 'obj'!
const obj = safeParse(someRandomString);
console.log(obj);

// never
// A type that represents values which are never observed.
function fail(msg: string): never {
  throw new Error(msg);
}
// console.log(fail("boom"));

// never also appears when TypeScript determines there’s nothing left in a union.
function someFunc(x: string | number) {
  if (typeof x === 'string') {
    // do something
  } else if (typeof x === 'number') {
    // do something else
  } else {
    x; // has type 'never'!
  }
}

console.log(someFunc('hello'));

// `Function`
function doSomething(f: Function) {
  f(1, 2, 3);
}
console.log(
  doSomething((x: number, y: number, z: number) => console.log(x, y, z))
);

export { noop, f1, f2, safeParse, fail };
