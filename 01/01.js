var input = require("./input");

const product = (numbers) => {
  return numbers.reduce((total, number) => {
    return number * total;
  }, 1);
};

const sum = (numbers) => {
  return numbers.reduce((total, number) => {
    return number + total;
  }, 0);
};

// SOLUTIONS

// Find the two entries that sum to 2020; what do you get if you multiply them together?
const solutionOne = (input) => {
  for (const n1 of input) {
    for (const n2 of input) {
      if (n1 + n2 === 2020) {
        return product([n1, n2]);
      }
    }
  }
};

// What is the product of the three entries that sum to 2020?
const solutionTwo = (input) => {
  for (const n1 of input) {
    for (const n2 of input) {
      for (const n3 of input) {
        if (sum([n1, n2, n3]) === 2020) {
          return product([n1, n2, n3]);
        }
      }
    }
  }
};

console.log(`Solution 1: ${solutionOne(input.data)}`);
console.log(`Solution 2: ${solutionTwo(input.data)}`);
