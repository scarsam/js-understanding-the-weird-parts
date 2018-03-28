// This is an illustration on how the scope chain works. It's important to note where each function sits lexically (physically)
// In this case function b sits on the global scope. It's defined at the top at the same scope level as myVar = 1, therefor when
// Function b doesn't find the value of myVar inside it's own variable environment it will go up/down the stack until it finds it.
// In this case to the global variable environment
// Once another function lexically is inside another function it's outer lexical environment is the outer lexical environment
// In the case with function c it's defined inside the lexical scope of function a which is declaring the variable myVar = 2
// That's why function c is going to console log 2 and not 1
function b() {
	console.log(myVar);
}

function a() {
  function c() {
    console.log(myVar)
  }
  var myVar = 2;
	b();
	c();
}

var myVar = 1;
a();