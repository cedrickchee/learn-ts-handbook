/**
 * Less Common Primitives
 */

// bigint
// Creating a bigint via the BigInt function
const oneHundred: bigint = BigInt(100);

// Creating a BigInt via the literal syntax
const anotherHundred: bigint = 100n;

// symbol
const firstName = Symbol('name');
const secondName = Symbol('name');

// Error: This condition will always return 'false' since the types
// 'typeof firstName' and 'typeof secondName' have no overlap.
// if (firstName === secondName) {
  // Can't ever happen
// }

export { oneHundred, anotherHundred };
