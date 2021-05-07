/**
 * `null` and `undefined`
 */

// Just like checking for `undefined` before using an optional property,
// we can use narrowing to check for values that might be `null`.
function doSomething(x: string | null) {
  if (x === null) {
    // do nothing
  } else {
    console.log("Hello, " + x.toUpperCase());
  }
}

doSomething("john");

// Non-null Assertion Operator (Postfix `!`)
function liveDangerously(x?: number | null) {
  // No error
  console.log(x!.toFixed());
}

liveDangerously(123.45);

export { doSomething, liveDangerously };
