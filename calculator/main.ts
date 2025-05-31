console.log("mini calculator......")

import promptSync from 'prompt-sync';
const prompt = promptSync();

const num1 = parseFloat(prompt('Enter first number: '));
const num2 = parseFloat(prompt('Enter second number: '));

function subtract(a: number, b: number): number {
  return a - b;
}

const result = subtract(num1, num2);
console.log(`Result: ${result}`);