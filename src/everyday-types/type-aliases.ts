/**
 * Type Aliases
 */

// Syntax
type Point = {
  x: number;
  y: number;
};

// Exactly the same as the earlier example
function printCoord(pt: Point) {
  console.log("The coordinate's x value is " + pt.x);
  console.log("The coordinate's y value is " + pt.y);
}
printCoord({ x: 3, y: 5 });

// Use a type alias to give a name to any type at all, not just an object type.
// type ID = number | string;


// Aliases are only aliases - you cannot use type aliases to create
// different/distinct “versions” of the same type.
type UserInputSanitizedString = string;

function sanitizeInput(str: string): UserInputSanitizedString {
  return sanitize(str);
}

function sanitize(str: string) {
  return str.trim();
}
function getInput() {
  return " Hello, world  ";
}

// Create a sanitized input
let userInput = sanitizeInput(getInput());
console.log("user input:", userInput);
userInput = "new input";

// Can still be re-assigned with a string though


export const pc = printCoord;
