/**
 * Generic Constraints
 */

interface Lengthwise {
  length: number;
}

function loggingIdentity<Type extends Lengthwise>(arg: Type): Type {
  console.log(arg.length);
  return arg; // Now we know it has a .length property, so no more error
}

loggingIdentity({ length: 10, value: 3 });

// Using Type Parameters in Generic Constraints
function getProperty<Type, Key extends keyof Type>(obj: Type, key: Key) {
  return obj[key];
}

let x = { a: 1, b:2, c: 3, d: 4 };

console.log(getProperty(x, 'a'));
// getProperty(x, 'm');
                // ^ Error: Argument of type '"m"' is not assignable to
                //   parameter of type '"a" | "b" | "c" | "d"'.

export { loggingIdentity };
