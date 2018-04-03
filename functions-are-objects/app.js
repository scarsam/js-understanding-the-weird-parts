// First class functions === other things you can do with other types (strings, numbers, booleans..) you can do with functions
// Assign them to variables, pass them around and create them on the fly
// You can attach Primitives, objects and other functions to functions (It's a special kind of object)
// A function could have a name (optional) can be anonymous
// The function code we write gets placed into a special property of the function object. It's is invocable();

function greet() {
  console.log('Hi');
}

// Added a property to an function
greet.language = 'english';

// returns a text of the function itself
console.log(greet);

// if you specify the property you'll get the expected return value
console.log(greet.language);

// The function gets placed in the global execution context with the name greet
// It also has the code (console.log('Hi');) this code will run once we invoce the function greet();

// Functions are objects