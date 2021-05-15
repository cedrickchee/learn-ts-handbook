/**
 * Keyof Type Operator
 */

type Point = { x: number; y: number; };
type P = keyof Point;

type Arrayish = { [n: number]: unknown };
type A = keyof Arrayish;

type Mapish = { [k: string]: boolean };
type M = keyof Mapish;

export { P, A, M };
