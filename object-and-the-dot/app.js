// An way to set a new object, there is other more preferred ways of doing this today
var person = new Object();

// Brackets operator, is accessing the property based on the string, these can be access dynamically through a variable
person['firstName'] = 'Sam';
person['lastName'] = 'Ojling';

var firstNameProperty = 'firstName';
console.log(person);
console.log(person[firstNameProperty]);

// A more readable way is to use the dot operator, first we have the object and then we specify which property we want to access
console.log(person.firstName);
console.log(person.lastName);

// Here we set a nested object inside the person object.
// Here we set a new property through dot operator instead of the bracket operator
person.address = new Object();
person.address.street = '1325 mason st';

// Access the property sitting in memory of the address object sitting in memory of the person object.
console.log(person.address.street);




