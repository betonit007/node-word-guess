
var Word = require("./Word.js");
var exclamation = require('exclamation');
var inquirer = require('inquirer');
//////////Declaring Variables////////////////////////
var wordNotGuessed = true;
var guessesRemaining = 20;
var round = 1;

console.log("\nWelcome Caped Crusader!\nCan you guess what Robin will say next before Joker takes away all your guesses?")
console.log("Hint: He uses the word 'Holy' A LOT!\n");
var batPhrase = exclamation.random();
var nextBatPhrase = new Word();
    nextBatPhrase.createWord(batPhrase);
    nextBatPhrase.returnAnswer();

makeGuess();

//////////////////Functions//////////////////////////
function makeGuess() {

    if (guessesRemaining > 0) {
        inquirer.prompt([
            {
          name: "letterGuessed",
          message: "Guess a letter!"
            }
        ]).then(function(answer) {

            if ((batPhrase.indexOf(answer.letterGuessed) < 0 ) && (batPhrase.indexOf(answer.letterGuessed.toUpperCase()) < 0 ))
            {
                guessesRemaining--;
                if (guessesRemaining === 0) {
                    gameOver();
                }
                if  (guessesRemaining > 0) {
                  console.log('\nWrong, you have ' + guessesRemaining + ' guesses remaining.\n');
                }
            }

            nextBatPhrase.returnAnswer(answer.letterGuessed);
            
            var rightCount = 0;
            
            for (i in nextBatPhrase.wordArray) {
                if (nextBatPhrase.wordArray[i].correct) {
                  rightCount++;
                }
            }
            if (rightCount === batPhrase.length) {
                wordNotGuessed = false;
            }

            if(wordNotGuessed) {
              makeGuess();
            }
            else {
                nextRound();
            }
        });
    }
};

function gameOver() {
    console.log("GAME OVER!");
    console.log("The correct answer was " + batPhrase + ". Better luck next time.")
}

function nextRound() {
    batPhrase = exclamation.random();
    console.log("\n" + batPhrase + "! You got it!\n");
    round++;
    console.log("Round: " + round);
    batPhrase = exclamation.random();
    nextBatPhrase = new Word();
    nextBatPhrase.createWord(batPhrase);
    nextBatPhrase.returnAnswer();
    wordNotGuessed = true;
    makeGuess();
}

