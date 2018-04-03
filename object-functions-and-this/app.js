function a() {
  console.log(this); // global object (window)
  this.newVariable = 'hello'; // sets the variable newVariable on the global object
};

var b = function() {
  console.log(this); // also points to the global object (window)
};

a(); // console.logs the global object (window)
console.log(newVariable); // this now accessible because of the invocation of the function a();

b(); // console.logs the global object (window)


var c = {
  name: 'The c object',
  log: function() {
    var self = this; // this is pointing to the same object in the memory (by reference)

    self.name = 'Updated c object'; // mutates the object name property
    console.log(self); // this is the c object

    var setName = function(newName) {
      // If using this instead of self, this is pointing to the global object
      // So by using the variable self, we take advantage of the lexical environment.
      // self is not defined inside the function so it goes out to look in the outer scopes to find the variable self
      // self could be find in the outer scope and it's pointing to this === the object it self
      self.name = newName;
    };
    setName('Updated again! The c object');
    console.log(self)
  }
};

c.log(); // a method attached to an object, the this keyword is equal to the object it's inside of
