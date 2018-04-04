var arr1 = [1, 2, 3];
var arr2 = []; // [2, 4, 6]

// A regular loop to double the value of the original array and put it into a new array
for (var i = 0; i < arr1.length; i++) {
  arr2.push(arr1[i] * 2);
}

// Putting this code into a function lets us create ways to test for multiple things without changing much code
function mapForEach(arr, fn) {
  var newArr = [];
  for (var i = 0; i < arr.length; i++) {
    newArr.push(fn(arr[i])); // invokes the function and passes in the number from the array to the function (fn(1)) for example
  }
  return newArr;
}

var arr3 = mapForEach(arr1, function(item) {
  return item * 2;
});

var arr4 = mapForEach(arr1, function(item) {
  return item > 2;
});

var checkPastLimit = function(limiter, item) {
  return item > limiter;
};

var arr5 = mapForEach(arr1, checkPastLimit.bind(this, 1));

var checkPastLimitSimplified = function(limiter) {
  return function(limiter, item) {
    return item > limiter;
  }.bind(this, limiter);
};

var arr6 = mapForEach(arr1, checkPastLimitSimplified(2));


