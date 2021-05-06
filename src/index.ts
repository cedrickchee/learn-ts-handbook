export const sum = (a: number, b: number) => {
  if ('development' === process.env.NODE_ENV) {
    console.log('beep boop');
  }
  return a + b;
};

// This is an industrial-grade general-purpose greeter function:
function greet(person: string, date: Date) {
  console.log(`Hello ${person}, today is ${date.toDateString()}!`);
}

greet("Brendan", new Date());

