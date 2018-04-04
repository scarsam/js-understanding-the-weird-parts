// IIFE
// An IIFE creates its own variable environment upon invocation
// This makes IIFE an great option when having multiple variables that you don't want to get affected by the function variables
var firstname = 'John';

(function(name) {

  var greeting = 'Hello';
  console.log(greeting + ' ' + name);

}(firstname)); // IIFE























