/**
 * Equality narrowing
 */

// Using switch statements and equality checks to narrow types.
function example(x: string | number, y: string | boolean) {
  if (x === y) {
    // We can now call any 'string' method on 'x' or 'y'.
    console.log(x.toUpperCase());
    console.log(y.toLowerCase());
  } else {
    console.log(x);
    console.log(y);
  }
}

example('foo bar', true);
example('foo bar', 'foo bar');

// A specific check to block out nulls.
function printAll(strs: string | string[] | null) {
  if (strs !== null) {
    if (typeof strs === 'object') {
      for (const s of strs) {
        console.log(s);
      }
    } else if (typeof strs === 'string') {
      console.log(strs);
    }
  }
}

printAll("");
printAll("hello");

// Checking whether something == null actually not only checks whether it is
// specifically the value null - it also checks whether it’s
// potentially undefined.
interface Container {
  value: number | null | undefined;
}

function multiplyValue(container: Container, factor: number) {
  // Remove both 'null' and 'undefined' from the type.
  if (container.value != null) {
    console.log(container.value);

    // Now we can safely multiply 'container.value'.
    container.value *= factor;
  }
}

export { example, printAll, multiplyValue };
