"use strict";
// More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings
Object.defineProperty(exports, "__esModule", { value: true });
// • Tests using the lower case function
// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
// • Tests using "and" and "or" operators
// • Test whether an item is in a array
// • Test whether an item is not in a array
// Test for Equality and Inequality
const city1 = "Karachi";
const city2 = "Islamabad";
console.log(city1 !== city2);
console.log(city1 === city2);
// Test for lowercase function
const hello1 = "Hello World";
const hello2 = "hello world";
console.log(hello1.toLowerCase() === hello2);
// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
const num1 = 30;
const num2 = 35;
// Equality
console.log(num1 === num2);
// Inequality
console.log(num1 !== num2);
//Greater than
console.log(num1 > num2);
//Less than
console.log(num1 < num2);
// Greater than or Equal to
console.log(num1 >= num2);
//Less than or Equal to
console.log(num1 <= num2);
// Test using "and" and "or" operators
const x = 20;
const y = 25;
const z = 30;
console.log(x < y && y > x);
console.log(z < y || y > z);
// Test whether an item is in a array
const items = ["Powerbank", "Airpods", "Phone", "Charger"];
console.log("This item in array list:", items.includes("Powerbank"));
// Test whether an item is not in a array
console.log("This item is not in array list:", items.includes("Cable"));
