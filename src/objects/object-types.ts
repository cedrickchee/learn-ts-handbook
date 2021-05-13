/**
 * Object Types
 */

function greet(person: { name: string; age: number }) {
  return "Hello " + person.name;
}

export { greet };
