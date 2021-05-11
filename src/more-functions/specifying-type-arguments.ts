/**
 * Specifying Type Arguments
 */

function combine<Type>(arr1: Type[], arr2: Type[]): Type[] {
  return arr1.concat(arr2);
}

// const arr = combine([1, 2, 3], ["hello"]);
                                  // ^ Error: Type 'string' is not assignable
                                  // to type 'number'.

// If you intended to do this, however, you could manually specify Type:
const arr = combine<number | string>([1, 2, 3], ["hello"]);

console.log(arr);

export { combine };
