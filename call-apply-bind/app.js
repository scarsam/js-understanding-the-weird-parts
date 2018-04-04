// During function execution context we get a variable environment, 'this', outer environment
// Functions also comes with the call(), apply() and bind() methods
// These are just methods on the function object!

var person = {
  firstName: 'Sam',
  lastName: 'Ojling',
  getFullName: function() {
    var fullName = this.firstName + ' ' + this.lastName;
    return fullName;
  }
};

// Without bind in this case, this points to the global execution context
// We can call bind on the function to make a copy of the function that will be bind to the object we pass in.
// Either we bind the object right on the function itself
var logName = function(lang1, lang2) {
  console.log('Logged: ' + this.getFullName()); // this becomes person.getFullName()
  console.log('Arguments: ' + lang1 + ' ' + lang2)
}.bind(person);

logName('en', 'es');

// Or we pass the returned function that is bind to th object and later invoke that function
var logPersonName = logName.bind(person);
logPersonName('en', 'es');

logName.call(person, 'en', 'es'); // call actually calls the function and passes in the object which is 'this' keyword. Call doesn't make a copy like bind does!
logName.apply(person, ['en', 'es']); // apply does the exact same thing except it wants an array of arguments

// Function borrowing
var person2 = {
  firstName: 'Jane',
  lastName: 'Doe'
};
// Here we set the this (firstName, lastName) to the person2 object
// We do function borrowing, we wanted to use the method getFullName on our person2 object so we apply person2 object
// to the object with that function. You can grab methods from other objects if you have similar properties.
person.getFullName.apply(person2);

// Function currying
// Creating a copy of a function but with some preset parameters (useful in mathematical situations)
function multiply(a, b) {
  return a*b;
}

var multiplyByTwo = multiply.bind(this, 2);

// This creates
// function multiplyByTwo(b) {
//   a = 2;
//   return a*b;
// }

// Invoking this function, let you set an argument which will point to the second parameter in this case the variable b
// 2 * 4 = 8
multiplyByTwo(4); // 8

var multiplyByXandX = multiply.bind(this);
multiplyByXandX(5, 5); // 25