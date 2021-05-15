/**
 * Indexed Access Types
 */

// We can use an indexed access type to
// look up a specific property on another type:
type Person = { age: number; name: string; alive: boolean };
type Age = Person['age'];

// The indexing type is itself a type, so we can use unions, keyof, or
// other types entirely:
type I1 = Person['age' | 'name'];
type I2 = Person[keyof Person];
type AliveOrName = 'alive' | 'name';
type I3 = Person[AliveOrName];

// Another example of indexing with an arbitrary type is using number to get
// the type of an array’s elements.
const MyArray = [
  { name: "Alice", age: 15 },
  { name: "Bob", age: 23 },
  { name: "Eve", age: 38 },
];

type Person2 = typeof MyArray[number];
type Age2 = typeof MyArray[number]['age'];
// Or
type Age3 = Person2['age'];

// You can only use types when indexing, meaning you can’t use a const to make
// a variable reference:
// const key = 'age';
// type Age4 = Person[key];
                    // ^ Error: Type 'any' cannot be used as an index type.
                             // 'key' refers to a value, but is being used as a type here. Did you mean 'typeof key'?

export { Age, I1, I2, I3, Age2, Age3 };
