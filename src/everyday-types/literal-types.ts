/**
 * Literal Types
 */

// Both var and let allow for changing what is held inside the variable, and
// const does not.
let changingString = 'Hello World';
changingString = 'Olá Mundo';
// Because `changingString` can represent any possible string, that
// is how TypeScript describes it in the type system
const constantString = 'Hello World';
// Because `constantString` can only represent 1 possible string, it
// has a literal type representation

let x: 'hello' = 'hello';
// OK
x = 'hello';
// Error: Type '"howdy"' is not assignable to type '"hello"'.
// x = "howdy";

// Combining literals into unions, you can express a much more useful concept.
function printText(s: string, alignment: 'left' | 'right' | 'center') {
  console.log(`Print text: ${s} and align: ${alignment}`);
}
printText('Hello, world', 'left');
// Error: Argument of type '"centre"' is not assignable to parameter
// of type '"left" | "right" | "center"'.
// printText("G'day, mate", "centre");

// Numeric literal types work the same way.
function compare(a: string, b: string): -1 | 0 | 1 {
  return a === b ? 0 : a > b ? 1 : -1;
}

// Of course, you can combine these with non-literal types.
interface Options {
  width: number;
}
function configure(x: Options | 'auto') {
  console.log('Your configurations:', x);
}
configure({ width: 100 });
configure("auto");
// Error: Argument of type '"automatic"' is not assignable to parameter
// of type 'Options | "auto"'.
// configure("automatic");

export { changingString, constantString, x, printText, compare, configure };
