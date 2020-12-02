import { data } from "./input";

const solutionOne = (
  data: {
    range: string;
    requiredLetter: string;
    password: string;
  }[]
): number => {
  let countCorrectPasswords = 0;
  data.forEach((d) => {
    const range: number[] = Array.from(d.range.split("-"), (n) => parseInt(n));
    const splittedPassword: string[] = d.password.split("");
    let countRequiredLetter: number = 0;
    splittedPassword.forEach((char) => {
      if (char === d.requiredLetter) {
        countRequiredLetter += 1;
      }
    });
    if (countRequiredLetter <= range[1] && countRequiredLetter >= range[0]) {
      countCorrectPasswords += 1;
    }
  });
  return countCorrectPasswords;
};

const solutionTwo = (
  data: {
    range: string;
    requiredLetter: string;
    password: string;
  }[]
): number => {
  let countCorrectPasswords: number = 0;
  data.forEach((d) => {
    const range: number[] = Array.from(d.range.split("-"), (n) => parseInt(n));
    const splittedPassword: string[] = d.password.split("");
    if (
      (splittedPassword[range[0] - 1] === d.requiredLetter &&
        splittedPassword[range[1] - 1] !== d.requiredLetter) ||
      (splittedPassword[range[1] - 1] === d.requiredLetter &&
        splittedPassword[range[0] - 1] !== d.requiredLetter)
    ) {
      countCorrectPasswords += 1;
    }
  });
  return countCorrectPasswords;
};

console.log(`Solution 1: There are ${solutionOne(data)} valid passwords`);
console.log(
  `Solution 2: There are ${solutionTwo(
    data
  )} valid passwords, according to the new interpretation`
);
