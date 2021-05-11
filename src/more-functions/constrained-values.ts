/**
 * Working with Constrained Values
 */

function minimumLength<Type extends { length: number }>(
  obj: Type,
  minimum: number
): Type {
  if (obj.length >= minimum) {
    return obj;
  } else {
    // Error!: Type '{ length: number; }' is not assignable to type 'Type'.
    // return { length: minimum };
    return obj // !!!DON'T DO THIS!!!
  }
}

// 'arr' gets value { length: 6 }
const arr = minimumLength([1, 2, 3], 6);
// and crashes here because arrays have
// a 'slice' method, but not the returned object!
console.log(arr.slice(0));

export { minimumLength };
