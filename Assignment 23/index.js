"use strict";
// Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test. Your code should look something like this:
Object.defineProperty(exports, "__esModule", { value: true });
// let car = 'subaru';
// console.log("Is car == 'subaru'? I predict True.")
// console.log(car == 'subaru')
// • Look closely at your results, and make sure you understand why each line evaluates to True or False.
// • Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.
let favFruit = 'Mango';
//1st Test
console.log("is favFruit == 'Mango'? I predict true");
console.log(favFruit == 'Mango');
//2nd Test
console.log("is favFruit.toUpperCase == `Mango`? I predict false ");
console.log(favFruit.toUpperCase() == "Mango");
//3rd Test
console.log("is favFruit.length == `5`? I predict true");
console.log(favFruit.length == 5);
//4th Test
console.log("is favFruit == `Apple`? I predict false");
console.log(favFruit == `Apple`);
//5th Test
console.log("is favFruit.length != `6`? I predict true");
console.log(favFruit.length != 6);
//6th Test
console.log("is favFruit != `Mango`? I predict false");
console.log(favFruit != "Mango");
//7th Test
console.log("is favFruit.charAt(0) == `M`? I predict true");
console.log(favFruit.charAt(0) == "M");
//8th Test
console.log("is favFruit === undefinded? I predict false");
console.log(favFruit === undefined);
//9th Test
console.log("is favFruit != `Apple`? I predict true");
console.log(favFruit != "Apple");
//10th Test
console.log("Does favFruit start with `han`? I predict false");
console.log(favFruit.startsWith(`han`));
