// The file containing the logic for the course of the game, which depends on `Word.js` and:

// * Randomly selects a word and uses the `Word` constructor to store it

// * Prompts the user for each guess and keeps track of the user's remaining guesses

// 3. `Letter.js` *should not* `require` any other files.

// 4. `Word.js` *should only* require `Letter.js`
var Word = require("./Word")
const inquirer = require("inquirer")

// Select a random word from the array words , "Coding Boot Camp", "Purple Elephant", "Bad To The Code", "Epstein Didnt Kill Himself"
var randomizer = function () {
    var words = ["JavaScript"]
    RN = Math.floor(Math.random() * 1)
    return words[RN]
}
// set word to guess as defined by randomizer 
var newWord = new Word(randomizer())
console.log("Welcome to Word Guess! \nInput letters through the terminal and try to guess the word before you run out of attempts!")
var spacer = "____________________________________________\n"
var failz = 9
var wordz = 0
start = function () {
    inquirer.prompt([
        {
            type: "input",
            name: "userGuess",
            message: "Guess a letter!"
        }

    ]).then(function (res) {
        function alert(guess) {
            // start by setting the correct guess alert to false.
            logCorrect = false;
            guess = res.userGuess;
            // ask the word if anything changed. 
            length = newWord.lettObjs.length;
            for (let i = 0; i < length; i++) {

                if (newWord.guess(guess)) {
                    logCorrect = true;
                    newWord.guess(guess);
                }
            }
            // Tells the user what they've pressed, then prints the word with new letters filling blanks 
            console.log(spacer)
            // var GuessAlert = function (guess, passFail){
            //     this.guess = guess
            //     console.log("You guessed: " + guess)
            //     newWord.printWord()
            //     console.log(spacer + "\n YOU GUESSED " + passFail +"!!!")
            //     console.log(spacer)
            // }
            if (logCorrect === true) {
                console.log("You guessed: " + guess)
                newWord.guess(guess)
                newWord.printWord()
                // if anything was updated, alert the user they guessed correct.
                console.log(spacer + "\n YOU GUESSED CORRECT!!!")
                // if not, tell them how many attempts they have remaining..
            } else {
                // Tells the user what they've pressed, then prints the word with new letters filling blanks 
                console.log("You guessed: " + guess)
                newWord.guess(guess)
                newWord.printWord()
                console.log(spacer)
                console.log("BUMMER! YOU HAVE " + failz + " MORE FAILZ")
                failz--
               
            }
             if (failz < 1) {
                    let failz = 9
                    console.log("Awh man! you burnt out! \n You guessed " + wordz + " words correctly")
                }
        }
        alert()
        start()
    })
};
start();

