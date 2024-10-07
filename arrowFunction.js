const greet = (name) => {
  console.log(`hello  ${name} !`);
};

const add = (a, b) => a + b;

const square = (a) => a ** 2;

const squareNumbers = (numbers) => {
  return numbers.map((number) => number ** 2);
};

greet("salem");
console.log(add(2, 3));
console.log(square(2));
const nums = [1, 2, 3, 4, 5];
console.log(squareNumbers(nums));
