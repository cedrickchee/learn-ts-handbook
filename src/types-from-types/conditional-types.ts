/**
 * Conditional Types
 */

interface Animal {
  live(): void;
}
interface Dog extends Animal {
  woof(): void;
}

type Example1 = Dog extends Animal ? number : string;
type Example2 = RegExp extends Animal ? number : string;

// But the power of conditional types comes from using them with generics.
interface IdLabel {
  id: number /* some fields */;
}
interface NameLabel {
  name: string /* other fields */;
}

// function createLabel(id: number): IdLabel;
// function createLabel(name: string): NameLabel;
// function createLabel(nameOrId: string | number): IdLabel | NameLabel;
// function createLabel(nameOrId: string | number): IdLabel | NameLabel {
//   throw "unimplemented";
// }

// These overloads for createLabel describe a single JavaScript function that
// makes a choice based on the types of its inputs.
//
// For every new type createLabel can handle, the number of overloads
// grows exponentially.

// Instead, we can encode that logic in a conditional type:
type NameOrId<T extends number | string> = T extends number
  ? IdLabel
  : NameLabel;

// We can then use that conditional type to simplify out overloads down to a
// single function with no overloads.
function createLabel<T extends number | string>(idOrName: T): NameOrId<T> {
  console.log('createLabel:', idOrName);
  // throw "unimplemented";
  if (typeof idOrName === 'number') {
    const a: IdLabel = { id: idOrName };
    return a as NameOrId<typeof idOrName>;
    // return idOrName as any;
  } else if (typeof idOrName === 'string') {
    const b: NameLabel = { name: idOrName };
    return b as NameOrId<typeof idOrName>;
  }
  // Conditional type - how to use it as function return type?:
  // https://www.reddit.com/r/typescript/comments/kyu2ao/conditional_type_how_to_use_it_as_function_return/
  return 1 as any;
}

let a = createLabel("rust");
let b = createLabel(1.3);
let c = createLabel(Math.random() ? 'hello' : 42);

console.log('createLabel:', a, b, c);

// Conditional Type Constraints
// type MessageOf<T> = T["message"];
                      // ^ Error: Type '"message"' cannot be used to index type 'T'.

// In this example, TypeScript errors because T isn’t known to have a property
// called message. We could constrain T, and TypeScript would no longer complain:
// type MessageOf<T extends { message: unknown }> = T["message"];

// interface Email {
//   message: string;
// }

// interface Dog {
//   bark(): void;
// }

// type EmailMessageContents = MessageOf<Email>;

// However, what if we wanted MessageOf to take any type, and default to
// something like never if a message property isn’t available?
type MessageOf<T> = T extends { message: unknown } ? T["message"] : never;

interface Email {
  message: string;
}

interface Dog {
  bark(): void;
}

type EmailMessageContents = MessageOf<Email>;
type DogMessageContents = MessageOf<Dog>;

// As another example, we could also write a type called Flatten that
// flattens array types to their element types, but leaves them alone otherwise:
type Flatten<T> = T extends any[] ? T[number] : T;
// Extracts out the element type.
type Str = Flatten<string[]>;
// Leaves the type alone.
type Num = Flatten<number>;

// Inferring Within Conditional Types
type AnotherFlatten<Type> = Type extends Array<infer Item> ? Item : Type;

// We can write some useful helper type aliases using the infer keyword.
// For example, for simple cases, we can extract the return type out from
// function types:
type GetReturnType<Type> = Type extends (...args: never[]) => infer Return
  ? Return
  : never;
type AnotherNum = GetReturnType<() => number>;
type AnotherStr = GetReturnType<(x: string) => string>;
type Bools = GetReturnType<(a: boolean, b: boolean) => boolean[]>;

// Distributive Conditional Types
type ToArray<Type> = Type extends any ? Type[] : never;
type StrArrOrNumArr = ToArray<string | number>;
       // ^ type StrArrOrNumArr = string[] | number[]

// Typically, distributivity is the desired behavior.
// To avoid that behavior, you can surround each side of the extends keyword
// with square brackets.
type ToArrayNonDist<Type> = [Type] extends [any] ? Type[] : never;
// 'StrOrNumArr' is no longer a union.
type StrOrNumArr2 = ToArrayNonDist<string | number>;
    // ^ type StrOrNumArr2 = (string | number)[]

export {
  Example1,
  Example2,
  createLabel,
  EmailMessageContents,
  DogMessageContents,
  Str,
  Num,
  AnotherFlatten,
  AnotherNum,
  AnotherStr,
  Bools,
  StrArrOrNumArr,
  StrOrNumArr2,
};
