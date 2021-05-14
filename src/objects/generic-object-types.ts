/**
 * Generic Object Types
 */

interface Box {
  contents: unknown;
}

function errorProneTypeAssertion() {
  let x: Box = {
    contents: 'Error prone',
  };

  // we could check 'x.contents'
  if (typeof x.contents === 'string') {
    console.log(x.contents.toUpperCase());
  }

  // or we could use a type assertion
  console.log((x.contents as string).toUpperCase());
}

errorProneTypeAssertion();

// One type safe approach would be to instead scaffold out different Box types
// for every type of contents.
function typeSafeApproach() {
  interface Box<Type> {
    contents: Type;
  }
  interface StringBox {
    contents: string;
  }
  let boxA: Box<string> = { contents: "hello" };
  boxA.contents;

  let boxB: StringBox = { contents: "world" };
  boxB.contents;

  function setContents<Type>(box: Box<Type>, newContents: Type) {
    box.contents = newContents;
  }

  setContents<string>(boxA, "foo bar");
  console.log('type safe approach:', boxA.contents);
}

typeSafeApproach();

// Since type aliases, unlike interfaces, can describe more than just object
// types, we can also use them to write other kinds of generic helper types.
type OrNull<Type> = Type | null;
type OneOrMany<Type> = Type | Type[];
type OneOrManyOrNull<Type> = OrNull<OneOrMany<Type>>;
type OneOrManyOrNullStrings = OneOrManyOrNull<string>;

export { errorProneTypeAssertion, typeSafeApproach, OneOrManyOrNullStrings };
