/**
 * Index Signatures
 */

declare function getStringArray(): StringArray;
// ---cut---

interface StringArray {
  [index: number]: string;
}

const myArray: StringArray = getStringArray();
const secondItem = myArray[1];
       // ^ const secondItem: string
// This index signature states that when a StringArray is indexed with a number,
// it will return a string.

// While string index signatures are a powerful way to describe the
// “dictionary” pattern, they also enforce that all properties match their
// return type.
interface NumberDictionary {
  [index: string]: number;

  length: number; // ok
  // name: string;
// ^ Error: Property 'name' of type 'string' is not assignable to string index type 'number'.
}

// However, properties of different types are acceptable if the index signature
// is a union of the property types:
interface NumberOrStringDictionary {
  [index: string]: number | string;
  length: number; // ok, length is a number
  name: string; // ok, name is a string
}

declare function getReadOnlyStringArray(): ReadonlyStringArray;
// ---cut---

// You can make index signatures readonly in order to prevent assignment to
// their indices:
interface ReadonlyStringArray {
  readonly [index: number]: string;
}

let myArray2: ReadonlyStringArray = getReadOnlyStringArray();
// myArray2[2] = "Mallory";
   // ^ Error: Index signature in type 'ReadonlyStringArray' only permits reading.

export {secondItem, NumberDictionary, NumberOrStringDictionary, myArray2 };
