// create the letter constructor
function Letter (letter){
   this.status = false;
   this.letter = letter;
   this.space = "_";
}

// create the function to check a guess
checkInput (){
   if (this.status){
      return this.letter;
   }
   else (){
      return this.space;
   }
}




// make this file exportable
module.exports = letter;