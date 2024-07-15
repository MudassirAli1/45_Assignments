"use strict";
// Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
// • Make a array of your three favorite fruits and call it favorite_fruits.
Object.defineProperty(exports, "__esModule", { value: true });
// • Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!
let favourite_Fruits = ["Cherry", "Mango", "PineApple", "Grapes", "Strawberry"];
if (favourite_Fruits.includes("Mango")) {
    console.log("I really like Mango");
}
if (favourite_Fruits.includes("Cherry")) {
    console.log("I really like Cherry");
}
if (favourite_Fruits.includes("PineApple")) {
    console.log("I really like PineApple");
}
if (favourite_Fruits.includes("Grapes")) {
    console.log("You really like bananas!");
}
if (favourite_Fruits.includes("Strawberry")) {
    console.log("You really like bananas!");
}
