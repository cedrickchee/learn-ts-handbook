/**
 * Narrowing
 */

function padLeft(padding: number | string, input: string): string {
  if (typeof padding === "number") {
    return new Array(padding + 1).join(' ') + input;
  }
  return padding + input;
}

console.log(padLeft(3, "abc"));
console.log(padLeft(" ", "foo"));

export { padLeft };
