/**
 * Function Type Expressions
 */

function greeter(fn: (a: string) => void) {
  fn('Hello, world');
}

function printToConsole(s: string) {
  console.log(s);
}

greeter(printToConsole);

// Of course, we can use a type alias to name a function type.
type GreetFunction = (a: string) => void;
function anotherGreeter(fn: GreetFunction) {
  fn("Hello, world");
}

export { greeter, printToConsole, anotherGreeter };
