/**
 * Rest Parameters and Arguments
 */

// Rest Parameters
function multiply(n: number, ...m: number[]) {
  return m.map((x) => n * x);
}
// 'a' gets value [10, 20, 30, 40]
const a = multiply(10, 1, 2, 3, 4);
console.log(a);

// Rest Arguments
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
arr1.push(...arr2);

// Inferred type is number[] -- "an array with zero or more numbers",
// not specifically two numbers
// const args = [8, 5];
// const angle = Math.atan2(...args); // Error

// fix
const args = [8, 5] as const;
const angle = Math.atan2(...args);

console.log(angle);

export { multiply };
