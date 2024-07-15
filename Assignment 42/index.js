"use strict";
// Great Magicians: Start with a copy of your program from Exercise 41. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.
Object.defineProperty(exports, "__esModule", { value: true });
// Define the list of magicians
let magiciansNames = ["Albert", "Jhonson", "Bruce", "Patrick", "Steve", "Robert", "Mike"];
// Function to show magicians
function showMagicians(magicians) {
    magicians.forEach(magician => console.log(magician));
}
// Function to make magicians great
function makeGreat(magicians) {
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = "the Great " + magicians[i];
    }
}
// Call makeGreat to modify the list of magicians
makeGreat(magiciansNames);
// Call showMagicians to display the modified list
showMagicians(magiciansNames);