// This is just a pattern to reduce all the arguments in the function calls, now we instead use functions to call other function
function greet(firstname, lastname, language) {
  if (language === 'en') {
    console.log('Hello ' + firstname + ' ' + lastname)
  }
  if (language === 'es') {
    console.log('Hola ' + firstname + ' ' + lastname)
  }
}

function greetEnglish(firstname, lastname) {
  greet(firstname, lastname, 'en')
}

function greetSpanish(firstname, lastname) {
  greet(firstname, lastname, 'es')
}

greetEnglish('Sam', 'Ojling');
greetSpanish('Sam', 'Ojling');