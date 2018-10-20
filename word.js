// depends on the Letter constructor
let letter = require ("./letter");

// create an object representing the current word the user is attempting to guess.

//That means the constructor should define:

// An array of new Letter objects representing the letters of the underlying word
// create the word array to pull from
const wordsArray = [
   "marriage", "puppy", "toys", "movement", "pediasure", "marijuana", "meteorologist", "hormones", "supplement", "protein", "encouragement", "beginning", "vegetable", "executive", "tolerate", "texture", "necessary", "outcome", "sucess", "transition", "change", "development", "education", "college", "document", "target", "nutrition", "occupation", "evaluation", "psychology", "biology", "assessment", "technology", "professional", "anatomy", "physiology",
   ];

// A function that returns a string representing the word. This should call the function on each letter object (the first function defined in Letter.js) that displays the character or an underscore and concatenate those together.

// A function that takes a character as an argument and calls the guess function on each letter object (the second function defined in Letter.js)