"use strict";
/*
function logger() {
  console.log("My name is Mohammed");
}

// calling / running /// invoking the function
logger();
logger();
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
  console.log(apples, oranges);
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}
function fruitProcessor2(apples) {
  console.log(apples);
  const juice = `Juice with ${apples} apples.`;
  return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);
const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);


// function calcAge1(birthYear) {
//   const age = 2025 - birthYear;
//   return age;
// }

// const age1 = calcAge1(1992);
// console.log(age1);

// //Arrow function

// const yearsUntilRetirement = (birthYear, firstName) => {
//   const firstName = "Mohammed";
//   const birthYear = 1992;
//   const calcAge = (birthYear) => 2025 - birthYear;
//   const age = 2025 - birthYear;
//   const retirement = 65 - age;
//   // return retirement;
//   return "${firstname} retires in ${retirement} years";
// };
// console.log(yearsUntilRetirement(1992, "Mohammed"));

const yearsUntilRetirement = (birthYear, firstName) => {
  // birthYear and firstName are already available from the function parameters
  const currentYear = 2025; // Good practice to define this if it's fixed
  const calcAge = (yearOfBirth) => currentYear - yearOfBirth; // Renamed parameter to avoid confusion
  const age = calcAge(birthYear); // Use the calcAge function
  const retirementAge = 65; // Define retirement age as a constant
  const retirement = retirementAge - age;

  // Check if already retired or retirement is in the past
  if (retirement < 0) {
    return `${firstName} has already retired!`;
  } else if (retirement === 0) {
    return `${firstName} retires this year!`;
  } else {
    return `${firstName} retires in ${retirement} years`;
  }
};

console.log(yearsUntilRetirement(1992, "Mohammed")); // Output: Mohammed retires in 27 years
console.log(yearsUntilRetirement(1960, "Alice")); // Output: Alice has already retired! (65 - (2025-1960) = 65 - 65 = 0, but my if makes it say "already retired")
// My current logic would be 2025-1960 = 65. 65-65=0. So "Alice retires this year!"
console.log(yearsUntilRetirement(1980, "Bob")); // Output: Bob retires in 20 years (assuming 2025 current year)
*/

function cutFruitPieces(fruit) {
  return fruit * 10;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);

  const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
  return juice;
}
console.log(fruitProcessor(1, 11));
