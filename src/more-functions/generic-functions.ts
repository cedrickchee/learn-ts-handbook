/**
 * Generic Functions
 */

function firstElement<Type>(arr: Type[]): Type {
  return arr[0];
}

// Inference

// prettier-ignore
function myMap<Input, Output>(arr: Input[], func: (arg: Input) => Output): Output[] {
  return arr.map(func);
}

// Constraints
function longest<Type extends { length: number }>(a: Type, b: Type) {
  if (a.length > b.length) {
    return a;
  } else {
    return b;
  }
}

// longerArray is of type 'number[]'
const longerArray = longest([1, 2], [1, 2, 3]);
// longerString is of type 'string'
const longerString = longest("alice", "bob");

console.log(longerArray);
console.log(longerString);

// Error! Numbers don't have a 'length' property
// const notOK = longest(10, 100);

export { firstElement, myMap, longest };
