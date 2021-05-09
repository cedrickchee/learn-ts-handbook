/**
 * Discriminated unions
 */

// interface Shape {
//   kind: "circle" | "square";
//   radius?: number;
//   sideLength?: number;
// }

// function handleShape(shape: Shape) {
  // oops!
  // if (shape.kind === "rect") {
  // }
// }

// function getArea(shape: Shape) {
  // return Math.PI * shape.radius ** 2;
                     // ^ Error: Object is possibly 'undefined'.
// }

// function getArea(shape: Shape) {
  // if (shape.kind === "circle") {
    // return Math.PI * shape.radius ** 2;
                     // ^ Error: Object is possibly 'undefined'.
  // }
// }

// We could try to use a non-null assertion (a ! after shape.radius) to say
// that radius is definitely present.
// function getArea(shape: Shape) {
//   if (shape.kind === "circle") {
//     return Math.PI * shape.radius! ** 2;
//   }
// }
// But this doesn’t feel ideal. We had to shout a bit at the type-checker with
// those non-null assertions (!) to convince it that shape.radius was defined,
// but those assertions are error-prone if we start to move code around.
// Additionally, outside of strictNullChecks we’re able to accidentally access
// any of those fields anyway (since optional properties are just assumed to
// always be present when reading them). We can definitely do better.

// let’s take another swing at defining Shape.
interface Circle {
  kind: "circle";
  radius: number;
}

interface Square {
  kind: "square";
  sideLength: number;
}

type Shape = Circle | Square;

// Let’s see what happens here when we try to access the radius of a Shape.
// function getArea(shape: Shape) {
//   return Math.PI * shape.radius ** 2;
                     // ^ Property 'radius' does not exist on type 'Shape'.
// }

// But what if we tried checking the kind property again?
// function getArea(shape: Shape) {
//   if (shape.kind === "circle") {
//     return Math.PI * shape.radius ** 2;
//   }
// }

// The same checking works with switch statements as well.
function getArea(shape: Shape) {
  switch (shape.kind) {
    case "circle":
      return Math.PI * shape.radius ** 2;
    case "square":
      return shape.sideLength ** 2;
  }
}

export { getArea };
