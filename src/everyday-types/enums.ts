/**
 * Enums
 */

// Enums allow us to define a set of named constants.
// Using enums can make it easier to document intent, or create a
// set of distinct cases.
// TypeScript provides both numeric and string-based enums.

// Numeric enums
enum Direction {
  Up = 1,
  Down,
  Left,
  Right,
}

// String enums
enum Fruit {
  Apple = "APPLE",
  Orange = "ORANGE",
  Kiwi = "KIWI",
  Grape = "GRAPE",
}

export { Direction, Fruit };
