// include the following line if planning to use prompt function with Node.js:
// const prompt = require('prompt-sync')();

// 1. Traditional Swap using a temporary variable

// let a = 5
// let b = 10

// let temp = a
// a = b
// b = temp

// console.log(`a: ${a}, b: ${b}`)

// 2. Swap Variables using Array Destructuring
// Array destructuring provides a shorthand way to swap two variables without the need for an extra temporary variable

let a = 5;
let b = 10;

// use array destructuring to swap the variables
[a,b] = [b,a]

console.log(`a: ${a}, b: ${b}`)

let first = "apple"
let second = "orange"

[first, second] = [second, first]

console.log(`First: ${first}, Second: ${second}`)


