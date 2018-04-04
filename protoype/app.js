// Prototype chain. Object have a special reference to find properties and methods called the prototype chain which can be shared by objects
var person = {
  firstName: 'Default',
  lastName: 'Default',
  getFullName: function() {
    return this.firstName + ' ' + this.lastName;
  }
};



var a = {}; // a.__proto__ empty object
var b = function() {}; // b.__proto__ empty function object
var c = []; // c.__proto__ []