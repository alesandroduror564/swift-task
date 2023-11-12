/* Filename: ComplexAlgorithm.js */

// This code demonstrates a sophisticated algorithm that performs a complex mathematical operation
// It calculates the factorial of a given number using a recursive approach

function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

function calculateComplexAlgorithm(input) {
  if (input < 0) {
    throw new Error("Invalid input! Please provide a non-negative number.");
  } else if (input !== Math.floor(input)) {
    throw new Error("Invalid input! Please provide an integer.");
  } else {
    const result = factorial(input);
    console.log("The factorial of", input, "is:", result);
  }
}

// Execution starts here
const inputNumber = 5;
calculateComplexAlgorithm(inputNumber);
console.log("Complex algorithm execution completed.");