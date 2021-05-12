/**
 * Parameter Destructuring
 */

// The type annotation for the object goes after the destructuring syntax:
function sum({ a, b, c }: { a: number; b: number; c: number }) {
  console.log(a + b + c);
}
sum({ a: 10, b: 3, c: 9 });

// This can look a bit verbose, but you can use a named type here as well:
type ABC = { a: number; b: number; c: number };
function sum2({ a, b, c }: ABC) {
  console.log(a + b + c);
}
sum2({ a: 8, b: 1, c: 10 });

export { sum, sum2 };
