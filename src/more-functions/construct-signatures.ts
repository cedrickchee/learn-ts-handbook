/**
 * Construct Signatures
 */

type SomeObject = any;
// ---cut---

type SomeConstructor = {
  new (s: string): SomeObject;
};

function fn(ctor: SomeConstructor) {
  return new ctor('hello');
}

interface CallOrConstruct {
  new (s: string): Date;
  (n?: number): number;
}

export { fn, CallOrConstruct };
