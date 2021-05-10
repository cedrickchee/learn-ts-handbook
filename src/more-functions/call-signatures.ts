/**
 * Call Signatures
 */

type DescribableFunction = {
  description: string;
  (someArg: number): boolean;
};
function doSomething(fn: DescribableFunction) {
  console.log(fn.description + ' returned ' + fn(9));
}

// const someFn: DescribableFunction = (someArg: number): boolean => {
//   return (someArg > 5 ? true : false);
// };
// doSomething(someFn);

export { doSomething };
