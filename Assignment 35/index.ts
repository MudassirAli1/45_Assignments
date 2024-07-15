// Animals: Think of at least three different animals that have a common characteristic. Store the names of these animals in a list, and then use a for loop to print out the name of each animal. • Modify your program to print a statement about each animal, such as A dog would make a great pet. • Add a line at the end of your program stating what these animals have in common. You could print a sentence such as Any of these animals would make a great pet!

//1st Step
let animals: string [] = ["Horse" , "Dogs" , "Pandas"]

console.log(`List of Animals:`)
for(let i=0;i<animals.length;i++){
    console.log(`${animals[i]}`)
}
//2nd Step 
console.log(`\tStatement about each animal\n`)

for(const animal of animals ){
    if(animal === `Dogs`){
        console.log(`A ${animal} would make a great pet.`)
    }
    else if(animal === `Horse`){
        console.log(`A ${animal} is more loyal with their owner.`)
    }
    else if(animal === `Pandas`){
        console.log(`A ${animal} are beautiful and friendly animal.`)
    }
}

console.log(`\n\tWhat these animals have in commom?\n`);
console.log(` ALL of these animals would make a great pet! And All are the furry animals that like being around people.`)