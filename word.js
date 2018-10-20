// depends on the Letter constructor
let letter = require ("./letter");

//That means the constructor should define:

// create the word array to pull from
const wordsArray = [
   "marriage", "puppy", "toys", "movement", "pediasure", "marijuana", "meteorologist", "hormones", "supplement", "protein", "encouragement", "beginning", "vegetable", "executive", "tolerate", "texture", "necessary", "outcome", "sucess", "transition", "change", "development", "education", "college", "document", "target", "nutrition", "occupation", "evaluation", "psychology", "biology", "assessment", "technology", "professional", "anatomy", "physiology",
   ];

// create an object representing the current word the user is attempting to guess.
// using classes and constructors
class CurrentWord{
   constructor (wordToGuess){
      // start as false
      this.status = false;
      // new word to fill in
      this.wordToGuess = wordToGuess;
      // parse letters from word
      this.parseWord = [ ];
      // array to hold guesed letters
      this.userGuesses = 0;
   }

   parseWord(){
      let array = this.wordToGuess.split(" ");
      array.forEach(1 => {
         let letterToGuess = new letter(1);
         this.parseWord.push(letterToGuess);
         
      });

      return this;
   }

   attemptsLeft(){
      this.userGuesses = this.wordToGuess.length * 6;
      console.log ("you have" + ${this.userGuesses} + "remaining.");
      return this;
   }

   // validate the inputs from user
   displayLetters(){
      let displayLetters = " ";
      this.parseWord.forEach(Object => {
         return displayLetters += " " + Object.
   }

      
}


// An array of new Letter objects representing the letters of the underlying word

// A function that returns a string representing the word. This should call the function on each letter object (the first function defined in Letter.js) that displays the character or an underscore and concatenate those together.

// A function that takes a character as an argument and calls the guess function on each letter object (the second function defined in Letter.js)