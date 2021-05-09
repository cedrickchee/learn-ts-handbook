/**
 * Using type predicates
 *
 * A more direct control over how types change throughout your code.
 */

type Fish = { swim: () => void; name: string };
type Bird = { fly: () => void; name: string };

// Issue: https://stackoverflow.com/questions/63714305/typescript-overload-signatures-must-all-be-ambient-or-non-ambient-when-overlo
// https://stackoverflow.com/questions/42046784/in-typescript-how-to-declare-a-function-before-its-use-c-style
// declare function getSmallPet(): Fish | Bird;
function getSmallPet(): Fish | Bird;
function getSmallPet() {
  let pet;
  if (Math.random() < 0.5) {
    pet = { swim: () => {} };
  } else {
    pet = { fly: () => {} };
  }

  console.log('getSmallPet:', (pet.swim !== undefined ? 'fish' : 'bird'));

  return pet;
}
// ---cut---

// Define a user-defined type guard
function isFish(pet: Fish | Bird): pet is Fish {
  return (pet as Fish).swim !== undefined;
}

// Both calls to 'swim' and 'fly' are now okay.
let pet = getSmallPet();

if (isFish(pet)) {
  pet.swim();
} else {
  pet.fly();
}

// You may use the type guard `isFish` to filter an array of `Fish | Bird` and
// obtain an array of `Fish`.
const zoo: (Fish | Bird)[] = [getSmallPet(), getSmallPet(), getSmallPet()];
const underwater1: Fish[] = zoo.filter(isFish);
// or, equivalently
const underwater2: Fish[] = zoo.filter(isFish) as Fish[];

// The predicate may need repeating for more complex examples
const underwater3: Fish[] = zoo.filter((pet): pet is Fish => {
  if (pet.name === "sharkey") return false;
  return isFish(pet);
});

export { isFish, underwater1, underwater2, underwater3 };
