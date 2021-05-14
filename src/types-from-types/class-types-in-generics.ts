/**
 * Using Class Types in Generics
 */

class BeeKeeper {
  hasMask: boolean = false;
}

class ZooKeeper {
  nametag: string = '';
}

class Animal {
  numLegs: number = 2;
}

class Bee extends Animal {
  keeper: BeeKeeper = new BeeKeeper();
}

class Lion extends Animal {
  keeper: ZooKeeper = new ZooKeeper();
}

function createInstance<A extends Animal>(c: new () => A): A {
  return new c();
}

console.log(createInstance(Lion).keeper.nametag);
console.log(createInstance(Bee).keeper.hasMask);

export { createInstance };
