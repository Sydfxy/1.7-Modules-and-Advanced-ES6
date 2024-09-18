// include the following line if planning to use prompt function with Node.js:
const prompt = require('prompt-sync')();

// 1. Define the user settings object
const userSettings = {
    theme: null,
    fontSize: "Large",
    notifications: undefined
}

//2. Nullish Coalescing Operator ("??")
// This operator allows us to set default values for properties that are "null" or "undefined"
// This operator specifically checks for "null" or "undefined" without treating other falsy values as missing data.
// This operator is particularly useful when you want to provide default values for settings, configurations, or optional parameters, ensuring that your program doesn’t break due to missing or null values.
const theme = userSettings.theme ?? "light"
const fontSize = userSettings.fontSize ?? "medium"
const notifications = userSettings.notifications ?? true

console.log(`Theme: ${theme}`);
console.log(`Font Size: ${fontSize}`);
console.log(`Notifications: ${notifications}`);