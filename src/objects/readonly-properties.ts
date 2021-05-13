/**
 * readonly Properties
 */

interface SomeType {
  readonly prop: string;
}

function doSomething(obj: SomeType) {
  // We can read from 'obj.prop'.
  console.log(`prop has the value '${obj.prop}'.`);

  // But we can't re-assign it.
  // obj.prop = 'hello';
       // ^ Error: Cannot assign to 'prop' because it is a read-only property.
}
doSomething({ prop: 'test' });

// Using the readonly modifier doesn’t necessarily imply that a value is
// totally immutable.
interface Home {
  readonly resident: { name: string; age: number };
}

function visitForBirthday(home: Home) {
  // We can read and update properties from 'home.resident'.
  home.resident.age++;
  console.log(`Happy ${home.resident.age}th birthday ${home.resident.name}!`);
}
visitForBirthday({ resident: { name: 'foo', age: 20 }});

function evict(home: Home) {
  // But we can't write to the 'resident' property itself on a 'Home'.
  // home.resident = {
          // ^ Error: Cannot assign to 'resident' because it is a read-only property.
  //   name: 'Victor',
  //   age: 30,
  // };

  console.log('home:', home);
}
evict({ resident: { name: 'foo', age: 20 }});

// TS doesn’t factor in whether properties on two types are readonly when
// checking whether those types are compatible, so readonly properties can
// also change via aliasing.
interface Person {
  name: string;
  age: number;
}

interface ReadonlyPerson {
  readonly name: string;
  readonly age: number;
}

let writablePerson: Person = {
  name: 'Person McPersonface',
  age: 42,
};

// works
let readonlyPerson: ReadonlyPerson = writablePerson;
console.log(readonlyPerson.age); // prints '42'
writablePerson.age++;
console.log(readonlyPerson.age); // prints '43'

export { doSomething };
