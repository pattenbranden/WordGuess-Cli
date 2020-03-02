// Contains a constructor, Word that depends on the Letter constructor. This is used to create an object representing the current word the user is attempting to guess. That means the constructor should define:

//   * An array of `new` Letter objects representing the letters of the underlying word

//   * A function that returns a string representing the word. This should call the function on each letter object (the first function defined in `Letter.js`) that displays the character or an underscore and concatenate those together.

//   * A function that takes a character as an argument and calls the guess function on each letter object (the second function defined in `Letter.js`)


var Letter = require("./Letter");

var Word = function (word) {
    this.word = word
    this.lettObjs = []
    // setup objects array with new Letters objects 
    for (let i = 0; i < this.word.length; i++) {
        newLett = new Letter(this.word.charAt([i]));
        this.lettObjs.push(newLett);
    }
    // prints the word with blanks determined by each letter's display method 
    this.printWord = function () {
        var hiddenWord = ""
        for (let i = 0; i < this.lettObjs.length; i++) {
            hiddenWord += this.lettObjs[i].checkBeenGuessed();
        }
        console.log(hiddenWord)
        return hiddenWord
    },
        this.guess = function (c) {
                logCorrect = false;
            // runs a for loop to run every letter object's correctGuess method
            for (let i = 0; i < this.lettObjs.length; i++) {
                this.lettObjs[i].correctGuess(c);
                if (this.lettObjs[i].letter.toLowerCase() === c) {
                    logCorrect = true;
                }
            }
            if (logCorrect === true) {
                return true
            }
        }
}
module.exports = Word, Letter