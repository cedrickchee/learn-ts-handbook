/**
 * Typeof Type Operator
 */

let s = 'hello';
let n: typeof s;

// Predefined type ReturnType<T>.
// It takes a function type and produces its return type:
type Predicate = (x: unknown) => boolean;
type K = ReturnType<Predicate>;

// If we try to use ReturnType on a function name, we see an instructive error:
// function f() {
//   return { x: 10, y: 3 };
// }
// type P = ReturnType<f>;
                    // ^ Error: 'f' refers to a value, but is being used as a
                    //   type here. Did you mean 'typeof f'?

function f() {
  return { x: 10, y: 3 };
}
type P = ReturnType<typeof f>;

export { n, K, P };
