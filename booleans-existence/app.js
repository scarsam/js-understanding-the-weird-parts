// This will not print to the console because the value in variable a doesn't exist. This is what happens with coercion.
// The javascript engine will convert the empty value to false, same with an empty string, 0, undefined and null.
// Once we give the variable a value it will print out the console
var a;

if (a) {
  console.log('A does exist')
}