/**
 * Functions
 */

// Parameter Type Annotations
function greet(name: string) {
  console.log('Hello, ' + name.toUpperCase() + '!!');
}

// Return type annotations
function getFavoriteNumber(): number {
  return 42;
}

greet('john');
console.log('Your fav number:', getFavoriteNumber());

export { greet, getFavoriteNumber };
