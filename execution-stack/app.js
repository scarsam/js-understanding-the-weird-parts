
// This illustrates the execution stack, the phase after the creation phase. Each function invocation is creating a new execution context.
// Javascript is run synchronous line by line. At the creation phase JS is attaching all of the functions and variables to the global object
// It then runs each line of code line by line. At line 14 we see the first function invocation, this is the other hand will run function b
// Function b is going through line by line inside it's own execution context. The first line is to call function a
// Once function a is called it creates it's own execution context and assign variables and functions to it's environment
// It assigns the variable a with undefined to the execution context of function a and pops off the execution stack.
// The next execution context in the stack is b which will continue were it left off and assign the variable b to it's own execution context
// It then get's pop offed from the execution stack and returns to the global execution context and assigns variable c at line 20.
// Lines: 20 > 16 > 12 > 17 > 21
function a() {
  var a;
}

function b() {
  a();
  var b;
}

b();
var c;
