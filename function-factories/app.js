// Every time you invoke this function it will create a new execution context
function makeGreeting(language) {
  return function(firstname, lastname) {
    if (language === 'en') {
      console.log('Hello ' + firstname + ' ' + lastname);
    } else if (language === 'es') {
      console.log('Hola ' + firstname + ' ' + lastname);
    }
  }
}

// Creates its own execution context which closure points to the language variable 'en'
var greetEnglish = makeGreeting('en');
// Creates its own execution context which closure points to the language variable 'es'
var greetSpanish = makeGreeting('es');

// Look for language in the scope chain and then look for the argument to print out the names
// At this point we don't have access to the language variable anymore
greetEnglish('Sam', 'Ojling');
greetSpanish('Sam', 'Ojling');

// #1 Global execution context (makeGreeting(), greetEnglish, greetSpanish)
// #2 Line 13 makeGreeting() and creates a makeGreeting execution context with the variable environments set to 'en'.
// It also returns an new function and then pops itself of the execution stack. But without throwing away it's variable environment
// #3 Line 15 makeGreeting() and creates a makeGreeting execution context with the variable environments set to 'es'.
// It also returns an new function and then pops itself of the execution stack. But without throwing away it's variable environment
// #4 Line 19 calls the returned function and creates a new execution context with the 'Sam' 'Ojling' arguments passed to the variable environment
// It then knows which execution context it was created from (which function) and goes to look into the scope of that function to find variables. It forms it's own closure!
// #4 Line 20 calls the returned function and creates a new execution context with the 'Sam' 'Ojling' arguments passed to the variable environment
// It then knows which execution context it was created from (which function) and goes to look into the scope of that function to find variables. It forms it's own closure!
// The point is to know that every time you invoke a function it will create its own execution context. Any function created inside of it, will point to that execution context.