function greet(whattosay) {
  return function(name) {
    console.log(whattosay + ' ' + name);
  }
}
// greet('Hi')('Sam');
// The reason why sayHi still have access to the whattosay variable is because the execution context for the outer function
// Will still store the variables in memory for its inner functions to access even though the outer function isn't running anymore
// It's closing in all the variables it suppose to have access to, and it's called a closure (That the scope is intact)
// The javascript itself is creating the closure, but we as programmers can take advantage of it.
var sayHi = greet('Hi');
sayHi('Sam');


function buildFunctions() {
  var arr = [];
  for (var i = 0; i < 3; i++) {
    arr.push(function() {
      console.log(i)
    })
  }
  return arr;
}

var fs = buildFunctions();
fs[0](); // 3
fs[1](); // 3
fs[2](); // 3
// The outer scope variable for each of theses functions sits inside buildFunctions
// When existing the for loop they all have i = 3
// Upon each function invokation they function will look for the variable i first in it's own variable environment and then go up the scope to find it
// In this case it can't find the variable i declared inside its own function so it will go up to buildFunction take print out the variable i which is 3
// The value of i is the value it is at the moment that you execute the function

function buildFunctions2() {
  var arr = [];
  for (var i = 0; i < 3; i++) {
    arr.push(
      (function(j) {
        return function() {
          console.log(j)
        }
      }(i))
    )
  }
  return arr;
}

var fs2 = buildFunctions2();
fs2[0](); // 0
fs2[1](); // 1
fs2[2](); // 2