// Here we console log the executing phase. During the creating phase it sets variables to undefined and functions to it's current value
// During the executing phase, it then executes the function which will print out Called b!.
// It then console logs the variable a which at the first console.log is set to undefined but once it reached the variable assignment var a = 'Hello World!'
// Sets that variable to the value and because of that will print out on the last line 'Hello World!'.
function b() {
  console.log('Called b!');
}
b();

console.log(a);
var a = 'Hello World!';
console.log(a);
