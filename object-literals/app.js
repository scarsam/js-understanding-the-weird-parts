// Object literal === new Object();
// When the parser sees the curly braces it parses it as an object
var sam = {
  // Name value pairs
  firstName: 'Sam',
  lastName: 'Ojling',
  address: {
    street: '1325 Mason st',
    city: 'San Francisco'
  }
};

// This function expects and property on some sort of object that will get passed in
function greet(person) {
  console.log('Hi' + person.firstName);
}

// You can pass in an object in the function call
greet(sam);
// You can also create an object on the fly as you call the function
greet( {firstName: 'Karl'} );

// Add a new nested object inside the sam object
sam.address2 = {
  street: '123 Mason st',
  city: 'NY'
};