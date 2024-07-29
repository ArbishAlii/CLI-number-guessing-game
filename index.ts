#! /usr/bin/env node
import inquirer from "inquirer";

//Computer will generate a number firstly, then let user guess a number & finally compare both nd show result.


//math.random gives values in b/w 0-1 only
const randomNumber = Math.floor(Math.random() * 10 + 1);


const answers = await inquirer.prompt([
    {
        name: "UserGuessedNumber",
        type: "number",
        message: "Please guess a number between 1-10:",
    },
]);

if (answers.UserGuessedNumber === randomNumber) {
    console.log("Congratulations! You guessed the right number.");

} else {
    console.log("You guessed wrong number");

}