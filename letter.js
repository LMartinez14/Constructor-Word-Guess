// make this file exportable
module.exports = letter;

// create the "letter" constructor
function Letter (letter){
   // boolean value that stores whether that letter has been guessed yet
   this.status = false;
   // string value to store the underlying character for the letter
   this.letter = letter;
   this.space = "_";
}

// create the method to check a guess
checkInput (){
   // return the letter is === letter
   if (this.status){
      return this.letter;
   }
   // return _ if guessed letter is not included
   else (){
      return this.space;
   }
}

// create the method to run guess against hidden word
runUserGuess (){
   // takes a character as an argument and checks it against the underlying character
   if (this.letter === guess){
      // update the stored boolean value to true if it was guessed correctly
      this.status = true;
   }
   else {
      console.log (this. guess + "is not included. Try again!")
   }
};