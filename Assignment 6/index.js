"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.
let personname = "\t  Mudassir \n";
console.log("Name with white spaces", personname);
let strippedName = personname.trim();
console.log("strippedName:", strippedName);
