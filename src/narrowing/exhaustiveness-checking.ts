/**
 * Exhaustiveness checking
 */

interface Circle {
  kind: 'circle';
  radius: number;
}

interface Square {
  kind: 'square';
  sideLength: number;
}
// ---cut---

// Adding a new member to the Shape union, will cause a TypeScript error:
// interface Triangle {
//   kind: 'triangle';
//   sideLength: number;
// }

type Shape = Circle | Square; /*| Triangle*/

function getArea(shape: Shape) {
  switch (shape.kind) {
    case 'circle':
      return Math.PI * shape.radius ** 2;
    case 'square':
      return shape.sideLength ** 2;
    default:
      const _exhaustiveCheck: never = shape;
            // ^ Type 'Triangle' is not assignable to type 'never'.
      return _exhaustiveCheck;
  }
}

export { getArea };
