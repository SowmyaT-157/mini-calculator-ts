console.log("mini calculator......")

import promptSync from 'prompt-sync';
const prompt = promptSync();

const num1:number = Number(prompt("enter a first number:"))
const num2:number = Number(prompt("enter a second number:"))

if (isNaN(num1) || isNaN(num2)){
    console.log("Invalid input")
}
else{
   const sum:number = num1 + num2
   console.log(`The sum is ${sum}`)
}

import promptSync from 'prompt-sync';
const prompt = promptSync();

const num1 = parseFloat(prompt('Enter first number: '));
const num2 = parseFloat(prompt('Enter second number: '));

function subtract(a: number, b: number): number {
  return a - b;
}

const result = subtract(num1, num2);
console.log(`Result: ${result}`);