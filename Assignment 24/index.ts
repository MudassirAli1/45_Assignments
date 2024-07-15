// More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings

// • Tests using the lower case function

// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

// • Tests using "and" and "or" operators

// • Test whether an item is in a array

// • Test whether an item is not in a array



// Test for Equality and Inequality
const city1:string="Karachi";
const city2:string="Islamabad"
console.log(city1 !== city2);
console.log(city1 === city2);

// Test for lowercase function
const hello1:string="Hello World";
const hello2:string="hello world"
console.log(hello1.toLowerCase() === hello2)

// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
const num1:number=30
const num2:number=35

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
const x:number=20
const y:number=25
const z:number=30

console.log(x < y && y > x   );
console.log(z < y || y > z );

// Test whether an item is in a array
const items: string []=["Powerbank","Airpods","Phone","Charger"];
console.log("This item in array list:",items.includes("Powerbank"));

// Test whether an item is not in a array
console.log("This item is not in array list:",items.includes("Cable"));


