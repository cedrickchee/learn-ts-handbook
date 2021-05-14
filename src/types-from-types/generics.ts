/**
 * Generics
 */

function identity<Type>(arg: Type): Type {
  return arg;
}

// We can also write the generic type as a call signature of an
// object literal type:
let myIdentity: { <Type>(arg: Type): Type } = identity;

// Which leads us to writing our first generic interface.
// Let’s take the object literal from the previous example and move
// it to an interface:
interface GenericIdentityFn {
  <Type>(arg: Type): Type;
}

let myIdentity2: GenericIdentityFn = identity;
console.log(myIdentity2('myIdentity2'));

// In a similar example, we may want to move the generic parameter to be a
// parameter of the whole interface.
// This lets us see what type(s) we’re generic over (e.g. Dictionary<string>
// rather than just Dictionary).
// This makes the type parameter visible to all the other members of the
// interface.
interface GenericIdentityFn3<Type> {
  (arg: Type): Type;
}

let myIdentity3: GenericIdentityFn3<number> = identity;
console.log(myIdentity3(42));

export { myIdentity };
