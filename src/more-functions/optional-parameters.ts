/**
 * Optional Parameters
 */

// Marking the parameter as optional with `?`
function numberToFixed(n?: number) {
  // ...
  console.log(n);
}

numberToFixed(); // OK
numberToFixed(10); // OK

declare function f(x?: number): void;
// All OK
f();
f(10);
f(undefined);

export { numberToFixed };
