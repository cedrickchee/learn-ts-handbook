/**
 * The `Array` Type
 */

function theArrayType(value: Array<string>) {
  console.log('Array type:', value);
}

let myArray: string[] = ['hello', 'world'];

// either of these work!
theArrayType(myArray);
theArrayType(new Array('hello', 'world'));

export { theArrayType };
