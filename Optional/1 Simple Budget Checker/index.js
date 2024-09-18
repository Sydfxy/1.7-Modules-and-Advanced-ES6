// include the following line if planning to use prompt function with Node.js:
const prompt = require('prompt-sync')();
const mealCost = parseFloat (prompt("Enter the cost of your meal: "))

// 1. Set up the Meal Cost and Budget 
const budget = 15


//2. Apply the Ternary Operator
// After having the meal cost, we use a ternary operator to check if the meal cost is within budget
// Ternary operator - allows us to do a quick check in a single line of code

const message = mealCost <= budget
    ? "You are within your budget!"
    : "This meal exceeds your budget.";
console.log(message)
