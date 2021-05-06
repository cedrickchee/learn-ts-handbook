/**
 * Union Types
 */

// Defining a Union Type
// Let’s write a function that can operate on strings or numbers:
function printId(id: number | string) {
  console.log('Your ID is: ', id);
}
// OK
printId(101);
// OK
printId('202');
// Error
// printId({ myID: 12345 });

// Working with Union Types
function printId2(id: number | string) {
  if (typeof id === 'string') {
    // In this branch, id is of type 'string'
    console.log(id.toUpperCase());
  } else {
    // Here, id is of type 'number'
    console.log(id);
  }
}
printId2(102);
printId2('88');

// Another example is to use a function like Array.isArray:
function welcomePeople(x: string[] | string) {
  if (Array.isArray(x)) {
    // Here: 'x' is 'string[]'
    console.log('Hello, ' + x.join(' and '));
  } else {
    // Here: 'x' is 'string'
    console.log('Welcome lone traveler ' + x);
  }
}
welcomePeople(['alice', 'john', 'malcom']);
welcomePeople('foobar');

// Without narrowing
function getFirstThree(x: number[] | string) {
  return x.slice(0, 3);
}
console.log('first three number:', getFirstThree([1, 2, 3, 4, 5]));

export { printId, printId2, welcomePeople, getFirstThree };
