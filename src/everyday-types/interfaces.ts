/**
 * Interfaces
 */

// An interface declaration is another way to name an object type.
interface Point {
  x: number;
  y: number;
}

function printCoord(pt: Point) {
  console.log("The coordinate's x value is " + pt.x);
  console.log("The coordinate's y value is " + pt.y);
}

printCoord({ x: 100, y: 100 });

// Differences Between Type Aliases and Interfaces

// Extending an interface
interface Animal {
  name: string
}
interface Bear extends Animal {
  honey: boolean
}
let bear: Bear = { name: "Grhhh", honey: true };
bear.name = "Bruhhh"
bear.honey = false;

// Extending a type via intersections
type Animal2 = {
  name: string
}
type Bear2 = Animal2 & {
  honey: boolean
}
let bear2: Bear2 = { name: "Jrrh", honey: true };
bear2.name = "Druhhh";
bear2.honey = false;

// Adding new fields to an existing interface
interface Window {
  title: string
}
interface Window {
  size: number
}
let win: Window = { title: "foo bar", size: 100 };
win.size = 300;

// A type cannot be changed after being created
type Window2 = {
  title: string
}

// type Window2 = {
//   size: number
// }
let win2: Window2 = { title: "" };
win2.title = "A window";

export default printCoord;
