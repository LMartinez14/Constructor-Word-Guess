// require word.js
let word = require ("./word");

// create the game logic
// es6 class is Capitolized
class WordGuessGame {

   // constructor for player data
   constructorWordGuess (){
      // points starts at 0
      this.points = 0;
      // insert word to guess
      this.guessThisWord = " ";
      // array to hold user's guesses
      this.usedUserLetters = [] 
   }

   // constructor to pull words to guess
   createNewGame(){
      // The file containing the logic for the course of the game, which depends on Word.js
      let wordJS = require("./word");
      let pullRandomWord = wordsArray[Math.floor(math.random() * wordArray.length)];
      console.log ("Let the games begin.");
      this.currentWord = new wordJS (pullRandomWord)
      this.currentWord.spliceLetters()
      this.currentWord.attemptsRemaining()
      this.currentWord.displayLetters()
      this.userInput
   }

   // qualify user's guesses and attempts
   userInput(){
      // call on npm inquirer
      let inquirer = require("inquirer");
      // inquirer prompt method
      inquirer.prompt ([{
         message: "Pick a letter, any letter.",
         type: "input",
         validate: this.validateUserInput
      }]). then(
         letter => {
            let input = letter.guess.toLowerCase();
            // if/else to determine if input has been used or not
            if (this.usedUserLetters.includes(input)){
               console.log(`
               ${input} has already been used. Try another letter...
               letters used: ${this.usedUserLetters}
               `);
            }
            // push used letters into array "usedUserLetters"
            this.usedUserLetters.push(input);
            this.currentWord.acceptUserInput();
            this.currentWord.checkIfLetterIncluded();
            this.currentWord.displayLetters();
            this.whatsLeftInWord();
         }
      );
   }

   // check status of the word
   whatsLeftInWord(){
      if (this.currentWord.status) {
         this.points ++;
         console.log ("You have " + ${this.points} + "points.")
         // array of used letters
         this.usedUserLetters = [];
         this.createNewGame();
      }
      else {
         // check attempts remaining
         if (this.currentWord..attempts === 0)(
            console.log ("game over. the word was: " + ${this.currentWord} + ".");
            return this.resetWordGuess();
         )
      }
   }

   resetWordGuess (){
      let reset = require("inquirer-confirm");
      confirm ("care for another round, old sport?")
      // if yes
      .then(() => {
         // create a new array
         this.usedUserLetters = [];
         this.createNewGame();
      }, 
      // if no
      function cancelled(){
         console.log ("See ya later, alligator.")
      }
      );
   }
 


}

// start new game
// craete new game by creating a new variable to call game
const newGame = new WordGuessGame();
newGame = createNewGame();