// By value (primitives)
var a = 3;
var b;
b = a;
a = 2;
// b = a is setting a copy of a to variable b
// once that is done, they're on their own
// so on a = 2 won't affect the variable b
console.log(a); // 2
console.log(b); // 3

// By reference (all objects, including functions)
var c = { greeting: 'Hi' };
var d;

// They're now pointing to the same location in the memory
d = c;
// Mutate the property value of greeting (To change something) Immutable (Can't be changed)
c.greeting = 'Hello';

console.log(c); // 'Hello'
console.log(d); // 'Hello'

// By reference (even as parameters)
function changeGreeting(obj) {
  obj.greeting = 'Hola'; // mutate
}
changeGreeting(d);

console.log(c); // 'Hola'
console.log(d); // 'Hola'

// equals operator sets up a new memory space (new address)
c = { greeting: 'Howdy' }; // This is a brand new object getting created in the memory
console.log(c); // 'Howdy'
console.log(d); // 'Hola'