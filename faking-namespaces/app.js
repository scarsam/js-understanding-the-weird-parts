var greet = 'Hello!';
var greet = 'Hola!'; 

console.log(greet);

// This is a way to avoid namespace collisions. Here we use an object as a container to our variables, methods and properties
var english = {};
var spanish = {};

english.greet = 'Hello!';
spanish.greet = 'Hola!';

console.log(english.greet);
console.log(spanish.greet);