/**
 * Function Overloads
 */

function makeDate(timestamp: number): Date;
function makeDate(m: number, d: number, y: number): Date;
function makeDate(mOrTimestamp: number, d?: number, y?: number): Date {
  if (d !== undefined && y !== undefined) {
    return new Date(y, mOrTimestamp, d);
  } else {
    return new Date(mOrTimestamp);
  }
}

const d1 = makeDate(12345678);
const d2 = makeDate(5, 5, 5);
// const d3 = makeDate(1, 3);
          // ^ Error: No overload expects 2 arguments, but overloads do exist
          // that expect either 1 or 3 arguments.

console.log(d1);
console.log(d2);

// Overload Signatures and the Implementation Signature
function foo(x: string): void;
function foo() {
  // ...
}
// Expected to be able to call with zero arguments
// fn();
// ^ Error: Expected 1 arguments, but got 0.

export { makeDate, foo };
