/**
 * Assignability of Functions
 */

// Return type `void`
type voidFunc = () => void;

const f1: voidFunc = () => {
  return true;
};

const f2: voidFunc = () => true;

const f3: voidFunc = function () {
  return true;
};

const v1 = f1();
const v2 = f2();
const v3 = f3();

console.log(v1);
console.log(v2);
console.log(v3);

// This behavior exists so that the following code is valid
const src = [1, 2, 3];
const dst = [0];
src.forEach((el) => dst.push(el));

// There is one other special case to be aware of, when a literal function
// definition has a void return type, that function must not return anything.
function func2(): void {
  // @ts-expect-error
  return true;
}

const func3 = function (): void {
  // @ts-expect-error
  return true;
};
console.log(func2);
console.log(func3);

export { v1 };
