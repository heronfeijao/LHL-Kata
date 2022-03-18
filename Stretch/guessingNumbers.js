let prompt = require("prompt-sync")();

// code below (replace this example)
let answer = prompt("Guess a number (0-10): ");

const numberVar = Math.round(Math.random() * 10.1);
let guesses = [];
let attempts = 1;

if (Number(answer) === numberVar) {
  console.log(`You got it! You took ${attempts} attempt!`)
  } else {
  while (answer != numberVar) {
    attempts++;
    if (guesses.includes(answer)) {
      console.log('Already guessed!');
    } else if (answer > numberVar) {
      console.log('Too high!');
    } else if (answer < numberVar) {
      console.log('Too low!');
    } else if (isNaN(answer)) {
      console.log('Not a number! Try again!');
    }
    guesses.push(answer);
    answer = prompt("Guess a number (0-10): ");
    if (Number(answer) == numberVar) {
      console.log(`You got it! You took ${attempts} attempts!`)
    }
  }
}