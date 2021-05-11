/**
 * Guidelines for Writing Good Generic Functions
 */

// Push Type Parameters Down
// Here are two ways of writing a function that appear similar:
function firstElement1<Type>(arr: Type[]) {
  return arr[0];
}

function firstElement2<Type extends any[]>(arr: Type) {
  return arr[0];
}

// a: number (good)
const a = firstElement1([1, 2, 3]);
// b: any (bad)
const b = firstElement2([1, 2, 3]);

console.log(a);
console.log(b);

// Use Fewer Type Parameters
// Here’s another pair of similar functions:
function filter1<Type>(arr: Type[], func: (arg: Type) => boolean): Type[] {
  return arr.filter(func);
}

function filter2<Type, Func extends (arg: Type) => boolean>(
  arr: Type[],
  func: Func
) {
  return arr.filter(func);
}

// Sometimes we forget that a function might not need to be generic:
function greet<Str extends string>(s: Str) {
  console.log('Hello, ', s);
}

greet("world");

// We could just as easily have written a simpler version:
function greet2(s: string) {
  console.log("Hello, " + s);
}

greet2("world");

export { firstElement1, firstElement2, filter1, filter2 };
