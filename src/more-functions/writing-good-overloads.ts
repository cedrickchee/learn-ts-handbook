/**
 * Writing Good Overloads
 */

function len(s: string): number;
function len(arr: any[]): number;
function len(x: any) {
  return x.length;
}

// This function is fine; we can invoke it with strings or arrays.
// However, we can’t invoke it with a value that might be a string or an array,
// because TypeScript can only resolve a function call to a single overload:
len('abc'); // OK
len([1, 2]); // OK
// len(Math.random() > 0.5 ? "hello" : [0]);
    // ^ Error: No overload matches this call.

// Because both overloads have the same argument count and same return type,
// we can instead write a non-overloaded version of the function:
function len2(x: any[] | string): number {
  return x.length;
}
len2('abc'); // OK
len2([1, 2]); // OK
len2(Math.random() > 0.5 ? "hello" : [0]); // OK!!!
// This is much better! Callers can invoke this with either sort of value, and
// as an added bonus, we don’t have to figure out a correct
// implementation signature.

export { len, len2 };
