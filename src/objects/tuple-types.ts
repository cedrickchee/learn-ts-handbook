/**
 * Tuple Types
 */

type StringNumberPair = [string, number];

function tupleTypeExample(pair: StringNumberPair) {
  const a = pair[0];
  const b = pair[1];

  console.log(`a: ${a}, b: ${b}`);
}

tupleTypeExample(['hello', 3]);

// We can also destructure tuples using JavaScript’s array destructuring.
function destructureTuples(stringHash: [string, number]) {
  const [inputString, hash] = stringHash;

  console.log('inputString:', inputString);
  console.log('hash:', hash);
}

destructureTuples(["foo", 42]);

// tuples can have optional properties by writing out a question mark (`?` after
// an element’s type).
type Either2dOr3d = [number, number, number?];

function setCoordinate(coord: Either2dOr3d) {
  const [x, y, z] = coord;
            // ^ const z: number | undefined
  console.log('coord:', x, y, z);

  console.log(`Provided coordinates had ${coord.length} dimensions`);
                                              // ^ (property) length: 2 | 3
}
setCoordinate([1, 2]);
setCoordinate([10, 20, 100]);

// Tuples can also have rest elements, which have to be an array/tuple type.
// type StringNumberBooleans = [string, number, ...boolean[]];
// type StringBooleansNumber = [string, ...boolean[], number];
// type BooleansStringNumber = [...boolean[], string, number];

// `readonly` Tuple Types
// let point = [3, 4] as const;

function distanceFromOrigin([x, y]: [number, number]) {
  return Math.sqrt(x ** 2 + y ** 2);
}

// distanceFromOrigin(point);
        // ^ Error: Argument of type 'readonly [3, 4]' is not assignable to
          // parameter of type '[number, number]'.
          // The type 'readonly [3, 4]' is 'readonly' and cannot be assigned to
          // the mutable type '[number, number]'.

export { tupleTypeExample, destructureTuples, distanceFromOrigin };
