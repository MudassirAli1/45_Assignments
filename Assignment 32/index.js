// Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
// • Make a list of five or more usernames called current_users.
// • Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.
// • Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.
// • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.
import chalk from "chalk";
let current_users = [
    "Mudassir",
    "Muneeb",
    "Abeera",
    "Fatima",
    "Fazil",
    "sneha",
];
let new_users = [
    "Fatima",
    "Hammad",
    "Mudassir",
    "Zunaira",
    "Tariq",
    "Sneha",
];
function checkUsersNames(current_users, new_users) {
    let lowercase_Current_users = current_users.map((users) => users.toLowerCase());
    for (let newUsers of new_users) {
        let lowercase_new_users = newUsers.toLowerCase();
        if (lowercase_Current_users.includes(lowercase_new_users)) {
            console.log(chalk.redBright(`Username "${newUsers} is already Taken . Please Enter a new Username."`));
        }
        else {
            console.log(chalk.greenBright(`Username "${newUsers}" is Available.`));
        }
    }
}
checkUsersNames(current_users, new_users);
