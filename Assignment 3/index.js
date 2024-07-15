"use strict";
// Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
Object.defineProperty(exports, "__esModule", { value: true });
let personname = "Mudassir";
// lowercase
let lowercase = personname.toLowerCase();
console.log(lowercase);
// uppercase
let uppercase = personname.toUpperCase();
console.log(uppercase);
// titlecase
let firstletter = personname.charAt(0).toUpperCase();
let restletters = personname.slice(1).toLowerCase();
let titleCase = firstletter + restletters;
console.log(titleCase);
