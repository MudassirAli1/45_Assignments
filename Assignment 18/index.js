"use strict";
//Think of at least five places in the world you’d like to visit.
// • Store the locations in a array. Make sure the array is not in alphabetical order.
Object.defineProperty(exports, "__esModule", { value: true });
// • Print your array in its original order.
// • Print your array in alphabetical order without modifying the actual list.
// • Show that your array is still in its original order by printing it.
// • Print your array in reverse alphabetical order without changing the order of the original list.
// • Show that your array is still in its original order by printing it again.
// • Reverse the order of your list. Print the array to show that its order has changed.
// • Reverse the order of your list again. Print the list to show it’s back to its original order.
// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
let myplaces = ["Karachi", "Lahore", "Quetta", "Peshawar", "Islamabad"];
console.log(myplaces);
// making a copy of an array
let copyofArray = myplaces.slice();
let sortedArray = copyofArray.sort();
console.log(sortedArray);
// Printing orignal array
console.log(myplaces);
// Reversing orignal array
let copyofarry2 = myplaces.slice();
let reverseoriArray = myplaces.reverse();
console.log(reverseoriArray);
// Printing Orignal Array
console.log(reverseoriArray);
// reverse the order of orignal array
let reverseoriArray2 = myplaces.reverse();
console.log(reverseoriArray2);
let againreverse = reverseoriArray2.reverse();
console.log(againreverse); //same as orignal array
// sorting Orignal Array 
let sortoriArray = myplaces.sort();
console.log(sortoriArray);
let reversesortedArray = sortoriArray.reverse();
console.log(reversesortedArray);
