/**
 * Mapped Types
 */

type Horse = {};
// ---cut---

// Mapped types build on the syntax for index signatures, which are used to
// declare the types of properties which has not been declared ahead of time:
type OnlyBoolsAndHorses = {
  [key: string]: boolean | Horse;
}

const conforms: OnlyBoolsAndHorses = {
  del: true,
  rodney: false,
};

// A mapped type is a generic type which uses a union created via a keyof to
// iterate through the keys of one type to create another:
type OptionFlags<Type> = {
  [Property in keyof Type]: boolean;
};

// In this example, OptionFlags will take all the properties from the type Type
// and change their values to be a boolean.
type FeatureFlags = {
  darkMode: () => void;
  newUserProfile: () => void;
};
type FeatureOptions = OptionFlags<FeatureFlags>;

// Mapping Modifiers
// Removes 'readonly' attributes from a type's properties
type CreateMutable<Type> = {
  -readonly [Property in keyof Type]: Type[Property];
};

type LockedAccount = {
  readonly id: string;
  readonly name: string;
};

type UnlockedAccount = CreateMutable<LockedAccount>;

// Removes 'optional' attributes from a type's properties
type Concrete<Type> = {
  [Property in keyof Type]-?: Type[Property];
};

type MaybeUser = {
  id: string;
  name?: string;
  age?: number;
};

type User = Concrete<MaybeUser>;

// Key Remapping via `as`
// type MappedTypeWithNewProperties<Type> = {
//   [Properties in keyof Type as NewKeyType]: Type[Properties]
// };

// Use template literal types to create new property names from prior ones:
type Getters<Type> = {
  [Property in keyof Type as `get${Capitalize<string & Property>}`]: () => Type[Property]
};

interface Person {
  name: string;
  age: number;
  location: string;
}

type LazyPerson = Getters<Person>;
    // ^ type LazyPerson = {
    //     getName: () => string;
    //     getAge: () => number;
    //     getLocation: () => string;
    //   }

// Filter out keys by producing never via a conditional type:
// Remove the 'kind' property
type RemoveKindField<Type> = {
  [Property in keyof Type as Exclude<Property, 'kind'>]: Type[Property]
};

interface Circle {
  kind: 'circle';
  radius: number;
}

type KindlessCircle = RemoveKindField<Circle>;
    // ^ type KindlessCircle = {
    //     radius: number;
    //   }

// Further Exploration
type ExtractPII<Type> = {
  [Property in keyof Type]: Type[Property] extends { pii: true } ? true : false;
};

type DBFields = {
  id: { format: "incrementing" };
  name: { type: string; pii: true };
};

type ObjectNeedsGDPRDeletion = ExtractPII<DBFields>;
            // ^ type ObjectsNeedingGDPRDeletion = {
            //     id: false;
            //     name: true;
            //   }

export {
  conforms,
  FeatureOptions,
  UnlockedAccount,
  User,
  LazyPerson,
  KindlessCircle,
  ObjectNeedsGDPRDeletion
};
