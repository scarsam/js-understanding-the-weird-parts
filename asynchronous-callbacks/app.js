// Regular functions ar getting stacked in the execution stack. But for events which callbacks functions gets placed in a different stack called the event stack.
// This stack won't run until the execution call stack is cleared. In this case we won't see the log 'click event!' 
// until both finished function and finished execution have been logged.
// long running function
function waitThreeSeconds() {
  var ms = 3000 + new Date().getTime();
  while (new Date() < ms){}
  console.log('finished function');
}

function clickHandler() {
  console.log('click event!');
}

// listen for the click event
document.addEventListener('click', clickHandler);


waitThreeSeconds();
console.log('finished execution');