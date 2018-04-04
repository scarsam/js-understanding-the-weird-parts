// Immediate invoked function expressions (IIFE's)

// function statement starts with the word function and doesn't return a value until it gets invoked
// When the creation phase runs it puts the function into memory
// When the execution context sees the function it doesn't do anything until it gets invoked greet('Sam') (It's already in memory)
function greet(name) {
  console.log('Hello ' + name);
}
greet('Sam');

// function expression, it's not put into memory during the creation phase, but it's during the execution phase
// When it hits line 13, it creates the function object on the fly and stores it in the variable
// Then you can invoke it by invoking the variable that is pointing to that memory location
var greetFunc = function(name) {
  console.log('Hello ' + name);
};
greetFunc('Sam');

// Immediately invoked function expression
// The (); at the end is calling the function once it hits the function
// This will return the string 'Hello Sam'
var greeting = function(name) {
  return 'Hello ' + name
}('Sam');

// Another way to create an IIFE is to wrap the function in a parentheses () to tell the parser it's a function expression
// Because it knows it's an function expression it creates the function object on the fly, we can then invoke it directly.
(function(name) {
  var greeting = 'Hello ';
  console.log(greeting + name);
}('Sam'));