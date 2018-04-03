// var arr = new Array();
// Array literal syntax
// Arrays in javascript can hold different types of primitives, objects and functions
var arr = [
  1,
  false,
  {
    name: 'Sam',
    address: '1325 Mason st'
  },
  function(name) {
    var greeting = 'Hello ';
    console.log(name + greeting);
  },
  "hello"
];

console.log(arr);
arr[3](arr[2].name);