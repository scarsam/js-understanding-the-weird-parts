// This illustrates that during each function invocation each function creates its own execution context
// This execution context will set its own variables attached to its own execution context
// 2 > undefined > 1

function b() {
  var myVar;
  console.log(myVar)
}

function a() {
  b();
  var myVar = 1;
  console.log(myVar)
}

var myVar = 2;
console.log(myVar);
a();