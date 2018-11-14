var Letter = require("./Letter.js");


function Word() {
    this.wordArray = [];
    
    this.createWord = function(word) {
     for (i in word) {
         this.wordArray.push(new Letter(word[i]));
     }
    }

    this.returnAnswer = function(guess) {
        var concatResult = "";
        for (i in this.wordArray) {
         this.wordArray[i].rightWrong(guess);
         concatResult = concatResult + this.wordArray[i].show();
        }
        console.log(concatResult);
    }

   
}


module.exports = Word;