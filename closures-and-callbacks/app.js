// A function you give another function, to be run when the other function is finished
// So the function you invoke calls back by calling the function you gave it when it finished.
// You call function a a() and give it function b a(b()). When function a finishing running it calls function b
function sayHiLater() {
  var greeting = 'Hi!';

  setTimeout(function () {
    console.log(greeting);
  }, 3000);
}

sayHiLater();

function tellMeWhenDone(callback) {
  var a = 1000; // some work
  var b = 2000; // some work

  callback(); // the callback, it runs the function I give it.
}

tellMeWhenDone(function() {
  console.log('I am done')
});

tellMeWhenDone(function() {
  console.log('All done...')
});