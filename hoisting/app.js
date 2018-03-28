// variables and functions are initialized in memory during the creating of the executing context
// functions are set with their body as a whole while variables are first initialized with the undefined value, that's why b(); works and not console.log(a)
console.log(a); // undefined
b(); // called b

var a = 'Hello World!';
function b() {
  console.log('called b')
}