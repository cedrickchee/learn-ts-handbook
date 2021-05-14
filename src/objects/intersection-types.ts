/**
 * Intersection Types
 */

interface Colorful {
  color: string;
}
interface Circle {
  radius: number;
}

type ColorfulCircle = Colorful & Circle;

function draw(circle: ColorfulCircle) {
  console.log(`Color was ${circle.color}`);
  console.log(`Radius was ${circle.radius}`);
}

// OK
draw({ color: 'blue', radius: 12 });

// Oops
// draw({ color: 'red', raidus: 42 });

export { draw };
