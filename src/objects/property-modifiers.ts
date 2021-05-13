/**
 * Property Modifiers
 */

// Optional Properties
interface Shape {
  name: string;
}
function getShape(): Shape {
  return { name: 'circle' };
}
// ---cut---

interface PaintOptions {
  shape: Shape;
  xPos?: number;
  yPos?: number;
}

function paintShape(opts: PaintOptions) {
  console.log(opts);
}

const shape = getShape();
paintShape({ shape });
paintShape({ shape, xPos: 100 });
paintShape({ shape, yPos: 100 });
paintShape({ shape, xPos: 100, yPos: 100 });

// Read from those properties
function paintShape2(opts: PaintOptions) {
  // In JavaScript, even if the property has never been set, we can still
  // access it - it’s just going to give us the value undefined.
  // We can just handle undefined specially.
  let xPos = opts.xPos === undefined ? 0 : opts.xPos;
  let yPos = opts.yPos === undefined ? 0 : opts.yPos;

  console.log('xPos:', xPos, 'yPos:', yPos);
}
paintShape2({ shape, xPos: 100, yPos: 100 });

// This pattern of setting defaults for unspecified values is so common that JS
// has syntax to support it.
function paintShape3({ shape, xPos = 0, yPos = 0 }: PaintOptions) {
  console.log('x coordinate at', xPos);
  console.log('y coordinate at', yPos);

  console.log('shape is', shape);
}
paintShape3({ shape, xPos: 80 });
// Here we used a destructuring pattern for paintShape3’s parameter, and
// provided default values for xPos and yPos.
// Now xPos and yPos are both definitely present within the body of paintShape3,
// but optional for any callers to paintShape3.

export { paintShape, getShape };
