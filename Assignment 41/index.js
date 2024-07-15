"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
let magiciansNames = ["Albert", "Jhonson", "Bruce", "Patrick", "Steve", "Robert", "Mike"];
function show_magicians(magician) {
    for (let i = 0; i < magiciansNames.length; i++) {
        console.log(magiciansNames[i]);
    }
}
show_magicians(magiciansNames);
