/**
 * Type Assertions
 */

// Use a type assertion to specify a more specific type.
// const myCanvas = document.getElementById('main_canvas') as HTMLCanvasElement;

// You can also use the angle-bracket syntax.
const myCanvas = <HTMLCanvasElement>document.getElementById('main_canvas');

// This rule prevents “impossible” coercions.
// const x = "123" as number;

// Sometimes this rule can be too conservative and will disallow more complex
// coercions that might be valid.
const x = ("123" as any) as number;

export { myCanvas, x };
