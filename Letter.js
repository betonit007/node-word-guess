


function Letter(letter) {
    this.dash = "-";
    this.correct = false;
    this.letter = letter;
    this.lowerLetter = letter.toLowerCase();
    if (this.letter === " ") {
        this.correct = true;
    }

    this.show = function() {
        if (this.correct) {
          return(this.letter);
        }
        else{
          return(this.dash);
        }
        }
    this.rightWrong = function(guess) {
        
        if (this.letter === guess || this.lowerLetter === guess) {
            this.correct = true;
        }
    }
    }

module.exports = Letter;