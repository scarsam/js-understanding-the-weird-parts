// an expression is a unite of code that results in a value (It doesn't have to save to a variable)
// A statement just do "work"

// Expressions:
var a;
// This returns 3, = operator returns a value
a = 3;
// returns 3, + operator returns a value. Even though we don't assign it to a variable it still returns a value.
1 + 2;
// This returns an object
var b = { greeting: 'hi' };
// These three examples return a value and is therefor an expression

// Statements
// the if is a statement and inside the parenthesis is an expression, a === 3 returns either true or false
if (a === 3) {

}

// Function statement
// This doesn't return a value until it gets invoked
// It gets hoisted (put into memory during the creation phase)
// It's available a head of time, you can invoke it before you declare it.
// Object in memory
// name is greet
// code is console.log('Hi');
// once it you call it invoke the code part in this case console.log('Hi')
function greet() {
  console.log('Hi');
}
greet();

// Function expression
// During the creation phase it sets the variable to undefined, so function expressions doesn't get hoisted
// Object in memory
// name is anonymous
// code is console.log('Hi');
// anonymousGreet(); points to the code
// This results in a value, a new function object during the execution phase
var anonymousGreet = function() {
  console.log('Hi');
}
anonymousGreet();

// First class functions
// Functional programming
// Functions that get passed around and created on the fly
// Pass a function to a function to the variable a
function log(a) {
  a();
}
log(function() {
  console.log('Hi')
});



