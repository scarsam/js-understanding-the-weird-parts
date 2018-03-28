// This will illustrate that variables gets set to the value undefined during the creating of the executing context
// Here we don't give the variable `a` a value and it will get assigned undefined which later will get logged to the console
var a;
console.log(a);

if (a === undefined) {
  console.log('A is undefined')
} else {
  console.log('A is defined')
}
