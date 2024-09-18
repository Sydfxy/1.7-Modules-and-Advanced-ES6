// include the following line if planning to use prompt function with Node.js:
const prompt = require('prompt-sync')();

// 1. Define the function and set up parameters
// Start by creating a function name checkDailyBudget with 2 parameters (An array of meal costs or a daily budget)
function checkDailyBudget( [breakfast, lunch, dinner], budget){
    // Destructuring the meal costs from the array
    // Calculate the total cost of all meals
    const totalCost = breakfast + lunch + dinner

    //Check if the total cost is within the budget using ternary operator
    const message = totalCost <= budget 
    ? "You stayed within your daily budget!" 
    : "You exceeded your daily budget!";

    // Return the message
    console.log(message)
}
// 2. Define the logic inside the function
// Inside the function, check if the total cost of meals is less than or equal to the daily budget

//Example usage:
const meals = [5,10,7]
const dailyBudget = 25

checkDailyBudget(meals, dailyBudget)