// Execution context is created (Function)
// Variable environment, this keyword, outer environment, arguments keywords
// Arguments - the parameters you pass to a function
// Javascript gives you a keyword of the same name which contains them all

// During the execution phase the of the function it sets up memory spaces for each parameter, in this case undefined
function greet(firstName, lastName, language) {

  language = language || 'es'; // a workaround to set default values, is replaces in es6

  if (arguments.length === 0) {
    console.log('Missing parameters');
    return;
  }

  console.log(firstName);
  console.log(lastName);
  console.log(language);
  console.log(arguments); // Array-like, returns all the values from the parameters when invoking the function
}
greet(); // this would give an error in other languages, this returns undefined for each console.log

greet('John'); // passing in the arguments left to right (John, undefined, undefined)
greet('John', 'Doe'); // passing in the arguments left to right (John, Doe, undefined)
greet('John', 'Doe', 'en'); // passing in the arguments left to right (John, Doe, en)